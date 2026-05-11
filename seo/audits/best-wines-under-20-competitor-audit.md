# best-wines-under-20 — Competitor Audit

**Auditor:** Lino
**Date:** 2026-04-17
**Keyword:** best wines under 20
**Our page:** `/best-wines/best-wines-under-20/`

---

## Our current state

- **Wine count:** 8 (body-counted from H2 `## 1.` through `## 8.`)
- **Structure:** Intro (3 paras) → TopPicksInline (3 picks) → pricing WineTip → 8 wine listings each with AffiliateCTA → serving-temp WineTip → WineQuiz (3-question) → MethodologyBox (4 criteria) → FAQ (4 H3 questions)
- **Features already in:** interactive WineQuiz with 8 tagged wines, TopPicksInline, per-wine AffiliateCTA with SVG ring score charts, MethodologyBox, sidebar Top Picks, 4 FAQ answers
- **Style mix (this is our edge):** 1 Bordeaux red, 1 NZ Sauvignon Blanc, 1 Languedoc Chardonnay, 1 Languedoc Pinot Noir, 1 Provence Rosé, 1 Pays d'Oc Cab, 1 Prosecco, 1 Pinot Grigio. Full-spectrum: red, white, rosé, sparkling.
- **Price point:** all under $20, all 90+ critic score or 4.0+ customer stars

---

## SERP snapshot (top competitor pages, live Google, 2026-04-17)

| # | URL | Title | Wine count (body) | Notable features |
|---|-----|-------|-------------------|------------------|
| 1 | winemadeeasy.com/wine/90-points-and-under-20 | Buy 90 Point Wines for Under $20 | Retailer catalog (paginated) | Product grid; 90pt filter; variety filter; not editorial |
| 2 | winetransit.com/wine/90-points-and-under-20 | 90 Point Wines for Under $20 | Retailer catalog | Same shape as #1 — retailer, not article |
| 3 | punchdrink.com/articles/best-wines-under-20-dollars-summer-2018 | The 20 Wines Under $20 That You Should Be Drinking This Summer | **20** (5 fizzy/pink + 5 white + 10 red, each an H3 body section) | Category-subheaded layout (Fizzy and/or Pink / White / Red); per-wine price + vintage + importer + "Purchase" button to wine-searcher; no ranking, no quiz, no table, no scores; editorial sommelier voice (Jon Bonné); dated 2018 but still in top 3 |
| 4 | reddit.com/r/wine/comments/1jyiunl | Good red wines under around $20 | N/A — thread | User discussion |
| 5 | somegoodwine.com/collections/top-20-under-20 | Best 20 Wines Under $20 | **20** (retailer list) | Retailer grid, add-to-cart CTAs |
| 6 | facebook.com/delish/posts/... | We Asked Experts For The Best Wines Under $20 | N/A — social post | Short Delish-sourced list |
| 7 | reversewinesnob.com/search/label/top-10 | Top 10 Lists — Best Wines Under $20 | Hub page listing their annual top-10s (7+ years) | Archive index; funnels to individual lists |
| 8 | rogerbissell.co/10-red-wines-under-20 | Top 10 Red Wines Under $20 | **11** | (same page analysed in best-red-wine-under-20 audit) |
| 9 | nytimes.com/column/20-wines-under-20 | 20 Wines Under $20 (NYT column) | Column hub — each entry is a separate 20-wine list | Serial column with multiple 20-wine sub-lists (Thanksgiving, summer, etc.); paywalled/soft-paywall; NYT authority |
| 10 | buywinesonline.com/collections/rated-90-under-20 | Wine Rated 90+ Under $20 | Retailer catalog | Variety-tagged grid |

