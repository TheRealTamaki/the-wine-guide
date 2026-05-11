# Brief: best-wines-for-valentines-day

**Stage:** 1 — Brief
**Synthesized by:** Jas
**Date:** 2026-04-19
**Status:** Ready for Lia (Stage 2)

---

## 1. Slug

`best-wines-for-valentines-day`

Source: authoritative slug confirmed in task dispatch. Matches the naming convention established by `wine-site-seo-keywords.xlsx`.

---

## 2. Wine Count Target

**Target: 12–14 named bottles.**

Source: Lino's SERP file (`research/competitors/best-wines-for-valentines-day-serp.md`), body-count census of editorial listicle competitors, 2026-04-19.

Lino's analysis:

- Body-counted per-wine/per-variety H2/H3 headings across the 7 editorial pages that use per-bottle structure (3 advisory-only pages returned 0, excluded from operating median).
- Per-bottle-page counts: Western Reserve Wines 14, La Crema 11, Lexi's Wine List 11, VinePair 10, Your Wine Store 8, Wine Cellar HQ 8, Alicia Tenise 5.
- **Operating median (per-bottle pages only): 10.**
- Lino's recommendation: 12 as floor (matching or exceeding median), 14 as ceiling (matching Western Reserve, the category leader).
- Lia cuts from Lena's 15-candidate pool to land in the 12–14 range. No further research needed.

---

## 3. Persona Framing

Source: Miko's `audience.md` (`content/00-research/best-wines-for-valentines-day/audience.md`), 2026-04-19.

**Two distinct searchers share this keyword.**

The first is a non-wine-drinker buying for a partner — almost always male, budget $20–$50, searching in the 2–5 days before February 14. He knows she likes red wine "but maybe not too dry," doesn't know the difference between Pinot Noir and Cabernet, and will take one confident recommendation over a nuanced explainer. His deepest fear is not "picking the wrong style" — it is picking something that makes him look like he doesn't know her. He left it too late for wine club delivery and needs something findable at a local retailer.

The second is a home dinner planner who drinks wine regularly — any gender, planning a romantic meal and wanting a bottle that earns the occasion without a wine shop consultation. They know roughly what they like (sparkling, rosé, Pinot Noir) but feel uncertain about whether their usual picks are too predictable. Budget $25–$60. Planning 3–7 days ahead. They're not buying a bottle; they're buying the feeling of the evening.

**The anxiety both share:** "what if I pick wrong and it ruins the night." Neither is seeking the perfect wine. Both are seeking protection from embarrassment.

**Top 3 objections Lia must address:**

1. Sweet vs. dry confusion. Gift-buyers worry their partner "doesn't like dry wine" but cannot define what sweet or dry means in practice. The most upvoted Reddit comment in Miko's research (38 pts): "When people say they like 'sweet' wines and aren't referring to dessert wines, they usually mean grocery store wines like Meiomi." Lia must cut through this clearly — not with a wine education lecture, but with a specific, named recommendation for the "I want something not too dry" brief.

2. Rosé feels like a lazy default. Multiple Reddit threads dismiss rosé as "pink = romantic = lazy," yet Provence rosé is genuinely one of the best Valentine's styles. Lia should acknowledge the instinct and then name bottles that don't look grab-and-go.

3. Fear of looking like they don't know what they're doing. Non-wine buyers fear ordering something unpronounceable or too niche. The gift should say "I thought about you," not "I'm performing wine knowledge I don't have." Safety and plausibility matter more than prestige across all observed threads.

**Purchase triggers:** gift deadline pressure (Feb 10–13), "I want to do better than last year," planning a romantic home dinner, "sparkling signals celebration without requiring food pairing knowledge," translating one recalled data point (she likes red wine) into a specific bottle.

**Tone guidance for Lia:** Voice guide applies in full. Write like a sharp, funny friend who knows wine — conversational, benefit-driven, specific over vague. The reader persona for this article is the panicked gift-buyer: give them one confident answer before you give them options. Miko's authentic language bank contains the right register: "something smooth and enjoyable," "I want it to feel thoughtful, not random," "she'll probably be happy with any bottle that isn't inedible." No em-dashes. No juxtaposition patterns. No banned phrases ("wine is a journey," "world of wine," etc.). FAQ answers are where this audience's real questions live — load the FAQ.

---

## 4. Candidate Pool

Source: Lena's `products-verified.json` (`content/00-research/best-wines-for-valentines-day/products-verified.json`), 2026-04-19.

**15 verified candidates delivered. All 15 passed live verification (parallel fetch, 15/15, zero `fake: true` responses).**

