// Wine + Cheese Pairing Data
// Each item has: name, region, body/intensity (1-5), notes, tags
// Pairings are scored by closeness in body, complementary fat/acid, and shared flavor tags

const WINES = [
  { id: 'cab', name: 'Cabernet Sauvignon', cat: 'red', region: 'Bordeaux · Napa', body: 5, intensity: 5,
    notes: 'Black currant, cedar, firm tannins', serve: '60–65°F', tags: ['tannic', 'bold', 'oak', 'fruit-black'],
    blurb: 'A heavyweight. Loves fat, salt, and a long sit by the fire.' },
  { id: 'pinot', name: 'Pinot Noir', cat: 'red', region: 'Burgundy · Oregon', body: 3, intensity: 3,
    notes: 'Cherry, forest floor, soft tannins', serve: '55–60°F', tags: ['earthy', 'silky', 'fruit-red', 'low-tannin'],
    blurb: 'The diplomat — slips between cheeses without ever raising its voice.' },
  { id: 'malbec', name: 'Malbec', cat: 'red', region: 'Mendoza', body: 4, intensity: 4,
    notes: 'Plum, cocoa, violet', serve: '60–65°F', tags: ['fruit-black', 'smoky', 'velvety'],
    blurb: 'Plush and a little smoky. Made for evening meat boards.' },
  { id: 'chianti', name: 'Chianti Classico', cat: 'red', region: 'Tuscany', body: 3, intensity: 4,
    notes: 'Sour cherry, leather, herb', serve: '60°F', tags: ['acid', 'savory', 'rustic'],
    blurb: 'Bright acidity that makes salty, aged cheeses sing.' },

  { id: 'chard', name: 'Chardonnay (Oaked)', cat: 'white', region: 'Burgundy · Sonoma', body: 4, intensity: 4,
    notes: 'Apple, butter, vanilla', serve: '50–55°F', tags: ['creamy', 'oak', 'rich'],
    blurb: 'Buttery and broad. Echoes creamy cheeses like a duet.' },
  { id: 'sauv', name: 'Sauvignon Blanc', cat: 'white', region: 'Loire · Marlborough', body: 2, intensity: 3,
    notes: 'Grapefruit, grass, gooseberry', serve: '45–50°F', tags: ['acid', 'crisp', 'herbaceous'],
    blurb: 'A clean knife through anything rich, fresh, or grassy.' },
  { id: 'ries', name: 'Riesling (Off-Dry)', cat: 'white', region: 'Mosel · Alsace', body: 2, intensity: 3,
    notes: 'Lime, peach, petrol, honey', serve: '45°F', tags: ['acid', 'sweet', 'aromatic'],
    blurb: 'Sweetness + acid is the secret weapon against funk and heat.' },
  { id: 'gruner', name: 'Grüner Veltliner', cat: 'white', region: 'Austria', body: 2, intensity: 3,
    notes: 'White pepper, lime, celery', serve: '45–50°F', tags: ['crisp', 'mineral', 'herbaceous'],
    blurb: 'Peppery, mineral, refreshing — a green-apple bite.' },

  { id: 'rose', name: 'Provençal Rosé', cat: 'rose', region: 'Provence', body: 2, intensity: 2,
    notes: 'Strawberry, melon, sea salt', serve: '45°F', tags: ['crisp', 'fruit-red', 'mineral'],
    blurb: 'A long pale afternoon. Plays nicely with almost everything mild.' },

  { id: 'champ', name: 'Brut Champagne', cat: 'sparkling', region: 'Champagne', body: 3, intensity: 4,
    notes: 'Brioche, lemon, almond, fine bead', serve: '45°F', tags: ['acid', 'creamy', 'mineral', 'effervescent'],
    blurb: 'Bubbles + acid scrub the palate clean. Pairs with nearly anything.' },
  { id: 'prosecco', name: 'Prosecco', cat: 'sparkling', region: 'Veneto', body: 2, intensity: 2,
    notes: 'Pear, white flowers, almond', serve: '45°F', tags: ['crisp', 'fruit-white', 'effervescent'],
    blurb: 'Lighter, fruitier sparkle. Friendly and forgiving.' },

  { id: 'port', name: 'Tawny Port', cat: 'dessert', region: 'Douro', body: 5, intensity: 5,
    notes: 'Walnut, caramel, dried fig', serve: '60°F', tags: ['sweet', 'rich', 'oxidative', 'nutty'],
    blurb: 'The classic blue-cheese partner. Sweetness tames salt and funk.' },
  { id: 'saut', name: 'Sauternes', cat: 'dessert', region: 'Bordeaux', body: 4, intensity: 5,
    notes: 'Apricot, honey, botrytis', serve: '50°F', tags: ['sweet', 'rich', 'aromatic'],
    blurb: 'Honeyed and lush. A famous handshake with Roquefort.' },
];

