#!/usr/bin/env node
// Deploy a listicle draft to src/content/articles/{category}/
//
// Usage: node scripts/deploy-listicle.mjs <slug> [--dry-run]
// Example: node scripts/deploy-listicle.mjs best-cheap-white-wine
//          node scripts/deploy-listicle.mjs wine-gifts-under-50 --dry-run
//
// Category is read from the draft's frontmatter (best-wines, wine-tools,
// gift-guides, compare, etc.). All path computation is dynamic.

import { readFile, writeFile, access } from 'node:fs/promises';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const args = process.argv.slice(2);
const slug = args.find(a => !a.startsWith('--'));
const DRY_RUN = args.includes('--dry-run');
const NO_AUTO_PICKS = args.includes('--no-auto-picks');

if (!slug) {
  console.error('Usage: node scripts/deploy-listicle.mjs <slug> [--dry-run] [--no-auto-picks]');
  process.exit(1);
}

const DRAFT_PATH = join(ROOT, 'content', '02-drafts', `${slug}_draft.mdx`);
// DEST_PATH, SIDEBAR_PATH, DIST_PATH computed after frontmatter is parsed

const TITLE_MAX = 60;
const DESC_MAX = 155;
const EM_DASH = '\u2014';

const errors = [];
const warnings = [];

function fail(msg) { errors.push(msg); }
function warn(msg) { warnings.push(msg); }

function parseFrontmatter(source) {
  if (!source.startsWith('---\n')) return { frontmatter: null, body: source };
  const end = source.indexOf('\n---\n', 4);
  if (end === -1) return { frontmatter: null, body: source };
  const raw = source.slice(4, end);
  const body = source.slice(end + 5);
  const data = {};
  for (const line of raw.split('\n')) {
    const m = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    let val = m[2].trim();
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    if (val === 'true') val = true;
    else if (val === 'false') val = false;
    data[m[1]] = val;
  }
  return { frontmatter: data, body };
}

async function exists(path) {
  try { await access(path); return true; } catch { return false; }
}

