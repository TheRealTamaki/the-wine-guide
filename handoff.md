# The Wine Guide — Handoff

Last updated: 2026-04-14 (evening update — quiz, methodology box, local image skill)

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
- [x] **content/** — CONTEXT.md + REFERENCES.md + `workflows/CONTEXT.md` (4-stage pipeline: brief > draft > review > final) + `docs/voice-guide.md`
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
- [x] Component library: ArticleCard, CategoryBadge, WineTip, AffiliateCTA, AffiliateDisclosure, PairingTable, ComparisonTable, TableOfContents, Breadcrumbs, RelatedArticles, TopPicks
- [x] Responsive design / mobile nav (hamburger drawer)
- [x] Affiliate link component with `rel="nofollow sponsored"`
- [x] Sitemap via `@astrojs/sitemap`

### Site Design Polish
- [x] **No em-dashes** in any reader-facing copy
- [x] **No juxtaposition patterns** in copy
- [x] WineTip callout boxes: no icon/label by default, only shows label if custom `title` prop passed
- [x] Prose body text colour set to `#000000` (black)
- [x] H1 and sub-head contained inside prose column width (`max-width: var(--w-prose)`)
- [x] CTA buttons: 5px rounded corners, no underlines

### AffiliateCTA Component (upgraded)
- [x] Large wine bottle image on the left (clickable, links to product page)
- [x] SVG ring chart score indicators per critic (e.g. "92 James Suckling") with `shape-rendering: geometricPrecision`
- [x] Score ring accuracy fixed: uses actual SVG circumference math (`2 * PI * r`) for correct fill percentage
- [x] Star rating (out of 5) below wine name, derived from average critic scores
- [x] "Great with:" food pairing tags
- [x] Green `#6ab165` CTA buttons ("Check Price on Wine.com") with 5px rounded corners
- [x] White text on hover (CSS class, not inline JS)
- [x] CTA button centred on mobile, left-aligned on desktop
- [x] Props: `href`, `label`, `store`, `image`, `description`, `scores` (array), `pairings` (array)
- [x] No open_in_new icon

### Top 3 Picks Sidebar (new component)
- [x] `src/components/ui/TopPicks.astro` — sits below TOC in sticky sidebar
- [x] Card-style layout with wine bottle image, ranking badge (#1, #2, #3), wine name, highlight text
- [x] Green "Check Prices" CTA button per card linking to wine.com product page
- [x] Hover state: green border highlight
- [x] Auto-extracted from first 3 h2 headings for listicle template articles
- [x] Image/href data defined in `src/pages/best-wines/[...slug].astro` per article

### Top 3 Picks Inline Cards (in-body)
- [x] `src/components/content/TopPicksInline.astro` — card row placed directly under the article intro
- [x] Three cards side-by-side: wine image, rank badge, 5-star derived rating, name, region/grape, critic score, "Check Price" CTA
- [x] Editor's Pick marker on the first card, green border and elevated shadow
- [x] Heading simplified to plain centred "Our Top 3 Picks" (no star graphics, no decorative rules) per latest iteration

### WineQuiz — Interactive Matching Tool
- [x] `src/components/content/WineQuiz.astro` — placed at the bottom of listicle articles
- [x] Persistent split layout: questions on the left, hero copy ("Let's find the right bottle for you.") + wine-glass photo on the right
- [x] Three questions: food on the table, occasion, classic vs adventurous
- [x] 5-second "Finding Your Match" calculating step with animated spinner and four rotating status labels before the reveal
- [x] Scoring: food match = 3 pts, occasion = 2 pts, style = 2 pts. Highest score wins, lower wine number breaks ties
- [x] Result reveal: matched bottle card with image, score, critic, blurb, affiliate CTA + runner-up + "Retake the Quiz" button
- [x] Pill-style answer buttons, burgundy hover, three-dot step progress indicator
- [x] Keyboard focus states, `prefers-reduced-motion` handled, inline SVG icons only (no emojis)
- [x] Wine-glass hero photo: `public/images/pexels-15103775.webp` (Pexels — Skyler Ewing), attribution in sr-only caption

### MethodologyBox — "How We Chose" Callout
- [x] `src/components/content/MethodologyBox.astro` — centred callout at the very bottom of the article
- [x] Headline "How We Chose These Wines" + centred intro, then a stacked list of criteria (one per row)
- [x] Six article-verified criteria: regions that over-deliver, winemaker pedigree, 90+ critic scores, multi-critic agreement, customer ratings cross-check, in-stock on wine.com under $20
- [x] **Factual integrity rule:** every claim in a MethodologyBox must be verifiable against the article it appears on. No fabricated methodology (no "blind-tasted", no "re-checked monthly" unless actually true)
- [x] No icons, no em-dashes — plain text inside a simple warm cream callout, matches WineTip styling

### Section Headings
- [x] "Our Top 3 Picks" and other in-article section headings are centred (no decorative rules or icons)

### Content Written (3 articles)
- [x] `how-to-taste-wine` — Wine Basics, TOFU, featured
- [x] `best-red-wine-under-20` — Best Wines, BOFU, featured, affiliate disclosure
- [x] `wine-and-cheese-pairing` — Pairing, MOFU
- All three written to the Belgray brand voice: conversational, benefit-driven, specific, no em-dashes, no juxtaposition patterns

### best-red-wine-under-20 Article Details
- [x] 10 wines sourced from wine.com, all under $20, all 90+ critic scores
- [x] Wine.com product page links and Cloudinary CDN bottle images for all 10
- [x] No prices shown (wine.com uses geographic pricing by state) — "Check Price" strategy instead
- [x] Persuasion psychology techniques applied: storytelling, Forer Effect, serial positioning, regret aversion, affective forecasting
- [x] Scores and food pairings passed as structured data to AffiliateCTA component
- [x] Top 3 picks sidebar configured with images/links for this article
- [x] Inline Top 3 Picks card row above the list
- [x] `WineTip` price-varies-by-state callout placed above the list
- [x] `WineQuiz` (matching tool) at the bottom of the article
- [x] `MethodologyBox` ("How We Chose These Wines") below the quiz, claims cross-checked against the article

### SEO Keyword Plan
- [x] `wine-site-seo-keywords.xlsx` reviewed and documented
- [x] 176 pages planned across 3 funnel stages:
  - **BOFU (75 pages):** Buying guides, comparisons, reviews, gift guides, seasonal, pillar pages, info products
  - **MOFU (78 pages):** Pairing guides, wine types, grape varieties, wine regions, comparisons, educational
  - **TOFU (23 pages):** How-to guides, educational basics, health topics, info products
- [x] "Best Wine For" tab = scratchpad, ignore it
- [x] URL slugs already defined in the spreadsheet — always match them exactly

### Local Skills
- [x] `.claude/skills/wine-imagegen/` — project-scoped image generation skill
  - Wraps kie.ai's Nano Banana 2 at 1K resolution
  - Pre-configured API key baked into the script (override via `WINE_IMAGEGEN_KEY` env var)
  - Auto-enhances prompts with editorial wine styling (warm moody lighting, burgundy tones, no text/logos)
  - Downloads JPG → converts to WebP (max 1600px, quality 85) → saves to `public/images/<name>.webp`
  - Strict "one generation per request" rule enforced in `SKILL.md`

### SEO Skill Routing
- [x] Decision guide added to `seo/CONTEXT.md`
- [x] **`/neuronwriter-seo`** — Pillar pages, high-volume BOFU pages (5K+ volume, Priority 1). Paid credits.
- [x] **`/beuron-seo`** — All other pages (grape, region, pairing, TOFU, lower-priority BOFU). Self-hosted, free.

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
- 3-workspace ICM structure: research > content > seo
- Content pipeline: brief > draft > review > final
- `/humanizer` mandatory before any draft enters review
- NeuronWriter for big pages, Beuron for the rest
- Affiliate approach: natural recommendations, max 2-3 per article
- URL slugs locked in via spreadsheet — don't deviate
- Brand voice: Belgray/Talking Shrimp copywriting principles — conversational, benefit-driven, reader-centred
- No em-dashes anywhere in copy
- No juxtaposition sentence patterns ("not X, just Y")
- 5px rounded corners on CTA buttons and affiliate cards
- No prices displayed (wine.com uses geographic pricing) — "Check Price" CTA strategy
- Green `#6ab165` for CTA buttons, white text on hover
- AffiliateCTA: scores as SVG ring charts, star ratings from averaged scores, food pairing tags
- Top 3 Picks sidebar for listicle articles with bottle images and direct purchase CTAs
- Inline Top 3 Picks card row placed directly under the article intro for listicle articles
- WineTip boxes: no icon/label by default, content-only
- Prose body text: black (`#000000`)
- H1/sub-head contained within prose column width
- Section headings centre-aligned, no decorative rules or icon accents
- Interactive WineQuiz at the bottom of listicle articles: 3 questions, 5-second calculating screen, match + runner-up + retake
- MethodologyBox ("How We Chose These Wines") below the quiz — centred callout, plain row list, every criterion must be verifiable against the article it appears on
- Wine-related imagery generated locally via `.claude/skills/wine-imagegen/` (kie.ai Nano Banana 2, 1K), saved as WebP to `public/images/`
