# SERP Analysis — `best prosecco`

**Auditor:** Lino (SERP / Competitor Researcher)
**Date:** 2026-04-18
**Keyword:** `best prosecco` (4.4K volume)
**Target slug:** `/best-wines/best-prosecco/`
**Method:** `/serp-scraper` (single authorised call, 10 results scraped) + Claude in Chrome for PAA / related-search extraction.
**Location:** US SERP (`location: "United States"` passed to the scraper).
**PAA block:** Google is not rendering a formal "People also ask" block for this query. Two Reddit thread titles surface in the results-strip as the closest equivalent. Related-search chips captured below.

---

## 1. Top 10 ranking pages

| # | URL | Title | Host type |
|---|-----|-------|-----------|
| 1 | `foodandwine.com/proseccos-for-mimosa-taste-test-11856601` | We Tasted 6 Proseccos — This Under-$20 Pick Is Best for Mimosas | Editorial taste test (narrow intent — mimosas) |
| 2 | `uncorked.com/prosecco/` | Find Top Prosecco Wines Today — Uncorked | Retailer category page (9 products) |
| 3 | `reddit.com/r/wine/comments/1f2v7vv/high_end_prosecco_recommendations/` | High end Prosecco recommendations : r/wine | Forum (blocked from scrape — thin content) |
| 4 | `forbes.com/sites/keylavasconcellos/2025/11/13/the-best-prosecco-bottles-to-gift-for-a-sparkling-holiday/` | The Best Prosecco Bottles To Gift For A Sparkling Holiday | Editorial listicle — gift angle |
| 5 | `cnn.com/cnn-underscored/health-fitness/best-prosecco-sparkling-wine` | Best prosecco and sparkling wine, tested by editors | Editorial taste test + buying guide |
| 6 | `buywinesonline.com/collections/prosecco-region-wines` | Shop the Best Prosecco from Italy | Retailer category (9 products, faceted) |
| 7 | `foodanddrink.scotsman.com/.../i-tried-9-bottles-of-prosecco-to-find-the-best-christmas-fizz-here-are-the-best-and-worst/` | I tried 9 bottles of Prosecco to find the best Christmas fizz | Newspaper lifestyle column (UK supermarket focus — 9 picks) |
| 8 | `youtube.com/watch?v=4TYmXONUcE8` | BEST Prosecco Under $25 and One I HATE | Value Wines | YouTube video (07:30, 1K views — thin ranking signal) |
| 9 | `totalwine.com/theme/shop-the-best-prosecco` | Shop The Best Prosecco | Total Wine & More | Retailer theme page (scrape-blocked — thin content) |
| 10 | `wineenthusiast.com/ratings/wine-ratings/best-prosecco-wine-italy/` | The Best Prosecco Wines to Buy Right Now | Wine Enthusiast | Critic listicle — style-categorised |

