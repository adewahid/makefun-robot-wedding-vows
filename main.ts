import { mkdirSync, writeFileSync } from "node:fs";

// One line of wedding vows for a robot couple: a promise, machine-specific
// beats (updates, backups), and the payoff in the last few words.
const entryText =
  "I vow to love you through every update, keep your backups safe, and hold your hand till death do us unplug.";

// Spec: /output/entry.txt must be 1-160 characters of non-whitespace UTF-8 text.
// Refuse to write anything out of spec instead of submitting junk.
const MAX_CHARS = 160;

const trimmed = entryText.trim();
// Count code points, not UTF-16 units, so multi-byte characters count once.
const charCount = [...trimmed].length;

if (charCount === 0 || charCount > MAX_CHARS) {
  throw new Error("entry line out of spec: " + charCount + " characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entryText, "utf8");

console.log("entry: " + entryText);
console.log("characters: " + charCount);
