# parallel-listicle-batch

**Wineology-specific. Do not use this skill outside the Wineology project.**

Builds 2-5 `best-wines/*` listicle articles in parallel using Sonnet sub-agents. Validated
2026-04-26: 3 articles at production quality in ~55-60 minutes wall time vs ~3 hours serial.

---

## When to invoke

- Jade gives you 2-5 best-wines slugs to build in one session
- The build queue has a cluster of similar articles (occasion wines, seasonal guides)
- Jade says "let's batch these" or "knock out N articles today"

Do NOT use for:
- A single article (standard 4-stage pipeline is faster without dispatch overhead)
- Gift-guide, wine-tools, or compare pages (deploy script is hardcoded to best-wines/* only)
- More than 5 articles in one batch (socket failure risk multiplies above 5 concurrent agents)

---

## How to invoke

```
/parallel-listicle-batch
  slugs="best-wines-for-a-wedding,best-wines-for-mothers-day,best-housewarming-wines"
  topics="Wedding wine guide,Mother's Day wine guide,Housewarming wine guide"
  intent="Focus on crowd-safe picks for 100+ guests | Lean into self-gifting + treat angle | Affordable bottles under $30 that feel celebratory"
```

All three args are required. `intent` can be a pipe-separated list (one note per slug, in the same
order as `slugs`). If no intent notes exist, pass the SERP angle you'd use for each keyword.

---

## What it produces

For each article:
- `content/01-briefs/{slug}_brief.md` — plan with Beuron terms pulled upfront
- `content/02-drafts/{slug}_draft.mdx` — polished, audit-clean draft (draft: false)

After all agents return clean audits, the orchestrator:
- Adds N topPicksData entries to `src/pages/best-wines/[...slug].astro` in one edit
- Copies all drafts to `src/content/articles/best-wines/`
- Runs `npm run build`
- Confirms each page renders at the expected URL

---

## Skill files

| File | Purpose |
|------|---------|
| `SKILL.md` | Full orchestrator instructions — read when skill triggers |
| `dispatch-contract-template.md` | Per-agent brief template with {SLUG}/{TOPIC}/{INTENT} placeholders |
| `verification-script.sh` | Bash script sub-agents run and paste raw output from |
| `README.md` | This file |

---

## Known failure modes (and how they're prevented)

| Failure | Cause | Fix in this skill |
|---------|-------|-------------------|
| Sub-agent self-misreports PASS | Agent interprets audit output instead of pasting it | Contract requires raw bash output; orchestrator rejects interpretation |
| WineTraits missing on some picks | Component omission via convention drift | Explicit grep self-check counts H3s vs WineTraits blocks |
| Agent dies mid-run (FailedToOpenSocket) | API socket failure | Relaunch-by-slug: check for partial draft, resume if >0 bytes |
| Voice repetition across batch | Same template, similar topics | Side-by-side hook check before deploy |
| Deploy conflicts on [...slug].astro | N agents editing shared file | Agents forbidden from touching src/; orchestrator edits once |

---

## Performance baseline (2026-04-26)

- Articles: 3 (wedding, Mother's Day, housewarming)
- Wall time: ~55-60 min parallel vs ~3 hrs serial
- Quality: production-ready on first deploy, zero em-dashes, paragraph audit clean
- One agent had a FailedToOpenSocket mid-run and required relaunch

---

## Limitations

- deploy-listicle.mjs is hardcoded to best-wines/* only — manual cp + build required for other categories (or fix the script to accept a category arg)
- deploy-listicle.mjs has a Windows EINVAL spawn bug — use npm run build directly
- Agents pull Beuron term packs from `research/competitor-data/[keyword]/scored_terms.json` (re-using existing packs whenever possible). The `neuronwriter-seo` skill is NOT used on this site for any article type.