**SERP shape diagnosis:** intent-mixed, leaning editorial.
- 4 editorial listicles / taste tests (#1, #4, #5, #10) — the lane we compete in
- 3 retailer category pages (#2, #6, #9)
- 1 UK supermarket newspaper column (#7) — geo-specific, weakly relevant to US readers
- 1 Reddit thread (#3) — forum authority ranking on a branded query cluster ("recommendations")
- 1 YouTube video (#8) — video intent bleeding through

Editorial lane holds 4 of 10. Wine Enthusiast (#10) is the only fully style-categorised critic site in the top 10 — that structure is the clearest rankable moat on this SERP. CNN (#5) brings the most depth (10 wines, scoring table, 6+ sommelier quotes, FAQ-style H2 scaffold). Forbes (#4) brings the holiday/gift angle. Food & Wine (#1) is narrow-intent (mimosas) — narrower than a reader searching "best prosecco" likely wants.

---

## 2. Wine counts (body-counted from H2/H3 headings + pick markers)

| # | URL | Wine count (body) | Shape |
|---|-----|-------------------|-------|
| 1 | foodandwine | **6 wines** | Mimosa-specific taste test, ranked 1–6, with 3 H2-titled winners + a final ranked list |
| 2 | uncorked | 9 products | Retailer category — Glera + Pinot Noir, $7.99–$56.99, 94pt WE-rated headline pick |
| 3 | reddit | — | Forum thread (scrape blocked) |
| 4 | forbes | **8 wines** | Gift-focused listicle, no ranking, one H2 per wine |
| 5 | cnn | **8 wines** | 4 "What we liked" + 4 "Other proseccos we tested" |
| 6 | buywinesonline | 9 products | Retailer category, 3 rated 90+ |
| 7 | scotsman | **9 wines** | UK supermarket round-up with /5 star ratings |
| 8 | youtube | ~5 wines | Under-$25 video, 7:30 runtime |
| 9 | totalwine | — | Retailer theme page (scrape blocked) |
| 10 | wineenthusiast | **10 wines** | 5 style categories (Col Fondo / Conegliano Valdobbiadene / Asolo / Brut / Extra Dry) × 2 wines each |

**Editorial listicle median (excluding retailers, forum, YouTube):** 6, 8, 8, 9, 10 → **median = 8 wines; ceiling = 10**.

**Recommended Lia target: 12 wines minimum, 14 ideal.** Rationale:
- The editorial median is 8 — ship 12 and we're already above every competitor except Wine Enthusiast.
- Wine Enthusiast's 10 wines across 5 style buckets is the best-structured competitor. A 12–14-wine list mapped across 5+ style buckets (Brut / Extra Dry / Col Fondo / Rosé / Cartizze or Superiore DOCG) matches their shape and exceeds their count.
- Going to 14 lets us add a Brut Nature entry and a bottle under $15 so the list spans the price spectrum competitors already show (Scotsman £7.65–£13.99, CNN $14–$24, Wine Enthusiast $11–$42).
- The site's default-of-8 would be at the median — not above it. Per handoff.md's 2026-04-18 operating law, we ship **above** the median. 8 is banned for this keyword.

---

## 3. Feature inventory

| Feature | F&W #1 | Forbes #4 | CNN #5 | Scotsman #7 | WineEnth #10 | Us (planned) |
|---------|--------|-----------|--------|-------------|--------------|--------------|
| Numbered ranking | Yes (1–6 final list) | No | No (award-titled picks) | No | No | No (award-titled) |
| Per-wine price inline | No (retailer links only) | No (producer links only) | Yes ($14, $19, $24) | Yes (£7.65–£13.99) | **Yes ($11–$42)** | No (shelf-price range allowed per handoff.md) |
| Per-wine ABV | No | No | No | No | No | **Open lane — adopt** |
| Per-wine critic score | No | No | No | Yes (X/5 stars) | **Yes (WE 90–92 pts)** | Yes (AffiliateCTA ring chart) |
| Style / category buckets | No | No | No | No | **Yes — 5 H2 buckets (Col Fondo / Conegliano Valdobbiadene / Asolo / Brut / Extra Dry)** | Proposed: 5 buckets (Brut / Extra Dry / Rosé / Col Fondo / Superiore DOCG) |
| "Best for X" award labels | Yes (Best overall, Most classic, Best balance) | No | **Yes (Best overall / Best fruit-forward / Best for brunch / Best wildcard)** | No | No | Proposed: reuse `highlight` prop per H2 |
| Named tasters / experts | Yes (6 named F&W editors) | No | **Yes — 7 named sommeliers + 10 named CNN editor tasters** | Yes (David Hepburn) | **Yes (Jeff Porter "J.P." + Kerin O'Keefe)** | Claire Bennett byline only |
| Tasting note per wine | Yes (casual prose) | Yes (holiday-framed prose) | Yes (medium prose + quotes) | Yes (short casual prose) | Yes (professional prose) | Yes (Lia-authored) |
| Food pairing suggestions | No | No | Sometimes | No | Sometimes | Yes (AffiliateCTA food tags) |
| Cocktail / mimosa guidance | **Yes — entire article is mimosa-framed** | No | **Yes — dedicated "popular cocktails" + "Aperol Spritz" H2** | No | No | **Open lane — dedicated H2 is a clear gap-fill** |
| Prosecco DOC vs DOCG explainer | No | Partial ("protected name") | Partial ("DOCG label") | No | **Yes — explicit Col Fondo / DOCG / Asolo / Brut / Extra Dry explainers** | **Open lane — must absorb** |
| Charmat vs traditional method | No | No | Yes (1 para) | No | **Yes — "Rifermentato vs. Traditional Method Sparklers" H2** | **Open lane — absorb** |
| FAQ block (dedicated) | No | No | Partial ("What is prosecco?" etc. as H2s, not FAQ block) | No | No | **Yes — 8–10 FAQs (our moat)** |
| Comparison / scoring table | No | No | **Yes — 4-dim scoring table (fruit character, sweetness, carbonation, acidity, each 1–5)** | No | No | **No (open lane — adopt CNN's scoring axes and extend)** |
| Methodology disclosure | Yes (H2, criteria list) | No | **Yes ("How we tested" H2 + bullet criteria)** | No | Implicit (WE editorial team) | **Yes — MethodologyBox (our moat)** |
| Video embed | No | No | No | No | No | No |
| Interactive quiz / filter | No | No | No | No | No | **Yes — WineQuiz (our moat)** |
| Sweetness / body scale | No | No | **Partial (scoring table has sweetness 1–5)** | No | No | **Open lane — visualise** |
| 2D positioning matrix | No | No | No | No | No | **No (open lane)** |
| Buy link per wine | Yes (retailer affiliate) | Yes (producer direct) | Yes (Total Wine / Wine.com) | Yes (UK supermarkets) | Yes (Cellar d'Or / Tannico etc.) | Yes (AffiliateCTA → Wine.com) |
| Holiday / gift framing | No | **Yes — entire frame** | No | Yes (Christmas-framed) | No | **Open lane — one secondary H2 if season-timed** |
| Aperol Spritz / cocktail use-case | No (mimosa-focused) | Partial | **Yes — expert panel on spritz/mimosa/Hugo Spritz** | No | No | **Open lane — dedicated FAQ + WineTip** |
| Price-tier segmentation | No | No | No | No | Implicit (spans $11–$42) | **Open lane — "Under $15 / $15–25 / $25+" H3 sub-groups** |

**Note — retailer pages (#2, #6, #9) excluded from the feature matrix.** Their primary features are filter facets (price, vintage, rating, region) + product grids. We're not competing on retailer UX.

---

## 4. Related searches / query-expansion signal

From the live "People also search for" block on Google (SERP geo leaking AU for some chips — US equivalents inferred):

1. Best prosecco reddit (forum intent — #3 in SERP serves this)
2. Best Prosecco to gift (gift intent — Forbes #4 serves this)
3. Best Prosecco for Aperol Spritz (cocktail intent — underserved by top 10)
4. Best prosecco under $20 / under $25 (price-tier intent — CNN/F&W partially serve)
5. Best prosecco in Australia / Dan Murphy / BWS / Liquorland (AU-geo chips — ignore for US page, but signal that retailer-specific searches are strong)

Forum-style questions surfacing in SERP titles (Reddit `r/wine`):
- "High end Prosecco recommendations" (#3)
- "Recommendations for prosecco brands" (neighbouring Reddit thread)

Implicit intent clusters we should absorb into FAQ scaffold:
- **Style split:** Brut vs Extra Dry vs Dry (CNN and Forbes both call this out; Wine Enthusiast builds entire structure around it)
- **Tier split:** DOC vs DOCG vs Prosecco Superiore (Wine Enthusiast + Forbes mention)
- **Region split:** Conegliano Valdobbiadene vs Asolo vs Treviso (Wine Enthusiast only)
- **Method split:** Charmat vs Rifermentato/Col Fondo (Wine Enthusiast only — knowledge moat to absorb)
- **Use-case split:** Mimosa vs Aperol Spritz vs Hugo Spritz vs drink-alone (CNN + F&W)
- **Price split:** under $15 vs $15–25 vs premium ($25+)
- **Prosecco Rosé:** added to category in 2020 (Forbes mention) — underserved

**FAQ seeds for Lia** (map each to a dedicated FAQ question):
- What is the best prosecco brand? (core query)
- What is the best prosecco under $20? (price tier — most-asked)
- What is the best prosecco for an Aperol Spritz? (cocktail use-case — gap in top 10)
- What is the best prosecco for mimosas? (alternate cocktail use — F&W-style)
- What is the best Prosecco Rosé? (new 2020 category — Forbes mentions, none focus on it)
- What's the difference between Prosecco and Champagne? (every top page touches this — easy absorption)
- What's the difference between DOC and DOCG Prosecco? (knowledge gap — Wine Enthusiast owns)
- What's the difference between Brut and Extra Dry Prosecco? (style clarification — CNN, Forbes partially)
- What is Col Fondo Prosecco? (Wine Enthusiast only — rare-term FAQ)
- Is Prosecco sweet or dry? (beginner intent)
- What temperature should Prosecco be served at? (CNN answers — absorb)
- How long does an open bottle of Prosecco last? (standard prosecco FAQ — nobody in top 10 answers this directly)

---

## 5. Structural choices we should match or beat

| Move | Source | Why it matters |
|------|--------|----------------|
| **Style-category H2 grouping** (Brut / Extra Dry / Rosé / Col Fondo / Superiore DOCG) | Wine Enthusiast #10 | The only top-10 competitor using style buckets. Mirrors how sommeliers actually segment the category. Gives Google 5 clean topic clusters per page. |
| **"Best for X" per-wine award labels** | CNN #5 (best overall / best fruit-forward / best for brunch / best wildcard), F&W #1 | Easy to beat — extend to 12–14 awards (Best Under $15, Best Rosé, Best for Aperol Spritz, Best Col Fondo, Best Organic, etc.). Reuse `highlight` prop on H2, no new component needed. |
| **Scoring table across 4+ axes** | CNN #5 (fruit character / sweetness / carbonation / acidity, each 1–5) | CNN's table is their signature feature. We can adopt the same 4 axes and add a 5th (value / price-per-quality) plus visualise it (novel feature #1 below). |
| **Named taster quotes** | CNN #5 (7 sommeliers + 10 editors), Wine Enthusiast (J.P. + Kerin O'Keefe), F&W (6 editors) | E-E-A-T signal. Claire Bennett pull-quote on 2–3 top picks absorbs this. Pending Iris fact-check on Claire's credentials per master audit §5 Pattern E — do not invent external sommeliers. |
| **Charmat vs Rifermentato explainer** | Wine Enthusiast #10 | Unique knowledge asset in the top 10. Matches "What is Col Fondo?" FAQ intent. Absorbable as a secondary H2 + FAQ cluster. |
| **DOC / DOCG / Prosecco Superiore explainer** | Wine Enthusiast + Forbes partial | Absorb as a dedicated H2 ("Understanding Prosecco's quality tiers") or compressed into 2–3 FAQs. |
| **Aperol Spritz / cocktail use-case section** | CNN #5 (1 H2 + sommelier quote panel), F&W #1 | Aperol Spritz is the #3 related-search chip. CNN buries it mid-article. Ship a dedicated "Best Prosecco for Cocktails" WineTip or secondary H2. |
| **Methodology disclosure** | F&W + CNN (both with criteria lists) | We already ship MethodologyBox — tighten the criteria list to match their scoring axes (acidity / sweetness / bubble quality / fruit / value). |
| **Price inline per wine** | CNN, Scotsman, Wine Enthusiast | Handoff.md bans live Wine.com inline price. Ship **"Typical shelf price: $X–$Y"** as a static range per wine in `<WineDataBlock>`. This closes the gap without breaking the pricing rule. |
| **Prosecco Rosé coverage** | Forbes #4 (1 pick), Scotsman #7 (1 pick), Wine Enthusiast (1 pick in Extra Dry bucket) | All three cover it weakly. A dedicated Rosé bucket with 2 picks meets and exceeds every competitor on this sub-category. |

---

## 6. Novel feature recommendations (at least one competitor does not have)

All four are novel across the top 10 — **zero competitors have anything like these.**

### Novel #1 (recommended primary): **Prosecco Style Positioning Matrix (sweetness × body)**

A `<DotScaleRow>`-style 2D scatter plotting all 12–14 wines:
- **X-axis:** Brut Nature → Brut → Extra Dry → Dry → Demi-Sec (sweetness spectrum, mapped to residual sugar)
- **Y-axis:** light-bodied → full-bodied (1–5)
- Rosé bottles rendered in pink, Col Fondo in amber, Brut in white, Extra Dry in pale yellow for instant visual differentiation.

CNN has a scoring table with these dimensions but doesn't visualise them. Wine Enthusiast uses style categories as H2s but provides no visual bridge between styles. This chart gives readers who know "I want something dry and lighter" a single look to land on their cluster.

Maps to master-audit Pattern B (2D positioning matrices absent from every competitor SERP). Shared `<DotScaleRow>` primitive with the proposed Value scatter on `best-red-wine-under-20` and the sweetness-body matrix proposed for `good-cheap-wine`.

### Novel #2: **Method-and-terroir quick-match chip strip**

Above the wine list, a row of anchor chips:
`[Brut] [Extra Dry] [Rosé] [Col Fondo] [Superiore DOCG]`

Each chip scrolls to the corresponding H2 cluster. Directly serves the style-split + method-split reader intents surfaced in section 4, without creating separate pages. Matches Wine Enthusiast's structural advantage and gives our page an interaction mechanic Wine Enthusiast doesn't have.

### Novel #3: **"Best for the occasion" cross-reference strip**

A small block near the top of the wine list (or inside the first WineTip) with 4–6 badges linking to individual picks:
`[Best for Aperol Spritz] [Best for Mimosas] [Best for a Gift] [Best for Drinking Solo] [Best Under $15] [Best Prosecco Rosé]`

This is explicitly the structure CNN uses for its "What we liked" awards, but extended to cover occasion + cocktail intents that currently have NO dedicated listicle in the top 10 (only F&W #1 handles mimosas, only CNN handles cocktails, nobody handles Aperol Spritz directly — which is the #3 related-search chip). One strip claims three neighbouring queries' worth of intent.

### Novel #4: **Residual sugar + ABV spec strip per wine**

Inside each wine's `<WineDataBlock>`, include a 5-field spec strip:
- Region (DOC vs DOCG vs Superiore)
- Style (Brut / Extra Dry / Rosé / Col Fondo / Brut Nature)
- Residual sugar (g/L or Brut Nature/Brut/Extra Dry label)
- ABV (always — low-ABV value reader cares)
- Typical shelf price range ($X–$Y)

No competitor displays residual sugar explicitly despite the entire category being segmented by it. ABV is absent from every top-10 competitor. Adding both makes the page the most informationally dense Prosecco guide on the SERP.

**Recommended: ship Novel #1 (Style Positioning Matrix) + Novel #3 (Best-for-occasion strip) minimum. Novel #2 (chip strip) is low-effort and high-UX — ship if the component budget allows. Novel #4 is a content-density win with no new component required.**

---

## 7. Summary actions for Lia's brief

1. **Wine count target: 12 minimum, 14 ideal.** Above the editorial median of 8, above Forbes's 8, above CNN's 8, above F&W's 6, matching or exceeding Wine Enthusiast's 10 ceiling. Not 8.
2. **Structure: style-category H2 buckets** — Brut / Extra Dry / Rosé / Col Fondo / Superiore DOCG (or a Superiore / Cartizze split if the wines support it). Match Wine Enthusiast's winning structural shape. Minimum 4 buckets, 5 ideal.
3. **Per-H2 "Best for X" award label** (reuse `highlight` prop): e.g. "Best Brut / Best Extra Dry / Best Prosecco Rosé / Best Col Fondo / Best Superiore DOCG / Best Under $15 / Best for Aperol Spritz / Best for Mimosas / Best for a Gift / Best Organic / Best Value / Best Bubbles." One unique award per primary pick.
4. **Per-wine `<WineDataBlock>` spec strip:** Region (DOC/DOCG/Superiore), Style, Residual sugar tier, ABV, Shelf-price range. ABV and residual sugar are gap-fills against every top-10 competitor.
5. **Novel feature #1 (Sweetness × Body positioning matrix):** prioritise as the signature visual. Shared `<DotScaleRow>` primitive with the matrices proposed for `best-red-wine-under-20` and `good-cheap-wine`.
6. **Novel feature #3 (Best-for-occasion chip strip):** above the wine list, 4–6 anchor chips linking to the primary picks. Serves Aperol Spritz + mimosa + gift + solo-drink intents in one component.
7. **Secondary H2 — "Prosecco 101: styles, methods and regions":** absorb Wine Enthusiast's Charmat / Rifermentato / DOCG explainer content. One H2, 3–4 short paragraphs.
8. **Secondary H2 — "Best Prosecco for Aperol Spritz":** directly serves the #3 related-search chip that the top 10 doesn't own. 150–200 words pointing to 2 picks from the wine list.
9. **FAQ expansion:** 10+ FAQs seeded from §4 — brand question, under-$20 tier, Aperol Spritz, mimosa, Rosé, Prosecco vs Champagne, DOC vs DOCG, Brut vs Extra Dry, Col Fondo, temperature, storage. FAQ depth is already our moat.
10. **Protect the intro.** Prosecco readers don't need a 300-word hook about bubbles. Two or three short paragraphs max — then get them into the wines. NeuronWriter terms (Charmat, Glera, Valdobbiadene, Conegliano, Treviso, DOCG, Col Fondo, Rifermentato etc.) all absorb naturally in the style-bucket H2 intros and FAQs, never in paragraphs 1–3. Per handoff.md operating law.
11. **Named-taster credit — pending.** Per master audit §5 Pattern E, flag to Iris for Claire Bennett credential fact-check before pull-quoting her on this page. Do not invent external sommeliers.
12. **Prosecco Rosé must be in the list.** Only one or two top-10 competitors include one, and it's always buried. A dedicated Rosé bucket with 2 picks is the cheapest structural moat available on this SERP.

---

## 8. Pre-handoff checklist

- [x] SERP pulled live 2026-04-18 (not cached); one `/serp-scraper` call, no recrawls, no retries
- [x] 10 URLs retrieved; 7 returned substantive content (Reddit, Total Wine, YouTube thin — all 3 noted, not re-fetched)
- [x] Wine counts body-counted from H2/H3 headings + pick markers, not title-counted (F&W title says "6 Proseccos" — confirmed; others verified against body)
- [x] SERP median recorded (editorial-only: 8 wines); Lia's target set above it (12 minimum, 14 ideal)
- [x] Feature inventory table included with named table/widget/graph types (e.g. CNN's 4-dim 1–5 scoring table, Wine Enthusiast's 5-bucket category structure)
- [x] Four novel-feature recommendations (Style Positioning Matrix, Style chip strip, Best-for-occasion strip, Residual-sugar spec strip) — all specific
- [x] Related-searches chips captured (the PAA-equivalent signal for this query — no formal PAA block renders)
- [x] Forum-style Reddit thread titles captured
- [x] Every structural claim carries a URL + body-counted evidence
- [x] Our own page excluded (we have no existing `/best-wines/best-prosecco/` yet — confirmed via glob on `src/content/articles/best-wines/`)
- [x] File lands in `seo/audits/best-prosecco-serp-analysis.md` per Iris's brief
- [x] Firecrawl credits used: 1 search call (10-result scrape). Claude in Chrome used for PAA + related-search extraction. No recrawls, no retries. Within the authorised tool budget.

---

**End SERP analysis.**
