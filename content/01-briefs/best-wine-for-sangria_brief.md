# Brief: best-wine-for-sangria

**Stage:** 1 (Brief)
**Synthesized by:** Jas
**Date:** 2026-04-19
**Status:** Ready for Lia — Stage 2 can open immediately

---

## 1. Page Spec

| Field | Value |
|---|---|
| Slug | `best-wine-for-sangria` |
| URL | `/best-wines/best-wine-for-sangria/` |
| Target keyword | best wine for sangria |
| Monthly volume | ~2.9K/mo |
| Priority | P1 BOFU |
| Template type | Standard listicle (Wine.com affiliate, NOT umbrella) |
| Wine count target | **12** (beats LoveToKnow ceiling of 12; SERP median 10 from 4 body-counted listicle pages: 8/9/10/12) |
| Price band | $15–$25 (cheap/value intent — the bottle goes in the pitcher) |
| NeuronWriter query ID | `64e2008dd57bd219` (existing, reused — 0 credits spent) |
| NW project ID | `fdfaf6451d9d7239` |
| Novel feature | Per-wine Sangria Suitability Strip (5-col Markdown table, no new component) |

**Slug authority:** Verified from `wine-site-seo-keywords.xlsx`. Do not derive or alter.

---

## 2. Persona + Intent

**Source:** Miko's `audience.md`, 2026-04-19

**Primary buyer:** A social host planning a crowd-pleasing batch drink. Not a wine-explorer. Sangria is a party-logistics problem: they're buying in bulk for a birthday, BBQ, or bachelorette, and the bottle goes in a pitcher alongside fruit, brandy, and triple sec. They want to spend as little as possible while not ruining the batch. The deadline is real — "this weekend," "tomorrow," "the party is tonight."

**Secondary buyer:** A wine-curious person who discovered sangria as their entry point into wine and wants to understand what grape qualities make it work so they can make smarter wine choices generally.

**Tertiary buyer:** Someone who had sangria in Spain or at a restaurant and wants to recreate it authentically at home. Cares about grape variety and regional origin more than price.

**Central content tension (the hook):** Reddit's dominant advice is "any cheap wine works — don't overthink it." This is partially true but oversimplified. Price doesn't matter, but grape character absolutely does. The wines that ruin sangria — big Cabernet, oaky Malbec, anything heavily tannic — do so because **tannins intensify when chilled**. A chilled pitcher full of high-tannin wine turns dry, grippy, and harsh against the sweetness of fruit and liqueur. Fruit-forward, low-tannin wines (Garnacha, young Tempranillo) outperform oaky Cabernets in a cold pitcher every single time. This is the article's central argument: validate the cheap instinct, then explain why grape character is the real variable.

