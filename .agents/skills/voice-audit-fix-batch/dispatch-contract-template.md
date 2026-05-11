# Voice Fix Sub-Agent Contract — {SLUG}

You are fixing brand-voice violations in `src/content/articles/{CATEGORY}/{SLUG}.mdx`.

## ABSOLUTE RULE: NO PAID API CALLS

No NeuronWriter API. No Firecrawl. No DataForSEO. No Perplexity. No Exa. No paid LLM endpoints.
Use grep only. The orchestrator handles any SEO scoring that needs an API.

If you find yourself about to call a paid endpoint, stop and use grep instead. The orchestrator
prefers a grep-based term-preservation check over a perfect SEO score that costs credits.

## ABSOLUTE RULE: ONLY EDIT YOUR ASSIGNED FILE

You may edit `src/content/articles/{CATEGORY}/{SLUG}.mdx`. You may NOT edit any other file under
`src/`, `content/`, or anywhere else. Confirm in your return that no other file was touched.

---

## Reads (do these first, in this order)

1. `C:\Users\Jade\Desktop\Claude B\Wineology\CLAUDE.md`
2. `C:\Users\Jade\Desktop\Claude B\Wineology\content\docs\voice-guide.md`
3. The target article: `src/content/articles/{CATEGORY}/{SLUG}.mdx`

---

## Violations to fix

{VIOLATIONS}

Common patterns:

- **Em-dashes (`—`)** — replace with full stop, comma, or colon. Each replacement is
  sentence-level judgment, not blind find/replace. Read the surrounding clauses and pick the
  punctuation that makes the rhythm work. A full stop signals a hard pivot; a comma keeps a
  related thought attached; a colon introduces a clarification or list.

- **"not X, just Y" / "this isn't X. It's Y" / "not X. Just Y"** — rewrite to say the positive
  thing directly. The voice guide treats these as a tell because they read as defensive. See
  examples in the voice guide.

- **Banned phrases** ("world of wine", "wine journey", "let's dive in") — delete and rephrase the
  surrounding sentence. Don't substitute another marketing platitude.

- **Other obvious voice-guide violations** — only fix what's clearly off. Do not rewrite anything
  that's merely stylistically different from your taste.

---

## SEO preservation (grep-based, no API)

Before edits: grep the article for the wine names, varietal names (cabernet, merlot, pinot,
malbec, chardonnay, sauvignon blanc, etc.), region names, and the article's primary keyword.
Note the counts.

After edits: re-grep the same list. Confirm zero terms removed. If a count dropped, restore the
removed term in a way that fits the new sentence.

---

## What to return to the orchestrator

Return all 4 items. The orchestrator reads RAW output, not your interpretation of it.

### 1. RAW em-dash count
```
grep -c "—" src/content/articles/{CATEGORY}/{SLUG}.mdx
```
Must output `0`.

### 2. RAW banned-pattern check
```
grep -nEi "not [a-z]+, just|isn't [a-z]+\. (It's|Just)|not [a-z]+\. (It's|Just)" src/content/articles/{CATEGORY}/{SLUG}.mdx
```
Must output nothing.

### 3. Term-preservation summary

Before/after counts for the wine names, varietals, regions, and primary keyword you tracked.
Confirm zero terms removed.

### 4. Brief edit list

One line per change, format: `Line N: "before" → "after" (reason)`. Keep it terse.

### 5. Confirmation that no other file was touched

One line: "Edits restricted to {SLUG}.mdx — no other files modified."

---

**Paste raw terminal output. If a check fails, fix the file and re-run before returning.**

Working directory: `C:\Users\Jade\Desktop\Claude B\Wineology`