Style distribution across the 15 candidates:

| Style Bucket | Count | Candidates |
|---|---|---|
| Sparkling / Prosecco | 1 | La Marca Prosecco |
| Sparkling Rosé | 2 | La Marca Prosecco Rose 2023, Hampton Water Bubbly Rose |
| Champagne / California Sparkling | 2 | Laurent-Perrier La Cuvee Brut 375ML, Iron Horse Wedding Cuvee 2019 |
| Provence Rosé | 3 | Miraval Rose 2024, Chateau d'Esclans Whispering Angel Rose 2024, Chateau Montaud Cotes de Provence Rose 2024 |
| Tavel Rosé | 1 | Chateau D'Aqueria Tavel Rose 2024 |
| Languedoc Rosé | 1 | Hampton Water Rose 2024 |
| Pinot Noir / California | 1 | Schug Sonoma Coast Pinot Noir 2023 |
| Pinot Noir / Oregon | 2 | Chehalem Estate Grown Chehalem Mountains Pinot Noir 2022, Lemelson Thea's Selection Pinot Noir 2022 |
| Ruby Port | 2 | Fonseca Bin No. 27 Port, Graham's Six Grapes Reserve Ruby Port |
| **Total** | **15** | |

**Lia cuts to 12–14 bottles (SERP median 10, floor 12, ceiling 14).**

Lena's cut guidance: Hampton Water Rose 2024 (#10) is the most expendable if trimming the rosé bucket — weakest critic evidence (no scores on the 2024 vintage), and Miraval, Whispering Angel, and Montaud cover the rosé range more strongly. Both Ports (#14 and #15) give flexibility: run one or both depending on final article structure. Iron Horse Wedding Cuvee (only 13 customer reviews): lead with critic scores (93 WS / 93 JS), not star rating. Fonseca Bin 27 Cloudinary ID (`rcuxonm85l4mz7h39unj`) extracted from category listing card — confirm on product page before setting AffiliateCTA `image=` prop.

This is not an umbrella page. Fresh Wine.com research has already been completed by Lena. Lia does not conduct additional product research.

---

## 5. Novel Feature

Source: Lino's SERP file, Novel Feature Recommendation section, 2026-04-19.

**"Romance Occasion Selector" — a 4-row, 5-column scannable matrix placed immediately after the intro, before TopPicksInline.**

**Exact specification from Lino:**

| Occasion | Wine Style | Why It Works | Best Bottle in This Guide | Approx. Price |
|---|---|---|---|---|
| Date night dinner | Pinot Noir or Merlot | Versatile with food, mid-weight, crowd-safe | [linked wine from article] | $ |
| Champagne toast moment | Brut or Blanc de Blancs | Ceremonial fizz, palate-resetting | [linked wine] | $$ |
| Galentine's get-together | Rosé or Lambrusco | Light, fun, pours for a crowd | [linked wine] | $ |
| Gifting (without meeting) | Port or dessert wine | Long-lived, sophisticated, conversation-starter | [linked wine] | $$ |

Lia fills in the "Best Bottle" cells from the verified pool once she has set her final lineup. The Approx. Price column uses single-$ ($15–$25) and double-$$ ($25–$40) tier notation.

**Why this ships and why it wins:**
- Zero of the top 10 competitors have an occasion-indexed table. Every competing page recommends by wine style. None maps wine style against what the reader is actually doing on Valentine's Day.
- Pure Markdown — no new component needed. Ships with the first MDX draft.
- Directly absorbs PAA questions 6–10 (romantic dinner, gifting under $50, chocolate pairing, sparkling vs. red) in one structure.
- Mirrors the "Body + Occasion two-axis matrix" that shipped on `best-cheap-red-wine` with no competitor equivalent.

Lia is expected to ship this. No Dae ticket required.

---

## 6. Absorption Zone Map

Source: Dana's `terms.json` (`content/00-research/best-wines-for-valentines-day/terms.json`), NW query `104d63697ee79958`, 2026-04-19.

Total NW terms: 18 basic / 67 extended / 50 entity = 135 terms.

**Zone priority order (from listicle-template.md):** FAQ answers → wine descriptions → secondary sections → WineTip callouts. Intro is a firewall — zero terms placed there regardless of fit.

---

### Intro zone

**EMPTY.** Protected. No NW terms placed here under any circumstances.

---

### FAQ slots

6 planned FAQ questions. Lia writes these as the ## Frequently Asked Questions H2 section with H3 per question. Target 3–4 sentences per answer (paragraph cap applies).

