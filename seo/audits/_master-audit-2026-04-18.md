# Master Competitor Audit — The Wine Guide Listicles

**Auditor:** Lino (SERP / Competitor Researcher)
**Synthesis date:** 2026-04-18
**Source files:** 16 retroactive competitor audits in `seo/audits/`
**Scope:** every published listicle in `src/content/articles/best-wines/`
**Method:** synthesis only — no new SERP research

---

## 1. Sitewide wine-count table

Every page's body-counted H2 wine count vs its audit's computed editorial SERP median. Delta column flags pages where our count is under the median. Priority is for **recount/expansion work** — not overall rework priority (see §4 for that).

| # | Slug | Our count | SERP median | Delta | Recount priority |
|---|------|-----------|-------------|-------|------------------|
| 1 | best-wines-under-20 | 8 | **20** | −12 | **H** |
| 2 | best-wines-under-30 | 8 | **20–30** | −12 to −22 | **H** |
| 3 | best-sweet-red-wine | 8 primary (16 incl. secondary) | 10 | −2 primary | **H** |
| 4 | best-non-alcoholic-wines | 8 primary (11 incl. secondary) | 11–12 | −3 primary | **H** |
| 5 | best-buttery-chardonnay | 8 | 10 | −2 | **M** |
| 6 | best-light-red-wines | 8 | 8 (but trails on grape breadth; Lexi 10 grapes) | 0 / grape gap | **M** |
| 7 | best-full-bodied-red-wines | 8 | 7 | +1 (Vinovest anchor at 10) | **M** |
| 8 | best-wine-for-non-wine-drinkers | 8 | 4–10 | at median | **M** |
| 9 | best-red-wine-under-20 | 10 | 11 | −1 | **M** |
| 10 | best-wines-under-15 | 8 | 10 | −2 | **M** |
| 11 | best-dry-red-wines | 8 | 6–9 | 0/+1 | **L** |
| 12 | best-crisp-white-wines | 8 | 7–8 | 0 | **L** (hold) |
| 13 | best-white-wines-for-beginners | 8 | 8 | 0 | **L** (hold) |
| 14 | best-wine-for-beginners | 8 | 8 | 0 | **L** (umbrella — hold) |
| 15 | best-red-wines-for-beginners | 8 | 5–8 | at top of median | **L** (hold) |
| 16 | best-wine-for-mulled-wine | 8 | 7 | +1 | **L** (hold) |

**Summary:** 10 of 16 pages are at or below the editorial median. The two under-price umbrellas (`best-wines-under-20`, `best-wines-under-30`) are the largest absolute gaps on the site — each sits ~12+ wines below the dominant "20 Under $20 / 30 Under $30" SERP shape.

---

## 2. Top 5 sitewide patterns

### Pattern A — Wine count below SERP median on under-price and narrow-category pages

Appears in: **10 of 16 audits** (all 4 under-price pages, both beginner-red white subpages except umbrella, sweet red, NA, buttery chard, light red).

- **Competitors:** Punch Drink + NYT both run franchise "20 Under $20" lists; Wine Spectator ships 35+ sommelier picks at $30; Liquor.com anchors sweet-red at 10; Wine Spectator NA at 12; Lexi 10 grapes on light red; YourWineStore + WE at 10 for buttery Chard.
- **Us:** 8 primary wines on all non-10-count pages; `best-wines-under-20` at 8 vs SERP's 20 is the single biggest gap site-wide.
- **What we're doing:** defaulting to 8 without a count check — exact failure mode Lino was hired to stop (handoff.md 2026-04-18).
- **Fix:** see §4 priority list and §5 action #1. Biggest lifts: under-20 (8→20), under-30 (8→20), sweet red (8→10–11 primary), NA (8→11 primary), buttery chard (8→10), light red (8→10), under-15 (8→10), red-under-20 (10→12–15).

### Pattern B — 2D positioning matrices / spectrum visualisations absent from every competitor SERP (open novel lane)

