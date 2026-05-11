# Internal Linking Map — Wineology

## 1. Executive Summary

**Inventory.** 149 article MDX files across 11 active category folders: `best-wines` (~40), `wine-basics` (22), `grapes` (20), `regions` (17), `types-of-wine` (12), `food-wine-pairing` (13), `wine-tools` (13), `gift-guides` (7), `compare` (2), `products` (2), `pairing` (1).

**Linking targets.** Aim for 3 to 5 contextual outbound links per article plus up to 3 entries in `relatedArticles` frontmatter. That puts the floor at roughly 380 contextual links and 380 related-block links sitewide. Reciprocal linking is the goal where it makes sense (grape to listicle, listicle back to grape). Avoid hub-to-hub linking that doesn't help a real reader.

**Authority flow priority.**
1. Grapes and Regions are the canonical reference hubs. Every BOFU listicle that features a grape or comes from a region should link out to those pages.
2. Types-of-wine articles (red-wine, white-wine, sparkling-wine, dessert-wine, fortified-wine, rose-wine, orange-wine, natural-wine) act as second-tier hubs that tie style-themed listicles together.
3. The food-wine-pairing chart (`food-wine-pairing/wine-pairing-chart`) is the canonical pairing hub. Every pairing article should link back to it, and grape pages should link out to the most relevant pairing article in their pairings section.
4. Wine basics (`how-to-taste-wine`, `wine-buying-guide`) are TOFU on-ramps that should be linked sparingly from articles where the concept actually appears.

**Priority of implementation.** Wire grapes first (highest authority gain), then regions, then BOFU listicles in `best-wines`, then food-wine-pairing, then wine-tools, then gift-guides, then types-of-wine, then compare, then wine-basics. Component wiring is already done in `ArticleLayout.astro`, so this is purely a content task.

---

## 2. Hub Strategy

### Homepage (`src/pages/index.astro`)
Current state: hero links to `/wine-basics/` and `/journal/`, surfaces three latest articles. Recommendations:
- Add a "Start with the grape" strip linking to the six grapes that anchor most reader queries: `chardonnay`, `pinot-noir`, `cabernet-sauvignon`, `sauvignon-blanc`, `riesling`, `malbec`.
- Add a "Find a pairing" tile pointing at `/food-wine-pairing/wine-pairing-chart/` and the three most-trafficked pairing articles (`steak-wine-pairing`, `pasta-wine-pairing`, `pizza-wine-pairing`).
- Replace the hero CTA "Open the Index → /wine-basics/" with the actual canonical index. `/wine-basics/` only contains two articles, so this is a misleading entry point. Better target: `/grapes/` or a new `/start-here/` page.

### Category indexes (`src/pages/<category>/index.astro`)
Already exist for all 10 active categories. No structural change needed. Two flag items:
- `/wine-glossary/index.astro` and `/wine-glossary/[...slug].astro` exist but `src/content/articles/wine-glossary/` is empty. See section 5.
- `/products/index.astro` and `/products/[...slug].astro` exist but no `products` content collection is in use. See section 5.

### Breadcrumbs and RelatedArticles
Both components are already wired in `ArticleLayout.astro` (Breadcrumbs near line 60, RelatedArticles around lines 128 to 133). Breadcrumbs render on every article. RelatedArticles renders only when `relatedArticles` frontmatter has slugs. The site-wide gap is content (frontmatter values and in-body links), not component wiring.

---

## 3. Article-by-Article Map

Anchor text is illustrative. Vary in body copy. Slugs in the related column are content-collection IDs (no leading slash, no `.mdx`).

### Grapes (20)

| Slug | Contextual links | Related articles |
|---|---|---|
| grapes/cabernet-sauvignon | "[Napa Valley](/regions/napa-valley/)" the New World flagship; "[Bordeaux](/regions/bordeaux/)" the Old World home; "[steak pairing](/food-wine-pairing/steak-wine-pairing/)" textbook food match; "[best full-bodied red wines](/best-wines/best-full-bodied-red-wines/)" buyer's intent | regions/bordeaux, regions/napa-valley, best-wines/best-full-bodied-red-wines |
| grapes/merlot | "[Bordeaux](/regions/bordeaux/)" right-bank ruler; "[Tuscany's Super-Tuscans](/regions/tuscany/)" the Italian outlet; "[best red wines for beginners](/best-wines/best-red-wines-for-beginners/)" Merlot is on most lists; "[best red wine under $20](/best-wines/best-red-wine-under-20/)" value tier | regions/bordeaux, best-wines/best-red-wines-for-beginners, best-wines/best-red-wine-under-20 |
| grapes/pinot-noir | "[Burgundy](/regions/burgundy/)" and "[Sonoma](/regions/sonoma/)" its two great homes; "[Champagne](/regions/champagne/)" its sparkling third life; "[best light red wines](/best-wines/best-light-red-wines/)"; "[salmon and Pinot](/food-wine-pairing/seafood-wine-pairing/)" classic match | regions/burgundy, regions/sonoma, best-wines/best-light-red-wines |
| grapes/syrah-shiraz | "[Rhône Valley](/regions/rhone-valley/)" Syrah's birthplace; "[Barossa Valley](/regions/barossa-valley/)" the Australian Shiraz benchmark; "[BBQ pairing](/food-wine-pairing/bbq-wine-pairing/)" with grilled meat; "[best full-bodied red wines](/best-wines/best-full-bodied-red-wines/)" | regions/rhone-valley, regions/barossa-valley, food-wine-pairing/bbq-wine-pairing |
| grapes/malbec | "[Mendoza](/regions/mendoza/)" the region that made it famous; "[steak pairing](/food-wine-pairing/steak-wine-pairing/)" Argentine asado match; "[best dry red wines](/best-wines/best-dry-red-wines/)"; "[best red wine under $20](/best-wines/best-red-wine-under-20/)" | regions/mendoza, food-wine-pairing/steak-wine-pairing, best-wines/best-red-wine-under-20 |
| grapes/cabernet-franc | "[Loire Valley](/regions/loire-valley/)" varietal home; "[Bordeaux blending role](/types-of-wine/wine-blends-explained/)"; "[best light red wines](/best-wines/best-light-red-wines/)" | regions/loire-valley, types-of-wine/wine-blends-explained, best-wines/best-light-red-wines |
| grapes/nebbiolo | "[Piedmont](/regions/piedmont/)" Nebbiolo only sings here; "[pasta pairing](/food-wine-pairing/pasta-wine-pairing/)" Barolo with truffle and ragù; "[best full-bodied red wines](/best-wines/best-full-bodied-red-wines/)" | regions/piedmont, food-wine-pairing/pasta-wine-pairing, regions/italy-wine-guide |
| grapes/sangiovese | "[Tuscany](/regions/tuscany/)" Chianti and Brunello home; "[Italy wine guide](/regions/italy-wine-guide/)"; "[pizza pairing](/food-wine-pairing/pizza-wine-pairing/)" Chianti's classic match; "[pasta pairing](/food-wine-pairing/pasta-wine-pairing/)" | regions/tuscany, food-wine-pairing/pizza-wine-pairing, food-wine-pairing/pasta-wine-pairing |
| grapes/tempranillo | "[Rioja's ageing tiers](/regions/rioja/)" structural lens for the grape; "[best dry red wines](/best-wines/best-dry-red-wines/)"; "[BBQ pairing](/food-wine-pairing/bbq-wine-pairing/)" | regions/rioja, best-wines/best-dry-red-wines, food-wine-pairing/bbq-wine-pairing |
| grapes/grenache | "[Rhône Valley](/regions/rhone-valley/)" and "[Provence rosé](/regions/provence/)" two faces; "[best wine for sangria](/best-wines/best-wine-for-sangria/)" Garnacha is the base; "[BBQ pairing](/food-wine-pairing/bbq-wine-pairing/)" | regions/rhone-valley, regions/provence, best-wines/best-wine-for-sangria |
| grapes/gamay | "[Beaujolais (France guide)](/regions/france-wine-guide/)" varietal home; "[best light red wines](/best-wines/best-light-red-wines/)"; "[Thanksgiving pairing](/food-wine-pairing/thanksgiving-wine-pairing/)" Beaujolais Nouveau timing | regions/france-wine-guide, best-wines/best-light-red-wines, food-wine-pairing/thanksgiving-wine-pairing |
| grapes/zinfandel | "[Sonoma](/regions/sonoma/)" Zin's American heartland; "[best sweet red wine](/best-wines/best-sweet-red-wine/)" White Zin and off-dry; "[BBQ pairing](/food-wine-pairing/bbq-wine-pairing/)"; "[best full-bodied red wines](/best-wines/best-full-bodied-red-wines/)" | regions/sonoma, food-wine-pairing/bbq-wine-pairing, best-wines/best-full-bodied-red-wines |
| grapes/chardonnay | "[Burgundy](/regions/burgundy/)" the spiritual home; "[buttery California style](/best-wines/best-buttery-chardonnay/)" buyer's intent; "[Champagne](/regions/champagne/)" Blanc de Blancs role; "[seafood pairing](/food-wine-pairing/seafood-wine-pairing/)" | regions/burgundy, best-wines/best-buttery-chardonnay, types-of-wine/white-wine |
| grapes/sauvignon-blanc | "[Marlborough](/regions/marlborough/)" loud NZ style; "[Loire Valley](/regions/loire-valley/)" flintier Sancerre style; "[best crisp white wines](/best-wines/best-crisp-white-wines/)"; "[goat cheese pairing](/pairing/wine-and-cheese-pairing/)" | regions/marlborough, regions/loire-valley, best-wines/best-crisp-white-wines |
| grapes/riesling | "[Thai food pairing](/food-wine-pairing/thai-food-wine-pairing/)" off-dry Riesling is the answer; "[Indian food pairing](/food-wine-pairing/indian-food-wine-pairing/)"; "[dry vs sweet wine](/types-of-wine/dry-vs-sweet-wine/)" label-reading | food-wine-pairing/thai-food-wine-pairing, types-of-wine/dry-vs-sweet-wine, food-wine-pairing/indian-food-wine-pairing |
| grapes/pinot-grigio | "[Italy wine guide](/regions/italy-wine-guide/)" lighter Italian style; "[best crisp white wines](/best-wines/best-crisp-white-wines/)"; "[seafood pairing](/food-wine-pairing/seafood-wine-pairing/)" | regions/italy-wine-guide, best-wines/best-crisp-white-wines, food-wine-pairing/seafood-wine-pairing |
| grapes/chenin-blanc | "[Loire Valley](/regions/loire-valley/)" Vouvray and Savennières; "[dry vs sweet wine](/types-of-wine/dry-vs-sweet-wine/)" Chenin runs the full spectrum; "[chicken pairing](/food-wine-pairing/chicken-wine-pairing/)" | regions/loire-valley, types-of-wine/dry-vs-sweet-wine, food-wine-pairing/chicken-wine-pairing |
| grapes/gewurztraminer | "[Thai food pairing](/food-wine-pairing/thai-food-wine-pairing/)" best food match; "[Indian food pairing](/food-wine-pairing/indian-food-wine-pairing/)"; "[dessert wine](/types-of-wine/dessert-wine/)" late-harvest versions | food-wine-pairing/thai-food-wine-pairing, food-wine-pairing/indian-food-wine-pairing, types-of-wine/dessert-wine |
| grapes/viognier | "[Rhône Valley](/regions/rhone-valley/)" Condrieu home; "[white wine](/types-of-wine/white-wine/)"; "[chicken pairing](/food-wine-pairing/chicken-wine-pairing/)" | regions/rhone-valley, types-of-wine/white-wine, food-wine-pairing/chicken-wine-pairing |
| grapes/moscato | "[best Moscato wine](/best-wines/best-moscato-wine/)" buyer's guide; "[best sweet wines](/best-wines/best-sweet-wines/)"; "[chocolate pairing](/food-wine-pairing/chocolate-wine-pairing/)"; "[dessert wine](/types-of-wine/dessert-wine/)" | best-wines/best-moscato-wine, best-wines/best-sweet-wines, types-of-wine/dessert-wine |

