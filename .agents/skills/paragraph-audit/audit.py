#!/usr/bin/env python3
"""
paragraph-audit — flag Wine Guide listicle paragraphs over the length cap.

Hard cap: 4 sentences max, ~80 words max, per reader-facing paragraph.
Prints violations with line numbers + a 12-word preview.
Exit 0 = clean, exit 1 = violations found.
"""

import re
import sys
from pathlib import Path

# Force UTF-8 stdout on Windows so paragraph previews with é/è/ü render cleanly.
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

SENTENCE_CAP = 4
WORD_CAP = 80

ABBREVIATIONS = [
    "Dr.", "St.", "Mr.", "Mrs.", "Ms.", "Jr.", "Sr.", "Prof.",
    "e.g.", "i.e.", "vs.", "No.", "etc.", "U.S.", "U.K.", "cf.",
]

# JSX components whose internal prose IS reader-facing and should be audited.
AUDIT_INNER_COMPONENTS = {"WineTip"}

# JSX components whose content is structured data — skip entirely.
SKIP_COMPONENTS = {"AffiliateCTA", "TopPicksInline", "WineQuiz", "MethodologyBox"}


def annotate_lines(raw_lines):
    """
    Walk the file line by line and label each line with a state.
    Returns list of states; only 'prose' lines get counted later.
    """
    states = [None] * len(raw_lines)
    i = 0
    in_code = False
    in_jsx_skip = None      # component name whose block we're skipping
    in_jsx_audit = None     # component name whose content we're auditing (e.g. WineTip)

    # Frontmatter block at top (--- ... ---)
    if raw_lines and raw_lines[0].strip() == "---":
        states[0] = "frontmatter"
        i = 1
        while i < len(raw_lines):
            states[i] = "frontmatter"
            if raw_lines[i].strip() == "---":
                i += 1
                break
            i += 1

    while i < len(raw_lines):
        line = raw_lines[i]
        stripped = line.strip()

        # Code fence toggle
        if stripped.startswith("```"):
            states[i] = "code"
            in_code = not in_code
            i += 1
            continue
        if in_code:
            states[i] = "code"
            i += 1
            continue

        # Mid-block: skipping a non-audit JSX component
        if in_jsx_skip:
            states[i] = "jsx_skip"
            if f"</{in_jsx_skip}>" in line or stripped.endswith("/>"):
                in_jsx_skip = None
            i += 1
            continue

        # Mid-block: inside a WineTip (content is prose)
        if in_jsx_audit:
            if f"</{in_jsx_audit}>" in line:
                states[i] = "jsx_close"
                in_jsx_audit = None
            else:
                states[i] = "prose"
            i += 1
            continue

        if stripped == "":
            states[i] = "blank"
            i += 1
            continue

        if stripped.startswith("import "):
            states[i] = "import"
            i += 1
            continue

        if stripped.startswith("#"):
            states[i] = "heading"
            i += 1
            continue

        if stripped == "---":
            states[i] = "hr"
            i += 1
            continue

        if stripped.startswith("|"):
            states[i] = "table"
            i += 1
            continue

        # Bullet / numbered list item — each counts as its own short unit, skip.
        if re.match(r"^[-*]\s", stripped) or re.match(r"^\d+\.\s", stripped):
            states[i] = "bullet"
            i += 1
            continue

        # JSX component opening?
        jsx_match = re.match(r"^<(\w+)", stripped)
        if jsx_match:
            component = jsx_match.group(1)
            self_closing = stripped.endswith("/>")
            closes_here = f"</{component}>" in line

            if self_closing or closes_here:
                # Whole component on one line
                if component in AUDIT_INNER_COMPONENTS and closes_here and not self_closing:
                    # e.g. <WineTip>text</WineTip> on one line — count as prose
                    states[i] = "prose"
                else:
                    states[i] = "jsx_skip"
                i += 1
                continue

            # Multi-line JSX — start of a block
            if component in AUDIT_INNER_COMPONENTS:
                states[i] = "jsx_open"
                in_jsx_audit = component
            else:
                states[i] = "jsx_skip"
                in_jsx_skip = component
            i += 1
            continue

        # Otherwise: prose
        states[i] = "prose"
        i += 1

    return states


