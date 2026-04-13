# Research Workspace

Last updated: 2026-04-13

## What This Workspace Is

Topic research, keyword discovery, and competitor analysis for wine content. Upstream: SEO keyword data, content gaps. Downstream: content briefs feed into `/content/01-briefs/`.

---

## What to Load

| Task | Load These | Skip These |
|------|-----------|------------|
| Research a wine topic | `REFERENCES.md` (wine knowledge sources) | `competitors/` files |
| Find keywords | Nothing from docs — use `/info-gain` or `/dataforseo` | Everything else |
| Analyze competitor content | `REFERENCES.md` (competitor list) | `keywords/` files |
| Write a research brief | Relevant `topics/` file + `REFERENCES.md` | `competitors/` |

---

## Folder Structure

```
research/
├── CONTEXT.md          ← You are here
├── REFERENCES.md       ← Wine knowledge sources, competitor URLs
├── topics/             ← Research briefs and findings (topic-research.md)
├── keywords/           ← Keyword data exports and analysis
└── competitors/        ← Competitor content breakdowns
```

---

## The Process

1. **Identify topic** — From keyword gaps, trending wine topics, or seasonal relevance
2. **Research deeply** — Use `/info-gain`, `/reddit-research`, web search to gather unique angles, stats, forum insights
3. **Analyze competitors** — Check what's ranking, find content gaps and differentiation opportunities
4. **Write research brief** — Save as `[topic]-research.md` in `topics/` with key findings, angle, and target keywords
5. **Hand off** — Research brief becomes input for a content brief in `/content/01-briefs/`

---

## Skills & Tools for This Workspace

| Skill / Tool | When to Use | How |
|-------------|-------------|-----|
| `/info-gain` | **Starting research on any new topic.** Surfaces stats, forum insights, myths. | `/info-gain [wine topic]` — run before writing any brief |
| `/reddit-research` | **Need audience perspective on a wine topic.** Pain points, questions, preferences. | `/reddit-research [topic]` — check what real people ask about |
| `/dataforseo` | **Need keyword volume, difficulty, SERP data.** | `/dataforseo` — query search volume and competition |
| `/neuronwriter-seo` | **Need SERP-based term recommendations for a keyword.** | `/neuronwriter-seo [keyword]` — get terms to target |
| Web search | **Fact-checking wine regions, producers, vintages.** | Use for verifiable wine facts |

---

## What NOT to Do

- **Don't write full articles here** — This workspace produces research briefs, not content
- **Don't skip `/info-gain` for new topics** — Generic research produces generic content
- **Don't load content/ or seo/ docs** — Research is independent; handoff is deliberate
- **Don't guess wine facts** — Always verify regions, grape varieties, vintages, and producers
