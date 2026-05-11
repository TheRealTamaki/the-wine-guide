---
name: paragraph-audit
description: Scan a Wine Guide listicle MDX file and flag every reader-facing paragraph that exceeds 4 sentences or ~80 words. Final gate before marking a listicle shipped, and used for retroactive QA on existing pages. Invoke whenever a listicle is about to deploy, whenever a paragraph-length complaint lands on a shipped page, or whenever editing the body prose, FAQ answers, or educational primers of an MDX under `src/content/articles/best-wines/`.
---

# paragraph-audit

## Why this skill exists

Long paragraphs are the #1 retroactive fix on Wine Guide listicles. The rule lives in `content/docs/voice-guide.md` (line 128) and `content/docs/listicle-template.md` (the "Paragraph length — applies everywhere" section), but writers consistently drift past the cap during the SEO absorption pass and the educational primer sections. Four of four listicles shipped in the 2026-04-18 batch (`good-cheap-wine`, `best-moscato-wine`, `best-prosecco`, `best-sweet-wines`) needed manual splits after deploy.

A deterministic audit closes the loop. If the script says a paragraph is over cap, it is. Split it.

## What counts as a paragraph

Reader-facing prose only:

- Intro paragraphs
- Wine descriptions under each H3
- Educational primer sections (`Prosecco 101`, `Moscato vs Moscato d'Asti`, `More Worth Knowing`, `How Sweet Wine Is Made`)
- FAQ answer bodies (the prose after each `### Question` heading)
- `<WineTip>` content — audited, because it's prose the reader sees

What gets skipped automatically:

- YAML frontmatter
- `import` lines
- Markdown tables, headings, horizontal rules, code fences
- Bullet / numbered list items (each is already a short unit)
- JSX structured-data components: `<AffiliateCTA>`, `<TopPicksInline>`, `<WineQuiz>`, `<MethodologyBox>` — these hold props and arrays, not prose

## The cap

- **4 sentences max** per paragraph
- **~80 words max** per paragraph
- Either ceiling trips a violation

The script handles common abbreviations (`Dr.`, `St.`, `e.g.`, `i.e.`, `vs.`, `No.`, `etc.`, `U.S.`), numeric decimals (`14.5%`, `$14.97`), and initials so they don't inflate the sentence count.

## How to run

```bash
python .claude/skills/paragraph-audit/audit.py src/content/articles/best-wines/<slug>.mdx
```

Multiple files at once:

```bash
python .claude/skills/paragraph-audit/audit.py src/content/articles/best-wines/*.mdx
```

Exit codes:

- `0` — all paragraphs under the cap
- `1` — one or more violations
- `2` — bad invocation (no path given)

Clean output example:

```
PASS: good-cheap-wine.mdx — 48 paragraphs audited, zero violations.
```

Violation output example:

```
VIOLATIONS in best-moscato-wine.mdx:

Line 92: 7 sentences / 128 words
  "On the nose, fresh peach, apricot, orange blossom, honeysuckle, ripe pear..."

Line 696: 7 sentences / 135 words
  "Moscato wine made from Muscat Bianco grapes starts like any other..."

Total: 2 violations in best-moscato-wine.mdx. Split at theme transitions, preserve copy verbatim.
```

## How to fix a violation — the preservation rule

When the script flags a paragraph, the fix is to **insert paragraph breaks at natural theme transitions**. Do NOT rewrite sentences, re-order ideas, or trim words. The copy has already passed voice review and Beuron term absorption. The visual chunking is the only thing wrong.

Natural break points to look for:

- A new region or sub-style enters ("Argentine wine beyond..." / "Spanish wine from Rioja...")
- A new topic within the answer (from "how many calories" to "per-glass calculation")
- A transition word signals a shift ("Beyond Riesling...", "On the other hand...", "For a step up...")
- A list-style enumeration inside prose (Brut → Extra Dry → Demi-Sec)

If no natural break exists inside a ≥5-sentence paragraph, that's usually a sign the paragraph is doing too much and the writer should consolidate — but consolidation is a voice-review concern, not an audit concern. Flag it and move on.

## Where this plugs into the pipeline

**Before marking any listicle shipped**, run `paragraph-audit` against the final MDX. If there are violations, split them in place (preserving copy), re-run, and confirm exit code 0.

**Retroactive QA** — Iris can run the script across every shipped listicle to catch drift. Useful after any bulk SEO pass or editorial rework.

## Files in this skill

- `SKILL.md` — this file
- `audit.py` — the parser and reporter

No dependencies beyond Python 3. The script uses only the standard library.
