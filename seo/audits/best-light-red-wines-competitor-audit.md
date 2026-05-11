# best-light-red-wines — Competitor Audit

**Date:** 2026-04-17
**Auditor:** Lino
**Target keyword:** best light red wines
**Our URL:** bestwineguides.com/best-wines/best-light-red-wines
**Status:** Live

---

## Our current state

- **Wine count:** 8 specific bottles (Louis Latour Bourgogne PN, Coperet Fleurie, Lageder Schiava, Donnafugata Frappato, Lincourt Sta. Rita PN, Guimaro Mencia, Coperet Morgon, Folk Machine Charbono)
- **Price ceiling:** under $30
- **Grape coverage:** 6 (Pinot Noir x2, Gamay x2, Schiava, Frappato, Mencia, Charbono)
- **Unique features:** TopPicksInline (top 3), WineQuiz (food/occasion/style), MethodologyBox, per-wine AffiliateCTA with critic scores
- **Secondary sections:** 8 (Grape varieties note, Light vs heavyweights contrast, Body/oak/tannin taxonomy, Light/medium/full differences, Dry + fruit-forward note, Chilling, Food pairings, How light reds are made)
- **FAQ count:** 7 (what counts, lightest, should I chill, food pairings, light vs medium vs full, versatility, rouge)
- **Schema/rich results:** Article schema via ArticleLayout; FAQPage status unconfirmed

---

## SERP snapshot (live, 2026-04-17)

Excludes bestwineguides.com.

| # | URL | Title | Wine count (body) | Notable features |
|---|-----|-------|--------------------|------------------|
| 1 | lexiswinelist.com/blog/10-light-bodied-red-wines-to-chill | 10 Light-Bodied Red Wines That Are Perfectly Chillable | 10 grapes (Pinot Noir, Grenache, Gamay, Cinsault, Zweigelt, Dolcetto, Trousseau, País/Mission, Nebbiolo, Lambrusco); each grape shows 2 named bottles with prices. Total ≈ 20 bottles referenced | Per-grape section with photo; "food pairings" line per grape; 2 recommended bottles per grape with prices + affiliate links; "More tips for finding light red wines" secondary list; serving temperature guide in Fahrenheit; author bio; newsletter CTA; Pinterest pins; Wine Tasting Club CTA |
| 2 | reddit.com/r/wine/comments/1o9jt6j | Light Red Wine Recommendations | Forum (10+ UGC picks) | Beaujolais/Fleurie dominant; peer recs |
| 3 | theguardian.com/food/2026/mar/12/light-red-wines-for-spring-drinking | Light red wines for spring drinking | ~6 bottles editorial | Editorial spring-focused column; strong publisher authority |
| 4 | silverlakewine.com/collections/light | Light Bodied Reds | Retailer shop grid (~20 SKUs) | Not an editorial listicle |
| 5 | winefolly.com/tips/the-spectrum-of-boldness-in-red-wines-chart | Red Wines From Lightest to Boldest (Chart) | 32 varieties visualised (chart, no bottles) | Signature "Boldness Chart" infographic (1200x900 image); climate-vs-grape chart; heavy internal-link density; Pinterest-optimised |
| 6 | riedel.com/en-us/blog/education/red-wine-light-bodied | Light-Bodied Red Wines \| RIEDEL | 4 grape categories (Old World PN, New World PN, Nebbiolo, "Others" with 4 more grapes) | Glassware-tie-in CTAs; serving temp callouts; food pairings paragraph; multilingual alternates; brand authority |
| 7 | mag.sommtv.com/2022/01/light-red-wines | Claire Coppi Picks: 5 Lesser-Known Light Red Wines | 4 specific producers + 1 (Niepoort, Elena Walch, Arnot-Roberts, Story of Soil) | Named sommelier editorial; niche/indie producer focus |
| 8 | totalwine.com/theme/shop-the-best-light-fruity-red-wine | Shop the Best Light Fruity Red Wine | Retailer shop grid | Not editorial |
| 9 | whitehorsewine.com/collections/light-red-wines | Light Red Wines | Retailer shop grid | Not editorial |
| 10 | scottlab.com/light-bodied-red-wine-style-guide | Light-Bodied Red Wine Style Guide | Winemaking industry style guide | B2B-focused; not a consumer bottle list |

**Usable competitor editorial pages:** Lexi (10 grapes x ~2 bottles), Guardian (~6 editorial), Wine Folly (chart), Riedel (educational 4–8 grapes), SommTV (5 indie producers). Five solid editorial pages.

---

## Median competitor wine count

