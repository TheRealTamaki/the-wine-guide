# SEO Workspace

Last updated: 2026-04-13

## What This Workspace Is

On-page SEO optimization and content auditing. Upstream: final articles from `/content/04-final/`. Downstream: optimized content goes to `/src/` for site publishing.

---

## What to Load

| Task | Load These | Skip These |
|------|-----------|------------|
| Optimize an article for SEO | Final article from `/content/04-final/`, `REFERENCES.md` | `audits/` (unless re-optimizing) |
| Run a keyword audit | `REFERENCES.md`, keyword data from `/research/keywords/` | `optimized/` files |
| Audit existing pages | `REFERENCES.md`, `docs/seo-checklist.md` | `/content/` pipeline files |
| Check term coverage | Use `/neuronwriter-seo` or `/beuron-seo` directly | Everything — tool provides data |

---

## Folder Structure

```
seo/
├── CONTEXT.md          ← You are here
├── REFERENCES.md       ← SEO guidelines, target metrics
├── docs/
│   └── seo-checklist.md ← On-page SEO checklist
├── audits/             ← Page/site audit reports ([topic]-audit.md)
└── optimized/          ← SEO-optimized article versions ([topic]-seo.md)
```

---

## The Process

1. **Take final article** from `/content/04-final/`
2. **Run term analysis** — Use `/neuronwriter-seo` or `/beuron-seo` to get SERP-based term recommendations
3. **Optimize content** — Weave in missing terms naturally (don't keyword-stuff)
4. **Write meta tags** — Title tag, meta description, OG tags
5. **Save optimized version** to `optimized/` as `[topic]-seo.md`
6. **Run audit** if needed — Save to `audits/` as `[topic]-audit.md`

---

## Skills & Tools for This Workspace

| Skill / Tool | When to Use | How |
|-------------|-------------|-----|
| `/neuronwriter-seo` | **Main pages only** — Pillar pages, high-volume BOFU buying guides, high-priority content. Uses NeuronWriter API (paid credits). | `/neuronwriter-seo [target keyword]` |
| `/beuron-seo` | **All other pages** — Standard MOFU/TOFU content, lower-priority articles, grape/region pages. Self-hosted, no credit cost. | `/beuron-seo` with target keyword |
| `/dataforseo` | **Need search volume or SERP data for a keyword.** | `/dataforseo` — keyword research queries |
| `/serp-scraper` | **Need to analyze what's currently ranking.** | `/serp-scraper` — scrape top results as markdown |

### Which SEO Skill to Use (Decision Guide)

Use **`/neuronwriter-seo`** for:
- Pillar pages (wine-basics, types-of-wine, food-wine-pairing, grape-varieties, wine-regions, wine-buying-guide, wine-glossary)
- High-volume BOFU pages (best wines under $20, best wine subscription, best wine fridge, etc.)
- Any page with Est Vol 5K+ or Priority 1

Use **`/beuron-seo`** for:
- Standard grape variety pages, region guides, pairing pages
- Lower-priority BOFU pages (gift guides, seasonal, comparisons)
- TOFU how-to and educational content
- Everything else

### Skills That Could Plug In Here (Not Configured)

- **Schema markup generator** — Add structured data for wine reviews, recipes
- **Internal linking tool** — Suggest cross-links between articles

---

## What NOT to Do

- **Don't keyword-stuff** — Terms must read naturally; if it sounds forced, rewrite the sentence
- **Don't modify the article's voice** — SEO optimization preserves the writer's style
- **Don't skip term analysis** — Gut-feel optimization underperforms data-driven optimization
- **Don't load content pipeline files** — Work only with final articles from `04-final/`
