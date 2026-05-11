#!/usr/bin/env bash
# Voice violation audit — Wineology articles
# Usage: bash audit.sh   (run from project root: C:\Users\Jade\Desktop\Claude B\Wineology)

set -e

CATEGORIES=(
  "best-wines"
  "wine-basics"
  "wine-tools"
  "gift-guides"
  "compare"
  "regions"
  "grapes"
  "types-of-wine"
  "pairing"
  "food-wine-pairing"
  "wine-glossary"
)

echo "=== EM-DASH AUDIT ==="
for cat in "${CATEGORIES[@]}"; do
  for f in src/content/articles/$cat/*.mdx; do
    [ -f "$f" ] || continue
    c=$(grep -c "—" "$f" 2>/dev/null || echo 0)
    if [ "$c" -gt 0 ]; then
      echo "  $c em-dashes: $f"
    fi
  done
done

echo
echo "=== \"NOT X, JUST Y\" PATTERN AUDIT ==="
for cat in "${CATEGORIES[@]}"; do
  matches=$(grep -lEi "not [a-z]+, just|isn't [a-z]+\. (It's|Just)|not [a-z]+\. (It's|Just)" \
    src/content/articles/$cat/*.mdx 2>/dev/null || true)
  if [ -n "$matches" ]; then
    echo "$matches" | sed 's/^/  /'
  fi
done

echo
echo "=== BANNED PHRASES AUDIT ==="
for cat in "${CATEGORIES[@]}"; do
  matches=$(grep -lEi "world of wine|wine journey|let's dive in|let us dive in" \
    src/content/articles/$cat/*.mdx 2>/dev/null || true)
  if [ -n "$matches" ]; then
    echo "$matches" | sed 's/^/  /'
  fi
done

echo
echo "Audit complete."
