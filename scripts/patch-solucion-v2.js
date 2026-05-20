const fs = require('fs');
let html = fs.readFileSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html', 'utf8');

// Use comment markers + next comment as boundaries
function replacePanel(n, newHTML) {
  const commentStart = html.indexOf(`<!-- PANEL ${n}:`);
  const nextComment = n < 5
    ? html.indexOf(`<!-- PANEL ${n+1}:`, commentStart)
    : html.indexOf('\n\n      </div>', commentStart); // after panel 5
  if (commentStart === -1 || nextComment === -1) throw new Error(`Panel ${n} boundary not found`);
  // Include 8 spaces indent before comment
  const blockStart = html.lastIndexOf('\n', commentStart); // newline before comment
  html = html.substring(0, blockStart + 1) + newHTML + '\n' + html.substring(nextComment);
  console.log(`Replaced panel ${n}`);
}

// ═══════════════════════════════════════════════════════
// PANEL 1 — Ordenar (app promo list, IMG 1 style)
// ═══════════════════════════════════════════════════════
const panel1 = `        <!-- PANEL 1: Ordenar promociones -->
        <div class="sol-panel sol-p1 active" data-panel="1">
          <div class="sp1-phone">
            <div class="sp1-branch-row">
              <div class="sp1-logo-sq"><span>$|</span></div>
              <div class="sp1-branch-info">
                <div class="sp1-branch-name">Del Parque Outlet</div>
                <div class="sp1-branch-addr">Cuenca 3035, CABA, Capital Federal</div>
                <div class="sp1-branch-link">Ver los 3 beneficios</div>
              </div>
              <div class="sp1-dist">272.1 km</div>
            </div>

            <div class="sp1-section-hd">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;flex-shrink:0"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
              <span class="sp1-shd-label">PROMOS DEL COMERCIO</span>
              <span class="sp1-shd-sub">Disponibles para vos</span>
            </div>

            <div class="sp1-promo-item sp1-pi1">
              <div class="sp1-pi-left">
                <div class="sp1-pi-title">Todos los productos</div>
                <div class="sp1-pi-sub">Pagando en efectivo</div>
                <div class="sp1-pi-tag">TODOS LOS DÍAS</div>
              </div>
              <div class="sp1-pi-right">
                <span class="sp1-pct">15%</span>
                <span class="sp1-de">de ahorro</span>
                <span class="sp1-tope">Sin tope</span>
              </div>
            </div>
            <div class="sp1-reactions">
              <span class="sp1-react">👍 0</span>
              <span class="sp1-react">👎 0</span>
              <span class="sp1-react">↪ 0</span>
              <span class="sp1-react sp1-reach">📊 1</span>
            </div>

            <div class="sp1-brand-hd sp1-bh--modo">
              <span class="sp1-bh-chip sp1-chip--modo">MODO</span>
              <span class="sp1-bh-name">MODO</span>
            </div>

            <div class="sp1-promo-item sp1-pi2">
              <div class="sp1-pi-left">
                <div class="sp1-pi-title">Todos los productos</div>
                <div class="sp1-pi-cards">
                  <span class="sp1-card sp1-card--x">X</span>
                </div>
              </div>
              <div class="sp1-pi-right">
                <span class="sp1-pct sp1-pct--sm">15%</span>
                <span class="sp1-de">+3 cuotas</span>
                <span class="sp1-de">sin interés</span>
                <span class="sp1-tope">Sin tope</span>
              </div>
            </div>
            <div class="sp1-reactions">
              <span class="sp1-react">👍 0</span>
              <span class="sp1-react">👎 0</span>
              <span class="sp1-react">↪ 0</span>
              <span class="sp1-react sp1-reach">📊 9</span>
            </div>

            <div class="sp1-brand-hd sp1-bh--bbva">
              <span class="sp1-bh-chip sp1-chip--bbva">BBVA</span>
              <span class="sp1-bh-name">BANCO BBVA</span>
            </div>

            <div class="sp1-promo-item sp1-pi3">
              <div class="sp1-pi-left">
                <div class="sp1-pi-title">Todos los productos</div>
                <div class="sp1-pi-cards">
                  <span class="sp1-card sp1-card--visa">VISA</span>
                  <span class="sp1-card sp1-card--visa sp1-cv-ghost">VISA</span>
                  <span class="sp1-card sp1-card--visa">VISA</span>
                  <span class="sp1-card sp1-card--visa sp1-cv-ghost">VISA</span>
                </div>
              </div>
              <div class="sp1-pi-right">
                <span class="sp1-pct sp1-pct--dark">3</span>
                <span class="sp1-de">cuotas</span>
                <span class="sp1-de">sin interés</span>
              </div>
            </div>
          </div>
        </div>`;

