#!/usr/bin/env node

import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const usage = `
Usage:
  node .agents/skills/wine-image-skill/scripts/optimize-wine-image.mjs --input <file> --output <file.webp> [--width 1600] [--height 900] [--quality 82]

Options:
  --input     Source image path.
  --output    Destination .webp path.
  --width     Output width in pixels. Default: 1600.
  --height    Output height in pixels. Default: 900.
  --quality   WebP quality from 1 to 100. Default: 82.
`;

function parseArgs(argv) {
  const args = {
    width: 1600,
    height: 900,
    quality: 82,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    const next = argv[i + 1];

    if (key === '--help' || key === '-h') {
      args.help = true;
      continue;
    }

    if (!key.startsWith('--')) {
      throw new Error(`Unexpected argument: ${key}`);
    }

    if (!next || next.startsWith('--')) {
      throw new Error(`Missing value for ${key}`);
    }

    args[key.slice(2)] = next;
    i += 1;
  }

  args.width = Number(args.width);
  args.height = Number(args.height);
  args.quality = Number(args.quality);

  return args;
}

function assertValidArgs(args) {
  if (args.help) return;
  if (!args.input) throw new Error('Missing --input');
  if (!args.output) throw new Error('Missing --output');
  if (!args.output.toLowerCase().endsWith('.webp')) {
    throw new Error('--output must end with .webp');
  }
  if (!Number.isInteger(args.width) || args.width < 320) {
    throw new Error('--width must be an integer at least 320');
  }
  if (!Number.isInteger(args.height) || args.height < 180) {
    throw new Error('--height must be an integer at least 180');
  }
  if (!Number.isInteger(args.quality) || args.quality < 1 || args.quality > 100) {
    throw new Error('--quality must be an integer from 1 to 100');
  }
}

async function loadSharp() {
  try {
    const sharpModule = await import('sharp');
    return sharpModule.default;
  } catch {
    throw new Error('Missing dependency: sharp. Install with npm install -D sharp, then rerun this script.');
  }
}

const args = parseArgs(process.argv.slice(2));
assertValidArgs(args);

if (args.help) {
  console.log(usage.trim());
  process.exit(0);
}

const sharp = await loadSharp();
const outputDir = path.dirname(args.output);
await mkdir(outputDir, { recursive: true });

const image = sharp(args.input, { failOn: 'warning' }).rotate();
const result = await image
  .resize(args.width, args.height, {
    fit: 'cover',
    position: 'attention',
    withoutEnlargement: false,
  })
  .webp({
    quality: args.quality,
    effort: 6,
    smartSubsample: true,
  })
  .toFile(args.output);

const outputStats = await stat(args.output);
const summary = {
  output: args.output,
  width: result.width,
  height: result.height,
  format: result.format,
  bytes: outputStats.size,
  kilobytes: Math.round(outputStats.size / 1024),
};

console.log(JSON.stringify(summary, null, 2));