def group_paragraphs(raw_lines, states):
    """
    Collapse consecutive 'prose' lines into paragraphs.
    Returns list of (start_line_number_1_indexed, joined_text).
    """
    paragraphs = []
    current_lines = []
    current_start = None

    for idx, state in enumerate(states):
        if state == "prose":
            if current_start is None:
                current_start = idx + 1  # 1-indexed
            current_lines.append(raw_lines[idx].strip())
        else:
            if current_lines:
                text = " ".join(current_lines).strip()
                if text:
                    paragraphs.append((current_start, text))
                current_lines = []
                current_start = None

    if current_lines:
        text = " ".join(current_lines).strip()
        if text:
            paragraphs.append((current_start, text))

    return paragraphs


def count_sentences(text):
    """Count sentence terminators (. ! ?) that aren't inside abbreviations or decimals."""
    # Use a placeholder unlikely to occur in prose
    DOT = "\u2400"
    cleaned = text
    for abbr in ABBREVIATIONS:
        cleaned = cleaned.replace(abbr, abbr.replace(".", DOT))
    # Decimals and numeric tokens like 14.5, $14.97, 92.3%
    cleaned = re.sub(r"(\d)\.(\d)", lambda m: f"{m.group(1)}{DOT}{m.group(2)}", cleaned)
    # Initials like No.1, U.S.A.
    cleaned = re.sub(r"\b([A-Z])\.(?=[A-Z0-9])", lambda m: f"{m.group(1)}{DOT}", cleaned)
    # Ellipses — collapse to single marker
    cleaned = cleaned.replace("...", ".")
    # Count [.!?] followed by whitespace OR end of string
    matches = re.findall(r"[.!?](?=\s|$)", cleaned)
    return len(matches)


def count_words(text):
    # Strip markdown emphasis markers so they don't inflate the count
    cleaned = re.sub(r"[*_`]", "", text)
    return len(cleaned.split())


def preview(text, n=12):
    # Strip markdown links and emphasis markers for the preview
    cleaned = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", text)
    cleaned = re.sub(r"[*_`]", "", cleaned)
    words = cleaned.split()
    snippet = " ".join(words[:n])
    if len(words) > n:
        snippet += "..."
    return snippet


def audit(path):
    p = Path(path)
    if not p.exists():
        print(f"ERROR: file not found — {path}", file=sys.stderr)
        return None

    raw = p.read_text(encoding="utf-8").splitlines()
    states = annotate_lines(raw)
    paragraphs = group_paragraphs(raw, states)

    violations = []
    for line_no, text in paragraphs:
        sentences = count_sentences(text)
        words = count_words(text)
        if sentences > SENTENCE_CAP or words > WORD_CAP:
            violations.append((line_no, sentences, words, text))

    return violations, len(paragraphs)


def main():
    if len(sys.argv) < 2:
        print("Usage: audit.py <path-to-mdx> [<path-to-mdx> ...]", file=sys.stderr)
        sys.exit(2)

    total_violations = 0
    for path in sys.argv[1:]:
        result = audit(path)
        if result is None:
            total_violations += 1
            continue

        violations, paragraph_count = result
        filename = Path(path).name

        if not violations:
            print(f"PASS: {filename} — {paragraph_count} paragraphs audited, zero violations.")
            continue

        print(f"\nVIOLATIONS in {filename}:\n")
        for line_no, sentences, words, text in violations:
            flags = []
            if sentences > SENTENCE_CAP:
                flags.append(f"{sentences} sentences")
            if words > WORD_CAP:
                flags.append(f"{words} words")
            print(f"Line {line_no}: {' / '.join(flags)}")
            print(f'  "{preview(text)}"')
            print()

        print(
            f"Total: {len(violations)} violations in {filename}. "
            "Split at theme transitions, preserve copy verbatim."
        )
        total_violations += len(violations)

    sys.exit(1 if total_violations > 0 else 0)


if __name__ == "__main__":
    main()
