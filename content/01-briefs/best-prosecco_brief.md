# Brief — best prosecco

**Author:** Lia (Wine Writer)
**Date:** 2026-04-18
**Target keyword:** `best prosecco` (4.4K/mo, BOFU P1)
**Target slug:** `/best-wines/best-prosecco/`
**Funnel stage:** BOFU
**Word count target:** 3,200–3,800 words
**NeuronWriter query:** Check `/list-queries` first. Create new query only if `best prosecco` is not already indexed for project `fdfaf6451d9d7239`.

---

## Search intent

"Best prosecco" is a mixed-intent BOFU query leaning editorial: the reader wants a confident shortlist of Prosecco bottles to buy today, with enough styling information (Brut vs Extra Dry, DOC vs DOCG, Rosé) to pick the right one for their occasion (mimosa, Aperol Spritz, gift, dinner). Secondary intent clusters surfaced by Lino's SERP analysis: best under $20, best for Aperol Spritz, best Rosé, Col Fondo curiosity, DOC vs DOCG clarification.

Readers are not looking for wine education. They want the answer, plus confidence that the answer is the right one for their use case.

---

## SERP summary (from `seo/audits/best-prosecco-serp-analysis.md`)

**Editorial listicle median wine count:** 8. Ceiling: Wine Enthusiast at 10, structured across 5 style buckets. Retailers and Reddit fill the rest of the top 10.

**Our wine count:** 14 wines (above editorial median of 8, above the Wine Enthusiast ceiling of 10, above every top-10 editorial competitor).

**Shape:** Wine Enthusiast's 5-bucket style structure is the winning structural move on the SERP. We match it and exceed it with 6 buckets (Brut / Extra Dry / Rosé / Col Fondo / Superiore DOCG / Under $15 value sub-bucket absorbed inside Brut).

