import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const require = createRequire(import.meta.url);
const puppeteer = require('../cabernet-sauvignon-pairing/node_modules/puppeteer');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.resolve(__dirname, process.argv[2] || 'carousel.html');

if (!fs.existsSync(inputPath)) {
  console.error(`File not found: ${inputPath}`);
  process.exit(1);
}

const outDir = path.resolve(__dirname, 'slides');
fs.mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 });
await page.goto(`file://${inputPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);

const slideIds = await page.$$eval('.slide', els => els.map(e => e.id));
console.log(`Found ${slideIds.length} slides: ${slideIds.join(', ')}`);

for (let i = 0; i < slideIds.length; i += 1) {
  const id = slideIds[i];
  const num = String(i + 1).padStart(2, '0');
  const out = path.join(outDir, `slide-${num}.png`);
  const handle = await page.$(`#${id}`);
  await handle.screenshot({ path: out, omitBackground: false });
  console.log(`Wrote slide-${num}.png`);
}

await browser.close();
console.log(`Done. PNGs in: ${outDir}`);