const CHEESES = [
  { id: 'brie', name: 'Brie', style: 'Soft-ripened', region: 'Île-de-France', body: 2, intensity: 2,
    milk: 'Cow', age: '4–8 weeks', veg: false,
    notes: 'Buttery, mushroomy, thin bloomy rind', tags: ['creamy', 'rich', 'mild', 'mushroom'],
    blurb: 'A pillow. Wants something bright and bubbly.' },
  { id: 'cam', name: 'Camembert', style: 'Soft-ripened', region: 'Normandy', body: 3, intensity: 3,
    milk: 'Cow', age: '4–6 weeks', veg: false,
    notes: 'Earthy, garlicky, deeper than Brie', tags: ['creamy', 'earthy', 'mushroom', 'funk-soft'],
    blurb: 'Brie\u2019s moodier cousin — funkier, more confident.' },
  { id: 'chev', name: 'Fresh Chèvre', style: 'Fresh goat', region: 'Loire', body: 1, intensity: 2,
    milk: 'Goat', age: '1–2 weeks', veg: true,
    notes: 'Tangy, lemony, chalky', tags: ['acid', 'fresh', 'tangy', 'herbaceous'],
    blurb: 'Bright and chalky. Lives for a squeeze of acid.' },
  { id: 'mozz', name: 'Buffalo Mozzarella', style: 'Fresh', region: 'Campania', body: 1, intensity: 1,
    milk: 'Buffalo', age: 'Days', veg: true,
    notes: 'Milky, sweet, lactic', tags: ['fresh', 'mild', 'creamy', 'milky'],
    blurb: 'Silky and shy. Don\u2019t crush it — match its gentleness.' },

  { id: 'manch', name: 'Manchego (12mo)', style: 'Aged sheep', region: 'La Mancha', body: 4, intensity: 4,
    milk: 'Sheep', age: '12 months', veg: false,
    notes: 'Nutty, lanolin, caramel', tags: ['nutty', 'rich', 'savory', 'sheep'],
    blurb: 'Nutty and proud. Built for reds with a bit of leather.' },
  { id: 'gruy', name: 'Gruyère', style: 'Alpine', region: 'Switzerland', body: 4, intensity: 4,
    milk: 'Cow', age: '10–12 months', veg: false,
    notes: 'Brothy, hazelnut, savory crystals', tags: ['nutty', 'savory', 'rich', 'oak'],
    blurb: 'Savory and crystalline. Loves oak and apple.' },
  { id: 'comte', name: 'Comté (24mo)', style: 'Alpine', region: 'Jura', body: 4, intensity: 4,
    milk: 'Cow', age: '24 months', veg: false,
    notes: 'Brown butter, toasted nut, pineapple', tags: ['nutty', 'savory', 'rich', 'fruit-white'],
    blurb: 'Long, complex, beloved. The diplomat of cheeses.' },
  { id: 'parm', name: 'Parmigiano-Reggiano', style: 'Hard aged', region: 'Emilia-Romagna', body: 5, intensity: 5,
    milk: 'Cow', age: '24 months', veg: false,
    notes: 'Crystalline, pineapple, broth', tags: ['savory', 'umami', 'salty', 'crystalline'],
    blurb: 'The king. Salt, umami, and crunch all at once.' },
  { id: 'ched', name: 'Aged Cheddar (3yr)', style: 'Aged', region: 'Somerset', body: 5, intensity: 5,
    milk: 'Cow', age: '3 years', veg: true,
    notes: 'Sharp, buttery, tangy', tags: ['sharp', 'rich', 'savory', 'tangy'],
    blurb: 'Sharp enough to cut through a Cabernet without flinching.' },

  { id: 'gouda', name: 'Aged Gouda', style: 'Aged', region: 'Netherlands', body: 4, intensity: 4,
    milk: 'Cow', age: '2 years', veg: false,
    notes: 'Butterscotch, caramel, crystals', tags: ['nutty', 'sweet', 'caramel', 'crystalline'],
    blurb: 'Butterscotch in cheese form. Made for sweet, dark wines.' },

  { id: 'roq', name: 'Roquefort', style: 'Blue', region: 'Aveyron', body: 5, intensity: 5,
    milk: 'Sheep', age: '3 months', veg: false,
    notes: 'Salty, peppery, lanolin', tags: ['blue', 'salty', 'funk-strong', 'sheep'],
    blurb: 'Sharp and saline. The textbook Sauternes match.' },
  { id: 'stil', name: 'Stilton', style: 'Blue', region: 'England', body: 5, intensity: 5,
    milk: 'Cow', age: '3 months', veg: false,
    notes: 'Buttery, mineral, gentle blue', tags: ['blue', 'rich', 'funk-strong', 'salty'],
    blurb: 'England\u2019s blue. Port is its lifelong dance partner.' },
  { id: 'gorg', name: 'Gorgonzola Dolce', style: 'Blue', region: 'Lombardy', body: 4, intensity: 4,
    milk: 'Cow', age: '2 months', veg: false,
    notes: 'Spoonable, sweet, mildly funky', tags: ['blue', 'creamy', 'sweet', 'funk-soft'],
    blurb: 'The gateway blue — soft, sweet, surprisingly approachable.' },

  { id: 'epoi', name: 'Époisses', style: 'Washed-rind', region: 'Burgundy', body: 4, intensity: 5,
    milk: 'Cow', age: '6 weeks', veg: false,
    notes: 'Pungent, meaty, washed in Marc', tags: ['funk-strong', 'rich', 'washed', 'meaty'],
    blurb: 'Loud, ripe, glorious. Save it for a wine that can shout back.' },
  { id: 'taleg', name: 'Taleggio', style: 'Washed-rind', region: 'Lombardy', body: 3, intensity: 4,
    milk: 'Cow', age: '6–10 weeks', veg: false,
    notes: 'Fruity, beefy, tangy rind', tags: ['funk-soft', 'fruit-red', 'washed', 'tangy'],
    blurb: 'Funky on the outside, sweet on the inside.' },

  { id: 'humb', name: 'Humboldt Fog', style: 'Aged goat', region: 'California', body: 3, intensity: 3,
    milk: 'Goat', age: '2 months', veg: false,
    notes: 'Ash line, lemon, mushroom', tags: ['tangy', 'creamy', 'mushroom', 'goat'],
    blurb: 'Layered cake of goat cheese. Photogenic and friendly.' },
  { id: 'pec', name: 'Pecorino Romano', style: 'Hard sheep', region: 'Lazio', body: 5, intensity: 5,
    milk: 'Sheep', age: '8 months', veg: false,
    notes: 'Salty, sharp, grassy', tags: ['salty', 'sharp', 'sheep', 'savory'],
    blurb: 'A salt cannon. Best with bright, structured wines.' },
];

