# Listicle Template — Best Wines Pages

**MANDATORY: Read this before building ANY `best-wines/*` listicle page.**

The reference page is `http://localhost:port/best-wines/best-red-wine-under-20/`. Every new listicle must match its structure, not just its content.

---

## Pre-flight checklist (in order, no skipping)

1. Read `content/docs/voice-guide.md`. No writing any reader-facing string without doing this first.
2. Research 6–8 wines on Wine.com / Amazon via Chrome browser. Capture: name, URL, product ID, image URL, region, grape, critic scores, price, customer rating.
3. Run NeuronWriter `/list-queries` → `/get-query` for target keyword. Pull basic, extended, and entity term lists plus PAA questions.
4. Write the MDX following the component order below.
5. Add sidebar TopPicks data (see "Required file touches" below). Forgetting this leaves the sidebar empty on the live page.
6. Bash grep loop for all three NeuronWriter term lists. Loop until zero missing.
7. `npm run build` clean.

---

## Component order (strict)

Every listicle `.mdx` file must follow this order:

1. **Intro paragraphs** (2–3 short paragraphs, voice-guide compliant)
2. **`<TopPicksInline />`** — top 3 picks with rank, image, score, critic, region, grape, pairings
3. **`<WineTip>` #1 — PRICING DISCLAIMER** (always, never tasting advice)
   - Template: "Prices on Wine.com vary by state and change frequently, especially for bottles that are on sale. Click through to see your current price before buying."
4. **Wine listings 1–N**, each with its own `<AffiliateCTA />`
5. **`<WineTip>` #2 — Slow cooker / tips-for-making content** (practical usage advice)
6. **`<WineQuiz />`** — props-based, passes `wines` array and `questions` array (3 questions: food, occasion, style)
7. **`<MethodologyBox />`** — goes UNDER the quiz, never above the wine listings. Has `eyebrow`, `title`, `intro`, `criteria[]`
8. `---` horizontal rule
9. **`## Frequently Asked Questions`** with 3–4 H3 answers

Do not invent other orders. Do not move the MethodologyBox above the wines.

**FAQ heading naming matters.** The TOC auto-excludes the FAQ section and its question H3s by matching the H2 text against `frequently asked questions` or `faqs?`. Always use one of those exact phrasings for the FAQ heading. Renaming it to "Common Questions" or "Q&A" will make every FAQ question show up in the TOC.

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
```

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

## NeuronWriter integration

- Project ID for `bestwineguides.com`: `fdfaf6451d9d7239`. Search engine: `google.com`.
- Query IDs are reusable. Check `/list-queries` first before paying for a new one.
- Don't leave any term at zero. Target 0 missing across basic + extended + entity lists.
