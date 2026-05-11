# One-Day Rework Execution Plan — The Wine Guide

**Author:** Iris (planner)
**Date:** 2026-04-18
**Scope:** 16 deployed listicles + shared component library + sitewide schema fixes
**Executing specialists:** Lia (Wine Writer), Dae (Design Engineer)
**Source of truth:** `seo/audits/_master-audit-2026-04-18.md` + 16 per-article audits

---

## Part 1 — Executive summary

**Workload.** 12 schema + component tickets for Dae, 16 content tickets for Lia, 2 pre-approval gates for Jade. New wine research on 8 pages (32 net new wines). Zero new research on 8 pages (structure-only reworks). All component work consolidates into one shared SVG primitive (`<DotScaleRow>`) + 8 wrapper components + 1 generic data block + 1 schema fix at layout layer.

**Critical path.** D1 (schema fix, 1hr) runs parallel. Real critical path: **D2 `<DotScaleRow>` primitive (1.5hr) → D3–D10 wrappers in parallel (2hr) → L1/L2 under-price rebuilds (4.5hr wine research dominates) → deploy + NW re-verify per page.** Longest chain: L1 under-20 wine research + draft + SEO pass + deploy ≈ **5hr**.

**Parallelism.** 4 Lia instances + 3 Dae instances + 1 Iris orchestrator = 8 concurrent agents peak. Wave structure below.

**Runtime.** Target 8 working hours end-to-end with the parallel plan. Solo-serial equivalent would be ~28hr.

---

## Part 2 — Dependency graph

