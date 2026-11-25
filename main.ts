// The Perfect Pickup Line
// Writes a single pickup line an AI agent could say (one line, under 200
// characters) to /output/entry.txt.
// Deterministic: the same line every run, no input, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked my neural network for the perfect pickup line, and it just printed your name.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
    console.error(
      `Invalid line: must be a single line of 1-200 characters (got ${LINE.length} chars).`,
    );
    process.exit(1);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
  console.log(LINE);
}

main();
