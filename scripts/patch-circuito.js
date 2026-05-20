const fs = require('fs');
const htmlPath = 'C:/Users/agust/Documents/Codex/clash-conecta/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// 1. Update numbers to 01-04 format
html = html.replace(/<div class="circ2-num nr">1<\/div>/, '<div class="circ2-num nr">01</div>');
html = html.replace(/<div class="circ2-num ny">2<\/div>/, '<div class="circ2-num ny">02</div>');
html = html.replace(/<div class="circ2-num nr">3<\/div>/, '<div class="circ2-num nr">03</div>');
html = html.replace(/<div class="circ2-num ny">4<\/div>/, '<div class="circ2-num ny">04</div>');

// 2. Add bottom panel before </section> of #circuito
const bottomPanel = `
  <!-- ¿Cómo ven mis clientes las promociones? -->
  <div class="circ-bottom-panel">
    <div class="container" style="padding-top:56px;padding-bottom:72px">
      <div class="circ-bottom-hdr rv">
        <h3 class="circ-bottom-h3">¿Cómo ven mis clientes las promociones?</h3>
        <p class="circ-bottom-sub">Las promociones pueden visualizarse desde múltiples formatos según la estrategia de distribución.</p>
      </div>
      <div class="circ-bottom-grid rv d1">

        <!-- Phone 1: Micrositio marca -->
        <div class="circ-phone-col">
          <div class="circ-phone-mockup">
            <div class="circ-ph-frame">
              <div class="circ-ph-screen">
                <div class="circ-ph-topbar"><span>9:41</span><span style="font-weight:900;color:var(--red)">clash.</span><span>▐▌</span></div>
                <div class="circ-ph-content">
                  <div class="circ-ph-brand-row">
                    <div class="circ-ph-bk-badge">BK</div>
                    <span class="circ-ph-brand-name">Burger King</span>
                  </div>
                  <div class="circ-ph-item">
                    <div class="circ-ph-bank-tag" style="background:#e8f0fe;color:#1a56db">Banco Hipotecario</div>
                    <div class="circ-ph-item-row"><span>Todos los productos</span><strong class="circ-ph-pct">40%</strong></div>
                    <div class="circ-ph-item-sub">Hasta el 30/06/2026 · Tope $15.000</div>
                    <div class="circ-ph-badge-red">TODOS LOS DÍAS</div>
                  </div>
                  <div class="circ-ph-item">
                    <div class="circ-ph-bank-tag" style="background:#fef3c7;color:#92400e">Clarín 365</div>
                    <div class="circ-ph-item-row"><span>Todos los productos</span><strong class="circ-ph-pct">15%</strong></div>
                    <div class="circ-ph-item-sub">Hasta el 30/06/2026</div>
                    <div class="circ-ph-badge-red">TODOS LOS DÍAS</div>
                  </div>
                  <div class="circ-ph-item">
                    <div class="circ-ph-bank-tag" style="background:#d1fae5;color:#065f46">Mercado Pago</div>
                    <div class="circ-ph-item-row"><span>Todos los productos</span><strong class="circ-ph-pct">15%</strong></div>
                    <div class="circ-ph-item-sub">Hasta el 30/06/2026 · Tope $7.000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Text 1 -->
        <div class="circ-text-col">
          <div class="circ-text-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:22px;height:22px"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
          </div>
          <h4 class="circ-text-h4">Desde el micrositio de tu marca</h4>
          <p class="circ-text-p">Tus clientes encuentran todas las promociones disponibles organizadas por comercios, bancos y categorías.</p>
        </div>

        <!-- Phone 2: Promo individual detalle -->
        <div class="circ-phone-col">
          <div class="circ-phone-mockup">
            <div class="circ-ph-frame">
              <div class="circ-ph-screen">
                <div class="circ-ph-topbar"><span style="font-size:9px;color:var(--g500)">‹ Banco BBVA</span><span></span><span></span></div>
                <div class="circ-ph-content circ-ph-detail-view">
                  <div class="circ-ph-detail-logo">V</div>
                  <div class="circ-ph-detail-brand">Vincenzo</div>
                  <div class="circ-ph-detail-all">Todos los productos</div>
                  <div class="circ-ph-detail-pct">30% <span class="circ-ph-detail-label">de ahorro</span></div>
                  <div class="circ-ph-detail-extra">+6 cuotas sin interés</div>
                  <div class="circ-ph-divider"></div>
                  <div class="circ-ph-conds">
                    <div class="circ-ph-cond-row"><span>Tope descuento</span><span>$16.000</span></div>
                    <div class="circ-ph-cond-row"><span>Vigencia</span><span style="color:var(--red);font-size:8.5px">08/01 — 30/06/2026</span></div>
                    <div class="circ-ph-cond-row"><span>Cuotas</span><span>6 sin interés</span></div>
                    <div class="circ-ph-cond-row"><span>Pagando con</span><span>Tarjeta Crédito</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Text 2 -->
        <div class="circ-text-col">
          <div class="circ-text-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:22px;height:22px"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
          </div>
          <h4 class="circ-text-h4">Promoción individual para compartir</h4>
          <p class="circ-text-p">Cada beneficio puede compartirse de forma simple y rápida por WhatsApp, redes sociales, QR o link directo.</p>
          <div class="circ-share-row">
            <div class="circ-share-btn wsp" title="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" style="width:18px;height:18px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.099 1.507 5.815L0 24l6.335-1.482A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0"/></svg>
            </div>
            <div class="circ-share-btn ig" title="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </div>
            <div class="circ-share-btn lnk" title="Link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
            </div>
            <div class="circ-share-btn qr" title="QR">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/><rect x="18" y="18" width="3" height="3"/></svg>
            </div>
          </div>
        </div>

      </div>
      <p class="circ-bottom-footer">Clash conecta marcas y personas con experiencias que generan valor real.</p>
    </div>
  </div>
`;

// Insert bottom panel before closing </section> of #circuito
const circEnd = html.indexOf('<!-- ═══ 5. GESTIÓN ═══ -->');
if (circEnd === -1) { console.log('Could not find section end'); process.exit(1); }

// Find the </section> right before GESTIÓN
const sectionEnd = html.lastIndexOf('</section>', circEnd);
html = html.slice(0, sectionEnd) + bottomPanel + '\n</section>\n' + html.slice(circEnd);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Done. Size:', Math.round(fs.statSync(htmlPath).size / 1024) + 'KB');
