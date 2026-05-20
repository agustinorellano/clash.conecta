const fs = require('fs');
let css = fs.readFileSync('C:/Users/agust/Documents/Codex/clash-conecta/styles.css', 'utf8');

// ─────────────────────────────────────────────────────────────────────────────
// 1. Replace the main circ-bottom / circ-iphone block with cv2- system
// ─────────────────────────────────────────────────────────────────────────────
const oldBlockStart = '.circ-bottom-panel{';
const oldBlockEnd   = '.circ-bottom-footer{text-align:center;margin-top:40px;font-size:13px;color:rgba(255,255,255,.3);letter-spacing:.5px}';

const si = css.indexOf(oldBlockStart);
const ei = css.indexOf(oldBlockEnd) + oldBlockEnd.length;
if (si === -1 || ei === -1) { console.error('Main CSS block not found'); process.exit(1); }

const newBlock = `/* ══════════════════════════════════════════════════════
   COMO VEN — Premium frontend rebuild (cv2- system)
   ══════════════════════════════════════════════════════ */
#como-ven{background:var(--dark)}
.cv2-section{padding:96px 0 80px}
.cv2-hdr{text-align:center;max-width:580px;margin:0 auto 64px}
.cv2-sup{font-size:11px;font-weight:700;letter-spacing:2.5px;color:var(--red);text-transform:uppercase;margin-bottom:14px}
.cv2-h3{font-size:clamp(24px,3vw,40px);font-weight:900;letter-spacing:-1.5px;color:#fff;line-height:1.1;margin-bottom:16px}
.cv2-sub{font-size:15px;color:rgba(255,255,255,.5);line-height:1.6}
/* Grid */
.cv2-grid{display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:start}
.cv2-col{display:flex;flex-direction:column;gap:20px}
/* Base card */
.cv2-card{background:#fff;border-radius:20px;border:1px solid rgba(255,255,255,.07);box-shadow:0 12px 40px rgba(0,0,0,.35),0 3px 10px rgba(0,0,0,.25),0 0 0 .5px rgba(0,0,0,.2);overflow:hidden;position:relative}
@keyframes cv2Float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
.cv2-float1{animation:cv2Float 6s ease-in-out infinite}
.cv2-float2{animation:cv2Float 5.5s ease-in-out infinite .5s}
/* ── Browser bar ── */
.cv2-browser{display:flex;align-items:center;gap:8px;padding:10px 14px 9px;background:#f0f0f2;border-bottom:1px solid #e4e4e8}
.cv2-bb-dots{display:flex;gap:5px;flex-shrink:0}
.cv2-dot{width:10px;height:10px;border-radius:50%}
.cv2-dot-r{background:#ff5f57}.cv2-dot-y{background:#ffbd2e}.cv2-dot-g{background:#28ca41}
.cv2-bb-url{flex:1;font-size:11px;color:#666;text-align:center;background:rgba(0,0,0,.06);border-radius:6px;padding:3px 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cv2-bb-url strong{color:#222;font-weight:700}
/* ── Top nav ── */
.cv2-topnav{display:flex;align-items:center;gap:10px;padding:12px 14px 10px;border-bottom:1px solid #f0f0f2}
.cv2-brand{display:flex;align-items:center;gap:9px;flex:1}
.cv2-brand-logo{width:34px;height:34px;background:#c8102e;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:900;color:#fff;letter-spacing:-.3px;flex-shrink:0}
.cv2-brand-name{font-size:13px;font-weight:700;color:#111}
.cv2-brand-sub{font-size:10px;color:#999}
/* ── Tabs ── */
.cv2-tabs{display:flex;gap:4px;padding:9px 14px 8px;border-bottom:1px solid #f0f0f2;overflow-x:auto}
.cv2-tabs::-webkit-scrollbar{display:none}
.cv2-tab{font-size:11px;font-weight:600;color:#888;padding:4px 10px;border-radius:20px;white-space:nowrap;cursor:pointer;transition:all .15s}
.cv2-tab-on{background:#111;color:#fff}
/* ── Promo list ── */
.cv2-plist{padding:2px 0}
.cv2-phd{display:flex;align-items:center;gap:7px;padding:5px 14px;border-top:1px solid transparent;border-bottom:1px solid transparent}
.cv2-phd-hipot{background:#fef3e8;border-color:#fde3c4}
.cv2-phd-clash{background:#fef2f2;border-color:#fde8e8}
.cv2-phd-mp{background:#e8f4fe;border-color:#c8e4fb}
.cv2-pchip{font-size:8px;font-weight:900;padding:2px 6px;border-radius:4px;letter-spacing:.3px}
.cv2-pch-hipot{background:#e07800;color:#fff}
.cv2-pch-clash{background:var(--red);color:#fff}
.cv2-pch-mp{background:#009ee3;color:#fff}
.cv2-pbank{font-size:10px;font-weight:700;color:#555}
.cv2-prow{display:flex;align-items:flex-start;justify-content:space-between;padding:8px 14px 7px;background:#fff;border-bottom:1px solid #f5f5f7;gap:8px}
@keyframes cv2RowIn{from{opacity:0;transform:translateX(6px)}to{opacity:1;transform:none}}
.cv2-prow-anim{animation:cv2RowIn .35s ease both}
.cv2-pra1{animation-delay:.05s}.cv2-pra2{animation-delay:.12s}.cv2-pra3{animation-delay:.19s}
.cv2-prow-l{flex:1;min-width:0}
.cv2-prow-title{font-size:12px;font-weight:600;color:#111}
.cv2-prow-cards{display:flex;gap:3px;margin-top:4px;flex-wrap:wrap}
.cv2-pcard{font-size:8px;font-weight:800;padding:2px 5px;border-radius:3px}
.cv2-pcard-mc{background:#c41230;color:#fff}.cv2-pcard-nx{background:#f27200;color:#fff}.cv2-pcard-visa{background:#1a1f71;color:#fff}
.cv2-pcard-ghost{opacity:.45}
.cv2-prow-day{display:inline-block;margin-top:5px;font-size:9px;font-weight:700;border:1px solid var(--red);color:var(--red);border-radius:4px;padding:1px 5px;letter-spacing:.2px}
.cv2-prow-r{text-align:right;flex-shrink:0;display:flex;flex-direction:column;align-items:flex-end;gap:1px}
.cv2-bignum{font-size:22px;font-weight:900;color:#111;line-height:1}
.cv2-bn-sm{font-size:18px}
.cv2-de{font-size:10px;color:#666}
.cv2-tope{font-size:9px;color:#aaa}
.cv2-micro-more{padding:11px 14px;font-size:12px;font-weight:700;color:var(--red);border-top:1px solid #f0f0f2;cursor:pointer;transition:background .15s}
.cv2-micro-more:hover{background:#fef2f2}
/* ── Promo individual ── */
.cv2-pi-hd{display:flex;align-items:center;justify-content:space-between;padding:12px 16px 10px;background:#1a1a2e;border-bottom:1px solid rgba(255,255,255,.08)}
.cv2-pi-brand{display:flex;align-items:center;gap:8px}
.cv2-pi-chip{font-size:9px;font-weight:900;padding:3px 7px;border-radius:5px;letter-spacing:.5px;background:#722f37;color:#fff}
.cv2-pi-bname{font-size:13px;font-weight:700;color:#fff}
.cv2-pi-hero{display:flex;flex-direction:column;align-items:center;text-align:center;padding:20px 16px 14px;background:#fafafa;border-bottom:1px solid #f0f0f2}
@keyframes cv2HeroIn{from{opacity:0;transform:scale(.94)}to{opacity:1;transform:none}}
.cv2-pi-hero{animation:cv2HeroIn .4s cubic-bezier(.34,1.3,.64,1) both}
.cv2-pi-logo{width:48px;height:48px;background:#fff;border-radius:14px;border:1px solid #e5e7eb;display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:8px;box-shadow:0 2px 8px rgba(0,0,0,.06)}
.cv2-pi-store{font-size:11px;color:#888;margin-bottom:3px}
.cv2-pi-title{font-size:15px;font-weight:700;color:#111;margin-bottom:8px}
.cv2-pi-disc{margin-bottom:4px}
.cv2-pi-pct{font-size:34px;font-weight:900;color:#111;line-height:1}
.cv2-pi-de{font-size:16px;color:#555;font-weight:500}
.cv2-pi-sub{font-size:13px;color:#555}
.cv2-pi-conds{padding:12px 16px 8px}
.cv2-pi-ctitle{font-size:12px;font-weight:800;color:#111;margin-bottom:7px}
.cv2-cr{display:flex;justify-content:space-between;align-items:flex-start;padding:5px 0;border-bottom:1px solid #f3f3f5}
.cv2-cr:last-child{border-bottom:none}
.cv2-clbl{font-size:10px;color:var(--red);font-weight:500;flex-shrink:0;padding-top:1px}
.cv2-cval{font-size:11px;font-weight:700;color:#111;text-align:right}
.cv2-cval-no{color:var(--red)}
.cv2-days{display:flex;gap:3px}
.cv2-day{width:20px;height:20px;border:1px solid #e5e7eb;border-radius:4px;font-size:9px;font-weight:700;color:#ccc;display:flex;align-items:center;justify-content:center}
.cv2-day-on{background:#111;color:#fff;border-color:#111}
.cv2-share{display:flex;align-items:center;justify-content:center;gap:10px;padding:13px 16px;border-top:1px solid #f0f0f2}
.cv2-sbtn{width:42px;height:42px;border-radius:50%;border:1.5px solid #e5e7eb;display:flex;align-items:center;justify-content:center;background:#fff;cursor:pointer;transition:all .2s;color:#555}
.cv2-sbtn:hover{transform:translateY(-2px);box-shadow:0 4px 14px rgba(0,0,0,.12)}
.cv2-sb-wsp{color:#25d366;border-color:#25d366}
.cv2-sb-ig{color:#e1306c;border-color:#e1306c}
/* ── Column label ── */
.cv2-col-label{display:flex;align-items:flex-start;gap:12px;padding:4px 4px 0}
.cv2-lbl-icon{width:38px;height:38px;background:rgba(220,38,38,.15);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--red)}
.cv2-lbl-ttl{font-size:15px;font-weight:700;color:#fff;margin-bottom:5px}
.cv2-lbl-sub{font-size:13px;color:rgba(255,255,255,.5);line-height:1.55}
/* ── Footer ── */
.cv2-footer{text-align:center;margin-top:56px;font-size:13px;color:rgba(255,255,255,.3);letter-spacing:.5px}`;

