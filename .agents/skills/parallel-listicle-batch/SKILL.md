---
name: parallel-listicle-batch
description: >
  Build 2-5 Wineology best-wines listicle articles in parallel using Sonnet sub-agents while the
  orchestrator manages dispatch, voice consistency, and deploy. Use this skill whenever Jade asks
  to "knock out a batch", "build N articles at once", "run the listicle pipeline in parallel", or
  gives a list of 2+ best-wines slugs to build together. Also invoke it proactively when the build
  queue shows a cluster of similar articles (e.g. gift guides, occasion wines) that could run concurrently.
  Do NOT use this for single articles — use the standard 4-stage pipeline instead.
compatibility:
  requires:
    - Claude sub-agents (Sonnet 4.x or later)
    - Chrome MCP (mcp__Claude_in_Chrome__*)
    - Beuron SEO skill (/beuron-seo) — the only SEO term tool used on this site; neuronwriter-seo is NOT used
    - paragraph-audit skill (.claude/skills/paragraph-audit/)
    - Wineology project (C:\Users\Jade\Desktop\Claude B\Wineology\)
---

# Parallel Listicle Batch — Wineology

**This skill is Wineology-specific.** It encodes the dispatch contract, failure-mode fixes, and
orchestrator checks that were tuned through the first real parallel batch on 2026-04-26 (3 articles,
~55 min wall time vs ~3 hours serial). Do not use it for gift-guides, wine-tools, or compare pages
without adapting the deploy step — the deploy script is hardcoded to best-wines/*.

---

## When to use this skill

- Jade gives you 2-5 slugs to build in one session
- The build queue has a cluster of articles with similar research patterns
- Jade says something like "let's knock out the occasion wine guides today"

Skip this skill for a single article. The overhead of batching one agent is not worth it.

---

## Step 1: Validate inputs

Before dispatching anything, run these checks inline (not in a sub-agent):

**Input format:**
```
slugs:   best-wines-for-a-wedding, best-wines-for-mothers-day, best-housewarming-wines
topics:  Wedding wine guide, Mother's Day wine guide, Housewarming wine guide
intent:  [per-slug notes on angle, price range, audience, anything from the brief queue]
```

**Validation rules:**
1. Slug format: all lowercase, hyphens only, no spaces, must start with `best-` for best-wines pages
2. No duplicates in the slug list
3. Check `src/content/articles/best-wines/` — reject any slug already deployed. The deploy script will fail, but catching it here saves 45 minutes of agent work.
4. Count: 2-5 slugs. More than 5 is possible but increases socket-failure risk (see failure modes below).

If any check fails, stop and report to Jade before dispatching.

---

## Step 2: Read reference articles before building dispatch contracts

Read these two files before writing any dispatch contract. They define what "correct output" looks like:

- `src/content/articles/best-wines/best-wines-for-a-wedding.mdx` — 14-pick article, all components present, verified reference
- `src/content/articles/best-wines/best-red-wine-under-20.mdx` — original reference page

The dispatch contract template is at `dispatch-contract-template.md` in this skill's directory. Substitute `{SLUG}`, `{TOPIC}`, `{INTENT}`, and `{REFERENCE_ARTICLES}` for each article before dispatching.

---

## Step 3: Fire all agents in a single message

Spawn all N agents in **one message**. If you send agent 1, then wait for it to start, then send agent 2 — you've lost the parallelism. All N contracts go in one response.

**Model:** `sonnet` for all sub-agents. Opus orchestrates; Sonnet drafts and researches.

**Critical constraints in every contract:**
- Sub-agents write to `content/02-drafts/[slug]_draft.mdx` ONLY
- Sub-agents NEVER touch `src/content/articles/` or `src/pages/`
- Sub-agents NEVER edit `[...slug].astro`
- Sub-agents return raw bash output (not interpretation) for all three audit checks

See `dispatch-contract-template.md` for the full contract to give each agent.

---

## Step 4: While agents run — orchestrator tasks

Do not wait idle. While agents are running:

1. **Extract opening sentences** from any already-completed drafts. Prepare the hook-check template (see Step 5).
2. **Pre-stage the topPicksData block** you'll need to add to `src/pages/best-wines/[...slug].astro`. You know the slugs now; you can write the skeleton before the agents return image URLs and links.
3. **Re-read the voice guide** (`content/docs/voice-guide.md`) so you're primed to catch violations in the returned drafts.

---

## Step 5: Read sub-agent returns

When an agent returns, the orchestrator does three things:

### 5a. Trust the raw output — do not re-run verification

Each sub-agent pastes RAW bash output for three audit commands. If the raw output shows PASS, accept it. The raw-output rule exists specifically to prevent the 2026-04-26 failure where an agent interpreted a FAIL as a PASS. If an agent returns interpretation ("I believe the audit passed") instead of raw output, treat it as an **unresolved FAIL** and ask the agent to re-run and paste the actual output.

The three required raw outputs are:
```bash
# 1. Paragraph audit
python .claude/skills/paragraph-audit/audit.py content/02-drafts/{slug}_draft.mdx

# 2. Em-dash grep
grep -c "—" content/02-drafts/{slug}_draft.mdx

# 3. Component presence check
grep -E "(WineTraits|AffiliateCTA|TopPicksInline|WineQuiz|MethodologyBox|WineTip)" content/02-drafts/{slug}_draft.mdx | grep -v "^import"
```

Run `verification-script.sh` from this skill's directory to get the exact commands to paste.

### 5b. Side-by-side hook check

Once two or more drafts are in, extract the opening sentence of each:
```bash
for slug in {slug1} {slug2} {slug3}; do
  head -30 "content/02-drafts/${slug}_draft.mdx" | grep -v "^---" | grep -v "^import" | grep -v "^$" | head -1
done
```

If two openings follow the same structural pattern (e.g. both start "You've got X guests and..."), flag it and ask the relevant agent to rewrite its hook. Voice repetition across a same-template batch is the biggest quality risk — articles shipped together will sit in the catalog next to each other forever.

### 5c. Check topPicksData entries are populated

Each agent must return three picks with image URLs, wine.com hrefs, highlight labels, and star ratings. The orchestrator cannot deploy without this. If an agent returned `PENDING` in any field, bounce it back before proceeding.

---

## Step 6: Deploy (orchestrator only)

Agents are forbidden from touching `src/`. The orchestrator handles all deploy work in one pass after all agents return clean audits.

### 6a. Add topPicksData entries to [...slug].astro

Edit `src/pages/best-wines/[...slug].astro` ONCE with all N entries. Do not edit it N times (each edit to a shared file risks a conflict if done mid-batch). Add all entries in a single Edit call.

### 6b. Copy drafts to src/

```bash
for slug in {slug1} {slug2} {slug3}; do
  cp "content/02-drafts/${slug}_draft.mdx" "src/content/articles/best-wines/${slug}.mdx"
done
```

### 6c. Build and verify

```bash
cd "C:\Users\Jade\Desktop\Claude B\Wineology"
npm run build
```

After build, verify each page:
```bash
for slug in {slug1} {slug2} {slug3}; do
  grep -l "${slug}" dist/best-wines/*/index.html && echo "FOUND: ${slug}" || echo "MISSING: ${slug}"
