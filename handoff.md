# Session Handoff — Affiliate disclosure audit, search overlay, evergreen dates, affiliate flag

Last updated: 2026-05-10

## Where it started

User wanted the affiliate disclosure banner verified on every page that promotes affiliate products. Session expanded into: removing publish dates site-wide, adding a live search overlay, and building an environment-variable gate to hide all affiliate content until programs are signed up.

## Decisions locked + what shipped

- **Affiliate disclosure fixed on 20 articles.** All `gift-guides/*` and `wine-tools/*` articles were missing `affiliateDisclosure: true` (field absent, defaulting false). Added to all 20. Reference: `src/content/articles/gift-guides/*.mdx`, `src/content/articles/wine-tools/*.mdx`.
- **Homepage lede changed.** "Honest writing about wine. No jargon…" → "A people who don't know sh*t about wine and just want answers without the jargon." Reference: `C:\Users\Jade\Desktop\Claude B\Wineology\src\pages\index.astro` line ~53.
- **Publish dates removed site-wide.** Removed from `ArticleLayout.astro`, `ComparisonLayout.astro`, `ArticleCard.astro`, and the homepage editorial section. Reference: `src/layouts/ArticleLayout.astro`, `src/layouts/ComparisonLayout.astro`, `src/components/ui/ArticleCard.astro`, `src/pages/index.astro`.
- **Live search overlay built.** Click "Search ⌕" in nav (or Cmd/Ctrl+K) opens a modal — fetches `/search-index.json` and filters as you type. Scores: title-starts-with (3) > title-contains (2) > desc/category (1). Top 8 shown. Arrow keys + Enter navigate. Excludes legal pages (they're standalone `.astro`, not in the content collection). Reference: `src/components/ui/SearchOverlay.astro`, `src/pages/search-index.json.ts`, `src/components/Header.astro`, `src/layouts/BaseLayout.astro`.
- **Affiliate flag system.** `SHOW_AFFILIATE=false` in `.env` gates: disclosure banners (all 3 layouts), `AmazonCTA` component content, footer Privacy/Terms/Affiliates links. Flip to `true` + redeploy to activate. On Cloudflare Pages: Settings → Environment variables → add `SHOW_AFFILIATE=true` → trigger deploy. Reference: `C:\Users\Jade\Desktop\Claude B\Wineology\.env`, `src/layouts/ArticleLayout.astro`, `src/layouts/ComparisonLayout.astro`, `src/layouts/ProductSalesLayout.astro`, `src/components/content/AmazonCTA.astro`, `src/components/Footer.astro`.
- **Hosting confirmed: Cloudflare Pages.** Saved to memory. Reference: `C:\Users\Jade\.claude\projects\C--Users-Jade-Desktop-Claude-B-Wineology\memory\project_hosting.md`.

## Key files for next session

- `C:\Users\Jade\Desktop\Claude B\Wineology\CLAUDE.md` — read first, always
- `C:\Users\Jade\Desktop\Claude B\Wineology\.env` — `SHOW_AFFILIATE=false`; change to `true` when ready to go live with affiliates
- `C:\Users\Jade\Desktop\Claude B\Wineology\src\components\ui\SearchOverlay.astro` — full search implementation (client-side, no library)
- `C:\Users\Jade\Desktop\Claude B\Wineology\src\pages\search-index.json.ts` — build-time JSON index for search
- Memory files touched: `C:\Users\Jade\.claude\projects\C--Users-Jade-Desktop-Claude-B-Wineology\memory\project_hosting.md` (new), `MEMORY.md` (updated)

## Running state

- Background processes: none
- Dev server: was running on port 10286 (autoPort) at end of session — start fresh with `npm run dev`; will bind on 127.0.0.1 using PORT env or default 4000
- Open worktrees / branches: main only

## Verification — how to confirm things still work

- `npm run dev` in `C:\Users\Jade\Desktop\Claude B\Wineology` — starts clean
- Navigate to `/best-wines/best-red-wine-under-20/` — no disclosure banner visible, no publish date, article renders normally
- Navigate to `/wine-tools/best-wine-glasses/` — no AmazonCTA blocks visible, no disclosure banner
- Click "Search ⌕" in nav → overlay opens; type "chardonnay" → results appear immediately
- Footer on any page → no Privacy/Terms/Affiliates links visible
- Set `SHOW_AFFILIATE=true` in `.env`, restart dev server → disclosure banners, AmazonCTA blocks, and footer legal links all reappear

## Deferred + open questions

- **Placeholder images needed.** 6 Fundamentals chapters each have hero + 2–3 inline GuidePlaceholderImage components with AI prompts. Images → `public/images/fundamentals/ch[n]-hero.webp`.
- **Fundamentals lesson list on homepage not linked.** 6 rows are plain text; could link to each chapter.
- **Content pipeline backlog (carried forward).** 515+ untracked files never committed.
- **4 missing pairings (carried forward).** Salmon, turkey, ham, lamb — not started.
- **Wave 4 Track C review/comparison template (carried forward).** Undecided before `naked-wines-review` starts.
- **PairingTool reuse decision (carried forward).** Does steak (and other pairings) get its own PairingTool embed?
- **wine-pairing-chart lead magnet strategy (carried forward).** Printable / opt-in page undecided.
- **coravin-wine-opener (carried forward).** Non-Amazon affiliate path needed.
- **ogImages missing (carried forward).** wine-bag, wine-tasting-kit.
- **deploy script false positive (carried forward).** "FAIL: slug in URL" check known false positive.
- **Affiliate programs not yet signed up.** `SHOW_AFFILIATE=false` until live. On Cloudflare Pages, set env var + trigger deploy when ready.

## Pick up here

Commit everything from this session (20 disclosure fixes, search overlay, date removal, affiliate flag, lede change), then start generating the Fundamentals placeholder images using the AI prompts in each `GuidePlaceholderImage` component.

---

## Past session log

Each entry: date — title — durable artifact location.

- **2026-05-10** — Homepage copy edits + 6-chapter Fundamentals guide built. NextChapter + GuidePlaceholderImage components created; chapters at `src/content/articles/wine-basics/fundamentals-*.mdx`. Reference: `src/components/content/NextChapter.astro`, `src/components/content/GuidePlaceholderImage.astro`.
- **2026-05-07** — Status audit: handoff vs actual site. Discovered 515 untracked files, all Wave 1-3 pairings already built. Handoff rewritten to reflect reality. Reference: `handoff.md`.
- **2026-04-27** — Cheese article rewrite + PairingTool component. Reference: `src/content/articles/pairing/wine-and-cheese-pairing.mdx`, `src/components/content/PairingTool.astro`.
- **2026-04-27** — 12 new best-wines articles + hero images committed (at HEAD). Reference: commit `f2c43d7`.
- **2026-04-27** — Wine-tools articles: wine-bag, wine-tasting-kit, wine-tools-and-accessories, grocery-store-wine, advent-calendar. Reference: `src/content/articles/wine-tools/`.
- **2026-04-27** — BUILD-PLAN updated; MOFU pairings cluster defined (18 articles across 3 waves).
- **2026-04-26** — Gift-guide cluster: under-25, under-50, for-him, for-her. Reference: `src/content/articles/gift-guides/`.
- **2026-04-26** — Occasion articles: mothers-day, wedding, housewarming, picnic, camping, wine-buying-guide.
- **2026-04-26** — Compare articles: decanter-vs-aerator, wine-fridge-vs-regular-fridge. QuickAnswer component created. Informational template established. Reference: `content/docs/informational-template.md`.
- **2026-04-15** — 3 BOFU pages committed: best-sweet-red-wine, best-wines-under-15, best-wines-under-20. Reference: commit `c2ece04`.
- **2026-04-14** — Initial site build: scaffold, components, brand voice, WineQuiz, MethodologyBox, AuthorByline, listicle template, mulled wine. Reference: commits `8966893`–`e333384`.