**Hard prerequisites (blockers):**
- D1 (schema) blocks nothing (layout-level, page content doesn't depend on it)
- D2 (`<DotScaleRow>` primitive) blocks D3, D4, D5, D6, D7, D8, D9, D10, D11e (all matrix wrappers)
- D3–D10 (wrappers) each block ONE Lia deploy ticket (page that embeds that wrapper)
- D11 (misc components: StyleSelector, ValueRating badge, WineDataBlock, NonDrinkerMatcher, AwardBadge) block specific Lia pages
- L-tickets that need fresh wine research (L1, L2, L3, L4, L5, L7, L8, L10, L12) can start wine research in parallel with all Dae work — research doesn't block on components
- L-tickets NW re-verification (stage 5) can only start once Lia draft + Dae component landed in page

**Independent, fully parallel:**
- D1 and D2 (start together, no shared files)
- All L-ticket wine research (8 parallel wine.com browser sessions possible)
- All L-ticket content restructure for pages without component dependencies (L11, L13, L14, L16 mostly prose)

**THE single blocking critical path:**
D2 (1.5hr) → D6 Flavour Profile radar (1.5hr) → L2 under-30 deploy (1hr NW gap patch + build verify) → **total 4hr minimum on critical chain**. Realistically, L1 under-20 wine research dominates at ~3–4hr even with parallel wine.com scraping, so actual clock = max(4hr chain, 5hr research) = **~5hr**.

---

## Part 3 — Dae's tickets (Design Engineer)

### D1 — Sitewide JSON-LD schema audit + fix (layout-layer)

- **Prerequisites:** none
- **Files to modify:**
  - `src/layouts/ArticleLayout.astro` (FAQPage emission, Article schema author fix, dateModified)
  - `src/components/content/AffiliateCTA.astro` (Review + Rating + AggregateRating emission per wine)
  - `src/layouts/BaseLayout.astro` (verify Organization schema)
- **Files to create:**
  - `seo/audits/schema-hygiene-2026-04-18.md` (audit output)
- **What changes:**
  - `ArticleLayout.astro`: replace current `author: { '@type': 'Organization', name: 'The Wine Guide' }` with `author: { '@type': 'Person', name: 'Claire Bennett', jobTitle: 'Wine Editor' }`. Add `dateModified` emission (currently falls back silently).
  - `ArticleLayout.astro`: detect H2 named `Frequently Asked Questions` or matching `/faqs?/i` and emit `@type: FAQPage` JSON-LD with each H3 + its text content as `Question`/`Answer` pairs. Script this at the layout layer so one fix covers all 16 pages.
  - `AffiliateCTA.astro`: for each wine, emit `@type: Review` with `reviewBody` from `description` prop, `itemReviewed: { @type: Product, name: label, image }`, `reviewRating: { @type: Rating, ratingValue: <computed stars> }`, `author: { @type: Person, name: 'Claire Bennett' }`. Emit `@type: AggregateRating` using the `scores` prop averaged to 5-star scale.
- **Props contract (AffiliateCTA additions, no breaking changes):** existing props unchanged; schema built from existing `label`, `description`, `image`, `scores`, `pairings`.
- **Visual spec:** none — pure JSON-LD emission. No rendered output changes.
- **Acceptance criteria:**
  - `npm run build` clean
  - `grep -c 'FAQPage' dist/best-wines/best-sweet-red-wine/index.html` returns ≥ 1
  - `grep -c '"@type":"Review"' dist/best-wines/best-red-wine-under-20/index.html` returns ≥ 10 (one per wine)
  - Google Rich Results Test passes `FAQPage` + `Review` + `Article` + `Product` on at least 3 representative slugs (sweet-red, red-under-20, non-alc)
  - `seo/audits/schema-hygiene-2026-04-18.md` documents what was missing vs added
- **Test plan:** production build → `grep` on 3 production HTML files → paste dist HTML into Rich Results Test UI → screenshot results into the audit md file.
- **Duration:** 60–90 min

### D2 — `<DotScaleRow>` shared SVG primitive

- **Prerequisites:** none
- **Files to create:**
  - `src/components/viz/DotScaleRow.astro`
- **Props contract:**
  ```ts
  interface Props {
    label: string;              // e.g. "Butter intensity"
    value: number;              // 0–10 position on axis
    scale?: number;             // total dots, default 10
    filledColor?: string;       // default var(--color-green)
    emptyColor?: string;        // default var(--color-border)
    axisLabelLeft?: string;     // e.g. "Subtle"
    axisLabelRight?: string;    // e.g. "Rich"
    size?: 'sm' | 'md';         // default 'sm'
    ariaLabel?: string;         // screen-reader override
  }
  ```
- **Visual spec:**
  - SVG row with 10 circles, filled up to `value`, anchored `shape-rendering: geometricPrecision` (mirror AffiliateCTA ring-chart conventions)
  - Tokens: `var(--color-green)` fill, `var(--color-border)` empty, `var(--color-primary)` label
  - Responsive: SVG `viewBox` scales to 100% of parent width; dots maintain aspect ratio down to 320px viewport
  - Accessibility: `role="img"`, `aria-label` computed as `"${label}: ${value} out of ${scale}"` when not overridden; also rendered as `<span class="sr-only">` sibling for assistive tech
- **Acceptance criteria:**
  - Renders cleanly at 320px, 768px, 1280px viewports (tested against existing Tailwind breakpoints)
  - No console errors
  - Unused variant props (size='md') work without layout break
  - Does NOT scroll into view on mount
- **Test plan:** create `src/pages/_dev/dotscalerow.astro` throwaway harness that imports and renders 8 example rows at varied values. `npm run build` + open in preview. Delete harness when D3–D10 accept the component.
- **Duration:** 60–90 min

### D3 — `<DrynessFingerprint>` wrapper (for `best-dry-red-wines`)

- **Prerequisites:** D2
- **Files to create:** `src/components/viz/DrynessFingerprint.astro`
- **Props contract:**
  ```ts
  interface Props {
    wineName: string;
    residualSugar: number;   // g/L, 0–10 visual scale
    tannin: number;          // 1–10
    acidity: number;         // 1–10
    alcoholWeight: number;   // 1–10
  }
  ```
- **Implementation:** 4 stacked `<DotScaleRow>` instances, one per axis; `residualSugar` value is `Math.min(10, rs / 5 * 10)` so 5 g/L maps to mid-scale.
- **Embedded in:** `best-dry-red-wines.mdx` (8 wines → 8 instances inline under each AffiliateCTA)
- **Acceptance:** renders 4 rows per wine, mobile stacks cleanly, labels don't wrap into bars. Build passes.
- **Test plan:** production build + grep for 4 instances × 8 wines = 32 DotScaleRow renders on dist/best-wines/best-dry-red-wines/index.html
- **Duration:** 30 min

### D4 — `<HeavyweightCard>` wrapper (for `best-full-bodied-red-wines`)

- **Prerequisites:** D2
- **Files to create:** `src/components/viz/HeavyweightCard.astro`
- **Props contract:**
  ```ts
  interface Props {
    wineName: string;
    abvPercent: number;      // rendered as label + DotScaleRow normalised 12–16% → 0–10
    tannin: number;          // 1–10
    oakPresence: number;     // 1–10
    decantMinutes: number;   // rendered as text annotation ("Decant: 45 min")
  }
  ```
- **Implementation:** 3 `<DotScaleRow>` instances + a final text line for decant minutes in `text-sm font-heading`.
- **Embedded in:** `best-full-bodied-red-wines.mdx` (10 wines after L8 expansion)
- **Acceptance:** all 4 stats render per wine; decant text uses voice-guide-safe copy ("Decant: 45 minutes" — no em-dashes).
- **Duration:** 30 min

### D5 — `<LightRedSpectrum>` wrapper (for `best-light-red-wines`)

- **Prerequisites:** D2
- **Files to create:** `src/components/viz/LightRedSpectrum.astro`
- **Props contract:**
  ```ts
  interface Props {
    wines: Array<{ name: string; bodyScore: number; anchorSlug: string }>;
    scaleLabelLeft?: string;  // default "Pale, almost rosé"
    scaleLabelRight?: string; // default "Light-medium grip"
  }
  ```
- **Implementation:** single horizontal SVG spectrum with N markers, each linking to `#anchorSlug`. Extends `<DotScaleRow>` layout to "many markers on one row". Static (no JS required) fallback.
- **Embedded in:** `best-light-red-wines.mdx` (rendered once below TopPicksInline, with 10 markers after L7 expansion)
- **Acceptance:** markers don't overlap at 320px, anchor links jump to in-page wine H2s.
- **Duration:** 45 min

### D6 — `<FlavourProfileRadar>` wrapper (for `best-wines-under-30`)

- **Prerequisites:** D2 (note: radar chart shares colour tokens + SVG conventions but uses polar geometry)
- **Files to create:** `src/components/viz/FlavourProfileRadar.astro`
- **Props contract:**
  ```ts
  interface Props {
    wineName: string;
    body: number;       // 1–10
    tannin: number;     // 1–10 (for whites, pass acidity instead; label computed from prop)
    fruit: number;      // 1–10
    oak: number;        // 1–10
    finish: number;     // 1–10
    isWhite?: boolean;  // swaps Tannin label to "Acidity"
  }
  ```
- **Implementation:** 5-axis SVG radar (pentagon). One polygon fill per wine. Compact inline size (120×120px). NOT shared with DotScaleRow — this is the one component that needs its own geometry; D2 covers the 1D case, D6 covers 2D polar.
- **Embedded in:** `best-wines-under-30.mdx` (20 wines after L2 expansion → 20 radars inline under each AffiliateCTA)
- **Acceptance:** renders at 120px width, label positions don't clip at corners, polygon fill uses `var(--color-green)` at 0.3 opacity.
- **Duration:** 90 min (most complex viz ticket)

### D7 — `<ButterIntensityMatrix>` wrapper (for `best-buttery-chardonnay`)

- **Prerequisites:** D2
- **Files to create:** `src/components/viz/ButterIntensityMatrix.astro`
- **Props contract:**
  ```ts
  interface Props {
    wines: Array<{
      name: string;
      butterIntensity: number;  // 1–5
      body: number;             // 1–5
      bestFor: string;          // short phrase
    }>;
  }
  ```
- **Implementation:** static HTML table, 4 cols (Wine / Butter intensity dots / Body dots / Best for). Two embedded `<DotScaleRow scale={5} size='sm'>` per row. 10 rows after L5 expansion.
- **Embedded in:** `best-buttery-chardonnay.mdx` — placed between TopPicksInline and first wine H2 (before pricing WineTip? No, after — component order locked).
- **Acceptance:** table scrolls horizontally on mobile if needed; every row renders dot scales.
- **Duration:** 45 min

### D8 — `<SweetnessBodyScatter>` wrapper (for `best-sweet-red-wine`)

- **Prerequisites:** D2
- **Files to create:** `src/components/viz/SweetnessBodyScatter.astro`
- **Props contract:**
  ```ts
  interface Props {
    wines: Array<{
      name: string;
      sweetness: number;  // 1–5 (light-sweet → dessert-level)
      body: number;       // 1–5 (light & fizzy → full & fortified)
      anchorSlug: string;
    }>;
  }
  ```
- **Implementation:** 2D SVG scatter plot (200×200px canvas). Each wine as labelled dot at `(sweetness, body)` coordinates. Dot links to `#anchorSlug`. Axis labels at corners. Static, no JS.
- **Embedded in:** `best-sweet-red-wine.mdx` — placed above wine listings per L3 audit recommendation. 10 wines after L3 expansion.
- **Acceptance:** labels don't collide when two wines share a cell (offset labels vertically +/- 8px when distance < 15px). Mobile: falls back to same 4-col data table used in D7.
- **Duration:** 60 min

### D9 — `<AcidityTextureMap>` wrapper (for `best-crisp-white-wines`)

- **Prerequisites:** D2
- **Files to create:** `src/components/viz/AcidityTextureMap.astro`
- **Props contract:**
  ```ts
  interface Props {
    wines: Array<{
      name: string;
      acidity: number;        // 1–5
      texture: number;        // 1–5
      labelKeywords: string;  // e.g. "Marlborough, NZ"
      abvPercent: number;
    }>;
  }
  ```
- **Implementation:** static HTML 4-col table (Wine / Acidity dots / Texture dots / Label keywords). 8 rows (crisp-white count-hold per locked decision).
- **Embedded in:** `best-crisp-white-wines.mdx` above wine listings.
- **Acceptance:** table renders; acidity + texture show as two `<DotScaleRow scale={5}>` cells per row.
- **Duration:** 45 min

### D10 — `<BeginnerStyleMatrix>` wrapper (for `best-white-wines-for-beginners`)

- **Prerequisites:** D2
- **Files to create:** `src/components/viz/BeginnerStyleMatrix.astro`
- **Props contract:**
  ```ts
  interface Props {
    wines: Array<{
      name: string;
      anchorSlug: string;
      grape: string;
      sweetness: 'Bone-dry' | 'Dry' | 'Off-dry' | 'Sweet';
      body: 'Light' | 'Medium' | 'Full';
      bestFood: string;       // one phrase
      priceBand: '$15–20' | '$20–25' | '$25–30';
    }>;
  }
  ```
- **Implementation:** static HTML 6-col table. No dot scales here — tags/labels render as small pills (reuse existing pill styles from `AffiliateCTA` pairings).
- **Embedded in:** `best-white-wines-for-beginners.mdx` between pricing WineTip and first wine H2. 8 rows (count-hold).
- **Acceptance:** anchor links jump correctly; mobile scrolls horizontally with sticky first column.
- **Duration:** 45 min

### D11 — Miscellaneous components surfaced by audits

Broken into lettered sub-tickets. All independent after D2 except where noted.

#### D11a — `<WineDataBlock>` (shared micro-spec strip)

- **Prerequisites:** none
- **File:** `src/components/content/WineDataBlock.astro`
- **Props contract:**
  ```ts
  interface Props {
    region?: string;
    abvPercent?: number;
    residualSugar?: string;     // e.g. "<4 g/L (dry)"
    dealcoholizationMethod?: string;
    productionTags?: string[];  // ['organic', 'biodynamic', 'sustainable']
    grapeBlend?: string;        // e.g. "Syrah 80%, Grenache 15%, Cinsault 5%"
    bestFor?: string;           // short category award line
  }
  ```
- **Visual:** horizontal label/value list rendered as small metadata strip under H2, above AffiliateCTA. All fields optional; only renders populated ones. Uses `font-size: 0.875rem`, `color: var(--color-text-muted)`.
- **Embedded in:** all 16 pages eventually (Lia populates per audit recs)
- **Acceptance:** renders zero output if all props empty. Voice-guide: never includes retailer names.
- **Duration:** 45 min

#### D11b — `<StyleSelectorStrip>` (for `best-wines-under-20`)

- **Prerequisites:** none
- **File:** `src/components/content/StyleSelectorStrip.astro`
- **Props contract:**
  ```ts
  interface Props {
    categories: Array<{ key: 'all'|'red'|'white'|'rose-sparkling'; label: string; count: number }>;
  }
  ```
- **Implementation:** 4 pill buttons with `data-style` attribute. Sticky on scroll. Client-side JS toggles `[data-hidden]` on sibling wine sections via matching `data-style`. Pure CSS fade transition.
- **Embedded in:** `best-wines-under-20.mdx` above wine listings. Each wine H2 needs a `data-style` wrapper attribute (Lia adds in L1).
- **Acceptance:** clicking a pill hides non-matching wines, counts update live, works without page reload.
- **Duration:** 60 min

#### D11c — `<ValueRatingBadge>` (for `best-wines-under-15`)

- **Prerequisites:** none
- **File:** `src/components/content/ValueRatingBadge.astro`
- **Props contract:**
  ```ts
  interface Props {
    criticScore: number;   // e.g. 93
    typicalPrice: number;  // e.g. 14.99
  }
  ```
- **Implementation:** calculates `pts/$` as `criticScore / typicalPrice`, renders as small green pill "6.2 pts/$". Includes tooltip/aria-label explaining metric.
- **Embedded in:** `best-wines-under-15.mdx` — one badge per wine.
- **Acceptance:** renders correctly, no NaN when price = 0.
- **Duration:** 20 min

#### D11d — `<NonDrinkerMatcher>` (for `best-wine-for-non-wine-drinkers`)

- **Prerequisites:** none
- **File:** `src/components/content/NonDrinkerMatcher.astro`
- **Props contract:**
  ```ts
  interface Props {
    options: Array<{
      drinkPreference: string;   // e.g. "Sweet cocktails"
      wineSlug: string;          // anchor to one of the 10 wines
      wineName: string;
      whyItFits: string;         // one short sentence, voice-guide compliant
    }>;
  }
  ```
- **Implementation:** 7 clickable chips. Click reveals a single wine-match card below with "Why this fits" line + link to the wine's in-page H2. No scroll-into-view on mount (Dae hard rule).
- **Embedded in:** `best-wine-for-non-wine-drinkers.mdx` above TopPicksInline.
- **Acceptance:** keyboard-navigable, aria-expanded on each chip.
- **Duration:** 75 min

#### D11e — `<BeginnerGatewayMap>` + `<BeginnerDecisionTree>` (routing components for beginner pages)

- **Prerequisites:** none (share chip-selection primitive pattern with D11d but simpler — can duplicate rather than extract)
- **Files:**
  - `src/components/content/BeginnerGatewayMap.astro` (for `best-red-wines-for-beginners`)
  - `src/components/content/BeginnerDecisionTree.astro` (for `best-wine-for-beginners` umbrella)
- **Props contracts:**
  ```ts
  // BeginnerGatewayMap
  interface GatewayProps {
    tiers: Array<{
      tierLabel: string;           // "Tier 1: Start here"
      learningGoal: string;        // "Lowest tannin, most forgiving"
      wines: Array<{ name: string; anchorSlug: string }>;
    }>;
  }

  // BeginnerDecisionTree
  interface TreeProps {
    rows: Array<{
      drinkYouEnjoy: string;       // "Apple juice / cider / light lager"
      wineMatch: string;           // "Pinot Grigio"
      bottleName: string;
      anchorSlug: string;
    }>;
  }
  ```
- **Implementation:** both are static HTML tables/grids styled consistently with existing content components. No JS needed.
- **Embedded in:** beginner red page + beginner umbrella.
- **Duration:** 60 min total (30 min each)

#### D11f — Category-award pill for in-body H2s

- **Prerequisites:** none. Simpler pattern: reuse existing `TopPicksInline.highlight` CSS rather than new component.
- **File:** no new component. Dae documents the convention in `seo/audits/schema-hygiene-2026-04-18.md` as a "use existing highlight pill, apply to per-wine H2 subtitle" pattern. Lia implements per page.
- **Duration:** 15 min (documentation only)

---

**Dae total time budget:** ~11 hours serial, ~4 hours with 3 concurrent Dae instances post-D2.

---

## Part 4 — Lia's tickets (Wine Writer)

Every ticket references its per-article audit at `seo/audits/[slug]-competitor-audit.md`. Every ticket ends with Stage 6 deploy + NW re-verify.

### L1 — `best-wines-under-20` [HIGHEST IMPACT]

- **Audit:** `seo/audits/best-wines-under-20-competitor-audit.md`
- **Current:** 8 wines (1 red / 1 SB / 1 Chard / 1 PN Lang / 1 rosé / 1 Cab / 1 Prosecco / 1 PG)
- **Target:** 20 wines (7 reds / 6 whites / 4 rosés / 3 sparkling) per SERP median; Style Selector pill strip; category H2 groupings (Sparkling & Rosé / White / Red); per-wine data block with vintage + importer + region; value POV intro rewrite ("$23 is the new $20" angle, Belgray voice)
- **Research required:** 12 NEW wines from Wine.com using documented DOM selectors. Budget: 60–90 min of scraping. Use category IDs red `7155-124`, white `7125-125`, rosé `7155-126`, sparkling `7155-123`.
- **Copy changes:**
  - Intro rewrite: value POV (current is neutral). Keep Belgray voice. No em-dashes.
  - Add 2 new H2 style group headings ("## Sparkling & Rosé", "## White Wines", "## Red Wines")
  - Per-wine: add 1-line WineDataBlock (region, grape blend %, importer if known)
  - Claire pull-quote: byline block + single body pull-quote in MethodologyBox ("After years recommending wines to wine-club members, the under-$20 sweet spot is where taste and value finally shake hands.") — sourced from `content/docs/author-bio.md`
  - 3 new FAQ questions for NW absorption (TBD at NW pass): likely "how to pick under $20", "what's the best value cuvée", "what makes a $20 bottle over-deliver"
- **Prerequisites:** D11b (`<StyleSelectorStrip>`), D11a (`<WineDataBlock>`)
- **NW re-verification:** existing query — check `/list-queries` first; likely NO existing under-20 query (check handoff.md queries list). If none, new query. Verify 0 missing across basic + extended + entity.
- **Acceptance:** 20 wines deployed, StyleSelector filters live, category H2s render, dist HTML grepped for `data-style` present on each wine.
- **Duration:** 4–5 hours (wine research 90 min + draft 60 min + review/humanize 30 min + NW pass 60 min + deploy 30 min)

### L2 — `best-wines-under-30` [HIGHEST IMPACT]

- **Audit:** `seo/audits/best-wines-under-30-competitor-audit.md`
- **Current:** 8 wines; 6-question FAQ
- **Target:** 20 wines per SERP median (Wine Spectator's 35 is excessive); per-wine flavour radar via D6; sommelier attribution depth per wine; category H2 hierarchy (Sparkling / Whites / Rosés / Reds); designation tags (organic/biodynamic/sustainable) flagged per wine via `<WineDataBlock>` `productionTags`.
- **Research required:** 12 NEW wines from Wine.com.
- **Copy changes:**
  - Add 4 category H2s grouping the 20 wines
  - Per-wine: `<WineDataBlock>` with region + ABV + production tags, plus `<FlavourProfileRadar>` instance
  - 2 new FAQ questions for NW absorption
  - Claire byline pull-quote in MethodologyBox
- **Prerequisites:** D6 (`<FlavourProfileRadar>`), D11a (`<WineDataBlock>`)
- **NW re-verification:** existing query `97d0b5d7e2394b6b`. Re-run, expect term coverage shifts from 20 new wine descriptions — absorb new NW misses into FAQs.
- **Acceptance:** 20 wines, 20 radar charts, build clean, NW 0-missing post-rework.
- **Duration:** 5 hours

### L3 — `best-sweet-red-wine`

- **Audit:** `seo/audits/best-sweet-red-wine-competitor-audit.md`
- **Current:** 8 primary + 8 secondary ("More Sweet Reds")
- **Target:** 10–11 primary (promote Barefoot Sweet Red, Cardinale, Vintage Port from secondary → full H2 + AffiliateCTA); Sweetness-vs-Body scatter component (D8); per-wine `<WineDataBlock>` with Region/ABV/RS g/L/Sweetness level; category award badges per wine (8 unique awards like "Best Italian", "Best Fortified"); primer H2 "What Makes a Red Wine Sweet?" (250–400 words)
- **Research required:** 0 new wines — promotions are from existing secondary text. Still requires collecting Wine.com product IDs + image URLs for the 3 promoted wines (20 min scraping).
- **Copy changes:**
  - Expand 3 mini-reviews into full H2 sections with AffiliateCTA + pairings
  - New primer H2 above wine listings
  - Category award eyebrows under each H2 (reuse highlight pill pattern per D11f)
- **Prerequisites:** D8 (`<SweetnessBodyScatter>`), D11a (`<WineDataBlock>`)
- **NW re-verification:** existing query `1b943847867aa9fa`. Re-run.
- **Acceptance:** 10–11 primary wines, scatter renders, awards visible on H2 pills.
- **Duration:** 3 hours

### L4 — `best-non-alcoholic-wines`

- **Audit:** `seo/audits/best-non-alcoholic-wines-competitor-audit.md`
- **Current:** 8 primary + 3 secondary
- **Target:** 11 primary (promote Giesen SB / Noughty Sparkling / Ariel Cab); Dealcoholization Method + Sugar Profile table at top (5 cols × 11 rows); category H2 groupings (Still Red / Still White / Sparkling); per-wine "Best For" award tag
- **Research required:** 0 new wines. Wine.com IDs for 3 promoted already captured in existing secondary section.
- **Copy changes:**
  - Expand 3 secondary entries into full H2 with AffiliateCTA
  - New 3 category H2s
  - New dealcoholization method + sugar table (static HTML, no component)
  - Add 1 FAQ on buying locations + 3 FAQs for keto/sugar/pregnancy/calories per audit rec
- **Prerequisites:** D11a (`<WineDataBlock>`)
- **NW re-verification:** existing query `5cbd826c0689a23d`. Re-run.
- **Duration:** 2.5 hours

### L5 — `best-buttery-chardonnay`

- **Audit:** `seo/audits/best-buttery-chardonnay-competitor-audit.md`
- **Current:** 8 California Chardonnays
- **Target:** 10 wines (add Bread & Butter + Dark Horse or Prisoner per audit); `<ButterIntensityMatrix>` (D7) above listings; Price-banded quick-picks box above the fold ("Best Overall / Best Value / Best Budget / Best Unoaked / Best Splurge"); oaked vs unoaked explainer H2; cheese-pairing FAQ
- **Research required:** 2 new wines from Wine.com (30 min).
- **Prerequisites:** D7 (`<ButterIntensityMatrix>`)
- **NW re-verification:** existing query `1e9ed30eced09f40`.
- **Duration:** 2 hours

### L6 — `best-red-wine-under-20`

- **Audit:** `seo/audits/best-red-wine-under-20-competitor-audit.md`
- **Current:** 10 wines (4 PN / 2 Cab / 2 Chianti / 1 Malbec / 1 Mencia)
- **Target:** 12–15 wines (add Shiraz, Nebbiolo, Cab Franc, Aglianico, or Tannat for grape breadth); per-wine grape blend % via `<WineDataBlock>`; Price-vs-Critic-Score scatter (or `<FlavourProfileRadar>` reuse); named-critic attribution per wine
- **Research required:** 2–5 new wines from Wine.com (45 min).
- **Copy changes:** add WineDataBlock to all 12–15 entries including grape blend %
- **Prerequisites:** D11a (`<WineDataBlock>`). Scatter component is DEFERRED — the audit backup suggestion (sortable table) is a cheaper ship; use Price-vs-Score as a static HTML 7-col table rather than a new viz component.
- **NW re-verification:** no existing query — check handoff; likely new query needed. Budget NW credits.
- **Duration:** 3 hours

### L7 — `best-light-red-wines`

- **Audit:** `seo/audits/best-light-red-wines-competitor-audit.md`
- **Current:** 8 wines, 6 unique grapes
- **Target:** 10 wines (add one Grenache + one Dolcetto OR Cinsault per audit); `<LightRedSpectrum>` (D5) below TopPicksInline; serving-temperature comparison table (3 rows × 2 cols °C/°F)
- **Research required:** 2 new wines from Wine.com (30 min).
- **Prerequisites:** D5 (`<LightRedSpectrum>`)
- **NW re-verification:** no existing query listed — check; likely new query needed.
- **Duration:** 2 hours

### L8 — `best-full-bodied-red-wines`

- **Audit:** `seo/audits/best-full-bodied-red-wines-competitor-audit.md`
- **Current:** 8 wines
- **Target:** 10 wines (add Priorat Garnacha + Paso Cab or Madiran Tannat); `<HeavyweightCard>` (D4) per wine with ABV/Tannin/Oak/DecantMinutes; "What makes a red full-bodied" 4-point explainer box above first wine; named-expert pull-quote in MethodologyBox
- **Research required:** 2 new wines (30 min).
- **Prerequisites:** D4 (`<HeavyweightCard>`)
- **NW re-verification:** new query needed.
- **Duration:** 2 hours

### L9 — `best-dry-red-wines`

- **Audit:** `seo/audits/best-dry-red-wines-competitor-audit.md`
- **Current:** 8 wines
- **Target:** keep 8 wines (audit says 8 is at/above median); add `<DrynessFingerprint>` (D3) per wine; per-wine RS g/L inline via `<WineDataBlock>`; add Carmenère to the grape-breadth secondary section (keep it secondary, not a 9th primary)
- **Research required:** 0 new primary wines. Possibly 1 Carmenère reference bottle for secondary section (15 min).
- **Prerequisites:** D3 (`<DrynessFingerprint>`), D11a
- **NW re-verification:** no existing query — check; likely new query needed.
- **Duration:** 2 hours

### L10 — `best-wines-under-15`

- **Audit:** `seo/audits/best-wines-under-15-competitor-audit.md`
- **Current:** 8 wines
- **Target:** 10 wines; `<ValueRatingBadge>` (D11c) per wine; organic/sustainable production tags via `<WineDataBlock>` `productionTags`
- **Research required:** 2 new wines (30 min).
- **Prerequisites:** D11c, D11a
- **NW re-verification:** new query likely.
- **Duration:** 2 hours

### L11 — `best-red-wines-for-beginners` [COUNT-HOLD AT 8]

- **Audit:** `seo/audits/best-red-wines-for-beginners-competitor-audit.md`
- **Current:** 8 wines
- **Target:** HOLD at 8 per locked decision; `<BeginnerGatewayMap>` (D11e) 3-tier progression; "Red Wine at a Glance" 5-col comparison table after intro; body-weight H2 groupings (Light-Bodied Picks / Medium-Bodied Picks / Fuller-Bodied Pick)
- **Research required:** 0
- **Copy changes:** add 3 group H2s (maintain 1–8 numbering within groups); new glance table; Tier labels in gateway map
- **Prerequisites:** D11e
- **NW re-verification:** existing query `9835b560a787c7c2`.
- **Duration:** 1.5 hours

### L12 — `best-wine-for-non-wine-drinkers`

- **Audit:** `seo/audits/best-wine-for-non-wine-drinkers-competitor-audit.md`
- **Current:** 8 wines
- **Target:** 10 wines (add one Gewürztraminer + one fruit wine/low-alc option); `<NonDrinkerMatcher>` (D11d) above TopPicksInline; "Four Objections" diagnostic block (Tannin/Bitterness/Alcohol/Dryness); "How to start drinking wine" secondary section; internal link to `/best-wines/best-non-alcoholic-wines`
- **Research required:** 2 new wines (30 min).
- **Prerequisites:** D11d
- **NW re-verification:** existing query `968e1fc70f871c50` (reused without credits per handoff).
- **Duration:** 2.5 hours

### L13 — `best-white-wines-for-beginners` [COUNT-HOLD AT 8]

- **Audit:** `seo/audits/best-white-wines-for-beginners-competitor-audit.md`
- **Target:** HOLD at 8; `<BeginnerStyleMatrix>` (D10) 6-col table above wine listings; "Key Takeaways" 3-bullet box above the fold; explicit "start here" tag on #1 pick
- **Research required:** 0
- **Prerequisites:** D10
- **NW re-verification:** existing query `059c66d8cb03b277`.
- **Duration:** 1.5 hours

### L14 — `best-wine-for-beginners` (umbrella) [COUNT-HOLD AT 8]

- **Audit:** `seo/audits/best-wine-for-beginners-competitor-audit.md`
- **Target:** HOLD at 8; `<BeginnerDecisionTree>` (D11e) above TopPicksInline ("Which drink do you enjoy most?"); Key Wine Terms glossary (dry / acidity / tannins / body / finish, 2-sentence definitions); "Confidence Compound" tracker column added to week-by-week plan (Week 1: learn tannin, Week 3: learn crisp, etc.)
- **Research required:** 0 (umbrella pulls from sibling pages)
- **Prerequisites:** D11e
- **NW re-verification:** existing query `66f53c5530c24640`.
- **Duration:** 2 hours

### L15 — `best-crisp-white-wines` [COUNT-HOLD AT 8]

- **Audit:** `seo/audits/best-crisp-white-wines-competitor-audit.md`
- **Target:** HOLD at 8; `<AcidityTextureMap>` (D9) above listings (4-col table with label keywords + ABV); style-tier H3 sub-groupings (Ultra-crisp / Crisp with texture / Crisp with aromatic edge) within existing H2s; "labels to look for" one-liner per wine; exclusion-set hook in intro ("not just Pinot Grigio and Sauv Blanc")
- **Research required:** 0
- **Prerequisites:** D9
- **NW re-verification:** existing query `c11fd1e260102f89`.
- **Duration:** 2 hours

### L16 — `best-wine-for-mulled-wine` [COUNT-HOLD AT 8]

- **Audit:** `seo/audits/best-wine-for-mulled-wine-competitor-audit.md`
- **Target:** HOLD at 8; Mulling Suitability Matrix table (4 cols × 8 rows) above wine listings — static HTML, no new component; 200–300-word "White Mulled Wine" secondary section with 2 bottle picks (Riesling + Viognier); "Wines to Skip" H3 inside MethodologyBox; grape-first secondary H2 "Which Grape Makes the Best Mulled Wine?"
- **Research required:** 2 NEW wines for white mulled section (Riesling + Viognier, 20 min)
- **Prerequisites:** none (no new component — static tables)
- **NW re-verification:** existing query `eccb204ec1c51ae8`.
- **Duration:** 2 hours

---

**Lia total time budget:** ~40 hours serial, ~10 hours with 4 concurrent Lia instances.

---

## Part 5 — Parallel dispatch plan

**Wave 1 (t+0, 8 parallel agents):**
- **Dae A:** D1 (schema audit + fix) — 60–90 min
- **Dae B:** D2 (`<DotScaleRow>` primitive) — 90 min
- **Dae C:** D11a (`<WineDataBlock>`) + D11c (`<ValueRatingBadge>`) + D11f (documentation) — 80 min total
- **Lia A:** L1 Stage 1–2 wine research for under-20 (12 new wines) — 90 min
- **Lia B:** L2 Stage 1–2 wine research for under-30 (12 new wines) — 90 min
- **Lia C:** L6 + L7 + L8 + L10 wine research (8 total new wines across 4 pages) — 75 min
- **Lia D:** Audit-reading + Stage 2 prose restructure for L3, L4, L9, L11, L13, L14, L15, L16 (no new wine research, content-only) — 90 min parallel drafting across the 8 no-research pages
- **Iris:** coordinates, handles pre-approval gates, tracks Dae/Lia status

**Wave 2 (t+~90min, after D2 lands):**
- **Dae A (fresh):** D3 (DrynessFingerprint) + D4 (HeavyweightCard) + D5 (LightRedSpectrum) — 3 wrappers, 105 min
- **Dae B (fresh):** D6 (FlavourProfileRadar) — dedicated because it's the most complex — 90 min
- **Dae C (fresh):** D7 (ButterIntensityMatrix) + D8 (SweetnessBodyScatter) + D9 (AcidityTextureMap) + D10 (BeginnerStyleMatrix) — 4 wrappers, 195 min
- **Dae D (new instance):** D11b (StyleSelectorStrip) + D11d (NonDrinkerMatcher) + D11e (Beginner components) — 3 routing components, 195 min
- **Lia A–D:** Stage 3 (review) + Stage 4 (final) on their drafted pages. Humanizer pass. Intro voice check. Research continues if needed.

**Wave 3 (t+~3hr, components complete, Lia enters SEO + deploy):**
- **Lia A:** L1 Stage 5–6 (NW gap analysis + deploy) — 90 min
- **Lia B:** L2 Stage 5–6 — 90 min
- **Lia C:** Deploys L6, L7, L8, L10 sequentially — 60 min total (all have existing drafts from Wave 1–2)
- **Lia D:** Deploys L3, L4, L9, L11, L13, L14, L15, L16 — 120 min total (8 pages, ~15 min each, most are content-only edits once components are imported)
- **Dae (on-call):** bug fixes if components break on build; schema spot-checks

**Wave 4 (t+~5hr, final checks):**
- Iris compiles deploy verification across all 16 pages. `grep` each `dist/best-wines/[slug]/index.html` for expected components. Cross-check JSON-LD emission on 3 representative pages via Rich Results Test.
- Update `handoff.md` with new state: 16 pages reworked, schema live, component library at `src/components/viz/`.

**Expected clock: 5 hours if parallelism holds; 6–7 hours if research or NW gap loops run long on L1/L2.**

---

## Part 6 — Risk + escalation matrix

| Risk | Likelihood | Mitigation | Escalate to Iris if |
|------|-----------|------------|----------------------|
| Wine.com DOM selectors changed | Medium | Use documented `.productPrice_price-saleWhole` etc. from listicle-template. Fallback: Lia scrapes sale AND reg prices; picks non-zero. | 3+ wines return $0 price in a row |
| D6 FlavourProfileRadar geometry bugs on mobile | High | Dae ships at 320px first, scales up. Fallback: 5-column static data table inline if SVG fails. | Build passes but 2 radars clip viewBox at 320px |
| NW `/list-queries` returns no match for L1, L6, L7, L8, L9, L10 (new queries needed) | Medium | Budget for up to 6 new NW query credits today. Jade to pre-approve credit burn. | More than 6 new queries needed |
| Schema emission causes duplicate Article JSON-LD on layout | Medium | Dae D1 acceptance test: Rich Results Test must show ONE Article object per page, not two. | Duplicate Article schema flagged by RRT |
| Claire E-E-A-T pull-quote invention risk | Low (author-bio.md locks facts) | Lia reads `content/docs/author-bio.md` before writing any Claire credential. Use ONLY experience phrasings from file. | Lia flags "want to claim X, not in bio" |
| Wine count expansion intro degradation | Medium | Post-NW re-verify, Lia re-reads first 3 paragraphs vs voice-guide. Rewrite any process-first sentence before deploy. | Jade's spot-check on 2 random pages fails voice gut-check |
| Component order drift (someone reorders listicle components to fit new viz) | Low (Dae hard rule) | Listicle template order is locked. Viz components embed WITHIN existing slots (under AffiliateCTA, above wine listings) — never as new top-level slots. | Anyone proposes a new listicle slot |
| Dev server vs prod build divergence | High (known issue) | ALL verification via `npm run build` + grep `dist/` HTML. No dev server acceptance. | (not escalatable — hard rule) |
| Wave 2 component ship slips past t+3hr | Medium | Lia Wave 3 starts deploys on pages whose components ARE ready; unblocked pages don't wait on blocked ones. | More than 2 of D3–D11 slip by >1hr |

---

## Part 7 — Pre-approval checklist (for Jade)

Before clicking "go," please confirm the following. Items in **bold** are blocking.

### A. Wine counts per page (confirm all 16)

| Slug | Current | Target | SERP median | Confirm? |
|------|---------|--------|-------------|----------|
| best-wines-under-20 | 8 | **20** | 20 | ☐ |
| best-wines-under-30 | 8 | **20** | 20–30 | ☐ |
| best-sweet-red-wine | 8 primary | **10–11 primary** | 10 | ☐ |
| best-non-alcoholic-wines | 8 primary | **11 primary** | 11–12 | ☐ |
| best-buttery-chardonnay | 8 | **10** | 10 | ☐ |
| best-red-wine-under-20 | 10 | **12–15** | 11 | ☐ |
| best-light-red-wines | 8 | **10** | 8 (grape-breadth gap) | ☐ |
| best-full-bodied-red-wines | 8 | **10** | 7 | ☐ |
| best-dry-red-wines | 8 | 8 (hold) | 6–9 | ☐ |
| best-wines-under-15 | 8 | **10** | 10 | ☐ |
| best-red-wines-for-beginners | 8 | 8 (hold) | 5–8 | ☐ |
| best-wine-for-non-wine-drinkers | 8 | **10** | 4–10 | ☐ |
| best-white-wines-for-beginners | 8 | 8 (hold) | 8 | ☐ |
| best-wine-for-beginners | 8 | 8 (hold — umbrella) | 8 | ☐ |
| best-crisp-white-wines | 8 | 8 (hold) | 7–8 | ☐ |
| best-wine-for-mulled-wine | 8 | 8 (hold) | 7 | ☐ |

**Net new wines to research: 32** (12 + 12 + 2 buttery + 2–5 red-under-20 + 2 light + 2 full-bodied + 2 under-15 + 2 non-drinkers + 2 mulled white section = 38 max, realistically 32).

### B. Component naming (confirm all wrapper names)

- `<DotScaleRow>` (primitive) — ☐
- `<DrynessFingerprint>` (dry red) — ☐
- `<HeavyweightCard>` (full-bodied) — ☐
- `<LightRedSpectrum>` (light red) — ☐
- `<ButterIntensityMatrix>` (buttery chard) — ☐
- `<SweetnessBodyScatter>` (sweet red) — ☐
- `<AcidityTextureMap>` (crisp white) — ☐
- `<FlavourProfileRadar>` (under-30) — ☐
- `<BeginnerStyleMatrix>` (white beginners) — ☐
- `<WineDataBlock>` (shared micro-spec strip) — ☐
- `<StyleSelectorStrip>` (under-20 filter pills) — ☐
- `<ValueRatingBadge>` (under-15 pts/$ pill) — ☐
- `<NonDrinkerMatcher>` (non-drinkers routing) — ☐
- `<BeginnerGatewayMap>` (red beginners 3-tier) — ☐
- `<BeginnerDecisionTree>` (umbrella decision tree) — ☐

### C. Claire pull-quote placement

Recommendation: **byline block + single body pull-quote inside MethodologyBox** on the 4 most competitive pages (dry red, full-bodied, buttery chard, crisp white). Byline-only elsewhere. All copy drawn strictly from `content/docs/author-bio.md`.

- Approve byline + MethodologyBox pull-quote on 4 pages? ☐
- Alternate: byline-only everywhere (safer, less E-E-A-T lift)? ☐

### D. NeuronWriter credit budget

Up to 6 new NW queries may be needed (L1, L6, L7, L8, L9, L10 — slugs not in handoff's 10-query list). Each new query burns credits.

- Approve up to 6 new NW queries today? ☐
- Cap lower (e.g. 3)? ☐

### E. Wine.com scraping budget

Lia needs ~40 Chrome-browser tool calls for Wine.com research across all research tickets. No external cost; time cost is ~3hr across Lia instances.

- Approve Wine.com scraping across L1, L2, L5, L6, L7, L8, L10, L12, L16? ☐

### F. Ambiguities flagged for Jade's decision

1. **Red-under-20 novel feature — scatter plot vs sortable table.** Audit recommends Price-vs-Score scatter as novel feature. Building a scatter is a new component (~90min, D11-level). Cheaper alternative: sortable HTML table with same data. Recommendation: **skip scatter, ship table** to stay in one-day scope. Confirm? ☐

2. **NonDrinkerMatcher vs "Four Objections" panel.** Audit offers both as novel options for non-drinkers page. Recommendation: **ship NonDrinkerMatcher only** (drink-preference routing is higher-intent). Four-Objections becomes a simple prose section in MethodologyBox. Confirm? ☐

3. **Dry-red count expansion conflict.** Master audit conflict #2: red-beginners audit says "don't expand past 8 / depth beats breadth", under-price audits say expand. My read: **hold dry-red at 8, hold red-beginners at 8, expand under-price / buttery / light / full / non-drinkers / under-15 to the targets above**. Matches locked decision in handoff.md. Confirm? ☐

4. **Freshness tag in title ("Best Wines Under $20 in 2026").** Recommended in under-20 audit. Adds title chars — must still fit 60-char frontmatter limit. Recommendation: **hold for separate review** (annual refresh ticket, not one-day scope). Confirm? ☐

5. **Pinterest vertical hero image generation.** Recommended in light-red + non-drinkers audits. Requires image pipeline work (kie.ai generation, file output, OG tag). Recommendation: **defer to follow-up ticket** — not one-day scope. Confirm? ☐

6. **Category-award badges on in-body H2s.** D11f proposes reusing existing `highlight` pill CSS, no new component. Lia populates the award text per-page (e.g. "Best Italian", "Best Fortified"). Confirm: **reuse existing pill, Lia writes award text per wine**? ☐

---

## Deploy pre-flight (per ticket, Lia enforces)

- [ ] All 6 pipeline stages have files on disk
- [ ] `/humanizer` run on draft
- [ ] NW re-verification complete; skipped voice-banned terms recorded
- [ ] Frontmatter: `title ≤ 60`, `description ≤ 155`
- [ ] `topPicksData` entry present in `src/pages/best-wines/[...slug].astro`
- [ ] Zero em-dashes (line-by-line, skipping import lines)
- [ ] Zero juxtaposition patterns
- [ ] No retailer names in body prose
- [ ] Components import paths are `../../../components/...` (not broken by em-dash scripts)
- [ ] Production build clean; `dist/best-wines/[slug]/index.html` grep-verified
- [ ] Claire credentials drawn ONLY from `content/docs/author-bio.md`
- [ ] Post-deploy `handoff.md` line added per page

---

**End plan.**
