const fs = require('fs');
let html = fs.readFileSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html', 'utf8');

const sectionStart = html.indexOf('<section id="como-ven">');
const sectionEnd   = html.indexOf('</section>', sectionStart) + '</section>'.length;
if (sectionStart === -1 || sectionEnd === -1) { console.error('Section not found'); process.exit(1); }

console.log('Replacing section:', sectionEnd - sectionStart, 'chars →', 'new HTML');

const newSection = `<section id="como-ven">
  <div class="cv2-section">
    <div class="container">

      <!-- Header -->
      <div class="cv2-hdr rv d1">
        <p class="cv2-sup">DISTRIBUCIÓN DE CONTENIDO</p>
        <h3 class="cv2-h3">¿Cómo ven mis clientes las promociones?</h3>
        <p class="cv2-sub">Las promociones pueden visualizarse desde múltiples formatos según la estrategia de distribución.</p>
      </div>

      <!-- Two-column grid -->
      <div class="cv2-grid rv d2">

        <!-- ════════════════════════════════════
             COL 1 — Micrositio de marca
             ════════════════════════════════════ -->
        <div class="cv2-col">

          <div class="cv2-card cv2-micro cv2-float1">

            <!-- Browser bar -->
            <div class="cv2-browser">
              <div class="cv2-bb-dots">
                <span class="cv2-dot cv2-dot-r"></span>
                <span class="cv2-dot cv2-dot-y"></span>
                <span class="cv2-dot cv2-dot-g"></span>
              </div>
              <div class="cv2-bb-url">🔒 clash.app/<strong>burger-king</strong></div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:13px;height:13px;opacity:.4;flex-shrink:0"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </div>

            <!-- Top nav -->
            <div class="cv2-topnav">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="width:16px;height:16px;color:#999;flex-shrink:0"><polyline points="15 18 9 12 15 6"/></svg>
              <div class="cv2-brand">
                <div class="cv2-brand-logo">BK</div>
                <div>
                  <div class="cv2-brand-name">Burger King</div>
                  <div class="cv2-brand-sub">Hamburguesas · 5 sucursales</div>
                </div>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;color:#bbb;flex-shrink:0"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </div>

            <!-- Filter tabs -->
            <div class="cv2-tabs">
              <span class="cv2-tab cv2-tab-on">Todos</span>
              <span class="cv2-tab">MODO</span>
              <span class="cv2-tab">BBVA</span>
              <span class="cv2-tab">NX</span>
              <span class="cv2-tab">Efectivo</span>
            </div>

            <!-- Promo list -->
            <div class="cv2-plist">

              <div class="cv2-phd cv2-phd-hipot">
                <span class="cv2-pchip cv2-pch-hipot">HIPOTECARIO</span>
                <span class="cv2-pbank">BANCO HIPOTECARIO</span>
              </div>
              <div class="cv2-prow cv2-prow-anim cv2-pra1">
                <div class="cv2-prow-l">
                  <div class="cv2-prow-title">Todos los productos</div>
                  <div class="cv2-prow-cards">
                    <span class="cv2-pcard cv2-pcard-mc">MC</span>
                    <span class="cv2-pcard cv2-pcard-nx">NX</span>
                    <span class="cv2-pcard cv2-pcard-nx cv2-pcard-ghost">NX</span>
                  </div>
                  <span class="cv2-prow-day">TODOS LOS DÍAS</span>
                </div>
                <div class="cv2-prow-r">
                  <span class="cv2-bignum">40%</span>
                  <span class="cv2-de">de ahorro</span>
                  <span class="cv2-tope">Tope $33.500</span>
                </div>
              </div>

              <div class="cv2-phd cv2-phd-clash">
                <span class="cv2-pchip cv2-pch-clash">CLASH</span>
                <span class="cv2-pbank">CLASH APP</span>
              </div>
              <div class="cv2-prow cv2-prow-anim cv2-pra2">
                <div class="cv2-prow-l">
                  <div class="cv2-prow-title">Todos los productos</div>
                  <div class="cv2-prow-cards">
                    <span class="cv2-pcard cv2-pcard-visa">VISA</span>
                  </div>
                </div>
                <div class="cv2-prow-r">
                  <span class="cv2-bignum cv2-bn-sm">15%</span>
                  <span class="cv2-de">de ahorro</span>
                </div>
              </div>

              <div class="cv2-phd cv2-phd-mp">
                <span class="cv2-pchip cv2-pch-mp">MP</span>
                <span class="cv2-pbank">MERCADO PAGO</span>
              </div>
              <div class="cv2-prow cv2-prow-anim cv2-pra3">
                <div class="cv2-prow-l">
                  <div class="cv2-prow-title">Todos los productos</div>
                  <div class="cv2-prow-cards">
                    <span class="cv2-pcard cv2-pcard-visa cv2-pcard-ghost">VISA</span>
                    <span class="cv2-pcard cv2-pcard-visa cv2-pcard-ghost">VISA</span>
                  </div>
                </div>
                <div class="cv2-prow-r">
                  <span class="cv2-bignum cv2-bn-sm">15%</span>
                  <span class="cv2-de">de ahorro</span>
                  <span class="cv2-tope">Tope $66.666</span>
                </div>
              </div>

            </div><!-- /cv2-plist -->

            <div class="cv2-micro-more">Ver los 3 beneficios →</div>

          </div><!-- /cv2-micro -->

          <div class="cv2-col-label">
            <div class="cv2-lbl-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            </div>
            <div>
              <div class="cv2-lbl-ttl">Desde el micrositio de tu marca</div>
              <div class="cv2-lbl-sub">Tus clientes encuentran todas las promociones disponibles organizadas por comercios, bancos y categorías.</div>
            </div>
          </div>

        </div><!-- /cv2-col 1 -->

        <!-- ════════════════════════════════════
             COL 2 — Promo individual para compartir
             ════════════════════════════════════ -->
        <div class="cv2-col">

          <div class="cv2-card cv2-promoind cv2-float2">

            <!-- Brand header -->
            <div class="cv2-pi-hd">
              <div class="cv2-pi-brand">
                <span class="cv2-pi-chip">VINOTECA</span>
                <span class="cv2-pi-bname">Vinoteca</span>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;opacity:.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </div>

            <!-- Hero -->
            <div class="cv2-pi-hero">
              <div class="cv2-pi-logo">🍷</div>
              <div class="cv2-pi-store">Vinoteca</div>
              <div class="cv2-pi-title">Todos los productos</div>
              <div class="cv2-pi-disc">
                <span class="cv2-pi-pct">30%</span>
                <span class="cv2-pi-de"> de ahorro</span>
              </div>
              <div class="cv2-pi-sub">+6 cuotas sin interés</div>
            </div>

            <!-- Conditions -->
            <div class="cv2-pi-conds">
              <div class="cv2-pi-ctitle">Condiciones</div>
              <div class="cv2-cr"><span class="cv2-clbl">Tope descuento</span><span class="cv2-cval">$10.000</span></div>
              <div class="cv2-cr"><span class="cv2-clbl">Acumulable</span><span class="cv2-cval cv2-cval-no">No · $23.22</span></div>
              <div class="cv2-cr"><span class="cv2-clbl">Tipo de tope</span><span class="cv2-cval">x cuenta x mes</span></div>
              <div class="cv2-cr"><span class="cv2-clbl">Vigencia</span><span class="cv2-cval">08/01/2026 — 30/06/2026</span></div>
              <div class="cv2-cr"><span class="cv2-clbl">Cuotas</span><span class="cv2-cval">6 cuotas sin interés</span></div>
              <div class="cv2-cr"><span class="cv2-clbl">Pagando con</span><span class="cv2-cval">Tarjeta de Crédito</span></div>
              <div class="cv2-cr">
                <span class="cv2-clbl">Días</span>
                <div class="cv2-days">
                  <span class="cv2-day">L</span><span class="cv2-day">M</span><span class="cv2-day">M</span>
                  <span class="cv2-day cv2-day-on">J</span>
                  <span class="cv2-day">V</span><span class="cv2-day">S</span><span class="cv2-day">D</span>
                </div>
              </div>
            </div>

            <!-- Share buttons -->
            <div class="cv2-share">
              <button class="cv2-sbtn cv2-sb-wsp" title="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" style="width:18px;height:18px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </button>
              <button class="cv2-sbtn cv2-sb-ig" title="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:18px;height:18px"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </button>
              <button class="cv2-sbtn cv2-sb-lnk" title="Link directo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:18px;height:18px"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
              </button>
              <button class="cv2-sbtn cv2-sb-qr" title="QR">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:18px;height:18px"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="5.5" y="5.5" width="2" height="2" fill="currentColor" stroke="none"/><rect x="16.5" y="5.5" width="2" height="2" fill="currentColor" stroke="none"/><rect x="5.5" y="16.5" width="2" height="2" fill="currentColor" stroke="none"/><line x1="14" y1="14" x2="14" y2="14"/><line x1="17" y1="14" x2="21" y2="14"/><line x1="14" y1="17" x2="14" y2="21"/><line x1="21" y1="17" x2="21" y2="21"/><line x1="17" y1="17" x2="17" y2="17"/></svg>
              </button>
            </div>

          </div><!-- /cv2-promoind -->

          <div class="cv2-col-label">
            <div class="cv2-lbl-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </div>
            <div>
              <div class="cv2-lbl-ttl">Promoción individual para compartir</div>
              <div class="cv2-lbl-sub">Cada beneficio puede compartirse de forma simple y rápida por WhatsApp, redes sociales, QR o link directo.</div>
            </div>
          </div>

        </div><!-- /cv2-col 2 -->

      </div><!-- /cv2-grid -->

      <p class="cv2-footer rv d3">Clash conecta marcas y personas con experiencias que generan valor real.</p>

    </div>
  </div>
</section>`;

html = html.substring(0, sectionStart) + newSection + html.substring(sectionEnd);
fs.writeFileSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html', html, 'utf8');
console.log('Done. Size:', Math.round(fs.statSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html').size/1024) + 'KB');