**Thin-SERP note:** the editorial pages here are Punch Drink (#3), Reverse Wine Snob hub (#7), Roger Bissell (#8), NYT column (#9). Four true editorial competitors; rest are retailers or social.

## Median competitor wine count

- Punch Drink: **20** (explicit "20 Under $20" franchise)
- NYT column: **20 per entry**
- Reverse Wine Snob annual: **10** (but stacks archival lists on the hub)
- Roger Bissell: **11** (reds only — less comparable since our page is all-styles)

Cross-style editorial median: **20**. Our 8 is **significantly below** the SERP norm. The dominant franchise brand in this space is literally called "20 Under $20" (Punch, NYT both use it). We may be losing both count and keyword-match to the ~20-count page norm.

---

## Gap analysis (what top pages have that we don't)

1. **Count itself.** Punch Drink, NYT, and SomeGoodWine all run 20 wines. We run 8. The keyword is "best wines under 20" — readers and Google both read "20 picks" as the native shape of this content. **Biggest single gap.**
2. **Category-headed layout.** Punch Drink splits its 20 into explicit sections: "Fizzy and/or Pink" / "White" / "Red." This lets a reader scan for their style in one jump. Our wines are numbered 1–8 as a flat list; style only reveals itself when you read the wine description.
3. **Vintage + importer transparency.** Punch lists the vintage, price, and importer (e.g. "Price: $17, Vintage: 2017, From: Summit Selections") as a structured block per wine. We list vintage in the wine name but the importer/distributor isn't shown.
4. **Multi-retailer purchase links.** Bissell, Punch, and WE all link each wine to wine-searcher or multiple retailers. Our every CTA points to Wine.com only — which is fine for our affiliate model but limits the "where can I actually find this in my state" intent.
5. **Editorial voice + author credentialing.** Punch is a sommelier-run site with Jon Bonné's track record baked in. NYT is NYT. We have Claire Bennett but she's not credentialed in-page.
6. **Value-framing / "over-delivery" narrative.** Punch opens with a meditation on "bargain vs. value" — $23 is the new $20, here's what still over-delivers. That sets editorial authority. Our intro is tight but doesn't stake a POV.

## Novel opportunity (nobody in the SERP has this)

**Add a "Style Selector" filter tab strip at the top of the list — not a quiz, a one-click filter.**

Specifically:
- Four pill buttons above the #1 wine listing: `All (20)` / `Red (7)` / `White (6)` / `Rosé & Sparkling (7)`
- Click fades out wines that don't match. Pure CSS via `data-style` attributes on each wine section, client-side JS toggles a class. No page reload.
- Stays sticky at the top when scrolling through the list
- Counts update live (matches Punch Drink's implicit category structure, but is interactive and saves the reader from scrolling past styles they don't care about)

Why it works: the page has to carry every style at once to match the keyword, but readers almost always arrive wanting one style. A filter is the honest answer. Punch uses fixed H2 sections, which helps but forces linear scroll. A filter is the upgrade. WineQuiz is already a personalised recommendation — a filter is the "just show me the whites" intent, which the quiz doesn't serve efficiently.

**Backup novel feature:** a "When to drink" ranked table with columns for Wine / Best Season / Best Temperature (°F) / Ready Now or Cellar / Pairing. 20 rows, 5 columns. No competitor has a when-to-drink helper for this keyword.

---

## Priority recommendations

1. **Expand wine count from 8 to 20.** This is the single biggest gap — both keyword match and SERP native shape point to 20. Target mix: 7 reds / 6 whites / 4 rosés / 3 sparkling. Route to Lia for wine research from Wine.com. (Very high impact, high effort — biggest ticket on the page.)
2. **Ship the Style Selector filter strip.** Route to Dana (or site/component work) for the component + client-side JS wiring. Simple to build on top of the existing structure. (High impact, medium effort — best single differentiator on the SERP.)
3. **Add style-based H2 section headers.** Once we're at 20 wines, group them under H2s: "Sparkling & Rosé," "White Wines," "Red Wines." Matches Punch Drink's structural win. Route to Lia during the rebuild. (Medium impact, low effort once the count is expanded.)
4. **Add vintage + importer/distributor detail per wine.** e.g. "Vintage: 2023, Importer: Kysela Père et Fils." Route to Lia for research. Punch and Wine Spectator both do this; it's a credibility signal. (Medium impact, medium effort.)
5. **Reframe the intro around a value POV.** Punch opens with "$23 is the new $20 — here's what still over-delivers." Our intro is neutral. Claire Bennett can argue a position. Route to Lia, respecting voice-guide. (Medium impact, low effort.)
6. **Add an annual refresh tag to the URL/title**: "Best Wines Under $20 in 2026." Ongoing freshness play. Route to Dana. (Medium impact, annual effort.)

---

## References (new competitor URLs captured)

- https://punchdrink.com/articles/best-wines-under-20-dollars-summer-2018/
- https://www.nytimes.com/column/20-wines-under-20
- https://www.reversewinesnob.com/search/label/top-10/
- https://www.winemadeeasy.com/wine/90-points-and-under-20.html
- https://www.somegoodwine.com/collections/top-20-under-20
