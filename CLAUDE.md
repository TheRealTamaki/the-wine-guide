# The Wine Guide

Wine education blog and affiliate site. Informative content about wine regions, grape varieties, tasting guides, and buying recommendations for everyday wine enthusiasts.

<!-- This file is THE MAP. Loaded in every conversation — keep it tight.
     For detailed instructions → each workspace's CONTEXT.md.
     For background material → each workspace's REFERENCES.md. -->

## Tech Stack

- **Framework:** Astro (static site, minimal template)
- **Language:** TypeScript (strictest)
- **Package manager:** npm
- **Commands:** `npm run dev` (dev server) · `npm run build` (production) · `npm run preview` (preview build)

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
├── content/                         ← Article pipeline: brief → draft → review → final
│   ├── CONTEXT.md
│   ├── REFERENCES.md
│   ├── workflows/CONTEXT.md         ← Pipeline stage routing
│   ├── docs/                        ← Voice guide, article templates
│   ├── 01-briefs/                   ← Content briefs
│   ├── 02-drafts/                   ← First drafts
│   ├── 03-review/                   ← Under review
│   └── 04-final/                    ← Ready to publish
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

## Brand Voice (MANDATORY)

**Before writing ANY content** (articles, page copy, headlines, CTAs, descriptions, emails — anything reader-facing), you MUST read `content/docs/voice-guide.md` first. No exceptions. This applies to drafts, rewrites, and edits alike.

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
| Article draft | `[topic]_draft.md` | `bordeaux-wines_draft.md` |
| Review stage | `[topic]_review.md` | `bordeaux-wines_review.md` |
| Final article | `[topic]_final.md` | `bordeaux-wines_final.md` |
| SEO audit | `[topic]-audit.md` | `bordeaux-wines-audit.md` |

**Statuses:** `brief` → `draft` → `review` → `final`
