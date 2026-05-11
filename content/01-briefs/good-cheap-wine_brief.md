# Brief — Good Cheap Wine

**Status:** brief
**Created:** 2026-04-18
**Target slug:** `/best-wines/good-cheap-wine/`
**Author:** Lia (Wine Writer)
**SERP analyst:** Lino (analysis at `seo/audits/good-cheap-wine-serp-analysis.md`)

---

## Target Keyword

- **Primary:** good cheap wine (4.4K/mo)
- **Priority:** 1 BOFU
- **Search intent:** Intent-mixed. Real shoppers asking "what's a cheap wine I can actually enjoy", split across:
  - Red, white, sweet, sparkling style intent (per "People also search for" chips)
  - Price-tier intent (under $5 / $10 / $15)
  - Reliability intent (Reddit #1: "most reliable cheap wine")
  - Grocery store vs wine shop intent (Living in Yellow angle)
- **Target audience:** The curious everyday drinker who's been burned by $8 grocery wine and burned by $30 bottles that didn't deliver. They want a short list of confident picks at a sensible price, categorised so they can grab what they need fast.

## SERP analysis summary (from Lino, 2026-04-18)

- Top 10 shape: 3 retailer pages, 2 gated critic master-lists (100 wines each), 3 editorial listicles, 1 Reddit forum, 1 prose column
- **Editorial listicle median: 6–8 wines** (Armchair Somm 6; Living in Yellow 14)
- **All-top-10 median: 14 wines** (critic lists 100 skew it up)
- **Winning editorial shape at position #2 (Living in Yellow):** 14 wines, 4 category buckets (Cab, Chardonnay, Moscato, Sweet Red), each with an "OUR PICK" / "TIEBREAKER" badge
- Zero competitors use 2D positioning matrices
- Zero competitors use a price-tier chip navigator
- Reddit owns the "reliability" axis by default, because nobody editorially claims it

## Wine count decision

**12 wines minimum, 15 ideal.** Lino's median-driven call. Default 8 is banned. Matches Living in Yellow's 14-wine shape, sits cleanly above the editorial median of 6–8. We're not competing with Wine Enthusiast's 100 on volume; we're winning on curation + structure.

## Price range

**$15–$25** per the "cheap" keyword precedent set 2026-04-16 on `best-cheap-wine-that-tastes-expensive`. Still prioritise highly rated bottles (strong critic scores OR 4+ stars with 50+ reviews). Cheap doesn't mean low quality; it means matching the search intent.

## Shape (H2 structure)

Category-bucketed, per Lino's recommendation:

1. **Intro** (2–3 paras)
2. **`<TopPicksInline />`** — top 3 picks (one red, one white, one rosé — spread across categories)
3. **`<WineTip>` #1 — pricing disclaimer**
4. **Price-tier chip navigator** (novel feature #3 from Lino)
5. **`## The Best Cheap Red Wines`** — ~4–5 wines, including "OUR PICK: Best Cheap Red"
6. **`## The Best Cheap White Wines`** — ~3–4 wines, including "OUR PICK: Best Cheap White"
7. **`## The Best Cheap Rosé`** — ~1–2 wines, including "OUR PICK: Best Cheap Rosé"
8. **`## The Best Cheap Sweet Wines`** — ~1–2 wines, including "OUR PICK: Best Cheap Sweet"
9. **`## The Best Cheap Sparkling`** — ~1–2 wines, including "OUR PICK: Best Cheap Sparkling"
10. **`## How to Make Cheap Wine Taste Better`** — secondary H2, absorbs Armchair Somm's tips section + NeuronWriter terms
11. **`<WineTip>` #2 — practical tips (serving + selection)**
12. **`<WineQuiz />`**
13. **`<MethodologyBox />`**
14. `---`
15. **`## Frequently Asked Questions`** — 9+ FAQ questions (seeded from Lino §4)

## Novel features (per Iris brief, picking 1–2)

1. **Price-tier chip navigator** (Lino Novel #3) — a row of chips above the wine list: `[Under $15] [Under $20] [Under $25]`. Anchors to H2 / wine list subsections. Low effort, high UX win, serves 4 of the top 8 related-search chips without creating separate pages. **Ship this.**
2. **Per-H2 "OUR PICK" / "Best Cheap [Style]" award badge** (Lino §5) — uses a simple text treatment in the H2 itself: `## The Best Cheap Red Wines — OUR PICK: Susana Balbo Crios Malbec`. No new component needed. **Ship this.**

Deferred (Dae territory):
- Value Rating scatter plot (2D critic score vs price) — queued for Dae's component rework cycle
- Sweetness-vs-body matrix — queued for Dae
- Per-wine reliability badge (Bronze / Silver / Gold) — queued for Dae as an AffiliateCTA prop

## FAQ seeds (from Lino §4, mapping related searches + forum questions)

9+ FAQs. Target 10.

1. **What's the best cheap wine under $10?** (top related search)
2. **What's the best cheap wine under $5?** (bottom-tier question — honest answer: limited but possible)
3. **What's the best cheap red wine?** (style split)
4. **What's the best cheap white wine?** (style split)
5. **What's the best cheap sweet wine?** (style split)
6. **What's the most reliable cheap wine brand?** (Reddit #1 — reliability axis)
7. **How can I make cheap wine taste better?** (matches Armchair Somm — also potentially absorbed into the secondary H2)
8. **Are grocery store wines worth buying?** (Living in Yellow's entire angle)
9. **What's the difference between cheap wine and expensive wine?** (educational)
10. **Which cheap wine has the highest alcohol?** (handles "gets you drunk" intent with voice-guide care — no glorification)

## NeuronWriter

- Project ID: `fdfaf6451d9d7239`
- Engine: `google.com`
- **Check `/list-queries` first.** If no existing query for `good cheap wine`, create one.
- Expect extended-term heat around: price tiers, drugstore/grocery language, "cheap but good", reliability, sweet/red/white splits, value language, specific cheap brands (Barefoot, Yellow Tail, Carlo Rossi territory — handle carefully since we're not listing those).

## Word target

2,500–3,000 words (12–15 wines + secondary section + 10 FAQs + methodology pushes past the `best-cheap-wine-that-tastes-expensive` count of ~2,400).

## Affiliate

Wine.com primary on every wine. No retailer name in body prose (only inside AffiliateCTA props / link URLs / `critic: "Wine.com"`). Voice rule per `content/docs/listicle-template.md`.

## Meta

- `title` ≤ 60 chars (target: "Good Cheap Wine: 12 Bottles Worth Buying Under $25" = 50)
- `description` ≤ 155 chars (target: ~140)

## Novel-feature flag for Dae

Lino called out Value Rating scatter plot as the signature visual for this page type (critic score vs price 2D matrix). It's queued for Dae's component cycle — note in handoff so Dae picks it up when we ship the `<DotScaleRow>` primitive.
