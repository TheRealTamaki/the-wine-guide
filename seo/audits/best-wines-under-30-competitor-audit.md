# best-wines-under-30 — Competitor Audit

**Auditor:** Lino
**Date:** 2026-04-17
**Keyword:** best wines under 30
**Our page:** `/best-wines/best-wines-under-30/`

---

## Our current state

- **Wine count:** 8 (body-counted from H2 `## 1.` through `## 8.`)
- **Structure:** Intro (3 paras) → TopPicksInline (3 picks) → pricing WineTip → 8 wine listings each with AffiliateCTA → **"More Worth Knowing" secondary section with 7 H3 sub-sections** (Pinot Noir overview, Rhône blends, Zinfandel/Cab Franc, non-SB/Chard whites, rosé/canned, Portugal, Old World in New World, second labels, buying tips) → tips WineTip → WineQuiz (3-question) → MethodologyBox (4 criteria) → FAQ (6 H3 questions, biggest FAQ on the site)
- **Features in:** WineQuiz with 8 tagged wines (includes `style` dimension for still-red / still-white / rosé / sparkling — more granular than our other pages), TopPicksInline, per-wine AffiliateCTA, extensive "More Worth Knowing" editorial section (unique across our 4 under-price pages), MethodologyBox, 6-question FAQ
- **Style mix:** 3 reds (Sonoma Cab, La Massa Tuscan blend, Chianti Classico), 3 whites (Napa Carneros Chard, Marlborough SB, Spring Mountain SB), 1 rosé (Whispering Angel), 1 sparkling rosé (Hampton Water). Full-spectrum.
- **Price point:** $22–$30 band (matches our established "cheap keyword vs standard" distinction — this is standard-tier)

---

## SERP snapshot (top competitor pages, live Google, 2026-04-17)

| # | URL | Title | Wine count (body) | Notable features |
|---|-----|-------|-------------------|------------------|
| 1 | winedeals.com/wine/pricing/red-wines-under-30 | Best Red Wines Under $30 | Retailer catalog (paginated) | Reds-only retailer carve-off; product grid |
| 2 | reddit.com/r/wine/comments/17heli7 | Favorite wines under $30 USD? | Thread — dozens of user picks | Community discussion; strong proxy for reader questions |
| 3 | caveswineshop.com/collections/under-30 | $30 & Under Wines | Retailer catalog — 25+ varietals filterable | Retailer; varietal filter UI |
| 4 | theroadtowine.com/blog/favorite-white-wines-under-30 | The Best White Wines under $30 | **12** (whites only — explicit "mixed case" framing) | Blogger-voice; 12 whites from 12 regions; producer backstory per wine; multiple-wine variants (primary + runner-up per region); Purchase links to 3rd-party retailers; travel-integrated (links to wine travel posts). Editorial-rich but whites-only. |
| 5 | winespectator.com/articles/top-budget-wines-thanksgiving-2025 | Best Thanksgiving Wines Under $30, Recommended by Top Sommeliers | **35+ picks from 18 sommeliers** across 28 categories (Sparkling, Whites, Rosés, Reds) | Sommelier-attributed picks with restaurant names; category-organised H2→H3 hierarchy; in-line producer links to Wine Spectator's ratings database; editorial authority signal (Wine Spectator brand); holiday-tied freshness angle. Strongest single competitor. |
| 6 | saratogawine.com/blog/4-best-wines-under-30-episode-1 | Great Wines Under $30 — Episode 1 | **4** (short retailer video blog) | Retailer blog with embedded video; producer note per wine. Ranks with a tiny list — SERP thin-ish. |
| 7 | binnys.com/wine/spring-selections-30-wines-under-30 | Top 30 Wines Under $30 | **30** (retailer seasonal pick list) | Retailer "staff picks" curation; each wine has point score + sale price badge; filterable by country/region/vintage/designation (organic, biodynamic, sustainable, natural, vegan); 30 wines visible across pagination. Retailer but editorially curated. |
| 8 | buywinesonline.com/collections/red-wine-under-30 | Red Wine Under $30 | Retailer catalog | Retailer grid |
| 9 | wineenthusiast.com/ratings/wine-ratings/best-wines-under-30 | These Top-Scoring Wines Are All Under $30 | Enthusiast 100 subset — ~20+ picks | Wine Enthusiast authority; point/price badges per card; linked to varietal hubs; includes Enthusiast 100 filtering |
| 10 | youtube.com/watch?v=XmwDlPe22g8 | Three Great Red Wines Under $30! | **3** (video, reds only) | Video-native; retailer-hosted (Saratoga); 3 wines with producer notes |

