# Brief — Best Wines Under $30

**Status:** brief
**Created:** 2026-04-15
**Target slug:** `/best-wines/best-wines-under-30/`
**File path on deploy:** `src/content/articles/best-wines/best-wines-under-30.mdx`

---

## Target Keyword

**Primary:** best wines under $30
**Est. volume:** 1.5K–3K
**KD:** Medium
**Priority:** 1 (BOFU)
**Angle from spreadsheet:** Mid-range

## Secondary keywords (to confirm once NW returns)

- best wine under 30 dollars
- best red wine under $30
- best white wine under $30
- good wine under $30

## NeuronWriter

**Query ID:** `97d0b5d7e2394b6b`
**Project:** bestwineguides.com (`fdfaf6451d9d7239`)
**Engine:** google.com
**Status:** Submitted 2026-04-15. Wait ~30s before Stage 5 SEO pass.

## Search Intent

Mid-range BOFU buyer. Reader already knows they want "good wine" but doesn't want to overspend. $30 is the psychological ceiling where casual drinkers feel confident spending for a dinner party, a gift, or "treat yourself" night. They want specific bottles, not varietal lectures.

Key questions the reader has:
- "What's actually worth $25–30 vs what's just marketing?"
- "Is it worth paying up from $20 to $30?"
- "What should I grab when I want to impress without blowing $60+?"

## Wine Lineup Plan

**8 wines, mixed styles**, all priced $20–$30 with 90+ critic scores where available. Style mix:
- 3–4 reds (must include a Cab, a Pinot Noir, and one Old World pick)
- 2 whites (one Chardonnay, one aromatic)
- 1 sparkling (Champagne alternative or high-end prosecco/cava)
- 1 rosé OR sparkling rosé

**Selection criteria:**
- Wine.com availability
- Customer rating 4.0+ stars where available
- At least one critic score 90+ where available
- Geographic diversity (mix New World + Old World)
- Story or producer hook (family estate, cult producer, unusual grape)

**Research step:** Pull 8 bottles from Wine.com in Stage 2 (Draft). Capture product ID, image URL, region, grape, scores, star rating, and food pairings.

## Proposed H2 Structure

1. Intro (voice-first, no keywords)
2. `<TopPicksInline />` — 3 picks
3. `<WineTip>` — pricing disclaimer
4. Wine 1 (Best overall red)
5. Wine 2 (Best Cab)
6. Wine 3 (Best Pinot Noir)
7. Wine 4 (Best Old World red)
8. Wine 5 (Best white)
9. Wine 6 (Best aromatic white)
10. Wine 7 (Best sparkling)
11. Wine 8 (Best rosé or sparkling rosé)
12. `<WineTip>` — practical tip (e.g. when to spend up vs stay under $20)
13. `<WineQuiz />`
14. `<MethodologyBox />`
15. `## Frequently Asked Questions` (3–4 Q&As)

## Angle / Hook

"The $30 sweet spot: where real quality starts without the restaurant markup." Position the $20–$30 range as the tier where producers stop cutting corners on oak, vineyard sourcing, and ageing. Frame the picks as "worth paying up for."

## Word count target

2,200–2,800 words (matches reference page range).

## Affiliate approach

Wine.com product links via `<AffiliateCTA />`. Never name the retailer in body prose — use generic phrasing ("the retailer," "verified customer ratings"). Retailer name only inside `AffiliateCTA` props and structured critic data.

## Pre-flight notes for next stages

- Draft goes in `content/02-drafts/best-wines-under-30_draft.mdx`
- Voice-first — no keyword list open during drafting
- Wines with no critic scores: pass `score: 0`, `critic: ""`
- After SEO pass, re-read first three paragraphs against voice guide
- Add `topPicksData` entry in `src/pages/best-wines/[...slug].astro` at deploy time
