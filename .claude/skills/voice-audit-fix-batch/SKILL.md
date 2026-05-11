---
name: voice-audit-fix-batch
description: Audit Wineology articles for brand-voice violations (em-dashes, "not X, just Y" patterns, banned phrases) and dispatch parallel sub-agents to fix them while preserving SEO via grep-only term checks. Invoke whenever the user asks to "audit voice across the site", "find articles that don't follow the voice guide", "voice audit", "fix voice violations site-wide", "/voice-audit-fix-batch", or any time a voice-quality complaint lands on shipped pages. Wineology-only — do not use this skill in any other project. Triggers proactively when the user mentions cleaning up voice across multiple articles or after a voice-guide update that should backfill onto already-shipped content.
---

# Voice Audit + Fix Batch — Wineology

Wineology-specific. Built after a session that shipped 3 new articles, then needed a retroactive
voice sweep across 8 existing articles. The grep-then-dispatch pattern took ~10 minutes wall time
for 8 files vs the ~hour it would've taken serially. The painful failure mode that pattern caught:
two NeuronWriter credits leaked when sub-agents were given any latitude to call paid APIs. This
skill prevents that by hard-forbidding paid API calls inside dispatch contracts.

---

## When to use this skill

- User says "audit voice across the site" / "find articles violating voice guide" / "voice audit"
- A voice-guide rule was just changed and existing pages need backfill
- Jade flags a specific voice complaint on one or more shipped pages
- After a batch of new articles ships, as a retroactive QA pass

Skip this skill for single-article voice fixes — just edit inline. The dispatch overhead isn't worth it for one file.

---

## Step 1: Bulk grep — the audit phase

Run a single bash sweep across all article folders. Two violation classes plus banned phrases:

```bash
# 1. Em-dash count per file
for f in src/content/articles/best-wines/*.mdx \
         src/content/articles/wine-basics/*.mdx \
         src/content/articles/wine-tools/*.mdx \
         src/content/articles/gift-guides/*.mdx \
         src/content/articles/compare/*.mdx \
         src/content/articles/regions/*.mdx \
         src/content/articles/grapes/*.mdx \
         src/content/articles/types-of-wine/*.mdx \
         src/content/articles/pairing/*.mdx \
         src/content/articles/food-wine-pairing/*.mdx \
         src/content/articles/wine-glossary/*.mdx 2>/dev/null; do
  c=$(grep -c "—" "$f" 2>/dev/null)
  if [ "$c" -gt 0 ]; then echo "$c em-dashes: $f"; fi
done

# 2. "not X, just Y" pattern files
grep -lEi "not [a-z]+, just|isn't [a-z]+\. (It's|Just)|not [a-z]+\. (It's|Just)" \
  src/content/articles/**/*.mdx 2>/dev/null

# 3. Banned phrases
grep -lEi "world of wine|wine journey|let's dive in|let us dive in" \
  src/content/articles/**/*.mdx 2>/dev/null
```

Print a per-file count table grouped by violation type. **If the user said "just give me the names" or "audit only" or any phrasing that signals they want the list without fixes, stop here and present the list. Do not dispatch any agents.**

If they want the fix done, proceed to Step 2.

---

## Step 2: Look up stored NeuronWriter query IDs (reference only — agents do not call the API)

For each offending file, check the brief for an existing NW query:

```bash
for slug in [list of offending slugs]; do
  brief="content/01-briefs/${slug}_brief.md"
  if [ -f "$brief" ]; then
    qid=$(grep -oE "[a-f0-9]{16}" "$brief" | head -1)
    echo "$slug: ${qid:-NO_ID}"
  fi
done
```

This list is for the orchestrator's records, not the sub-agents. Sub-agents get a hard no-API constraint regardless. Stored query IDs matter only if the user later wants a NeuronWriter score check after the voice sweep — and even then, the orchestrator runs that, not the sub-agents.

---

## Step 3: Dispatch one parallel sonnet sub-agent per offending file

Spawn all N agents in **one message**. The dispatch contract template lives at
`dispatch-contract-template.md` in this skill's directory — substitute `{SLUG}` and the violation
notes for each agent before sending.

**Critical constraints in every contract (do not weaken these — read the failure-mode notes at the top of this file):**

- STRICT RULE: NO PAID API CALLS. No NeuronWriter API. No Firecrawl. No DataForSEO. Use grep only.
- Sub-agents may edit `src/content/articles/[category]/[slug].mdx` (their assigned file only) — no other files in `src/`.
- Sub-agents fix em-dashes with sentence-level judgment, not blind find/replace. Each `—` becomes a full stop, comma, or colon depending on what the surrounding clauses need.
- Sub-agents return RAW grep output (not interpretations) for em-dash count and banned-pattern check. The orchestrator does not trust prose claims of "I think it's clean."

---

## Step 4: Read returns, then build

For each completed agent:
1. Confirm `grep -c "—"` returns 0 (raw output, not paraphrase)
2. Confirm banned-pattern grep returns empty
3. Skim the term-preservation summary — confirm zero terms removed
4. Skim the edit list — sanity check that no agent went beyond scope

Then build the site once after all agents return:

```bash
npm run build 2>&1 | tail -10
```

If the build fails, the failure is almost always an MDX syntax issue introduced by a comma swap landing inside a component prop or attribute. Spot-fix and rerun.

---

## Step 5: Final sweep

Re-run the Step 1 grep across all article folders. Confirm zero em-dashes, zero banned patterns. If anything remains, dispatch a single follow-up agent for the holdouts.

---

## Failure modes to watch for

### NeuronWriter credit leak

Symptom: a sub-agent's progress mentions "creating new query" or "paid credit". Stop the agent
immediately via TaskStop. Re-dispatch with stricter no-API language. The two credits leaked in
the originating session were caused by ambiguous language ("authorised, proceed") in the dispatch
contract — never include the word "authorised" near any paid API in this skill's prompts.

### Sub-agent edits beyond scope

Symptom: an agent reports edits to a sibling article, or to a component, or to a config file.
That's a contract violation. Revert the out-of-scope edit (`git diff` to spot it) and re-dispatch
the agent for the specific file with one extra rule: "your edits are restricted to the single MDX
path in this brief — confirm in your return that no other file was touched."

### Bulk find/replace damage

Symptom: a `—` was replaced with a full stop where a comma fit better, leaving a sentence
fragment. Caught by reading the agent's edit list — if it shows blind replacements without
sentence context, dispatch a corrective agent to re-read the file and adjust.

---

## Files in this skill

- `SKILL.md` — this file
- `dispatch-contract-template.md` — the per-agent brief; substitute `{SLUG}`, `{CATEGORY}`, `{VIOLATIONS}` before dispatching
- `audit.sh` — the bulk grep script from Step 1, runnable directly
