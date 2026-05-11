# Listicle Template — Best Wines Pages

**MANDATORY: Read this before building ANY `best-wines/*` listicle page.**

The reference page is `http://localhost:port/best-wines/best-red-wine-under-20/`. Every new listicle must match its structure, not just its content.

> **SEO TOOL: `beuron-seo`.** Wherever this doc says "NeuronWriter," read it as Beuron. The `neuronwriter-seo` skill is no longer used on this site (BOFU or MOFU). The Stage 1 brief, Stage 2 absorption-while-writing, and Stage 3 single gap sweep workflow all still apply — just sourced from Beuron's scored term packs at `research/competitor-data/[keyword]/scored_terms.json` instead of NeuronWriter queries. Re-use existing scored term packs whenever they exist; re-running Beuron costs Firecrawl credits.

---

## Umbrella pages vs category pages

Not every listicle needs fresh wine research. When the target page is an **umbrella** or **parent category** page (e.g. `best-wine-for-beginners` spans reds, whites, rosé, and sparkling), it's correct and efficient to pull the top bottle from each child category page rather than research new wines.

The umbrella's value is curation across categories, not novel discovery. Readers who land on `best-wine-for-beginners` want one confident recommendation per style; they're not expecting eight never-before-seen wines. Pull from sibling guides (`best-red-wines-for-beginners`, `best-white-wines-for-beginners`) and reframe the wine descriptions for the umbrella's angle.

This applies to any `best-wines/*` umbrella: `best-wine-for-beginners`, `best-wine-for-cooking`, `best-sweet-wines`, etc. For narrow category pages (`best-prosecco`, `best-port-wine`), fresh research is still required.

---

## The listicle pipeline (4 stages, not 6)

**Old pipeline was 6 stages with file-forward ceremony that added zero value** (draft/review/final were byte-identical on most shipped articles). This is the current 4-stage pipeline:

```
01-briefs/[topic]_brief.md       (plan + NeuronWriter terms pulled upfront)
   ↓
02-drafts/[topic]_draft.mdx      (research + write + polish, all in place)
   ↓ deploy-listicle.mjs
src/content/articles/best-wines/[slug].mdx
```

**Only two working files per article: the brief and the draft.** `03-review/`, `04-final/`, and `seo/optimized/` folders are retained for archival of already-shipped articles; new articles skip them entirely. The draft file IS the review file IS the final file. Status is tracked via `draft: true/false` in frontmatter, not folder location.

### Stage 1: Brief → `content/01-briefs/[topic]_brief.md`

**Brief cap: ~500 words / ~3KB.** A brief is a plan, not a draft. If it's larger than the voice guide, you've written the article in the brief. Older briefs over 20KB are outliers, not the target.

Before any research or writing:

1. Pick the target keyword from `wine-site-seo-keywords.xlsx` (BOFU Priority 1 first).
2. Read `content/docs/voice-guide.md`. No reader-facing string gets written without this.
3. **Run SERP analysis.** Pull the top 5–10 ranking pages for the target keyword (`/serp-scraper` or manual). Record: wine count in each title, unique features (comparison tables, graphs, interactive tools), structural choices. This sets the wine count and surfaces features worth adding.
4. **Pull NeuronWriter terms upfront.** Run `/list-queries` then `/get-query` for the target keyword at brief time, not at the end. Save the basic + extended + entity term lists + PAA questions into the brief so the draft writer has them open while writing. This is the single biggest change from the old pipeline — eliminates the write-then-gap-patch loop.
5. Write the brief. It must include:
   - Target keyword(s) and search intent
   - SERP analysis summary — top 5 competitor wine counts, median, notable features
   - Proposed wine lineup count (SERP-driven, not a fixed default)
   - One novel feature competitors lack
   - NeuronWriter query ID + full term lists (basic, extended, entity, PAA)
   - Proposed H2 structure matching the strict component order below
   - Word count target
   - Affiliate approach notes

**Wine count rule:** Actual count is SERP-driven. Some keywords need 5, some need 15, some need 30. Never default to 8 without checking the SERP.

