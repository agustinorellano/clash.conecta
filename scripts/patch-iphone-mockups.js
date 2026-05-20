const fs = require('fs');
const htmlPath = 'C:/Users/agust/Documents/Codex/clash-conecta/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const b64_bk   = fs.readFileSync('C:/Users/agust/Documents/Codex/clash-conecta/assets/circ-ph-81.jpg').toString('base64');
const b64_bbva = fs.readFileSync('C:/Users/agust/Documents/Codex/clash-conecta/assets/circ-ph-82.png').toString('base64');

// iPhone 14 status bar SVG icons (signal, wifi, battery)
const signalSVG = `<svg width="17" height="12" viewBox="0 0 17 12" fill="white"><rect x="0" y="7" width="3" height="5" rx="1"/><rect x="4.5" y="4.5" width="3" height="7.5" rx="1"/><rect x="9" y="2" width="3" height="10" rx="1"/><rect x="13.5" y="0" width="3" height="12" rx="1"/></svg>`;
const wifiSVG  = `<svg width="16" height="12" viewBox="0 0 16 12" fill="white"><path d="M8 9.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/><path d="M3.5 6.5a6.5 6.5 0 019 0" stroke="white" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M0.5 3.5a10.5 10.5 0 0115 0" stroke="white" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>`;
const battSVG  = `<svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="white" stroke-opacity=".35"/><rect x="1.5" y="1.5" width="19" height="9" rx="2.5" fill="white"/><path d="M23 4v4a2 2 0 000-4z" fill="white" fill-opacity=".4"/></svg>`;

function iphoneMockup(imgSrc, imgType, label) {
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
                  <img src="data:${imgType};base64,${imgSrc}" class="circ-iphone-shot" alt="${label}">
                </div>
                <div class="circ-iphone-home"></div>
              </div>
            </div>
          </div>`;
}

const phone1 = iphoneMockup(b64_bk,   'image/jpeg', 'Burger King Micrositio');
const phone2 = iphoneMockup(b64_bbva, 'image/png',  'BBVA Vincenzo Promo');

// Replace the old circ-phone-col blocks in the bottom panel
// Match the first circ-phone-col (Phone 1)
const oldPhone1Regex = /<div class="circ-phone-col">\s*<div class="circ-phone-mockup">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
const match1 = html.match(oldPhone1Regex);
if (match1) {
  html = html.replace(oldPhone1Regex, `<div class="circ-phone-col">${phone1}</div>`);
  console.log('Phone 1 replaced');
} else {
  console.log('Phone 1 NOT found');
}

// Match the second circ-phone-col (Phone 2)
const oldPhone2Regex = /<div class="circ-phone-col">\s*<div class="circ-phone-mockup">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
const match2 = html.match(oldPhone2Regex);
if (match2) {
  html = html.replace(oldPhone2Regex, `<div class="circ-phone-col">${phone2}</div>`);
  console.log('Phone 2 replaced');
} else {
  console.log('Phone 2 NOT found');
}

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Done. Size:', Math.round(fs.statSync(htmlPath).size / 1024) + 'KB');
