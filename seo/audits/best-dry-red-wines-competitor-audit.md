# best-dry-red-wines — Competitor Audit

**Date:** 2026-04-17
**Auditor:** Lino
**Target keyword:** best dry red wines
**Our URL:** bestwineguides.com/best-wines/best-dry-red-wines
**Status:** Live

---

## Our current state

- **Wine count:** 8 (body-counted from H2s: Chateau Bourdieu, Villa a Sesta Chianti, Beringer Knights Valley, Matsu El Picaro, Penfolds Bin 28, Chateau du Caillau Cahors, Lange Pinot Noir, El Enemigo Cab Franc)
- **Price ceiling:** under $30, most around $20
- **Grape coverage:** 7 varieties (Bordeaux blend, Sangiovese, Cab Sauv, Tempranillo, Syrah, Malbec, Pinot Noir, Cab Franc)
- **Unique features:** TopPicksInline (top 3), WineQuiz (3-question matcher with 8 wines tagged food/occasion/style), MethodologyBox, AffiliateCTA ring-chart critic scores, 5 FAQ answers
- **Secondary sections:** 4 ("What dry means", "Tannin vs sweetness", "Dry red grape varieties to know" with 8 bonus grapes, "Dry red wine for cooking")
- **Schema/rich results:** Not explicitly observed; Astro ArticleLayout likely injects basic Article schema

---

## SERP snapshot (live, 2026-04-17)

Excludes bestwineguides.com. Top organic ranking pages analysed:

| # | URL | Title | Wine count (body) | Notable features |
|---|-----|-------|--------------------|------------------|
| 1 | cellarbeastwine.com/blog/dry-red-wines | Best Dry Red Wines to Try in 2025 with Pairing Tips & Top Picks | 4 branded bottles in "Top Dry Red Wines" table + 4 grape-variety recs | Two comparison tables: "Top Dry Red Wines" (wine/style/flavor/pairing/price) and "Key Grape Varieties" (grape/body/tannins/acidity/flavors/pairings); FAQ schema (5 Qs); food pairings table; author bio + sommelier credential; internal links to Syrah + types-of-red-wine pillars |
| 2 | totalwine.com/theme/best-dry-red-wines | Shop the Best Dry Red Wines \| Total Wine & More | Retailer shelf page (100+ SKUs) | Filterable product grid (not a listicle); price/ratings/size filters; in-store availability |
| 3 | reddit.com/r/wine/comments/1azx7vt | Dry red wines — Reddit | Forum thread, no list | UGC recommendations; SERP shows Google uses Reddit discussions; intent signal that users want peer recs |
| 4 | uncorked.com/red-wines | Find Top Red Wines Today | Varietal directory (~10 varieties) | Varietal cards with body + dryness tags; shop grid; not a bottle listicle |
| 5 | wineenthusiast.com/.../dry-red-wine-for-cooking | The Best Dry Red Wine for Cooking | 4 varietals, 6 specific bottles inside | Sommelier quotes (2 named somms); inline product cards with 89-point WE-reviewed wines; 5 internal ratings links; strong E-E-A-T |
| 6 | wsjwine.com/wine/dry-red-wine | Buy Dry Red Wine \| WSJ Wine | Retailer shop grid | Curated selection filter; no editorial listicle |
| 7 | wineinsiders.com/collections/red-wine-dry | Shop Dry Red Wine | Retailer shop grid (~12 SKUs visible) | Product grid; ratings visible; not a listicle |
| 8 | coravin.com/blogs/community/what-is-a-dry-red-wine | Dry Red Wine: The Complete Beginner's Guide | 9 grape varieties (no specific bottles) | Residual-sugar scale diagram; "3 Pillars of Dryness" explainer; flavor-profile tasting cards per grape (graphic); "Palate Finder" quiz (4-question flavor matcher); sommelier quote block |
| 9 | coravin (same) | — | — | (duplicate) |
| 10 | facebook.com group post | Group discussion | 0 — UGC | Not a competitor |

**Usable competitor editorial pages:** Cellar Beast, Wine Enthusiast, Coravin, Uncorked (thin). That is 4 strong + 1 thin. Retailer shelf pages (Total Wine, WSJ, Wine Insiders) dominate but are not editorial comparables; Reddit + Facebook are UGC. Flagging: this SERP is editorial-thin for the keyword — much of the top 10 is shopping.

---

## Median competitor wine count

Editorial competitors (Cellar Beast 4, Wine Enthusiast 6, Coravin 9, Uncorked ~10 varieties) → **median ≈ 6–9 bottles/varieties**. Our 8 specific bottles sits **at or above median** for body-counted specific-bottle coverage. Against Coravin's 9, we trail by one grape — but Coravin lists grape archetypes, not specific bottles with scores. On the specific-bottle axis we are strongest.

