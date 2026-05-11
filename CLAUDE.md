# The Wine Guide

> **HARD RULE — NO EM-DASHES. EVER.** Not in articles, not in bullet points, not in fascinations, not anywhere. Replace `—` with a full stop, a comma, or a colon. This rule has been violated repeatedly. There are no exceptions.

Wine education blog and affiliate site. Informative content about wine regions, grape varieties, tasting guides, and buying recommendations for everyday wine enthusiasts.

<!-- This file is THE MAP. Loaded in every conversation — keep it tight.
     For detailed instructions → each workspace's CONTEXT.md.
     For background material → each workspace's REFERENCES.md. -->

## Tech Stack

- **Framework:** Astro (static site, minimal template)
- **Language:** TypeScript (strictest)
- **Package manager:** npm
- **Commands:** `npm run dev` (dev server) · `npm run build` (production) · `npm run preview` (preview build)
- **Hosting:** Cloudflare Pages (project: `the-wine-guide`, account: `Jadetautau@gmail.com's Account`)
- **Domain:** `wineguide.co` (zone on Cloudflare, registrar NameSilo via `ns1/ns2/ns3.dnsowl.com` originally)
- **Cloudflare automation:** `CLOUDFLARE_API_TOKEN` lives in `Wineology/.env` (gitignored). Zone ID `9fe113103f16a22c9c2b4734f80c9851`, Account ID `f854052397c564b01602f3e4b63652fb`. Use it for DNS, Pages, and zone-setting calls before asking Jade for new keys.

## Folder Structure

```
the-wine-guide/
├── CLAUDE.md                        ← You are here (always loaded)
│
├── research/                        ← Topic research, keyword data, competitor analysis
│   ├── CONTEXT.md
│   ├── REFERENCES.md
│   ├── topics/                      ← Research briefs and findings
│   ├── keywords/                    ← Keyword data exports
│   └── competitors/                 ← Competitor content analysis
│
├── content/                         ← Article pipeline: brief → draft (polished in place) → deploy
│   ├── CONTEXT.md
│   ├── REFERENCES.md
│   ├── workflows/CONTEXT.md         ← Pipeline stage routing
│   ├── docs/                        ← Voice guide, article templates
│   ├── 01-briefs/                   ← Content briefs (with NeuronWriter terms pulled upfront)
│   ├── 02-drafts/                   ← Working files — polish in place, draft:true/false in frontmatter
│   ├── 03-review/                   ← ARCHIVE ONLY (pre-2026-04-25 articles; new articles skip this)
│   └── 04-final/                    ← ARCHIVE ONLY (pre-2026-04-25 articles; new articles skip this)
│
├── scripts/
│   └── deploy-listicle.mjs          ← Validates draft + copies to src/ + builds + verifies
│
├── seo/                             ← On-page optimization, audits, keyword targeting
│   ├── CONTEXT.md
│   ├── REFERENCES.md
│   ├── docs/                        ← SEO checklists, guidelines
│   ├── audits/                      ← Page/site audit reports
│   └── optimized/                   ← SEO-optimized content versions
│
└── src/                             ← Astro site source (pages, layouts, components)
```

## Session Startup — Preload Tools (MANDATORY, first action)

**Before doing anything else in a session that will touch a listicle pipeline**, run this single bulk `ToolSearch` to load the Chrome and browser tools used across every stage. This eliminates piecemeal tool discovery during wine research and SEO (was costing ~2 min per session).

```
ToolSearch({
  query: "select:mcp__Claude_in_Chrome__tabs_context_mcp,mcp__Claude_in_Chrome__javascript_tool,mcp__Claude_in_Chrome__navigate,mcp__Claude_in_Chrome__tabs_create_mcp,mcp__Claude_in_Chrome__tabs_close_mcp,mcp__Claude_in_Chrome__get_page_text",
  max_results: 10
})
```

Skip only if the user's task is clearly unrelated to the listicle pipeline (e.g. a CSS tweak, a component refactor, a pure prose review). When in doubt, preload — the cost is a single tool call, the savings scale across the whole session.

## Brand Voice (MANDATORY)

**Before writing ANY content** (articles, page copy, headlines, CTAs, descriptions, emails — anything reader-facing), you MUST read `content/docs/voice-guide.md` first. No exceptions. This applies to drafts, rewrites, and edits alike.

This includes short strings inside component props: `MethodologyBox` criteria, `WineQuiz` wine blurbs, `AffiliateCTA` descriptions, `WineTip` content, FAQ answers, intro paragraphs, and wine descriptions. If it renders on the page, the voice guide applies. Read it in the same turn you're writing, not "generally at some point".