// ═══════════════════════════════════════════════════════
// PANEL 3 — Simplificar (promo detail view, IMG 2 style)
// ═══════════════════════════════════════════════════════
const panel3 = `        <!-- PANEL 3: Simplificar actualización -->
        <div class="sol-panel sol-p3" data-panel="3">
          <div class="sp3-phone">
            <div class="sp3-top-bar">
              <div class="sp3-brand-row">
                <span class="sp3-brand-chip">MODO</span>
                <span class="sp3-brand-nm">MODO</span>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;color:#555;flex-shrink:0"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </div>
            <div class="sp3-hero-card">
              <div class="sp3-store-ico"><span>$|</span></div>
              <div class="sp3-store-nm">Shades</div>
              <div class="sp3-hero-t">Todos los productos</div>
              <div class="sp3-hero-disc"><span class="sp3-pct">15%</span><span class="sp3-de"> de ahorro</span></div>
              <div class="sp3-hero-sub">+3 cuotas sin interés</div>
            </div>
            <div class="sp3-cond-card">
              <div class="sp3-cond-title">Condiciones</div>
              <div class="sp3-cond-row sp3-cr1">
                <span class="sp3-lbl">Tope descuento</span>
                <span class="sp3-val">Sin tope</span>
              </div>
              <div class="sp3-cond-row sp3-cr2">
                <span class="sp3-lbl">Cuotas</span>
                <div class="sp3-val-col">
                  <span class="sp3-val">3 cuotas sin interés</span>
                  <span class="sp3-tiny">TNA: 0% | TEA: 0% | CFTNA: 0%</span>
                </div>
              </div>
              <div class="sp3-cond-row sp3-cr3">
                <span class="sp3-lbl">Vigencia</span>
                <div class="sp3-val-col">
                  <span class="sp3-val">Hasta el 30/05/2026</span>
                  <span class="sp3-tiny">23:59:00</span>
                </div>
              </div>
              <div class="sp3-cond-row sp3-cr4">
                <span class="sp3-lbl">Pagando con</span>
                <span class="sp3-val">Tarjeta de Crédito</span>
              </div>
              <div class="sp3-cond-row sp3-cr5">
                <span class="sp3-lbl">Días disponibles</span>
                <div class="sp3-days">
                  <span class="sp3-day">L</span>
                  <span class="sp3-day">M</span>
                  <span class="sp3-day sp3-day--on">M</span>
                  <span class="sp3-day">J</span>
                  <span class="sp3-day">V</span>
                  <span class="sp3-day">S</span>
                  <span class="sp3-day">D</span>
                </div>
              </div>
            </div>
            <div class="sp3-disclaimer">Pueden existir términos y condiciones de la promocion no listados aquí.</div>
          </div>
        </div>`;

// ═══════════════════════════════════════════════════════
// PANEL 5 — Escalar (estado de operación, IMG 3 style)
// ═══════════════════════════════════════════════════════
const panel5 = `        <!-- PANEL 5: Escalar visibilidad -->
        <div class="sol-panel sol-p5" data-panel="5">
          <div class="sp5-card">
            <div class="sp5-card-title">ESTADO DE OPERACIÓN</div>
            <div class="sp5-grid">
              <div class="sp5-tile sp5-t1">
                <div class="sp5-num">12</div>
                <div class="sp5-lbl">Beneficios publicados activos</div>
              </div>
              <div class="sp5-tile sp5-t2">
                <div class="sp5-num sp5-num--red">5</div>
                <div class="sp5-lbl">Activos por vencer en 30 días</div>
              </div>
              <div class="sp5-tile sp5-t3">
                <div class="sp5-num">10</div>
                <div class="sp5-lbl">Inactivos / no publicados</div>
              </div>
              <div class="sp5-tile sp5-t4">
                <div class="sp5-num sp5-num--red">75</div>
                <div class="sp5-lbl">Sucursales activas administradas</div>
              </div>
              <div class="sp5-tile sp5-t5">
                <div class="sp5-num">30</div>
                <div class="sp5-lbl">QR habilitados en sucursales</div>
              </div>
              <div class="sp5-tile sp5-t6">
                <div class="sp5-num sp5-num--red">400</div>
                <div class="sp5-lbl">Usuarios con alertas activas</div>
              </div>
            </div>
            <div class="sp5-bar">
              <div class="sp5-bar-item">
                <span class="sp5-bar-num">1.4K</span>
                <span class="sp5-bar-lbl">👍 Me gusta</span>
              </div>
              <div class="sp5-bar-item">
                <span class="sp5-bar-num">2.5K</span>
                <span class="sp5-bar-lbl">⭐ Cal. positivas</span>
              </div>
              <div class="sp5-bar-item">
                <span class="sp5-bar-num">120</span>
                <span class="sp5-bar-lbl">👎 Cal. negativas</span>
              </div>
            </div>
          </div>
        </div>`;

replacePanel(1, panel1);
replacePanel(3, panel3);
replacePanel(5, panel5);

fs.writeFileSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html', html, 'utf8');
console.log('Done. Size:', Math.round(fs.statSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html').size/1024) + 'KB');
