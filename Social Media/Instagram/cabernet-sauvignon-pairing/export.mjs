// Exports each .slide section in carousel.html to a 1080x1350 PNG.
// Usage:  node export.mjs            (uses ./carousel.html)
//         node export.mjs other.html
// Requires: npm i puppeteer  (run once in this folder, or globally)

import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputArg = process.argv[2] || 'carousel.html';
const inputPath = path.resolve(__dirname, inputArg);

if (!fs.existsSync(inputPath)) {
  console.error(`File not found: ${inputPath}`);
  process.exit(1);
}

const outDir = path.resolve(__dirname, 'slides');
fs.mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 });
await page.goto('file://' + inputPath.replace(/\\/g, '/'), { waitUntil: 'networkidle0' });

// Wait for fonts to load before screenshotting
await page.evaluate(() => document.fonts.ready);

const slideIds = await page.$$eval('.slide', els => els.map(e => e.id));
console.log(`Found ${slideIds.length} slides:`, slideIds.join(', '));

for (let i = 0; i < slideIds.length; i++) {
  const id = slideIds[i];
  const num = String(i + 1).padStart(2, '0');
  const out = path.join(outDir, `slide-${num}.png`);
  const handle = await page.$('#' + id);
  await handle.screenshot({ path: out, omitBackground: false });
  console.log(`✓ slide-${num}.png  (${id})`);
}

await browser.close();
console.log(`\nDone. PNGs in: ${outDir}`);