Hard rules that are most commonly violated in this project:
- **No em-dashes anywhere.** Use full stops, commas, or colons instead.
- **No "not X, just Y" / "this isn't X. It's Y" / "not X. Just Y" patterns.** Say the positive thing directly.

## Every Page Goes Through the Pipeline (4 stages, 2 working files)

```
content/01-briefs/[topic]_brief.md      (plan + NeuronWriter terms pulled upfront)
   ↓
content/02-drafts/[topic]_draft.mdx     (research, write, polish, gap-patch, all in place)
   ↓  node scripts/deploy-listicle.mjs [slug]
src/content/articles/best-wines/[slug].mdx
```

No writing directly into `src/content/articles/`. That's the deployment step (handled by the script), not the starting point.

**Polish happens IN PLACE on the draft file.** Do not copy to `03-review/` or `04-final/` — those folders exist only as archive of pre-2026-04-25 articles. New articles use `draft: true/false` in frontmatter to track state, not folder location. The old 6-stage pipeline was proven ceremonial (draft/review/final were byte-identical on most shipped articles).

**SEO tool for ALL Wine Guide articles (BOFU + MOFU): `beuron-seo`. The `neuronwriter-seo` skill is NOT used on this site — for any article type.** This applies to every article that gets an SEO term pass: `best-wines/*`, `wine-tools/*`, `gift-guides/*`, `compare/*`, `pairing/*`, `food-wine-pairing/*`, and any other listicle, comparison, or informational page. Pull Beuron terms at Stage 1 (brief time), not as a post-ship cleanup, so the draft writer has the term list open while writing. One gap sweep during Stage 3 polish, no iteration. Strategically absorb terms in places that don't damage the brand voice: FAQ answers first, product/wine descriptions second, secondary sections third. Never inject keywords into the first three paragraphs. Re-read the intro after the gap pass and rewrite anything stuffed. Skip voice-banned terms ("world of wine", "wine journey") and take the score hit.

**TOFU pages get voice and structure quality control, not SEO term scoring.** TOFU/educational page types: `wine-basics/*`, `wine-glossary/*`, `regions/*`, `grapes/*`, `types-of-wine/*`. Beuron is optional on these — the brand-voice and information-design quality bar matters more than term coverage. If a sub-agent asks "should I run Beuron on this TOFU article?", the answer is "only if the brief calls for it."

**Reuse Beuron term packs across briefs and audits.** Beuron writes scored term packs to `research/competitor-data/[keyword]/scored_terms.json`. Before scoring a new keyword, check that path and re-use the existing pack if it's there. Re-running Beuron triggers fresh Firecrawl scrapes (paid credits per the tool-cost rule in the root CLAUDE.md), so dispatch contracts must announce the credit spend before a new run.

**Article frontmatter `title` is capped at 60 characters by the content collection schema.** Longer descriptive titles render fine via the body H1 but the frontmatter `title` field will fail the build. Truncate before saving; do not pad with subtitles in the frontmatter.

**Article frontmatter `description` is capped at 155 characters by the same schema.** The deploy script's validation also rejects anything over 155. Trim before saving — every dispatch contract should explicitly state this cap so agents don't ship 156-char descriptions that block deploy.

---

## Building Listicle Pages (best-wines/*)

**Before building any `best-wines/*` page, read `content/docs/listicle-template.md`.** It spells out the 4-stage pipeline (brief → draft → polish-in-place → scripted deploy), the strict component order (TopPicksInline → pricing WineTip → wine listings → slow cooker WineTip → WineQuiz → MethodologyBox → FAQ), the required `topPicksData` entry in `src/pages/best-wines/[...slug].astro`, and the WineQuiz prop contract. Every listicle must match the reference page `/best-wines/best-red-wine-under-20/` in structure, not just tone.

**The two rules that matter most and get broken most:**
- **Never add Beuron terms to the intro paragraphs.** If a term only fits there, skip it. Use FAQ answers, wine descriptions, and secondary sections first — see the absorption zone priority order in `content/docs/listicle-template.md`.
- **Re-read the first three paragraphs against the voice guide after the gap sweep.** Keyword passes degrade the intro most. Rewrite any sentence that reads as process-first, clinical, or stuffed before flipping `draft: false`.

**Wine research is parallel, never serial.** For every listicle's Stage 2, spawn 4 agents, each with its own Chrome tab, each assigned one sub-category (grape variety for generic listicles, region for single-variety guides, style for narrow cuts). Each agent returns 5–10 verified bottles with URL, price, image ID, and scores. Iris compiles the final lineup from the combined pool. See the "Parallel wine research" section in `content/docs/listicle-template.md`. Serial Chrome sessions are the single biggest time sink in the pipeline — roughly 10 minutes per guide — and this eliminates them.