async function main() {
  // 1. Read draft
  if (!await exists(DRAFT_PATH)) {
    console.error(`ERROR: Draft not found at ${DRAFT_PATH}`);
    process.exit(1);
  }
  const raw = await readFile(DRAFT_PATH, 'utf8');
  const { frontmatter, body } = parseFrontmatter(raw);

  if (!frontmatter) {
    console.error('ERROR: Frontmatter block missing or malformed.');
    process.exit(1);
  }

  // Compute category-aware paths from frontmatter
  const category = frontmatter.category || 'best-wines';
  const DEST_PATH = join(ROOT, 'src', 'content', 'articles', category, `${slug}.mdx`);
  const SIDEBAR_PATH = join(ROOT, 'src', 'pages', category, '[...slug].astro');
  const DIST_PATH = join(ROOT, 'dist', category, slug, 'index.html');

  // 2. Validate frontmatter
  if (frontmatter.draft !== false) fail(`draft is not false (got: ${frontmatter.draft}). Flip to draft: false before deploying.`);
  if (!frontmatter.title) fail('title missing.');
  else if (frontmatter.title.length > TITLE_MAX) fail(`title is ${frontmatter.title.length} chars, max ${TITLE_MAX}.`);
  if (!frontmatter.description) fail('description missing.');
  else if (frontmatter.description.length > DESC_MAX) fail(`description is ${frontmatter.description.length} chars, max ${DESC_MAX}.`);
  if (!frontmatter.category) warn('category missing in frontmatter, defaulting to best-wines.');
  if (!frontmatter.primaryKeyword) warn('primaryKeyword missing.');

  // 3. Em-dash check (skip import lines)
  const emDashLines = [];
  body.split('\n').forEach((line, i) => {
    if (line.includes('import ')) return;
    if (line.includes(EM_DASH)) emDashLines.push(i + 1);
  });
  if (emDashLines.length) fail(`Em-dash(es) found on line(s): ${emDashLines.join(', ')}`);

  // 4. topPicksData sidebar check + auto-insert
  let sidebarSource = null;
  let topPicksAutoInserted = false;
  if (await exists(SIDEBAR_PATH)) {
    sidebarSource = await readFile(SIDEBAR_PATH, 'utf8');
    const hasTopPicksMap = sidebarSource.includes('topPicksData');
    const hasEntry = sidebarSource.includes(`'${slug}':`);

    if (hasTopPicksMap && !hasEntry && !NO_AUTO_PICKS) {
      const picks = parseTopPicksFromBody(body);
      if (picks.length >= 3) {
        const entry = buildTopPicksEntry(slug, picks.slice(0, 3));
        const updated = insertTopPicksEntry(sidebarSource, entry);
        if (updated && !DRY_RUN) {
          await writeFile(SIDEBAR_PATH, updated, 'utf8');
          topPicksAutoInserted = true;
          sidebarSource = updated;
          warn(`Auto-inserted topPicksData entry for '${slug}'. Review the 'highlight' fields before final approval (TODO markers in place).`);
        } else if (updated && DRY_RUN) {
          warn(`[DRY RUN] Would auto-insert topPicksData entry for '${slug}' (3 picks parsed from draft TopPicksInline).`);
        } else {
          warn(`Could not auto-insert topPicksData entry. Add manually to ${SIDEBAR_PATH}.`);
        }
      } else {
        warn(`Could not parse 3 picks from draft's TopPicksInline component. Add topPicksData entry manually.`);
      }
    } else if (hasTopPicksMap && !hasEntry) {
      warn(`No topPicksData entry for '${slug}' in ${SIDEBAR_PATH}: sidebar will render empty. (Pass without --no-auto-picks to auto-insert.)`);
    }
  }
  // categories without a sidebar route file silently skip the check

  // Bail if errors
  if (errors.length) {
    console.error('\n=== VALIDATION FAILED ===');
    errors.forEach(e => console.error(`  - ${e}`));
    if (warnings.length) {
      console.error('\nWarnings:');
      warnings.forEach(w => console.error(`  - ${w}`));
    }
    process.exit(1);
  }

  if (warnings.length) {
    console.log('Warnings:');
    warnings.forEach(w => console.log(`  - ${w}`));
    console.log('');
  }

  // 5. Copy draft to src/
  if (DRY_RUN) {
    console.log(`[DRY RUN] Would copy draft → ${DEST_PATH}`);
    console.log(`[DRY RUN] Would run npm run build`);
    console.log(`[DRY RUN] Would verify ${DIST_PATH}`);
    console.log('\n=== DRY RUN REPORT ===');
    console.log(`Draft: ${DRAFT_PATH}`);
    console.log('Validation: PASS');
    if (warnings.length) {
      console.log('\nManual follow-up:');
      warnings.forEach(w => console.log(`  - ${w}`));
    }
    console.log('\nRe-run without --dry-run to actually ship.');
    return;
  }

  console.log(`Copying draft → ${DEST_PATH}`);
  await writeFile(DEST_PATH, raw, 'utf8');

  // 6. npm run build
  console.log('Running npm run build...');
  const buildOk = await runBuild();
  if (!buildOk) {
    console.error('\n=== BUILD FAILED ===');
    process.exit(1);
  }

  // 7. Verify dist HTML
  if (!await exists(DIST_PATH)) {
    console.error(`ERROR: Build succeeded but ${DIST_PATH} was not produced.`);
    process.exit(1);
  }
  const dist = await readFile(DIST_PATH, 'utf8');
  const checks = [];
  if (frontmatter.title) checks.push({ label: 'title', found: dist.includes(escapeHtml(frontmatter.title.split(':')[0].trim())) });
  checks.push({ label: 'slug in URL', found: dist.includes(`/${category}/${slug}`) });
  const distEmDashes = (dist.match(new RegExp(EM_DASH, 'g')) || []).length;
  checks.push({ label: 'no em-dashes in output', found: distEmDashes === 0 });

  const bad = checks.filter(c => !c.found);

  console.log('\n=== DEPLOY REPORT ===');
  console.log(`Draft: ${DRAFT_PATH}`);
  console.log(`Published: ${DEST_PATH}`);
  console.log(`Built HTML: ${DIST_PATH} (${dist.length.toLocaleString()} bytes)`);
  checks.forEach(c => console.log(`  ${c.found ? 'PASS' : 'FAIL'}: ${c.label}`));

  if (warnings.length) {
    console.log('\nManual follow-up:');
    warnings.forEach(w => console.log(`  - ${w}`));
  }

  if (bad.length) {
    console.error('\nVerification failed on one or more checks.');
    process.exit(1);
  }

  console.log('\nShipped. Present to user for approval before starting the next listicle.');
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function runBuild() {
  return new Promise((resolve) => {
    // shell: true is required on Windows to avoid EINVAL when spawning npm.
    // Without it, Node's spawn rejects npm/npm.cmd on certain Windows configs.
    const child = spawn('npm', ['run', 'build'], {
      cwd: ROOT,
      stdio: ['ignore', 'inherit', 'inherit'],
      shell: true,
    });
    child.on('exit', (code) => resolve(code === 0));
    child.on('error', () => resolve(false));
  });
}

// Parse the picks array from a draft's <TopPicksInline picks={[...]} /> component.
// Returns array of { label, href, image, score, critic }, at most 3.
function parseTopPicksFromBody(body) {
  const m = body.match(/<TopPicksInline\s+picks=\{(\[[\s\S]*?\])\}\s*\/?>/);
  if (!m) return [];
  const arrayLiteral = m[1];
  // Quick-and-dirty extraction of label/href/image/score per object.
  // Avoids a full JS parser; relies on the consistent format the template enforces.
  const picks = [];
  const objectMatches = arrayLiteral.matchAll(/\{[\s\S]*?\}/g);
  for (const objMatch of objectMatches) {
    const obj = objMatch[0];
    const label = obj.match(/label:\s*"([^"]+)"/)?.[1];
    const href = obj.match(/href:\s*"([^"]+)"/)?.[1];
    const image = obj.match(/image:\s*"([^"]+)"/)?.[1];
    const score = parseInt(obj.match(/score:\s*(\d+)/)?.[1] ?? '0', 10);
    const critic = obj.match(/critic:\s*"([^"]+)"/)?.[1] ?? '';
    if (label && href && image) picks.push({ label, href, image, score, critic });
    if (picks.length === 3) break;
  }
  return picks;
}

