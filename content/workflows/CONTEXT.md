# Content — Pipeline

## What This Folder Is

4 stages, each in its own folder. An article enters as a brief and exits as a publish-ready piece.

```
01-briefs/  →  02-drafts/  →  03-review/  →  04-final/
  (plan)        (write)        (polish)       (ship)
```

---

## Agent Routing

| Your Task | Input | Also Load | Output | Skills at This Stage |
|-----------|-------|-----------|--------|---------------------|
| Brief → Draft | Brief from `01-briefs/` | `../docs/voice-guide.md`, `../REFERENCES.md` | Draft in `02-drafts/` | `/info-gain` if brief feels thin |
| Draft → Review | Draft from `02-drafts/` | `../docs/voice-guide.md` | Reviewed article in `03-review/` | `/humanizer` (mandatory) |
| Review → Final | Article from `03-review/` | Original brief (as acceptance criteria) | Final article in `04-final/` | — |

---

## Stage Details

### 01-briefs/ — The Plan

Content briefs created from research. Each brief defines the article's angle, target keywords, structure, and audience.

**What a brief includes:**
- Target keyword(s) and search intent
- Article angle / unique hook
- Suggested H2/H3 outline
- Word count target
- Affiliate opportunities (if applicable)

**What a brief does NOT include:**
- Full article text
- SEO meta tags (that's the SEO workspace)

**File pattern:** `[topic]_brief.md`

### 02-drafts/ — The Writing

First drafts written from the brief. Follow the voice guide. Focus on education and reader value.

**File pattern:** `[topic]_draft.md`

**Skills activate here:**
- `/info-gain` — If the brief's research feels thin, enrich with additional data points
- `/pexels-images` — Source wine imagery as you write

### 03-review/ — The Polish

Drafts that are complete and being reviewed for voice, accuracy, and readability.

**File pattern:** `[topic]_review.md`

**Skills activate here:**
- `/humanizer` — **Mandatory.** Run on every draft before it enters review
- Manual fact-check — Verify all wine regions, producers, vintage claims

### 04-final/ — The Deliverable

Publish-ready articles. Verified, voice-checked, de-AI'd. Ready to hand off to `/seo/` for optimization.

**File pattern:** `[topic]_final.md`

---

## Pipeline Rules

1. **Flow is forward.** Briefs → Drafts → Review → Final. No skipping stages.
2. **Each agent loads only what it needs.** See the routing table above.
3. **Changes propagate forward.** Changed brief → regenerate draft. Changed draft → re-review.
4. **The writer has creative freedom within the voice guide.** The brief defines the contract. The writer decides how to fulfill it.
5. **Nothing ships without `/humanizer`.** Every draft must pass through humanization before review.
