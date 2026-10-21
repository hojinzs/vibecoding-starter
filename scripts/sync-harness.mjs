// 유지보수용: harness/ 와 docs/prd/study-signup.md 를 모든 체크포인트에 복사해요.
// 체크포인트마다 다른 STEP.md 는 건드리지 않아요.
// 사용법: node scripts/sync-harness.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const harness = path.join(root, "harness");
const prd = path.join(root, "docs", "prd", "study-signup.md");
const checkpointsDir = path.join(root, "checkpoints");

const checkpoints = fs
  .readdirSync(checkpointsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => path.join(checkpointsDir, entry.name));

for (const checkpoint of checkpoints) {
  // 예전에 있던 스킬이 남지 않게 .claude/skills 는 지우고 새로 복사해요.
  fs.rmSync(path.join(checkpoint, ".claude", "skills"), { recursive: true, force: true });
  fs.cpSync(harness, checkpoint, { recursive: true });
  fs.copyFileSync(prd, path.join(checkpoint, "PRD.md"));

  if (!fs.existsSync(path.join(checkpoint, "STEP.md"))) {
    console.warn(`! ${path.basename(checkpoint)}: STEP.md 가 없어요`);
  }
  console.log(`✓ ${path.basename(checkpoint)}`);
}
