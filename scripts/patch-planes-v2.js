const fs = require('fs');

// ── 1. HTML ─────────────────────────────────────────────────────
let html = fs.readFileSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html', 'utf8');

const htmlStart = html.indexOf('<section id="planes">');
const htmlEnd   = html.indexOf('</section>', htmlStart) + '</section>'.length;
if (htmlStart === -1) { console.error('planes section not found'); process.exit(1); }

const newSection = `<section id="planes">
  <div class="container">

    <div class="pln-hdr rv d0">
      <div class="s-label rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>Planes</div>
      <h2 class="pln-h rv d1">Elegí tu forma de escalar.</h2>
      <p class="pln-sub rv d2">Empezá gratis y avanzá cuando lo necesites. Cada plan está diseñado para un momento distinto de tu marca.</p>
    </div>

    <div class="pln-grid">

      <!-- ── CARD 1: Gratuito ── -->
      <div class="pln-card pln-free rv d1" data-plan="free">
        <div class="pln-top">
          <div class="pln-tier-tag">Entrada</div>
          <div class="pln-name">Gratuito</div>
          <div class="pln-tagline">Para comenzar a digitalizar tu comunicación de beneficios sin inversión inicial.</div>
          <div class="pln-price-row">
            <span class="pln-price-main">Gratis</span>
            <span class="pln-price-note">Sin costo de activación</span>
          </div>
          <ul class="pln-highlights">
            <li><span class="pln-hk">→</span>Panel de gestión básico</li>
            <li><span class="pln-hk">→</span>QR y links por sucursal</li>
            <li><span class="pln-hk">→</span>Soporte por email</li>
          </ul>
        </div>
        <div class="pln-details">
          <div class="pln-details-inner">
            <div class="pln-sep"></div>
            <ul class="pln-full-list">
              <li class="pln-fi">
                <div class="pln-fi-title">Panel de gestión básico</div>
                <div class="pln-fi-sub">Inicio para carga de promociones</div>
              </li>
              <li class="pln-fi">
                <div class="pln-fi-title">Dashboard</div>
                <ul class="pln-fi-items">
                  <li>Publicaciones activas</li>
                  <li>Activos por vencer</li>
                  <li>Inactivos</li>
                  <li>Sucursales y QR</li>
                </ul>
              </li>
              <li class="pln-fi">
                <div class="pln-fi-title">Distribución</div>
                <div class="pln-fi-sub">Link y QR genérico sin diseño personalizado</div>
              </li>
              <li class="pln-fi">
                <div class="pln-fi-title">Soporte por email</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="pln-footer">
          <a href="https://clash.com.ar/inicio/comercio" target="_blank" class="pln-cta pln-cta-free">Empezar gratis</a>
          <button class="pln-toggle">Ver todo lo incluido <svg class="pln-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button>
        </div>
      </div>

      <!-- ── CARD 2: Gestión Asistida (FEATURED) ── -->
      <div class="pln-card pln-feat rv d2" data-plan="gestion">
        <div class="pln-badge-wrap"><span class="pln-badge">Recomendado</span></div>
        <div class="pln-top">
          <div class="pln-tier-tag pln-tier-feat">Popular</div>
          <div class="pln-name">Gestión Asistida</div>
          <div class="pln-tagline">Para marcas que quieren operar sin fricción con el respaldo de nuestro equipo.</div>
          <div class="pln-price-row">
            <span class="pln-price-main pln-price-consult">Consultar</span>
            <span class="pln-price-note">Personalizado según operación</span>
          </div>
          <ul class="pln-highlights">
            <li><span class="pln-hk pln-hk-feat">→</span>Onboarding personalizado</li>
            <li><span class="pln-hk pln-hk-feat">→</span>Gestión operativa Clash</li>
            <li><span class="pln-hk pln-hk-feat">→</span>Analytics avanzado</li>
          </ul>
        </div>
        <div class="pln-details">
          <div class="pln-details-inner">
            <div class="pln-sep"></div>
            <ul class="pln-full-list">
              <li class="pln-fi"><div class="pln-fi-title pln-fi-incl">✦ Todo lo incluido en Gratuito</div></li>
              <li class="pln-fi"><div class="pln-fi-title">Onboarding personalizado</div></li>
              <li class="pln-fi">
                <div class="pln-fi-title">Gestión de carga de promociones</div>
                <div class="pln-fi-sub">Por el equipo de Clash</div>
              </li>
              <li class="pln-fi">
                <div class="pln-fi-title">Analytics avanzado</div>
                <ul class="pln-fi-items">
                  <li>Audiencia</li>
                  <li>Métricas de performance</li>
                  <li>Dashboard completo</li>
                </ul>
              </li>
              <li class="pln-fi">
                <div class="pln-fi-title">Soporte prioritario</div>
                <ul class="pln-fi-items">
                  <li>WhatsApp directo</li>
                  <li>Email prioritario</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="pln-footer">
          <a href="https://clash.com.ar/inicio/comercio" target="_blank" class="pln-cta pln-cta-feat">Consultar propuesta</a>
          <button class="pln-toggle pln-toggle-feat">Ver todo lo incluido <svg class="pln-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button>
        </div>
      </div>

      <!-- ── CARD 3: Scale ── -->
      <div class="pln-card pln-scale rv d3" data-plan="scale">
        <div class="pln-top">
          <div class="pln-tier-tag pln-tier-dark">Empresas</div>
          <div class="pln-name pln-name-dark">Scale</div>
          <div class="pln-tagline pln-tagline-dark">Para grandes marcas con operaciones complejas y múltiples canales.</div>
          <div class="pln-price-row">
            <span class="pln-price-main pln-price-dark pln-price-consult">Personalizado</span>
            <span class="pln-price-note pln-price-note-dark">Según volumen y operación</span>
          </div>
          <ul class="pln-highlights pln-highlights-dark">
            <li><span class="pln-hk pln-hk-dark">→</span>Integraciones multi-canal</li>
            <li><span class="pln-hk pln-hk-dark">→</span>Account Manager dedicado</li>
            <li><span class="pln-hk pln-hk-dark">→</span>Reportes personalizados</li>
          </ul>
        </div>
        <div class="pln-details">
          <div class="pln-details-inner">
            <div class="pln-sep pln-sep-dark"></div>
            <ul class="pln-full-list">
              <li class="pln-fi pln-fi-dark"><div class="pln-fi-title pln-fi-incl-dark">✦ Todo lo incluido en Gestión Asistida</div></li>
              <li class="pln-fi pln-fi-dark">
                <div class="pln-fi-title">Integración con sistemas propios</div>
                <ul class="pln-fi-items pln-fi-items-dark">
                  <li>Widget estándar para web</li>
                  <li>Integración en pantallas</li>
                  <li>Tótems digitales</li>
                  <li>Múltiples canales</li>
                </ul>
              </li>
              <li class="pln-fi pln-fi-dark">
                <div class="pln-fi-title">Account Manager dedicado</div>
                <ul class="pln-fi-items pln-fi-items-dark">
                  <li>Trabajo conjunto</li>
                  <li>Seguimiento operativo</li>
                  <li>Coordinación estratégica</li>
                </ul>
              </li>
              <li class="pln-fi pln-fi-dark">
                <div class="pln-fi-title">Reportes personalizados trimestrales</div>
                <ul class="pln-fi-items pln-fi-items-dark">
                  <li>Análisis de performance</li>
                  <li>Recomendaciones</li>
                  <li>Sugerencias de mejora</li>
                </ul>
              </li>
              <li class="pln-fi pln-fi-dark">
                <div class="pln-fi-title">Kit comercial</div>
                <ul class="pln-fi-items pln-fi-items-dark">
                  <li>QR personalizado para la marca</li>
                  <li>Diseño personalizado</li>
                </ul>
              </li>
              <li class="pln-fi pln-fi-dark">
                <div class="pln-fi-title">Próximamente</div>
                <div class="pln-fi-sub pln-fi-sub-dark">Envío automatizado de emails a managers de sucursales</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="pln-footer">
          <a href="https://clash.com.ar/inicio/comercio" target="_blank" class="pln-cta pln-cta-scale">Coordinar demo</a>
          <button class="pln-toggle pln-toggle-dark">Ver todo lo incluido <svg class="pln-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button>
        </div>
      </div>

      <!-- ── CARD 4: Propuesta a medida ── -->
      <div class="pln-card pln-custom rv d4" data-plan="custom">
        <div class="pln-top">
          <div class="pln-tier-tag pln-tier-dark">Exclusivo</div>
          <div class="pln-name pln-name-dark">Propuesta a medida</div>
          <div class="pln-tagline pln-tagline-dark">Diseñado desde cero para marcas con necesidades únicas y operaciones de alta escala.</div>
          <div class="pln-price-row">
            <span class="pln-price-main pln-price-dark pln-price-consult">A medida</span>
            <span class="pln-price-note pln-price-note-dark">Propuesta personalizada</span>
          </div>
          <ul class="pln-highlights pln-highlights-dark">
            <li><span class="pln-hk pln-hk-dark">→</span>Materiales físicos incluidos</li>
            <li><span class="pln-hk pln-hk-dark">→</span>Widgets personalizados</li>
            <li><span class="pln-hk pln-hk-dark">→</span>Web propia de promociones</li>
          </ul>
        </div>
        <div class="pln-details">
          <div class="pln-details-inner">
            <div class="pln-sep pln-sep-dark"></div>
            <ul class="pln-full-list">
              <li class="pln-fi pln-fi-dark"><div class="pln-fi-title pln-fi-incl-dark">✦ Todo lo incluido en Scale</div></li>
              <li class="pln-fi pln-fi-dark">
                <div class="pln-fi-title">Materiales físicos incluidos</div>
                <ul class="pln-fi-items pln-fi-items-dark">
                  <li>Coordinación de proveedores</li>
                  <li>Impresión</li>
                  <li>Distribución por sucursal</li>
                </ul>
              </li>
              <li class="pln-fi pln-fi-dark"><div class="pln-fi-title">Vistas personalizadas de widgets</div></li>
              <li class="pln-fi pln-fi-dark"><div class="pln-fi-title">Página web personalizada de promociones</div></li>
            </ul>
          </div>
        </div>
        <div class="pln-footer">
          <a href="https://clash.com.ar/inicio/comercio" target="_blank" class="pln-cta pln-cta-custom">Hablar con Clash</a>
          <button class="pln-toggle pln-toggle-dark">Ver todo lo incluido <svg class="pln-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button>
        </div>
      </div>

    </div><!-- /pln-grid -->
  </div>
</section>`;