### Regions (12)

| Slug | Contextual links | Related articles |
|---|---|---|
| regions/napa-valley | "[Cabernet Sauvignon](/grapes/cabernet-sauvignon/)" signature grape; "[buttery Chardonnay](/best-wines/best-buttery-chardonnay/)" Napa's white style; "[Sonoma](/regions/sonoma/)" the comparison readers always want; "[steak pairing](/food-wine-pairing/steak-wine-pairing/)" | grapes/cabernet-sauvignon, regions/sonoma, best-wines/best-buttery-chardonnay |
| regions/sonoma | "[Pinot Noir](/grapes/pinot-noir/)" and "[Zinfandel](/grapes/zinfandel/)" two stars; "[Napa Valley](/regions/napa-valley/)" the contrast; "[best buttery Chardonnay](/best-wines/best-buttery-chardonnay/)" | grapes/pinot-noir, grapes/zinfandel, regions/napa-valley |
| regions/tuscany | "[Sangiovese](/grapes/sangiovese/)" soul of the region; "[Italy wine guide](/regions/italy-wine-guide/)"; "[pasta pairing](/food-wine-pairing/pasta-wine-pairing/)"; "[pizza pairing](/food-wine-pairing/pizza-wine-pairing/)" | grapes/sangiovese, regions/italy-wine-guide, food-wine-pairing/pasta-wine-pairing |
| regions/piedmont | "[Nebbiolo](/grapes/nebbiolo/)" Barolo and Barbaresco grape; "[Italy wine guide](/regions/italy-wine-guide/)"; "[best full-bodied red wines](/best-wines/best-full-bodied-red-wines/)" | grapes/nebbiolo, regions/italy-wine-guide, best-wines/best-full-bodied-red-wines |
| regions/rioja | "[Tempranillo](/grapes/tempranillo/)" dominant grape; "[best dry red wines](/best-wines/best-dry-red-wines/)"; "[BBQ pairing](/food-wine-pairing/bbq-wine-pairing/)" | grapes/tempranillo, best-wines/best-dry-red-wines, food-wine-pairing/bbq-wine-pairing |
| regions/mendoza | "[Malbec](/grapes/malbec/)" calling-card grape; "[steak pairing](/food-wine-pairing/steak-wine-pairing/)"; "[best red wine under $20](/best-wines/best-red-wine-under-20/)" Mendoza is the value home of Malbec | grapes/malbec, food-wine-pairing/steak-wine-pairing, best-wines/best-red-wine-under-20 |
| regions/marlborough | "[Sauvignon Blanc](/grapes/sauvignon-blanc/)" the region is famous for one grape; "[best crisp white wines](/best-wines/best-crisp-white-wines/)"; "[seafood pairing](/food-wine-pairing/seafood-wine-pairing/)" | grapes/sauvignon-blanc, best-wines/best-crisp-white-wines, food-wine-pairing/seafood-wine-pairing |
| regions/loire-valley | "[Sauvignon Blanc](/grapes/sauvignon-blanc/)" (Sancerre); "[Chenin Blanc](/grapes/chenin-blanc/)" (Vouvray); "[Cabernet Franc](/grapes/cabernet-franc/)" (Chinon); "[France wine guide](/regions/france-wine-guide/)" | grapes/sauvignon-blanc, grapes/chenin-blanc, grapes/cabernet-franc |
| regions/rhone-valley | "[Syrah](/grapes/syrah-shiraz/)" northern Rhône; "[Grenache](/grapes/grenache/)" southern Rhône; "[Viognier](/grapes/viognier/)" (Condrieu); "[best full-bodied red wines](/best-wines/best-full-bodied-red-wines/)" | grapes/syrah-shiraz, grapes/grenache, grapes/viognier |
| regions/provence | "[rosé wine](/types-of-wine/rose-wine/)" canonical home; "[best wine for summer](/best-wines/best-wine-for-summer/)"; "[Grenache](/grapes/grenache/)" primary grape | types-of-wine/rose-wine, best-wines/best-wine-for-summer, grapes/grenache |
| regions/france-wine-guide | "[Bordeaux](/regions/bordeaux/)", "[Burgundy](/regions/burgundy/)", "[Champagne](/regions/champagne/)", "[Loire](/regions/loire-valley/)", "[Rhône](/regions/rhone-valley/)", "[Provence](/regions/provence/)" internal region pages; "[wine regions of the world](/regions/wine-regions-of-the-world/)" zoom out | regions/bordeaux, regions/burgundy, regions/champagne |
| regions/italy-wine-guide | "[Tuscany](/regions/tuscany/)", "[Piedmont](/regions/piedmont/)" two flagship regions; "[Sangiovese](/grapes/sangiovese/)" and "[Nebbiolo](/grapes/nebbiolo/)"; "[wine regions of the world](/regions/wine-regions-of-the-world/)" zoom out | regions/tuscany, regions/piedmont, regions/wine-regions-of-the-world |
| regions/wine-regions-of-the-world | Spoke-and-hub: link out to all specific region pages in body prose, organized by country. | regions/france-wine-guide, regions/italy-wine-guide, regions/napa-valley |
| regions/bordeaux | "[Cabernet Sauvignon](/grapes/cabernet-sauvignon/)" left bank backbone; "[Merlot](/grapes/merlot/)" right bank ruler; "[Cabernet Franc](/grapes/cabernet-franc/)" the third blender; "[wine blends explained](/types-of-wine/wine-blends-explained/)" Bordeaux is the blend archetype | grapes/cabernet-sauvignon, grapes/merlot, types-of-wine/wine-blends-explained |
| regions/burgundy | "[Pinot Noir](/grapes/pinot-noir/)" the red grape, full stop; "[Chardonnay](/grapes/chardonnay/)" the white; "[best buttery Chardonnay](/best-wines/best-buttery-chardonnay/)" the New World mirror; "[France wine guide](/regions/france-wine-guide/)" | grapes/pinot-noir, grapes/chardonnay, regions/france-wine-guide |
| regions/champagne | "[sparkling wine](/types-of-wine/sparkling-wine/)" Champagne is the canonical reference; "[best Prosecco](/best-wines/best-prosecco/)" the Italian counterpoint; "[Chardonnay](/grapes/chardonnay/)" Blanc de Blancs grape; "[Pinot Noir](/grapes/pinot-noir/)" Blanc de Noirs grape | types-of-wine/sparkling-wine, best-wines/best-prosecco, grapes/chardonnay |
| regions/barossa-valley | "[Syrah/Shiraz](/grapes/syrah-shiraz/)" Barossa Shiraz is the Australian benchmark; "[best full-bodied red wines](/best-wines/best-full-bodied-red-wines/)"; "[BBQ pairing](/food-wine-pairing/bbq-wine-pairing/)" | grapes/syrah-shiraz, best-wines/best-full-bodied-red-wines, food-wine-pairing/bbq-wine-pairing |