css = css.substring(0, si) + newBlock + css.substring(ei);
console.log('Replaced main CSS block');

// ─────────────────────────────────────────────────────────────────────────────
// 2. Clean old iPhone responsive rules from @media(max-width:1100px)
// ─────────────────────────────────────────────────────────────────────────────
const old1100 = `  /* circ: reduce phones at notebook */
  .circ-iphone-outer{width:160px;border-radius:36px;padding:8px}
  .circ-iphone-vol-up{top:62px;height:22px}
  .circ-iphone-vol-dn{top:92px;height:22px}
  .circ-iphone-power{top:76px;height:38px}
  .circ-iphone-screen{border-radius:28px}
  .circ-iph-notch{width:64px;height:18px}
  .circ-bottom-grid{gap:20px}`;
css = css.replace(old1100, '');
console.log('Cleaned 1100px iPhone rules');

// ─────────────────────────────────────────────────────────────────────────────
// 3. Replace old circ-bottom responsive inside @media(max-width:900px)
// ─────────────────────────────────────────────────────────────────────────────
const old900 = `  /* circ bottom → phones top row, texts bottom row */
  .circ-bottom-grid{grid-template-columns:1fr 1fr;gap:20px}
  .circ-phone-col:nth-child(1){order:1}
  .circ-text-col:nth-child(2){order:3}
  .circ-phone-col:nth-child(3){order:2}
  .circ-text-col:nth-child(4){order:4}
  .circ-text-col{padding-top:12px}
  .circ-iphone-outer{width:150px;border-radius:34px;padding:7px}
  .circ-iphone-vol-up{top:58px;height:20px}
  .circ-iphone-vol-dn{top:86px;height:20px}
  .circ-iphone-power{top:70px;height:34px}
  .circ-iphone-screen{border-radius:26px}
  .circ-iph-notch{width:58px;height:16px}
  .circ-iphone-home::after{width:56px}`;