### Stage 2: Research + Draft → `content/02-drafts/[topic]_draft.mdx`

1. **Research wines in parallel — 4 agents, 4 Chrome tabs, one variety each.** See "Parallel wine research" below. Each agent returns 5–10 verified candidates for its variety with URL, price, image ID, and scores. Iris compiles the combined pool into the final lineup. Never serial.
2. **Write the full MDX draft with the NeuronWriter term lists open.** Don't write voice-first-then-patch. Write voice-first *with awareness* of which terms should naturally appear. Most basic + extended terms will land organically when they're sitting in front of you while writing FAQ answers, wine descriptions, and secondary sections.
3. Draft lives in `02-drafts/` as a `.mdx` file so components render correctly when previewed. **Frontmatter `draft: true` while in progress.**
4. **Verify wine.com URLs inline during research** (see guardrails under "Parallel wine research"). No separate Stage 2.5 re-sweep — if research was clean, there's nothing to re-verify.

#### Parallel wine research — the default approach

**Spawn 4 agents, each with its own Chrome tab, each assigned one sub-category.** They browse wine.com concurrently and each returns 5–10 verified bottles. Iris picks the final 6–10 from the combined pool.

**How to split the 4 agents:**

- **Generic reds listicle** (`best-cheap-red-wine`, `best-wines-under-20`): split by grape — Cabernet Sauvignon, Merlot, Pinot Noir, Malbec (or Syrah, depending on SERP).
- **Generic whites listicle** (`best-cheap-white-wine`, `best-crisp-white-wines`): split by grape — Sauvignon Blanc, Pinot Grigio, Chardonnay, Riesling.
- **Single-variety listicle** (`best-malbec`, `best-pinot-noir`): split by region — Argentina, Chile, California, France/Old World.
- **Style-narrow listicle** (`best-sweet-red-wine`, `best-full-bodied-red-wines`): split by sub-style — for sweet reds: Port, Lambrusco, sweet Zinfandel, Brachetto d'Acqui.

Whatever the natural sub-categories are on the SERP, assign one agent per category.

**Each agent returns the same contract:**

- Product name (exact, including vintage)
- Wine.com product URL (verified live, not "Sold Out")
- Current price (via the `.productPrice_price-saleWhole` / `.productPrice_price-regWhole` selectors — **never** regex on innerText)
- Cloudinary image ID (the ~20-char alphanumeric string before `.jpg` in `assets.wine.com` URLs)
- Critic scores + critic names
- Customer rating + review count
- Region / appellation

**Why parallel with Chrome beats a search API:** a search-API approach (Brave, Firecrawl) needs multiple queries per wine just to find candidates, and can't see stock status, ratings, or the real live product. An agent browsing wine.com sees everything at once and makes selections the way a human researcher would — in one session, with full context.

**Why Chrome tabs work in parallel:** each agent creates its own tab via `tabs_create_mcp`, works in that tab's context, and targets its tab ID on every `javascript_tool` call. Tabs don't share DOM state, so agents don't collide.

**Guardrails:**

- Every agent runs the `.claude/skills/verify-winecom-wines.md` checks inline before returning. No "probably live" bottles. If a wine fails verification, the agent picks a replacement from the same variety before returning.
- Iris never accepts a candidate with `PENDING_VERIFICATION` in any field. If a field is missing, bounce it back to the owning agent before finalising the lineup.

#### Wine.com research notes

Wine.com's URL-based price filters (`?filter=price%3E20%7C%3C30`) **do not work**. Don't waste tool calls trying them. Navigate to `/list/wine/{category}/{id}?sort=popularity` and filter client-side in JavaScript.

Category IDs that matter:
- Red wine: `7155-124`
- White wine: `7155-125`
- Rosé: `7155-126` (note: `7155-127` is sake, not rosé)
- Sparkling & Champagne: `7155-123`

To extract the **actual bottle price** from a listing card, use the DOM selectors, not regex on innerText:
- Sale price: `.productPrice_price-saleWhole` + `.productPrice_price-saleFractional`
- Non-sale price: `.productPrice_price-regWhole` + `.productPrice_price-regFractional`

