const fs = require('fs');

// ── 1. HTML ─────────────────────────────────────────────────────
let html = fs.readFileSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html', 'utf8');

// ── Panel 2: Unificar comunicación comercial ──────────────────
const p2Start = html.indexOf('<!-- PANEL 2:');
const p3Marker = html.indexOf('<!-- PANEL 3:');
if (p2Start === -1 || p3Marker === -1) { console.error('Panel 2/3 markers not found'); process.exit(1); }

const newPanel2 = `<!-- PANEL 2: Compartir via link -->
        <div class="sol-panel sol-p2" data-panel="2">
          <div class="sv-card sv-float2">
            <!-- Promo lista para compartir -->
            <div class="sv-s2-promo">
              <div class="sv-s2-brand">
                <div class="sv-s2-logo">$|</div>
                <div>
                  <div class="sv-s2-bname">Shades</div>
                  <div class="sv-s2-bdesc">15% de ahorro · MODO</div>
                </div>
              </div>
              <span class="sv-s2-ready"><span class="sv-live-dot"></span>Lista</span>
            </div>

            <!-- Botón de acción humano -->
            <div class="sv-s2-action">
              <button class="sv-s2-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="width:12px;height:12px"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                Compartir promoción
              </button>
            </div>

            <!-- Link generado -->
            <div class="sv-s2-link-wrap">
              <div class="sv-s2-link-bar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:9px;height:9px;opacity:.4;flex-shrink:0"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                <span class="sv-s2-url">clash.app/<strong>shades</strong>/modo-15</span>
                <span class="sv-s2-copy">Copiar</span>
              </div>
              <div class="sv-s2-preview">
                <div class="sv-s2-pv-logo">$|</div>
                <div class="sv-s2-pv-info">
                  <div class="sv-s2-pv-title">Shades · 15% con MODO</div>
                  <div class="sv-s2-pv-url">clash.app/shades</div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="width:10px;height:10px;opacity:.3;flex-shrink:0"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>

            <!-- Iconos sociales -->
            <div class="sv-s2-distribute">
              <div class="sv-s2-note">Llevá este link a tus canales</div>
              <div class="sv-s2-icons">
                <div class="sv-si sv-si1" title="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:14px;height:14px"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </div>
                <div class="sv-si sv-si2" title="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
                <div class="sv-si sv-si3" title="TikTok">
                  <svg viewBox="0 0 24 24" fill="currentColor" style="width:13px;height:13px"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.05a8.21 8.21 0 004.82 1.55V7.18a4.85 4.85 0 01-1.05-.49z"/></svg>
                </div>
                <div class="sv-si sv-si4" title="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" style="width:13px;height:13px"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div class="sv-si sv-si5" title="Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:14px;height:14px"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;

html = html.substring(0, p2Start) + newPanel2 + html.substring(p3Marker);

// ── Panel 3: Simplificar actualización de contenido ───────────
const p3Start = html.indexOf('<!-- PANEL 3:');
const p4Marker = html.indexOf('<!-- PANEL 4:');
if (p3Start === -1 || p4Marker === -1) { console.error('Panel 3/4 markers not found'); process.exit(1); }

const newPanel3 = `<!-- PANEL 3: Actualizacion de contenido (sin QR) -->
        <div class="sol-panel sol-p3" data-panel="3">
          <div class="sv-card sv-float3">
            <div class="sv-chrome">
              <span class="sv-dot sv-dot-r"></span><span class="sv-dot sv-dot-y"></span><span class="sv-dot sv-dot-g"></span>
              <span class="sv-chrome-label">Actualizaciones programadas</span>
              <span class="sv-live-pill"><span class="sv-live-dot"></span>En vivo</span>
            </div>
            <div class="sv-body">

              <!-- Mini calendario -->
              <div class="sv3-cal-hdr">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:11px;height:11px;opacity:.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <span class="sv3-cal-label">Mayo 2026</span>
                <span class="sv3-next-upd">Próxima actualización: 01/06</span>
              </div>

              <!-- Fila 1: activa (estática) -->
              <div class="sv3-row">
                <div class="sv3-row-left">
                  <span class="sv-pip sv-pip-modo" style="font-size:8px;padding:2px 6px">MODO</span>
                  <div>
                    <div class="sv3-row-title">15% de ahorro</div>
                    <div class="sv3-row-sub">Vence 30/05</div>
                  </div>
                </div>
                <span class="sv-badge sv-badge-green">Activa</span>
              </div>

              <!-- Fila 2: badge animado (se actualiza) -->
              <div class="sv3-row sv3-row-updating">
                <div class="sv3-row-left">
                  <span class="sv-pip sv-pip-bbva" style="font-size:8px;padding:2px 6px">BBVA</span>
                  <div>
                    <div class="sv3-row-title">30% + cuotas</div>
                    <div class="sv3-row-sub">Actualizado ahora</div>
                  </div>
                </div>
                <div class="sv3-badge-wrap">
                  <span class="sv3-badge sv3-b1 sv-badge sv-badge-yellow">Vence hoy</span>
                  <span class="sv3-badge sv3-b2 sv-badge" style="background:rgba(220,38,38,.1);color:var(--red)">Actualizando…</span>
                  <span class="sv3-badge sv3-b3 sv-badge sv-badge-green">Actualizada ✓</span>
                </div>
              </div>

              <!-- Fila 3: nueva promo (entrada animada) -->
              <div class="sv3-row sv3-row-new">
                <div class="sv3-row-left">
                  <span class="sv-pip sv-pip-mp" style="font-size:8px;padding:2px 6px">MP</span>
                  <div>
                    <div class="sv3-row-title">10% en efectivo</div>
                    <div class="sv3-row-sub">Creada ahora</div>
                  </div>
                </div>
                <span class="sv-badge" style="background:rgba(59,130,246,.1);color:#3b82f6">Nueva</span>
              </div>

              <!-- Notificación de actualización -->
              <div class="sv3-notif">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="width:11px;height:11px;color:#16a34a;flex-shrink:0"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Contenido actualizado automáticamente</span>
              </div>

              <!-- Barra de progreso programación -->
              <div class="sv3-schedule">
                <div class="sv3-sch-lbl">Próximas actualizaciones programadas</div>
                <div class="sv3-sch-bar">
                  <div class="sv3-sch-fill"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
        `;

html = html.substring(0, p3Start) + newPanel3 + html.substring(p4Marker);

// ── Panel 4: Link + QR (dos momentos) ────────────────────────
const p4Start = html.indexOf('<!-- PANEL 4:');
const p5Marker = html.indexOf('<!-- PANEL 5:');
if (p4Start === -1 || p5Marker === -1) { console.error('Panel 4/5 markers not found'); process.exit(1); }

const newPanel4 = `<!-- PANEL 4: Link + QR (dos momentos) -->
        <div class="sol-panel sol-p4" data-panel="4">
          <div class="sv-card sv-float4">
            <div class="sv4-moments">

              <!-- MOMENTO A: Link generado -->
              <div class="sv4-half sv4-link-half">
                <div class="sv-chrome">
                  <span class="sv-dot sv-dot-r"></span><span class="sv-dot sv-dot-y"></span><span class="sv-dot sv-dot-g"></span>
                  <span class="sv-chrome-label">Link generado</span>
                  <span class="sv4-ok-pill">✓</span>
                </div>
                <div class="sv-body sv4-body">
                  <div class="sv4-promo-mini">
                    <div class="sv4-pm-logo">$|</div>
                    <div>
                      <div class="sv4-pm-name">Shades · 15% MODO</div>
                      <div class="sv4-pm-sub">Todos los productos</div>
                    </div>
                  </div>
                  <div class="sv4-link-bar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:9px;height:9px;opacity:.4;flex-shrink:0"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                    <span class="sv4-url">clash.app/<strong>shades</strong>/modo</span>
                    <span class="sv4-copy">Copiar</span>
                  </div>
                  <div class="sv4-link-preview">
                    <div class="sv4-lp-logo">$|</div>
                    <div class="sv4-lp-info">
                      <div class="sv4-lp-title">Shades · 15% con MODO</div>
                      <div class="sv4-lp-url">clash.app/shades</div>
                    </div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="width:10px;height:10px;opacity:.3;flex-shrink:0"><polyline points="9 18 15 12 9 6"/></svg>
                  </div>
                  <div class="sv4-share-hint">Compartí donde quieras</div>
                  <div class="sv4-si-row">
                    <span class="sv4-si sv4-s1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:13px;height:13px"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></span>
                    <span class="sv4-si sv4-s2"><svg viewBox="0 0 24 24" fill="currentColor" style="width:13px;height:13px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></span>
                    <span class="sv4-si sv4-s3"><svg viewBox="0 0 24 24" fill="currentColor" style="width:12px;height:12px"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.05a8.21 8.21 0 004.82 1.55V7.18a4.85 4.85 0 01-1.05-.49z"/></svg></span>
                    <span class="sv4-si sv4-s4"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:13px;height:13px"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
                  </div>
                </div>
              </div>

              <!-- MOMENTO B: QR generado -->
              <div class="sv4-half sv4-qr-half">
                <div class="sv-chrome">
                  <span class="sv-dot sv-dot-r"></span><span class="sv-dot sv-dot-y"></span><span class="sv-dot sv-dot-g"></span>
                  <span class="sv-chrome-label">QR generado</span>
                  <span class="sv4-ok-pill">✓</span>
                </div>
                <div class="sv-body sv4-body">
                  <div class="sv4-promo-mini">
                    <div class="sv4-pm-logo">$|</div>
                    <div>
                      <div class="sv4-pm-name">Shades · 15% MODO</div>
                      <div class="sv4-pm-sub">Todos los productos</div>
                    </div>
                  </div>
                  <!-- QR premium SVG -->
                  <div class="sv4-qr-display">
                    <svg class="sv4-qr-svg" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <!-- Finder TL -->
                      <rect x="4" y="4" width="22" height="22" rx="3" fill="#0f0f11"/>
                      <rect x="7" y="7" width="16" height="16" rx="2" fill="white"/>
                      <rect x="10" y="10" width="10" height="10" rx="2" fill="#0f0f11"/>
                      <!-- Finder TR -->
                      <rect x="62" y="4" width="22" height="22" rx="3" fill="#0f0f11"/>
                      <rect x="65" y="7" width="16" height="16" rx="2" fill="white"/>
                      <rect x="68" y="10" width="10" height="10" rx="2" fill="#0f0f11"/>
                      <!-- Finder BL -->
                      <rect x="4" y="62" width="22" height="22" rx="3" fill="#0f0f11"/>
                      <rect x="7" y="65" width="16" height="16" rx="2" fill="white"/>
                      <rect x="10" y="68" width="10" height="10" rx="2" fill="#0f0f11"/>
                      <!-- Data modules -->
                      <rect x="30" y="4" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="36" y="4" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="48" y="4" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="56" y="4" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="30" y="10" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="42" y="10" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="54" y="10" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="30" y="16" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="36" y="16" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="48" y="16" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="56" y="16" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="4" y="30" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="10" y="30" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="18" y="30" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="30" y="30" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="42" y="30" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="56" y="30" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="62" y="30" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="80" y="30" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="4" y="36" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="18" y="36" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="36" y="36" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="48" y="36" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="68" y="36" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="80" y="36" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="4" y="42" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="10" y="42" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="22" y="42" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="36" y="42" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="56" y="42" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="74" y="42" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="30" y="48" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="42" y="48" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="54" y="48" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="68" y="48" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="80" y="48" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="30" y="56" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="36" y="56" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="48" y="56" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="62" y="56" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="74" y="56" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="80" y="56" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="30" y="62" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="42" y="62" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="68" y="62" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="80" y="62" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="30" y="68" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="36" y="68" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="54" y="68" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="62" y="68" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="74" y="68" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="30" y="74" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="48" y="74" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="62" y="74" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="80" y="74" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="30" y="80" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="42" y="80" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="56" y="80" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <rect x="68" y="80" width="4" height="4" rx="1" fill="#0f0f11"/>
                      <!-- Clash logo center -->
                      <rect x="37" y="37" width="14" height="14" rx="3" fill="white" filter="drop-shadow(0 1px 3px rgba(0,0,0,.15))"/>
                      <rect x="40" y="40" width="8" height="8" rx="2" fill="#dc2626"/>
                    </svg>
                    <div class="sv4-qr-url">clash.app/<strong>shades</strong></div>
                  </div>
                  <!-- Usos del QR -->
                  <div class="sv4-qr-uses">
                    <span class="sv4-use">Vidriera</span>
                    <span class="sv4-use">Sticker</span>
                    <span class="sv4-use">Mesa</span>
                    <span class="sv4-use">Impresión</span>
                  </div>
                  <div class="sv4-ready-pill">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="width:10px;height:10px"><polyline points="20 6 9 17 4 12"/></svg>
                    Listo para usar
                  </div>
                </div>
              </div>

            </div><!-- /sv4-moments -->
          </div>
        </div>
        `;

html = html.substring(0, p4Start) + newPanel4 + html.substring(p5Marker);

fs.writeFileSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html', html, 'utf8');
console.log('HTML done. Size:', Math.round(fs.statSync('C:/Users/agust/Documents/Codex/clash-conecta/index.html').size / 1024) + 'KB');

// ── 2. CSS ─────────────────────────────────────────────────────
let css = fs.readFileSync('C:/Users/agust/Documents/Codex/clash-conecta/styles.css', 'utf8');

// Insert after sv- block (after .sv-eb-item:last-child line, before /* EL CIRCUITO */)
const insertAfter = '.sv-eb-item:last-child{border-right:none}';
const insertIdx = css.indexOf(insertAfter) + insertAfter.length;
if (insertIdx < insertAfter.length) { console.error('CSS insertion point not found'); process.exit(1); }

const newCSS = `

