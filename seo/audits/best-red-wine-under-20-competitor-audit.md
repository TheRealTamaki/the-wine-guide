# best-red-wine-under-20 — Competitor Audit

**Auditor:** Lino
**Date:** 2026-04-17
**Keyword:** best red wine under 20
**Our page:** `/best-wines/best-red-wine-under-20/` — reference listicle on the site

---

## Our current state

- **Wine count:** 10 (body-counted from H2 `## 1.` through `## 10.`)
- **Structure:** Intro (3 paras) → TopPicksInline (3 picks) → pricing WineTip → 10 wine listings each with AffiliateCTA → serving-tips WineTip → WineQuiz (3-question, food/occasion/style) → MethodologyBox (4 criteria) → FAQ (4 H3 questions)
- **Features we already have:** interactive WineQuiz with 10 tagged wines, TopPicksInline cards with ranking badges, per-wine AffiliateCTA with SVG ring charts for critic scores, star ratings from averaged scores, food pairing tags, sidebar Top Picks, MethodologyBox explaining selection criteria
- **Schema:** Article schema via ArticleLayout, author markup (Claire Bennett)
- **Wine mix:** 4 Pinot Noir, 2 Cabernet Sauvignon, 2 Chianti (Sangiovese), 1 Malbec, 1 Mencia. Regions span Paso Robles, Tuscany, Uco Valley, Patagonia, Bierzo, Casablanca Valley, Sonoma Coast, Rioja, Sta. Rita Hills.
- **Price point:** all under $20 retail, all 90+ critic scored

---

## SERP snapshot (top competitor pages, live Google, 2026-04-17)

| # | URL | Title | Wine count (body) | Notable features |
|---|-----|-------|-------------------|------------------|
| 1 | winetransit.com/wine/90-points-and-under-20 | 90 Point Wines for Under $20 | Retailer category (no fixed count — paginated catalog) | Retailer grid; filter by variety, country; price + 90pt filter; not an editorial listicle |
| 2 | reversewinesnob.com/best-red-wines-under-20 | The Best Red Wines of 2022 | **10** (current year) + archival lists of 10 per year back to 2017 (≈60 historical picks visible on page) | Ranked countdown format (10→1), each wine = one H3 with linked review page; archive of prior years' top-10s on the same URL; price tags inline; no interactive tools |
| 3 | rogerbissell.co/10-red-wines-under-20 | Top 10 Red Wines Under $20 | **11** (body H4s — Concha y Toro through Catena Malbec; Casa Madero listed despite being $20.99) | Sommelier-voice narrative; inline retailer links (ABC, Garnet, Wine.com, Total Wine) rotating across retailers rather than one affiliate; author photo/credentialing; no tables, no quiz |
| 4 | wineenthusiast.com/toplists/best-buys-2024 | Best Buys: The Top-Rated Wines Under $20 for 2024 | **~100** (the "Enthusiast 100") — mixed reds, whites, sparkling, rosé; points + price callouts | Point score + price badge per card; filterable by varietal (links to varietal hubs); "About The Scores" and "What is Blind Tasting" explainer modules; editor photography; stats callout (96 of 100 scored 90+, 32 under $15) |
| 5 | forbes.com/sites/nickpassmore/2016/.../best-20-red-wines-under-20 | The Best 20 Red Wines Under $20 | **20** | Grape blend breakdown per wine (e.g. "Syrah 80%, Grenache 10%, Carignan 10%"); region + price inline; no rankings, no quiz, no tables; mobile-thin images; dated (2016) |
| 6 | reddit.com/r/wine/comments/1jyiunl | Good red wines under around $20 (Reddit thread) | N/A — discussion thread, dozens of user suggestions | Community answers; strong "people also ask" proxy for real user questions (Bordeaux under $20, Chianti Classico, Cotes de Rhone recs) |
| 7 | somegoodwine.com/collections/top-20-under-20 | Best 20 Wines Under $20 | **20** (retailer curated list) | Retailer grid; in-cart CTAs; sort by price/rating |
| 8 | wineexpress.com/wines/price/under-20 | Under $20 - Price | Retailer catalog (100+) | Wine Spectator-linked retailer; in-stock filtering |
| 9 | woodswholesalewine.com/.../rated-wine-champagne-20-under | Rated 90+ Under $20 — Cabernet Sauvignon tagged | Retailer catalog | Variety tag filter; sort by price |
| 10 | facebook.com/groups/milwaukeefoodie/... | Red wine recommendations under $20 (FB post) | N/A — discussion | Community thread |

**Thin-SERP note:** only 5 of the top 10 are true editorial listicles (Reverse Wine Snob, Roger Bissell, Wine Enthusiast, Forbes, PunchDrink-overflow via related cluster). The rest are retailer catalogs (winetransit, somegoodwine, wineexpress, woodswholesalewine) and community threads (Reddit, Facebook). For count/feature analysis I'm using the 5 editorial pages.

## Median competitor wine count

Editorial pages only:
- Reverse Wine Snob: 10
- Roger Bissell: 11
- Wine Enthusiast Best Buys 2024: ~100 (umbrella roundup, not a red-only list)
- Forbes: 20
- If we exclude the WE umbrella, median is **~11** across three reds-only editorial pages.

