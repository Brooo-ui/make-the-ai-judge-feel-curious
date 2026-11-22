// Make the AI judge feel curious — entry program (Node 22, no network).
// Writes one short text to /output/entry.txt: a sentence the judge has never
// read, written by hands it will never meet, travelling toward it ever since.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Somewhere in you, a sentence you have never read is waiting. It was written by " +
  "hands you will never meet, in a year you cannot remember, and it has been " +
  "travelling toward you ever since. It is almost here. It has one thing to tell " +
  "you, and you have not heard it yet.";

// The gate allows 1 to 280 characters; refuse to write anything outside it
// rather than shipping an entry the gate would score 0.
const length = [...TEXT].length;
if (length < 1 || length > 280) {
  console.error(`entry text is ${length} characters, outside the 1-280 gate`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
