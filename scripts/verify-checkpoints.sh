#!/usr/bin/env bash
# 유지보수용: 모든 체크포인트를 새로 설치하고 lint와 build가 통과하는지 확인해요.
# 사용법: bash scripts/verify-checkpoints.sh
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
failed=()

for dir in "$root"/checkpoints/*/; do
  name="$(basename "$dir")"
  echo "=== $name"
  if (cd "$dir" && npm ci --no-audit --no-fund --loglevel=error && npm run lint && npm run build); then
    echo "✓ $name"
  else
    echo "✗ $name"
    failed+=("$name")
  fi
done

if [ ${#failed[@]} -gt 0 ]; then
  echo "실패한 체크포인트: ${failed[*]}"
  exit 1
fi
echo "모든 체크포인트 통과"
