const fs = require('fs');
let html = fs.readFileSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html', 'utf8');

// Helper: replace .circ2-anim inner content for a given card
function replaceAnimBlock(cardComment, newAnimHTML) {
  const cardStart = html.indexOf(cardComment);
  if (cardStart === -1) throw new Error('Card not found: ' + cardComment);
  const animStart = html.indexOf('<div class="circ2-anim">', cardStart);
  if (animStart === -1) throw new Error('circ2-anim not found');
  // Find </div> that closes circ2-anim — depth 1 from animStart
  const innerStart = animStart + '<div class="circ2-anim">'.length;
  let depth = 1, i = innerStart, end = -1;
  while (i < html.length) {
    if (html[i] === '<') {
      if (html[i+1] === '/') {
        const c = html.indexOf('>', i);
        const tag = html.substring(i+2, c).trim().split(/\s/)[0];
        if (tag === 'div') { depth--; if (depth === 0) { end = i; break; } }
        i = c + 1; continue;
      } else {
        const c = html.indexOf('>', i);
        const inner = html.substring(i+1, c);
        const tag = inner.split(/[\s/>]/)[0].toLowerCase();
        // Only count div tags to avoid SVG/void confusion
        if (tag === 'div' && !inner.endsWith('/')) depth++;
        i = c + 1; continue;
      }
    }
    i++;
  }
  if (end === -1) throw new Error('Close not found');
  html = html.substring(0, innerStart) + '\n' + newAnimHTML + '\n          ' + html.substring(end);
  console.log('Replaced anim for:', cardComment);
}

// ════════════════════════════════════════════════════
// 03 INTERACCIÓN — phone + TOP PARTNERS ranking
// ════════════════════════════════════════════════════
const interHTML = `          <div class="anim-inter2">

            <!-- Left: TOP PARTNERS ranking -->
            <div class="ai2-rank">
              <div class="ai2-rank-ttl">TOP PARTNERS</div>
              <div class="ai2-rr ai2-rr1">
                <span class="ai2-rk-chip ai2-rk-icbc">ICBC</span>
                <div class="ai2-rk-bar"><div class="ai2-rk-fill ai2-rf1"></div></div>
                <span class="ai2-rk-pct">32%</span>
              </div>
              <div class="ai2-rr ai2-rr2">
                <span class="ai2-rk-chip ai2-rk-mp">MP</span>
                <div class="ai2-rk-bar"><div class="ai2-rk-fill ai2-rf2"></div></div>
                <span class="ai2-rk-pct">24%</span>
              </div>
              <div class="ai2-rr ai2-rr3">
                <span class="ai2-rk-chip ai2-rk-modo">MODO</span>
                <div class="ai2-rk-bar"><div class="ai2-rk-fill ai2-rf3"></div></div>
                <span class="ai2-rk-pct">18%</span>
              </div>
              <div class="ai2-rr ai2-rr4">
                <span class="ai2-rk-chip ai2-rk-nx">NX</span>
                <div class="ai2-rk-bar"><div class="ai2-rk-fill ai2-rf4"></div></div>
                <span class="ai2-rk-pct">15%</span>
              </div>
              <div class="ai2-rr ai2-rr5">
                <span class="ai2-rk-chip ai2-rk-pp">PP</span>
                <div class="ai2-rk-bar"><div class="ai2-rk-fill ai2-rf5"></div></div>
                <span class="ai2-rk-pct">11%</span>
              </div>
            </div>

            <!-- Center: phone + pulses + branded notifications -->
            <div class="ai2-center">
              <div class="ai2-pulse ai2-p1"></div>
              <div class="ai2-pulse ai2-p2"></div>
              <div class="ai2-pulse ai2-p3"></div>
              <div class="ai2-phone">
                <div class="ai2-screen">
                  <div class="ai2-promo-pill ai2-pill-a"></div>
                  <div class="ai2-promo-pill ai2-pill-b"></div>
                  <div class="ai2-promo-pill ai2-pill-c"></div>
                </div>
              </div>
              <!-- Branded notification toasts -->
              <div class="ai2-notif ai2-notif1">
                <span class="ai2-nb-chip ai2-nc--icbc">ICBC</span>
                <div class="ai2-notif-body"><div class="ai2-nb-l1"></div><div class="ai2-nb-l2"></div></div>
              </div>
              <div class="ai2-notif ai2-notif2">
                <span class="ai2-nb-chip ai2-nc--modo">MODO</span>
                <div class="ai2-notif-body"><div class="ai2-nb-l1"></div><div class="ai2-nb-l2"></div></div>
              </div>
              <div class="ai2-notif ai2-notif3">
                <span class="ai2-nb-chip ai2-nc--mp">MP</span>
                <div class="ai2-notif-body"><div class="ai2-nb-l1"></div><div class="ai2-nb-l2"></div></div>
              </div>
              <!-- User avatars -->
              <div class="ai2-users">
                <div class="ai2-user ai2-u1"></div>
                <div class="ai2-user ai2-u2"></div>
                <div class="ai2-user ai2-u3"></div>
              </div>
            </div>

          </div>`;

// ════════════════════════════════════════════════════
// 04 OPTIMIZACIÓN — Estado de Operación dashboard
// ════════════════════════════════════════════════════
const optiHTML = `          <div class="anim-opti2">

            <div class="ao2-op-title">ESTADO DE OPERACIÓN</div>
            <div class="ao2-op-grid">
              <div class="ao2-op-tile ao2-ot1">
                <span class="ao2-op-num">12</span>
                <span class="ao2-op-lbl">Beneficios activos</span>
              </div>
              <div class="ao2-op-tile ao2-ot2">
                <span class="ao2-op-num ao2-op-red">5</span>
                <span class="ao2-op-lbl">Por vencer</span>
              </div>
              <div class="ao2-op-tile ao2-ot3">
                <span class="ao2-op-num">10</span>
                <span class="ao2-op-lbl">Inactivos</span>
              </div>
              <div class="ao2-op-tile ao2-ot4">
                <span class="ao2-op-num ao2-op-red">75</span>
                <span class="ao2-op-lbl">Sucursales</span>
              </div>
              <div class="ao2-op-tile ao2-ot5">
                <span class="ao2-op-num">30</span>
                <span class="ao2-op-lbl">QR activos</span>
              </div>
              <div class="ao2-op-tile ao2-ot6">
                <span class="ao2-op-num ao2-op-red">400</span>
                <span class="ao2-op-lbl">Con alertas</span>
              </div>
            </div>
            <div class="ao2-op-bar">
              <span class="ao2-op-bi">1.4K 👍</span>
              <span class="ao2-op-bi">2.5K ⭐</span>
              <span class="ao2-op-bi">120 👎</span>
            </div>

          </div>`;

replaceAnimBlock('<!-- 03 INTERACCIÓN -->', interHTML);
replaceAnimBlock('<!-- 04 OPTIMIZACIÓN -->', optiHTML);

fs.writeFileSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html', html, 'utf8');
console.log('Done. Size:', Math.round(fs.statSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html').size/1024) + 'KB');
