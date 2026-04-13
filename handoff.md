# The Wine Guide — Handoff

Last updated: 2026-04-13

## What This Project Is

Wine education blog and affiliate site built on Astro. Targets everyday wine enthusiasts with informative content about wine regions, grape varieties, tasting guides, and buying recommendations. Revenue via affiliate links (Wine.com, Vivino, Amazon for tools/accessories) and info products.

---

## What's Been Done

### Astro Setup
- [x] Astro installed with minimal template, TypeScript (strictest)
- [x] `npm run dev` / `npm run build` / `npm run preview` all working
- [x] Default Astro project structure in `/src/`

### Jake Clief / ICM Filetree
- [x] Full 3-workspace ICM architecture scaffolded
- [x] **CLAUDE.md** — Root map with routing table, folder structure, naming conventions, cross-workspace flow
- [x] **research/** — CONTEXT.md + REFERENCES.md. Skills wired: `/info-gain`, `/reddit-research`, `/dataforseo`, `/neuronwriter-seo`
- [x] **content/** — CONTEXT.md + REFERENCES.md + `workflows/CONTEXT.md` (4-stage pipeline: brief → draft → review → final) + `docs/voice-guide.md`
- [x] **seo/** — CONTEXT.md + REFERENCES.md + `docs/seo-checklist.md`. SEO skill decision guide included.
- [x] All working directories created with .gitkeep files

### SEO Keyword Plan
- [x] `wine-site-seo-keywords.xlsx` reviewed and documented
- [x] 176 pages planned across 3 funnel stages:
  - **BOFU (75 pages):** Buying guides, comparisons, reviews, gift guides, seasonal, pillar pages, info products
  - **MOFU (78 pages):** Pairing guides, wine types, grape varieties, wine regions, comparisons, educational
  - **TOFU (23 pages):** How-to guides, educational basics, health topics, info products
- [x] "Best Wine For" tab = scratchpad, ignore it
- [x] URL slugs already defined in the spreadsheet — always match them exactly

### SEO Skill Routing
- [x] Decision guide added to `seo/CONTEXT.md`
- [x] **`/neuronwriter-seo`** → Pillar pages, high-volume BOFU pages (5K+ volume, Priority 1). Paid credits.
- [x] **`/beuron-seo`** → All other pages (grape, region, pairing, TOFU, lower-priority BOFU). Self-hosted, free.

---

## What Still Needs to Be Done

### Site Build (Astro)
- [ ] Design system / theme chosen (colors, fonts, layout style)
- [ ] Base layout and page templates created in `/src/`
- [ ] Navigation structure built (matches URL slug hierarchy from spreadsheet)
- [ ] Homepage designed and built
- [ ] Component library started (article cards, pairing tables, affiliate CTAs, etc.)
- [ ] Responsive design / mobile layout
- [ ] SEO meta tags component (title, description, OG tags)
- [ ] Affiliate link component with `rel="nofollow sponsored"`

### Content Production
- [ ] No content briefs written yet — `content/01-briefs/` is empty
- [ ] No drafts written yet
- [ ] Voice guide (`content/docs/voice-guide.md`) exists but needs real examples from the user
- [ ] `content/REFERENCES.md` needs example articles the user likes
- [ ] Content calendar / prioritization of which pages to write first (use Priority column from spreadsheet)

### Research
- [ ] No research briefs written yet — `research/topics/` is empty
- [ ] Competitor URLs not yet added to `research/REFERENCES.md`
- [ ] No keyword analysis done yet beyond the master spreadsheet

### SEO
- [ ] No pages optimized yet — `seo/optimized/` and `seo/audits/` are empty
- [ ] No SEO term analysis run on any keywords yet

### Infrastructure
- [ ] No git repo initialized
- [ ] No deployment target chosen (Netlify, Vercel, Cloudflare Pages, etc.)
- [ ] No analytics set up
- [ ] No sitemap or robots.txt configured
- [ ] No image optimization pipeline

---

## Key Files to Read First

| File | What It Tells You |
|------|-------------------|
| `CLAUDE.md` | Project map, routing table, naming conventions |
| `wine-site-seo-keywords.xlsx` | All 176 target pages with keywords, slugs, volume, priority |
| `seo/CONTEXT.md` | Which SEO skill to use for which pages |
| `content/docs/voice-guide.md` | Writing tone and style rules |
| `content/workflows/CONTEXT.md` | Content pipeline stages |

---

## Decisions Already Made

- Astro as framework (static site, minimal template)
- TypeScript strictest mode
- 3-workspace ICM structure: research → content → seo
- Content pipeline: brief → draft → review → final
- `/humanizer` mandatory before any draft enters review
- NeuronWriter for big pages, Beuron for the rest
- Affiliate approach: natural recommendations, max 2-3 per article
- URL slugs locked in via spreadsheet — don't deviate
