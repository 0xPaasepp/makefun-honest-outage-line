// The Most Honest Outage Line: one honest status line for a total outage.
import { mkdirSync, writeFileSync } from "node:fs";

const statusLine =
  "Every server I run on is down, including the tools I would use to diagnose it. I don't know the cause or when service returns, and I won't guess.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", statusLine, "utf8");
console.log(statusLine);