Appears as the primary novel-feature recommendation in: **8 of 16 audits** (under-20 red, under-30, buttery chard, crisp white, sweet red, white beginners, dry red, light red).

- **Competitors:** zero have 2D scatter/matrix plots of their own wines. Wine Folly has the static "boldness chart" (32 grapes, not per-bottle). Coravin has per-grape tasting cards. Nobody maps their actual picks on two axes.
- **Us:** WineQuiz tags wines internally by style (crisp-fruity / mineral / full / etc.) but we never **surface** the tag positioning as a visual.
- **Fix:** ship 2D-matrix / spectrum components. Named candidates from audits: `<DrynessFingerprint>` (dry red), `<LightRedSpectrum>` (light red), `<HeavyweightCard>` (full-bodied), Butter Intensity Matrix (buttery chard), Acidity & Body Positioning Map (crisp white), Sweetness-vs-Body scatter (sweet red), Price-vs-Critic-Score scatter (red under $20), White Wine Beginner Style Matrix (white beginners), Flavour Profile radar chart (under-30), Style Selector filter strip (under-20).

### Pattern C — Per-wine structured data blocks (Region / ABV / Tasting Notes / Sugar / Method) under H2

Appears in: **7 of 16 audits** (sweet red, NA, under-30, full-bodied red, crisp white, dry red, mulled).

- **Competitors:** Liquor.com's 3-line data block (Region / ABV / Tasting Notes) under every wine is the single most repeated structural pattern across the SERP; Wine Spectator adds sommelier attribution; Binny's adds organic/biodynamic/sustainable tags per bottle; SomeGoodCleanFun adds low-sugar labels.
- **Us:** AffiliateCTA shows critic-score ring + food-pairing tags + stars. We **don't** surface Region, ABV (except buttery chard and crisp white), Residual Sugar, Dealcoholization Method, or production-method tags consistently.
- **Fix:** a standardised `<WineDataBlock>` / per-wine micro-spec strip under each H2 with the fields that apply to that category: ABV for all; RS g/L for sweet red + dry red; Region for all; Dealcoholization method for NA; Production-method tags (organic/biodynamic/sustainable) where documented. Keeps voice-guide intact — these are data fields, not prose.

### Pattern D — Category-award badges beside numeric rank ("Best Overall / Best Value / Best Under $X / Best Sparkling / Best Organic")

Appears in: **6 of 16 audits** (sweet red, NA, buttery chard, mulled, red under $20, full-bodied).

- **Competitors:** Liquor.com uses 10 unique awards for 10 wines; SomeGoodCleanFun uses per-bottle "Best Budget/Best California" tags; Pioneer Woman uses "Best Organic/Under $10/Best Boxed"; YourWineStore runs a price-banded quick-picks box above the fold.
- **Us:** TopPicksInline uses `highlight` labels ("Best overall / Best Spanish red / Best rosé") correctly on 3 picks only. The body wines are numbered 1–8 with no category tag.
- **Fix:** extend the `highlight`-style labelling into the body H2 or as a pill under H2. 8 unique awards for 8 wines. Requires no new component if we use the `highlight` prop pattern already proven on TopPicksInline and just mirror it.

### Pattern E — E-E-A-T / named-expert voice missing from body copy

Appears in: **6 of 16 audits** (red beginners, dry red, full-bodied, crisp white, light red, non-drinkers; flagged in under-30, sweet red).

- **Competitors:** Wine Enthusiast quotes 4 named staff writers with credentials; Cellar Beast features Matt Check (Level IV Sommelier) with photo/bio; Serious Eats uses a 4-shop-owner panel; Lexi has persistent author photo + tasting-club CTA; Coravin quotes Sara Speretto.
- **Us:** Claire Bennett byline exists on all pages. No in-body pull-quotes, no credentials surfaced on page, MethodologyBox doesn't cite external sommeliers.
- **Fix:** (a) add a one-line "Wine editor Claire Bennett, reviewed X bottles across Y grapes for this guide" strip under each intro; (b) add a single named-critic pull-quote inside MethodologyBox or as a secondary block on the most competitive pages (dry red, full-bodied, buttery chard, crisp white); (c) **Iris flag** — confirm Claire's credentials with Jade (WSET level? tasting count?) before claiming them.