### Best-wines

Pattern logic: every grape-anchored or style-anchored listicle links to the grape page and the parent style hub; price-anchored listicles cross-link to the next price tier and to a beginner article; occasion listicles link to relevant style listicles.

| Slug | Contextual links | Related articles |
|---|---|---|
| best-wines/best-buttery-chardonnay | "[Chardonnay grape](/grapes/chardonnay/)"; "[Napa Valley](/regions/napa-valley/)"; "[best crisp white wines](/best-wines/best-crisp-white-wines/)" unoaked counterpart | grapes/chardonnay, best-wines/best-crisp-white-wines, regions/napa-valley |
| best-wines/best-crisp-white-wines | "[Sauvignon Blanc](/grapes/sauvignon-blanc/)"; "[Pinot Grigio](/grapes/pinot-grigio/)"; "[seafood pairing](/food-wine-pairing/seafood-wine-pairing/)"; "[best wine for summer](/best-wines/best-wine-for-summer/)" | grapes/sauvignon-blanc, best-wines/best-buttery-chardonnay, best-wines/best-cheap-white-wine |
| best-wines/best-dry-red-wines | "[Cabernet Sauvignon](/grapes/cabernet-sauvignon/)"; "[Tempranillo](/grapes/tempranillo/)"; "[red wine](/types-of-wine/red-wine/)" style hub; "[best full-bodied red wines](/best-wines/best-full-bodied-red-wines/)" | types-of-wine/red-wine, best-wines/best-full-bodied-red-wines, best-wines/best-light-red-wines |
| best-wines/best-full-bodied-red-wines | "[Cabernet Sauvignon](/grapes/cabernet-sauvignon/)"; "[Syrah/Shiraz](/grapes/syrah-shiraz/)"; "[Nebbiolo](/grapes/nebbiolo/)"; "[steak pairing](/food-wine-pairing/steak-wine-pairing/)" | grapes/cabernet-sauvignon, best-wines/best-dry-red-wines, food-wine-pairing/steak-wine-pairing |
| best-wines/best-light-red-wines | "[Pinot Noir](/grapes/pinot-noir/)"; "[Gamay](/grapes/gamay/)"; "[salmon pairing](/food-wine-pairing/seafood-wine-pairing/)" | grapes/pinot-noir, grapes/gamay, best-wines/best-red-wines-for-beginners |
| best-wines/best-red-wines-for-beginners | "[Merlot](/grapes/merlot/)"; "[Pinot Noir](/grapes/pinot-noir/)"; "[red wine guide](/types-of-wine/red-wine/)"; "[best wine for beginners](/best-wines/best-wine-for-beginners/)" | grapes/merlot, types-of-wine/red-wine, best-wines/best-wine-for-beginners |
| best-wines/best-white-wines-for-beginners | "[Chardonnay](/grapes/chardonnay/)"; "[Sauvignon Blanc](/grapes/sauvignon-blanc/)"; "[Pinot Grigio](/grapes/pinot-grigio/)"; "[white wine](/types-of-wine/white-wine/)" | types-of-wine/white-wine, best-wines/best-cheap-white-wine, best-wines/best-wine-for-beginners |
| best-wines/best-wine-for-beginners | "[best red wines for beginners](/best-wines/best-red-wines-for-beginners/)"; "[best white wines for beginners](/best-wines/best-white-wines-for-beginners/)"; "[how to taste wine](/wine-basics/how-to-taste-wine/)"; "[wine for beginners primer](/wine-basics/wine-for-beginners/)" the educational counterpart | best-wines/best-red-wines-for-beginners, best-wines/best-white-wines-for-beginners, wine-basics/wine-for-beginners |
| best-wines/best-cheap-red-wine | "[best red wine under $20](/best-wines/best-red-wine-under-20/)"; "[best wines under $15](/best-wines/best-wines-under-15/)"; "[Malbec](/grapes/malbec/)" value grape | best-wines/best-red-wine-under-20, best-wines/best-wines-under-15, best-wines/good-cheap-wine |
| best-wines/best-cheap-white-wine | "[best wines under $15](/best-wines/best-wines-under-15/)"; "[Pinot Grigio](/grapes/pinot-grigio/)"; "[best crisp white wines](/best-wines/best-crisp-white-wines/)" | best-wines/best-wines-under-15, best-wines/best-white-wines-for-beginners, best-wines/best-crisp-white-wines |
| best-wines/best-cheap-wine-that-tastes-expensive | "[wine buying guide](/wine-basics/wine-buying-guide/)"; "[best wines under $20](/best-wines/best-wines-under-20/)"; "[good cheap wine](/best-wines/good-cheap-wine/)" | best-wines/good-cheap-wine, best-wines/best-wines-under-20, wine-basics/wine-buying-guide |
| best-wines/good-cheap-wine | "[best wines under $15](/best-wines/best-wines-under-15/)"; "[best cheap red wine](/best-wines/best-cheap-red-wine/)"; "[best cheap white wine](/best-wines/best-cheap-white-wine/)" | best-wines/best-wines-under-15, best-wines/best-cheap-red-wine, best-wines/best-cheap-white-wine |
| best-wines/best-wines-under-15 | "[best wines under $20](/best-wines/best-wines-under-20/)" next tier; "[good cheap wine](/best-wines/good-cheap-wine/)"; "[wine buying guide](/wine-basics/wine-buying-guide/)" | best-wines/best-wines-under-20, best-wines/good-cheap-wine, best-wines/best-cheap-wine-that-tastes-expensive |
| best-wines/best-wines-under-20 | "[best wines under $15](/best-wines/best-wines-under-15/)"; "[best wines under $30](/best-wines/best-wines-under-30/)"; "[best red wine under $20](/best-wines/best-red-wine-under-20/)" | best-wines/best-wines-under-15, best-wines/best-wines-under-30, best-wines/best-red-wine-under-20 |
| best-wines/best-wines-under-30 | "[best wines under $20](/best-wines/best-wines-under-20/)"; "[wine buying guide](/wine-basics/wine-buying-guide/)" | best-wines/best-wines-under-20, wine-basics/wine-buying-guide, best-wines/best-cheap-wine-that-tastes-expensive |
| best-wines/best-red-wine-under-20 | "[Malbec](/grapes/malbec/)" value pick; "[Tempranillo](/grapes/tempranillo/)"; "[best wines under $20](/best-wines/best-wines-under-20/)" | best-wines/best-cheap-red-wine, best-wines/best-wines-under-20, grapes/malbec |
| best-wines/best-moscato-wine | "[Moscato grape](/grapes/moscato/)"; "[best sweet wines](/best-wines/best-sweet-wines/)"; "[chocolate pairing](/food-wine-pairing/chocolate-wine-pairing/)" | grapes/moscato, best-wines/best-sweet-wines, types-of-wine/dessert-wine |
| best-wines/best-sweet-wines | "[Moscato](/grapes/moscato/)"; "[Riesling](/grapes/riesling/)"; "[dessert wine](/types-of-wine/dessert-wine/)"; "[chocolate pairing](/food-wine-pairing/chocolate-wine-pairing/)" | types-of-wine/dessert-wine, best-wines/best-moscato-wine, best-wines/best-sweet-red-wine |
| best-wines/best-sweet-red-wine | "[Zinfandel](/grapes/zinfandel/)" (White Zin and off-dry); "[best sweet wines](/best-wines/best-sweet-wines/)"; "[chocolate pairing](/food-wine-pairing/chocolate-wine-pairing/)" | best-wines/best-sweet-wines, grapes/zinfandel, food-wine-pairing/chocolate-wine-pairing |
| best-wines/best-prosecco | "[sparkling wine](/types-of-wine/sparkling-wine/)" style hub; "[Italy wine guide](/regions/italy-wine-guide/)"; "[best wine for brunch](/best-wines/best-wine-for-brunch/)" | types-of-wine/sparkling-wine, regions/italy-wine-guide, best-wines/best-wine-for-brunch |
| best-wines/best-port-wine | "[fortified wine](/types-of-wine/fortified-wine/)" style hub; "[chocolate pairing](/food-wine-pairing/chocolate-wine-pairing/)"; "[best sweet wines](/best-wines/best-sweet-wines/)" | types-of-wine/fortified-wine, food-wine-pairing/chocolate-wine-pairing, best-wines/best-sweet-wines |
| best-wines/best-organic-wines | "[natural wine](/types-of-wine/natural-wine/)"; "[wine buying guide](/wine-basics/wine-buying-guide/)" | types-of-wine/natural-wine, wine-basics/wine-buying-guide, best-wines/best-non-alcoholic-wines |
| best-wines/best-non-alcoholic-wines | "[best wine for non-wine drinkers](/best-wines/best-wine-for-non-wine-drinkers/)"; "[best wine for beginners](/best-wines/best-wine-for-beginners/)" | best-wines/best-wine-for-non-wine-drinkers, best-wines/best-wine-for-beginners, best-wines/best-organic-wines |
| best-wines/best-wine-for-non-wine-drinkers | "[best Moscato wine](/best-wines/best-moscato-wine/)"; "[best sweet wines](/best-wines/best-sweet-wines/)"; "[best non-alcoholic wines](/best-wines/best-non-alcoholic-wines/)" | best-wines/best-moscato-wine, best-wines/best-sweet-wines, best-wines/best-non-alcoholic-wines |
| best-wines/best-wine-for-cooking | "[best wine for sangria](/best-wines/best-wine-for-sangria/)"; "[best wine for mulled wine](/best-wines/best-wine-for-mulled-wine/)"; "[wine buying guide](/wine-basics/wine-buying-guide/)" | best-wines/best-wine-for-sangria, best-wines/best-wine-for-mulled-wine, wine-basics/wine-buying-guide |
| best-wines/best-wine-for-sangria | "[Grenache](/grapes/grenache/)" Garnacha base; "[best wine for cooking](/best-wines/best-wine-for-cooking/)"; "[best wine for summer](/best-wines/best-wine-for-summer/)" | grapes/grenache, best-wines/best-wine-for-cooking, best-wines/best-wine-for-summer |
| best-wines/best-wine-for-mulled-wine | "[best wine for cooking](/best-wines/best-wine-for-cooking/)"; "[best wine for winter](/best-wines/best-wine-for-winter/)"; "[best wines for Christmas](/best-wines/best-wines-for-christmas/)" | best-wines/best-wine-for-cooking, best-wines/best-wine-for-winter, best-wines/best-wines-for-christmas |
| best-wines/best-wine-for-brunch | "[best Prosecco](/best-wines/best-prosecco/)"; "[sparkling wine](/types-of-wine/sparkling-wine/)"; "[chicken pairing](/food-wine-pairing/chicken-wine-pairing/)" | best-wines/best-prosecco, types-of-wine/sparkling-wine, food-wine-pairing/chicken-wine-pairing |
| best-wines/best-wine-for-date-night | "[best wines for Valentine's Day](/best-wines/best-wines-for-valentines-day/)"; "[best wine for dinner party](/best-wines/best-wine-for-dinner-party/)"; "[best dry red wines](/best-wines/best-dry-red-wines/)" | best-wines/best-wines-for-valentines-day, best-wines/best-wine-for-dinner-party, best-wines/best-dry-red-wines |
| best-wines/best-wine-for-dinner-party | "[best wines under $30](/best-wines/best-wines-under-30/)"; "[best wines for a wedding](/best-wines/best-wines-for-a-wedding/)"; "[wine pairing chart](/food-wine-pairing/wine-pairing-chart/)" | best-wines/best-wines-under-30, food-wine-pairing/wine-pairing-chart, best-wines/best-wine-for-date-night |
| best-wines/best-wine-for-summer | "[rosé wine](/types-of-wine/rose-wine/)"; "[best crisp white wines](/best-wines/best-crisp-white-wines/)"; "[best wines for a picnic](/best-wines/best-wines-for-a-picnic/)" | types-of-wine/rose-wine, best-wines/best-crisp-white-wines, best-wines/best-wines-for-a-picnic |
| best-wines/best-wine-for-winter | "[best full-bodied red wines](/best-wines/best-full-bodied-red-wines/)"; "[best wine for mulled wine](/best-wines/best-wine-for-mulled-wine/)"; "[best port wine](/best-wines/best-port-wine/)" | best-wines/best-full-bodied-red-wines, best-wines/best-wine-for-mulled-wine, best-wines/best-port-wine |
| best-wines/best-wines-for-christmas | "[best wine for mulled wine](/best-wines/best-wine-for-mulled-wine/)"; "[Thanksgiving pairing](/food-wine-pairing/thanksgiving-wine-pairing/)"; "[best port wine](/best-wines/best-port-wine/)"; "[best wine advent calendar](/gift-guides/best-wine-advent-calendar/)" the December run-up gift | best-wines/best-wine-for-mulled-wine, gift-guides/best-wine-advent-calendar, best-wines/best-port-wine |
| best-wines/best-wines-for-valentines-day | "[best wine for date night](/best-wines/best-wine-for-date-night/)"; "[chocolate pairing](/food-wine-pairing/chocolate-wine-pairing/)"; "[best Prosecco](/best-wines/best-prosecco/)"; "[best wines for Mother's Day](/best-wines/best-wines-for-mothers-day/)" adjacent gifting occasion | best-wines/best-wine-for-date-night, food-wine-pairing/chocolate-wine-pairing, best-wines/best-wines-for-mothers-day |
| best-wines/best-wines-for-mothers-day | "[best Moscato wine](/best-wines/best-moscato-wine/)"; "[best Prosecco](/best-wines/best-prosecco/)"; "[wine gifts for her](/gift-guides/wine-gifts-for-her/)" | best-wines/best-prosecco, best-wines/best-moscato-wine, gift-guides/wine-gifts-for-her |
| best-wines/best-wines-for-a-wedding | "[best Prosecco](/best-wines/best-prosecco/)"; "[best wines under $20](/best-wines/best-wines-under-20/)"; "[best wine for dinner party](/best-wines/best-wine-for-dinner-party/)"; "[best wines for a housewarming](/best-wines/best-wines-for-a-housewarming/)" same gifting bracket | best-wines/best-prosecco, best-wines/best-wines-under-20, best-wines/best-wines-for-a-housewarming |
| best-wines/best-wines-for-a-picnic | "[best wine for summer](/best-wines/best-wine-for-summer/)"; "[rosé wine](/types-of-wine/rose-wine/)"; "[best wines for camping](/best-wines/best-wines-for-camping/)" | best-wines/best-wine-for-summer, types-of-wine/rose-wine, best-wines/best-wines-for-camping |
| best-wines/best-wines-for-camping | "[best wines for a picnic](/best-wines/best-wines-for-a-picnic/)"; "[best wine for summer](/best-wines/best-wine-for-summer/)" | best-wines/best-wines-for-a-picnic, best-wines/best-wine-for-summer, best-wines/best-grocery-store-wine |
| best-wines/best-wines-for-a-housewarming | "[best wines under $20](/best-wines/best-wines-under-20/)"; "[wine gifts under $25](/gift-guides/wine-gifts-under-25/)"; "[best Prosecco](/best-wines/best-prosecco/)" | best-wines/best-wines-under-20, gift-guides/wine-gifts-under-25, best-wines/best-prosecco |
| best-wines/best-grocery-store-wine | "[best wines under $15](/best-wines/best-wines-under-15/)"; "[good cheap wine](/best-wines/good-cheap-wine/)"; "[wine buying guide](/wine-basics/wine-buying-guide/)" | best-wines/best-wines-under-15, best-wines/good-cheap-wine, wine-basics/wine-buying-guide |