Regex-matching `$XX.XX` against `innerText` picks up the "Save $27.01" discount amount instead of the actual bottle price. This is the single biggest research trap on this site.

Card structure: `li.listGridLayout_listItem`. Each contains:
- `a.listGridItemName` (wine name + product URL)
- `img` (image src — the Cloudinary ID is after `fl_progressive/` in the URL)
- Critic scores appear as score lines in `innerText`
- Customer ratings: regex `/(\d\.\d)\s+[A-Z][a-z]+\s*\((\d+)\)/` extracts rating + review count

### Stage 3: Polish (inline on the draft)

All polish happens on the same `02-drafts/[topic]_draft.mdx` file. No file-forwarding. No copying to `03-review/` or `04-final/`.

1. Run `/humanizer` on the draft. **Mandatory.** Output overwrites the draft.
2. Fact-check wines, producers, regions, vintage claims.
3. Voice guide compliance sweep (no em-dashes, no "not X, just Y" patterns, contractions, second person, specific over vague).
4. **Single SEO gap sweep — no loop.** Because NeuronWriter terms were pulled at Stage 1, most terms absorbed while writing. Run the gap check once:
   - Bash grep the draft for all three NeuronWriter term lists
   - Any remaining misses get placed via absorption zones (FAQ answers first, wine descriptions second, secondary sections third — never the intro)
   - Stop after one pass. If you're still missing 20+ extended terms, Stage 2 was written with the term list closed. Re-read the term list and add new FAQ questions to cover the remaining gap. Do not run multiple gap-analysis iterations.
5. **Intro re-read.** After gap patching, re-read the first three paragraphs against the voice guide. Keyword passes degrade the intro most. Rewrite any sentence that reads process-first, clinical, or stuffed.
6. **Flip `draft: false` in frontmatter when done.** That's the signal to deploy.

**Acceptance rules:** 2–5 obscure entity terms missing after exhausting absorption zones = fine. 20+ extended terms missing = restructure, don't keep patching.

#### Em-dash removal: never global-replace

When stripping em-dashes, **never** do a blanket `.replace('—', '.')` across the whole MDX file. A follow-up `.replace('..', '.')` cleanup (a natural instinct) will turn `../../../components` into `./././components` in the component imports and break the build. Fix only em-dashes, and do it line-by-line, skipping any line that contains `import `:

```python
lines = content.split('\n')
for i, line in enumerate(lines):
    if 'import ' in line and 'components' in line: continue
    lines[i] = line.replace(' — ', '. ').replace('—', '.')
content = '\n'.join(lines)
```

#### Voice-banned NeuronWriter terms to always skip

NeuronWriter extended term lists sometimes include phrases that are explicitly banned by the voice guide. **Always skip these during gap patching, even if they're flagged as missing. Take the score hit.** Known offenders from actual NW returns on this project:

- `world of wine`
- `wine journey` / `wine is a journey`
- Anything matching the banned phrases in `content/docs/voice-guide.md` (e.g. "let's dive in", "without further ado", "at the end of the day")

When the gap analysis reports these as missing, record them as deliberately skipped rather than adding them.

#### Accent normalization for gap analysis

NeuronWriter returns some terms without accents (e.g. `gewurztraminer`, `mourvedre`, `rhone`, `rose wine`) while voice-compliant content uses the accented forms (`Gewürztraminer`, `Mourvèdre`, `Rhône`, `rosé wine`). A naive Python `lower() in content.lower()` check will flag these as missing even when the accented version is present.

Two fixes:

1. **Normalize both sides before comparing.** Use `unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode()` on both the term and the content before the substring check. This makes accented and unaccented forms match.
2. **OR add the unaccented variant explicitly once** in a low-visibility spot: "Mourvèdre (often written Mourvedre)", "Rhône (Rhone Valley)". One mention is enough to satisfy the substring check without cluttering prose.

Option 1 is cleaner for the gap script. Option 2 is useful when you want the term to actually resolve in search regardless of how the user types it.

### Stage 4: Deploy (scripted)

Run the deploy script. It does all the ceremony that used to be manual.

