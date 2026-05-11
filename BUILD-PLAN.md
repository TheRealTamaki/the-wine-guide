# Build Plan — BOFU + MOFU Content

Last updated: 2026-04-27

**BOFU pipeline:** `content/docs/listicle-template.md` (4-stage: brief with Beuron terms → draft + polish in place → scripted deploy)
**MOFU pipeline:** `content/docs/informational-template.md` (brief → draft + polish in place → scripted deploy; SEO via Beuron)

**SEO tool for all article types: `beuron-seo`. The `neuronwriter-seo` skill is NOT used on this site.**

---

## Pre-flight blockers

**B1. Decide review/comparison template** — before the brand-review and head-to-head articles (Naked Wines, Winc, Firstleaf, wine.com vs vivino, etc). These don't fit the listicle shape. Recommend: review template = single-product deep dive with verdict box + score breakdown; comparison = side-by-side table + scenario recommendations. Decide pattern when Track C starts, not now.

---

## Wave 3 — Track B: Amazon wine-tools

Volume-ordered. Each = 4-stage pipeline against the wine-tools template.

| # | Slug | Volume | Notes |
|---|------|--------|-------|
| 19 | `coravin-wine-opener` | 1,900 | **DEFERRED** — Coravin systems not on Amazon US (only accessories); needs non-Amazon affiliate path before building |
| ~~20~~ | ~~`wine-tasting-kit`~~ | ~~1,000~~ | Shipped 2026-04-27 |

---

## Wave 4 — Track C: Reviews & comparisons (after templates settle)

Reviews first (single product), then head-to-heads.

| # | Slug | Volume | Type |
|---|------|--------|------|
| 22 | `naked-wines-review` | 2K-5K | Review (Naked Wines affiliate) |
| 23 | `winc-review` | 1K-3K | Review (Winc affiliate) |
| 24 | `firstleaf-review` | 1K-2K | Review (Firstleaf affiliate) |
| 25 | `wine-of-the-month-club` | 2,900 | Comparison/buying guide ($6.05 CPC) |
| 26 | `best-wine-clubs-compared` | 1K-3K | Multi-club head-to-head |
| 27 | `wine-com-vs-vivino` | 500-1.5K | Platform comparison |

---

## MOFU — Pairings cluster

All pairing articles use the **informational template** (QuickAnswer → hook → fascination bullets → content → PairingTable). SEO tool is **Beuron**, same as every other article type on the site. Affiliate: Wine.com product links woven into content. Revenue type: Aff + Info Product (wine-pairing-chart is lead magnet only).

**Existing:** `wine-and-cheese-pairing.mdx` shipped at `/pairing/wine-and-cheese-pairing/` — slug differs from planned `/pairing/cheese-wine-pairing/` (5K-10K vol). Either redirect + rewrite or rebuild at the correct slug. Decide before Wave 1 starts.

### Wave 1 — High volume (tackle first)

| # | Slug | Volume | KD | Notes |
|---|------|--------|----|-------|
| P1 | `cheese-wine-pairing` | 5K-10K | Med | Highest vol in cluster; existing article at wrong slug — needs decision |
| P2 | `steak-wine-pairing` | 2K-5K | Med | Classic; strong Wine.com bottle rec opportunity |
| P3 | `thanksgiving-wine-pairing` | 2K-5K | Med | Nov spike — publish by Oct |
| P4 | `chicken-wine-pairing` | 2K-4K | Low-Med | Broad intent; easy wins |
| P5 | `seafood-wine-pairing` | 2K-4K | Low-Med | |
| P6 | `chocolate-wine-pairing` | 2K-4K | Low-Med | Gift crossover angle |
| P7 | `salmon-wine-pairing` | 2,900 | Low (10) | $0.44 CPC — easy build |

### Wave 2 — Medium volume

| # | Slug | Volume | KD | Notes |
|---|------|--------|----|-------|
| P8 | `wine-pairing-chart` | 3K-5K | Low-Med | Lead magnet / info product; lives at `/food-wine-pairing/wine-pairing-chart/` — different URL structure, build as standalone page |
| P9 | `pasta-wine-pairing` | 1.5K-3K | Low-Med | |
| P10 | `pizza-wine-pairing` | 1.5K-3K | Low | Casual angle |
| P11 | `sushi-wine-pairing` | 1K-2.5K | Low | Niche |
| P12 | `bbq-wine-pairing` | 1K-2K | Low | Summer seasonal |

### Wave 3 — Lower volume / long tail

| # | Slug | Volume | KD | Notes |
|---|------|--------|----|-------|
| P13 | `turkey-wine-pairing` | 1,300 | Low (15) | $2.20 CPC; Nov seasonal |
| P14 | `ham-wine-pairing` | 1,300 | Low (24) | $1.97 CPC; holiday |
| P15 | `lamb-wine-pairing` | 1,000 | Low (7) | $0.89 CPC — easy build |
| P16 | `indian-food-wine-pairing` | 1K-2K | Low | Underserved |
| P17 | `mexican-food-wine-pairing` | 500-1.5K | Low | |
| P18 | `thai-food-wine-pairing` | 500-1.5K | Low | Underserved |

### Pairing-specific build notes

- **Beuron only for SEO term coverage.** NeuronWriter is not used anywhere on this site.
- **PairingTable component** already exists — check `src/components/content/PairingTable.astro` for prop contract before drafting.
- **wine-pairing-chart (P8)** is a different beast — it's a lead magnet printable. Needs a standalone page design, not the standard article layout. Defer until lead magnet strategy is decided.
- **Seasonal articles (P3, P13, P14):** Thanksgiving/turkey/ham need to publish by October for Nov ranking. Flag if current date is past August.
- **Cheese pairing decision:** Before building P1, decide whether to (a) redirect the existing `/pairing/wine-and-cheese-pairing/` to `/pairing/cheese-wine-pairing/` and rewrite in place, or (b) build fresh at the target slug and leave the old one. Option (a) is preferred — preserves any link equity.

---

## Working cadence

- **One article at a time start to finish**, unless two are genuinely independent (no shared research, no shared template work).
- **Wine research is parallel, never serial.** Stage 2 spawns 4 agents in 4 Chrome tabs, one sub-category each (grape variety / region / style per the article type). Each returns 5–10 verified bottles with URL, price, image ID, and scores. Serial Chrome sessions are the biggest time sink in the pipeline — parallel agents cut ~10 min off every guide. See `content/docs/listicle-template.md` → "Parallel wine research".
- **Update `wine-site-seo-keywords.xlsx`** at deploy time — mark `Complete` in the relevant funnel sheet (BOFU - Commercial or MOFU - Consideration) and All Keywords.
- **Update `handoff.md`** at the end of each session with what shipped + what's next.
- **Don't skip the brief stage** even when the template is established — SERP analysis sets the wine count and surfaces novel-feature opportunities.

## Decision points to revisit

- After #22 ships: confirm review template before #23–24.
- Seasonal items (mother's-day, valentines, christmas) — schedule against publication windows in `Content Calendar` sheet, not strict numerical order.