**FAQ 1: "Which wine is best for Valentine's Day?"**
PAA source: Yes (exact PAA match).
Terms to absorb: `valentine's day`, `valentine's day wine`, `wines for valentine's day`, `best wines for valentine's day`, `best valentine's day`, `best wine`.
Notes: Core PAA. Answer covers the top 2–3 picks (sparkling, red, rosé) in 3–4 sentences. Naturally absorbs the entire "valentine's day wine" cluster.

**FAQ 2: "What makes a wine romantic for Valentine's Day?"**
PAA source: No (synthesized from extended term cluster).
Terms to absorb: `romantic wines`, `romantic dinner`, `romantic evening`, `romantic red`, `set the mood`, `vibe of your evening`, `create a sensory experience`, `creating a memorable`, `candlelit dinner`, `cozy dinner for two`.
Notes: Absorbs the full romantic/mood/occasion extended cluster. Answer covers style signals that work for intimate dinners: soft tannins, aromatic profile, food-friendliness.

**FAQ 3: "Which Valentine's Day wines are best for low-sugar diets?"**
PAA source: Yes (from "Which wine is best for diabetics?" PAA — reframed per voice guide).
Terms to absorb: `hint of sweetness`, `dry white wine`, `crisp white`, `acidity`, `Acids in wine`.
Notes: Answer steers toward dry whites (Sauvignon Blanc, Pinot Gris) and dry reds. Absorbs acidity/dry-wine cluster. Voice-guide reframe of the diabetics PAA — keep the editorial intent (low-sugar guidance) without the clinical phrasing.

**FAQ 4: "What wine is better for acid reflux on Valentine's Day?"**
PAA source: Yes (direct PAA match from NW data).
Terms to absorb: `acidity` (secondary absorption), `Acids in wine`.
Notes: Answer covers lower-acid options (Chardonnay, Viognier, aged reds with softened acidity). Short, practical.

**FAQ 5: "What is a good wine gift for Valentine's Day?"**
PAA source: No (synthesized from gift term cluster).
Terms to absorb: `wine gift`, `gift set`, `day wine gifts`, `thoughtful wine gifts`, `Gift`, `valentine's celebration`, `toast to love`, `Toast (honor)`.
Notes: Absorbs the full gift cluster. Covers pairing wine with chocolate as a gift, how to choose between sparkling and red as a gift, and a brief note on gift sets. "Toast to love" / "Toast (honor)" entity absorbed naturally in the gifting framing.

**FAQ 6: "What food pairs well with Valentine's Day wine?"**
PAA source: No (synthesized from food cluster).
Terms to absorb: `wine pairing`, `dark chocolate`, `milk chocolate`, `Chocolate`, `Chocolate bar`, `oyster`, `braised short ribs`, `Cheese`, `pairing`.
Notes: Full food-pairing FAQ. Cover dark chocolate with red/sparkling, oysters with white/sparkling, braised short ribs with Pinot Noir or Cabernet, cheese board with rosé.

---

### Wine description slots

These terms belong in individual wine tasting notes, AffiliateCTA descriptions, or H3 subheading framing. Lia distributes across the wine lineup — not all in one wine.

Flavour/texture descriptors:
`cherry`, `dark fruit flavors`, `raspberry`, `strawberry`, `melon`, `watermelon`, `pear`, `green apple`, `notes of green apple`, `citrus`, `peach`, `apricot`, `berry`, `vanilla`, `spice` / `Spice`, `full-bodied`, `fruit-forward`, `lively bubbles`, `hint of sweetness`, `slightly sweet rose` (accented: "slightly sweet rosé"), `bold red`, `romantic red`, `decadent`, `aroma` / `Aroma of wine`, `Mouthfeel`, `Drupe` (absorbed by cherry/peach/apricot mentions), `Sweetness`, `Acids in wine` / `acidity`, `silky pinot noir`, `bottle of pinot noir`.

Style/pairing signals:
`pairs with almost anything`, `crisp white`, `dry white wine`, `Pinot gris` / `pinot gris`, `Burgundy wine`.

Entity terms for secondary coverage across the lineup:
`Gamay`, `Beaujolais`, `Sauternes`, `Catalan wine` (Cava), `Chenin blanc` — these may not appear in wine description slots for wines already in the pool; Lia routes these to the "More Valentine's Day Wine Styles Worth Knowing" secondary section instead.

NFKD normalization notes (from Dana):
- "rosé" and "rose" — use accented form in prose; NW normalization covers the match.
- "rosé wines" — use accented form in prose.
- "slightly sweet rosé" — use accented form.
- "pinot gris" — synonymous with Pinot Grigio; either form counts.