**Top objections Lia must address:**
1. "I shouldn't waste good wine on sangria." Counter: validate it (don't use your best bottle), then pivot — what you want is a specific flavour profile, which happens to be cheap and easy to find.
2. "I've ruined a batch before — it tasted harsh and grippy." Counter: that's a tannin problem. Chilling amplifies tannins. Garnacha and young Tempranillo solve it.
3. "I don't know if I should use red, white, or rosé." Counter: there's no wrong pick, but there's a best fit per occasion. Map it cleanly (one wine per style) to remove decision paralysis.

**Purchase triggers:**
- Party or event coming up this weekend (most common — time pressure is real)
- Made a bad batch last time (wine selection autopsy)
- Summer/warm weather arriving (seasonal rising intent window)
- Hosting a mixed group where not everyone likes wine (sangria as social diplomacy)
- First-time maker with a recipe in hand, stuck at "what kind of red wine"

**Tone guidance for Lia:** Talk like the friend who's made sangria for 50 people and has opinions. Validate the cheap instinct upfront — readers don't want to feel judged for not using a $40 bottle. Then deliver the actual insight (tannin = the real variable) in a way that makes them feel like they just got smarter. Conversational, specific, confident. Second person throughout. No jargon without a one-line payoff.

---

## 3. Structure Plan

**Note on template choice:** This is NOT an umbrella page. `best-wine-for-sangria` is a narrow-use-case keyword requiring fresh research and specific bottle picks. Standard listicle pipeline applies.

### H2 buckets (in order)

| H2 | Wines | Notes |
|---|---|---|
| Best Red Wine for Sangria | 6 bottles | The SERP core. Every major competitor leads with red. Spanish reds first (Garnacha, Tempranillo), then Malbec as the international pick. |
| Best White Wine for Sangria | 2 bottles | Sauvignon Blanc (primary), Pinot Grigio (secondary / mellow style slot) |
| Best Rosé for Sangria | 2 bottles | Primary: Miraval Rosé (scored, Provence). Premium: Whispering Angel (brand recognition). |
| Best Sparkling Wine for Sangria | 1–2 bottles | Gap in competitor field. Lino confirmed TastingTable and ABC Fine Wine cover it; nobody goes deep. Lia can include 1 Cava pick from Lena's overflow or flag to Iris if no Cava candidate is in the verified pool. |

**Note:** Lena's 15 candidates do not include a sparkling/Cava option. If Lia needs to hit 12 and cover sparkling, she has two options: (a) expand the red bucket to 7 and skip sparkling as its own H2 (defensible since red = the dominant SERP intent), or (b) request Iris dispatch Lena to verify one Cava candidate and add it before Stage 2 opens. Flag this decision at Stage 2 kickoff.

### Secondary H2s (after the wine listings, before WineTip #2)

| Section | Purpose | NW absorption |
|---|---|---|
| Red vs White vs Rosé Sangria: How to Choose | Resolves the style-decision paralysis for buyers who haven't committed to a color | `red sangria`, `white sangria`, `rosé sangria`, `wine sangria`, `red or white`, `sparkling wine` |
| How to Make Sangria: What Else Goes in the Pitcher | Practical host section — ingredients, timing, maceration | `pitcher`, `sangria recipe`, `make sangria`, `brandy`, `triple sec`, `liqueur`, `club soda`, `orange`, `lemon`, `sweetener`, `ice cubes`, `chopped fruit`, `perfect sangria`, `party drink`, `summer drink` |
| Sangria Traditionally: Where It Comes From | Handles the authenticity anxiety persona; honest take on tinto de verano | `sangria traditionally`, `traditional spanish`, `tinto de verano`, `originated in spain`, `Spain`, `Tapas`, `Spanish wine` |
| More Sangria Styles Worth Knowing | Captures overflow entity terms, rosé cava, seasonal variants, Lambrusco mention | `sangrias`, `leftover red`, `kind of wine`, `best for sangria`, `Sangiovese`, `Torrontés`, `Chenin blanc`, `Sparkling wine` |

**Component order (strict — do not deviate):**
1. Intro paragraphs (2–3 short)
2. `<TopPicksInline />` (top 3 picks)
3. `<WineTip>` #1 — PRICING DISCLAIMER (mandatory, always first WineTip)
4. Wine listings (H2 buckets: Red / White / Rosé / Sparkling, each wine as H3 with AffiliateCTA + Sangria Suitability Strip)
5. Secondary H2s (How to Choose / How to Make / Sangria Traditionally / More Styles)
6. `<WineTip>` #2 — Practical sangria tips (fizz timing, fruit prep, maceration timing)
7. `<WineQuiz />`
8. `<MethodologyBox />`
9. `---`
10. `## Frequently Asked Questions` (8 questions — see FAQ Plan)

---

## 4. Wine Count + Candidate Pool

**Source:** Lena's `products.md` + `products-verified.json`, 2026-04-19

**Lena delivered:** 15 verified candidates. All 15 confirmed live via `verify-winecom-wines` bulk fetch + individual page navigation (15/15 PASS). No fabricated URLs in this batch.

**Lia cuts to 12.** The three candidates to consider cutting first:

| Candidate | Why cut first |
|---|---|
| **Bodegas Nekeas El Chaparral Old Vines Garnacha 2022** (candidate #7) | Third Garnacha in the pool. The Breca El Nacido (#5, 91JS/90RP) and Borsao Tres Picos (#6, 91JS, well-known name) cover the Garnacha slot more strongly. Nekeas has the weakest customer-review count of the three (11 reviews) and the style differentiation argument (Navarra acidity) is thin for a buyer guide. Cut first if two Garnachas is sufficient. |
| **Torre de Ona by La Rioja Alta Crianza 2021** (candidate #4) | Second Rioja Tempranillo. CVNE Reserva (#2) is the stronger Rioja pick (five-critic consensus; on sale from $29; stronger story). Torre de Ona has a four-critic stack but only 8 customer reviews and no price-discount hook. Cut if one Rioja is sufficient. |
| **Hampton Water Rosé 2024** (candidate #13) | No current-vintage critic scores (pass `score:0`). Weakest evidence of the three rosés. The Jon Bon Jovi hook is entertaining but thin. Miraval (#11, three critic scores) and Whispering Angel (#12, most-searched US rosé brand) cover the rosé slot fully. Cut if two rosés is sufficient. |

**Recommended 12-wine cut (Lia's starting point):**
- Red Spanish (Garnacha x2): Breca El Nacido, Borsao Tres Picos
- Red Spanish (Tempranillo x2): Matsu El Picaro (Toro), CVNE Rioja Reserva
- Red Spanish (Tempranillo): Bardos Ribera del Duero
- Red International (Malbec x2): BenMarco, Catena (or Tapiz as alternate)
- Rosé x2: Miraval, Whispering Angel
- White x2: Astrolabe Sauvignon Blanc, Attems Pinot Grigio
- **Total: 11** — Lia has flexibility to include one of the three flagged cuts as #12 (Tapiz Malbec, Torre de Ona, or Hampton Water) based on structural balance. Or request Iris dispatch Lena to add a Cava/sparkling candidate as #12.

**Component notes:**
- Catena Malbec 2024: no current-vintage critic scores. Pass `score: 0` and `critic: ""`. Lead with brand recognition + prior-vintage pattern (2022: 92 Vinous / 91 RP).
- Hampton Water Rosé 2024: no current-vintage critic scores. Same `score: 0` treatment if included.
- Whispering Angel at $22.97: slight stretch above $25 ceiling. Note in pricing WineTip and/or MethodologyBox as the premium rosé pick.

---

## 5. Novel Feature Spec — Sangria Suitability Strip

**Source:** Lino's `best-wine-for-sangria-serp.md`, 2026-04-19

**What it is:** A 5-column inline Markdown table placed immediately under each wine's H3 heading, before the tasting note paragraph. No new component required. Zero competitors have anything like it.

**Why it wins:** Buyers implicitly want to know not just "which wine" but "why does this wine work in sangria?" The strip answers that at the individual bottle level, in scannable form. It also absorbs NeuronWriter entity terms naturally (tannin, acidity, oak, sweetness, occasion).

**Exact format per wine:**

```markdown
### [Wine Name]

| Tannin Level | Acidity | Dry/Off-dry | Sangria Color | Sangria Occasion |
|---|---|---|---|---|
| [1–5 dots] | [1–5 dots] | [Dry / Off-dry / Semi-sweet] | [Red / White / Rosé / Sparkling] | [BBQ / Brunch / Holiday / Date Night] |

[Wine description paragraph(s)]

<AffiliateCTA ... />
```

**Column definitions:**

| Column | What goes in it | Notes |
|---|---|---|
| Tannin Level | 1–5 dots (e.g. `●●○○○` = 2/5 Low) | Garnacha = 2, young Tempranillo = 2–3, Malbec = 3, Cab = 4–5. Communicate via dot notation in Markdown. |
| Acidity | 1–5 dots (`●●●○○` = 3/5 Medium) | Sauvignon Blanc = 4–5, Pinot Grigio = 3, Rioja = 3, Malbec = 2–3. |
| Dry/Off-dry | Plain text label | All wines in this pool are dry. Label accordingly. Never "sweet" for any candidate here. |
| Sangria Color | Red / White / Rosé / Sparkling | Match to H2 bucket. |
| Sangria Occasion | BBQ / Brunch / Holiday / Date Night / Summer Party / Crowd Pleaser | Assign based on wine character (lighter, brighter = brunch; bold red = BBQ/Holiday; rosé = summer party; Whispering Angel = date night). |

**Dot notation Lia can use in Markdown:**
- Filled circle: `●` (U+25CF)
- Empty circle: `○` (U+25CB)
- Or plain text: `Low` / `Medium` / `High` — both are acceptable. Dot notation is preferred as it is more scannable.

**Placement rule:** Strip sits between the H3 wine heading and the descriptive paragraph. The AffiliateCTA sits after the description. Strip before prose, CTA after prose — every time.

---

## 6. Absorption Zone Map

**Source:** Dana's `terms.json`, 2026-04-19, NW query ID `64e2008dd57bd219`

Pre-planned zones ensure Dana's Stage 5 pass is targeted patching, not wholesale retrofitting. Every term cluster below is already routed to a specific section. Lia writes to these zones naturally; Dana checks coverage against the query and patches gaps only.

### 6a. FAQ Slots (8 questions — highest absorption capacity)

| Question | Term clusters it absorbs |
|---|---|
| Does it matter what wine I use for sangria? | `kind of wine`, `wine that's`, `wine for your sangria`, `easy to drink`, `fruitier`, `fruity`, `fruity flavors`, `oaky`, `tannin`, `flavor profile` |
| Is Merlot or Pinot Noir better for sangria? (PAA) | `merlot`, `pinot`, `tannin`, `fruity`, `red wine` |
| What is the best Spanish wine for sangria? (PAA) | `spanish wine`, `garnacha`, `tempranillo`, `rioja`, `Rioja DOCa`, `la mancha`, `tinto`, `Spanish wine` entity |
| What's a good cheap wine for sangria? (PAA) | `bottle of wine`, `expensive bottle`, `fine wine`, `leftover red`, `wine you use` |
| What should I avoid putting in sangria? | `oaky`, `Oak (wine)` entity, `Phenolic content in wine` entity, tannin angle from Miko objections — pairs with the "tannins intensify when chilled" insight |
| What ingredients go in sangria? | `ingredients in sangria`, `brandy`, `triple sec`, `liqueur`, `club soda`, `sparkling water`, `orange`, `lemonade`, `sweetener`, `ice cubes`, `chopped fruit`, `add fruit`, `mixer` |
| What is tinto de verano, and how is it different from sangria? | `tinto de verano`, `traditional spanish`, `sangria traditionally`, `originated in spain` |
| Can I use red or white wine — or does it matter? | `red or white`, `red wine`, `white wine`, `red sangria`, `white sangria`, `rosé sangria`, `wine for white` |

### 6b. Wine Description Slots (term clusters per wine)

| Wine | Terms to absorb naturally in description |
|---|---|
| Garnacha picks (Breca + Borsao) | `garnacha`, `Grenache`, `red fruit`, `hint of spice`, `fruit-forward`, `fruit notes`, `fruity flavors`, `sangria traditionally` |
| Tempranillo picks (Matsu + CVNE + Bardos) | `rioja`, `Rioja DOCa`, `la mancha`, `tinto`, `Spanish wine`, `traditional spanish`, `spanish red wine` |
| Malbec picks (BenMarco + Catena) | `Malbec` entity, `plum`, `easy to drink`, `fruity flavors`, `red blend` |
| Pinot Grigio (Attems) | `pinot grigio`, `Pinot gris` entity, `white wine sangria`, `white sangria`, `zesty`, `fruitiness` |
| Sauvignon Blanc (Astrolabe) | `sauvignon blanc`, `sauvignon`, `spanish white` (via albariño note), `verdejo` (via comparison), `zesty`, `white sangria`, `wine for white` |
| Rosé picks (Miraval + Whispering Angel) | `rosé sangria`, `rosé` basic term, `summer drink`, `refreshing summer`, `fizz`, `fruit-forward` |
| Entity terms across wine descriptions | `Malbec`, `Pinot noir`, `Pinot gris`, `Sangiovese`, `Torrontés`, `Chenin blanc`, `Sparkling wine`, `Oak (wine)`, `Blood orange`, `Peach`, `Apple`, `Spice`, `Tapas`, `Orangina` (use as mixer comparator) |

### 6c. Secondary Section Slots

| Section | Terms to absorb |
|---|---|
| Red vs White vs Rosé Sangria: How to Choose | `red sangria`, `white sangria`, `rosé sangria`, `wine sangria`, `white wine sangria`, `red or white`, `sparkling wine` |
| How to Make Sangria: What Else Goes in the Pitcher | `pitcher`, `sangria recipe`, `best sangria recipe`, `make sangria`, `ingredients in sangria`, `orange`, `brandy`, `liqueur`, `triple sec`, `club soda`, `sparkling water`, `lemonade`, `sweetener`, `ice cubes`, `chopped fruit`, `add fruit`, `fizz`, `mixer`, `perfect sangria`, `sangria is a good`, `sangria is the ultimate`, `party drink`, `summer drink`, `refreshing summer` |
| Sangria Traditionally: Where It Comes From | `sangria traditionally`, `traditional spanish`, `tinto de verano`, `originated in spain`, `Spain`, `Tapas`, `Spanish wine` entity |
| More Sangria Styles Worth Knowing | `sangrias`, `leftover red`, `best sangria recipe`, `kind of wine`, `wine you use`, `best red`, `best for sangria`, `Sangiovese`, `Torrontés`, `Chenin blanc`, `Sparkling wine` entity, `Blood` entity fragment (via blood orange), `Soft drink` entity (via mixer context) |

### 6d. WineTip Callout Slots (4 WineTips planned)

| WineTip | Content angle | Terms to absorb |
|---|---|---|
| WineTip #1 (mandatory pricing disclaimer) | "Prices vary by state and change frequently. Click through before buying." | — (pricing disclaimer, no term absorption) |
| WineTip #2 (Don't waste good wine) | Validate cheap instinct: the whole bottle goes in the pitcher. Frame with the Miko language — "you're mixing it with fruit and brandy anyway." | `expensive bottle`, `fine wine`, `bottle of wine`, `leftover red` |
| WineTip #3 (Add fizz at the last minute) | Practical host tip: carbonation dissipates fast. Add sparkling water or cava right before serving. | `sparkle`, `fizz`, `sparkling water`, `club soda`, `Carbonated water` entity |
| WineTip #4 (Sweetener and fruit timing) | Macerate fruit and sugar overnight but add ice right before serving. Time it so sangria isn't watery. | `sweetener`, `chopped fruit`, `add fruit`, `ice cubes`, `mango`, `peach`, `plum`, `Blood orange`, `Apple`, `Orange (fruit)` entity, `Fruit` entity |

### 6e. Intro Zone (PROTECTED — no term absorption)

Per standing project rule: the intro is never used for NeuronWriter term absorption. If any terms remain unabsorbed after FAQ / wine descriptions / secondary sections / WineTips are exhausted, they are deliberately skipped rather than forced into the intro.

---

## 7. FAQ Plan

**Source:** Miko's `audience.md` FAQ candidates + Lino's PAA questions from live SERP, 2026-04-19

8 questions. These are the required FAQ Lia writes. Intent note per question tells Lia what the buyer actually wants from the answer.

| # | Question | Source | Intent note |
|---|---|---|---|
| 1 | Does it matter what wine I use for sangria? | Miko FAQ #1 + multiple Reddit threads | Permission-seeking. Buyer wants validation that cheap is fine. Lia's job: validate the instinct AND deliver the real answer — price is irrelevant, but grape character is everything. |
| 2 | Is Merlot or Pinot Noir better for sangria? | Lino PAA #1 (live SERP) | Variety-decision. Buyer has narrowed to two medium-bodied reds. Lia's job: make a clear call (Pinot Noir for lighter, more delicate sangria; Merlot for richer, plush sangria) with one sentence of reasoning each. |
| 3 | What is the best Spanish wine for sangria? | Lino PAA #2 (live SERP) + Miko FAQ #5 | Regional-specificity. The buyer wants a named Spanish grape or region, not a general answer. Lia's job: name Garnacha as the classic answer and young Tempranillo as the structure pick — and explain the difference in one sentence each. |
| 4 | What's a good cheap wine for sangria? | Lino PAA #3 (live SERP) + Miko FAQ #2 | Budget planning. They're buying in quantity. Lia's job: give two named budget picks from the lineup (under $18) and reinforce the "the whole bottle goes in the pitcher" logic. |
| 5 | What wines should I avoid in sangria? | Miko FAQ #4 + multiple Reddit objections | Mistake avoidance / post-bad-batch diagnosis. Lia's job: name the offenders clearly (big Cabernet, oaky Chardonnay, tannic Shiraz) and explain why in one sentence (tannins intensify when chilled). |
| 6 | Should I use red, white, or rosé wine for sangria? | Miko FAQ #3 + Reddit "style paralysis" threads | Style-decision paralysis. Lia's job: map color to occasion cleanly — red = cooler months/gatherings/BBQ; white = summer/brunch/citrus-forward; rosé = year-round crowd-pleaser. One sentence per style. No equivocating. |
| 7 | What is tinto de verano, and how is it different from sangria? | Miko FAQ #12 + r/askspain threads | Knowledge-gap / authenticity curiosity. Lia's job: explain that tinto de verano (red wine + lemon soda) is what Spaniards actually drink, and that sangria is largely a tourist product. Be honest and a little wry — this is an opportunity to be the article that actually knows. |
| 8 | Can you make sparkling sangria, and what wine do you use? | Miko FAQ #10 + Reddit Mixology threads | Upgrade/variation hunting. They've made the standard red version and want to try something different. Lia's job: name Cava as the classic answer (Spanish provenance, dry, affordable) and note that Prosecco works too. Brief. |

**Optional FAQ #9 (if word count allows):** "Can I use box wine for sangria?" — Miko FAQ #7, validated by Bota Box mentions on Reddit. Buyer wants permission to use a 3-litre box for a big party batch. Answer: yes, with one caveat (buy a dry style, not a sweet one).

**FAQ heading rule:** Always use `## Frequently Asked Questions` exactly. Renaming it will break the TOC exclusion logic and flood the table of contents with question headings.

---

## 8. Voice Notes — Buyer Language Bank

**Source:** Miko's `audience.md` language bank, 2026-04-19

These are verbatim phrases from real buyers. Lia weaves these into descriptions, intro, and FAQ answers — not as direct quotes, but as tone anchors and frame-setters. They are the register this buyer thinks in.

1. "Don't waste money on expensive wines for sangria, usually they just make it worse."
2. "I sometimes use plonk I was gifted for my sangria. Still tastes great."
3. "Any great wine won't make a difference and a cheap bulk wine won't show its flaws."
4. "Sangria is of Spanish origin, go Spanish. Should get ok enough quality for very cheap going that route too."
5. "A clean garnacha or young tempranillo that hasn't seen oodles of oak is going to be more of a team player than a classic oaky rioja."
6. "Since it's chilled, any wine that's got considerable tannins to it is not the best option — the chilly will only intensify tannins."
7. "I like lighter-medium bodied reds that you could potentially chill on their own — but they don't have to be fancy since you're mixing it with a bunch of other ingredients!"
8. "You can make it from ANY wine but for reds, I go fruit-forward (think Pinot noir instead of Cabernet.)"
9. "I probably would not go for a Malbec, Cabernet Sauvignon, Shiraz/Syrah, Carmenere, or anything like that."
10. "A lot of times (most of the time) in US restaurants it is too sweet."
11. "Bear in mind that the sugar, fruit, and extra booze that you're adding to the sangria will weigh it down a bit so you want to keep the wines light and buoyant."
12. "Cheap wine is often sweet whereas the wines used for traditional sangria tend to be dry and not very sweet."
13. "Sangria is my speciality and what I bring to any party."
14. "It's make ahead and looks pretty."
15. "Quick! Need a cheap red wine to make sangria for a bunch of people with undeveloped pallets who just want a yummy drink!"

**Key voice frames Lia should build around:**
- The cheap-but-correct-grape-character tension is the article's emotional spine. Open on validation, land on the real insight.
- "The whole bottle goes in the pitcher" is the price-permission anchor — use it early and let it do the work.
- The tannin-when-chilled mechanic is the one wine insight that earns the click. It's practical, it explains a real experience (harsh batch), and it's absent from every competitor. Lia should deliver it clearly, once, in the intro or early in the red H2.

---

## 9. Pre-flight Checklist for Lia

Before opening Stage 2 draft:

- [ ] Read `Wineology/CLAUDE.md` (project map, pipeline-first rule, Firecrawl cost discipline)
- [ ] Read `Wineology/content/docs/voice-guide.md` (no em-dashes, no "not X just Y," banned phrases, 10 principles)
- [ ] Read `Wineology/content/docs/listicle-template.md` in full (component order, WineTip rules, MethodologyBox placement, Wine.com research patterns, paragraph-length cap)
- [ ] Read `Wineology/content/docs/author-bio.md` (Claire Bennett's experience — use experience-anchored phrasings only; never claim WSET, sommelier cert, or specific company names)
- [ ] Read Lena's `products-verified.json` (15 candidates, all 15 verified — Lia selects 12; see wine count + cut guidance in Section 4 of this brief)
- [ ] Confirm Sparkling H2 decision: include 1 Cava pick as bottle #12, or flag to Iris that no sparkling candidate is in Lena's pool
- [ ] Confirm Sangria Suitability Strip dot values for each of the 12 selected wines before writing descriptions
- [ ] Stage 2 draft goes to `content/02-drafts/best-wine-for-sangria_draft.mdx`
- [ ] Run `verify-winecom-wines` at Stage 2.5 before any handoff to Stage 3

**Do NOT re-read Miko's `audience.md`, Lino's `serp.md`, or Dana's `terms.json` during Stage 2.** This brief is the single source of truth for all of that. If something seems to be missing, it's a brief failure — flag to Jas or Iris, don't improvise.

---

## Source Citations

| Specialist | File | Date |
|---|---|---|
| Lino | `Wineology/research/competitors/best-wine-for-sangria-serp.md` | 2026-04-19 |
| Lena | `Wineology/content/00-research/best-wine-for-sangria/products.md` | 2026-04-19 |
| Lena | `Wineology/content/00-research/best-wine-for-sangria/products-verified.json` | 2026-04-19 |
| Miko | `Wineology/content/00-research/best-wine-for-sangria/audience.md` | 2026-04-19 |
| Dana | `Wineology/content/00-research/best-wine-for-sangria/terms.json` | 2026-04-19, NW query ID `64e2008dd57bd219` |