// Curated pairing scores — anchored matches, then algorithmic for the rest
// Format: `${wineId}:${cheeseId}` -> { score, why }
const ANCHORS = {
  'port:stil':   { score: 98, why: 'The textbook handshake. Port\u2019s sweetness wraps around Stilton\u2019s salt; the result is dessert.' },
  'saut:roq':    { score: 98, why: 'A 200-year-old marriage. Honeyed botrytis melts into Roquefort\u2019s peppery salt.' },
  'saut:stil':   { score: 94, why: 'Sweet wine + salty blue is a universal law. Sauternes brings apricot to Stilton\u2019s mineral edge.' },
  'port:roq':    { score: 92, why: 'Tawny Port\u2019s walnut and caramel meet Roquefort\u2019s lanolin in deep harmony.' },
  'port:gouda':  { score: 95, why: 'Both taste like butterscotch crystals. Like meeting your twin at a dinner party.' },

  'champ:brie':  { score: 96, why: 'Bubbles slice through Brie\u2019s cream; both share a yeasty, brioche-like soul.' },
  'champ:parm':  { score: 92, why: 'Parmigiano\u2019s crystalline umami plus Champagne\u2019s acid = endless palate refresh.' },
  'champ:cam':   { score: 90, why: 'Mushroomy Camembert finds a yeasty echo in Champagne\u2019s autolytic notes.' },
  'prosecco:mozz': { score: 88, why: 'Both are gentle and milky-fresh. A summer afternoon in two ingredients.' },

  'cab:ched':    { score: 96, why: 'Cabernet\u2019s tannins find their match in aged Cheddar\u2019s fat and bite.' },
  'cab:gouda':   { score: 88, why: 'Aged Gouda\u2019s caramel softens Cab\u2019s grip. A cozy fireplace pairing.' },
  'malbec:manch':{ score: 92, why: 'Malbec\u2019s plush plum cradles Manchego\u2019s lanolin nuttiness.' },
  'chianti:pec': { score: 95, why: 'Italy in a bite. Chianti\u2019s acid balances Pecorino\u2019s salt and grass.' },
  'chianti:parm':{ score: 94, why: 'Born in neighboring regions and they taste like it — savory, bright, ancient.' },

  'pinot:comte': { score: 96, why: 'Silky Pinot meets long-aged Comté\u2019s brown-butter depth. Quiet perfection.' },
  'pinot:gruy':  { score: 92, why: 'Earthy Pinot answers Gruyère\u2019s broth. Alpine in a glass.' },
  'pinot:humb':  { score: 88, why: 'Forest-floor Pinot meets Humboldt\u2019s ash and lemon — a woodland walk.' },
  'pinot:epoi':  { score: 90, why: 'Burgundy\u2019s grape meets Burgundy\u2019s cheese. They were raised together.' },

  'chard:brie':  { score: 92, why: 'Buttery Chardonnay echoes Brie\u2019s cream — a pillow on a pillow.' },
  'chard:gruy':  { score: 90, why: 'Oak in the wine, oak in the cellar. They share a vocabulary.' },
  'chard:comte': { score: 91, why: 'Both nutty, both rich, both patient. A long, generous pairing.' },

  'sauv:chev':   { score: 98, why: 'The Loire River runs through both. Acid + acid creates lift, not collision.' },
  'sauv:mozz':   { score: 86, why: 'Crisp herbaceous wine + milky cheese = a caprese in liquid form.' },
  'sauv:humb':   { score: 90, why: 'Grapefruit and goat\u2019s lemon, with a thread of grass between them.' },

  'ries:gorg':   { score: 92, why: 'Off-dry Riesling sweetens Gorgonzola\u2019s tang. Surprising and addictive.' },
  'ries:taleg':  { score: 90, why: 'Petrol-and-peach Riesling tames Taleggio\u2019s funk like a lullaby.' },
  'ries:epoi':   { score: 88, why: 'Sweetness + acid is the only real defense against Époisses. Spectacular.' },

  'gruner:chev': { score: 90, why: 'Peppery Grüner with chalky chèvre — a green, snappy bite.' },
  'gruner:gruy': { score: 86, why: 'Alpine wine, alpine cheese. Built in the same mountains, served together.' },

  'rose:chev':   { score: 88, why: 'Pale rosé and fresh chèvre — a Provençal terrace in two sips.' },
  'rose:mozz':   { score: 86, why: 'Both mild, both sun-soaked. Lunch, basically.' },
  'rose:taleg':  { score: 84, why: 'Strawberry and washed rind — fruit cuts the funk just enough.' },
};

