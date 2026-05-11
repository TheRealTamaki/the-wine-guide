# Competitor Audit — best-wine-for-mulled-wine

**Auditor:** Lino
**Date pulled:** 2026-04-17 (live Google SERP via Firecrawl)
**Keyword:** best wine for mulled wine
**Our URL:** bestwineguides.com/best-wines/best-wine-for-mulled-wine

---

## Our current state

- **Wine count (body H2):** 8 named bottles (CVNE Rioja Reserva, Ancient Peaks Merlot, Cline Zinfandel, Shatter Grenache, Vina Real Crianza, Hacienda Lopez de Haro, J. Lohr Los Osos Merlot, Louis Jadot Beaujolais).
- **Features:** TopPicksInline (3 picks), AffiliateCTA per wine with SVG ring critic-score charts + food-pairing tags + 5-star ratings, pricing WineTip, slow-cooker recipe WineTip (whole-spice quantities), WineQuiz (3 questions × 8 wine matching engine), MethodologyBox (4 criteria), 4 FAQs.
- **Structure:** Intro (3 short paras) → TopPicksInline → WineTip → 8 wines → WineTip → WineQuiz → MethodologyBox → FAQ.
- **Novel we already ship:** Interactive wine-matcher quiz (no competitor in top 10 has this).

---

## SERP snapshot (top 5 live, 2026-04-17)

