# best-wines-under-15 — Competitor Audit

**Auditor:** Lino
**Date:** 2026-04-17
**Keyword:** best wines under 15
**Our page:** `/best-wines/best-wines-under-15/`

---

## Our current state

- **Wine count:** 8 (body-counted from H2 `## 1.` through `## 8.`)
- **Structure:** Intro (3 paras) → TopPicksInline (3 picks, each with custom `highlight` labels) → pricing WineTip → 8 wine listings each with AffiliateCTA → serving-temp WineTip → WineQuiz (3-question) → MethodologyBox (4 criteria) → FAQ (4 H3 questions)
- **Features in:** WineQuiz with 8 tagged wines, TopPicksInline with `highlight` text per card ("Best overall," "Best Spanish red," "Best rosé"), per-wine AffiliateCTA, MethodologyBox, sidebar Top Picks, 4 FAQ answers
- **Style mix:** 4 reds (Malbec x2, Mencia, Cab, Sangiovese), 2 whites (Bordeaux blend, Pinot Grigio), 1 rosé, 0 sparkling
- **Price point:** all $12.97–$14.97, all 90+ critic score
- **Notable angle already present:** two wines from same producer (Sur de los Andes Reserva + regular) — explained in an FAQ

---

## SERP snapshot (top competitor pages, live Google, 2026-04-17)