---

### Secondary sections

**Secondary H2 #1: "How to Choose a Valentine's Day Wine"**
Terms to absorb: `napa valley wines`, `winery`, `chardonnay` / `Chardonnay`, `sauvignon blanc`, `Italy`, `Cabernet Sauvignon` / `cabernet sauvignon`, `wine tasting` / `Wine tasting`, `selection of wines`.
Notes: A "how to choose" advisory section naturally absorbs regional and varietal entities. Cover the main style buckets (sparkling, white, red, rosé), grape mentions, and brief notes on regions (Napa, Italy, Burgundy). Sits after the wine listings, before the WineQuiz.

**Secondary H2 #2: "Setting the Scene: Valentine's Day Wine Tips"**
Terms to absorb: `rose petals`, `Rose (entity)`, `candlelit`, `elevate`, `toast to love`, `favorite bottle`, `perfect bottle`, `perfect wine`, `date night`, `romantic wines`, `valentine's celebration`, `day dinner`, `creating a memorable`, `create a sensory experience`, `vibe of your evening`.
Notes: An occasion/setting section absorbs the full mood/setting cluster. Cover serving temperature, stemware, rose petals (flower entity absorbed), candlelit context. A WineTip callout lives inside this section.

**Secondary H2 #3: "More Valentine's Day Wine Styles Worth Knowing"**
Terms to absorb: `Sauternes`, `Gamay`, `Beaujolais`, `Chenin blanc`, `Catalan wine`, `Burgundy wine`, `Pinot gris` / `pinot gris`, `Cabernet Sauvignon` (secondary).
Notes: Covers styles not in the main lineup — Sauternes (dessert wine angle), Gamay/Beaujolais (lighter red for non-red-drinkers), Chenin Blanc (Loire dry white), Catalan wine (Cava as Champagne alternative), Burgundy wine (Pinot Noir homeland framing). This is the entity-absorption section.

---

### WineTip slots

**WineTip #1 (mandatory positioning: after TopPicksInline, before wine listings — pricing disclaimer)**
Template text (from listicle-template.md, mandatory):
"Prices on Wine.com vary by state and change frequently, especially for bottles that are on sale. Click through to see your current price before buying."
NW terms absorbed: none (this is a mandatory structural element, not a term-absorption slot).

**WineTip #2 (practical serving/occasion tip — after wine listings, before WineQuiz)**
Terms to absorb: `cozy dinner for two`, `candlelit dinner`, `set the mood`, `toast to love`, `Toast (honor)`, `Wine glass`, `Glass`, `Drink`.
Suggested content (from Dana): Serving tip — serve sparkling wines well-chilled (7–9°C / 45–48°F), reds slightly below room temperature (16–18°C / 61–64°F). Use proper stemware; the shape changes the aroma. A simple candlelit dinner and a well-chosen bottle are enough.

**WineTip #3 (choice/pricing tip — can sit inside "Setting the Scene" secondary section)**
Terms to absorb: `best wine`, `great wine`, `Grape`, `Fruit`, `Apple`, `Berry`, `Peach`, `Taste`.
Suggested content (from Dana): The best Valentine's Day wine is the one your partner will actually enjoy. Consider their usual taste — do they gravitate toward fruit-forward reds, crisp whites, or bubbly? A $20 bottle they love beats a $100 bottle they don't.

---

## 7. Wine Traits

Source: Niko's `wine-traits.json` (`content/00-research/best-wines-for-valentines-day/wine-traits.json`), 2026-04-19.

**Lia copies these integers directly into `<WineTraits tannin={N} acidity={N} sweetness={N} alcohol={N} body={N} />` props during Stage 2. No derivation, rounding, or invention.**

All values are verbatim from Niko's JSON. Wine names are exact from Lena's products-verified.json.