```
node scripts/deploy-listicle.mjs [slug]
```

The script:

1. Reads `content/02-drafts/[slug]_draft.mdx`
2. Validates: `draft: false`, `title ≤ 60 chars`, `description ≤ 155 chars`, zero em-dashes in body (skipping `import` lines), required frontmatter fields present
3. Copies the draft to `src/content/articles/best-wines/[slug].mdx` (stripping the `_draft` suffix)
4. Runs `npm run build`
5. Greps `dist/best-wines/[slug]/index.html` for the slug and the top picks to confirm render
6. Reports pass/fail with a single summary

**Manual step still required (for now):** add the sidebar entry in `src/pages/best-wines/[...slug].astro` → `topPicksData` map. See "Required file touches" below. The script warns if the entry is missing but doesn't auto-insert yet.

**Verify via built HTML, not dev server.** Astro's dev server throws `UnknownContentCollectionError` on newly-added MDX files even when production builds pass (stale cache, not a real error). The script relies on `dist/` for verification for this reason.

Present to user for approval after a clean deploy. Do not start the next listicle until approved.

---

## Component order (strict)

Every listicle `.mdx` file must follow this order:

1. **Intro paragraphs** (2–3 short paragraphs, voice-guide compliant)
2. **`<TopPicksInline />`** — top 3 picks with rank, image, score, critic, region, grape, pairings
3. **`<WineTip>` #1 — PRICING DISCLAIMER** (always, never tasting advice)
   - Template: "Prices on Wine.com vary by state and change frequently, especially for bottles that are on sale. Click through to see your current price before buying."
4. **Wine listings 1–N**, each with its own `<WineTraits />` (immediately after H3) and `<AffiliateCTA />` (after descriptive paragraphs)
5. **`<WineTip>` #2 — Slow cooker / tips-for-making content** (practical usage advice)
6. **`<WineQuiz />`** — props-based, passes `wines` array and `questions` array (3 questions: food, occasion, style)
7. **`<MethodologyBox />`** — goes UNDER the quiz, never above the wine listings. Has `eyebrow`, `title`, `intro`, `criteria[]`
8. `---` horizontal rule
9. **`## Frequently Asked Questions`** with 3–4 H3 answers

Do not invent other orders. Do not move the MethodologyBox above the wines.

**FAQ heading naming matters.** The TOC auto-excludes the FAQ section and its question H3s by matching the H2 text against `frequently asked questions` or `faqs?`. Always use one of those exact phrasings for the FAQ heading. Renaming it to "Common Questions" or "Q&A" will make every FAQ question show up in the TOC.

**Conventional H2 wording for the WineQuiz and MethodologyBox sections** (audited across 32 shipped articles, 2026-04-26):

- WineQuiz H2 (above the component): `## Find Your Wine Match` is the default. For topic-themed articles, `## Find Your [Occasion/Style] Wine` is also acceptable (`## Find Your Wedding Wine`, `## Find Your Mother's Day Wine`). Used in 26+/32 articles.
- MethodologyBox H2: `## How We Chose These Wines` is the default, used in 28/32 articles. Topic variants like `## How We Chose These Housewarming Wines` are acceptable.

These are conventions, not hard rules — but match them unless there's a specific reason to deviate. Consistent headings make the catalog scan as a unified site.

---

## Affiliate network mentions

**Never name the affiliate retailer (Wine.com, Amazon, Vivino, etc.) in body prose, intro paragraphs, wine descriptions, WineTip callouts, MethodologyBox criteria, or FAQ answers.** Refer to it generically: "the retailer," "a major retailer's Top 100 of 2025," "verified customer ratings," "click through to see the current price."

The retailer name belongs only inside product cards: `AffiliateCTA` `store` and `description` props, the link URL, and structured data fields like `critic: "Wine.com"`. That's it.

When citing critic scores from Wine.com's reviewer (Wilfred Wong), name the reviewer without the retailer: "Wilfred Wong scored it 92," not "Wilfred Wong of Wine.com."

---

## Required imports (top of MDX)

