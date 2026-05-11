# verify-winecom-wines

**Scope:** Local to The Wine Guide. Run at the end of every listicle draft before it moves to review. Also available for retroactive audits of shipped listicles suspected of containing fabricated products.

**Why this exists:** On 2026-04-18, the `best-organic-wines` article shipped with 7 of 12 wine products fabricated (product IDs that didn't exist on Wine.com, image IDs that returned 404s). Image breakage was the visible symptom; hallucinated URLs were the root cause. This skill is the enforcement layer that prevents recurrence.

---

## When to run this skill

**Mandatory:**
- End of draft stage for every listicle that uses Wine.com AffiliateCTAs. No draft hands off to review until this skill passes.

**Recommended:**
- Retroactive audit of any shipped listicle where the image quality or customer reviews look suspicious.
- After any major edit to an existing listicle that changes the wine list.

**Not needed for:**
- Amazon-only listicles (wine tools category). Amazon product URLs follow different rules and don't hit this failure mode.
- Non-listicle pages (pairing guides, TOFU educational, grape pages).

---

## What to verify for each AffiliateCTA

For every `<AffiliateCTA href="..." image="..." />` in the draft, confirm:

1. **Product URL resolves to a real product page.** Load the `href` in Claude in Chrome. A real page has an `<h1>` matching the wine name and the title `"[Wine Name] | Wine.com"`. A fake product redirects to `https://www.wine.com/product/{id}` with an empty title `"| Wine.com"` and no `<h1>`.
2. **Image Cloudinary ID matches.** The `image=` prop points to `https://assets.wine.com/winecom/image/upload/.../fl_progressive/XXX.jpg` — the `XXX` portion must equal the first `assets.wine.com` image on the live product page.
3. **Critic scores on page roughly align with the MDX.** If the MDX claims three critics at 95+, at least two of those scores should be visible on Wine.com's page (either in the score display or review text). Not a strict match — critic lists can differ — but wildly invented scores (96/96/95 combinations for obscure wines) are a red flag.

---

## Execution

### Step 1 — Extract the list from the draft

Read the draft MDX file and pull every `href` and `image` attribute from `<AffiliateCTA>` blocks, plus the three sidebar entries from `topPicksData` in `src/pages/best-wines/[...slug].astro` for the current slug.

Python pattern:

```python
import re
from pathlib import Path

draft_path = Path(r"C:\Users\Jade\Desktop\Claude B\Wineology\content\02-drafts\{slug}_draft.mdx")
text = draft_path.read_text(encoding='utf-8')
hrefs = re.findall(r'href="(https://www\.wine\.com/product/[^"]+)"', text)
images = re.findall(r'image="(https://assets\.wine\.com/winecom/image/upload/[^"]+)"', text)
labels = re.findall(r'label="([^"]+)"', text)
```

### Step 2 — Verify each URL in Claude in Chrome

Get an MCP tab (`mcp__Claude_in_Chrome__tabs_context_mcp` with `createIfEmpty: true`). Then for each URL, navigate + run JavaScript to extract the signal:

```javascript
// Paste this after navigating to the product URL
JSON.stringify({
  title: document.title,
  h1: document.querySelector('h1')?.innerText || 'no h1',
  finalUrl: location.href,
  firstImage: [...document.querySelectorAll('img')]
    .filter(i => i.src.includes('assets.wine.com'))[0]?.src || ''
});
```

**Fast path for bulk checks** — instead of navigating one-by-one, run a single JavaScript snippet that fetches all URLs in parallel:

```javascript
const urls = [
  ['1-wine-name', 'https://www.wine.com/product/...'],
  ['2-wine-name', 'https://www.wine.com/product/...'],
  // etc
];
Promise.all(urls.map(async ([name, url]) => {
  const r = await fetch(url, { redirect: 'follow' });
  const text = await r.text();
  return {
    name,
    finalUrl: r.url,
    title: text.match(/<title>(.*?)<\/title>/)?.[1] || '',
    // A fake product redirects to https://www.wine.com/product/{id} (no slug)
    // AND has an empty " | Wine.com" title
    fake: !/\/product\/[a-z]/.test(r.url) || /^\s*\|\s*Wine\.com\s*$/.test(text.match(/<title>(.*?)<\/title>/)?.[1] || '')
  };
})).then(r => JSON.stringify(r, null, 2));
```

For any URL flagged `fake: true`, the product does not exist. For URLs that pass, navigate individually to grab the Cloudinary image ID and compare against the MDX.

### Step 3 — Produce the report

For each wine, output a row:

| # | Wine name | URL status | Image ID status | Action |
|---|-----------|-----------|----------------|--------|
| 1 | Clos Henri Otira SB 2024 | ❌ product doesn't exist | n/a | REPLACE |
| 2 | Villa a Sesta Chianti Classico 2019 | ✓ | ✓ matches | keep |
| 3 | Miraval Rosé 2024 | ✓ | ✓ matches | keep |

### Step 4 — Fix or redo

- **All green:** draft passes, proceed to review.
- **One or two failures:** replace each failing wine with a verified real wine from Wine.com's organic (or relevant category) search. Do not patch the image only; the wine itself is wrong. Update the MDX, re-run this skill until clean.
- **Three or more failures:** the draft is structurally unreliable. Flag to Jade; re-do the wine research from scratch against a live Wine.com browser session.

---

## Replacement wine sourcing

When a wine fails verification, find a replacement that:

1. Matches the style slot the original filled (a failed Sauvignon Blanc is replaced with another Sauvignon Blanc, not a Cabernet)
2. Comes from a real Wine.com search — navigate to https://www.wine.com, search the category keyword (`organic sauvignon blanc`, `organic pinot noir`, etc.), and pick a real product
3. Hits the same price band as the listicle's documented range
4. Has visible critic scores or customer ratings on the product page — never invent scores

Capture the real product URL, the real Cloudinary image ID, and the real critic scores exactly as they appear on the page.

---

## Key failure modes this skill catches

| Failure mode | How it shows up | What the skill sees |
|---|---|---|
| Hallucinated product ID | Image 404, page redirects | `fake: true` in the fetch check |
| Wrong product ID (right slug, wrong wine) | Page loads but shows a different wine | `h1` doesn't match `label` in MDX |
| Correct URL, fabricated image ID | Page loads correctly, image still broken | `firstImage` Cloudinary ID ≠ MDX `image=` ID |
| Invented critic scores | Page loads, image works, but scores don't exist | Scores on page don't match `scores={[...]}` |

---

## Output

The skill returns a pass/fail verdict plus the report table. On pass, proceed to review. On fail, rework before moving on. Flag to Jade if 3+ wines fail, since that indicates a wine-research failure, not a patch opportunity.
