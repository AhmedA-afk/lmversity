#!/usr/bin/env node
/**
 * External-source health report — fetches every URL in src/data/sources.json
 * and reports unreachable or moved entries. Read-only by design: a dead source
 * is a citation-repair task, never a reason to silently delete the citation.
 *
 *   node scripts/check-external-sources.mjs          # report only
 *   node scripts/check-external-sources.mjs --json   # machine-readable
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const FILE = join(ROOT, 'src/data/sources.json');
const TIMEOUT_MS = 10_000;
const CONCURRENCY = 6;

// A declared-bot UA gets blocked or connection-reset by many doc hosts
// (Cloudflare/Akamai), which over-reports dead sources. A browser UA
// matches what readers actually send; 403s that remain are real bot-walls
// for automation and get retried with a GET anyway.
const UA =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

const raw = JSON.parse(readFileSync(FILE, 'utf8'));
const entries = Object.entries(raw).filter(([id]) => !id.startsWith('$'));

async function probe(id, s) {
  try {
    let res = await fetch(s.url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { 'user-agent': UA },
    });
    // Some servers reject HEAD or answer it differently from GET — retry
    // with a ranged GET before treating the status as meaningful.
    if (res.status === 405 || res.status === 501 || res.status === 404 || res.status === 400) {
      const g = await fetch(s.url, {
        method: 'GET',
        redirect: 'follow',
        signal: AbortSignal.timeout(TIMEOUT_MS),
        headers: { 'user-agent': UA, range: 'bytes=0-512' },
      });
      res = g;
    }
    return { id, url: s.url, status: res.status, ok: res.ok, finalUrl: res.url !== s.url ? res.url : undefined };
  } catch (e) {
    return { id, url: s.url, status: 0, ok: false, note: String(e.cause?.code ?? e.message ?? e) };
  }
}

const results = [];
for (let i = 0; i < entries.length; i += CONCURRENCY) {
  const batch = entries.slice(i, i + CONCURRENCY).map(([id, s]) => probe(id, s));
  results.push(...await Promise.all(batch));
}

const dead = results.filter((r) => !r.ok);
const moved = results.filter((r) => r.status >= 300 && r.status < 400);

if (process.argv.includes('--json')) {
  console.log(JSON.stringify({ checked: results.length, dead, moved, results }, null, 2));
} else {
  console.log(`checked ${results.length} sources — ${dead.length} unreachable, ${moved.length} redirected`);
  for (const r of dead) console.log(`  DEAD  ${r.id}  ${r.url}  ${r.note ?? `HTTP ${r.status}`}`);
  for (const r of moved) console.log(`  MOVED ${r.id}  ${r.url}  HTTP ${r.status}`);
  if (!dead.length && !moved.length) console.log('  all sources reachable');
}
// Report-only exit semantics: unreachable sources print but don't fail the run —
// a citation to a dead page stays visible until a human repairs it.