/* ── Panel 2: Compartir via link (sv-s2-) ── */
.sv-s2-promo{display:flex;align-items:center;justify-content:space-between;padding:12px 14px 10px;border-bottom:1px solid rgba(0,0,0,.05)}
.sv-s2-brand{display:flex;align-items:center;gap:9px}
.sv-s2-logo{width:34px;height:34px;background:#f5f5f7;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:var(--dark);border:1px solid #e5e7eb;flex-shrink:0}
.sv-s2-bname{font-size:12px;font-weight:700;color:var(--dark)}
.sv-s2-bdesc{font-size:10px;color:#888;margin-top:1px}
.sv-s2-ready{display:flex;align-items:center;gap:4px;font-size:9px;font-weight:700;color:#16a34a}

.sv-s2-action{padding:10px 14px 8px}
.sv-s2-btn{display:flex;align-items:center;gap:7px;width:100%;padding:9px 12px;background:var(--dark);color:#fff;font-size:11px;font-weight:700;border:none;border-radius:10px;cursor:pointer;font-family:inherit;justify-content:center;animation:sv2BtnGlow 3s ease-in-out infinite}
@keyframes sv2BtnGlow{0%,100%{box-shadow:0 2px 8px rgba(0,0,0,.15)}50%{box-shadow:0 4px 18px rgba(0,0,0,.3)}}

.sv-s2-link-wrap{margin:0 14px 10px;display:flex;flex-direction:column;gap:6px}
.sv-s2-link-bar{display:flex;align-items:center;gap:6px;padding:7px 10px;background:#f5f5f7;border-radius:8px;border:1px solid #e5e7eb}
.sv-s2-url{flex:1;font-size:10px;color:#555;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.sv-s2-url strong{color:var(--dark)}
.sv-s2-copy{font-size:9px;font-weight:700;color:var(--red);cursor:pointer;flex-shrink:0;padding:2px 6px;background:rgba(220,38,38,.08);border-radius:4px}
.sv-s2-preview{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#fff;border-radius:8px;border:1px solid #e5e7eb}
.sv-s2-pv-logo{width:26px;height:26px;background:#f0f0f2;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:800;color:var(--dark);flex-shrink:0;border:1px solid #e5e7eb}
.sv-s2-pv-info{flex:1;min-width:0}
.sv-s2-pv-title{font-size:10px;font-weight:700;color:var(--dark)}
.sv-s2-pv-url{font-size:9px;color:#aaa;margin-top:1px}

.sv-s2-distribute{padding:6px 14px 14px;display:flex;flex-direction:column;gap:8px}
.sv-s2-note{font-size:9px;font-weight:600;color:#aaa;letter-spacing:.3px;text-transform:uppercase}
.sv-s2-icons{display:flex;gap:8px;align-items:center}
.sv-si{width:34px;height:34px;border-radius:50%;background:#f5f5f7;border:1px solid #e5e7eb;display:flex;align-items:center;justify-content:center;color:#555;cursor:pointer;transition:transform .2s,box-shadow .2s;flex-shrink:0}
.sv-si:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,.12)}
.sv-si1{animation:svSiIn .35s ease both .3s}
.sv-si2{animation:svSiIn .35s ease both .45s}
.sv-si3{animation:svSiIn .35s ease both .6s}
.sv-si4{animation:svSiIn .35s ease both .75s}
.sv-si5{animation:svSiIn .35s ease both .9s}
@keyframes svSiIn{from{opacity:0;transform:translateY(6px) scale(.85)}to{opacity:1;transform:none}}

/* ── Panel 3: Actualizacion de contenido (sv3-) ── */
.sv3-cal-hdr{display:flex;align-items:center;gap:6px;padding:8px 14px;background:rgba(0,0,0,.02);border-bottom:1px solid rgba(0,0,0,.05)}
.sv3-cal-label{font-size:11px;font-weight:700;color:var(--dark);flex:1}
.sv3-next-upd{font-size:9px;color:#aaa}

.sv3-row{display:flex;align-items:center;justify-content:space-between;padding:9px 14px;border-bottom:1px solid rgba(0,0,0,.05);gap:8px}
.sv3-row-left{display:flex;align-items:center;gap:8px;flex:1;min-width:0}
.sv3-row-title{font-size:11px;font-weight:700;color:var(--dark)}
.sv3-row-sub{font-size:9px;color:#aaa;margin-top:1px}

/* Fila 2: badge animado */
.sv3-row-updating{background:rgba(234,179,8,.03);animation:sv3RowPulse 7s ease-in-out infinite}
@keyframes sv3RowPulse{0%,100%{background:rgba(234,179,8,.03)}40%,60%{background:rgba(220,38,38,.04)}}
.sv3-badge-wrap{position:relative;height:22px;width:90px;flex-shrink:0}
.sv3-badge{position:absolute;right:0;top:0;white-space:nowrap;font-size:9px}
.sv3-b1{animation:sv3B1 7s ease-in-out infinite}
.sv3-b2{animation:sv3B2 7s ease-in-out infinite}
.sv3-b3{animation:sv3B3 7s ease-in-out infinite}
@keyframes sv3B1{0%,15%{opacity:1}25%,85%{opacity:0}90%,100%{opacity:1}}
@keyframes sv3B2{0%,20%,65%,100%{opacity:0}35%,50%{opacity:1}}
@keyframes sv3B3{0%,45%,100%{opacity:0}58%,80%{opacity:1}}

/* Fila 3: nueva promo (entrada animada) */
.sv3-row-new{animation:sv3RowNew 7s ease-in-out infinite}
@keyframes sv3RowNew{0%,55%{opacity:0;transform:translateX(-8px)}65%,95%{opacity:1;transform:none}100%{opacity:0;transform:translateX(-8px)}}

.sv3-notif{display:flex;align-items:center;gap:6px;margin:8px 14px 0;padding:8px 10px;background:rgba(22,163,74,.06);border-radius:8px;border:1px solid rgba(22,163,74,.1);font-size:10px;font-weight:600;color:#16a34a;animation:sv3NotifIn 7s ease-in-out infinite}
@keyframes sv3NotifIn{0%,55%{opacity:0}65%,95%{opacity:1}100%{opacity:0}}

.sv3-schedule{padding:10px 14px 14px}
.sv3-sch-lbl{font-size:9px;color:#aaa;margin-bottom:6px;font-weight:600}
.sv3-sch-bar{height:4px;background:#f0f0f2;border-radius:4px;overflow:hidden}
.sv3-sch-fill{height:100%;width:0%;background:linear-gradient(90deg,var(--red),rgba(220,38,38,.5));border-radius:4px;animation:sv3SchFill 7s ease-in-out infinite}
@keyframes sv3SchFill{0%,5%{width:0%}50%{width:75%}90%,100%{width:0%}}

/* ── Panel 4: Link + QR dos momentos (sv4-) ── */
.sv4-moments{position:relative;overflow:hidden}
.sv4-half{width:100%}
.sv4-body{padding:10px 14px 12px}

.sv4-link-half{animation:sv4LinkPhase 12s ease-in-out infinite}
.sv4-qr-half{position:absolute;top:0;left:0;right:0;animation:sv4QrPhase 12s ease-in-out infinite}
@keyframes sv4LinkPhase{
  0%,3%{opacity:0}
  8%,42%{opacity:1}
  50%,100%{opacity:0}
}
@keyframes sv4QrPhase{
  0%,50%{opacity:0}
  58%,92%{opacity:1}
  100%{opacity:0}
}

.sv4-ok-pill{font-size:9px;font-weight:800;color:#16a34a;background:rgba(22,163,74,.1);border-radius:10px;padding:1px 7px;margin-left:auto}

.sv4-promo-mini{display:flex;align-items:center;gap:8px;margin-bottom:10px;padding:8px 10px;background:rgba(0,0,0,.02);border-radius:8px;border:1px solid rgba(0,0,0,.05)}
.sv4-pm-logo{width:28px;height:28px;background:#f0f0f2;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:800;color:var(--dark);border:1px solid #e5e7eb;flex-shrink:0}
.sv4-pm-name{font-size:11px;font-weight:700;color:var(--dark)}
.sv4-pm-sub{font-size:9px;color:#aaa;margin-top:1px}

/* Link half */
.sv4-link-bar{display:flex;align-items:center;gap:5px;padding:6px 9px;background:#f5f5f7;border-radius:7px;border:1px solid #e5e7eb;margin-bottom:6px}
.sv4-url{flex:1;font-size:9px;color:#555;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.sv4-url strong{color:var(--dark)}
.sv4-copy{font-size:8px;font-weight:700;color:var(--red);padding:2px 5px;background:rgba(220,38,38,.08);border-radius:3px;flex-shrink:0;cursor:pointer}
.sv4-link-preview{display:flex;align-items:center;gap:7px;padding:7px 9px;background:#fff;border-radius:7px;border:1px solid #e5e7eb;margin-bottom:8px}
.sv4-lp-logo{width:24px;height:24px;background:#f0f0f2;border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:7px;font-weight:800;color:var(--dark);flex-shrink:0;border:1px solid #e5e7eb}
.sv4-lp-title{font-size:9px;font-weight:700;color:var(--dark)}
.sv4-lp-url{font-size:8px;color:#aaa;margin-top:1px}
.sv4-lp-info{flex:1;min-width:0}
.sv4-share-hint{font-size:8px;font-weight:600;color:#bbb;letter-spacing:.3px;text-transform:uppercase;margin-bottom:6px}
.sv4-si-row{display:flex;gap:6px}
.sv4-si{width:30px;height:30px;border-radius:50%;background:#f5f5f7;border:1px solid #e5e7eb;display:flex;align-items:center;justify-content:center;color:#666;cursor:pointer;transition:transform .2s;flex-shrink:0}
.sv4-si:hover{transform:translateY(-2px)}
.sv4-s1{animation:svSiIn .3s ease both .1s}
.sv4-s2{animation:svSiIn .3s ease both .2s}
.sv4-s3{animation:svSiIn .3s ease both .3s}
.sv4-s4{animation:svSiIn .3s ease both .4s}

/* QR half */
.sv4-qr-display{display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px;background:#f9f9fb;border-radius:12px;border:1px solid #e5e7eb;margin-bottom:8px}
.sv4-qr-svg{width:88px;height:88px;animation:sv4QrBuild 1s ease both}
@keyframes sv4QrBuild{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:none}}
.sv4-qr-url{font-size:9px;font-weight:600;color:#777}
.sv4-qr-url strong{color:var(--dark)}

.sv4-qr-uses{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px}
.sv4-use{font-size:8px;font-weight:700;padding:3px 7px;background:#f0f0f2;border-radius:5px;color:#666;border:1px solid #e5e7eb}
.sv4-ready-pill{display:flex;align-items:center;justify-content:center;gap:5px;font-size:10px;font-weight:700;color:#16a34a;background:rgba(22,163,74,.08);border-radius:8px;padding:7px;border:1px solid rgba(22,163,74,.12)}

`;

css = css.substring(0, insertIdx) + newCSS + css.substring(insertIdx);
fs.writeFileSync('C:/Users/agust/Documents/Codex/clash-conecta/styles.css', css, 'utf8');
console.log('CSS done. Size:', Math.round(fs.statSync('C:/Users/agust/Documents/Codex/clash-conecta/styles.css').size / 1024) + 'KB');