### Types-of-wine (12)

Hub-style articles. Each links to its anchor grapes, the canonical BOFU listicle, and one or two pairing articles where the style is the answer.

| Slug | Contextual links | Related articles |
|---|---|---|
| types-of-wine/red-wine | "[Cabernet Sauvignon](/grapes/cabernet-sauvignon/)", "[Pinot Noir](/grapes/pinot-noir/)", "[Merlot](/grapes/merlot/)"; "[best red wines for beginners](/best-wines/best-red-wines-for-beginners/)"; "[red vs white wine](/types-of-wine/red-vs-white-wine/)" | best-wines/best-red-wines-for-beginners, best-wines/best-dry-red-wines, types-of-wine/red-vs-white-wine |
| types-of-wine/white-wine | "[Chardonnay](/grapes/chardonnay/)", "[Sauvignon Blanc](/grapes/sauvignon-blanc/)", "[Riesling](/grapes/riesling/)"; "[best white wines for beginners](/best-wines/best-white-wines-for-beginners/)"; "[best crisp white wines](/best-wines/best-crisp-white-wines/)" | grapes/chardonnay, best-wines/best-white-wines-for-beginners, types-of-wine/red-vs-white-wine |
| types-of-wine/rose-wine | "[Provence](/regions/provence/)"; "[Grenache](/grapes/grenache/)"; "[best wine for summer](/best-wines/best-wine-for-summer/)" | regions/provence, best-wines/best-wine-for-summer, grapes/grenache |
| types-of-wine/sparkling-wine | "[best Prosecco](/best-wines/best-prosecco/)"; "[best wine for brunch](/best-wines/best-wine-for-brunch/)"; "[Champagne (France guide)](/regions/france-wine-guide/)" | best-wines/best-prosecco, best-wines/best-wine-for-brunch, regions/france-wine-guide |
| types-of-wine/dessert-wine | "[Moscato](/grapes/moscato/)"; "[best sweet wines](/best-wines/best-sweet-wines/)"; "[chocolate pairing](/food-wine-pairing/chocolate-wine-pairing/)"; "[fortified wine](/types-of-wine/fortified-wine/)" | best-wines/best-sweet-wines, types-of-wine/fortified-wine, grapes/moscato |
| types-of-wine/fortified-wine | "[best port wine](/best-wines/best-port-wine/)"; "[Sherry (Spain via Rioja guide)](/regions/rioja/)"; "[chocolate pairing](/food-wine-pairing/chocolate-wine-pairing/)" | best-wines/best-port-wine, types-of-wine/dessert-wine, food-wine-pairing/chocolate-wine-pairing |
| types-of-wine/dry-vs-sweet-wine | "[Riesling](/grapes/riesling/)" runs the spectrum; "[Chenin Blanc](/grapes/chenin-blanc/)"; "[best sweet wines](/best-wines/best-sweet-wines/)" | grapes/riesling, best-wines/best-sweet-wines, types-of-wine/dessert-wine |
| types-of-wine/red-vs-white-wine | "[red wine](/types-of-wine/red-wine/)"; "[white wine](/types-of-wine/white-wine/)"; "[best wine for beginners](/best-wines/best-wine-for-beginners/)"; "[types of wine overview](/types-of-wine/types-of-wine/)" the full taxonomy | types-of-wine/red-wine, types-of-wine/white-wine, types-of-wine/types-of-wine |
| types-of-wine/orange-wine | "[natural wine](/types-of-wine/natural-wine/)"; "[Italy wine guide](/regions/italy-wine-guide/)" Friuli home; "[Pinot Grigio](/grapes/pinot-grigio/)" surprising orange-style overlap | types-of-wine/natural-wine, regions/italy-wine-guide, types-of-wine/wine-blends-explained |
| types-of-wine/natural-wine | "[orange wine](/types-of-wine/orange-wine/)"; "[best organic wines](/best-wines/best-organic-wines/)" | types-of-wine/orange-wine, best-wines/best-organic-wines, wine-basics/wine-buying-guide |
| types-of-wine/wine-blends-explained | "[Cabernet Franc](/grapes/cabernet-franc/)" (Bordeaux blends); "[Grenache](/grapes/grenache/)" (GSM); "[Tuscany](/regions/tuscany/)" (Super-Tuscans) | grapes/cabernet-franc, grapes/grenache, regions/tuscany |
| types-of-wine/types-of-wine | Spoke to all 11 sibling articles in this folder. | types-of-wine/red-wine, types-of-wine/white-wine, types-of-wine/sparkling-wine |

