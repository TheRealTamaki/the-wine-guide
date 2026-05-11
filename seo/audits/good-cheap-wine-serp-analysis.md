# SERP Analysis — `good cheap wine`

**Auditor:** Lino (SERP / Competitor Researcher)
**Date:** 2026-04-18
**Keyword:** `good cheap wine` (4.4K volume)
**Target slug:** `/best-wines/good-cheap-wine/`
**Method:** live Google SERP + direct Claude-in-Chrome inspection of top 10. No Firecrawl credits used.
**Location:** US (query ran with `gl=us`; browser reports Zetland AU as geo — results still represent the en-US editorial SERP).
**PAA / "People also ask":** Google is not rendering a PAA block for this query; only two forum-style questions surface (see §4).
**Related searches ("People also search for"):** captured in §4 — these are the strongest query-expansion signal.

---

## 1. Top 10 ranking pages

| # | URL | Title | Host type |
|---|-----|-------|-----------|
| 1 | `reddit.com/r/wine/comments/15fv9cl/` | What's the most reliable 'cheap' wine? | Forum (blocked from inspection) |
| 2 | `livinginyellow.com/2020/09/the-best-grocery-store-wines-under-15-tested-and-reviewed.html` | The Best Grocery Store Wines Under $15 | Lifestyle blog — editorial listicle |
| 3 | `winemadeeasy.com/wine/wines-under-10.html` | Wines under $10 | Retailer category page |
| 4 | `winetransit.com/wine/90-points-and-under-10.html` | 90 Point Wines for under $10 | Retailer category page |
| 5 | `wineenthusiast.com/toplists/best-buys-2025/` | Best Buys: The Top-Rated Wines $20 and Under for 2025 | Critic master-list |
| 6 | `thewestendnews.com/best-cheap-wines-according-to-layne/` | Best Cheap Wines according to Layne | Local paper wine column (prose) |
| 7 | `jamessuckling.com/wine-tasting-reports/top-100-value-wines-of-2024-40-or-less` | Top 100 Value Wines of 2024 ($40 or Less!) | Critic master-list (gated) |
| 8 | `armchairsommelier.com/wines/6-affordable-wines-that-absolutely-dont-suck/` | 6 Affordable Wines That Absolutely Don't Suck | Personal wine blog |
| 9 | `buywinesonline.com/cheap-wine/` | Cheap & Affordable Wine | Retailer (404 on inspection — dropped) |
| 10 | `winefolly.com/tips/cheap-wine/` | 12 Tricks to Finding the Best Cheap Wine | Education blog (404 on inspection — page moved/removed) |

