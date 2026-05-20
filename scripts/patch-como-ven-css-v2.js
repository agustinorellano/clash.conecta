const fs = require('fs');
let css = fs.readFileSync('C:/Users/agust/Documents/Codex/clash-conecta/styles.css', 'utf8');

// Find the cv2- block (from the comment header to just before the Circuito block)
const startMarker = 'COMO VEN — Premium frontend rebuild';
const endMarker   = 'CONCEPTO VIDEO';

const smIdx = css.indexOf(startMarker);
const si = css.lastIndexOf('/*', smIdx); // back up to start of comment
const emIdx = css.indexOf(endMarker, smIdx);
const ei = css.lastIndexOf('/*', emIdx); // back up to start of that comment

if (si === -1 || ei === -1) { console.error('Marker not found', si, ei); process.exit(1); }
console.log('Replacing CSS block:', ei - si, 'chars');

const newBlock = `/* ══════════════════════════════════════════════════════
   COMO VEN — Premium frontend rebuild v2 (cv2- system)
   ══════════════════════════════════════════════════════ */
#como-ven{background:var(--dark)}
.cv2-section{padding:96px 0 80px}

/* ── Header ── */
.cv2-hdr{text-align:center;max-width:580px;margin:0 auto 64px}
.cv2-sup{font-size:11px;font-weight:700;letter-spacing:2.5px;color:var(--red);text-transform:uppercase;margin-bottom:14px}
.cv2-h3{font-size:clamp(24px,3vw,40px);font-weight:900;letter-spacing:-1.5px;color:#fff;line-height:1.1;margin-bottom:16px}
.cv2-sub{font-size:15px;color:rgba(255,255,255,.5);line-height:1.6}

/* ── Grid — stretch so both cols = same height ── */
.cv2-grid{display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:stretch}
.cv2-col{display:flex;flex-direction:column;gap:20px}

/* ── Base card — flex column so inner flex works ── */
.cv2-card{background:#fff;border-radius:20px;border:1px solid rgba(255,255,255,.07);box-shadow:0 12px 40px rgba(0,0,0,.35),0 3px 10px rgba(0,0,0,.25);overflow:hidden;position:relative;flex:1;display:flex;flex-direction:column}
@keyframes cv2Float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
.cv2-float1{animation:cv2Float 6s ease-in-out infinite}
.cv2-float2{animation:cv2Float 5.5s ease-in-out infinite .5s}

/* ══ LEFT CARD: Micrositio de marca ══ */

/* App nav bar — mobile style, no browser chrome */
.cv2-app-nav{display:flex;align-items:center;gap:10px;padding:12px 14px 10px;border-bottom:1px solid #f0f0f2;flex-shrink:0}
.cv2-an-brand{display:flex;align-items:center;gap:9px;flex:1;min-width:0}
.cv2-an-logo{width:32px;height:32px;background:#c8102e;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:900;color:#fff;letter-spacing:-.2px;flex-shrink:0}
.cv2-an-info{display:flex;flex-direction:column;min-width:0}
.cv2-an-name{font-size:13px;font-weight:700;color:#111;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cv2-an-addr{font-size:10px;color:#999;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cv2-an-icons{display:flex;gap:8px;align-items:center;flex-shrink:0}

/* Branch row */
.cv2-branch-row{display:flex;align-items:center;justify-content:space-between;padding:6px 14px 5px;border-bottom:1px solid #f5f5f7;flex-shrink:0}
.cv2-br-link{font-size:10px;font-weight:700;color:var(--red)}
.cv2-br-dist{font-size:10px;color:#aaa;white-space:nowrap}

/* Section header PROMOS DEL COMERCIO */
.cv2-shd{display:flex;align-items:center;gap:5px;padding:6px 14px;background:#fef2f2;border-top:1px solid #fde8e8;border-bottom:1px solid #fde8e8;flex-shrink:0}
.cv2-shd-lbl{font-size:9px;font-weight:800;color:#b91c1c;letter-spacing:.3px}
.cv2-shd-sub{font-size:9px;color:#ef4444;margin-left:2px}

/* Promo list — flex:1 fills remaining card space */
.cv2-plist{flex:1;overflow:hidden}
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
@keyframes cv2RowIn{from{opacity:0;transform:translateX(5px)}to{opacity:1;transform:none}}
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

/* ══ RIGHT CARD: Promo individual ══ */

/* BBVA header — azul BBVA (fiel a la referencia) */
.cv2-pi-hd{display:flex;align-items:center;justify-content:space-between;padding:12px 16px 10px;background:#004481;border-bottom:1px solid rgba(255,255,255,.1);flex-shrink:0}
.cv2-pi-brand{display:flex;align-items:center;gap:8px}
.cv2-pi-chip{font-size:9px;font-weight:900;padding:3px 7px;border-radius:5px;letter-spacing:.5px;background:#fff;color:#004481}
.cv2-pi-bname{font-size:13px;font-weight:700;color:#fff}

/* Hero */
.cv2-pi-hero{display:flex;flex-direction:column;align-items:center;text-align:center;padding:18px 16px 14px;background:#fafafa;border-bottom:1px solid #f0f0f2;flex-shrink:0}
@keyframes cv2HeroIn{from{opacity:0;transform:scale(.94)}to{opacity:1;transform:none}}
.cv2-pi-hero{animation:cv2HeroIn .4s cubic-bezier(.34,1.3,.64,1) both}
.cv2-pi-logo{width:44px;height:44px;background:#fff;border-radius:13px;border:1px solid #e5e7eb;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:7px;box-shadow:0 2px 8px rgba(0,0,0,.06)}
.cv2-pi-store{font-size:11px;color:#888;margin-bottom:3px}
.cv2-pi-title{font-size:14px;font-weight:700;color:#111;margin-bottom:7px}
.cv2-pi-disc{margin-bottom:3px}
.cv2-pi-pct{font-size:30px;font-weight:900;color:#111;line-height:1}
.cv2-pi-de{font-size:14px;color:#555;font-weight:500}
.cv2-pi-sub{font-size:12px;color:#555}

/* Conditions — flex:1 fills space */
.cv2-pi-conds{padding:10px 16px 4px;flex:1;overflow:hidden}
.cv2-pi-ctitle{font-size:11px;font-weight:800;color:#111;margin-bottom:6px}
.cv2-cr{display:flex;justify-content:space-between;align-items:flex-start;padding:4px 0;border-bottom:1px solid #f3f3f5}
.cv2-cr:last-child{border-bottom:none}
.cv2-clbl{font-size:10px;color:var(--red);font-weight:500;flex-shrink:0;padding-top:1px}
.cv2-cval{font-size:11px;font-weight:700;color:#111;text-align:right}
.cv2-cval-no{color:var(--red)}
.cv2-days{display:flex;gap:3px}
.cv2-day{width:18px;height:18px;border:1px solid #e5e7eb;border-radius:4px;font-size:8px;font-weight:700;color:#ccc;display:flex;align-items:center;justify-content:center}
.cv2-day-on{background:#111;color:#fff;border-color:#111}

/* Disclaimer + terms link (fiel a la referencia) */
.cv2-pi-footer{padding:8px 16px 12px;border-top:1px solid #f0f0f2;flex-shrink:0}
.cv2-pi-disclaimer{font-size:9px;color:#aaa;line-height:1.5;margin-bottom:4px}
.cv2-pi-terms{font-size:10px;color:var(--red);font-weight:600;cursor:pointer}

/* ══ Share buttons — debajo de la right card ══ */
.cv2-share-ext{display:flex;align-items:center;justify-content:center;gap:12px;padding:10px 0;flex-shrink:0}
.cv2-sbtn{width:44px;height:44px;border-radius:50%;border:1.5px solid #e5e7eb;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.06);cursor:pointer;transition:all .2s;color:rgba(255,255,255,.7)}
.cv2-sbtn:hover{transform:translateY(-2px);box-shadow:0 4px 14px rgba(0,0,0,.25)}
.cv2-sb-wsp{color:#25d366;border-color:#25d366;background:rgba(37,211,102,.12)}
.cv2-sb-ig{color:#e1306c;border-color:#e1306c;background:rgba(225,48,108,.1)}
.cv2-sb-lnk{color:rgba(255,255,255,.6);border-color:rgba(255,255,255,.15)}
.cv2-sb-qr{color:rgba(255,255,255,.6);border-color:rgba(255,255,255,.15)}

/* Invisible spacer in left col = height of share buttons in right col */
.cv2-share-pad{flex-shrink:0;height:64px;visibility:hidden}

/* ══ Column label ══ */
.cv2-col-label{display:flex;align-items:flex-start;gap:12px;padding:4px 4px 0;flex-shrink:0}
.cv2-lbl-icon{width:38px;height:38px;background:rgba(220,38,38,.15);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--red)}
.cv2-lbl-ttl{font-size:15px;font-weight:700;color:#fff;margin-bottom:5px}
.cv2-lbl-sub{font-size:13px;color:rgba(255,255,255,.5);line-height:1.55}

/* ══ Footer ══ */
.cv2-footer{text-align:center;margin-top:56px;font-size:13px;color:rgba(255,255,255,.3);letter-spacing:.5px}

/* ══ Responsive ══ */
@media(max-width:900px){
  .cv2-grid{grid-template-columns:1fr;max-width:440px;margin-left:auto;margin-right:auto;align-items:start}
  .cv2-card{flex:none}
  .cv2-share-pad{display:none}
}
@media(max-width:640px){
  .cv2-section{padding:64px 0 48px}
  .cv2-hdr{margin-bottom:40px}
}

`;

css = css.substring(0, si) + newBlock + css.substring(ei);
fs.writeFileSync('C:/Users/agust/Documents/Codex/clash-conecta/styles.css', css, 'utf8');
console.log('Done. CSS size:', Math.round(fs.statSync('C:/Users/agust/Documents/Codex/clash-conecta/styles.css').size / 1024) + 'KB');