// Algorithmic scorer for the long tail — uses body match + tag overlap + classic rules
function pairScore(wine, cheese) {
  const key = `${wine.id}:${cheese.id}`;
  if (ANCHORS[key]) return ANCHORS[key];

  let score = 50;

  // Body / intensity match (closer = better, but a touch more wine is okay)
  const bodyDiff = Math.abs(wine.body - cheese.body);
  score += (3 - Math.min(3, bodyDiff)) * 6; // up to +18

  // Tag overlap
  const overlap = wine.tags.filter((t) => cheese.tags.includes(t)).length;
  score += overlap * 5;

  // Classic rules
  const wt = new Set(wine.tags), ct = new Set(cheese.tags);
  if (wt.has('sweet') && (ct.has('blue') || ct.has('salty'))) score += 18;
  if (wt.has('acid') && (ct.has('creamy') || ct.has('rich'))) score += 8;
  if (wt.has('acid') && ct.has('fresh')) score += 10;
  if (wt.has('tannic') && ct.has('rich')) score += 10;
  if (wt.has('tannic') && ct.has('fresh')) score -= 12;
  if (wt.has('effervescent') && ct.has('creamy')) score += 10;
  if (wt.has('effervescent') && ct.has('rich')) score += 6;
  if (wine.cat === 'red' && ct.has('fresh')) score -= 10;
  if (wine.cat === 'red' && ct.has('blue') && !wt.has('sweet')) score -= 8;
  if (wt.has('aromatic') && ct.has('funk-strong')) score += 8;

  // Region echo
  if (wine.region.split(' ')[0] === cheese.region.split(' ')[0]) score += 4;

  score = Math.max(38, Math.min(94, Math.round(score)));

  // Generate a "why" from rules that fired
  let why;
  if (wt.has('sweet') && ct.has('blue')) why = 'Sweet wine and blue cheese is a universal rule — sugar tames salt.';
  else if (wt.has('acid') && ct.has('creamy')) why = 'Acidity cuts richness and keeps every bite feeling fresh.';
  else if (wt.has('tannic') && ct.has('rich')) why = 'Tannin needs fat to soften, and this cheese has it in spades.';
  else if (wt.has('effervescent')) why = 'Bubbles scrub the palate clean between bites — the great resetter.';
  else if (bodyDiff <= 1) why = 'Matched body and intensity — neither one shouts over the other.';
  else if (overlap > 0) why = `Both share a ${wine.tags.find((t) => cheese.tags.includes(t))} character that tied them together.`;
  else why = 'A reliable middle-ground pairing — pleasant, balanced, no fireworks.';

  return { score, why };
}

function topPairings(item, list, n = 4) {
  const isWine = 'cat' in item;
  const scored = list.map((other) => {
    const { score, why } = isWine ? pairScore(item, other) : pairScore(other, item);
    return { item: other, score, why };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, n);
}

window.WINES = WINES;
window.CHEESES = CHEESES;
window.pairScore = pairScore;
window.topPairings = topPairings;