| # | URL | Title | Wine count (body) | Notable features |
|---|---|---|---|---|
| 1 | wsjwine.com/wine-blog/types-of-wine/10-best-wines-for-mulled-wine | 10 Best Wines For Mulled Wine | **6 grape categories** (Grenache, Zinfandel, Merlot, Syrah/Shiraz, Tempranillo, Riesling) each with one product recommendation → 6 bottles | Grape-led H2 structure; "Why it's great / Tasting notes / Spice it up / Our recommendation" repeating 4-row mini-template per grape; bottom "Wines Featured" product carousel with prices; intro criteria bullet list; no FAQ, no schema visible |
| 2 | thepioneerwoman.com/food-cooking/…/best-wine-for-mulled-wine | 8 Best Wines for Mulled Wine | **8 bottles** (Robert Mondavi Merlot, Bogle Zin, Apothic Red, Bonterra Organic Merlot, Dark Horse Cab, Campo Viejo Garnacha, Bota Box Merlot, Alamos Malbec) | "Top Picks" card row at top (3 cards: Best Merlot / Best Zin / Best Red Blend); each bottle has category label ("Best Organic", "Under $10", "Best Boxed"), price, discount %, Drizly affiliate button; no FAQ, no methodology section, no schema |
| 3 | coravin.com/blogs/community/what-is-mulled-wine | What Is Mulled Wine? Classic Recipe & Holiday Tips | 3 grape categories recommended (Pinot Noir, Merlot, Cabernet Sauvignon) — **not a listicle**, a recipe+guide hybrid | Pairing table (5 pairing types × Examples × Why it works), FAQ block (6 Qs), step-by-step recipe (classic + slow-cooker + white variant), "Wines to use / avoid" explicit callout |
| 4 | thepioneerwoman.com duplicate (already #2) | — | — | — |
| 5 | cookieandkate.com/classic-mulled-wine-recipe | Classic Mulled Wine | Recipe post — names 3 grapes (Merlot / Zinfandel / Garnacha); **0 bottle recommendations** | Full structured Recipe schema (4.8/5 from 28 reviews), ingredients list, "How to" numbered steps, video embed, comment count 74+ (heavy social proof) |
| 6 | wine365.com/what-wine-type-for-mulled-wine | What Wine Type For Mulled Wine? | Q&A column format — names 4 grapes, **5 bottle recommendations** in a bulleted list at bottom | "Ask Vino Joe" Q&A framing; very short (2 min read); no imagery of bottles; no structured data |
| 7 | liquor.com/best-wines-for-mulled-wine-5091989 (referenced) | The 8 Best Wines for Mulled Wine | Not fully scraped but category = 8 bottles listicle (sibling format to their sweet-red-wine page) | Matches liquor.com template: Region / ABV / Tasting Notes structured per wine, retailer comparison, FAQ, "Why trust us" section |

**Median competitor bottle count (true listicles only, excluding recipe posts):** 7 (range 6–8). **We ship 8. Status: AT / slightly above median.**

Thin-SERP flag: 2 of the top 10 are pure recipe posts (cookieandkate, coravin) and 2 are forum/Reddit/Quora. True listicles in the top 10: ~4. Google is mixing intent here — recipe + buying guide.

---

## Gap analysis — what top pages have that we don't

1. **Grape-led structure (WSJ Wine, Coravin):** WSJ organises by grape variety first, then picks one bottle per grape. This gives beginners a decision tree — "pick your grape style, then your bottle." We organise by bottle, which is fine for shoppers but less educational.
2. **Explicit pairing table (Coravin):** 5-row table mapping pairing type → examples → why it works. We have per-wine pairing tags but no consolidated "what to eat with mulled wine" matrix.
3. **White mulled wine coverage (WSJ, Coravin):** Both include a section on using white wine (Riesling) as a base. We mention it in one FAQ sentence. This is secondary intent Google is rewarding.
4. **Structured Recipe schema (cookieandkate):** Recipe schema drives rich results in Google. We're a product/listicle page, not a recipe page, so this is adjacent — but a mini-recipe section inside our page (which we have as the slow-cooker WineTip) could be marked up.
5. **Cost-per-bottle shown inline (Pioneer Woman):** They show strike-through original price and discounted price next to each bottle. We deliberately don't show prices (Wine.com geographic pricing). Worth noting but not a gap to close.
6. **"Wines to avoid" section (Coravin, Cookie and Kate):** Both explicitly name grapes to skip (Cabernet Sauvignon, Pinot Noir, heavily oaked wines). We cover this in the MethodologyBox criteria but don't have a standalone "avoid" block.
7. **Top-of-page criteria checklist (WSJ, Coravin):** WSJ opens with a 4-bullet "what makes a great wine for mulled wine" list before any bottle. We cover this in the intro prose but not as a scannable list.

**What nobody has that we already do:** WineQuiz (interactive matcher), MethodologyBox (E-E-A-T scoring), critic-score ring charts per bottle, in-body Top 3 sidebar sticky. We're ahead on interactivity.

---

## Novel opportunity (no competitor has this)

**Add a "Mulling Suitability Matrix" above the wine listings** — a compact 4-column HTML table mapping each of our 8 wines to:
- Column 1: Wine (name + grape)
- Column 2: Tannin level (Low / Medium / Medium-High) — body-counted from our existing wine notes
- Column 3: Fruit intensity (Bright / Ripe / Jammy)
- Column 4: Best spice profile (Classic / Citrus-forward / Heavy-spice / Light)

This gives readers a single-glance decision tool that no competitor offers. WSJ organises by grape; Pioneer Woman organises by category label; nobody has a quantified tannin-vs-fruit matrix. This would also absorb NeuronWriter terms like "tannin", "fruit-forward", "spicy finish" naturally.

**Bonus novelty:** A mini "White Mulled Wine" secondary section (200–300 words, 2 bottle picks: a Riesling + a Viognier) to capture the rising secondary intent WSJ and Coravin are already ranking for. This is also absorption-zone gold for NW extended terms.

---

## Priority recommendations

1. **[Lia] Add a Mulling Suitability Matrix HTML table** above the wine listings (between TopPicksInline and Wine #1). 4 columns × 8 rows. Spec above. ~40 lines of MDX.
2. **[Lia] Add a 200–300 word "White Mulled Wine" secondary section** after wine #8, before the slow-cooker WineTip. Include 2 specific bottles (a Mosel Riesling + a Rhône Viognier or similar). This matches the secondary SERP intent captured by WSJ #1 and Coravin #3.
3. **[Lia] Add a "Wines to Skip" H3 inside the MethodologyBox** or as a fifth criterion — explicitly name Cabernet Sauvignon, young Nebbiolo, heavily oaked Chardonnay. Currently implied; competitors make it explicit.
4. **[Dana] Verify our page has FAQ schema applied** (we have 4 FAQs as H3 under "Frequently Asked Questions" — confirm JSON-LD is emitting). Cookie and Kate's Recipe schema is a SERP weapon; our FAQ schema is our equivalent.
5. **[Lia/Dana] Consider a grape-first secondary H2** ("Which Grape Makes the Best Mulled Wine?") as an absorption zone for missing NeuronWriter terms. WSJ's grape-led structure is clearly rewarded. We'd add it without restructuring the bottle list — it sits between intro and TopPicksInline, or as the lead of the MethodologyBox.

**Not recommended:** Adding prices inline. The geographic-pricing strategy is intentional and documented in handoff.md.
