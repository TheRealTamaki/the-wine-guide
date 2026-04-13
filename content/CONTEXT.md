# Content Workspace

Last updated: 2026-04-13

## What This Workspace Is

Article creation pipeline for wine education content. Upstream: research briefs from `/research/topics/`. Downstream: final articles go to `/seo/` for optimization, then to `/src/` for publishing.

---

## What to Load

| Task | Load These | Skip These |
|------|-----------|------------|
| Create a content brief | Research brief from `/research/topics/` | `docs/voice-guide.md`, `03-review/`, `04-final/` |
| Write a first draft | Brief from `01-briefs/`, `docs/voice-guide.md`, `REFERENCES.md` | `03-review/`, `04-final/` |
| Review/edit a draft | Draft from `02-drafts/`, `docs/voice-guide.md` | `01-briefs/` (already incorporated) |
| Finalize an article | Reviewed article from `03-review/` | All other stages |

---

## Folder Structure

```
content/
├── CONTEXT.md          ← You are here
├── REFERENCES.md       ← Article examples, structure templates
├── workflows/
│   └── CONTEXT.md      ← Pipeline stage routing (brief → draft → review → final)
├── docs/
│   └── voice-guide.md  ← Tone, style, and voice rules
├── 01-briefs/          ← Content briefs ([topic]_brief.md)
├── 02-drafts/          ← First drafts ([topic]_draft.md)
├── 03-review/          ← Under review ([topic]_review.md)
└── 04-final/           ← Ready to publish ([topic]_final.md)
```

---

## The Process

See `workflows/CONTEXT.md` for the stage-by-stage pipeline.

An article becomes `review` when the first draft is complete and matches the brief. It becomes `final` when voice/style is confirmed and all facts are verified.

---

## Skills & Tools for This Workspace

| Skill / Tool | When to Use | How |
|-------------|-------------|-----|
| `/humanizer` | **Before any draft moves to `03-review/`.** Removes AI writing patterns. | Run on every draft before review |
| `/pexels-images` | **When a draft needs images.** Find royalty-free wine photography. | `/pexels-images [wine topic]` |
| `/info-gain` | **When a draft feels thin.** Add unique stats or angles mid-write. | `/info-gain [specific angle]` |

### Skills That Could Plug In Here (Not Configured)

- **Grammarly/language tool** — Final proofread before `04-final/`
- **Readability scorer** — Check reading level targets

---

## What NOT to Do

- **Don't skip the brief stage** — Drafts without briefs lack focus and keyword targeting
- **Don't publish without `/humanizer`** — Every draft must be de-AI'd before review
- **Don't load SEO workspace docs here** — SEO optimization is a separate downstream step
- **Don't write directly into `04-final/`** — Everything flows through the pipeline stages
