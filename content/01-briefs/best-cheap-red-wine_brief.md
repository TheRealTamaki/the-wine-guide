# Brief: best cheap red wine

**Stage:** 1 (Brief)
**Date:** 2026-04-18
**Author:** Lia
**Target slug:** `/best-wines/best-cheap-red-wine/`
**Price band:** $15–$25

---

## 1. Keyword + Intent

**Primary keyword:** best cheap red wine  
**Volume:** ~2.9K/mo (BOFU Priority 1)  
**Search intent:** Transactional + navigational. Searcher has a purchase decision to make imminently. They want a short, reliable list of real bottles at an honest price — not a wine education course. Core use case: screenshot the list, bring it to the bottle shop or open the retailer on their phone.

**Secondary keywords to absorb:**
- best cheap red wine under $20
- best inexpensive red wine
- affordable red wine
- good cheap red wine
- best value red wine

---

## 2. SERP Summary (from Lino's serp.md)

**SERP character:** Weak. No major editorial authority owns this keyword. Top 10 is Reddit threads, old lifestyle blogs, retailer pages. Clear gap for a well-built editorial listicle.

| Competitor | Body Wine Count | Notes |
|-----------|----------------|-------|
| claudettescorner.com | 16 | 2019, stale, flat numbered list |
| thewinemarket.com | 9 | Retailer blog, "Great For:" tags |
| Food & Wine | 8 | Costco-only, sommelier-cited, 2026 |
| onesmallblonde.com | 6 | TJ's-only, personal blog |
| isntthatcharming.com | 5 | Personal, no structure |
| winefolly.com | 0 | How-to guide, no bottles, stale |
| Real Simple | 0 | Advice article, no bottles |

**SERP median (editorial listicles only):** 8  
**High-water mark:** 16 (claudettescorner — stale and beatable on quality)  
**Recommended wine count:** 13 (beats median by 60%, matches claudettescorner on count with vastly superior quality and structure)

**Key structural gaps no competitor covers:**
1. Style/body organisation (Light / Medium / Bold) — zero competitors do this
2. Body + Occasion two-axis reference matrix — zero competitors do this
3. Value regions explainer (Côtes du Rhône, Languedoc, Mendoza, Toro) — stale or absent
4. Headache myth debunk — absent entirely
5. Per-wine serve temperature — absent entirely
6. WineQuiz — unclaimed across entire SERP

---

## 3. Proposed Lineup (13 wines from 18 verified candidates)

### Light Reds (3)
1. **Domaine Laroque Cite de Carcassonne Pinot Noir 2023** — $17.97 — 91 WE — Languedoc, France
2. **Schug Sonoma Coast Pinot Noir 2023** — $19.99 — 91 JS / 91 Tasting Panel — Sonoma Coast, CA
3. **Chehalem Mountains Pinot Noir 2022** — $24.99 — 93 WS / 91 JS / 90 Jeb — Willamette Valley, OR

### Medium-Bodied Reds (4)
4. **Matsu El Picaro 2024** — $16.97 — 4.7 customer rating / 40 reviews — Toro, Spain *(best value / cheapest in lineup)*
5. **E. Guigal Cotes du Rhone Rouge 2022** — $17.97 — 90 Parker / 90 Dunnuck — Rhône, France
6. **Frescobaldi Nipozzano Chianti Rufina Riserva 2022** — $18.99 — 92 JS / 90 WS / 90 Vinous — Tuscany *(Top 100 of 2025)*
7. **BenMarco Malbec 2022** — $19.99 — 93 JS / 91 Vinous / 90 WS — Uco Valley, Mendoza

### Bold Reds (3)
8. **Goldschmidt Vineyard Katherine Stonemason Hill Cab Sauv 2023** — $21.97 — 92 WE / 91 JS — Alexander Valley *(Top 100 of 2025)*
9. **Susana Balbo Signature Cabernet Sauvignon 2022** — $21.99 — 94 Vinous / 93 JS / 93 WW — Uco Valley, Mendoza *(Top 100 of 2025)*
10. **Chateau Saint-Andre Corbin 2023** — $24.97 — 92 WE / 91 WW / 90 JS — St. Emilion, Bordeaux *(Top 100 of 2025)*

### Occasion Reds (3)
11. **Buck Summit Old Vine Zinfandel 2023** — $17.99 — 91 WE — 4.9 customer rating — Lodi, CA *(BBQ / weeknight)*
12. **Oberon Paso Robles Cabernet Sauvignon 2022** — $23.97 — 92 JS / 92 Tasting Panel — Paso Robles *(dinner party / gift)*
13. **Calculated Risk Reserve Cabernet Sauvignon 2023** — $24.99 — 91 WE — 182 reviews — Sonoma County *(crowd favourite)*