done
```

If build fails, check for import path errors first (a common result of em-dash stripping that hit component import lines — see listicle-template.md for the safe em-dash removal pattern).

---

## Failure mode handling

### Socket failure (agent dies mid-run)

If a sub-agent returns with a FailedToOpenSocket or connection-lost error:

1. Check whether the draft file was partially written: `ls -la content/02-drafts/{slug}_draft.mdx`
2. If the file is empty or absent, relaunch the single agent with the same contract
3. If the file is partial (>0 bytes but missing required sections), have the agent resume from where it stopped rather than restart from scratch — saves research time

### Agent self-misreport

If an agent reports "PASS" in prose but provides no raw bash output to back it up:

1. Do NOT accept the claim
2. Ask the agent to run the three audit commands and paste raw output verbatim
3. If it finds real violations, the agent fixes them in place on the draft before returning again

### Component omission

If the component grep shows fewer `WineTraits` blocks than the number of wine picks (easy to spot because each pick H3 should have one immediately following), bounce the draft back to the agent with a specific instruction: "Your draft has [N] wine picks but only [M] WineTraits blocks. Add WineTraits immediately after every wine H3 — no exceptions."

---

## Files in this skill

- `SKILL.md` — this file (loaded when skill triggers)
- `dispatch-contract-template.md` — the ~80-line per-agent brief; substitute placeholders before dispatching
- `verification-script.sh` — the three bash commands sub-agents paste raw output from
- `README.md` — when to invoke, args, what it produces
