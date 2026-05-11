# SEO Workspace

Last updated: 2026-04-25

## What This Workspace Is

> **SEO tool for ALL article types (BOFU + MOFU): `beuron-seo`.** The `neuronwriter-seo` skill is NOT used on this site. Beuron-scored term packs live at `research/competitor-data/[keyword]/scored_terms.json`. Re-use existing packs whenever they exist; re-running Beuron costs Firecrawl credits.

SEO auditing and post-hoc term coverage analysis. **Note: for new articles, SEO optimization now happens inline on the draft in `content/02-drafts/`, not as a separate stage.** Beuron terms are pulled at brief time (Stage 1) and absorbed during drafting (Stage 2). One gap sweep at polish time (Stage 3). No `seo/optimized/` hop for new articles.

This workspace is now primarily for:
- **Auditing already-shipped pages** — pull NW terms and check coverage of live articles
- **Re-optimising shipped articles** based on GSC data
- **Running standalone keyword audits** for new topic research

Upstream: live pages in `src/content/articles/`. Downstream: findings flow back into the article draft in `02-drafts/` for re-deploy via `scripts/deploy-listicle.mjs`.

---

## What to Load

| Task | Load These | Skip These |
|------|-----------|------------|
| Audit a live article's SEO coverage | Live MDX from `src/content/articles/`, `REFERENCES.md` | `optimized/` archive |
| Re-optimise a shipped article | Live MDX from `src/content/articles/`, pull Beuron terms | `optimized/` archive (pre-2026-04-25) |
| Run a keyword audit | `REFERENCES.md`, keyword data from `/research/keywords/` | `optimized/` archive |
| Audit existing pages | `REFERENCES.md`, `docs/seo-checklist.md` | `/content/` pipeline files |
| Check term coverage | Use `/beuron-seo` directly | Everything — tool provides data |

---

## Folder Structure

```
seo/
├── CONTEXT.md          ← You are here
├── REFERENCES.md       ← SEO guidelines, target metrics
├── docs/
│   └── seo-checklist.md ← On-page SEO checklist
├── audits/             ← Page/site audit reports ([topic]-audit.md)
└── optimized/          ← ARCHIVE ONLY (pre-2026-04-25 SEO passes; new articles skip this)
```

---

## The Process

**For new articles: SEO happens in the draft file at Stage 3.** See `content/docs/listicle-template.md`.

**For auditing or re-optimising a live article:**

1. **Load the live MDX** from `src/content/articles/[category]/[slug].mdx`
2. **Run term analysis** — `/beuron-seo` for SERP-based term recommendations
3. **Identify gaps** — list terms missing from the live article
4. **Patch the draft** in `content/02-drafts/[slug]_draft.mdx` (restore the draft from git if needed)
5. **Re-deploy** via `node scripts/deploy-listicle.mjs [slug]`
6. **Log the audit** in `seo/audits/[topic]-audit.md` with before/after scores

---

## Skills & Tools for This Workspace

| Skill / Tool | When to Use | How |
|-------------|-------------|-----|
| `/beuron-seo` | **All article types — BOFU + MOFU.** SERP-based term extraction and content scoring. Uses Firecrawl for competitor scrapes (paid credits per scrape — re-use stored term packs at `research/competitor-data/[keyword]/scored_terms.json` whenever possible). | `/beuron-seo` with target keyword |
| `/dataforseo` | **Need search volume or SERP data for a keyword.** | `/dataforseo` — keyword research queries |
| `/serp-scraper` | **Need to analyze what's currently ranking.** | `/serp-scraper` — scrape top results as markdown |

### Which SEO Skill to Use (Decision Guide)

Use **`/beuron-seo`** for:
- **All article types**: `best-wines/*` listicles, `wine-tools/*`, `gift-guides/*`, `compare/*`, `pairing/*`, `food-wine-pairing/*`, regions, grapes, pillar pages.
- The `neuronwriter-seo` skill is NOT used on this site — for any article type. Do not invoke it.

TOFU/educational pages (`wine-basics/*`, `wine-glossary/*`, `regions/*`, `grapes/*`, `types-of-wine/*`) get Beuron only when the brief calls for it; default for TOFU is voice and structure quality control without an SEO term pass.

### Skills That Could Plug In Here (Not Configured)

- **Schema markup generator** — Add structured data for wine reviews, recipes
- **Internal linking tool** — Suggest cross-links between articles

---

## What NOT to Do

- **Don't keyword-stuff** — Terms must read naturally; if it sounds forced, rewrite the sentence
- **Don't modify the article's voice** — SEO optimization preserves the writer's style
- **Don't skip term analysis** — Gut-feel optimization underperforms data-driven optimization
- **Don't load content pipeline files** — Work only with live articles in `src/content/articles/` and the draft in `02-drafts/`
- **Don't add terms to intro paragraphs** — The intro is where readers decide to stay or leave. Keyword passes degrade it most. Use absorption zones in order: FAQ answers → wine/product descriptions → secondary sections → WineTip callouts. If a term only fits in the intro, skip it.
- **After every keyword pass, review the intro** — Re-read the first three paragraphs against the voice guide. Rewrite any sentence that reads as process-first, clinical, or unnatural before the article ships.