**TopPicksInline and WineQuiz scores:** For wines without professional critic scores, pass `score: 0` and `critic: ""`. The component automatically hides stars and score labels when score is 0.

**Verify all wine.com product URLs before publishing.** After building any `best-wines/*` listicle, navigate to every wine.com product URL and confirm it loads a real, named product — not a dead record ("Sold Out — was $0.00") or a redirect to a different wine. A correct wine name with a hallucinated product ID is the most common failure mode. The same wine name may exist under a different product ID — always find the live listing and extract the correct Cloudinary image ID from it. See `.claude/skills/verify-winecom-wines.md`.

**wine.com is protected by DataDome bot detection. Use Claude in Chrome only — Playwright and `fetch()` do not work.** Direct `fetch()` returns 403 on every product URL. Headless and headed Playwright (with stealth flags, custom user agents, persistent contexts) get the page killed before render — the title stays "wine.com" and the body returns DataDome's CAPTCHA challenge JSON. Even Claude in Chrome can trigger CAPTCHAs after rapid navigations across multiple tabs in a row, so navigate one URL at a time and check `document.title` flips off the literal "wine.com" before extracting.

**`naturalWidth === 0` on the wine.com page is not a reliable broken-image signal.** Images below the fold report 0 before lazy-loading fires. The fastest way to verify a Cloudinary image ID without re-loading wine.com (and without re-triggering DataDome) is to load the asset directly from the CDN, which is not bot-protected:

```js
const img = new Image();
img.onload = () => console.log(`VALID ${img.naturalWidth}x${img.naturalHeight}`);
img.onerror = () => console.log('BROKEN (404)');
img.src = `https://assets.wine.com/winecom/image/upload/w_100,h_200,c_fit/${ID}.jpg`;
```

Use this to bulk-verify image IDs already in a draft. To extract a NEW image ID from a wine.com product page (when you actually need to navigate it), use: `Array.from(document.querySelectorAll('img')).map(i => i.src).filter(s => s.includes('assets.wine.com'))`. The Cloudinary ID is the ~20-char alphanumeric string before `.jpg`.

## Building Informational Pages (compare/*, pairing, educational, region)

**Before building any informational article, read `content/docs/informational-template.md`.** It defines the required three-part intro structure and the components used.

**Required intro order — every informational article opens with these three elements:**
1. `<QuickAnswer>` card — direct answer to the headline question, 2–3 sentences, rendered as a styled card (`src/components/content/QuickAnswer.astro`, prop: `answer`)
2. Hook paragraph — a scenario the reader has lived, paid off with what the article delivers
3. Fascination bullets — "By the end of this page you'll know:" followed by 4–6 Gary Halbert/Makepeace-style bullets that tease specific insights without giving them away

**The rule that gets broken most:** fascination bullets must be specific. "The one difference most people miss (and it's not the price)" creates an itch. "How to choose the right tool" does not.

## Routing

| Task | Go to | Read |
|------|-------|------|
| Research a wine topic or region | `/research/` | `CONTEXT.md` |
| Find keywords or analyze competitors | `/research/` | `CONTEXT.md` |
| Write or edit an article | `/content/` | `docs/voice-guide.md` → `CONTEXT.md` → `workflows/CONTEXT.md` |
| Check voice/style guidelines | `/content/` | `docs/voice-guide.md` |
| Optimize content for SEO | `/seo/` | `CONTEXT.md` |
| Run an SEO audit | `/seo/` | `CONTEXT.md` |
| Build site pages or components | `/src/` | Astro docs |
| Build a `best-wines/*` listicle page | `/src/content/articles/best-wines/` | `content/docs/voice-guide.md` → `content/docs/listicle-template.md` |
| Write Claire Bennett E-E-A-T content (byline blurbs, "About" boxes, first-person authority pull-quotes) | `/content/` | `content/docs/author-bio.md` — **only use facts from this file; never invent credentials** |

## Cross-Workspace Flow

```
research/ → content/ → seo/
  (topics, keywords)  (briefs → drafts → final)  (optimize for search)
```

## Naming Conventions

| Content Type | Pattern | Example |
|-------------|---------|---------|
| Research brief | `[topic]-research.md` | `bordeaux-wines-research.md` |
| Content brief | `[topic]_brief.md` | `bordeaux-wines_brief.md` |
| Article draft | `[topic]_draft.mdx` | `bordeaux-wines_draft.mdx` |
| SEO audit | `[topic]-audit.md` | `bordeaux-wines-audit.md` |

**Statuses:** `brief` (in `01-briefs/`) → `draft: true` (in `02-drafts/`) → `draft: false` (in `02-drafts/`) → deployed (in `src/`). No separate review/final files for new articles.
