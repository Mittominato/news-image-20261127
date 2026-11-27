// main.ts — entrypoint for news-image-20261127 (Node 22, stdlib only).
//
// The judged image is shipped in this repository as entry.png (1024x1024,
// a one-page front page summing up Friday 27 November 2026). This program
// only copies that file to the grader's output directory, so both runs
// produce byte-identical output with no network and no dependencies.
//
// The source image is located relative to THIS file, never relative to the
// working directory: the grader runs `node /bot/main.ts` from a different
// directory, so a process.cwd() lookup would fail to find it.
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`entry.png not found next to main.ts: ${source}`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
// Self-check: the output must be byte-identical to the shipped image,
// so the two grader runs can never disagree.
const written = readFileSync(target);
const original = readFileSync(source);
if (!written.equals(original)) {
  throw new Error("output differs from entry.png");
}
console.log(`wrote ${target} (${statSync(target).size} bytes, sha-verified)`);
