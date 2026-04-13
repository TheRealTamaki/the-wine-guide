# The Wine Guide — Handoff

Last updated: 2026-04-14

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
- [x] **CLAUDE.md** — Root map with routing table, folder structure, naming conventions, cross-workspace flow. Now includes mandatory brand voice instruction.
- [x] **research/** — CONTEXT.md + REFERENCES.md. Skills wired: `/info-gain`, `/reddit-research`, `/dataforseo`, `/neuronwriter-seo`
- [x] **content/** — CONTEXT.md + REFERENCES.md + `workflows/CONTEXT.md` (4-stage pipeline: brief → draft → review → final) + `docs/voice-guide.md`
- [x] **seo/** — CONTEXT.md + REFERENCES.md + `docs/seo-checklist.md`. SEO skill decision guide included.
- [x] All working directories created with .gitkeep files

### Brand Voice
- [x] Full brand voice guide written at `content/docs/voice-guide.md` — based on Laura Belgray / Talking Shrimp copywriting principles
- [x] 10 core principles: benefits over process, talk to the right person, get in their head, specific beats vague, conversational not clinical, show don't tell, headlines that earn the scroll, reader-centred, sell the result not the process, every page gets a next step
- [x] Banned punctuation: **no em-dashes anywhere**
- [x] Banned sentence patterns: **no juxtaposition setups** ("not X, just Y" / "this isn't X. It's Y.")
- [x] Banned phrases list (journey, world of wine, let's dive in, etc.)
- [x] CLAUDE.md updated: voice guide is **mandatory reading before any content is written**

### Site Build (Astro) — Complete
- [x] Design system / theme: warm cream + deep wine palette, Noto Serif headlines + Plus Jakarta Sans body
- [x] Base layout (`BaseLayout.astro`, `ArticleLayout.astro`) with SEO meta, OG tags, schema.org
- [x] Navigation built and wired to URL hierarchy
- [x] Homepage built: centred hero, featured articles grid, category navigation, latest articles, about strip
- [x] Component library: ArticleCard, CategoryBadge, WineTip, AffiliateCTA, AffiliateDisclosure, PairingTable, ComparisonTable, TableOfContents, Breadcrumbs, RelatedArticles
- [x] Responsive design / mobile nav (hamburger drawer)
- [x] Affiliate link component with `rel="nofollow sponsored"`
- [x] Sitemap via `@astrojs/sitemap`

### Site Design Polish (this session)
- [x] **No rounded corners** on images or callout boxes — all square
- [x] **No em-dashes** in any reader-facing copy
- [x] **No juxtaposition patterns** in copy
- [x] WineTip callout boxes: removed colored thick left border, removed border-radius, now 1px border at reduced opacity
- [x] AffiliateCTA: removed rounded corners, removed `editorial-shadow`, flat 1px border
- [x] AffiliateDisclosure: removed rounded corners, constrained to prose column width (`max-w-[var(--w-prose)]`)
- [x] CTA buttons: square corners (no `rounded-full`), no underlines
- [x] Prose paragraph spacing fixed — `margin-top/bottom: 1.25em` on `.prose p`
- [x] Hero headline: "The Best Place To Learn About Wine." — centred, tighter line-height (`leading-none`), expanded container (`max-w-4xl`)
- [x] Removed decorative "12 Categories / 176 Guides" badge from homepage

### Content Written (3 articles)
- [x] `how-to-taste-wine` — Wine Basics, TOFU, featured
- [x] `best-red-wine-under-20` — Best Wines, BOFU, featured, affiliate disclosure
- [x] `wine-and-cheese-pairing` — Pairing, MOFU
- All three written to the Belgray brand voice: conversational, benefit-driven, specific, no em-dashes, no juxtaposition patterns

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

### Infrastructure
- [x] Git repo initialized, connected to GitHub (origin/main)
- [x] Sitemap and robots.txt configured
- [ ] Deployment target not yet chosen (Netlify, Vercel, Cloudflare Pages)
- [ ] Analytics not yet set up

---

## What Still Needs to Be Done

### Content Production
- [ ] 173 pages still to write (3 done out of 176)
- [ ] No content briefs written yet — `content/01-briefs/` is empty
- [ ] Voice guide exists and is complete — apply it to all new content
- [ ] `content/REFERENCES.md` needs example articles the user likes
- [ ] Prioritize using Priority column from the spreadsheet — write Priority 1 BOFU pages first

### Research
- [ ] No research briefs written yet — `research/topics/` is empty
- [ ] Competitor URLs not yet added to `research/REFERENCES.md`
- [ ] No keyword analysis done yet beyond the master spreadsheet

### SEO
- [ ] No pages optimized yet — `seo/optimized/` and `seo/audits/` are empty
- [ ] No SEO term analysis run on any keywords yet

### Infrastructure
- [ ] Deployment target (Netlify, Vercel, or Cloudflare Pages)
- [ ] Analytics (Plausible or GA4)
- [ ] Image optimization pipeline

---

## Key Files to Read First

| File | What It Tells You |
|------|-------------------|
| `CLAUDE.md` | Project map, routing table, naming conventions, mandatory voice guide instruction |
| `content/docs/voice-guide.md` | **Read before writing anything.** Brand voice, 10 principles, banned punctuation, banned patterns |
| `wine-site-seo-keywords.xlsx` | All 176 target pages with keywords, slugs, volume, priority |
| `seo/CONTEXT.md` | Which SEO skill to use for which pages |
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
- Brand voice: Belgray/Talking Shrimp copywriting principles — conversational, benefit-driven, reader-centred
- No em-dashes anywhere in copy
- No juxtaposition sentence patterns ("not X, just Y")
- Square corners everywhere — no rounded borders on images, callout boxes, or CTA buttons
- No colored shadow borders on callout boxes — 1px border only