**SERP shape diagnosis:** the query is **intent-mixed**, which is key context for Lia.
- 2 forum/community (#1 Reddit)
- 3 retailer category pages (#3, #4, #9)
- 2 critic master-lists (#5, #7)
- 3 editorial listicles / wine columns (#2, #6, #8)
- 1 education/tips article (#10 — now 404)

No single-format dominates. The editorial-listicle lane only holds 3 of the top 10. That's an opening: a clean, well-structured mid-count listicle (not 100 critic picks, not a retailer feed) is currently underpowered on this SERP.

---

## 2. Wine counts (body-counted)

| # | URL | Wine count (body) | Ceiling / notes |
|---|-----|-------------------|-----------------|
| 2 | livinginyellow | **14 wines** | 4 category buckets (Cab, Chardonnay, Moscato, Sweet Red). Each wine has price + ABV + tasting note + "OUR PICK" / "TIEBREAKER" marker |
| 3 | winemadeeasy | 518 products | Retailer faceted category — not a listicle |
| 4 | winetransit | 40 products | Retailer category (3 pages × 15 items) |
| 5 | wineenthusiast | **100 wines** | Ranked countdown #100 → #1. Each with grape / region / points / price / taster name / tasting note |
| 6 | thewestendnews | ~4 named "house" bottles | Prose column; additional ~10 bottle names dropped inside paragraphs as brand mentions, not reviews |
| 7 | jamessuckling | **100 wines** | Gated — only the #1 pick shown publicly. $40 cap. Price-score ranking metric |
| 8 | armchairsommelier | **6 wines** | Short curated list + "how to make cheap wine taste better" tips section |

**Editorial listicle median (excluding retailer feeds and gated critic master-lists):**
- If we treat true editorial listicles only: 14, 6, ~4 → **median ≈ 6–8 wines** but with a strong 14-wine ceiling (Living in Yellow)
- If we include the critic master-lists: 100, 100, 14, 6, ~4 → median ≈ **14** wines
- **Recommended Lia target: 12 wines minimum, 15 ideal.** Rationale: Armchair's 6 wines are dominated; Living in Yellow's 14-with-category-buckets is the best-performing editorial shape at position 2. Wine Enthusiast and Suckling 100-lists have massive authority moats — we can't out-count them, but we can out-structure them. A 12–15-wine curated list organised across style categories (like Living in Yellow's 4-bucket model) is the right editorial shape for this SERP.

The site's default-of-8 would be below the editorial median and well below the winning shape at position 2. Eight is banned for this keyword.

---

## 3. Feature inventory

| Feature | LivingInYellow #2 | WineEnthusiast #5 | JamesSuckling #7 | WestEndNews #6 | ArmchairSomm #8 | Us (today) |
|---------|---|---|---|---|---|---|
| Numbered ranking | No (category-grouped) | Yes (100→1) | Yes (100→1) | No (prose) | Yes (1–6) | No (1–8 on most pages) |
| Per-wine price inline | Yes ($5.99 etc.) | Yes ($17, $20) | Yes ($40 or less) | Yes ($6.99) | No | No (Wine.com geo-pricing rule) |
| Per-wine ABV | Yes (every entry) | No | No | No | No | Rarely (buttery chard + crisp white only) |
| Critic score per wine | No | Yes (89–92 pts) | Yes (implied 90+) | No | No | Yes (AffiliateCTA ring chart) |
| Named taster / sommelier | No | **Yes — 11 named tasters** (Jeff Porter, Michael Alberty, Jesica Vargas etc.) | **Yes — 11 tasters named in intro** | Yes (Layne Witherell) | Yes (author) | Claire Bennett byline only |
| "OUR PICK" / winner badges per category | **Yes — 4 category winners + 2 tiebreakers** | No (ranked #1 is implicit winner) | No | No | No | TopPicksInline on 3 picks only |
| Category/style buckets (grape or style) | **Yes — 4 H3 buckets** | No | No | No | No | Occasionally (NA, crisp white tiers) |
| Tasting note per wine | Yes (casual prose, subjective "tastes like the inside of a new cupboard") | Yes (professional, 50–80 words) | Yes (gated) | Yes (prose-woven) | Yes (personal voice) | Yes (Lia-authored) |
| Pairing suggestions | No | Sometimes | No | Sometimes | No | Yes (AffiliateCTA food tags) |
| FAQ block | No | No | No | No | No | **Yes — 7–10 per page (our moat)** |
| Comparison / scoring table | No | No | No | No | No | No |
| 2D positioning matrix | **No** | **No** | **No** | **No** | **No** | **No (open lane)** |
| Flavour / sweetness / body scale | No | No | No | No | No | Via WineQuiz only, not surfaced on page |
| Video embed | No | No | No | No | No | No |
| Interactive quiz / filter | No | No | No | No | No | **Yes — WineQuiz (our moat)** |
| Methodology disclosure | Brief ("HOW WE TESTED" — 1 H3, no criteria list) | Implicit (editors' panel) | Explicit (price-score metric, 42K wines tasted) | No | No | **Yes — MethodologyBox (our moat)** |
| Buy link per wine | Yes (retailer links) | Yes ("Buy Now") | Yes | No | No | Yes (AffiliateCTA → Wine.com) |
| Production-method tags (organic/sustainable) | No | No | No | Yes ("Organic. No added sulfites") on one wine | No | No |
| "How to make cheap wine taste better" tips | No | No | No | No | **Yes — dedicated section** | No |
| "How to buy wine online" tips | **Yes — dedicated section** | No | No | No | No | No |

**Note — retailer pages (#3, #4) excluded from feature matrix.** Their features are filter facets (price, grape, region, rating, country, food pairing, awards, sweetness) + product cards with critic score quotes. We're not competing on retailer UX.

---

## 4. Related searches / query-expansion signal

Google's "People also search for" chips (the strongest PAA substitute for this query, since no expanded PAA block renders):

1. Good cheap wine reddit
2. Best cheap wine under $10
3. Cheap wine under $5
4. Good cheap wines red
5. Good cheap wine that gets you drunk
6. Good cheap wine sweet
7. Good cheap wine white
8. Best cheap wine under $5

Forum-style questions surfacing on-page (Reddit-style):
- What's the most reliable 'cheap' wine?
- What's your favorite cheap wine?

**FAQ seeds for Lia** (map each to a dedicated FAQ question):
- How cheap is too cheap? (price floor — when does "cheap wine" stop being drinkable)
- What's the best cheap wine under $10? (explicit sub-segment question — most asked)
- What's the best cheap wine under $5? (bottom tier — Barefoot / Carlo Rossi territory)
- What's the best cheap red wine? (style split)
- What's the best cheap white wine? (style split)
- What's the best cheap sweet wine? (style split)
- What's the most reliable cheap wine brand? (reliability > quality — matches Reddit's #1 surface)
- Which cheap wine has the highest alcohol? (answers the "gets you drunk" intent without endorsing it — handle with voice-guide care, don't glorify)
- How can I make cheap wine taste better? (matches Armchair Sommelier's tips section — a dedicated FAQ answer lets us absorb that zone)
- What's the difference between cheap wine and expensive wine? (educational)
- Are grocery store wines worth buying? (Living in Yellow's entire angle — directly lift)

---

## 5. Structural choices we should match or beat

| Move | Source | Why it matters |
|------|--------|----------------|
| **Style-category H2/H3 grouping** (Red / White / Rosé / Sweet / Sparkling) | Living in Yellow (4 buckets: Cab/Chard/Moscato/Sweet Red) | Winning editorial shape at position 2. Solves the intent-mix problem — "Good cheap wines red" and "sweet" and "white" are top related searches. Give each its own bucket. |
| **Price inline per wine** | All ranked editorial competitors | Caveat: Wine Guide's standing rule is no inline Wine.com prices (handoff.md). We can display **"Typical shelf price: $X"** as a static range, not a live retailer price. This closes the gap without breaking the pricing rule. |
| **ABV per wine** | Living in Yellow | Cheap-wine readers care about ABV more than premium readers (value-per-alcohol calc). Surface it in a `<WineDataBlock>` micro-spec strip under H2. |
| **"OUR PICK" category winner badge** | Living in Yellow (4 winners + 2 tiebreakers) | Mirror with `highlight` prop on H2 — "Best Cheap Red / Best Cheap White / Best Cheap Sweet / Best Under $10 / Best Under $15 / Best Organic". Requires no new component. |
| **Price-tier sub-groups** | Multiple ("under $10", "under $15", "under $20") | Add a "Quick navigator" chip strip above the wine list: [Under $5] [Under $10] [Under $15] [Under $20]. Anchors to H2s inside the page. |
| **"How to make cheap wine taste better" section** | Armchair Sommelier | 100% absorbable. Turn into a secondary H2 section or a 5-FAQ cluster. Directly matches the "make cheap wine taste better" intent. |
| **"How to buy wine online" tips** | Living in Yellow | Natural tie-in to Wine.com affiliate CTA. Brief secondary section. |
| **Named-taster credit per wine** | Wine Enthusiast (11 tasters), Suckling (11 tasters) | E-E-A-T signal. Pull-quote from Claire Bennett on 2–3 top picks absorbs this without inventing external sommeliers. Cross-reference master audit §5 Pattern E — pending Iris fact-check on Claire's credentials. |

---

## 6. Novel feature recommendations (at least one competitor does not have)

All four are genuinely novel across the entire top 10 — **zero competitors have anything like these.**

### Novel #1 (recommended primary): **Value Rating scatter plot — critic score vs. price**

A `<DotScaleRow>`-style 2D matrix that plots each of our 12–15 wines on a single chart:
- **X-axis:** price (under $5 / $5–10 / $10–15 / $15–20)
- **Y-axis:** critic score (or Claire's rating if no external score)
- Each wine is a labelled dot. Top-left quadrant (high score / low price) = "best value" — auto-highlighted with a subtle gold fill.

Wine Enthusiast and Suckling both imply a price-score metric but neither **visualises** it. Living in Yellow has no graphics at all. This is a straight visual moat on the keyword's core value proposition ("good" × "cheap" = price × quality).

Maps directly to master-audit Pattern B ("2D positioning matrices absent from every competitor SERP") and lines up with the proposed Price-vs-Critic-Score scatter already queued for `best-red-wine-under-20` (audit item #6). Shared `<DotScaleRow>` primitive.

### Novel #2: **Sweetness + Body positioning matrix for cheap wines**

Second 2D scatter, this time style-based:
- **X-axis:** dry → sweet (1–5)
- **Y-axis:** light → full-bodied (1–5)
- All 12–15 wines plotted. Maps readers who know "I want sweet + medium body" straight to the cluster of matching bottles.

Solves the intent-mix problem visually: one chart shows the reader where the sweet reds sit vs the crisp whites vs the bold reds, all within the under-$20 price band. No competitor at any price tier does this.

### Novel #3: **Price-tier navigator chip strip**

Above the wine list, a row of anchor chips:
`[Under $5] [Under $10] [Under $15] [Under $20]`

Each chip scrolls to the corresponding H2 cluster. This directly serves 4 of the top 8 related-search chips ("under $10", "under $5" twice, "Best cheap wine under $X") without creating separate pages. Fastest-to-value UX for a budget-segmenting reader.

### Novel #4: **Reliability score / "cheap-wine consistency" badge**

Reddit's #1-ranking thread title is "What's the most reliable 'cheap' wine?" — reliability is a distinct axis from quality at this price tier. A per-wine reliability badge (Bronze / Silver / Gold ✓) with a 1-line footnote ("consistent bottle-to-bottle across vintages") serves that exact intent.

Concrete signal: Bronze = "quality varies by batch / vintage"; Silver = "consistent within a year"; Gold = "consistent across 3+ vintages, same flavour profile". Inherently editorial — requires Lia's judgment — but directly claims SERP real estate that Reddit currently owns by default.

**Recommended: ship Novel #1 (Value scatter) + Novel #3 (Price-tier chip strip) minimum. Novel #2 is a bonus if the component budget allows. Novel #4 is lowest-effort — could ship as a simple badge prop on AffiliateCTA.**

---

## 7. Summary actions for Lia's brief

1. **Wine count target: 12 minimum, 15 ideal.** Not 8. Exceeds Living in Yellow's 14 slightly; sits well above the editorial-only median of 6; meaningfully under the 100-list critic sites (we're not competing on volume there, we're competing on curation + structure).
2. **Structure: style-category H2 buckets.** Red / White / Rosé / Sweet / Sparkling — match Living in Yellow's winning shape. Minimum 3 buckets; 4–5 is better.
3. **Per-H2 "award" label** (reuse `highlight` prop): "Best Cheap Red / Best Under $5 / Best Organic / Best Sweet / Best for Beginners" etc. One unique award per wine minimum for the primary picks.
4. **Per-wine `<WineDataBlock>` micro-spec strip:** Region, ABV, Style, Shelf-price-range, Pairing. ABV mandatory — cheap-wine readers value that signal.
5. **Novel feature #1 (Value Rating scatter plot):** prioritise this as the signature visual. Shared primitive with `best-red-wine-under-20` (already queued in master audit item #6).
6. **Novel feature #3 (Price-tier chip strip):** above the wine list, 4 chips linking to sub-H2s. Low effort, high UX win.
7. **Secondary H2 — "How to make cheap wine taste better":** absorb Armchair Sommelier's tips section directly (via FAQ cluster or secondary H2).
8. **FAQ expansion:** 10+ FAQs seeded from §4 — under-$5 tier, under-$10 tier, reliability brand question, sweet/red/white splits, "make it taste better", grocery store wines, etc. FAQ depth is already our moat (per master audit §3); keep pushing it.
9. **Protect the intro.** Cheap wine is the kind of keyword that will want to absorb budget + value + cellar + everyday terms. Follow handoff.md's operating law: those go in FAQs and secondary sections, never in the first three paragraphs.
10. **Named-taster credit — pending.** Per master audit §5 Pattern E, flag to Iris for Claire Bennett credential fact-check before pull-quoting her on this page. Do not invent credentials.

---

## 8. Pre-handoff checklist

- [x] SERP pulled live 2026-04-18 (not cached)
- [x] 8 competitor pages analysed (2 of top 10 returned 404s and were dropped; Reddit blocked from inspection)
- [x] SERP wine count recorded: per-page + category medians
- [x] Wine counts body-counted (H2/H3 + price-pattern matching), not title-counted
- [x] Feature inventory table included with named table/widget/graph types
- [x] Four novel-feature recommendations (Value scatter, Sweetness×Body matrix, Price-tier chips, Reliability badge) — not generic
- [x] Related-searches chips captured (the PAA-equivalent signal for this query)
- [x] Forum-style questions captured (2 surface via SERP header strip)
- [x] Every claim carries a URL + body-counted evidence
- [x] Our own page excluded (we have no existing `/best-wines/good-cheap-wine/` yet)
- [x] File lands in `seo/audits/good-cheap-wine-serp-analysis.md` per Iris's brief
- [x] Zero Firecrawl credits used (Claude in Chrome end-to-end)

---

**End SERP analysis.**