### Food-wine-pairing (13)

Every article reciprocates with the master `wine-pairing-chart` and links out to the two or three grapes that solve the pairing.

| Slug | Contextual links | Related articles |
|---|---|---|
| food-wine-pairing/wine-pairing-chart | Body links to every individual pairing article (the chart is the master index). Plus "[red wine](/types-of-wine/red-wine/)" and "[white wine](/types-of-wine/white-wine/)" hubs. | food-wine-pairing/steak-wine-pairing, food-wine-pairing/seafood-wine-pairing, food-wine-pairing/chicken-wine-pairing |
| food-wine-pairing/steak-wine-pairing | "[Cabernet Sauvignon](/grapes/cabernet-sauvignon/)"; "[Malbec](/grapes/malbec/)"; "[Syrah/Shiraz](/grapes/syrah-shiraz/)"; "[best full-bodied red wines](/best-wines/best-full-bodied-red-wines/)" | grapes/cabernet-sauvignon, grapes/malbec, best-wines/best-full-bodied-red-wines |
| food-wine-pairing/seafood-wine-pairing | "[Sauvignon Blanc](/grapes/sauvignon-blanc/)"; "[Pinot Grigio](/grapes/pinot-grigio/)"; "[Pinot Noir](/grapes/pinot-noir/)" for salmon; "[best crisp white wines](/best-wines/best-crisp-white-wines/)" | grapes/sauvignon-blanc, food-wine-pairing/sushi-wine-pairing, food-wine-pairing/wine-pairing-chart |
| food-wine-pairing/sushi-wine-pairing | "[Riesling](/grapes/riesling/)"; "[sparkling wine](/types-of-wine/sparkling-wine/)"; "[seafood pairing](/food-wine-pairing/seafood-wine-pairing/)" | grapes/riesling, food-wine-pairing/seafood-wine-pairing, food-wine-pairing/thai-food-wine-pairing |
| food-wine-pairing/chicken-wine-pairing | "[Chardonnay](/grapes/chardonnay/)"; "[Pinot Noir](/grapes/pinot-noir/)"; "[Chenin Blanc](/grapes/chenin-blanc/)" | grapes/chardonnay, grapes/pinot-noir, food-wine-pairing/wine-pairing-chart |
| food-wine-pairing/pasta-wine-pairing | "[Sangiovese](/grapes/sangiovese/)" for tomato-based; "[Nebbiolo](/grapes/nebbiolo/)" for ragù; "[pizza pairing](/food-wine-pairing/pizza-wine-pairing/)" | grapes/sangiovese, food-wine-pairing/pizza-wine-pairing, regions/italy-wine-guide |
| food-wine-pairing/pizza-wine-pairing | "[Sangiovese](/grapes/sangiovese/)"; "[Zinfandel](/grapes/zinfandel/)"; "[pasta pairing](/food-wine-pairing/pasta-wine-pairing/)" | grapes/sangiovese, grapes/zinfandel, food-wine-pairing/pasta-wine-pairing |
| food-wine-pairing/bbq-wine-pairing | "[Syrah/Shiraz](/grapes/syrah-shiraz/)"; "[Zinfandel](/grapes/zinfandel/)"; "[Tempranillo](/grapes/tempranillo/)"; "[Mexican food pairing](/food-wine-pairing/mexican-food-wine-pairing/)" smoke and chile overlap; "[best full-bodied red wines](/best-wines/best-full-bodied-red-wines/)" | grapes/syrah-shiraz, food-wine-pairing/mexican-food-wine-pairing, food-wine-pairing/steak-wine-pairing |
| food-wine-pairing/thai-food-wine-pairing | "[Riesling](/grapes/riesling/)"; "[Gewürztraminer](/grapes/gewurztraminer/)"; "[Indian food pairing](/food-wine-pairing/indian-food-wine-pairing/)" | grapes/riesling, grapes/gewurztraminer, food-wine-pairing/indian-food-wine-pairing |
| food-wine-pairing/indian-food-wine-pairing | "[Riesling](/grapes/riesling/)"; "[Gewürztraminer](/grapes/gewurztraminer/)"; "[Thai food pairing](/food-wine-pairing/thai-food-wine-pairing/)" | grapes/riesling, grapes/gewurztraminer, food-wine-pairing/thai-food-wine-pairing |
| food-wine-pairing/mexican-food-wine-pairing | "[Tempranillo](/grapes/tempranillo/)"; "[Riesling](/grapes/riesling/)" for spice; "[Grenache](/grapes/grenache/)" | grapes/tempranillo, grapes/riesling, food-wine-pairing/bbq-wine-pairing |
| food-wine-pairing/chocolate-wine-pairing | "[best port wine](/best-wines/best-port-wine/)"; "[fortified wine](/types-of-wine/fortified-wine/)"; "[Zinfandel](/grapes/zinfandel/)"; "[best sweet wines](/best-wines/best-sweet-wines/)" | best-wines/best-port-wine, types-of-wine/fortified-wine, best-wines/best-sweet-wines |
| food-wine-pairing/thanksgiving-wine-pairing | "[Pinot Noir](/grapes/pinot-noir/)"; "[Gamay](/grapes/gamay/)" Beaujolais Nouveau; "[Riesling](/grapes/riesling/)"; "[chicken pairing](/food-wine-pairing/chicken-wine-pairing/)" | grapes/pinot-noir, grapes/gamay, best-wines/best-wines-for-christmas |

