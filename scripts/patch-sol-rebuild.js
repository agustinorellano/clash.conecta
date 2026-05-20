const fs = require('fs');
let html = fs.readFileSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html', 'utf8');

function replacePanel(n, newHTML) {
  const commentStr = `<!-- PANEL ${n}:`;
  const commentStart = html.indexOf(commentStr);
  const nextBoundary = n < 5
    ? html.indexOf(`<!-- PANEL ${n+1}:`, commentStart)
    : html.indexOf('\n\n      </div>', commentStart);
  if (commentStart === -1 || nextBoundary === -1) throw new Error(`Panel ${n} boundary not found`);
  const blockStart = html.lastIndexOf('\n', commentStart);
  html = html.substring(0, blockStart + 1) + newHTML + '\n' + html.substring(nextBoundary);
  console.log(`✓ Panel ${n} replaced`);
}

// Also upgrade the sol-visual wrapper itself
function upgradeSolVisual() {
  html = html.replace(
    'class="sol-visual rv d2"',
    'class="sol-visual rv d2" aria-label="Producto Clash"'
  );
}

// ══════════════════════════════════════════════════════════════
// PANEL 1 — Ordenar: Admin CMS / Promo Management Interface
// ══════════════════════════════════════════════════════════════
const p1 = `        <!-- PANEL 1: Ordenar promociones -->
        <div class="sol-panel sol-p1 active" data-panel="1">
          <div class="sv-card sv-float1">
            <div class="sv-chrome">
              <span class="sv-dot sv-dot-r"></span><span class="sv-dot sv-dot-y"></span><span class="sv-dot sv-dot-g"></span>
              <span class="sv-chrome-label">Gestión de Promos</span>
              <button class="sv-chrome-btn">+ Nueva</button>
            </div>
            <div class="sv-body">
              <div class="sv-filters">
                <span class="sv-f sv-f-on">Todos</span>
                <span class="sv-f">Vigentes</span>
                <span class="sv-f">Vencidas</span>
                <span class="sv-f">Borradores</span>
              </div>
              <div class="sv-table">
                <div class="sv-th">
                  <span>Medio de pago</span><span>Promoción</span><span>Estado</span>
                </div>
                <div class="sv-tr sv-tr1">
                  <span class="sv-pip sv-pip-modo">MODO</span>
                  <div class="sv-tr-info"><div class="sv-tl sv-tl1"></div><div class="sv-tl sv-tl2"></div></div>
                  <span class="sv-badge sv-badge-green">Activa</span>
                </div>
                <div class="sv-tr sv-tr2">
                  <span class="sv-pip sv-pip-bbva">BBVA</span>
                  <div class="sv-tr-info"><div class="sv-tl sv-tl3"></div><div class="sv-tl sv-tl4"></div></div>
                  <span class="sv-badge sv-badge-green">Activa</span>
                </div>
                <div class="sv-tr sv-tr3">
                  <span class="sv-pip sv-pip-mp">MP</span>
                  <div class="sv-tr-info"><div class="sv-tl sv-tl1"></div><div class="sv-tl sv-tl2"></div></div>
                  <span class="sv-badge sv-badge-yellow">Vence hoy</span>
                </div>
                <div class="sv-tr sv-tr4">
                  <span class="sv-pip sv-pip-cash">CASH</span>
                  <div class="sv-tr-info"><div class="sv-tl sv-tl3"></div><div class="sv-tl sv-tl4"></div></div>
                  <span class="sv-badge sv-badge-green">Activa</span>
                </div>
                <div class="sv-tr sv-tr5">
                  <span class="sv-pip sv-pip-nx">NX</span>
                  <div class="sv-tr-info"><div class="sv-tl sv-tl1"></div><div class="sv-tl sv-tl4"></div></div>
                  <span class="sv-badge sv-badge-gray">Borrador</span>
                </div>
              </div>
              <div class="sv-foot">
                <span class="sv-foot-txt">12 activas · 3 por vencer · 10 inactivas</span>
                <span class="sv-live-dot"></span>
              </div>
            </div>
          </div>
        </div>`;