html = html.substring(0, htmlStart) + newSection + html.substring(htmlEnd);

// ── 2. JS — insert before </body> ──────────────────────────────
const planJS = `
<script>
/* Plans — expandable cards */
(function(){
  var grid = document.querySelector('.pln-grid');
  if (!grid) return;
  document.querySelectorAll('.pln-toggle').forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      var card = btn.closest('.pln-card');
      var wasActive = card.classList.contains('active');
      grid.querySelectorAll('.pln-card').forEach(function(c){ c.classList.remove('active'); });
      grid.classList.remove('has-active');
      if (!wasActive) {
        card.classList.add('active');
        grid.classList.add('has-active');
        // Scroll card into view on mobile
        if (window.innerWidth < 640) {
          setTimeout(function(){ card.scrollIntoView({behavior:'smooth',block:'nearest'}); }, 50);
        }
      }
    });
  });
  // Click outside closes all
  document.addEventListener('click', function(e){
    if (!e.target.closest('.pln-card')) {
      grid.querySelectorAll('.pln-card').forEach(function(c){ c.classList.remove('active'); });
      grid.classList.remove('has-active');
    }
  });
})();
</script>`;

html = html.replace('</body>', planJS + '\n</body>');

fs.writeFileSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html', html, 'utf8');
console.log('HTML done. Size:', Math.round(fs.statSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html').size / 1024) + 'KB');

// ── 3. CSS — replace old planes block, add new pln- system ─────
let css = fs.readFileSync('C:/Users/agust/Documents/Codex/clash-conecta/styles.css', 'utf8');

const cssStart = css.indexOf('/* ── PLANES ── */');
const cssEnd   = css.indexOf('/* ── MÉTRICAS ── */');
if (cssStart === -1 || cssEnd === -1) { console.error('CSS markers not found', cssStart, cssEnd); process.exit(1); }

const newCSS = `/* ══════════════════════════════════════════════════════
   PLANES — pln- expandable cards system
   ══════════════════════════════════════════════════════ */
#planes{background:#f7f7f8}

/* Header */
.pln-hdr{text-align:center;margin-bottom:56px}
.pln-h{font-size:clamp(28px,3.5vw,46px);font-weight:900;letter-spacing:-1.5px;color:var(--dark);margin-bottom:12px}
.pln-sub{font-size:16px;color:var(--g500);max-width:540px;margin:0 auto;line-height:1.65}

/* Grid */
.pln-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;align-items:start}

/* Base card */
.pln-card{border-radius:20px;padding:28px 24px;border:1.5px solid #e5e7eb;background:#fff;display:flex;flex-direction:column;position:relative;transition:opacity .3s ease,filter .3s ease,transform .3s ease,box-shadow .3s ease}
.pln-card:hover{box-shadow:0 8px 32px rgba(0,0,0,.08)}

/* Focus / blur when one card is expanded */
.pln-grid.has-active .pln-card:not(.active){opacity:.3;filter:blur(.5px);transform:scale(.975)}
.pln-grid.has-active .pln-card:not(.active):hover{opacity:.5;filter:blur(0)}
.pln-card.active{box-shadow:0 0 0 2px var(--red),0 20px 60px rgba(220,38,38,.14),0 6px 20px rgba(0,0,0,.1);transform:translateY(-3px);z-index:2}

/* Tier tag */
.pln-tier-tag{font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--g400);margin-bottom:10px;display:block}
.pln-tier-feat{color:var(--red)}
.pln-tier-dark{color:rgba(255,255,255,.3)}

/* Name */
.pln-name{font-size:21px;font-weight:900;letter-spacing:-.4px;color:var(--dark);margin-bottom:6px;line-height:1.1}
.pln-name-dark{color:#fff}

/* Tagline */
.pln-tagline{font-size:13px;color:var(--g500);line-height:1.55;margin-bottom:20px}
.pln-tagline-dark{color:rgba(255,255,255,.38)}

/* Price */
.pln-price-row{margin-bottom:20px}
.pln-price-main{display:block;font-size:28px;font-weight:900;letter-spacing:-1.5px;color:var(--dark);line-height:1}
.pln-price-consult{font-size:20px;letter-spacing:-.5px}
.pln-price-dark{color:#fff}
.pln-price-note{display:block;font-size:11px;color:var(--g400);margin-top:5px}
.pln-price-note-dark{color:rgba(255,255,255,.28)}

/* Highlights */
.pln-highlights{list-style:none;display:flex;flex-direction:column;gap:7px}
.pln-highlights li{display:flex;align-items:flex-start;gap:8px;font-size:13px;color:var(--g700);line-height:1.4}
.pln-highlights-dark li{color:rgba(255,255,255,.65)}
.pln-hk{font-size:10px;color:var(--g300);flex-shrink:0;margin-top:3px;font-weight:700}
.pln-hk-feat{color:var(--red)}
.pln-hk-dark{color:rgba(255,255,255,.2)}

/* Separator */
.pln-sep{height:1px;background:#f0f0f2;margin:18px 0 14px}
.pln-sep-dark{background:rgba(255,255,255,.07)}

/* Expandable area — smooth grid-template-rows trick */
.pln-details{display:grid;grid-template-rows:0fr;transition:grid-template-rows .4s cubic-bezier(.4,0,.2,1)}
.pln-card.active .pln-details{grid-template-rows:1fr}
.pln-details-inner{overflow:hidden}

/* Full feature list */
.pln-full-list{list-style:none;display:flex;flex-direction:column;gap:10px;padding-bottom:2px}
.pln-fi{display:flex;flex-direction:column;gap:3px}
.pln-fi-title{font-size:12px;font-weight:700;color:var(--dark);line-height:1.4}
.pln-fi-dark .pln-fi-title{color:rgba(255,255,255,.8)}
.pln-fi-sub{font-size:11px;color:var(--g400);line-height:1.4}
.pln-fi-sub-dark{color:rgba(255,255,255,.28)}
.pln-fi-incl{color:var(--red);font-size:11px;font-weight:700}
.pln-fi-incl-dark{color:rgba(220,38,38,.65);font-size:11px;font-weight:700}
.pln-fi-items{list-style:none;display:flex;flex-direction:column;gap:2px;margin-top:3px;padding-left:8px}
.pln-fi-items li{font-size:11px;color:var(--g400);line-height:1.5}
.pln-fi-items li::before{content:"·";margin-right:4px;color:var(--g300)}
.pln-fi-items-dark li{color:rgba(255,255,255,.28)}
.pln-fi-items-dark li::before{color:rgba(255,255,255,.15)}

/* Card footer */
.pln-footer{display:flex;flex-direction:column;gap:10px;margin-top:22px}

/* CTAs */
.pln-cta{display:block;text-align:center;padding:12px 16px;border-radius:12px;font-size:13px;font-weight:700;text-decoration:none;transition:all .2s;letter-spacing:.1px}
.pln-cta-free{background:var(--dark);color:#fff}
.pln-cta-free:hover{background:#111;transform:translateY(-1px);box-shadow:0 4px 14px rgba(0,0,0,.2)}
.pln-cta-feat{background:var(--red);color:#fff;box-shadow:0 4px 16px rgba(220,38,38,.3)}
.pln-cta-feat:hover{background:#b91c1c;transform:translateY(-1px);box-shadow:0 6px 22px rgba(220,38,38,.4)}
.pln-cta-scale{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.14)}
.pln-cta-scale:hover{background:rgba(255,255,255,.16);transform:translateY(-1px)}
.pln-cta-custom{background:#fff;color:var(--dark);box-shadow:0 2px 8px rgba(0,0,0,.15)}
.pln-cta-custom:hover{background:#f9f9f9;transform:translateY(-1px);box-shadow:0 4px 14px rgba(0,0,0,.2)}

/* Toggle button */
.pln-toggle{display:flex;align-items:center;justify-content:center;gap:5px;background:none;border:none;font-size:11px;font-weight:600;color:var(--g400);cursor:pointer;transition:color .2s;padding:4px 0;width:100%;font-family:inherit}
.pln-toggle:hover{color:var(--dark)}
.pln-toggle-feat{color:rgba(220,38,38,.55)}
.pln-toggle-feat:hover{color:var(--red)}
.pln-toggle-dark{color:rgba(255,255,255,.22)}
.pln-toggle-dark:hover{color:rgba(255,255,255,.55)}
.pln-arrow{width:13px;height:13px;transition:transform .35s cubic-bezier(.4,0,.2,1);flex-shrink:0}
.pln-card.active .pln-arrow{transform:rotate(180deg)}

/* Badge */
.pln-badge-wrap{position:absolute;top:-13px;left:0;right:0;display:flex;justify-content:center;pointer-events:none}
.pln-badge{background:var(--red);color:#fff;font-size:10px;font-weight:800;padding:4px 14px;border-radius:20px;letter-spacing:.5px;white-space:nowrap}

/* Featured card */
.pln-feat{border-color:var(--red);box-shadow:0 0 0 1px rgba(220,38,38,.18),0 12px 40px rgba(220,38,38,.07);margin-top:13px}
.pln-feat.active{box-shadow:0 0 0 2px var(--red),0 20px 60px rgba(220,38,38,.2),0 6px 20px rgba(0,0,0,.1)}

/* Dark cards */
.pln-scale{background:#0f0f11;border-color:rgba(255,255,255,.07)}
.pln-custom{background:linear-gradient(150deg,#110a0a 0%,#0f0f11 100%);border-color:rgba(220,38,38,.18)}
.pln-custom:hover{box-shadow:0 8px 32px rgba(220,38,38,.09)}
.pln-scale.active,.pln-custom.active{box-shadow:0 0 0 2px rgba(220,38,38,.5),0 20px 60px rgba(220,38,38,.12),0 6px 20px rgba(0,0,0,.3)}

/* Responsive */
@media(max-width:1080px){
  .pln-grid{grid-template-columns:repeat(2,1fr);gap:20px}
  .pln-feat{margin-top:13px}
}
@media(max-width:640px){
  .pln-grid{grid-template-columns:1fr;gap:14px}
  .pln-card{padding:22px 18px}
  .pln-grid.has-active .pln-card:not(.active){opacity:.6;filter:none;transform:none}
}

`;

css = css.substring(0, cssStart) + newCSS + css.substring(cssEnd);
fs.writeFileSync('C:/Users/agust/Documents/Codex/clash-conecta/styles.css', css, 'utf8');
console.log('CSS done. Size:', Math.round(fs.statSync('C:/Users/agust/Documents/Codex/clash-conecta/styles.css').size / 1024) + 'KB');