### Pairing (1)

| Slug | Contextual links | Related articles |
|---|---|---|
| pairing/wine-and-cheese-pairing | "[Sauvignon Blanc](/grapes/sauvignon-blanc/)" goat cheese; "[Cabernet Sauvignon](/grapes/cabernet-sauvignon/)" aged cheddar; "[best port wine](/best-wines/best-port-wine/)" Stilton; "[wine pairing chart](/food-wine-pairing/wine-pairing-chart/)" | food-wine-pairing/wine-pairing-chart, best-wines/best-port-wine, grapes/sauvignon-blanc |

### Wine-tools (13)

Tool articles cluster around three sub-themes: openers, storage, and serving. They cross-link inside the cluster. Out-of-cluster links go only to articles where the tool genuinely improves the wine described.

| Slug | Contextual links | Related articles |
|---|---|---|
| wine-tools/best-wine-opener | "[best electric wine opener](/wine-tools/best-electric-wine-opener/)"; "[best wine tools and accessories](/wine-tools/best-wine-tools-and-accessories/)" | wine-tools/best-electric-wine-opener, wine-tools/best-wine-tools-and-accessories, wine-tools/best-wine-stopper |
| wine-tools/best-electric-wine-opener | "[best wine opener](/wine-tools/best-wine-opener/)"; "[best wine stopper](/wine-tools/best-wine-stopper/)" | wine-tools/best-wine-opener, wine-tools/best-wine-stopper, wine-tools/best-wine-tools-and-accessories |
| wine-tools/best-wine-stopper | "[best wine preservation system](/wine-tools/best-wine-preservation-system/)"; "[best wine opener](/wine-tools/best-wine-opener/)" | wine-tools/best-wine-preservation-system, wine-tools/best-wine-opener, wine-tools/best-wine-tools-and-accessories |
| wine-tools/best-wine-preservation-system | "[best wine stopper](/wine-tools/best-wine-stopper/)"; "[wine fridge vs regular fridge](/compare/wine-fridge-vs-regular-fridge/)" | wine-tools/best-wine-stopper, wine-tools/best-wine-fridge, compare/wine-fridge-vs-regular-fridge |
| wine-tools/best-wine-glasses | "[best wine decanter](/wine-tools/best-wine-decanter/)"; "[wine tasting kit](/wine-tools/wine-tasting-kit/)"; "[how to taste wine](/wine-basics/how-to-taste-wine/)" | wine-tools/best-wine-decanter, wine-basics/how-to-taste-wine, wine-tools/wine-tasting-kit |
| wine-tools/best-wine-decanter | "[decanter vs aerator](/compare/decanter-vs-aerator/)"; "[best wine aerator](/wine-tools/best-wine-aerator/)"; "[best wine glasses](/wine-tools/best-wine-glasses/)" | compare/decanter-vs-aerator, wine-tools/best-wine-aerator, wine-tools/best-wine-glasses |
| wine-tools/best-wine-aerator | "[decanter vs aerator](/compare/decanter-vs-aerator/)"; "[best wine decanter](/wine-tools/best-wine-decanter/)" | compare/decanter-vs-aerator, wine-tools/best-wine-decanter, wine-tools/best-wine-glasses |
| wine-tools/best-wine-fridge | "[best wine chillers](/wine-tools/best-wine-chillers/)"; "[wine fridge vs regular fridge](/compare/wine-fridge-vs-regular-fridge/)"; "[best wine rack](/wine-tools/best-wine-rack/)" | compare/wine-fridge-vs-regular-fridge, wine-tools/best-wine-chillers, wine-tools/best-wine-rack |
| wine-tools/best-wine-chillers | "[best wine fridge](/wine-tools/best-wine-fridge/)"; "[best wine for summer](/best-wines/best-wine-for-summer/)" | wine-tools/best-wine-fridge, best-wines/best-wine-for-summer, wine-tools/best-wine-rack |
| wine-tools/best-wine-rack | "[best wine fridge](/wine-tools/best-wine-fridge/)"; "[best wine preservation system](/wine-tools/best-wine-preservation-system/)" | wine-tools/best-wine-fridge, wine-tools/best-wine-preservation-system, wine-tools/best-wine-tools-and-accessories |
| wine-tools/wine-bag | "[best wines for a picnic](/best-wines/best-wines-for-a-picnic/)"; "[best wines for camping](/best-wines/best-wines-for-camping/)"; "[wine gifts under $25](/gift-guides/wine-gifts-under-25/)" | best-wines/best-wines-for-a-picnic, best-wines/best-wines-for-camping, gift-guides/wine-gifts-under-25 |
| wine-tools/wine-tasting-kit | "[how to taste wine](/wine-basics/how-to-taste-wine/)"; "[best wine glasses](/wine-tools/best-wine-glasses/)"; "[wine gifts under $50](/gift-guides/wine-gifts-under-50/)" | wine-basics/how-to-taste-wine, wine-tools/best-wine-glasses, gift-guides/wine-gifts-under-50 |
| wine-tools/best-wine-tools-and-accessories | Hub-spokes: "[best wine opener](/wine-tools/best-wine-opener/)", "[best wine decanter](/wine-tools/best-wine-decanter/)", "[best wine glasses](/wine-tools/best-wine-glasses/)", "[best wine stopper](/wine-tools/best-wine-stopper/)" | wine-tools/best-wine-opener, wine-tools/best-wine-glasses, wine-tools/best-wine-decanter |

### Compare (2)

| Slug | Contextual links | Related articles |
|---|---|---|
| compare/decanter-vs-aerator | "[best wine decanter](/wine-tools/best-wine-decanter/)"; "[best wine aerator](/wine-tools/best-wine-aerator/)" | wine-tools/best-wine-decanter, wine-tools/best-wine-aerator, wine-tools/best-wine-glasses |
| compare/wine-fridge-vs-regular-fridge | "[best wine fridge](/wine-tools/best-wine-fridge/)"; "[best wine chillers](/wine-tools/best-wine-chillers/)"; "[best wine preservation system](/wine-tools/best-wine-preservation-system/)" | wine-tools/best-wine-fridge, wine-tools/best-wine-chillers, wine-tools/best-wine-preservation-system |

### Gift-guides (7)