const new900 = `  /* cv2 grid → stack on tablet */
  .cv2-grid{grid-template-columns:1fr;max-width:440px;margin-left:auto;margin-right:auto}`;
css = css.replace(old900, new900);
console.log('Updated 900px responsive');

// ─────────────────────────────────────────────────────────────────────────────
// 4. Replace old circ-bottom responsive inside @media(max-width:640px)
// ─────────────────────────────────────────────────────────────────────────────
const old640 = `  /* circ bottom → single column, natural DOM order */
  .circ-bottom-grid{grid-template-columns:1fr;gap:28px}
  .circ-phone-col:nth-child(1){order:1}
  .circ-text-col:nth-child(2){order:2}
  .circ-phone-col:nth-child(3){order:3}
  .circ-text-col:nth-child(4){order:4}
  .circ-phone-col{align-items:center}
  .circ-text-col{padding-top:4px;align-items:flex-start}
  /* restore phone to comfortable size on mobile */
  .circ-iphone-outer{width:180px;border-radius:40px;padding:9px}
  .circ-iphone-vol-up{top:70px;height:26px}
  .circ-iphone-vol-dn{top:104px;height:26px}
  .circ-iphone-power{top:86px;height:42px}
  .circ-iphone-screen{border-radius:31px}
  .circ-iph-notch{width:70px;height:20px}
  .circ-iphone-home::after{width:68px}
  .circ-share-below{gap:12px}
  .circ-bottom-hdr{margin-bottom:28px}
  .circ-bottom-h3{font-size:clamp(20px,6vw,28px)}
  .circ-bottom-grid>.container{padding-left:24px;padding-right:24px}`;
const new640 = `  /* cv2 mobile */
  .cv2-section{padding:64px 0 48px}
  .cv2-hdr{margin-bottom:40px}`;
css = css.replace(old640, new640);
console.log('Updated 640px responsive');

// ─────────────────────────────────────────────────────────────────────────────
// 5. Write
// ─────────────────────────────────────────────────────────────────────────────
fs.writeFileSync('C:/Users/agust/Documents/Codex/clash-conecta/styles.css', css, 'utf8');
console.log('Done. CSS size:', Math.round(fs.statSync('C:/Users/agust/Documents/Codex/clash-conecta/styles.css').size / 1024) + 'KB');