```js
import AffiliateCTA from '../../../components/content/AffiliateCTA.astro';
import WineTip from '../../../components/content/WineTip.astro';
import TopPicksInline from '../../../components/content/TopPicksInline.astro';
import MethodologyBox from '../../../components/content/MethodologyBox.astro';
import WineQuiz from '../../../components/content/WineQuiz.astro';
import WineTraits from '../../../components/ui/WineTraits.astro';
```

Note: `WineTraits` is in `components/ui/`, NOT `components/content/` like the others. Easy to mis-import.

---

## WineTraits — required on every wine pick

Every wine listing (every H3 under "Best [style] for [topic]") MUST be immediately followed by a `<WineTraits />` block. No exceptions. The reference shipped articles (Christmas, Valentine's, Prosecco, Port, Cooking) all use it 14–18 times per article. Skipping it makes the article visibly inconsistent next to the rest of the catalog.

**Format:**

```jsx
### Wine Name Vintage

<WineTraits tannin={1} acidity={5} sweetness={1} alcohol={3} body={2} />

First descriptive paragraph...
```

**Rating scale (sommelier-style 1–5):**

| Trait | 1 | 3 | 5 |
|---|---|---|---|
| `tannin` | None (whites, sparkling, rosé) | Medium (Pinot Noir, Sangiovese) | Very high (young Cabernet, Nebbiolo, Tannat) |
| `acidity` | Soft (oaked Chardonnay, Amarone) | Medium (most reds) | High (Sauvignon Blanc, Champagne, Riesling) |
| `sweetness` | Bone dry (most table wine) | Off-dry (Riesling Kabinett, some rosé) | Sweet (Port, Moscato, Sauternes) |
| `alcohol` | Low (Moscato d'Asti ~5–7%) | Medium (12–13%) | High (Zinfandel, Amarone, Port ~15%+) |
| `body` | Light (Pinot Grigio, Beaujolais) | Medium (Chianti, Pinot Noir) | Full (Cabernet, Syrah, Malbec) |

All five props are required integers in `{1...5}`. Don't pass strings, don't omit any.

---

---

## Required file touches (not just the MDX)

For every new `best-wines/{slug}.mdx`, also update:

**`src/pages/best-wines/[...slug].astro`** → `topPicksData` map:

```ts
'{slug}': [
  { image: 'https://assets.wine.com/...jpg', href: 'https://www.wine.com/product/...', highlight: 'Best overall', rating: 4.2 },
  { image: '...', href: '...', highlight: 'Best ${secondary-category}', rating: 4.0 },
  { image: '...', href: '...', highlight: 'Best value', rating: 4.1 },
],
```

Without this entry, the sidebar TopPicks renders without images, links, highlights, or star ratings. The page will look broken next to the reference.

**TopPicksInline and WineQuiz scores for wines without critic scores:** Pass `score: 0` and `critic: ""`. The component hides stars and score labels automatically when score is 0 — no broken "0 pts" display. Use this for non-alcoholic wines, natural wine, and any category where professional critic scores aren't available.

---

## WineQuiz prop contract

The `questions` prop must use these exact field names (not `text`, not `options`):

```js
{
  key: 'food' | 'occasion' | 'style',
  label: 'Food' | 'Occasion' | 'Style',
  heading: 'The question shown to the user',
  answers: [{ value: 'slug', label: 'Display text' }]
}
```

Wine tag keys match the `key` field: `{ food: [...], occasion: [...], style: [...] }`. Scoring is food=3, occasion=2, style=2.

---

## Beuron SEO integration

- Beuron is the SEO term tool for every article on this site. NeuronWriter is not used.
- Term packs live at `research/competitor-data/[keyword]/scored_terms.json` and are reusable. Check that path before running a fresh Beuron pass — re-running triggers Firecrawl scrapes (paid credits).
- Don't leave high-importance terms at zero. Target full coverage of the high-score terms in the pack; accept some long-tail misses if they don't fit naturally.

> Historical note: the project ID `fdfaf6451d9d7239` (NeuronWriter, search engine `google.com`) is retained here for archival reference only. Do not use it.

### Balancing SEO coverage with brand voice

**The rule:** protect the intro, load the FAQ. Retrofitting keywords into existing sentences breaks the voice. Adding new sentences (or new FAQ questions) that happen to include the term is almost always cleaner.

**Absorption zones — use in this order:**

1. **FAQ answers** — highest capacity, lowest risk. Add new FAQ questions specifically to cover remaining gaps. Each answer can absorb 3–5 terms naturally because FAQs are meant to be informative.
2. **"More Worth Knowing" / secondary sections** — variety roundups, supplementary lists, and extra context sections tolerate more informational density. Paragraph cap still applies (see **Paragraph length — applies everywhere** section below).
3. **Wine description body copy** — flavour notes (`white peach`, `cranberry`) and region/grape terms belong here naturally. Good place for brand and producer entity terms.
4. **WineTip callouts** — practical tips sections tolerate process language (`fermentation`, `added sugar`, `dealcoholization process`).
5. **Intro paragraphs — last resort only.** If a term can't fit anywhere else, ask whether it's worth forcing at all. One stilted line in the intro costs more than 10 missing entity terms cost in NeuronWriter score.

**Workflow (matches the 4-stage pipeline):**

1. **Stage 1 (brief):** Pull NeuronWriter terms upfront. Sort them mentally into FAQ / wine descriptions / secondary sections / intro buckets.
2. **Stage 2 (draft):** Write voice-first *with the term list visible*. FAQ answers and wine descriptions naturally absorb 70-80% of the term list if you're aware of them while writing.
3. **Stage 3 (polish):** Run the gap check ONCE. Sort any remaining misses into FAQ / wine descriptions / secondary sections / doesn't-fit. Add new FAQ questions for group 1, expand descriptions for group 2, add a paragraph to secondary sections for group 3. **Skip group 4 entirely.** Accept 2–5 missing obscure entity terms rather than contaminate the intro. No iteration — one pass, done.

**Hard rule:** if adding a term requires changing an existing sentence, write a new sentence instead.

### Paragraph length — applies everywhere, not just absorption zones

**Hard cap: 4 sentences max, ~80 words max, per paragraph. Every reader-facing paragraph in the listicle.** This includes:

- Wine descriptions under each H3
- FAQ answers
- Educational primer sections (Prosecco 101 / Moscato vs Moscato d'Asti / Sweet wine label-reading / "How to serve" / "How it's made")
- "More Worth Knowing" secondary sections
- Intro paragraphs
- WineTip callouts
- MethodologyBox criteria descriptions

**When splitting: preserve the copy verbatim.** Split at natural theme transitions (new region, new sub-style, new idea, new pairing group). Do not rewrite sentences, re-order ideas, or trim words. The copy has already passed voice review and SEO absorption. The visual chunking is the only thing to change.

**Why this matters:** a dense section with 6 short paragraphs scans cleanly and rewards re-reading. A dense section with 2 wall-of-text paragraphs gets skipped, breaks the visual rhythm of the page, and reads as effortful regardless of how good the underlying prose is. This is the #1 retroactive fix across shipped pages — codified here so it's prevented at draft time.

**Enforce before deploy.** Before flipping `draft: false` in the draft's frontmatter, run the `paragraph-audit` skill against the draft MDX. Anything over the cap gets split in place. The deploy script (Stage 4) will reject the draft if em-dashes slip in, but it doesn't currently run the paragraph-audit itself — do that manually.

### WineTip blocks: cannot be split with internal blank lines

The `paragraph-audit` script treats the entire `<WineTip>` body as a single paragraph regardless of internal blank lines (every line inside an audited JSX component gets `prose` state — blank lines don't reset paragraph grouping). So:

- A WineTip with 2+2 sentences across an internal blank line still audits as 4 sentences.
- A WineTip with 3+3 sentences across an internal blank line audits as 6 sentences and FAILS.

**The cap (≤4 sentences, ≤80 words) applies to the WineTip body as a whole, not per internal paragraph.** If you need more content, split into two adjacent `<WineTip>` components, each with its own body under the cap. Discovered 2026-04-26 during the parallel batch test, after a sub-agent self-reported PASS on a draft the audit actually rejected.