| Slug | Contextual links | Related articles |
|---|---|---|
| gift-guides/wine-gifts-for-her | "[best Moscato wine](/best-wines/best-moscato-wine/)"; "[best Prosecco](/best-wines/best-prosecco/)"; "[wine gifts under $50](/gift-guides/wine-gifts-under-50/)"; "[wine gifts for him](/gift-guides/wine-gifts-for-him/)" the counterpart guide | gift-guides/wine-gifts-under-50, gift-guides/wine-gifts-for-him, gift-guides/wine-lover-gift-basket-ideas |
| gift-guides/wine-gifts-for-him | "[best port wine](/best-wines/best-port-wine/)"; "[best wine opener](/wine-tools/best-wine-opener/)"; "[wine gifts under $50](/gift-guides/wine-gifts-under-50/)" | gift-guides/wine-gifts-under-50, wine-tools/best-wine-opener, best-wines/best-port-wine |
| gift-guides/wine-gifts-under-25 | "[wine bag](/wine-tools/wine-bag/)"; "[best wine stopper](/wine-tools/best-wine-stopper/)"; "[wine gifts under $50](/gift-guides/wine-gifts-under-50/)" | gift-guides/wine-gifts-under-50, wine-tools/best-wine-stopper, gift-guides/wine-lover-gift-basket-ideas |
| gift-guides/wine-gifts-under-50 | "[wine tasting kit](/wine-tools/wine-tasting-kit/)"; "[best wine decanter](/wine-tools/best-wine-decanter/)"; "[best wine glasses](/wine-tools/best-wine-glasses/)" | wine-tools/wine-tasting-kit, wine-tools/best-wine-decanter, gift-guides/wine-gifts-under-25 |
| gift-guides/wine-lover-gift-basket-ideas | "[wine gifts under $50](/gift-guides/wine-gifts-under-50/)"; "[wine bag](/wine-tools/wine-bag/)"; "[best wine books](/gift-guides/best-wine-books/)" | gift-guides/wine-gifts-under-50, gift-guides/best-wine-books, wine-tools/wine-tasting-kit |
| gift-guides/best-wine-advent-calendar | "[best wines for Christmas](/best-wines/best-wines-for-christmas/)"; "[wine gifts under $50](/gift-guides/wine-gifts-under-50/)" | best-wines/best-wines-for-christmas, gift-guides/wine-gifts-under-50, gift-guides/wine-lover-gift-basket-ideas |
| gift-guides/best-wine-books | "[how to taste wine](/wine-basics/how-to-taste-wine/)"; "[wine buying guide](/wine-basics/wine-buying-guide/)"; "[wine lover gift basket ideas](/gift-guides/wine-lover-gift-basket-ideas/)" | wine-basics/how-to-taste-wine, wine-basics/wine-buying-guide, gift-guides/wine-lover-gift-basket-ideas |

### Products (2)

Two info-product landing pages live in the `products` collection. They should pull traffic from high-intent informational and pairing pages, not be linked from every article.

| Slug | Contextual links | Related articles |
|---|---|---|
| products/free-pairing-cheat-sheet | "[wine pairing chart](/food-wine-pairing/wine-pairing-chart/)" the free deeper version; "[wine for beginners](/wine-basics/wine-for-beginners/)"; "[how to taste wine](/wine-basics/how-to-taste-wine/)" | food-wine-pairing/wine-pairing-chart, wine-basics/wine-for-beginners, products/wine-confident-course |
| products/wine-confident-course | "[wine for beginners](/wine-basics/wine-for-beginners/)"; "[how to taste wine](/wine-basics/how-to-taste-wine/)"; "[best wine for beginners](/best-wines/best-wine-for-beginners/)" | wine-basics/wine-for-beginners, wine-basics/how-to-taste-wine, products/free-pairing-cheat-sheet |

**Inbound traffic for products:** add a soft CTA to `/products/free-pairing-cheat-sheet/` from the `wine-pairing-chart` page and from each individual food-wine-pairing article (e.g. footer card "Want this as a printable cheat sheet?"). Add a soft CTA to `/products/wine-confident-course/` from `wine-basics/wine-for-beginners`, `best-wines/best-wine-for-beginners`, and `wine-basics/how-to-taste-wine`. Don't link products from every article: keep the funnel intent-tight.

### Wine-basics (22)

Wine-basics is the TOFU on-ramp hub. Each article is grouped into one of six clusters: tasting/sensory, service/etiquette, labels/buying, storage/preservation, production/style, and health/nutrition. Articles cross-link inside their cluster first, then out to the grape, region, or listicle that exemplifies the concept.

