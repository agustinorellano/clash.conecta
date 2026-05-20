const fs = require('fs');
const htmlPath = 'C:/Users/agust/Documents/Codex/clash-conecta/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// Extract base64 data already embedded for phone 1 (BK) and phone 2 (BBVA)
const ph1Match = html.match(/alt="Burger King Micrositio"[^>]*>[\s\S]*?src="(data:image\/[^"]+)"/);
const ph1SrcMatch = html.match(/src="(data:image\/[^"]+)"[^>]*class="circ-iphone-shot"[^>]*alt="Burger King Micrositio"/);
// Try multiple patterns
let b64ph1 = null, type1 = null, b64ph2 = null, type2 = null;

// Find all circ-iphone-shot images in order
const shotPattern = /src="(data:(image\/[^;]+);base64,[^"]+)"\s+class="circ-iphone-shot"\s+alt="([^"]+)"/g;
let m;
const shots = [];
while ((m = shotPattern.exec(html)) !== null) {
  shots.push({ src: m[1], type: m[2], alt: m[3] });
}
console.log('Found shots:', shots.map(s => s.alt + ' (' + s.type + ')'));

if (shots.length < 2) {
  // Try alternate ordering
  const shotPattern2 = /class="circ-iphone-shot"\s+alt="([^"]+)"[^>]*src="(data:(image\/[^;]+);base64,[^"]+)"/g;
  while ((m = shotPattern2.exec(html)) !== null) {
    shots.push({ src: m[2], type: m[3], alt: m[1] });
  }
  console.log('Found shots (alt pattern):', shots.map(s => s.alt + ' (' + s.type + ')'));
}

if (shots.length < 2) {
  // Last resort: find by img tag with base64
  const allImgs = html.match(/<img[^>]+class="circ-iphone-shot"[^>]*>/g) || [];
  console.log('Found img tags:', allImgs.length);
  allImgs.forEach((tag, i) => {
    const srcM = tag.match(/src="(data:(image\/[^;]+);base64,[A-Za-z0-9+/=]+)"/);
    const altM = tag.match(/alt="([^"]+)"/);
    if (srcM) shots.push({ src: srcM[1], type: srcM[2], alt: altM ? altM[1] : 'photo' + i });
  });
}

if (shots.length < 2) {
  console.error('Could not find 2 phone screenshots. Aborting.');
  process.exit(1);
}

const phone1Src = shots[0].src;
const phone2Src = shots[1].src;

// SVG icons
const signalSVG = `<svg width="17" height="12" viewBox="0 0 17 12" fill="white"><rect x="0" y="7" width="3" height="5" rx="1"/><rect x="4.5" y="4.5" width="3" height="7.5" rx="1"/><rect x="9" y="2" width="3" height="10" rx="1"/><rect x="13.5" y="0" width="3" height="12" rx="1"/></svg>`;
const wifiSVG  = `<svg width="16" height="12" viewBox="0 0 16 12" fill="white"><path d="M8 9.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/><path d="M3.5 6.5a6.5 6.5 0 019 0" stroke="white" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M0.5 3.5a10.5 10.5 0 0115 0" stroke="white" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>`;
const battSVG  = `<svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="white" stroke-opacity=".35"/><rect x="1.5" y="1.5" width="19" height="9" rx="2.5" fill="white"/><path d="M23 4v4a2 2 0 000-4z" fill="white" fill-opacity=".4"/></svg>`;

function iphone(src, alt) {
  return `<div class="circ-iphone-wrap">
              <div class="circ-iphone-outer">
                <div class="circ-iphone-vol-up"></div>
                <div class="circ-iphone-vol-dn"></div>
                <div class="circ-iphone-power"></div>
                <div class="circ-iphone-screen">
                  <div class="circ-iphone-statusbar">
                    <span class="circ-iph-time">9:41</span>
                    <div class="circ-iph-notch"></div>
                    <div class="circ-iph-status-right">${signalSVG}${wifiSVG}${battSVG}</div>
                  </div>
                  <div class="circ-iphone-content">
                    <img src="${src}" class="circ-iphone-shot" alt="${alt}">
                  </div>
                  <div class="circ-iphone-home"></div>
                </div>
              </div>
            </div>`;
}

const shareIcons = `<div class="circ-share-below">
              <div class="circ-share-btn wsp" title="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" style="width:18px;height:18px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.099 1.507 5.815L0 24l6.335-1.482A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0"/></svg></div>
              <div class="circ-share-btn ig" title="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></div>
              <div class="circ-share-btn lnk" title="Link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg></div>
              <div class="circ-share-btn qr" title="QR"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/><rect x="18" y="18" width="3" height="3"/></svg></div>
            </div>`;

const newPanel = `  <!-- ¿Cómo ven mis clientes las promociones? -->
  <div class="circ-bottom-panel">
    <div class="container" style="padding-top:56px;padding-bottom:72px">
      <div class="circ-bottom-hdr rv d1">
        <h3 class="circ-bottom-h3">¿Cómo ven mis clientes las promociones?</h3>
        <p class="circ-bottom-sub">Las promociones pueden visualizarse desde múltiples formatos según la estrategia de distribución.</p>
      </div>
      <div class="circ-bottom-grid rv d1">

        <!-- Phone 1: Micrositio marca -->
        <div class="circ-phone-col">
          ${iphone(phone1Src, 'Burger King Micrositio')}
        </div>

        <!-- Text 1 -->
        <div class="circ-text-col">
          <div class="circ-text-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:22px;height:22px"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
          </div>
          <h4 class="circ-text-h4">Desde el micrositio de tu marca</h4>
          <p class="circ-text-p">Tus clientes encuentran todas las promociones disponibles organizadas por comercios, bancos y categorías.</p>
        </div>

        <!-- Phone 2: Promo individual + share icons below -->
        <div class="circ-phone-col">
          ${iphone(phone2Src, 'BBVA Vincenzo Promo')}
          ${shareIcons}
        </div>

        <!-- Text 2 -->
        <div class="circ-text-col">
          <div class="circ-text-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:22px;height:22px"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
          </div>
          <h4 class="circ-text-h4">Promoción individual para compartir</h4>
          <p class="circ-text-p">Cada beneficio puede compartirse de forma simple y rápida por WhatsApp, redes sociales, QR o link directo.</p>
        </div>

      </div>
      <p class="circ-bottom-footer">Clash conecta marcas y personas con experiencias que generan valor real.</p>
    </div>
  </div>`;

// Replace everything from the comment to </section>
const panelStart = html.indexOf('  <!-- ¿Cómo ven mis clientes las promociones? -->');
const sectionEnd = html.indexOf('</section>', panelStart);

if (panelStart === -1) { console.error('Panel start not found'); process.exit(1); }
if (sectionEnd === -1) { console.error('Section end not found'); process.exit(1); }

html = html.slice(0, panelStart) + newPanel + '\n</section>\n' + html.slice(sectionEnd + 10);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Done. Size:', Math.round(fs.statSync(htmlPath).size / 1024) + 'KB');