---

## Gap analysis (what competitors have that we don't)

1. **Residual-sugar scale graphic / diagram** — Coravin renders a Red Wine Sweetness Chart (sweet → dry) image. We explain in prose but have no visual. Google Images + visual search opportunity.
2. **Tasting-card graphics per wine/grape** — Coravin has per-grape "tasting cards" showing body/tannin/acidity bars. Cellar Beast has a grape-variety attribute table. We have flavour text in prose only.
3. **"3 Pillars of Dryness" (or similar) concept box** — Coravin isolates tannin / acidity / alcohol as drivers; a labelled concept block is a strong rich-result candidate.
4. **Sommelier/expert quotes with named credentials** — Wine Enthusiast quotes 2 named somms, Coravin quotes Sara Speretto, Cellar Beast features Matt Check (Level IV Sommelier). We have MethodologyBox but no named external expert voice. E-E-A-T gap.
5. **FAQ schema coverage** — Cellar Beast's FAQ almost certainly emits FAQPage schema (5 Qs). Our FAQ is H3-structured but I'd confirm the Astro build emits FAQPage JSON-LD; worth a Dana task.
6. **Dedicated "dry red for cooking" internal hub** — Wine Enthusiast has a whole page just for that secondary intent. Our article has a section but no dedicated sub-page.
7. **Palate-finder quiz focused on dryness axis (not wine axis)** — Coravin asks about coffee prefs, snacks, texture. Ours asks food/occasion/style. Different vector; their angle is sharper for "what kind of dry do I like".
8. **Inline residual-sugar numbers (g/L) per wine** — we reference <4 g/L abstractly; no competitor lists per-bottle. Easy differentiator.

---

## Novel opportunity (no competitor has this)

**A per-bottle "Dryness Fingerprint" mini-matrix, one compact graphic block per wine showing four axes on a 1–10 scale: Residual Sugar, Tannin Grip, Acidity, Alcohol Weight.** Four small horizontal bars beside each AffiliateCTA, built as a reusable `<DrynessFingerprint>` Astro component taking props `{ rs, tannin, acid, alcohol }`. No competitor shows this per bottle. Coravin shows per-grape cards (generic); we'd show per-actual-bottle fingerprints.

Fallback secondary idea: **"Residual Sugar vs Perceived Sweetness" scatter graphic** at the top of the More Worth Knowing section, plotting the 8 wines on x-axis (measured RS g/L) vs y-axis (perceived sweetness 1–10 editorially assigned), making the Zinfandel-like "tastes sweet but isn't" point visually explicit. This directly targets the top confusion in the category.

---

## Priority recommendations (ranked)

1. **[Lia] Ship a `<DrynessFingerprint>` component and add it inline to each of the 8 wine listings.** 4 bars (RS, Tannin, Acid, Alcohol). Specific, SERP-novel, keeps under 300 lines of new MDX.
2. **[Dana] Verify FAQPage JSON-LD is emitting on the page.** Cellar Beast almost certainly captures FAQ-rich-result real estate. If our Astro config doesn't output FAQPage schema, fix.
3. **[Lia] Add a per-wine ABV number and approximate RS (g/L) to each AffiliateCTA description or a new micro-spec line.** One sentence per wine. Sharper than every competitor.
4. **[Lia] Add a named expert quote block inside MethodologyBox or a new secondary section.** E.g. one sourced somm quote on what "dry" means structurally. Matches WE/Coravin/Cellar Beast E-E-A-T.
5. **[Lia] Expand the "Dry red grape varieties to know" section to cover one more grape (Carmenère is the closest-missing mainstream dry red versus Coravin's list).** Pushes the variety count from 15 to 16 and closes the breadth gap.
6. **[Dana] Build an internal link from this page to a planned `/best-wine-for-cooking` hub.** Wine Enthusiast monopolises the cooking sub-intent with a dedicated page; we mention it in a section only. Once the cooking page ships, interlink both ways.
7. **[Lia] Add an 8th or 9th H3 FAQ specifically on "what's the difference between dry, off-dry and sweet red wine in grams per liter" with a small inline RS table (4 rows: dry <4 g/L, off-dry 4–12, medium 12–45, sweet 45+).** Captures the residual-sugar numerical intent Coravin owns visually.
8. **[Lia] Consider reframing the WineQuiz third question from "What style do you prefer? (light/medium/full)" to "How dry do you want it? (bone-dry/dry-but-fruit-forward/soft)" for this specific page only.** Coravin's palate quiz shows this angle converts; ours defaults to body which overlaps less with "dry" intent.

Thin-SERP flag: the editorial top 10 is only 4–5 real competitor articles. This keyword is partly shopping-intent and our page should lean hard on the editorial angle (fingerprint graphic + residual-sugar clarity) that retailer pages can't reproduce.
