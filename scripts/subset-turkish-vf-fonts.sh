#!/usr/bin/env bash
# Download Google Fonts OFL variable sources and emit Turkish-subset WOFF2.
# Crimson Pro: full wght axis. Readex Pro: upstream has HEXP+wght; we pin
# HEXP=0 via varLib.instancer so only wght remains (rounded style at minimum).
# Use --hinting-tables= with --no-hinting so cvar/MVAR stay when present.

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/static/fonts/_src"
OUT="$ROOT/static/fonts"
# Same interpreter as pyftsubset (fonttools venv / brew libexec).
PYTHON="${PYTHON:-$(head -1 "$(command -v pyftsubset)" | sed 's/^#!//')}"
mkdir -p "$SRC" "$OUT"

CRIMSON_URL='https://github.com/google/fonts/raw/main/ofl/crimsonpro/CrimsonPro%5Bwght%5D.ttf'
READEX_URL='https://github.com/google/fonts/raw/main/ofl/readexpro/ReadexPro%5BHEXP%2Cwght%5D.ttf'

curl -fsSL -o "$SRC/CrimsonPro-wght.ttf" "$CRIMSON_URL"
curl -fsSL -o "$SRC/ReadexPro-HEXP-wght.ttf" "$READEX_URL"

READEX_WGHT_ONLY="$SRC/ReadexPro-wght-pinned.ttf"
"$PYTHON" -m fontTools.varLib.instancer -o "$READEX_WGHT_ONLY" "$SRC/ReadexPro-HEXP-wght.ttf" HEXP=0

# Latin + Latin Extended + combining marks + punctuation + common symbols (Turkish + typographic)
UNICODES='U+0020-007F,U+00A0-00FF,U+0100-017F,U+0180-024F,U+0250-02AF,U+0300-036F,U+1E00-1EFF,U+2000-206F,U+2070-209F,U+20A0-20CF,U+20AC,U+2122,U+2150-218F,U+2190-21FF'

OPTS=(--unicodes="$UNICODES" --flavor=woff2 --no-hinting --hinting-tables= --ignore-missing-unicodes)

pyftsubset "$SRC/CrimsonPro-wght.ttf" "${OPTS[@]}" --output-file="$OUT/crimson-pro-turkish.woff2"
pyftsubset "$READEX_WGHT_ONLY" "${OPTS[@]}" --output-file="$OUT/readex-pro-turkish.woff2"

echo "Wrote $OUT/crimson-pro-turkish.woff2 and $OUT/readex-pro-turkish.woff2"
