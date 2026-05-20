const fs = require('fs');
const htmlPath = 'C:/Users/agust/Documents/Codex/clash-conecta/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const signalSVG = `<svg width="17" height="12" viewBox="0 0 17 12" fill="white"><rect x="0" y="7" width="3" height="5" rx="1"/><rect x="4.5" y="4.5" width="3" height="7.5" rx="1"/><rect x="9" y="2" width="3" height="10" rx="1"/><rect x="13.5" y="0" width="3" height="12" rx="1"/></svg>`;
const wifiSVG  = `<svg width="16" height="12" viewBox="0 0 16 12" fill="white"><path d="M8 9.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/><path d="M3.5 6.5a6.5 6.5 0 019 0" stroke="white" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M0.5 3.5a10.5 10.5 0 0115 0" stroke="white" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>`;
const battSVG  = `<svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="white" stroke-opacity=".35"/><rect x="1.5" y="1.5" width="19" height="9" rx="2.5" fill="white"/><path d="M23 4v4a2 2 0 000-4z" fill="white" fill-opacity=".4"/></svg>`;

// Match the old phone block regardless of line ending style
const oldPhoneRegex = /<div class="phone-wrap rv d3">[\s\S]*?<div class="clash-phone-glow"><\/div>\s*<\/div>\s*<\/div>/;

const newPhone = `      <div class="phone-wrap rv d3">
      <div class="clash-phone-wrap">
        <div class="circ-iphone-outer concepto-iphone">
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
              <video class="clash-phone-video" autoplay loop muted playsinline>
                <source src="assets/clash-app-v2.mp4" type="video/mp4">
              </video>
            </div>
            <div class="circ-iphone-home"></div>
          </div>
        </div>
        <div class="clash-phone-glow"></div>
      </div>
    </div>`;

if (!oldPhoneRegex.test(html)) {
  console.error('Old phone HTML not found');
  process.exit(1);
}

html = html.replace(oldPhoneRegex, newPhone);
fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Done. Size:', Math.round(fs.statSync(htmlPath).size / 1024) + 'KB');
