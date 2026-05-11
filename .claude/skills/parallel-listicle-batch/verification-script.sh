#!/usr/bin/env bash
# verification-script.sh
# Run these three commands against a draft MDX and paste the raw output into your return to the orchestrator.
# Do NOT interpret the results. Paste the terminal output verbatim.
# Usage: bash verification-script.sh <slug>
# Example: bash verification-script.sh best-wines-for-a-wedding

set -e

SLUG="${1:?Usage: bash verification-script.sh <slug>}"
DRAFT="content/02-drafts/${SLUG}_draft.mdx"
AUDIT_SCRIPT=".claude/skills/paragraph-audit/audit.py"
WINEOLOGY_ROOT="C:/Users/Jade/Desktop/Claude B/Wineology"

cd "${WINEOLOGY_ROOT}"

echo "========================================================"
echo "VERIFICATION REPORT — ${SLUG}"
echo "Run date: $(date)"
echo "========================================================"

echo ""
echo "--- CHECK 1: PARAGRAPH AUDIT ---"
echo "Command: python ${AUDIT_SCRIPT} ${DRAFT}"
echo ""
python "${AUDIT_SCRIPT}" "${DRAFT}"

echo ""
echo "--- CHECK 2: EM-DASH GREP ---"
echo "Command: grep -c '—' ${DRAFT}"
echo ""
EM_COUNT=$(grep -c "—" "${DRAFT}" || true)
echo "Em-dash count: ${EM_COUNT}"
if [ "${EM_COUNT}" -eq 0 ]; then
  echo "PASS: No em-dashes found."
else
  echo "FAIL: ${EM_COUNT} em-dash(es) found. Fix before returning."
  grep -n "—" "${DRAFT}"
fi

echo ""
echo "--- CHECK 3: COMPONENT PRESENCE ---"
echo "Command: grep -E '(WineTraits|AffiliateCTA|TopPicksInline|WineQuiz|MethodologyBox|WineTip)' ${DRAFT} | grep -v '^import'"
echo ""
grep -E "(WineTraits|AffiliateCTA|TopPicksInline|WineQuiz|MethodologyBox|WineTip)" "${DRAFT}" | grep -v "^import" || true

echo ""
echo "--- CHECK 3 SUMMARY ---"
WINE_H3_COUNT=$(grep -c "^### " "${DRAFT}" || true)
WINE_TRAITS_COUNT=$(grep -c "<WineTraits " "${DRAFT}" || true)
AFFILIATE_CTA_COUNT=$(grep -c "<AffiliateCTA" "${DRAFT}" || true)
TOP_PICKS_COUNT=$(grep -c "<TopPicksInline" "${DRAFT}" || true)
WINE_QUIZ_COUNT=$(grep -c "<WineQuiz" "${DRAFT}" || true)
METHODOLOGY_COUNT=$(grep -c "<MethodologyBox" "${DRAFT}" || true)
WINE_TIP_COUNT=$(grep -c "<WineTip" "${DRAFT}" || true)

echo "H3 wine pick sections: ${WINE_H3_COUNT}"
echo "WineTraits blocks: ${WINE_TRAITS_COUNT}"
echo "AffiliateCTA blocks: ${AFFILIATE_CTA_COUNT}"
echo "TopPicksInline: ${TOP_PICKS_COUNT} (expected: 1)"
echo "WineQuiz: ${WINE_QUIZ_COUNT} (expected: 1)"
echo "MethodologyBox: ${METHODOLOGY_COUNT} (expected: 1)"
echo "WineTip: ${WINE_TIP_COUNT} (expected: 2)"

if [ "${WINE_H3_COUNT}" -ne "${WINE_TRAITS_COUNT}" ]; then
  echo ""
  echo "FAIL: WineTraits count (${WINE_TRAITS_COUNT}) does not match H3 count (${WINE_H3_COUNT})."
  echo "Every wine pick H3 must be immediately followed by a WineTraits block."
fi

if [ "${WINE_H3_COUNT}" -ne "${AFFILIATE_CTA_COUNT}" ]; then
  echo ""
  echo "FAIL: AffiliateCTA count (${AFFILIATE_CTA_COUNT}) does not match H3 count (${WINE_H3_COUNT})."
  echo "Every wine pick must have an AffiliateCTA after the descriptive paragraphs."
fi

echo ""
echo "========================================================"
echo "END OF VERIFICATION REPORT"
echo "Paste this entire output (from the top line) into your return to the orchestrator."
echo "========================================================"
