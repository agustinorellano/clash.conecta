const fs = require('fs');

// ── 1. HTML patch ──────────────────────────────────────────────
let html = fs.readFileSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html', 'utf8');

// Replace left card interior (cv2-micro)
const leftStart  = html.indexOf('<div class="cv2-card cv2-micro cv2-float1">');
const leftEnd    = html.indexOf('</div><!-- /cv2-micro -->', leftStart) + '</div><!-- /cv2-micro -->'.length;
if (leftStart === -1 || leftEnd < leftStart) { console.error('Left card not found'); process.exit(1); }

const newLeftCard = `<div class="cv2-card cv2-micro cv2-float1">
            <img src="assets/cv2-micrositio.png" class="cv2-card-img" alt="Micrositio de marca — Clash App">
          </div><!-- /cv2-micro -->`;

html = html.substring(0, leftStart) + newLeftCard + html.substring(leftEnd);

// Replace right card interior (cv2-promoind) — re-search after first replacement
const rightStart = html.indexOf('<div class="cv2-card cv2-promoind cv2-float2">');
const rightEnd   = html.indexOf('</div><!-- /cv2-promoind -->', rightStart) + '</div><!-- /cv2-promoind -->'.length;
if (rightStart === -1 || rightEnd < rightStart) { console.error('Right card not found'); process.exit(1); }

const newRightCard = `<div class="cv2-card cv2-promoind cv2-float2">
            <img src="assets/cv2-promo.jpg" class="cv2-card-img" alt="Promoción individual para compartir — Clash App">
          </div><!-- /cv2-promoind -->`;

html = html.substring(0, rightStart) + newRightCard + html.substring(rightEnd);

fs.writeFileSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html', html, 'utf8');
console.log('HTML patched. Size:', Math.round(fs.statSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html').size / 1024) + 'KB');

// ── 2. CSS patch — add .cv2-card-img rule to cv2 block ─────────
let css = fs.readFileSync('C:/Users/agust/Documents/Codex/clash-conecta/styles.css', 'utf8');

// Insert before the responsive block at bottom of cv2 section
const insertBefore = '/* ══ Responsive ══ */';
const insertIdx = css.indexOf(insertBefore);
if (insertIdx === -1) { console.error('CSS insert marker not found'); process.exit(1); }

// Check if already inserted to avoid duplicates
if (css.indexOf('.cv2-card-img') !== -1) {
  console.log('CSS already has .cv2-card-img — skipping CSS patch');
} else {
  const newCssRules = `/* ── Screenshot images inside cards ── */
.cv2-card-img{width:100%;height:100%;object-fit:cover;object-position:top center;display:block;flex:1;min-height:360px}

`;
  css = css.substring(0, insertIdx) + newCssRules + css.substring(insertIdx);
  fs.writeFileSync('C:/Users/agust/Documents/Codex/clash-conecta/styles.css', css, 'utf8');
  console.log('CSS patched. Size:', Math.round(fs.statSync('C:/Users/agust/Documents/Codex/clash-conecta/styles.css').size / 1024) + 'KB');
}
