# Content Workspace

Last updated: 2026-04-25

## What This Workspace Is

Article creation pipeline for wine education content. Upstream: research briefs from `/research/topics/`. Downstream: deployed articles go directly to `/src/` via `scripts/deploy-listicle.mjs`.

> **SEO tool for all article types: `beuron-seo`.** The `neuronwriter-seo` skill is NOT used on this site. Where this workspace's docs say "NeuronWriter terms," read it as Beuron — the workflow (pull at brief time → absorb while writing → one gap sweep) is identical, just sourced from Beuron scored term packs at `research/competitor-data/[keyword]/scored_terms.json`.

---

## What to Load

| Task | Load These | Skip These |
|------|-----------|------------|
| Create a content brief | Research brief from `/research/topics/`, NeuronWriter query for target keyword | Old `03-review/` and `04-final/` archives |
| Write a first draft | Brief from `01-briefs/` (with NW term list already pulled), `docs/voice-guide.md`, `docs/listicle-template.md` | Old `03-review/` and `04-final/` archives |
| Polish a draft | Draft from `02-drafts/`, `docs/voice-guide.md` | `01-briefs/` (already incorporated) |
| Deploy | Draft from `02-drafts/` with `draft: false` | — |

---

## Folder Structure

```
content/
├── CONTEXT.md          ← You are here
├── REFERENCES.md       ← Article examples, structure templates
├── workflows/
│   └── CONTEXT.md      ← Pipeline stage routing (4-stage)
├── docs/
│   ├── voice-guide.md  ← Tone, style, and voice rules
│   └── listicle-template.md  ← Full listicle pipeline spec
├── 01-briefs/          ← Content briefs ([topic]_brief.md) — includes NW terms
├── 02-drafts/          ← Working files ([topic]_draft.mdx) — polish in place
├── 03-review/          ← ARCHIVE ONLY (pre-2026-04-25 articles)
└── 04-final/           ← ARCHIVE ONLY (pre-2026-04-25 articles)
```

---

## The Process

See `workflows/CONTEXT.md` for the 4-stage pipeline.

Article state lives in the draft's frontmatter (`draft: true` = in progress, `draft: false` = ready to deploy). No separate review/final files. The same `.mdx` file in `02-drafts/` gets humanised, fact-checked, gap-patched, and marked ready — all in place.

---

## Skills & Tools for This Workspace

| Skill / Tool | When to Use | How |
|-------------|-------------|-----|
| `/humanizer` | **Before flipping `draft: false`.** Removes AI writing patterns. | Run on the draft in place |
| `paragraph-audit` | **Final gate before deploy.** Flags paragraphs over 4 sentences / 80 words. | Run on the draft in place |
| `/pexels-images` | **When a draft needs images.** Find royalty-free wine photography. | `/pexels-images [wine topic]` |
| `/info-gain` | **When a draft feels thin.** Add unique stats or angles mid-write. | `/info-gain [specific angle]` |
| `scripts/deploy-listicle.mjs` | **Deploy a ready draft** (`draft: false`). Validates + copies to src/ + builds + verifies. | `node scripts/deploy-listicle.mjs [slug]` |

---

## What NOT to Do

- **Don't skip the brief stage** — Drafts without briefs lack focus and keyword targeting
- **Don't publish without `/humanizer`** — Every draft must be de-AI'd before flipping `draft: false`
- **Don't copy drafts to `03-review/` or `04-final/`** — Those folders are archive-only. New articles stay in `02-drafts/` and flip `draft: false` when ready
- **Don't write directly into `src/content/articles/`** — Use the deploy script
- **Don't pull Beuron terms at the end** — Pull them at brief time (Stage 1), have them open while writing (Stage 2), one gap sweep at Stage 3. No iteration. (NeuronWriter is not used on this site for any article type.)