| Slug | Contextual links | Related articles |
|---|---|---|
| wine-basics/how-to-taste-wine | "[tannins explained](/wine-basics/tannins-in-wine-explained/)"; "[wine acidity](/wine-basics/wine-acidity-explained/)"; "[wine body](/wine-basics/wine-body-explained/)"; "[best wine glasses](/wine-tools/best-wine-glasses/)" the right glass changes the read | wine-basics/tannins-in-wine-explained, wine-basics/wine-acidity-explained, wine-tools/wine-tasting-kit |
| wine-basics/tannins-in-wine-explained | "[how to taste wine](/wine-basics/how-to-taste-wine/)" tannin sits in the structure pillar; "[Cabernet Sauvignon](/grapes/cabernet-sauvignon/)" tannic benchmark; "[Nebbiolo](/grapes/nebbiolo/)" the high-tannin extreme; "[steak pairing](/food-wine-pairing/steak-wine-pairing/)" tannin's natural foil | wine-basics/wine-acidity-explained, wine-basics/wine-body-explained, grapes/cabernet-sauvignon |
| wine-basics/wine-acidity-explained | "[how to taste wine](/wine-basics/how-to-taste-wine/)"; "[Sauvignon Blanc](/grapes/sauvignon-blanc/)" high-acid benchmark; "[Riesling](/grapes/riesling/)" acid keeps it from feeling sweet; "[seafood pairing](/food-wine-pairing/seafood-wine-pairing/)" acid is the food bridge | wine-basics/tannins-in-wine-explained, wine-basics/wine-body-explained, grapes/riesling |
| wine-basics/wine-body-explained | "[how to taste wine](/wine-basics/how-to-taste-wine/)"; "[best full-bodied red wines](/best-wines/best-full-bodied-red-wines/)"; "[best light red wines](/best-wines/best-light-red-wines/)"; "[best crisp white wines](/best-wines/best-crisp-white-wines/)" | wine-basics/tannins-in-wine-explained, wine-basics/wine-acidity-explained, best-wines/best-full-bodied-red-wines |
| wine-basics/wine-sweetness-scale | "[dry vs sweet wine](/types-of-wine/dry-vs-sweet-wine/)"; "[Riesling](/grapes/riesling/)" runs the full spectrum; "[best sweet wines](/best-wines/best-sweet-wines/)"; "[Moscato](/grapes/moscato/)" canonical sweet | types-of-wine/dry-vs-sweet-wine, best-wines/best-sweet-wines, grapes/riesling |
| wine-basics/wine-faults-and-flaws | "[how to taste wine](/wine-basics/how-to-taste-wine/)" faults are the inverse of a clean read; "[wine etiquette](/wine-basics/wine-etiquette/)" sending a bottle back; "[how to order wine at a restaurant](/wine-basics/how-to-order-wine-at-restaurant/)" the cork sniff moment | wine-basics/how-to-taste-wine, wine-basics/wine-etiquette, wine-basics/how-to-order-wine-at-restaurant |
| wine-basics/how-to-hold-a-wine-glass | "[best wine glasses](/wine-tools/best-wine-glasses/)"; "[how to taste wine](/wine-basics/how-to-taste-wine/)"; "[wine etiquette](/wine-basics/wine-etiquette/)" | wine-basics/wine-etiquette, wine-tools/best-wine-glasses, wine-basics/how-to-taste-wine |
| wine-basics/wine-etiquette | "[how to hold a wine glass](/wine-basics/how-to-hold-a-wine-glass/)"; "[how to order wine at a restaurant](/wine-basics/how-to-order-wine-at-restaurant/)"; "[wine serving temperature guide](/wine-basics/wine-serving-temperature-guide/)" | wine-basics/how-to-hold-a-wine-glass, wine-basics/how-to-order-wine-at-restaurant, wine-basics/wine-serving-temperature-guide |
| wine-basics/how-to-order-wine-at-restaurant | "[how to read wine labels](/wine-basics/how-to-read-wine-labels/)"; "[wine etiquette](/wine-basics/wine-etiquette/)"; "[wine faults and flaws](/wine-basics/wine-faults-and-flaws/)" what to do if the bottle's off; "[wine pairing chart](/food-wine-pairing/wine-pairing-chart/)" | wine-basics/wine-etiquette, wine-basics/how-to-read-wine-labels, food-wine-pairing/wine-pairing-chart |
| wine-basics/wine-serving-temperature-guide | "[best wine chillers](/wine-tools/best-wine-chillers/)"; "[best wine fridge](/wine-tools/best-wine-fridge/)"; "[wine storage tips](/wine-basics/wine-storage-tips/)" | wine-tools/best-wine-chillers, wine-basics/wine-storage-tips, wine-tools/best-wine-fridge |
| wine-basics/how-to-read-wine-labels | "[old world vs new world wine](/wine-basics/old-world-vs-new-world-wine/)" labels read differently across the divide; "[wine buying guide](/wine-basics/wine-buying-guide/)"; "[Rioja](/regions/rioja/)" ageing tiers as a label exercise; "[France wine guide](/regions/france-wine-guide/)" | wine-basics/wine-buying-guide, wine-basics/old-world-vs-new-world-wine, regions/france-wine-guide |
| wine-basics/wine-buying-guide | "[how to read wine labels](/wine-basics/how-to-read-wine-labels/)"; "[best cheap wine that tastes expensive](/best-wines/best-cheap-wine-that-tastes-expensive/)"; "[best grocery store wine](/best-wines/best-grocery-store-wine/)"; "[best wines under $20](/best-wines/best-wines-under-20/)" | wine-basics/how-to-read-wine-labels, best-wines/best-cheap-wine-that-tastes-expensive, best-wines/best-grocery-store-wine |
| wine-basics/wine-for-beginners | "[how to taste wine](/wine-basics/how-to-taste-wine/)"; "[red vs white wine](/types-of-wine/red-vs-white-wine/)"; "[best wine for beginners](/best-wines/best-wine-for-beginners/)" the buyer's version; "[best red wines for beginners](/best-wines/best-red-wines-for-beginners/)" | best-wines/best-wine-for-beginners, wine-basics/how-to-taste-wine, types-of-wine/red-vs-white-wine |
| wine-basics/wine-storage-tips | "[wine serving temperature guide](/wine-basics/wine-serving-temperature-guide/)"; "[best wine fridge](/wine-tools/best-wine-fridge/)"; "[best wine rack](/wine-tools/best-wine-rack/)"; "[how long does wine last after opening](/wine-basics/how-long-does-wine-last-after-opening/)" | wine-tools/best-wine-fridge, wine-basics/how-long-does-wine-last-after-opening, wine-tools/best-wine-rack |
| wine-basics/how-long-does-wine-last-after-opening | "[best wine preservation system](/wine-tools/best-wine-preservation-system/)"; "[best wine stopper](/wine-tools/best-wine-stopper/)"; "[wine storage tips](/wine-basics/wine-storage-tips/)" | wine-tools/best-wine-preservation-system, wine-tools/best-wine-stopper, wine-basics/wine-storage-tips |
| wine-basics/how-wine-is-made | "[old world vs new world wine](/wine-basics/old-world-vs-new-world-wine/)" production tradition; "[organic vs natural vs biodynamic wine](/wine-basics/organic-vs-natural-vs-biodynamic-wine/)"; "[wine blends explained](/types-of-wine/wine-blends-explained/)"; "[sulfites in wine](/wine-basics/sulfites-in-wine/)" | wine-basics/old-world-vs-new-world-wine, wine-basics/organic-vs-natural-vs-biodynamic-wine, types-of-wine/wine-blends-explained |
| wine-basics/old-world-vs-new-world-wine | "[how to read wine labels](/wine-basics/how-to-read-wine-labels/)"; "[France wine guide](/regions/france-wine-guide/)" old world anchor; "[Napa Valley](/regions/napa-valley/)" new world anchor; "[how wine is made](/wine-basics/how-wine-is-made/)" | regions/france-wine-guide, regions/napa-valley, wine-basics/how-to-read-wine-labels |
| wine-basics/organic-vs-natural-vs-biodynamic-wine | "[natural wine](/types-of-wine/natural-wine/)"; "[orange wine](/types-of-wine/orange-wine/)"; "[best organic wines](/best-wines/best-organic-wines/)"; "[sulfites in wine](/wine-basics/sulfites-in-wine/)" | types-of-wine/natural-wine, best-wines/best-organic-wines, wine-basics/sulfites-in-wine |
| wine-basics/sulfites-in-wine | "[organic vs natural vs biodynamic wine](/wine-basics/organic-vs-natural-vs-biodynamic-wine/)"; "[natural wine](/types-of-wine/natural-wine/)"; "[wine faults and flaws](/wine-basics/wine-faults-and-flaws/)" sulfite role in stability | wine-basics/organic-vs-natural-vs-biodynamic-wine, types-of-wine/natural-wine, best-wines/best-organic-wines |
| wine-basics/calories-in-wine | "[wine vs beer calories](/wine-basics/wine-vs-beer-calories/)"; "[wine sweetness scale](/wine-basics/wine-sweetness-scale/)" residual sugar drives calories; "[is red wine good for you](/wine-basics/is-red-wine-good-for-you/)" | wine-basics/wine-vs-beer-calories, wine-basics/is-red-wine-good-for-you, wine-basics/wine-sweetness-scale |
| wine-basics/is-red-wine-good-for-you | "[calories in wine](/wine-basics/calories-in-wine/)"; "[best red wines for beginners](/best-wines/best-red-wines-for-beginners/)"; "[best dry red wines](/best-wines/best-dry-red-wines/)" | wine-basics/calories-in-wine, best-wines/best-red-wines-for-beginners, wine-basics/wine-vs-beer-calories |
| wine-basics/wine-vs-beer-calories | "[calories in wine](/wine-basics/calories-in-wine/)"; "[is red wine good for you](/wine-basics/is-red-wine-good-for-you/)" | wine-basics/calories-in-wine, wine-basics/is-red-wine-good-for-you, wine-basics/wine-sweetness-scale |

---

## 4. Component Wiring Tasks

Breadcrumbs and RelatedArticles are already wired in `src/layouts/ArticleLayout.astro` (Breadcrumbs near line 60, RelatedArticles around lines 128-133).

- **No layout changes needed.** Component-level integration is done.
- **The actual gap is content.** Most articles ship with `relatedArticles: []`. Implementation work is populating each article's `relatedArticles` frontmatter with the slugs in the right-most column above, and adding the contextual links into body prose during a copy edit pass.
- **Optional polish.** Breadcrumb label uses `category.replace(/-/g, ' ')` which yields "Food Wine Pairing" for `food-wine-pairing`. Acceptable, but a small `categoryLabels` lookup would let "food-wine-pairing" render as "Food and Wine Pairing" if tighter copy is wanted. Not blocking.
- **RelatedArticles slug format reminder.** The component matches by content-collection ID (e.g., `best-wines/best-buttery-chardonnay`), not URL path. All slugs in section 3 follow that ID format. No leading slash, no `.mdx`.

---

## 5. Empty Hubs Decision

### `/wine-glossary/` KILL for now
- `src/content/articles/wine-glossary/` is empty.
- `src/pages/wine-glossary/index.astro` and `[...slug].astro` exist and will render an empty index.
- Recommendation: delete both page files and the empty content folder, or keep the folder and gate the index with a "coming soon" notice that links to `/wine-basics/` and the most-referenced grape pages.
- Future fill: a glossary is genuinely useful but only when populated with at least 30 to 50 entries. Don't ship a half-built one. Track as a separate content project.

### `/products/` KEEP and wire CTAs
- Two info-product pages exist: `products/free-pairing-cheat-sheet` (lead magnet) and `products/wine-confident-course` (paid course).
- Recommendation: keep the routes. Wire soft CTAs from the parent informational pages (see Products section above). Don't link from every article — keep the conversion funnel tight to high-intent traffic (pairing chart, beginner content, tasting page).
- Do not add `/products/` items to category indexes, the homepage hub strip, or the global header. They're funnel destinations, not editorial content.

---

## 6. Anchor Text Guidance

- **Be descriptive.** Anchor names the destination's content, not its URL. "Sauvignon Blanc" or "the Marlborough style" is good. "this article" is bad. "Click here" is forbidden.
- **Vary across the site.** Same target, different anchors. The Chardonnay grape page can be linked as "Chardonnay", "the Chardonnay grape", "California Chardonnay style", "what makes Chardonnay buttery". Avoid using identical anchor text from many sources.
- **Keep it natural.** Read the sentence aloud. If the link wouldn't survive an editor's redline, drop it or move it to `relatedArticles`.
- **One link per concept per article.** If Chardonnay comes up six times in one piece, link the first sensible mention only.
- **Never link a numeric ranking, brand name, or generic word like "wine" or "guide".** Anchor must signal subject.
- **No em-dashes** in anchor text or surrounding prose. Use commas, full stops, or colons (project-wide rule).
- **Links inside CTAs and product cards don't count** as internal links for this map. They serve a different purpose.

---

## Critical Files for Implementation
- `src/layouts/ArticleLayout.astro`
- `src/components/ui/RelatedArticles.astro`
- `src/components/ui/Breadcrumbs.astro`
- `src/content/articles/**/*.mdx` (every MDX frontmatter `relatedArticles` field plus body prose copy edits)
- `src/pages/index.astro` (homepage hub link adjustments per section 2)
