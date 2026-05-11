# Content — Pipeline

> **SEO tool for ALL article types (BOFU + MOFU): `beuron-seo`.** The `neuronwriter-seo` skill is NOT used on this site. Where this doc says "NeuronWriter terms," read it as Beuron scored term packs from `research/competitor-data/[keyword]/scored_terms.json`. Re-use existing packs; re-running Beuron costs Firecrawl credits.

## What This Folder Is

**4 stages, 2 working files per article.** Old 6-stage pipeline with `03-review/` and `04-final/` folders is deprecated — draft/review/final were byte-identical on most shipped articles, pure ceremony. Now all polish happens in place on the draft file; `draft: true/false` in frontmatter tracks state.

```
01-briefs/[topic]_brief.md      (plan + NeuronWriter terms upfront)
   ↓
02-drafts/[topic]_draft.mdx     (research, write, polish, all in place)
   ↓  scripts/deploy-listicle.mjs
src/content/articles/best-wines/[slug].mdx
```

This applies to listicles (`best-wines/*`), pairing guides, region pages, TOFU educational content, product pages — every page type.

`03-review/`, `04-final/`, and `seo/optimized/` folders are kept as archive of already-shipped articles. New articles skip them.

---

## Stage Routing

| Your Task | Input | Also Load | Output | Skills at This Stage |
|-----------|-------|-----------|--------|---------------------|
| Brief → Draft (listicle) | Brief from `01-briefs/` (with NW terms already pulled) | `../docs/voice-guide.md`, `../docs/listicle-template.md` | Draft in `02-drafts/` with `draft: true` | `/info-gain` if brief feels thin |
| Brief → Draft (informational) | Brief from `01-briefs/` | `../docs/voice-guide.md`, `../docs/informational-template.md` | Draft in `02-drafts/` with `draft: true` | `/info-gain` if brief feels thin |
| Polish in place | Draft from `02-drafts/` | `../docs/voice-guide.md` | Same file, now `draft: false` | `/humanizer` (mandatory), `paragraph-audit` |
| Deploy | Draft with `draft: false` | — | `src/content/articles/best-wines/[slug].mdx` | `scripts/deploy-listicle.mjs` |

---

## Stage Details

### 01-briefs/ — The Plan (~500 words / ~3KB cap)

Content briefs created from research. Each brief defines the article's angle, target keywords, structure, and the full NeuronWriter term lists.

**What a brief includes:**
- Target keyword(s) and search intent
- SERP analysis summary (top 5 wine counts, features)
- Proposed wine lineup count (SERP-driven)
- One novel feature
- **NeuronWriter query ID + full term lists (basic, extended, entity, PAA)** — pulled upfront so the draft writer has them while writing
- Suggested H2/H3 outline matching the strict component order
- Word count target
- Affiliate approach notes

**What a brief does NOT include:**
- Full article prose
- Duplicate SEO tag lists (that's the spreadsheet's job)

**Cap:** ~3KB. If it's longer than the voice guide, you've written the article in the brief.

**File pattern:** `[topic]_brief.md`

### 02-drafts/ — The Working File

The draft file IS the review file IS the final file. Research, write, polish, gap-patch — all in place.

**File pattern:** `[topic]_draft.mdx`

**Frontmatter contract:**
- `draft: true` while in progress
- `draft: false` when ready to deploy

**Skills activate here:**
- `/info-gain` — If the brief's research feels thin, enrich with additional data points
- `/humanizer` — **Mandatory before flipping `draft: false`**
- `paragraph-audit` — Mandatory final gate before deploy
- `/pexels-images` — Source imagery if needed

**Polish sub-steps (all in place, no file-forwarding):**
1. `/humanizer` pass
2. Fact-check wines, producers, regions, vintages
3. Voice sweep (no em-dashes, no "not X, just Y" patterns)
4. Single SEO gap sweep (terms already absorbed from Stage 1 brief, this is the final tidy)
5. Intro re-read against voice guide
6. `paragraph-audit` skill run — fix any 4+ sentence / 80+ word paragraphs in place
7. Flip `draft: false`

### Deploy → src/

Run `node scripts/deploy-listicle.mjs [slug]`. See `../docs/listicle-template.md` Stage 4.

---

## Pipeline Rules

1. **Two files per article. That's it.** Brief + draft. No ceremony copies.
2. **NeuronWriter terms are pulled at brief time, not deploy time.** This is the single biggest time saver — eliminates the write-then-gap-patch loop.
3. **Polish happens in place.** No `03-review/` or `04-final/` files. Frontmatter `draft: true/false` is the only state marker.
4. **The writer has creative freedom within the voice guide.** The brief defines the contract. The writer decides how to fulfill it.
5. **Nothing ships without `/humanizer` AND `paragraph-audit`.** Both are gates, both run on the same draft file.
6. **Deploy is scripted.** `scripts/deploy-listicle.mjs` handles validation + copy + build + verify.