| # | URL | Title | Wine count (body) | Notable features |
|---|-----|-------|-------------------|------------------|
| 1 | marketviewliquor.com/category/deals-90-points-under-15 | 90 Point Wines Under $15 | Retailer catalog (paginated) | Retailer grid; "90pt + under $15" filter; sort by variety |
| 2 | reddit.com/r/wine/comments/vdfaap/my_10_favorite_red_wines_that_cost_15_usd_or_less | My 10 favorite red wines that cost $15 usd or less | **10** (reds only) | User-generated list; Montepulciano, Barbera, Nipozzano Chianti, etc. Thread-style, one of the most ranked Reddit wine threads. |
| 3 | onesmallblonde.com/best-trader-joes-red-wines-under-15 | Best Trader Joe's Red Wines Under $15 | **6** (Trader Joe's-specific reds only) | Lifestyle blog voice; large in-line product photos; per-wine flavour note; no table, no quiz, no score — TJ retailer framing. Weak competitor but ranks in the top 5 — thin SERP. |
| 4 | thesimplewine.com/collections/wines-under-15 | Best Wines Under $15 — Organic, Low-Sulfite | Retailer catalog | Retailer grid; organic filter |
| 5 | claudettescorner.com/2019/02/19/15-budget-red-wines-under-15 | 15 Budget Red Wines Under $15 | **16** (reds only — body count goes through #16 despite title saying 15) | Personal-blog voice, almost no structure; wines listed with price + quick tasting adjective ("slutty," "warm & full-bodied"); no images on body, no table, no scores, no quiz. Ranks top 5 despite looking barely edited. |
| 6 | corkandfizz.com/blog/best-trader-joes-wines-for-under-15 | The Best Trader Joe's Wines for Under $15 | **8** (mixed styles, TJ only) | Sommelier-voice; tasting notes with ABV, acidity, body; photo per wine; verdict block; all TJ-sourced. |
| 7 | youtube.com/watch?v=L5TaQ6qwgAE | Top 10 Red Wines in the World Under $15 | **10** (reds only — YouTube video) | Video-native; transcript-based list; 258+ comments. |
| 8 | daily.sevenfifty.com/the-10-best-wines-for-15-and-under-according-to-retailers | The 10 Best Wines for $15 and Under, According to Retailers | **10** (mixed styles — retailer-curated picks) | Per-wine retailer interview; wine + retailer pairing ("Selected by Sarah Pierre, 3Parks Wine Shop, Atlanta"); producer sustainability notes; no table, no score, no quiz. High editorial quality. |
| 9 | winedeals.com/wine/pricing/white-wines-under-15 | Best White Wines Under $15 | Retailer catalog | Retailer grid, whites filter. Interesting split — "whites under 15" is a sub-niche ranking as a carve-off of our keyword. |
| 10 | bottlesfinewine.com/collections/wines-under-15 | Wines Under $15 | Retailer catalog | Retailer grid. |

**Thin-SERP note:** this SERP is genuinely thin for true editorial listicles. Reddit (#2), One Small Blonde lifestyle blog (#3), Claudette's personal blog (#5), Cork & Fizz (#6), YouTube (#7), and SevenFifty (#8) are the editorial set. Only SevenFifty and Cork & Fizz feel SEO-serious. Opportunity: the SERP rewards whoever shows up with real editorial craft.

## Median competitor wine count

Editorial pages only:
- Reddit: 10
- One Small Blonde: 6
- Claudette's Corner: 16
- Cork & Fizz: 8
- YouTube: 10
- SevenFifty: 10

Median: **10**. Our 8 is **just below**. Not catastrophic — but the top slot among editorial-style pages (SevenFifty, which is our closest-quality peer) runs 10. Matching or beating 10 is the target.

---

## Gap analysis (what top pages have that we don't)

1. **Retailer-diversity framing.** SevenFifty frames every wine as "picked by [named retailer/sommelier]" — one wine per retailer, geographically spread across the US. This is a huge trust + freshness + localness signal that our Wine.com-only model can't match, but we can simulate via **sommelier/critic attribution per wine**.
2. **Explicit retailer ecosystem breadth.** Cork & Fizz is all Trader Joe's. One Small Blonde is all TJ. Claudette's is Trader Joe's + Ralphs + BevMo. Readers at this price point cross-shop heavily — they're at TJ, Costco, Aldi, their local shop. Our page implicitly says "buy from one retailer." An "Available at: retailer list" footnote per wine would close this.
3. **"Why this wine beats its price" specific framing.** SevenFifty wines include producer backstory in 2–3 sentences ("Proprietors Núria Altés and Rafael De Haan established Herència Altés in 2010, restoration efforts using agroecology"). Producer story is almost the whole point of cheap-wine editorial. Our wine descriptions tell story but leaner than SevenFifty's.
4. **Organic/natural/biodynamic tagging.** The SimpleWine, SevenFifty, and Cork & Fizz all flag "organic," "low-sulfite," "biodynamic" explicitly. Our MethodologyBox doesn't address production practice. Two of our wines (Ziobaffa Toscana, Ziobaffa Pinot Grigio) are organic but the organic fact only lives in one line of the wine description, never as a scannable badge.
5. **"White Wines Under $15" sub-keyword.** WineDeals is at position #9 with a whites-only carve-off. That tells us there's a spinoff keyword not being served. Not a gap on this page but an adjacency we should plan a second page for.
6. **Dollar-value-per-point ratio.** None of the competitors have it. We show score, we show (implicitly) price ~$14. A single badge saying "93 pts @ $14.99 = 6.2 pts per dollar" would be the value math readers silently do. Novel opportunity territory.
7. **Higher editorial floor.** Claudette's ranks at #5 with a blog post that's barely edited, tags like "slutty" as a tasting note, and 16 wines listed as price + one-line impression. That she ranks at all means SEVEN EDITORIAL PEERS (Cork & Fizz, SevenFifty, OneSmallBlonde, etc.) plus us are fighting over the top 10. Our prose and voice are already better than ~half the SERP. We should lean into that.

## Novel opportunity (nobody in the SERP has this)

**Add a "Value Rating" badge per wine — points-per-dollar calculated and displayed.**

Specifically:
- Small green pill badge on each wine card reading "X.X pts/$" (e.g. 93 points at $14.99 = **6.2 pts/$**)
- Include a simple, legible explainer sentence below TopPicksInline: "We calculated points-per-dollar for every wine — the higher the number, the more critic score you're getting per dollar spent."
- Sort the 8 wines (or 10, if we expand) by value rating as a secondary sortable view
- Card also includes a "Best Value" winner badge on whichever wine scores highest

Why it works: nobody in the top 10 shows this. The exact intent of a "wines under $15" search is "maximum quality per dollar." Price and score exist separately on every card across every page in the SERP. Computing the ratio makes the value legible in one glance. For a budget-intent keyword it's structurally perfect. It also gives the page something novel to be linked to from other coverage ("the value rating method") — a citable hook.

**Backup novel feature:** a cross-retailer availability footnote: "Look for [wine] at: Trader Joe's, Costco, Wine.com, Total Wine" — sourced from actual listings. Matches how cheap-wine buyers shop. No editorial competitor offers this.

---

## Priority recommendations

1. **Add the Value Rating (points-per-dollar) badge to each wine.** Novel-feature pick for this page. Route to Dana (or site/component) to add a small pill to AffiliateCTA and a sort option. (High impact, medium effort. Data already exists.)
2. **Bump count from 8 to 10.** Median SERP count is 10 and SevenFifty (our closest-quality peer) is at 10. Two additional wines, preferably one sparkling (the list has zero) and one additional white to balance style mix. Route to Lia. (Medium-high impact, medium effort.)
3. **Add a cross-retailer "Also available at" footnote per wine.** Matches how budget buyers cross-shop. e.g. "Also look for this at: Trader Joe's, Costco Business Centers" based on documented stocking. Route to Lia for research, or flag as a data-entry task. (Medium impact, medium effort.)
4. **Flag organic / sustainable / biodynamic production on each wine.** Add a small tag per wine description or as a badge. Both Ziobaffas are already organic; adding a visible tag helps. Route to Dana for the tag component + Lia for data. (Medium impact, low effort for existing data.)
5. **Plan a `best-white-wines-under-15` spinoff page.** WineDeals is ranking there with a retailer catalog. We can write a proper editorial page and outrank easily given the SERP thinness. Add to the content calendar. Route to Iris for prioritisation. (Low immediate impact on THIS page; opportunity elsewhere.)
6. **Strengthen producer story in wine descriptions.** SevenFifty's 2–3 sentences of producer backstory is the benchmark. We already do this for some wines (Ziobaffa, Sur de los Andes) but not all — upgrade Chateau La Freynelle, Jadix, Flavium to the same standard. Route to Lia. (Medium impact, low effort.)

---

## References (new competitor URLs captured)

- https://daily.sevenfifty.com/the-10-best-wines-for-15-and-under-according-to-retailers/
- https://www.onesmallblonde.com/best-trader-joes-red-wines-under-15/
- https://claudettescorner.com/2019/02/19/15-budget-red-wines-under-15/
- https://www.corkandfizz.com/blog/best-trader-joes-wines-for-under-15
- https://www.youtube.com/watch?v=L5TaQ6qwgAE
- https://www.reddit.com/r/wine/comments/vdfaap/my_10_favorite_red_wines_that_cost_15_usd_or_less/
- https://www.winedeals.com/wine/pricing/white-wines-under-15.html
