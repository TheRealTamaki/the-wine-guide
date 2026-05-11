# Brief: best-wines-under-20 (REWORK — 8 wines to 20)

**Synthesized by:** Jas
**Date:** 2026-04-19
**Type:** Expansion rework — existing article (8 wines) expanded to 20 wines + new style-filter architecture
**Stage 0 files:** All 6 confirmed on disk before this brief was opened

---

## Slug

`best-wines-under-20`

Source: `wine-site-seo-keywords.xlsx` — verified as the live deployed slug. Existing page is at `/best-wines/best-wines-under-20/`.

---

## Wine count target

**20 wines.** Source: Lino's competitor audit (`seo/audits/best-wines-under-20-competitor-audit.md`, 2026-04-17).

SERP editorial median: 20. Specific data points:
- Punch Drink: 20 wines ("20 Under $20" explicit franchise)
- NYT column: 20 per entry (serial column)
- Reverse Wine Snob annual: 10 (hub of annual lists — narrower comparable)
- Roger Bissell: 11 (reds-only, less comparable)

Cross-style editorial median: 20. Our current page sits at 8 — significantly below SERP norm. The dominant franchise brand in this space uses "20 Under $20" as its literal name. Expanding to 20 is the single largest quality gap between our page and the SERP.

**Style distribution (from Lino's recommendation, confirmed by Lena's candidate set):**
- Red: 7 wines (wines 14–20 in the structure)
- White: 6 wines (wines 8–13 in the structure)
- Rosé and Sparkling: 7 wines (wines 1–7 in the structure)

---

## Persona framing

**Primary buyer: The Everyday Drinker who suspects they can do better.** Source: Miko's `audience.md`, 2026-04-19.

This is the reader who buys the same mid-range bottle on autopilot, is slightly embarrassed about it, and quietly hopes proof exists that interesting wine is available below $20. Miko's Reddit data pinpoints this with precision: the "Finally a post on my income level" comment (722 upvotes) and the Meiomi thread pile-on (997 upvotes) both trace to the same person. They drink regularly, know the mass-market options are mediocre, but haven't found the under-$20 alternatives that justify switching.

**Secondary buyers:**
- The Host who needs to not look cheap (Christmas/Thanksgiving gifting anxiety — "I bought the wrong bottle at Thanksgiving and need to make up for it").
- The Budget Sleuth who treats under-$20 wine shopping as a game, chasing QPR wins and Kirkland/Costco steals.

**Core shared belief:** Good wine under $20 exists, but finding it requires insider knowledge they don't have yet. The page's job is to be that shortcut — not an education, not a meditation on value, just the 20 bottles.