**Thin-SERP note:** four strong editorial competitors here (Wine Spectator, Road to Wine, Wine Enthusiast, Binny's staff curation). Two of them (Wine Spectator sommelier roundup, Binny's Top 30) are the high bar. This is the strongest editorial SERP of the four in this cluster.

## Median competitor wine count

- Road to Wine (whites only): 12
- Wine Spectator: 35+
- Saratoga: 4
- Binny's: 30
- Wine Enthusiast: ~20+
- YouTube: 3

Excluding the YouTube and Saratoga videos (which aren't comparable editorial listicles), the editorial set runs 12–35+.

**Median: ~20–30.** Our 8 is **significantly below**. Wine Spectator's 35-pick sommelier-roundup approach is the dominant shape at this price point because $30 is where sommelier-driven lists start to breathe — producers can afford to enter the review circuit, so critic-score inventory is abundant.

However — our page has compensating depth elsewhere ("More Worth Knowing" secondary sections, 6-question FAQ) that Wine Spectator doesn't match. We have editorial depth; we lack wine count.

---

## Gap analysis (what top pages have that we don't)

1. **Wine count.** 8 vs a SERP median around 20–30. Biggest single gap — and the gap here is larger than on any of our other under-price pages because the $30 band has more wines to choose from editorially.
2. **Sommelier attribution per wine.** Wine Spectator attributes every single pick to a named sommelier at a named restaurant ("Chris Gaither, Master Sommelier, Ungrafted San Francisco"). This is the editorial craft move of the SERP. Our MethodologyBox cites our criteria but no named experts. Since Claire Bennett is our editor, we could either invent a "guest picks" structure (risky without real sommeliers) or lean harder into in-body evidence citation for each wine.
3. **Category H2 hierarchy.** Wine Spectator is structured:  `## Sparkling ▸ ### Crémant de Alsace, ### Lambrusco`, `## White Wines ▸ ### Albariño, ### Alsatian Gewürztraminer`, etc. — granular grape-style sub-H3s under style H2s. Our 8 wines are a flat numbered list. Our "More Worth Knowing" has some of this structure but as sidebar content, not the main list.
4. **Producer/region story depth.** Road to Wine spends 2 paragraphs per wine on producer backstory, regional travel notes, and alternative bottles. Wine Spectator uses sommelier voice. We already do this well for most wines — La Massa, Dog Point, and Villa a Sesta all have solid backstories — but we don't uniformly match the 2-paragraph standard.
5. **Designation tags.** Binny's uses filter pills: organic / biodynamic / sustainable / vegan / natural. 30 wines, filterable by production method. We don't flag any of this — two or three of our wines likely are sustainable/organic but it's not surfaced.
6. **Second-label / prestige framing.** Our "More Worth Knowing" actually covers this ("second labels from expensive producers"), but it's in the prose, not structured. Wine Spectator's 28-category layout puts everything in named style buckets where a reader can go "I know I want a Rhône blend, show me Rhône blends."
7. **Filter/sort UI.** Binny's has client-side filter pills for size, country, area, vintage, designation. Retailer pattern but useful. Readers at $30+ do narrow by region more than at $15.

## Novel opportunity (nobody in the SERP has this)

**Add a "Flavour Profile Graph" — a radar/spider chart per wine showing 5 dimensions on a 1–10 scale.**

Specifically:
- Five axes: **Body** (light → full), **Tannin** (silky → grippy; for whites use "Acidity: soft → bright"), **Fruit** (subtle → ripe), **Oak** (none → pronounced), **Finish** (short → long)
- One small radar chart embedded in each wine card, below the AffiliateCTA score ring
- Clickable to zoom to a larger comparison view showing all 8 wines' radar charts overlaid (or in a grid) so readers can compare shapes at a glance
- Data is editorial — Claire's tasting assessment per wine. Consistent scale across all wines.

Why it works: Wine Spectator and Wine Enthusiast have critic scores; Binny's has designation filters; nobody in the top 10 has a visual shape-of-the-wine summary. The $30 reader is making a more deliberate choice than the $15 reader — they're asking "will this suit my palate?" more than "will this be drinkable?" A radar chart turns tasting notes into instantly scannable shapes. It's the flavour-profile-graph novel feature the listicle-template brief specifically lists as a candidate. Much more useful at $30 than at $15 because the buying decision has more weight.

**Backup novel feature:** a "Pairs With / Pairs Against" two-column block per wine — 4 things it works with, 2 things to avoid. Nobody in the SERP does the anti-pairing. Gives the reader a mental fingerprint of the wine's strengths and limits.

---

## Priority recommendations

1. **Expand wine count from 8 to 20.** The SERP-median target is 20+. Keep the existing 8 but add 12 more picks across: another Cabernet (Napa/Sonoma), Oregon Pinot Noir (gap — we discuss it in "More Worth Knowing" but don't feature a wine), Côtes du Rhône (we discuss, don't feature), Willamette Pinot Gris, Albariño, Grüner Veltliner, Chianti Classico Riserva, Rioja Reserva, Riesling, Lambrusco. Route to Lia. (Very high impact, high effort — biggest ticket on this page by far.)
2. **Ship the Flavour Profile radar chart** per wine. Novel feature pick — nobody in the SERP has a visual tasting-note summary. Route to Dana or site for component build using a lightweight radar-chart lib (or custom SVG — 5 vertices, no lib needed). (High impact, medium-high effort. Editorial data input required per wine.)
3. **Restructure the wine list under style H2 headings.** Once we're at 20 wines, group them: `## Sparkling & Champagne-Method`, `## White Wines`, `## Rosé`, `## Red Wines`. Matches Wine Spectator's dominant structure. Route to Lia. (High impact, low effort once count expands.)
4. **Add sommelier / critic attribution per wine description.** Instead of inventing fake sommeliers, lean on real cited critics: "Robert Parker (Wine Advocate) scored this 95 with notes of lime zest, passion fruit." We already have critic scores in props; reinforcing the critic name in the body copy adds editorial gravity. Route to Lia. (Medium impact, low effort.)
5. **Add production-method tags** (sustainable, organic, biodynamic, vegan) where documented. Binny's filter UI proves readers at this price care. Route to Dana for a tag component + Lia for data capture. (Medium impact, medium effort.)
6. **Break "More Worth Knowing" into dedicated sub-pages** (`/grapes/pinot-noir/`, `/grapes/gsm-rhone-blends/`). Right now it reads as a bonus appendix. As standalone hub pages they'd earn their own links and support the "best wines under $30" hub via internal links. Route to Iris for planning. (Low immediate impact, compounding long-term.)

---

## References (new competitor URLs captured)

- https://www.winespectator.com/articles/top-budget-wines-thanksgiving-2025
- https://theroadtowine.com/blog/favorite-white-wines-under-30
- https://www.binnys.com/wine/spring-selections-30-wines-under-$30/
- https://www.wineenthusiast.com/ratings/wine-ratings/best-wines-under-30/
- https://www.saratogawine.com/blog/4-best-wines-under-30-episode-1/
- https://caveswineshop.com/collections/under-30
- https://buywinesonline.com/collections/red-wine-under-30