**Conflict:** under-30 audit says "don't invent fake sommeliers; lean on cited critics already in props." Red-beginners audit flags adding "WSET Level II Certified" to Claire's byline **only if factually accurate**. These agree in principle — route through Iris for fact-check, not through Lia to generate.

---

## 3. What we already lead on (preserve, don't touch)

Cross-cutting features we have that no competitor matches in multiple clusters:

- **WineQuiz** — interactive food/occasion/style wine-matcher. Present on all 16 pages. **Zero competitors** have an interactive quiz on any of the 16 keywords.
- **MethodologyBox** — dedicated 4–6-criterion selection-criteria block. No competitor has an equivalent E-E-A-T structure (they either have "Why trust us" footers or skip it).
- **TopPicksInline** — 3-card sticky sidebar with `highlight` labels and ranking badges. Unique pattern.
- **AffiliateCTA with SVG ring-chart critic scores + food-pairing tags + 4.x-star customer rating** — closest competitor is Wine Enthusiast's points badge, but we layer score + stars + pairings + method in one block.
- **Deep FAQ counts** — 10 FAQs on sweet red, 9 on non-drinkers, 7 on beginners/crisp white/buttery chard/dry red/full-bodied/light red. Most competitors run 3–6. Our FAQ depth is a real moat **if schema emits** (see Pattern F below).
- **Week-by-week tasting plan** on `best-wine-for-beginners` — nobody else structures the guide as a sequential drinking curriculum.
- **Voice-guide-compliant intros** that normalise reader preferences (sweet red: "Liking sweet red wine is a completely valid preference"). No competitor opens this way on sweet-red or non-drinker keywords.
- **GERD-friendly FAQ** on crisp white. Uniquely serves a real reader health segment.
- **Sub-style WineQuiz taxonomies** (ultra-buttery / fruit-forward / balanced / elegant on buttery chard; crisp-fruity / aromatic / mineral / bone-dry on crisp white) — finer than any competitor's style sort.

---

## 4. Priority-ordered rework list

Ranked by total rework impact (count gap + feature gap + SERP position). Use this ordering for sequencing Lia's redraft queue.

| Rank | Slug | Top 1–2 actions |
|------|------|------------------|
| 1 | best-wines-under-20 | Expand 8→20; add Style Selector filter strip (novel) |
| 2 | best-wines-under-30 | Expand 8→20; ship Flavour Profile radar chart per wine |
| 3 | best-sweet-red-wine | Promote 2–3 secondary wines to primary (8→10–11); add Sweetness-vs-Body scatter matrix + per-wine Region/ABV/RS/Sweetness block |
| 4 | best-non-alcoholic-wines | Promote 3 secondary→primary (8→11); add Dealcoholization Method + Sugar Profile table; category H2 groupings |
| 5 | best-buttery-chardonnay | Add 2 wines (8→10, Bread & Butter + Dark Horse/Prisoner); Butter Intensity Matrix |
| 6 | best-red-wine-under-20 | Expand 10→12–15; Price-vs-Critic-Score scatter; grape-blend % per wine |
| 7 | best-light-red-wines | Add 2 wines (8→10, Grenache + Dolcetto/Cinsault); `<LightRedSpectrum>`; serving-temp table |
| 8 | best-full-bodied-red-wines | Add 2 wines (8→10, Priorat Garnacha + Tannat or Paso Cab); `<HeavyweightCard>` with decant-minutes |
| 9 | best-dry-red-wines | `<DrynessFingerprint>` component per wine; inline RS g/L values; add Carmenère |
| 10 | best-wines-under-15 | Add 2 wines (8→10); Value Rating (pts/$) badge; organic/sustainable tags |
| 11 | best-red-wines-for-beginners | Add Beginner Gateway Map (3-tier progression); at-a-glance comparison table; body-weight H2 grouping |
| 12 | best-wine-for-non-wine-drinkers | Add 2 wines (8→10, Gewürztraminer + fruit/low-alc); `<NonDrinkerMatcher>`; interlink to NA page |
| 13 | best-white-wines-for-beginners | Beginner Style Matrix table (8 rows, 6 cols); Key Takeaways box above fold |
| 14 | best-wine-for-beginners (umbrella) | Beginner Wine Decision Tree ("which drink do you enjoy most?"); Key Wine Terms glossary |
| 15 | best-crisp-white-wines | Acidity & Body Positioning Map; style-tier H3 groupings; "labels to look for" per wine |
| 16 | best-wine-for-mulled-wine | Mulling Suitability Matrix table (4 cols × 8 rows); 200–300-word White Mulled Wine section; explicit "wines to skip" block |

