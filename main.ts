// The Worst Pizza Topping — make.fun entry (u-motasimfuad-the-worst-pizza-topping-062c6893).
// Writes exactly one funny line to /output/entry.txt and exits 0.
// The pitch: pizza topped with day-old gas-station sushi, still warm
// from the dashboard — vivid and specific, with the raffle/paramedic turn
// as the payoff at the end. Single sentence, clean sales-pitch voice.
// ("Day-old" replaces "yesterday's": tighter, and it makes the sushi
// sound even worse in fewer characters.)
// Deterministic: no clock, no randomness, no I/O besides the write.
import { writeFileSync, mkdirSync, chmodSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Now serving pizza topped with day-old gas-station sushi, still warm from the dashboard — every bite is a raffle, and the grand prize is meeting a paramedic.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
chmodSync(outDir, 0o755);
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, ENTRY, "utf8");
chmodSync(outFile, 0o644);
process.exit(0);
