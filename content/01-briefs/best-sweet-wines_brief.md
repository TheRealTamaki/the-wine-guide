# Brief — best-sweet-wines (umbrella)

**Slug:** `/best-wines/best-sweet-wines/`
**Primary keyword:** `best sweet wines` (2–4K/mo, P1 BOFU)
**Page type:** Umbrella — sweet-style parent spanning 5 style buckets
**Author:** Claire Bennett, Wine Editor
**NeuronWriter query:** `24d60a8f6c5c6eca` (new — no existing query for "best sweet wines"; nearest sibling `1b943847867aa9fa` is for `best sweet red wine`)

---

## SERP absorbed (from Lino's audit at `seo/audits/best-sweet-wines-serp-analysis.md`)

**SERP shape:** mixed-intent umbrella. 3 forum/Reddit, 3 retailer collections, 2 editorial (Lexi #2 with 5 styles, VinePair #3 with 15 bottles), 2 type-roundups (Batch Mead 6 types, Market View 15 types), 1 YouTube.

**Wine count target:** 12–15 named bottles across 5 style buckets. VinePair (15 bottles) is the editorial ceiling. Lexi's beginner bucketing wins via educational depth. Default-of-8 banned.

**Novel feature gaps on SERP:** no competitor shows per-bottle sweetness level, no competitor has a 2D matrix, no competitor tags production method per bottle, no competitor surfaces a sweetness sub-navigator chip strip.

---

## Bucket map (locked)

| # | Bucket H2 | Flagship picks | Sibling link |
|---|-----------|----------------|--------------|
| 1 | Sweet White Wines (Riesling, Gewürztraminer, Chenin) | Dr. Loosen Mosel Riesling Kabinett, Chateau Ste. Michelle Harvest Select Riesling, Willm Gewürztraminer | — |
| 2 | Sweet Sparkling & Off-Dry | 1 Moscato d'Asti (cap), 1 Brachetto d'Acqui, 1 demi-sec or off-dry Prosecco | Link to `best-moscato-wine` |
| 3 | Sweet Red Wines | 2 flagships — Banfi Rosa Regale Brachetto, Jam Jar Sweet Shiraz (cap) | **Link to `best-sweet-red-wine`** |
| 4 | Fortified & Dessert (Port, PX Sherry) | Graham's Six Grapes Reserve Ruby Port, Sandeman 10-Year Tawny Port, PX Sherry | — |
| 5 | Late Harvest & Ice Wine (Sauternes, Tokaji, Ice Wine) | Chateau Guiraud Sauternes, Royal Tokaji Red Label 5 Puttonyos, Inniskillin Vidal Ice Wine | — |

**Target:** 12–15 bottles. Floor: 12. Aim: 13–14.

**Sibling differentiation rules (hard caps):**
- 1 Moscato max (Moscato has its own deep-dive at `best-moscato-wine`)
- 2 sweet reds max (sweet reds has its own deep-dive at `best-sweet-red-wine`)
- Link both siblings in body prose with exact anchor text ("best Moscato wines" / "sweet red wines")

---

## Intent and reader

Umbrella query with strong beginner intent (7 of 8 PAA questions are forum-style "recommend me" requests). Reader wants breadth: one or two bottles per style so they can pick confidently without reading 3 separate pages. The Sweet Wine Club / Wine on Sale retailer collections rank high because they solve "show me sweet wines" in one click — we have to match that breadth while beating them on curation.

---

## Component order (strict, per listicle-template.md)

1. Intro (2–3 paragraphs, voice-compliant, beginner-friendly framing)
2. Sweetness sub-navigator chip strip (novel feature #4 — cheap to ship)
3. `<TopPicksInline />` (3 picks — one from each top bucket: Riesling, Moscato d'Asti, Ruby Port)
4. `<WineTip>` #1 — pricing disclaimer
5. Educational primer H2 — "What Makes a Wine Sweet" (absorbs residual sugar, late harvest, noble rot, fortified, ice wine, stopped fermentation entity terms; NW-rich)
6. 5 bucket H2s with 2–3 bottles + AffiliateCTA per bottle
7. `<WineTip>` #2 — serving and pairing tips
8. Secondary H2 — "Where the World's Best Sweet Wines Come From" (regional variation H2; absorbs Piedmont, Mosel, Douro, Sauternes, Tokaj, Niagara entity terms)
9. `<WineQuiz />`
10. `<MethodologyBox />`
11. `---`
12. `## Frequently Asked Questions` — target 10 FAQs (FAQ is our moat)

---

## Novel features to ship

| # | Feature | Ship in this build |
|---|---------|--------------------|
| 1 | **Per-wine 5-dot sweetness intensity scale** (PRIMARY) | Yes — inline under wine H3 (simple emoji/UTF-8 dots, no new component needed) |
| 3 | **Production-method tag per bottle** (Late Harvest / Noble Rot / Fortified / Ice Wine / Stopped Fermentation / Naturally Sweet) | Yes — inline under wine H3 next to sweetness dots |
| 4 | **Sweetness sub-navigator chip strip** above wine listings (anchors to 5 bucket H2s) | Yes — same primitive pattern as `good-cheap-wine`'s price-tier navigator |
| 2 | 2D sweetness × body matrix | Defer to Dae. Not blocking this ship |

---

## FAQ seeds (10 planned — from SERP §4)

1. What is the best kind of sweet wine for beginners?
2. What's the difference between sweet wine and dry wine?
3. How can you tell if a wine is sweet from the label?
4. What's the sweetest wine in the world?
5. Which sweet wines taste like juice or fruit?
6. What's a good sweet red wine? (link to `best-sweet-red-wine`)
7. What's the best sweet white wine?
8. What's the best sweet sparkling wine? (link to `best-moscato-wine`)
9. How is sweet wine made?
10. Why are some sweet wines so expensive?

---

## Frontmatter (draft — verify char counts at Stage 6)

- `title: "Best Sweet Wines: 13 Bottles Across Every Sweet Style"` (count pending)
- `description: "From Moscato d'Asti to Sauternes. 13 sweet wines across five styles, each with a sweetness dot scale and production method tag."` (count pending)

---

## Price range

$15–$40 per listicle standard. Fortified (Port) and late-harvest/ice wine bottles will skew $20–$40. One or two bottles may sit $15–$20 (Moscato, entry Riesling, entry Port).

---

## Word count target

2,000–2,400 words. Umbrella depth, FAQ-heavy (FAQ is our moat), but don't pad — reader wants curation.

---

## Voice hard rules (reminders)

- Zero em-dashes anywhere, including props
- No "not X, just Y" patterns
- No retailer names in body prose (only in AffiliateCTA props)
- Intro protected from NW retrofits
- All absorption-zone paragraphs 4 sentences max / 80 words max (NEW RULE 2026-04-18)

---

## E-E-A-T

Claire Bennett byline. Experience-anchored phrasings only (from `content/docs/author-bio.md`). Never claim WSET / sommelier / MW / specific company names / year counts.

---

## Pipeline gates

- Stage 2 → 3: `verify-winecom-wines` every wine, no exceptions
- Stage 3: `/humanizer` on draft
- Stage 5: NeuronWriter maximum coverage across basic/extended/entity lists; voice-banned skips recorded
- Stage 6: frontmatter limits verified, `topPicksData` entered, `npm run build` clean, grep on dist HTML