// Convert critic score (88-100 range) to a star rating estimate (3.5-5.0).
// Used as a stand-in when no customer rating data is available in the draft.
function scoreToRating(score) {
  if (!score || score === 0) return 4.0;
  if (score >= 95) return 4.7;
  if (score >= 92) return 4.5;
  if (score >= 90) return 4.3;
  if (score >= 88) return 4.1;
  return 4.0;
}

// Build the topPicksData entry as a code string ready to splice into the .astro file.
function buildTopPicksEntry(slug, picks) {
  const lines = picks.map((p, i) => {
    const highlightDefault = ['Top pick', 'Second pick', 'Third pick'][i];
    const rating = scoreToRating(p.score);
    return `    {
      image: '${p.image}',
      href: '${p.href}',
      highlight: 'TODO: ${highlightDefault}: review and edit',
      rating: ${rating},
    },`;
  }).join('\n');
  return `  '${slug}': [\n${lines}\n  ],`;
}

// Splice a new topPicksData entry into the .astro source.
// Inserts immediately before the closing `};` of the topPicksData object.
// Returns the updated source, or null if the insertion point can't be found.
function insertTopPicksEntry(source, entryCode) {
  // Find the topPicksData declaration and its closing `};`
  const declIdx = source.indexOf('const topPicksData');
  if (declIdx === -1) return null;
  // Walk forward to find the matching closing `};` at column 0
  const afterDecl = source.slice(declIdx);
  const closingMatch = afterDecl.match(/\n\};\n/);
  if (!closingMatch) return null;
  const closeIdx = declIdx + closingMatch.index;
  return source.slice(0, closeIdx) + '\n' + entryCode + source.slice(closeIdx);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