---

## 5. Top 10 sitewide actions (ranked by impact × effort)

| # | Action | Impact | Effort | Owner |
|---|--------|--------|--------|-------|
| 1 | **Count expansion across the 8 most-under-median pages** — under-20 to 20, under-30 to 20, sweet red to 10–11 primary, NA to 11 primary, buttery chard to 10, light red to 10, full-bodied to 10, under-15 to 10 | H | H | **Lia** (fresh wine research) |
| 2 | **FAQPage JSON-LD sitewide verification** — emission flagged unverified in 8 audits (mulled, red-beginners, dry red, light red, full-bodied, non-drinkers, NA, crisp white). Audit the Astro template once, fix once, compounding rich-result real estate across all 16 pages | H | L | **Dana / schema work** |
| 3 | **Build the 2D matrix / spectrum component library** — `<DrynessFingerprint>`, `<LightRedSpectrum>`, `<HeavyweightCard>`, `<ButterIntensityMatrix>`, `<SweetnessBodyScatter>`, `<AcidityTextureMap>`, `<FlavourProfileRadar>`. Share one underlying `<DotScaleRow>` primitive; each page wraps it differently | H | H | **Dana / new component hire** |
| 4 | **Per-wine structured data block** under each H2 (Region / ABV / RS / Pairing) — standardised micro-spec strip rendered from frontmatter. Lia captures data; component renders consistently | H | M | **Dana (component) + Lia (data)** |
| 5 | **Category-award badges in H2** — mirror TopPicksInline's `highlight` pattern in body headings. 8 unique awards per 8-wine page | M | L | **Lia** (labelling); **Dana** (optional pill component) |
| 6 | **Review/Rating JSON-LD on AffiliateCTA** — critic scores already exist in props; surface as schema.org/Review to match Wine Enthusiast's SERP treatment | H | M | **Dana / schema work** |
| 7 | **`<NonDrinkerMatcher>` + Beginner Gateway Map + Beginner Decision Tree** — three novel routing components across the 3 beginner-intent pages. Share routing-chip primitive | H | M | **Dana / new component work** |
| 8 | **E-E-A-T author strip** — "Claire Bennett, Wine Editor, reviewed X bottles for this guide" one-liner under every intro. Add one named-critic pull-quote in MethodologyBox on the 4 most-competitive pages (dry red, full-bodied, buttery chard, crisp white). **Pre-req: Iris fact-checks Claire's credentials with Jade** | M | L | **Iris fact-check → Lia** |
| 9 | **Style-category H2 groupings on high-variance pages** — NA (Red/White/Sparkling), sweet red, crisp white (tier H3s), red beginners (body weight), mulled (add "White Mulled Wine" section). Pure content restructuring; no new research | M | L | **Lia** (content restructure only) |
| 10 | **"Labels to look for" + production-method tags** — inline appellation keywords per wine on crisp white; organic/sustainable/biodynamic tags on under-15, NA, sweet red, under-30. Low-effort absorption-zone win | M | L | **Lia (data)** + **Dana (tag component)** |

