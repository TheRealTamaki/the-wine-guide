import { chromium } from 'playwright';

const wines = [
  { name: 'Josh Cellars Sauvignon Blanc 2024', url: 'https://www.wine.com/product/josh-cellars-sauvignon-blanc-2024/4123692', placeholder: 'mvmy6ccx24jsgpnqjg7n' },
  { name: 'Santa Margherita Pinot Grigio 2024', url: 'https://www.wine.com/product/santa-margherita-pinot-grigio-2024/3134563', placeholder: 'jgd3zivgicihcwskxlad' },
  { name: 'La Crema Sonoma Coast Chardonnay 2023', url: 'https://www.wine.com/product/la-crema-sonoma-coast-chardonnay-2023/2134835', placeholder: 'xqo0nuwemzygk1lc7rme' },
  { name: 'Josh Cellars Pinot Noir 2024', url: 'https://www.wine.com/product/josh-cellars-pinot-noir-2024/3610787', placeholder: 'xnth9oz3on8zuaq1b5yw' },
  { name: 'Josh Cellars Cabernet Sauvignon 2023', url: 'https://www.wine.com/product/josh-cellars-cabernet-sauvignon-2023/3640935', placeholder: 'aej8ocw8kdta4ies8g2b' },
  { name: 'The Prisoner Red Blend 2022', url: 'https://www.wine.com/product/the-prisoner-wine-company-the-prisoner-red-blend-2022/1657240', placeholder: 'pejxaihbuzhcjcqw72hv' },
];

// Connect to existing Chrome via CDP (requires Chrome launched with --remote-debugging-port=9222)
let browser;
try {
  browser = await chromium.connectOverCDP('http://localhost:9222');
  console.log('Connected to existing Chrome via CDP');
} catch {
  console.log('CDP connection failed, launching new headed browser...');
  browser = await chromium.launch({
    headless: false,
    args: [
      '--disable-blink-features=AutomationControlled',
      '--no-sandbox',
      '--disable-web-security',
    ]
  });
}

const context = browser.contexts()[0] || await browser.newContext({
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  viewport: { width: 1280, height: 900 },
});

const page = await context.newPage();

// Mask automation flags
await page.addInitScript(() => {
  Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
});

const results = [];

for (const wine of wines) {
  console.log(`\nChecking: ${wine.name}`);
  try {
    await page.goto(wine.url, { waitUntil: 'domcontentloaded', timeout: 20000 });
    // Wait for product image to appear
    try {
      await page.waitForSelector('img[src*="assets.wine.com"]', { timeout: 10000 });
    } catch {
      await page.waitForTimeout(5000);
    }

    const title = await page.title();
    const bodyLen = await page.evaluate(() => document.body.innerHTML.length);
    console.log(`  Title: ${title} | HTML: ${bodyLen} chars`);

    const imageIds = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img'))
        .map(i => i.src)
        .filter(s => s.includes('assets.wine.com'))
        .map(s => { const m = s.match(/\/([a-zA-Z0-9]{15,25})\.jpg/); return m ? m[1] : null; })
        .filter(Boolean);
    });

    const productName = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      return h1 ? h1.innerText.trim() : 'NOT FOUND';
    });

    const firstId = imageIds[0] || 'NO IMAGE FOUND';
    console.log(`  Product: ${productName}`);
    console.log(`  Image ID: ${firstId}`);
    console.log(`  Placeholder: ${wine.placeholder}`);
    console.log(`  Match: ${firstId === wine.placeholder ? 'YES ✓' : 'NO - needs update'}`);

    results.push({ name: wine.name, placeholder: wine.placeholder, actual: firstId });
  } catch (err) {
    console.log(`  ERROR: ${err.message.split('\n')[0]}`);
    results.push({ name: wine.name, placeholder: wine.placeholder, actual: 'ERROR' });
  }
}

await browser.close();

console.log('\n\n=== FINAL SUMMARY ===');
for (const r of results) {
  const status = r.actual === r.placeholder ? '✓ MATCH' : '✗ REPLACE';
  console.log(`${status} | ${r.name}`);
  if (r.actual !== r.placeholder && r.actual !== 'ERROR' && r.actual !== 'NO IMAGE FOUND') {
    console.log(`  OLD: ${r.placeholder}`);
    console.log(`  NEW: ${r.actual}`);
  } else if (r.actual !== r.placeholder) {
    console.log(`  OLD: ${r.placeholder}  →  NEW: ${r.actual}`);
  }
}
