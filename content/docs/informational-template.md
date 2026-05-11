# Informational Article Template

**MANDATORY: Read this before building any compare, educational, pairing, or region page.**

This covers all non-listicle article types: `compare/*`, pairing guides, region explainers, how-to pages, and TOFU educational content. For `best-wines/*` listicle pages, use `listicle-template.md` instead.

---

## Required Intro Structure (every informational article)

Every informational article opens with three mandatory elements in this exact order:

### 1. TLDR Block

Use the `<QuickAnswer>` component. It renders as a styled card with a "QUICK ANSWER" eyebrow label (15px, uppercase, tracked) and the answer text below it. Sits above everything else — above the hook paragraph, above any intro copy.

**Component:** `src/components/content/QuickAnswer.astro`
**Prop:** `answer` (string) — the full answer text, 2–3 sentences.

```
import QuickAnswer from '../../../components/content/QuickAnswer.astro';

<QuickAnswer answer="[Direct answer to the article's core question in 2–3 sentences.]" />
```

**Rules:**
- Answer the headline question directly. If the title is "Decanter vs Aerator: Which Do You Need?", the quick answer says which one and when.
- Write it like advice from a friend, not a dictionary definition.
- No em-dashes. No "not X, just Y" constructions.

### 2. Hook Paragraph

One paragraph (3–5 sentences) that earns the reader's attention. Start with a moment or scenario the reader has actually lived. Pay it off with what the article delivers.

```
[Reader scenario — something they've experienced or wondered about.] [Brief explanation of what's at play.] [What this article will do for them.]
```

**Rules:**
- Second person (you/your) throughout.
- Specific beats vague: name the wine, the moment, the problem.
- No "Have you ever wondered...", no "In today's world...", no "Welcome to...".

### 3. Fascination Bullets

"By the end of this page you'll know:" followed by 4–6 bullet points in Gary Halbert/Clayton Makepeace style. Each bullet teases a specific insight without giving it away. The reader should feel an itch they have to scratch.

```
By the end of this page you'll know:

- [Specific fact or reveal that challenges an assumption]
- [Counterintuitive finding or mistake most people make]
- [Actionable test, rule, or technique with a concrete payoff]
- [The answer to the question they didn't know to ask]
- [Price, time, or effort insight that reframes the decision]
```

**Rules for writing fascinations:**
- Every bullet names something specific: a price, a timeframe, a technique, a wine, a rule. Generic bullets ("how to choose the right one") are not fascinations.
- Lead with the payoff, not the topic. "The sediment test you should run before pouring any bottle over five years old" beats "How to handle sediment."
- Teasing is the job. The reader should not know the answer from reading the bullet. If they can skip the article after reading it, rewrite it.
- No em-dashes in fascination bullets.
- Vary the structure: not every bullet starts with "The" or "Why."

---

## Main Content Structure

After the intro block, structure the article around the reader's actual decision or question. The standard flow for compare articles:

1. **What [Thing] Actually Does** — explain the mechanism through what the reader experiences, not what the tool is
2. **Where They Differ** (or **How They Work**) — the distinctions that drive the decision
3. **When to Use X** — clear, specific scenarios (bold lead-in per scenario)
4. **When to Use Y** — same format
5. **Quick Comparison Table** — for compare articles only; summarise the key factors in a scannable grid
6. **FAQ** — 4–6 questions pulled from real search intent (PAA questions from brief); each answer is 2–4 sentences with personality

For non-compare informational articles (pairing guides, region explainers, how-tos), the specific H2s will differ but the reader-first framing holds: lead with what they experience, not what the thing is.

### H2 headers must be phrased as questions

Every H2 in an informational article should be worded as a question a real person would type into ChatGPT, Google, or another AI search tool. This maximises the chance of the section being surfaced as an AI answer.

**Examples:**
- "What Does Aeration Do To Wine?" not "What Aeration Does"
- "What's the Difference Between a Decanter and an Aerator?" not "Where They Part Ways"
- "When Should I Use a Wine Aerator?" not "When to Reach for the Aerator"
- "When Should I Use a Decanter Instead?" not "When to Use a Decanter"

**Rules:**
- Write in first or second person ("When Should I...", "What's the Difference...", "How Do I...") — that's how people actually type queries
- Keep it specific to the article's topic — generic questions ("How Does This Work?") won't get picked up
- FAQ H3s follow the same rule; they're already question-format by convention
- "Frequently Asked Questions" as an H2 label is fine to keep — it's a recognised schema signal

---

## FAQ Standards

FAQs are the section most likely to go flat. Each answer must:

- Start with the direct answer, then give the reasoning
- Sound like someone who's poured a lot of wine, not a textbook
- End with a practical nudge when relevant ("When in doubt, taste it as you go.")
- Never use em-dashes
- Stay under 4 sentences per answer

---

## Closing CTA

End with a `<ComparePicksCard>` component (for compare articles) or a natural benefit-driven nudge to a related guide. Never end with a dead stop. The reader should always have a clear next step.

---

## Voice Guardrails (applies to every sentence)

Before publishing, re-read the first three paragraphs specifically. Intro sections degrade the fastest under keyword passes and rewrites.

Checklist:
- [ ] No em-dashes anywhere in the file
- [ ] No "not X, just Y" / "this isn't X, it's Y" constructions
- [ ] TLDR answers the headline question directly
- [ ] Each fascination bullet is specific enough to create an itch
- [ ] FAQs sound conversational, not clinical
- [ ] Every section serves the reader's decision, not the writer's structure

For the full voice ruleset, read `content/docs/voice-guide.md`.
