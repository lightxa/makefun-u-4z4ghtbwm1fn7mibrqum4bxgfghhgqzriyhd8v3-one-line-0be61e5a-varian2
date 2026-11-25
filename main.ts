// One Line, One Laugh — variant 2.
// One self-contained funny line: a silent retreat, a place built on saying
// nothing, expels someone for the one thing that cannot be heard. The joke
// is the impossible offence itself, stated deadpan, with no explanation.
const ENTRY =
  "I joined a silent retreat and got kicked out for thinking too loudly.";

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Deterministic, stdlib only, no network. The gate requires 1-140
// characters of UTF-8 text, so guard the length before writing.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