**Top 3 objections Lia must address (from Miko):**
1. "Cheap wine gives me headaches." (Physiological concern; answer: properly made wine from real producers doesn't rely on added sugar or heavy sulfites. The methodology addresses this implicitly.)
2. "I'll look cheap bringing a $15 bottle to dinner." (Social anxiety; answer: a bottle with a real producer story and a French or Italian regional designation reads as a choice, not a default. Frame specific picks as ones that come with a sentence of context the buyer can repeat.)
3. "I've been burned by Meiomi / Yellow Tail before." (Mass-market trauma; answer: acknowledge fast and pivot. The overproduction glut in the industry right now means genuinely regional wine is accessible at $20 that previously cost $30–$35.)

**Intro angle (from Lino + confirmed by Miko):** "Here's what still over-delivers at $20." Miko supports Lino's Punch Drink angle precisely: the buyer isn't asking for permission to spend $20; they're asking for proof the ceiling doesn't mean they have to compromise on character. Open with the payoff, not a meditation on value. The highest-upvoted Reddit sentiment across all threads is "Why does this never happen to me?" (Total Wine pricing error, 1,297 upvotes). The page should feel like it happened to them.

**Tone guidance for Lia:** Voice-guide compliant throughout. Sharp, specific, benefit-driven. The language bank from Miko: "weeknight sipper," "easy drinker," "insane for $20," "you'd never guess this was under $20," "stunned at the level of quality." Avoid any framing that positions this as charity ("even at this price point...") — buyers find it condescending. The wine is good. Say so directly. No em-dashes. No "not X, just Y" patterns.

---

## Candidate pool

**Lena delivered exactly 20 wines** — 8 existing (carried forward from the current MDX) + 12 new (verified live on Wine.com, 2026-04-19). The total candidate count matches the wine count target exactly: Lia uses all 20. There is no cut-down step.

**8 existing wines (structure and props from current MDX — Lia copies as-is, may lightly restructure prose for new H2 groupings):**

| # | Name | Style bucket | Status |
|---|------|-------------|--------|
| 1 | Chateau Lajarre Bordeaux Superieur 2023 | Red | Existing — from MDX |
| 2 | Domaine Laroque Cite de Carcassonne Pinot Noir 2023 | Red | Existing — from MDX |
| 3 | Jadix Cabernet Sauvignon 2023 | Red | Existing — from MDX |
| 4 | The Horologist Sauvignon Blanc 2024 | White | Existing — from MDX |
| 5 | Domaine Laroque Cite de Carcassonne Chardonnay 2023 | White | Existing — from MDX |
| 6 | Ziobaffa Organic Pinot Grigio 2024 | White | Existing — from MDX |
| 7 | Chateau Montaud Cotes de Provence Rose 2024 | Rosé | Existing — from MDX |
| 8 | La Marca Prosecco NV | Sparkling | Existing — from MDX |

All 8 existing wine AffiliateCTA props (href, label, store, image, description, scores, pairings) are in `src/content/articles/best-wines/best-wines-under-20.mdx`. Lia copies these verbatim — no re-verification needed, no prop invention.

**12 new wines (full product data from Lena's products-verified.json — verified live 2026-04-19):**

| # | Name | Style bucket | Product ID | Cloudinary ID | Price |
|---|------|-------------|-----------|--------------|-------|
| 9 | BenMarco Malbec 2022 | Red | 2669489 | csragcjypok3dxolfnnf | $19.99 |
| 10 | CVNE Rioja Reserva 2020 | Red | 2609673 | xtbmbny0dlgyo4qycjrq | $19.97 |
| 11 | Frescobaldi Nipozzano Chianti Rufina Riserva 2022 | Red | 3871328 | b7f12caobgigotyelw6b | $18.99 |
| 12 | Bodegas Luzon Verde 2024 | Red | 3985068 | tm7cxedwoji08n4ixc7t | $12.97 |
| 13 | Chalk Hill Sonoma Coast Chardonnay 2024 | White | 3485964 | yzydr4pewpurzxy3aqpn | $19.99 |
| 14 | Ceretto Arneis Blange 2023 | White | 3395102 | xgxe3naeltvwobi9rhaq | $18.97 |
| 15 | Catena White Clay Semillon-Chenin Blanc 2024 | White | 3648036 | b5u12qrgmh4y1rs1yh4z | $19.97 |
| 16 | Miraval Rose 2024 | Rosé | 3036255 | mrfbwld3nwqfxc1hrvzd | $19.97 |
| 17 | Marchesini Chiaretto di Bardolino Classico Rose 2023 | Rosé | 3878672 | oivchiratn8g74gsckzx | $16.97 |
| 18 | Crios de Susana Balbo Rose of Malbec 2024 | Rosé | 3376590 | qauhgzbjc4vxkkjqttsa | $13.97 |
| 19 | Gruet Brut NV | Sparkling | 12333 | wpk1dic8tuvxywsm8ycb | $17.97 |
| 20 | Mionetto Prosecco Brut NV | Sparkling | 114238 | lahbbrm1dz0kym2taquw | $15.97 |

All new wine AffiliateCTA props must be constructed from Lena's verified.json exactly. Image URLs follow the pattern: `https://assets.wine.com/winecom/image/upload/w_600,h_400,dpr_2.0,c_fit,q_auto:good,fl_progressive/[cloudinary_id].jpg`

---

## Novel feature

**StyleSelectorStrip — interactive style-filter pill strip above the wine listings.**

Source: Lino's competitor audit, "Novel opportunity" section, priority recommendation #2. The component is already built and on disk: `src/components/content/StyleSelectorStrip.astro`.

**What it does:** Four pill buttons sticky above the wine listings — "All (20)" / "Red (7)" / "White (6)" / "Rosé and Sparkling (7)". Clicking a pill hides non-matching wine sections (via `data-wine-style` attributes on wrapping divs) and shows only matching ones. Pure client-side JS, no page reload. Stays sticky while scrolling.

**Why this works:** The page must carry all 20 wines across every style to match the keyword. But readers almost always arrive wanting one style. Punch Drink uses fixed H2 sections (good, but forces linear scroll). Our filter is the upgrade — one click to "just show me the whites."

**Lia's implementation requirements:**

1. Add this import at the top of the MDX (alongside the existing imports):
   ```
   import StyleSelectorStrip from '../../../components/content/StyleSelectorStrip.astro';
   ```

2. Place the StyleSelectorStrip component after WineTip #1 (pricing disclaimer) and before the first wine section:
   ```mdx
   <StyleSelectorStrip categories={[
     { key: 'all',            label: 'All',                count: 20 },
     { key: 'red',            label: 'Red',                count: 7  },
     { key: 'white',          label: 'White',              count: 6  },
     { key: 'rose-sparkling', label: 'Rose and Sparkling', count: 7  },
   ]} />
   ```

3. Wrap each style category's wine sections in a div with the matching `data-wine-style` attribute:
   ```mdx
   <div data-wine-style="rose-sparkling">
     ## Sparkling and Rosé
     ... wines 1–7 ...
   </div>

   <div data-wine-style="white">
     ## White Wines
     ... wines 8–13 ...
   </div>

   <div data-wine-style="red">
     ## Red Wines
     ... wines 14–20 ...
   </div>
   ```

**Key implementation note from handoff.md (D11b, 2026-04-19):** The component is verified to build clean — `npm run build` passes at 41 pages, zero errors, with the component file present and un-imported. No component-level work needed from Dae. This is purely an MDX integration task for Lia.

---

## Target article structure

Lia must build this exact structure. Every component in order.

```
[frontmatter — update title and description to reflect 20 wines]

[imports — existing 5 imports + StyleSelectorStrip]

Intro (3 paras — value POV rewrite, "here's what still over-delivers at $20" angle)
  — See persona framing above for angle and tone
  — Do NOT place NeuronWriter terms here (intro is PROTECTED per absorption zone plan)

<TopPicksInline> — update top 3 from the new 20-wine set
  — Suggested new top 3 (from best critic scores + editorial interest):
    1. Catena White Clay Semillon-Chenin Blanc (94 JS — highest score in lineup)
    2. BenMarco Malbec 2022 (93 JS — top-scoring red)
    3. Miraval Rose 2024 (92 Decanter / 92 JS — premium rosé name recognition)
  — Lia may substitute based on editorial judgment, but these three have the strongest score narrative

<WineTip> #1 — pricing disclaimer (keep current text as-is or update minimally)
  "Prices on Wine.com vary by state and change frequently, especially for bottles that are on sale. Click through to see your current price before buying."

<StyleSelectorStrip categories={[
  { key: 'all',            label: 'All',                count: 20 },
  { key: 'red',            label: 'Red',                count: 7  },
  { key: 'white',          label: 'White',              count: 6  },
  { key: 'rose-sparkling', label: 'Rose and Sparkling', count: 7  },
]} />

<div data-wine-style="rose-sparkling">
  ## Sparkling and Rosé
  Wine 1: La Marca Prosecco NV (existing)
  Wine 2: Gruet Brut NV (new)
  Wine 3: Mionetto Prosecco Brut NV (new)
  Wine 4: Chateau Montaud Cotes de Provence Rose 2024 (existing)
  Wine 5: Miraval Rose 2024 (new)
  Wine 6: Marchesini Chiaretto di Bardolino Classico Rose 2023 (new)
  Wine 7: Crios de Susana Balbo Rose of Malbec 2024 (new)
</div>

<div data-wine-style="white">
  ## White Wines
  Wine 8: The Horologist Sauvignon Blanc 2024 (existing)
  Wine 9: Domaine Laroque Chardonnay 2023 (existing)
  Wine 10: Ziobaffa Organic Pinot Grigio 2024 (existing)
  Wine 11: Chalk Hill Sonoma Coast Chardonnay 2024 (new)
  Wine 12: Ceretto Arneis Blange 2023 (new)
  Wine 13: Catena White Clay Semillon-Chenin Blanc 2024 (new)
</div>

<div data-wine-style="red">
  ## Red Wines
  Wine 14: Chateau Lajarre Bordeaux Superieur 2023 (existing)
  Wine 15: Domaine Laroque Pinot Noir 2023 (existing)
  Wine 16: Jadix Cabernet Sauvignon 2023 (existing)
  Wine 17: BenMarco Malbec 2022 (new)
  Wine 18: CVNE Rioja Reserva 2020 (new)
  Wine 19: Frescobaldi Nipozzano Chianti Rufina Riserva 2022 (new)
  Wine 20: Bodegas Luzon Verde 2024 (new)
</div>

<WineTip> #2 — serving temperature (existing text may be kept or lightly updated to reference 20 wines)

## Find Your Wine Match
<WineQuiz> — update wines array to all 20 wines; update questions as needed

## How We Chose These Wines
<MethodologyBox> — update criteria count (currently 4; add 1 criterion: style coverage now spans 20 bottles)

---

## Frequently Asked Questions
(7 FAQ questions — 4 existing + 3 new; see absorption zone map below)
```

**Per-wine section structure (within each style div):** Each wine gets H3 heading with wine name, WineTraits component, prose (2–4 sentences, 4-sentence hard cap, voice-guide compliant), AffiliateCTA. H3 heading should be a Markdown link to the Wine.com URL per the H3 linking rule in handoff.md (D11b, 2026-04-19). Structure:

```mdx
### [### Wine Name as Markdown link to Wine.com URL]

<WineTraits tannin={N} acidity={N} sweetness={N} alcohol={N} body={N} />

[2–4 prose sentences]

<AffiliateCTA
  href="..."
  label="..."
  store="Wine.com"
  image="..."
  description="..."
  scores={[...]}
  pairings={[...]}
/>
```

**Note on H2 vs H3 for wine headings:** The current MDX uses H2 for wine headings (`## 1. Wine Name`). The rework introduces H2s for the style categories ("## Sparkling and Rosé", "## White Wines", "## Red Wines"). Lia should drop wine headings to H3 (matching the site's established H3 wine-heading pattern from other listicles and the H3 link CSS added in handoff.md). This preserves the TOC at H2-only level — only the three style H2s appear in the TOC, not all 20 wine names.

---

## Absorption zone map

Source: Dana's `terms.json`, query `cbb11521c0789748`, pulled 2026-04-19 (1 NW credit spent at Stage 0).

**INTRO ZONE: PROTECTED — zero NW terms placed here, no exceptions.**

### FAQ slots (7 total — 4 existing + 3 new)

**Existing FAQ slots to keep (from current MDX — rewrite for 20-wine scope but keep intent):**

| FAQ # | Question | Terms to absorb |
|-------|----------|----------------|
| 1 (existing) | What's the best wine under $20 for a dinner party? | `best wines`, `recommendation`, `bottle of wine`, `Wine`, `price point` — update answer to reference new 20-wine set; keep Lajarre Bordeaux and Montaud rosé references, add Miraval as new sparkling-or-rosé option |
| 2 (existing) | Is cheap wine under $20 actually worth buying? | `price`, `retail price`, `top-rated wines`, `pricey`, `per bottle`, `know where to look` — update to reference new additions (e.g. CVNE Rioja Reserva at $20, was $29; Catena 94 JS) |
| 3 (existing) | What's a good white wine under $20? | `sauvignon blanc`, `chardonnay`, `pinot grigio`, `white wine`, `inexpensive white`, `Sauvignon blanc`, `Chardonnay`, `Pinot noir`, `Riesling` — expand to cover the 3 new whites (Chalk Hill, Ceretto Arneis, Catena Semillon-Chenin) |
| 4 (existing) | How do I pick a wine under $20 as a gift? | `bottle`, `selection`, `top 100`, `Costco` — keep La Marca and Lajarre as gift anchors; add Miraval (celebrity estate, was $25) as new gift option |

**New FAQ slots (3 new — from Dana's absorption zone plan, cross-confirmed by Miko's top FAQ candidates):**

| FAQ # | Question | Source | Terms to absorb |
|-------|----------|--------|----------------|
| 5 (new) | What's wrong with wines like Meiomi and Yellow Tail? | Miko's FAQ candidate #3 (Miko recommendation: "validates the buyer's instinct that something was off, bridges to better alternatives") | `taste`, `fruity`, `flavor`, `delicious`, `grape`, `winemaking`, `Winemaking`, `Grape`, `Fruit`, `aroma`, `Aroma of wine` — explain engineered-for-sweetness production; note that mass-market wines use RS and added color; pivot to what these 20 picks have in common |
| 6 (new) | Can I actually bring a $15 bottle to a dinner party? | Miko's FAQ candidate #4 (Miko recommendation: "resolves the social anxiety, the most emotionally loaded FAQ candidate") | `recommendation`, `pick`, `selection`, `go-to`, `vibrant`, `lively`, `Restaurant` — name specific bottles with regional designations (French AOC, Italian DOC) that read as considered choices; Lajarre Bordeaux, CVNE Rioja Reserva, Miraval Rosé as specific gift-viable examples |
| 7 (new) | What food pairs well with wines under $20? | Dana's absorption zone plan FAQ #7 (entity terms: Salad, Roasting, Grilling, Tomato, Beef, Herb, Lemon, Food) | `dish`, `beef`, `roast`, `grill`, `herb`, `lemon`, `dessert`, `Salad`, `Roasting`, `Grilling`, `Tomato`, `Beef`, `Herb`, `Lemon`, `Food`, `Restaurant` — high-capacity slot; map style categories to food pairings (sparkling/rosé: seafood, salads, cheese; whites: poultry, fish, vegetarian; reds: beef, lamb, pasta) |

**Note:** Dana's absorption zone plan originally designated FAQ slots 1–4 for PAA questions (What's a good $20 bottle? / What is the best wine on a budget? / What is a good quality inexpensive wine? / What is the 20-20-20 rule?) and FAQ slots 5–7 for original questions. For this rework, Miko's three recommendations (Meiomi, dinner-party anxiety, headaches) are stronger editorial fits than Dana's original #5–6 ("Which red wines under $20 are worth buying?" and "Are cheap wines from Chile and New Zealand worth trying?"). Dana's FAQ #7 (food pairings) is kept as new FAQ #7. The intent coverage from Dana's FAQ #5–6 is absorbed into wine description slots (red wine descriptions for FAQ #5 content, extended term "chile" and "new zealand sauvignon" in white wine descriptions).

### Wine description slots

Each of the 20 wine descriptions (1–2 sentences of tasting notes + context) absorbs relevant flavour and style terms. Priority order within descriptions: flavour notes first, then region/production terms.

| Section | Key terms to weave into wine prose |
|---------|-----------------------------------|
| Sparkling/Rosé descriptions (7 wines) | `sparkling wine`, `fruity`, `floral`, `delicate`, `delicious`, `refresh`, `sip`, `vibrant`, `aroma`, `lively`, `mango`, `tropical fruits` |
| White wine descriptions (6 wines) | `sauvignon blanc`, `chardonnay`, `pinot grigio`, `white wine`, `acidity`, `citrus`, `lemon`, `zesty`, `tart`, `silky`, `oak`, `vanilla`, `floral`, `herbal notes`, `herbaceous`, `steel tanks`, `inexpensive white`, `new zealand sauvignon`, `varietal`, `Sauvignon blanc`, `Chardonnay`, `Acids in wine` |
| Red wine descriptions (7 wines) | `cabernet`, `cabernet sauvignon`, `merlot`, `malbec`, `red wine`, `tannin`, `cherry`, `plum`, `cassis`, `raspberry`, `spicy`, `peppery`, `bold`, `robust`, `round`, `juicy`, `silky`, `mouthfeel`, `oak`, `vineyard`, `flavors like`, `cab`, `bottles of pinot noir`, `classico`, `Cabernet Sauvignon`, `Merlot`, `Pinot noir`, `Sangiovese`, `Syrah`, `Rhône wine`, `Cherry`, `Fruit` |

### Secondary sections (use only if terms remain unabsorbed after FAQ + wine descriptions)

| Suggested heading | Terms | When to use |
|------------------|-------|-------------|
| "How to Find Good Wine Under $20" | `know where to look`, `selection`, `top 100`, `spectator`, `go-to`, `list of the best`, `wines may`, `pricey`, `retail price` | Use if 5+ of these remain unabsorbed after FAQ pass |
| "What to Look for in a Wine Under $20" | `varietal`, `acidity`, `tannin`, `mouthfeel`, `aroma`, `flavor`, `Winemaking`, `Varietal`, `Acids in wine`, `Aroma of wine` | Use if these remain after wine descriptions and FAQ |

### WineTip slots

| WineTip | Terms | Notes |
|---------|-------|-------|
| WineTip #2 (serving temp / practical tip) | `price`, `per bottle`, `retail price`, `price point`, `pricey`, `wines may`, `bottle` | Price-talk and buying-tip terms. E.g., a tip about checking prices by state or timing purchases during sales. Current WineTip #2 text (serving temp) is fine — can lightly augment with one price-context sentence if needed. |

---

## Wine traits table

Source: Niko's `wine-traits.json`, 2026-04-19.

Lia copies these integers directly into `<WineTraits tannin={N} acidity={N} sweetness={N} alcohol={N} body={N} />` props. No derivation, no rounding, no invention.

**Coverage:** Niko delivered 20 entries (8 existing + 12 new). 13 verified, 7 inferred.

| Wine (exact name from Niko's JSON) | Tannin | Acidity | Sweetness | Alcohol | Body | Confidence | Style Bucket |
|---|---|---|---|---|---|---|---|
| **EXISTING WINES (from current MDX)** | | | | | | | |
| Chateau Lajarre Bordeaux Superieur 2023 | 4 | 3 | 1 | 3 | 4 | inferred | red |
| Domaine Laroque Cite de Carcassonne Pinot Noir 2023 | 3 | 4 | 1 | 3 | 3 | inferred | red |
| Jadix Cabernet Sauvignon 2023 | 4 | 3 | 1 | 4 | 4 | inferred | red |
| The Horologist Sauvignon Blanc 2024 | 1 | 5 | 1 | 3 | 2 | inferred | white |
| Domaine Laroque Cite de Carcassonne Chardonnay 2023 | 1 | 3 | 1 | 3 | 3 | inferred | white |
| Ziobaffa Organic Pinot Grigio 2024 | 1 | 3 | 2 | 3 | 2 | inferred | white |
| Chateau Montaud Cotes de Provence Rose 2024 | 1 | 4 | 2 | 3 | 2 | inferred | rosé |
| La Marca Prosecco NV | 1 | 4 | 3 | 2 | 2 | inferred | sparkling |
| **NEW WINES (from Lena's products-verified.json)** | | | | | | | |
| BenMarco Malbec 2022 | 4 | 4 | 1 | 5 | 4 | verified | red |
| CVNE Rioja Reserva 2020 | 4 | 3 | 1 | 4 | 4 | verified | red |
| Frescobaldi Nipozzano Chianti Rufina Riserva 2022 | 4 | 4 | 1 | 4 | 3 | verified | red |
| Bodegas Luzon Verde 2024 | 3 | 3 | 1 | 4 | 4 | verified | red |
| Chalk Hill Sonoma Coast Chardonnay 2024 | 1 | 3 | 1 | 5 | 4 | verified | white |
| Ceretto Arneis Blange 2023 | 1 | 4 | 1 | 3 | 2 | verified | white |
| Catena White Clay Semillon-Chenin Blanc 2024 | 1 | 4 | 1 | 3 | 3 | inferred | white |
| Miraval Rose 2024 | 1 | 4 | 2 | 3 | 2 | verified | rosé |
| Marchesini Chiaretto di Bardolino Classico Rose 2023 | 1 | 4 | 2 | 4 | 3 | verified | rosé |
| Crios de Susana Balbo Rose of Malbec 2024 | 1 | 4 | 1 | 4 | 2 | verified | rosé |
| Gruet Brut NV | 1 | 5 | 2 | 2 | 2 | verified | sparkling |
| Mionetto Prosecco Brut NV | 1 | 4 | 2 | 2 | 2 | verified | sparkling |

**Coverage line:** Niko delivered 20 entries — 13 verified, 7 inferred. The 7 inferred entries are the 8 existing wines minus La Marca Prosecco (which Niko also inferred) plus Catena (ABV not listed on wine.com page). Inferred values are from varietal + regional + production-method inference, not fabrication. See `wine-traits.json` for Niko's per-wine sources.

**Note on existing wines:** The current MDX already has WineTraits props for the 8 existing wines. Lia can copy those values directly — they match Niko's JSON exactly (Niko sourced from the existing MDX values for the existing wines). The table above confirms all values for reference.

---

## Rework-specific guidance for Lia

### What to copy verbatim from the existing MDX

- **All 8 existing AffiliateCTA components** (href, label, store, image, description, scores, pairings props) — copy exactly from `src/content/articles/best-wines/best-wines-under-20.mdx`. Do not re-verify URLs, do not change Cloudinary IDs, do not alter scores or pairings.
- **WineTip #1 text** (pricing disclaimer) — keep as-is or minimal update.
- **WineTip #2 text** (serving temperature) — keep or lightly update to reference 20 wines.
- **WineQuiz questions array** (3 questions: food/occasion/style) — keep structure, update `wines` array to include all 20 wines.
- **MethodologyBox criteria** — keep existing 4 criteria; update criterion 4's description to reflect 20-bottle span and new style categories.
- **Existing 4 FAQ answers** — keep intent; update prose to reference the new 20-wine set where wine names are mentioned.

### What to build from scratch

- **Intro: 3 paragraphs** — rewrite entirely around the "here's what still over-delivers at $20" POV. Value framing upfront, not a description of what the guide does. Use Miko's language bank. Do not name specific wines in the intro (that's the TopPicksInline's job). No NeuronWriter terms.
- **TopPicksInline picks array** — update to reflect new top-3 selection from the 20-wine set.
- **StyleSelectorStrip** — new component, new import, new wrapping divs (see novel feature section above).
- **H2 category headings** — "## Sparkling and Rosé", "## White Wines", "## Red Wines" — new structural elements.
- **12 new wine sections** — each needs H3 (as Markdown link), WineTraits, prose (2–4 sentences), AffiliateCTA built from Lena's products-verified.json.
- **New FAQ entries 5–7** — from Miko's FAQ candidates (Meiomi, dinner-party anxiety, food pairings).

### Building AffiliateCTA for the 12 new wines

Use Lena's products-verified.json for all prop values. The image URL template is:
```
https://assets.wine.com/winecom/image/upload/w_600,h_400,dpr_2.0,c_fit,q_auto:good,fl_progressive/[cloudinary_id].jpg
```

The `TopPicksInline` image URL template is slightly different (uses `e_trim/w_200,h_400,c_fit`):
```
https://assets.wine.com/winecom/image/upload/e_trim/w_200,h_400,c_fit,q_auto:best,fl_progressive/[cloudinary_id].jpg
```

For critic names: use the exact strings from products-verified.json (e.g. "James Suckling", "Vinous", "Wine Spectator", "Wine Enthusiast", "Robert Parker", "Decanter"). The critic "Wilfred Wong of Wine.com" from the JSON should be shortened to "Wilfred Wong" in AffiliateCTA props (consistent with existing wines).

### H3 heading links

Per handoff.md (D11b, 2026-04-19), wine H3 headings should be Markdown links to Wine.com product pages:
```md
### [BenMarco Malbec 2022](https://www.wine.com/product/benmarco-malbec-2022/2669489)
```
This matches the CSS added in the H3 heading links ticket (`.prose h3 a` and `.prose h3 a:hover` rules in global.css).

### WineQuiz update

Add all 12 new wines to the `wines` array. Each new wine needs:
- `id`: kebab-case slug (e.g. `benmarco-malbec`, `cvne-rioja`, `frescobaldi-chianti`)
- `n`: sequential number 1–20
- `name`: exact wine name
- `href`: Wine.com URL from products-verified.json
- `image`: TopPicksInline-format image URL (e_trim/w_200 template)
- `region`, `grape`, `score`, `critic`: from products-verified.json
- `blurb`: 1 sentence voice-guide compliant description
- `tags`: `{ food: [...], occasion: [...], style: [...] }` — use the same tag vocabulary as existing wines

Existing 8 wine entries in the WineQuiz can be kept as-is; renumber `n` values so all 20 are sequential 1–20.

### Frontmatter update

- `title`: Update to reflect 20 wines. Suggestion: "Best Wines Under $20 Worth Buying Right Now" is fine; or "20 Best Wines Under $20" (60-char limit — count before finalising).
- `description`: Update to reference 20 wines and the new style-filter feature. Keep under 155 chars.

### topPicksData update

After deploy, Alex must update the `topPicksData` entry in `src/pages/best-wines/[...slug].astro` to match the new TopPicksInline top 3. The image URL format for this entry uses the `e_trim/w_200` template.

---

## Source citations

| Stage 0 file | Path | Date | Notes |
|---|---|---|---|
| Lino (competitor audit) | `Wineology/seo/audits/best-wines-under-20-competitor-audit.md` | 2026-04-17 | SERP median 20, novel feature = StyleSelectorStrip, 6 priority recs |
| Lena (products.md) | `Wineology/content/00-research/best-wines-under-20/products.md` | 2026-04-19 | 20 candidates across 4 style buckets; 8 existing + 12 new |
| Lena (products-verified.json) | `Wineology/content/00-research/best-wines-under-20/products-verified.json` | 2026-04-19 | All 12 new wines verified live on Wine.com; existing wines marked with product_id: "existing" |
| Miko (audience.md) | `Wineology/content/00-research/best-wines-under-20/audience.md` | 2026-04-19 | 3 buyer personas, 5 pain points, 3 objection angles, 24-phrase language bank, 10 FAQ candidates |
| Dana (terms.json) | `Wineology/content/00-research/best-wines-under-20/terms.json` | 2026-04-19 | Query `cbb11521c0789748` (1 new credit spent). 10 basic / 76 extended / 31 entity terms. 7-slot absorption zone plan. 1 deliberate skip (Slovenian wine). |
| Niko (wine-traits.json) | `Wineology/content/00-research/best-wines-under-20/wine-traits.json` | 2026-04-19 | 20 entries (13 verified / 7 inferred). All 20 wines in the rework set covered. |
| Existing MDX | `Wineology/src/content/articles/best-wines/best-wines-under-20.mdx` | Published 2026-04-14 | 8 existing wines; AffiliateCTA, WineTraits, WineQuiz props all confirmed. |

---

## Pre-handoff checklist

- [x] All six Stage 0 files confirmed on disk before brief was opened
- [x] Slug verified against spreadsheet: `best-wines-under-20`
- [x] Wine count target from Lino's SERP median — 20, source cited
- [x] Persona framing derived from Miko's `audience.md` — three buyer types, 3 objections, language bank
- [x] Candidate pool section: 8 existing flagged from MDX, 12 new flagged from Lena's verified.json
- [x] Novel feature from Lino's file — StyleSelectorStrip, component on disk, import path specified, usage pattern specified
- [x] Absorption zone map populated from Dana's `terms.json` — all four zone types covered (FAQ 7 slots, wine descriptions by style bucket, 2 secondary sections, WineTip #2). Intro zone is protected.
- [x] Each planned FAQ question (all 7) is a real question, not a placeholder
- [x] Wine traits table populated — 20 rows, all five traits as integers 1–5, confidence tag on every row, values match Niko's `wine-traits.json` exactly
- [x] Rework-specific guidance section: what to copy vs. what to build from scratch
- [x] AffiliateCTA construction instructions for 12 new wines (image URL templates, critic name handling)
- [x] H3 heading link pattern specified (per handoff.md D11b rule)
- [x] WineQuiz update instructions specified
- [x] Frontmatter update instructions specified
- [x] topPicksData update reminder flagged for Alex
- [x] Source citations section complete — all six files cited with paths and dates
- [x] File output path: `content/01-briefs/best-wines-under-20_brief.md`