// ══════════════════════════════════════════════════════════════
// PANEL 2 — Unificar: Multi-channel publish center
// ══════════════════════════════════════════════════════════════
const p2 = `        <!-- PANEL 2: Unificar comunicación -->
        <div class="sol-panel sol-p2" data-panel="2">
          <div class="sv-card sv-float2">
            <div class="sv-chrome">
              <span class="sv-dot sv-dot-r"></span><span class="sv-dot sv-dot-y"></span><span class="sv-dot sv-dot-g"></span>
              <span class="sv-chrome-label">Distribuir Promoción</span>
            </div>
            <div class="sv-body">
              <div class="sv-pub-hero">
                <div class="sv-pub-logo"><span>$|</span></div>
                <div class="sv-pub-info">
                  <div class="sv-pub-brand">Shades</div>
                  <div class="sv-pub-promo">15% de ahorro · MODO</div>
                </div>
                <div class="sv-pub-ready"><span class="sv-live-dot"></span> Lista</div>
              </div>
              <div class="sv-ch-grid">
                <div class="sv-ch sv-ch-on sv-ch1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  <span>Instagram</span>
                  <span class="sv-ch-toggle sv-ct-on"></span>
                </div>
                <div class="sv-ch sv-ch-on sv-ch2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
                  <span>WhatsApp</span>
                  <span class="sv-ch-toggle sv-ct-on"></span>
                </div>
                <div class="sv-ch sv-ch-on sv-ch3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z"/></svg>
                  <span>Web</span>
                  <span class="sv-ch-toggle sv-ct-on"></span>
                </div>
                <div class="sv-ch sv-ch-on sv-ch4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                  <span>App</span>
                  <span class="sv-ch-toggle sv-ct-on"></span>
                </div>
                <div class="sv-ch sv-ch-on sv-ch5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/><rect x="18" y="14" width="3" height="3"/><rect x="14" y="18" width="3" height="3"/><rect x="18" y="18" width="3" height="3"/></svg>
                  <span>QR</span>
                  <span class="sv-ch-toggle sv-ct-on"></span>
                </div>
                <div class="sv-ch sv-ch-off">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  <span>Vidriera</span>
                  <span class="sv-ch-toggle"></span>
                </div>
              </div>
              <div class="sv-pub-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="width:12px;height:12px"><polyline points="20 6 9 17 4 12"/></svg>
                Publicado en 5 canales
              </div>
            </div>
          </div>
        </div>`;

// ══════════════════════════════════════════════════════════════
// PANEL 3 — Simplificar: Promoción Individual para Compartir
// ══════════════════════════════════════════════════════════════
const p3 = `        <!-- PANEL 3: Simplificar actualización -->
        <div class="sol-panel sol-p3" data-panel="3">
          <div class="sv-card sv-card-promo sv-float3">
            <!-- Brand header strip -->
            <div class="sv-promo-hd">
              <div class="sv-promo-brand">
                <span class="sv-promo-chip">MODO</span>
                <span class="sv-promo-brand-nm">MODO</span>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="sv-share-ico"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </div>
            <!-- Hero -->
            <div class="sv-promo-hero">
              <div class="sv-promo-logo"><span>$|</span></div>
              <div class="sv-promo-store">Shades</div>
              <div class="sv-promo-title">Todos los productos</div>
              <div class="sv-promo-disc"><span class="sv-pct">15%</span><span class="sv-de"> de ahorro</span></div>
              <div class="sv-promo-sub">+3 cuotas sin interés</div>
            </div>
            <!-- Conditions -->
            <div class="sv-promo-cond">
              <div class="sv-pc-row sv-pc1">
                <span class="sv-pc-lbl">Tope</span>
                <span class="sv-pc-val">Sin tope</span>
              </div>
              <div class="sv-pc-row sv-pc2">
                <span class="sv-pc-lbl">Vigencia</span>
                <span class="sv-pc-val">Hasta 30/05/2026</span>
              </div>
              <div class="sv-pc-row sv-pc3">
                <span class="sv-pc-lbl">Días</span>
                <div class="sv-days">
                  <span class="sv-day">L</span><span class="sv-day">M</span><span class="sv-day sv-day-on">M</span><span class="sv-day">J</span><span class="sv-day">V</span><span class="sv-day">S</span><span class="sv-day">D</span>
                </div>
              </div>
            </div>
            <!-- QR + URL -->
            <div class="sv-promo-qr-row">
              <div class="sv-qr-box">
                <div class="sv-qr-tl sv-qr-corner"></div>
                <div class="sv-qr-tr sv-qr-corner"></div>
                <div class="sv-qr-bl sv-qr-corner"></div>
                <div class="sv-qr-dots"></div>
                <div class="sv-qr-scan"></div>
              </div>
              <div class="sv-qr-info">
                <div class="sv-qr-url">clash.app/<strong>shades</strong></div>
                <div class="sv-qr-hint">Escaneá para ver la promo</div>
              </div>
            </div>
            <!-- CTA -->
            <div class="sv-promo-cta">Ver promoción completa
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="width:12px;height:12px"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          </div>
        </div>`;