**Excluded from 18 candidates:**
- Chateau Bourdieu No.1 2018 — PRE-SALE, ships 07/01/2026, sold in pairs. Cannot include.
- Sanctuary Bien Nacido Pinot Noir 2018 — Zero reviews, Light bucket already covered by 3 stronger Pinot Noirs.
- Dievole Chianti Classico 2021 — Zero reviews; Frescobaldi already covers Italian Sangiovese.
- Quinta do Vallado Douro Tinto 2024 — Zero reviews, no critic scores; regional story covered in content without dedicating a wine slot.
- Bodegas Breca Garnacha 2022 — Weakest evidence (no critic scores, 10 reviews); cut first per Lena's note.

---

## 4. Novel Feature Plan

**Primary (mandatory, Lino's recommendation):** Body + Occasion two-axis reference matrix
- Positioned after the intro, before TopPicksInline or immediately following it (before wine listings)
- Pure Markdown table mapping all 13 wines: Wine name | Body | Best For | Price
- No new component needed
- Zero competitors have this
- Mirrors the WineQuiz decision tree logic in scannable form

**Secondary:** Per-wine serve temperature inline note (e.g. "Serve at 12–14°C" for light reds, "14–16°C" for medium/bold)

---

## 5. NeuronWriter Query

Check `/list-queries` for "best cheap red wine" before creating. **No existing query found** for this keyword in `seo/optimized/` folder — all existing SEO files checked. Create new query at Stage 5: project ID `fdfaf6451d9d7239`, engine `google.com`.

---

## 6. H2 Structure

```
[Intro — 2–3 paras]
[Body + Occasion reference table]
<TopPicksInline />
<WineTip #1 — pricing disclaimer>

## Best Cheap Light Red Wines
  ### Domaine Laroque Cite de Carcassonne Pinot Noir 2023
  ### Schug Sonoma Coast Pinot Noir 2023
  ### Chehalem Mountains Pinot Noir 2022

## Best Cheap Medium-Bodied Red Wines
  ### Matsu El Picaro 2024
  ### E. Guigal Cotes du Rhone Rouge 2022
  ### Frescobaldi Nipozzano Chianti Rufina Riserva 2022
  ### BenMarco Malbec 2022

## Best Cheap Bold Red Wines
  ### Goldschmidt Vineyard Katherine Stonemason Hill Cabernet Sauvignon 2023
  ### Susana Balbo Signature Cabernet Sauvignon 2022
  ### Chateau Saint-Andre Corbin 2023

## Best Cheap Red Wine by Occasion
  ### Buck Summit Old Vine Zinfandel 2023
  ### Oberon Paso Robles Cabernet Sauvignon 2022
  ### Calculated Risk Reserve Cabernet Sauvignon 2023

<WineTip #2 — headache myth / serve temperature>
<WineQuiz />
<MethodologyBox />
---
## Frequently Asked Questions
```

---

## 7. Audience Angles to Weave In (from Miko's audience.md)

- **Intro hook:** Name the "jammy mass-market red" pain point in para 1 (Meiomi / Yellow Tail archetype). Resolve it immediately with what this list is NOT.
- **Pain point 2 (headache myth):** Address in WineTip #2. Real cause: high residual sugar + high ABV in bulk production. Everything on this list is dry-fermented.
- **Pain point 3 (can't remember what I liked):** The list IS the fix. Make every wine scannable with a one-line identity.
- **Social occasion angle (FAQ):** Name 2–3 bottles that consistently impress at dinner parties.
- **Internal links:** Link `good-cheap-wine` and `best-cheap-wine-that-tastes-expensive` naturally in intro or WineTip.
- **Language bank phrases to use:** "no-brainer at that price," "punches above its weight," "great everyday drinker," "my go-to for get-togethers," "solid QPR," "overperforms for the price"

---

## 8. Word Count Target

**Target: 2,000–2,400 words** (intro + 13 wine descriptions + reference table + WineTips + MethodologyBox + FAQ). Each wine description: 80–120 words. FAQ: 4 questions × ~80 words each.

---

## 9. Affiliate Approach

- All 13 wines verified live on the retailer as of 2026-04-18
- All 18 Cloudinary image IDs confirmed via verify-winecom-wines skill
- Price note: all prices are current sale prices; regular prices higher. WineTip #1 covers this.
- Retailer name appears only in AffiliateCTA props — not in body prose.