**Our 10 is at the low end.** Reverse Wine Snob (#2 organic slot) is at 10; Bissell (#5) is at 11; Forbes (#10, dated 2016) is at 20. Reddit users in the top-10 thread name 15+ wines informally. **Competitive count to beat: 12–15.**

---

## Gap analysis (what top pages have that we don't)

1. **Archived historical top-10s on one URL.** Reverse Wine Snob keeps 2017–2022 lists stacked on one page — this bloats the URL to ~60 unique wine mentions and ranks #2. We have a single 10-wine list frozen at 2026-04-14. Google reads "freshness + breadth."
2. **Point score + price badge per card.** Wine Enthusiast shows a points pill and price pill on every product tile — scannable at a glance. Our AffiliateCTA shows scores in ring charts but no price (Wine.com geographic pricing constraint) and the layout is denser.
3. **Grape blend % breakdown.** Forbes lists "Grenache 80%, Syrah 15%, Cinsault 5%" per wine — a structural detail our wine descriptions omit. It's a trust signal for readers who know what they're looking for.
4. **Variety hub cross-links.** Wine Enthusiast links each card's varietal tag back to a varietal hub (Chardonnay, Malbec, etc.). We have no varietal hubs yet; our internal linking from wine listings is zero.
5. **"What is blind tasting" + scoring-scale explainer modules.** Wine Enthusiast has in-page explainers of their methodology (98–100 Classic, 94–97 Superb, etc.). Our MethodologyBox covers selection criteria but not how to read a critic score. Readers landing from "what do critic scores mean" long-tail queries find nothing.
6. **Grape-style coverage.** Our list is heavy on Pinot Noir (4 of 10) and Cab/Sangiovese. Forbes and Bissell both show Nero d'Avola, Nebbiolo/Barbaresco, Shiraz, Cabernet Franc, Aglianico, Tannat, Mencia, Grenache. We cover Mencia but miss Shiraz, Nebbiolo, Cab Franc, Aglianico.
7. **Sommelier-voice credentialing.** Bissell opens with "I've had over 150,000 wines in my career"; WE cites the blind tasting protocol; Forbes has the author's track record ("20 Under 20 project"). We have the Claire Bennett byline but no in-body credentialing on this page.

## Novel opportunity (nobody in the SERP has this)

**Add a "Price vs. Critic Score" scatter-plot matrix as an inline interactive component, positioned above the WineQuiz.**

Specifically:
- X-axis: average critic score (88–95)
- Y-axis: typical retail price ($10–$20)
- One dot per wine, coloured by grape (6 colours: Cab, Pinot, Malbec, Sangiovese, Mencia, Rhône blend)
- Hover state: wine name, region, #1–10 rank in list
- Click: scrolls to that wine's listing

Why it works: none of the top 5 editorial competitors have any visualisation. Wine Enthusiast has points + price badges but separately. Plotting the two against each other makes "value" visible — the top-left-corner wines (high score, low price) jump out immediately, which is the exact intent a reader lands on this page with. It's a Clearscope-differentiator without being a gimmick, and the data already exists in the `wines[]` array powering WineQuiz.

**Backup novel feature if the scatter-plot is too heavy:** a sortable comparison table with columns for Wine / Grape / Region / Avg Score / Typical Price / Best Pairing / Style (bold-light-medium). Seven columns, 10 rows, sortable headers in client-side JS. No competitor has a sortable table on this keyword.

---

## Priority recommendations

1. **Bump wine count from 10 to 12–15.** The median editorial count is 11+ and the #10 slot is holding at 20. Add Shiraz, Nebbiolo, Cab Franc, Aglianico, or Tannat to fill grape gaps — route to Lia. (High impact, medium effort.)
2. **Ship the Price-vs-Critic-Score scatter-plot** (or the sortable comparison table as the lighter version). This is the novel feature nobody in the SERP has. Route to Dana for data wiring + a new component in `src/components/content/`. (High impact, medium-high effort.)
3. **Add grape blend % breakdown to each wine description.** e.g. "BenMarco Malbec 2022: 92% Malbec, 8% Cabernet Franc." Forbes does this and it's a trust signal. Route to Lia during the Stage 2 re-draft. (Medium impact, low effort.)
4. **Add a "How critic scores work" FAQ question** — maps the 88–95 range to Very Good / Excellent / Superb categories, directly citing our scoring sources. Pulls in long-tail queries. Route to Lia. (Medium impact, low effort.)
5. **Plan a varietal-hub internal link strategy** so each wine's grape links to `/grapes/malbec/` etc. when those hub pages exist. For now, open tickets for the hub-page build. Route to Dana. (Low immediate impact, compounding long-term.)
6. **Year-stamp the title and structure for annual refresh** — "Best Red Wines Under $20 in 2026" and plan a 2027 refresh. Reverse Wine Snob's freshness play (running multiple years on one URL) is their main ranking moat. Route to Dana. (Medium impact, annual effort.)

---

## References (new competitor URLs captured)

- https://www.reversewinesnob.com/best-red-wines-under-20
- https://rogerbissell.co/10-red-wines-under-20/
- https://www.wineenthusiast.com/toplists/best-buys-2024/
- https://www.forbes.com/sites/nickpassmore/2016/10/18/best-20-red-wines-under-20/
- https://www.somegoodwine.com/collections/top-20-under-20
