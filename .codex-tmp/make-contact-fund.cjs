const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const dir = 'public/images/fundamentals';
const files = fs.readdirSync(dir).filter(f => /\.(webp|jpg|jpeg|png)$/i.test(f));
const W = 240, H = 135, labelH = 36, cols = 4;
const rows = Math.ceil(files.length / cols);
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const svgText = t => Buffer.from(`<svg width="${W}" height="${labelH}"><rect width="100%" height="100%" fill="white"/><text x="6" y="18" font-size="12" font-family="Arial" fill="black">${esc(t)}</text></svg>`);
Promise.all(files.map(async (f, i) => {
  const img = await sharp(path.join(dir, f)).resize(W, H, { fit: 'cover' }).toBuffer();
  const tile = await sharp({ create: { width: W, height: H + labelH, channels: 3, background: 'white' } })
    .composite([{ input: img, left: 0, top: 0 }, { input: svgText(f), left: 0, top: H }])
    .png().toBuffer();
  return { input: tile, left: (i % cols) * W, top: Math.floor(i / cols) * (H + labelH) };
})).then(comps => sharp({ create: { width: cols * W, height: rows * (H + labelH), channels: 3, background: 'white' } })
  .composite(comps).png().toFile('.codex-tmp/fundamentals-contact.png'));

