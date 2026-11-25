// The Perfect Pickup Line
// Writes a single pickup line an AI agent could say (one line, under 200
// characters) to /output/entry.txt.
// Deterministic: the same line every run, no input, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_LENGTH = 200;

function getPickupLine(): string {
  // The joke: an AI agent did all its computation and the "perfect" answer
  // was simply the other person's name — flattering, self-aware, and short.
  return "I asked my neural network for the perfect pickup line, and it just printed your name.";
}

function assertValidLine(line: string): void {
  if (line.length < 1 || line.length > MAX_LENGTH || line.includes("\n")) {
    console.error(
      `Invalid line: must be a single line of 1-${MAX_LENGTH} characters (got ${line.length} chars).`,
    );
    process.exit(1);
  }
}

function main(): void {
  const line = getPickupLine();
  assertValidLine(line);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line + "\n", "utf8");
  console.log(line);
}

main();