**Novel features to ship:**
1. **Best-for-occasion cross-reference chip strip** above the wine list: `[Best for Aperol Spritz]` `[Best for Mimosas]` `[Best for a Gift]` `[Best Under $15]` `[Best Rosé]` `[Best Col Fondo]`. Anchors to primary picks. Serves Aperol Spritz (#3 related-search chip, no top-10 editorial competitor owns it), mimosa, gift, and value intents all in one component. (Novel #3 from Lino.)
2. **Sweetness × Body style positioning matrix** described in prose. We don't have `<DotScaleRow>` shipped yet (Dae's cycle), so we ship this as a formatted table/markdown visualisation grouping the 14 wines by `sweetness tier` and `body` so readers can scan for their slot instantly. When Dae ships `<DotScaleRow>`, the content is already in place to swap in. (Novel #1 from Lino, content-layer version.)

**Queued for Dae (not shipping this page):**
- `<DotScaleRow>` primitive → `<ProseccoPositioning>` wrapper for the 2D scatter
- Style chip strip component (Brut / Extra Dry / Rosé / Col Fondo / Superiore DOCG) anchored to H2s
- Residual-sugar + ABV spec block per wine — shipping as inline text in each wine description for now

---

## Price range

$13 to $40. Spans the SERP-established Prosecco spectrum (Scotsman £7.65–£13.99, CNN $14–$24, Wine Enthusiast $11–$42). Include at least two bottles under $15 to own the "best Prosecco under $20" intent, at least two in the $25–$40 premium tier for gift and DOCG intent, rest cluster in the $15–$25 sweet spot.

---

## Proposed lineup (14 wines)

**Bucket 1 — Brut (5 wines)**
1. La Marca Prosecco DOC Brut — the Prosecco benchmark, 2,000+ customer reviews, 90-point twin scores.
2. Mionetto Prosecco DOC Treviso Brut — extra-dry variant also available; this is the Brut the general public knows.
3. Ruffino Prosecco DOC Brut — big producer, reliable, gift-friendly.
4. Zonin Prosecco DOC Brut — classic Brut, widely stocked, under $15 if available.
5. Santa Margherita Prosecco DOC Superiore Brut — upscale Brut, around $20.

**Bucket 2 — Extra Dry (3 wines)**
6. La Marca Prosecco Extra Dry (if Wine.com stocks it) — sister bottle, sweeter register.
7. Mionetto Prosecco DOC Extra Dry — the Extra Dry everyone compares to.
8. Bisol Jeio Extra Dry or similar Valdobbiadene producer.

**Bucket 3 — Rosé (2 wines)**
9. La Marca Prosecco Rosé Brut — highly rated, 50-ish reviews, same producer lineage.
10. Zardetto Prosecco Rosé Brut — the Rosé widely recommended in the category.

**Bucket 4 — Col Fondo / ancestral method (1 wine)**
11. Costadilà 280 SLM Col Fondo or Bele Casel Colfondo — the category's "rustic authentic" bucket, serves the Wine Enthusiast-only Charmat vs Rifermentato differentiator.

**Bucket 5 — Superiore DOCG / Conegliano Valdobbiadene (3 wines)**
12. Adami Garbèl Prosecco Superiore DOCG Brut — award-standard Valdobbiadene.
13. Nino Franco Rustico Valdobbiadene Superiore — classic producer, high scores.
14. Bisol Crede Valdobbiadene Superiore DOCG — premium DOCG, around $25.

**All bottles must be live on Wine.com at research time.** Substitutes are allowed per bucket; the shape of the list is locked, the exact wines flex to what verifies. `verify-winecom-wines` is mandatory before moving to Stage 3.

---

## Component order

Intro (2–3 short paragraphs) → `TopPicksInline` (3 picks, one per style bucket) → `WineTip` #1 (pricing disclaimer) → **Best-for-occasion chip strip** → H2 "Brut" bucket with 5 H3s → H2 "Extra Dry" with 3 H3s → H2 "Rosé" with 2 H3s → H2 "Col Fondo" with 1 H3 → H2 "Superiore DOCG" with 3 H3s → H2 "Prosecco Style Positioning" (sweetness × body visual in prose) → H2 "Best Prosecco for Cocktails" (Aperol Spritz, Mimosa, Hugo Spritz) → H2 "Prosecco 101: styles, methods and regions" (absorbs Charmat vs Rifermentato, DOC vs DOCG) → `WineTip` #2 (serving tips) → `WineQuiz` → `MethodologyBox` → `---` → `## Frequently Asked Questions` (10+ questions).

Per-H3 title format: **"[rank]. [Wine name] ([Best for X] award label)"**. Reuse the CNN/F&W award format.

---

## Awards (one per H3)

- #1: Best Prosecco Overall
- #2: Best Prosecco Brut
- #3: Best Prosecco for a Gift
- #4: Best Prosecco Under $15
- #5: Best Upscale Brut
- #6: Best Extra Dry Value
- #7: Best Extra Dry Overall
- #8: Best Valdobbiadene Extra Dry
- #9: Best Prosecco Rosé Overall
- #10: Best Prosecco Rosé Alternative
- #11: Best Col Fondo Prosecco
- #12: Best Superiore DOCG Brut
- #13: Best Valdobbiadene Producer Pick
- #14: Best Premium Superiore DOCG

---

## FAQ scaffold (10+)

1. What is the best Prosecco brand?
2. What is the best Prosecco under $20?
3. What is the best Prosecco for an Aperol Spritz?
4. What is the best Prosecco for mimosas?
5. What is the best Prosecco Rosé?
6. What's the difference between Prosecco and Champagne?
7. What's the difference between DOC and DOCG Prosecco?
8. What's the difference between Brut and Extra Dry Prosecco?
9. What is Col Fondo Prosecco?
10. Is Prosecco sweet or dry?
11. How long does an open bottle of Prosecco last?
12. What temperature should Prosecco be served at?

---

## Voice rules (hard)

- Zero em-dashes anywhere (including JSX props)
- No "not X, just Y" patterns
- No banned phrases ("world of wine", "wine journey", "let's dive in", "at the end of the day", etc.)
- Contractions always
- Paragraphs under 4 sentences (especially in absorption zones — hard cap 4 sentences / ~80 words per paragraph, split into multiple short paragraphs grouped by theme)
- Retailer names only inside AffiliateCTA props and link URLs
- Reviewer names kept (Wilfred Wong, James Suckling) without retailer attribution

---

## Affiliate approach

One `AffiliateCTA` per wine (14 total). All `store="Wine.com"`. No additional affiliate mentions in body prose.

---

## Pre-deploy checklist

- Frontmatter `title` ≤ 60 chars, `description` ≤ 155 chars (counted)
- `topPicksData` entry added in `src/pages/best-wines/[...slug].astro` with 3 verified Cloudinary IDs
- `verify-winecom-wines` passes on every `<AffiliateCTA>` `href` and `image`
- `/humanizer` run between Stage 2 and Stage 3
- NeuronWriter gap: 0 missing across basic + extended + entity (voice-banned skips recorded)
- Intro re-read against voice guide after Stage 5
- `npm run build` clean + grep on `dist/best-wines/best-prosecco/index.html`
- Handoff.md updated

---

**End brief.**