| Wine (exact name from Lena's JSON) | Tannin | Acidity | Sweetness | Alcohol | Body | Confidence |
|---|---|---|---|---|---|---|
| La Marca Prosecco | 1 | 4 | 2 | 2 | 2 | verified |
| La Marca Prosecco Rose 2023 | 1 | 4 | 2 | 2 | 2 | inferred |
| Laurent-Perrier La Cuvee Brut (375ML half-bottle) | 1 | 5 | 1 | 2 | 2 | verified |
| Iron Horse Wedding Cuvee 2019 | 1 | 5 | 1 | 4 | 2 | verified |
| Hampton Water Bubbly Rose | 1 | 4 | 2 | 3 | 2 | verified |
| Miraval Rose 2024 | 1 | 4 | 1 | 3 | 2 | verified |
| Chateau d'Esclans Whispering Angel Rose 2024 | 1 | 4 | 1 | 3 | 2 | verified |
| Chateau Montaud Cotes de Provence Rose 2024 | 1 | 4 | 1 | 3 | 2 | verified |
| Chateau D'Aqueria Tavel Rose 2024 | 2 | 4 | 1 | 4 | 3 | verified |
| Hampton Water Rose 2024 | 1 | 3 | 1 | 3 | 2 | inferred |
| Schug Sonoma Coast Pinot Noir 2023 | 3 | 4 | 1 | 4 | 2 | verified |
| Chehalem Estate Grown Chehalem Mountains Pinot Noir 2022 | 3 | 4 | 1 | 4 | 3 | verified |
| Lemelson Thea's Selection Pinot Noir 2022 | 3 | 4 | 1 | 4 | 3 | verified |
| Fonseca Bin No. 27 Port | 3 | 3 | 5 | 5 | 5 | verified |
| Graham's Six Grapes Reserve Ruby Port | 3 | 3 | 5 | 5 | 5 | verified |

**Coverage: Niko delivered 15 entries — 13 verified, 2 inferred.**

Inferred wines: La Marca Prosecco Rose 2023 (ABV not listed on Wine.com 2024 product page; sibling house-style inference from La Marca NV), Hampton Water Rose 2024 (ABV not listed for 2024 vintage; inferred from prior Gérard Bertrand Languedoc Grenache/Cinsault house style at ~13%).

If the inferred values look incorrect during Stage 2, Lia flags to Iris rather than self-correcting.

---

## 8. Source Citations

| Specialist | File | Date | Notes |
|---|---|---|---|
| Lino | `C:\Users\Jade\Desktop\Claude B\Wineology\research\competitors\best-wines-for-valentines-day-serp.md` | 2026-04-19 | SERP teardown, 10 competitors, body-count census, PAA, novel feature recommendation |
| Lena | `C:\Users\Jade\Desktop\Claude B\Wineology\content\00-research\best-wines-for-valentines-day\products.md` | 2026-04-19 | 15 candidate narratives, style rationale, cut guidance |
| Lena | `C:\Users\Jade\Desktop\Claude B\Wineology\content\00-research\best-wines-for-valentines-day\products-verified.json` | 2026-04-19 | Verification: 15/15 live, zero fake:true. Cloudinary IDs, product URLs, critic scores, customer ratings |
| Miko | `C:\Users\Jade\Desktop\Claude B\Wineology\content\00-research\best-wines-for-valentines-day\audience.md` | 2026-04-19 | Two-persona profile, 5 pain points/objections, 5 purchase triggers, 25-item language bank, 12 FAQ candidates |
| Dana | `C:\Users\Jade\Desktop\Claude B\Wineology\content\00-research\best-wines-for-valentines-day\terms.json` | 2026-04-19 | NW query ID `104d63697ee79958` (new query — 1 credit spent, announced to Iris). 18 basic / 67 extended / 50 entity terms. Full absorption zone plan. |
| Niko | `C:\Users\Jade\Desktop\Claude B\Wineology\content\00-research\best-wines-for-valentines-day\wine-traits.json` | 2026-04-19 | 15 wine entries, 13 verified / 2 inferred. All five traits (tannin/acidity/sweetness/alcohol/body) as integers 1–5. |

---

## Pre-handoff checklist (Jas verification)

- [x] All five Stage 0 files (plus products.md) confirmed on disk before brief was opened
- [x] Slug recorded verbatim: `best-wines-for-valentines-day`
- [x] Wine count target from Lino's SERP median — source cited (operating median 10, target 12–14)
- [x] Persona framing derived from Miko's `audience.md` — not invented
- [x] Candidate pool section references Lena's `products-verified.json` count exactly (15 verified candidates)
- [x] Novel feature from Lino's file — specific and shippable, pure Markdown, no Dae ticket needed
- [x] Absorption zone map populated from Dana's `terms.json` — all four zone types covered (FAQ, wine descriptions, secondary sections, WineTips). Intro zone is empty.
- [x] Each planned FAQ question is a real, answerable question grounded in Dana's term clusters and Miko's FAQ candidates — no placeholders
- [x] Wine traits table populated — 15 rows matching Lena's JSON, all five traits as integers 1–5, confidence tag on every row, values verbatim from Niko's `wine-traits.json`
- [x] Source citations complete — all six files cited with paths and dates
- [x] File landed at `content/01-briefs/best-wines-for-valentines-day_brief.md`
