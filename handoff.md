# The Wine Guide — Handoff

Last updated: 2026-04-14

## What This Project Is

Wine education blog and affiliate site built on Astro. Targets everyday wine enthusiasts with informative content about wine regions, grape varieties, tasting guides, and buying recommendations. Revenue via affiliate links (Wine.com, Vivino, Amazon for tools/accessories) and info products.

---

## Repo State

- All work merged into `main` as of commit `e333384`.
- Only one active worktree: `claude/dreamy-edison` (this session's working copy). Will be removed after session ends.
- Three prior worktrees (`fervent-margulis`, `friendly-gagarin`, and `dreamy-edison` itself) were created across earlier sessions via Claude Code's worktree feature. After this session, only `main` should remain.
- Remaining cleanup if you see leftover folders in `.claude/worktrees/`: stop any Node dev servers running in them, then `rm -rf` the directory and `git worktree remove --force <path>` if the registration lingers.

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

### Content Written (4 articles)
- [x] `how-to-taste-wine` — Wine Basics, TOFU, featured
- [x] `best-red-wine-under-20` — Best Wines, BOFU, featured, affiliate disclosure (full listicle template with all 8 required components)
- [x] `best-wine-for-mulled-wine` — Best Wines, BOFU, NeuronWriter-optimized (0 missing terms across basic/extended/entity lists)
- [x] `wine-and-cheese-pairing` — Pairing, MOFU
- All written to the Belgray brand voice: conversational, benefit-driven, specific, no em-dashes, no juxtaposition patterns

### best-red-wine-under-20 Article Details
- [x] 10 wines sourced from wine.com, all under $20, all 90+ critic scores
- [x] Wine.com product page links and Cloudinary CDN bottle images for all 10
- [x] No prices shown (wine.com uses geographic pricing by state) — "Check Price" strategy instead
- [x] Persuasion psychology techniques applied: storytelling, Forer Effect, serial positioning, regret aversion, affective forecasting
- [x] Scores and food pairings passed as structured data to AffiliateCTA component
- [x] Top 3 picks sidebar configured with images/links for this article
- [x] Full listicle template: pricing WineTip, serving-tips WineTip, WineQuiz (all 10 wines tagged across food/occasion/style), MethodologyBox ("How We Chose"), 4 FAQ answers

### best-wine-for-mulled-wine Article Details
- [x] 8 wines: CVNE Rioja Reserva, Ancient Peaks Merlot, Cline Zinfandel, Shatter Grenache, Vina Real Crianza, Hacienda Lopez de Haro, J. Lohr Los Osos Merlot, Louis Jadot Beaujolais
- [x] NeuronWriter query `eccb204ec1c51ae8` optimized to 0 missing terms across all three lists
- [x] 18 additional target keywords added naturally: wine that's, spiced wine, bottle of wine, adding spices, red and white, make your mulled wine, made with red wine, tips for making, wine industry, favorite red, overly sweet, fresh orange, easy-drinking, crowd-pleaser, strawberry notes, ground spices, tablespoon of honey, white wine
- [x] Full template in place: TopPicksInline, pricing WineTip, 8 wine listings, slow-cooker tips WineTip, WineQuiz, MethodologyBox, FAQ
- [x] Top 3 picks sidebar data entered in `src/pages/best-wines/[...slug].astro`

### New Components Built This Session
- [x] **`WineQuiz.astro`** — props-based interactive quiz. Accepts `wines[]` and optional `questions[]` arrays. Scoring: food=3pts, occasion=2pts, style=2pts. Client-side JavaScript matches the highest-scoring wine and displays its card with CTA. Reusable across every listicle.
- [x] **`MethodologyBox.astro`** — "How We Chose" E-E-A-T section. Props: `eyebrow`, `title`, `intro`, `criteria[]`.
- [x] **`AuthorByline.astro`** — circular avatar + name + role + read time. Rendered in `ArticleLayout` header in place of the old category badge + read time row.
- [x] **`TopPicksInline.astro`** — inline top-3 picks cards rendered above the fold in the article body (separate from sidebar TopPicks).
- [x] **`ProductSalesLayout.astro`** — centred, single-column layout for info product pages (`templateType: 'product'`). Uses Schema.org Product type.
- [x] **`AmazonCTA.astro`** and **`GiftItemCTA.astro`** — affiliate CTA variants for Amazon products and gift-guide items (store-aware button colours).

### Author Identity
- [x] Site author is **Claire Bennett, Wine Editor**. Headshot at `/public/images/author-claire.webp` (generated via kie.ai). Rendered on every article via `AuthorByline` in `ArticleLayout`. Do not invent alternate authors — if a new author is needed, ask.

### Content Schema Updates
- [x] `src/content.config.ts` — `templateType` enum extended to include `'product'`

### Listicle Pattern LOCKED
- [x] **`content/docs/listicle-template.md`** created — strict component order, pre-flight checklist, required file touches. Every `best-wines/*` article must follow it.
- [x] CLAUDE.md brand voice section strengthened — component-prop strings explicitly count as content, most-violated rules called out (em-dashes, "not X, just Y")
- [x] CLAUDE.md routing table updated — dedicated row for building listicle pages routing through voice-guide.md → listicle-template.md
- [x] Component order (non-negotiable): Intro → TopPicksInline → WineTip (pricing) → wine listings with AffiliateCTAs → WineTip (tips) → WineQuiz → MethodologyBox → FAQ
- [x] First WineTip is ALWAYS a pricing disclaimer, not tasting advice
- [x] MethodologyBox ALWAYS goes under the quiz, never above the wines
- [x] New listicle pages MUST add a sidebar entry in `src/pages/best-wines/[...slug].astro` → `topPicksData`, or the sidebar renders empty

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
- [ ] 172 pages still to write (4 done out of 176)
- [ ] 73 BOFU listicles remaining (2 done out of 75)
- [ ] Follow `content/docs/listicle-template.md` for every `best-wines/*` page — strict component order
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
| `CLAUDE.md` | Project map, routing table, naming conventions, mandatory voice guide instruction, listicle template pointer |
| `content/docs/voice-guide.md` | **Read before writing anything.** Brand voice, 10 principles, banned punctuation, banned patterns |
| `content/docs/listicle-template.md` | **Read before building any `best-wines/*` page.** Component order, pre-flight checklist, WineQuiz prop contract, required file touches |
| `src/content/articles/best-wines/best-red-wine-under-20.mdx` | Reference implementation — every new listicle should match this structure |
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
- WineTip boxes: no icon/label by default, content-only
- Prose body text: black (`#000000`)
- H1/sub-head contained within prose column width
- Author identity: Claire Bennett, Wine Editor (single byline across site)
- Listicle component order is locked and documented in `content/docs/listicle-template.md` — no deviations
- First WineTip in a listicle is always a pricing disclaimer, never tasting advice
- MethodologyBox sits under the WineQuiz, never above the wine listings
- Every listicle page needs a `topPicksData` entry in `src/pages/best-wines/[...slug].astro` or the sidebar will render empty
- `templateType: 'product'` added to content schema for info product sales pages
- WineQuiz does NOT scroll on initial page load (only on user interaction). Pages always render at the top.
- Table of Contents auto-excludes the FAQ section and all its question H3s. Detection is by H2 text matching `frequently asked questions` or `faqs?`. Don't rename the FAQ heading or it'll start appearing in the TOC again.
- Affiliate retailer names (Wine.com, Amazon, etc.) appear only inside product cards (`AffiliateCTA` props, link URLs, structured critic data). Body prose, intro, WineTip callouts, MethodologyBox criteria, and FAQ answers must use generic phrasing like "the retailer" or "a major retailer's Top 100 list." Reviewer names are kept (e.g., "Wilfred Wong scored it 92") but without the retailer attribution.
- TopPicksInline header is centred, no star icon, no horizontal divider line. Just the "Our Top 3 Picks" H3.

### Skill vs Folder System (decision)

- **Folder system stays for now.** No `/build-listicle` skill yet.
- The listicle pattern is still evolving (5 rule changes in one session: pricing WineTip rule, MethodologyBox placement, FAQ heading naming, retailer-mention rule, WineQuiz scroll fix). A skill today would calcify decisions that are still moving.
- **Revisit after 5–10 more BOFU pages are built by hand.** Once the MDX scaffold stops changing and the per-category quiz tag mappings stabilise, a skill that runs the pre-flight checklist (read voice guide → check NeuronWriter query → scaffold MDX → gap-analysis loop → add topPicksData → build verify) becomes worth building.
- **Lightweight option if friction gets bad sooner:** A `/build-listicle` skill that does nothing but enumerate the pre-flight checks at turn start (zero automation) would catch "you forgot X" moments without locking in the template.