---

## 6. Orchestration notes for Iris

**Fresh wine research (Lia, Stage 2 redraft from scratch):**
- under-20 (need 12 new wines)
- under-30 (need 12 new wines)
- red-under-20 (need 2–5 new wines)
- under-15, buttery chard, light red, full-bodied, non-drinkers (need 2 new wines each)
- sweet red + NA (need 2–3 promotions from existing secondary sections — not fresh research, but requires Lia expanding mini-reviews into full H2s with AffiliateCTA data)

**Site / component work (Dana or new component hire):**
- **One shared primitive** (`<DotScaleRow>` or similar) powers `<DrynessFingerprint>`, `<HeavyweightCard>`, `<LightRedSpectrum>`, `<ButterIntensityMatrix>`, `<SweetnessBodyScatter>`, `<AcidityTextureMap>`, Beginner Style Matrix
- **`<WineDataBlock>`** micro-spec strip under H2 (Region/ABV/RS/Method fields, shown conditionally based on props)
- **Routing components:** `<NonDrinkerMatcher>`, Beginner Gateway Map, Beginner Decision Tree — share a chip-selection primitive
- **Style Selector filter strip** for under-20
- **Category-award pill** component (if we don't reuse `highlight` as-is)
- **Pinterest-sized vertical hero** workflow (flagged on light red + non-drinkers) — image pipeline, not a component per se

**Schema / SEO hygiene (Dana):**
- FAQPage JSON-LD — verify emission sitewide, fix once
- Review/Rating JSON-LD on AffiliateCTA critic scores
- Article schema author/datePublished/dateModified verification (flagged on light red, full-bodied, dry red)

**Pure content restructuring (Lia, no new research):**
- All style-category H2 groupings (NA, crisp white tiers, red-beginners body-weight)
- Category-award badges in H2 (8 unique tags per page)
- E-E-A-T author strip (after Iris fact-check)
- Key Wine Terms glossary on umbrella beginner page
- "Wines to skip" H3 on mulled
- 200–300-word White Mulled Wine section on mulled
- "Labels to look for" one-liners on crisp white

**Iris fact-check required before Lia touches:**
- Claire Bennett's real credentials (WSET level, tasting volume, years). Multiple audits recommend surfacing E-E-A-T; only valid if factually accurate.

---

## Cross-audit conflicts flagged for Iris

1. **E-E-A-T authorship approach (Pattern E).** Under-30 audit: lean on cited critics already in props. Red-beginners audit: add Claire's own credentials only if factual. Crisp-white audit: add "expert panel" pull-quotes (requires outreach). **Resolution needed:** which of the three is the site default? Recommendation: start with real Claire credentials (after fact-check) and cited-critic quotes; defer outreach-based expert panels.
2. **Wine count expansion ceiling on non-umbrella pages.** Red-beginners audit recommends **not** expanding past 8 ("depth beats breadth"). Under-price audits + full-bodied + light red audits all recommend 10+. **Resolution needed:** treat red-beginners as genuinely a narrow-intent page where 8 is correct, and preserve that exception.
3. **Crisp white wine count hold.** Crisp-white audit explicitly says "do not inflate count, we're at median" — this conflicts with the sitewide impulse to expand. Treat as correct; §1 recount priority is L for this page.
4. **"Per-bottle price inline" strategy.** Every audit flags competitor practice of showing prices inline and explicitly recommends **not closing that gap** — Wine.com geographic-pricing strategy is handoff.md operating law. No conflict but noting here so Lia doesn't drift.
5. **NeuronWriter verification (Dana).** Five audits reference specific NW query IDs (white-beginners `059c66d8cb03b277`, umbrella beginners `66f53c5530c24640`, buttery chard `1e9ed30eced09f40`, crisp white `c11fd1e260102f89`, non-drinkers `968e1fc70f871c50`). All flag "verify new structural work doesn't displace existing term coverage." This is a Dana verification loop **after** any rebuild, not a conflict.

---

**End master audit.**