Grape-count median across editorial competitors: Lexi 10, Riedel 4–8, Guardian ~6, Wine Folly 32 chart, SommTV 5 → **median ≈ 8 bottles/varieties**. Our 8 specific bottles hits the median exactly, but Lexi provides breadth (10 distinct grapes) while we only cover 6 unique grapes (with 2 doubling on Gamay and 2 on Pinot Noir). On the **grape-breadth axis we trail Lexi by 4 varieties.**

---

## Gap analysis (what competitors have that we don't)

1. **Signature boldness/body chart infographic** — Wine Folly owns this space with a single infographic. Pinterest + image-search traffic. We have none.
2. **More distinct grapes covered** — Lexi covers Grenache, Cinsault, Zweigelt, Dolcetto, Trousseau, País, Nebbiolo, Lambrusco as light reds. We cover only Pinot, Gamay, Schiava, Frappato, Mencia, Charbono. Missing: Grenache (light styles), Cinsault, Zweigelt, Dolcetto, Trousseau, País, Lambrusco.
3. **Per-grape recommended bottle pairs with price** — Lexi pairs each grape with 2 named bottles + price. We do the opposite: one bottle per style. Readers comparing within a grape lose out.
4. **Author/sommelier authority block** — Lexi has a persistent author photo + tasting-club CTA. SommTV frames as "Claire Coppi Picks". We have Claire Bennett byline but no expertise signal on the page body itself.
5. **Pinterest-ready vertical image graphics** — Lexi ships Pinterest pin images (900x1200+). Light reds traffic leans heavily female/lifestyle-visual; Pinterest is a meaningful channel we're not instrumenting.
6. **Serving temperature graphic/table** — Everyone mentions serving temp; no one shows a single clear comparison chart (light vs medium vs full). Shared structural weakness + opportunity.
7. **Internal link to a carbonic-maceration or Beaujolais-cru explainer** — Lexi links to its own Beaujolais content. We mention but don't link.
8. **"Lightest red you can buy" single-answer callout** — matches a very common "people also ask". We answer it in the FAQ but Lexi answers earlier/more prominently.
9. **FAQ schema** — unconfirmed on our side; likely absent or under-implemented.

---

## Novel opportunity (no competitor has this)

**A sortable/interactive "Light Red Spectrum" component: a horizontal scale from 1 (Schiava) to 10 (the medium side of light-medium), each of our 8 wines placed as a marker with hover/tap for a tasting-note card.** No competitor has an interactive, per-actual-bottle spectrum. Wine Folly owns the static infographic; ours beats them by being specific, clickable, and purchase-linked. Implemented as `<LightRedSpectrum>` Astro component with props taking the 8 wines + their body-score; falls back to a static SVG on no-JS.

Secondary novel option: **a "Chill Guide Dial" graphic showing each bottle's ideal serving temperature in both °C and °F around a dial from 10°C to 18°C.** Temperature is the #1 reader-confusion we see in search; no competitor visualises it per bottle.

---

## Priority recommendations (ranked)

1. **[Lia] Add 2 more wines to reach 10 total, specifically one Grenache and one Dolcetto or Cinsault.** Closes the grape-breadth gap against Lexi. Keep at or under $30. Current count 8 → 10 matches/exceeds editorial median.
2. **[Lia] Ship `<LightRedSpectrum>` as a novel feature block below TopPicksInline.** Specific spec: 8 markers along a horizontal gradient scale from "Pale, almost rosé" to "Light-medium grip", each marker linking to its in-page wine anchor. ~60 lines of MDX + Astro.
3. **[Lia/Dana] Build a serving-temperature comparison table with 3 rows (Light 11–13°C / Medium 13–15°C / Full 15–18°C) and 2 columns (°C, °F).** Insert in the "Why you should chill light reds" section. Table beats prose for rich-result eligibility.
4. **[Dana] Verify FAQPage JSON-LD emits. Also verify Article schema lists author="Claire Bennett" and proper datePublished/dateModified.** Suspected gap.
5. **[Lia] Add an author/expertise strip immediately under the intro ("Claire Bennett, Wine Editor, tasted X bottles across Y grapes for this guide").** Matches Lexi/SommTV E-E-A-T framing.
6. **[Lia] Rename or add a sub-H3 "What's the lightest red wine?" answer with Schiava explicitly named as the top answer, positioned higher in the body (currently lives only in FAQ).** PAA capture.
7. **[Dana] Add Pinterest-sized vertical hero or secondary image (900x1500) with the keyword rendered visually.** Lexi mines Pinterest; we have one landscape OG image only.
8. **[Lia] Internal-link from "carbonic maceration" in the How-they're-made section to a future explainer page (flag in REFERENCES.md for Plato to research).** Cleaner topical cluster.

Overall position: competitive on bottle specificity and FAQ depth; behind on grape breadth and visual assets. Two additions (2 bottles + 1 component + 1 table) close the gap and push us ahead.