// ══════════════════════════════════════════════════════════════
// PANEL 4 — Links y QR: Micrositio de Marca
// ══════════════════════════════════════════════════════════════
const p4 = `        <!-- PANEL 4: Links y QR -->
        <div class="sol-panel sol-p4" data-panel="4">
          <div class="sv-card sv-card-micro sv-float4">
            <!-- Browser chrome -->
            <div class="sv-browser-bar">
              <div class="sv-bb-dots">
                <span class="sv-dot sv-dot-r"></span><span class="sv-dot sv-dot-y"></span><span class="sv-dot sv-dot-g"></span>
              </div>
              <div class="sv-bb-url">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:9px;height:9px;opacity:.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                clash.app/shades-palermo
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:11px;height:11px;opacity:.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </div>
            <!-- Nav bar -->
            <div class="sv-micro-nav">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="width:13px;height:13px;opacity:.5"><polyline points="15 18 9 12 15 6"/></svg>
              <div class="sv-mn-brand">
                <div class="sv-mn-logo"><span>$|</span></div>
                <div class="sv-mn-info">
                  <div class="sv-mn-name">Shades</div>
                  <div class="sv-mn-sub">Indumentaria · Palermo</div>
                </div>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:13px;height:13px;opacity:.4"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </div>
            <!-- Filter tabs -->
            <div class="sv-micro-tabs">
              <span class="sv-mt sv-mt-on">Todos</span>
              <span class="sv-mt">MODO</span>
              <span class="sv-mt">BBVA</span>
              <span class="sv-mt">Efectivo</span>
            </div>
            <!-- Promo cards grid -->
            <div class="sv-micro-grid">
              <div class="sv-mc sv-mc1">
                <div class="sv-mc-top">
                  <span class="sv-mc-chip sv-mcc-modo">MODO</span>
                </div>
                <div class="sv-mc-val">15<span class="sv-mc-unit">%</span></div>
                <div class="sv-mc-lbl">de ahorro</div>
                <div class="sv-mc-tag">TODOS LOS DÍAS</div>
              </div>
              <div class="sv-mc sv-mc2">
                <div class="sv-mc-top">
                  <span class="sv-mc-chip sv-mcc-bbva">BBVA</span>
                </div>
                <div class="sv-mc-val">3<span class="sv-mc-unit">x</span></div>
                <div class="sv-mc-lbl">sin interés</div>
                <div class="sv-mc-cards">
                  <span class="sv-mcard">VISA</span>
                  <span class="sv-mcard sv-mc-ghost">VISA</span>
                </div>
              </div>
            </div>
            <!-- Promo row -->
            <div class="sv-micro-row">
              <span class="sv-mr-dot"></span>
              <span class="sv-mr-txt">Efectivo — 10% ahorro</span>
              <span class="sv-mr-tag">TODOS LOS DÍAS</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="width:10px;height:10px;opacity:.4;margin-left:auto;flex-shrink:0"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
            <!-- Footer link -->
            <div class="sv-micro-more">Ver los 12 beneficios →</div>
          </div>
        </div>`;

// ══════════════════════════════════════════════════════════════
// PANEL 5 — Escalar: Analytics Dashboard (Estado de Operación)
// ══════════════════════════════════════════════════════════════
const p5 = `        <!-- PANEL 5: Escalar visibilidad -->
        <div class="sol-panel sol-p5" data-panel="5">
          <div class="sv-card sv-float5">
            <div class="sv-chrome">
              <span class="sv-dot sv-dot-r"></span><span class="sv-dot sv-dot-y"></span><span class="sv-dot sv-dot-g"></span>
              <span class="sv-chrome-label">Estado de Operación</span>
              <span class="sv-live-pill"><span class="sv-live-dot"></span>En vivo</span>
            </div>
            <div class="sv-body">
              <div class="sv-stats-grid">
                <div class="sv-stat sv-s1">
                  <div class="sv-stat-num">12</div>
                  <div class="sv-stat-lbl">Beneficios publicados activos</div>
                </div>
                <div class="sv-stat sv-s2">
                  <div class="sv-stat-num sv-stat-red">5</div>
                  <div class="sv-stat-lbl">Activos por vencer en 30 días</div>
                </div>
                <div class="sv-stat sv-s3">
                  <div class="sv-stat-num">10</div>
                  <div class="sv-stat-lbl">Inactivos / no publicados</div>
                </div>
                <div class="sv-stat sv-s4">
                  <div class="sv-stat-num sv-stat-red">75</div>
                  <div class="sv-stat-lbl">Sucursales activas administradas</div>
                </div>
                <div class="sv-stat sv-s5">
                  <div class="sv-stat-num">30</div>
                  <div class="sv-stat-lbl">QR habilitados en sucursales</div>
                </div>
                <div class="sv-stat sv-s6">
                  <div class="sv-stat-num sv-stat-red">400</div>
                  <div class="sv-stat-lbl">Usuarios con alertas activas</div>
                </div>
              </div>
            </div>
            <div class="sv-engage-bar">
              <div class="sv-eb-item">
                <span class="sv-eb-num">1.4K</span>
                <span class="sv-eb-lbl">👍 Me gusta</span>
              </div>
              <div class="sv-eb-item">
                <span class="sv-eb-num">2.5K</span>
                <span class="sv-eb-lbl">⭐ Cal. positivas</span>
              </div>
              <div class="sv-eb-item">
                <span class="sv-eb-num">120</span>
                <span class="sv-eb-lbl">👎 Cal. negativas</span>
              </div>
            </div>
          </div>
        </div>`;

replacePanel(1, p1);
replacePanel(2, p2);
replacePanel(3, p3);
replacePanel(4, p4);
replacePanel(5, p5);
upgradeSolVisual();

fs.writeFileSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html', html, 'utf8');
console.log('Done. Size:', Math.round(fs.statSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html').size/1024) + 'KB');
