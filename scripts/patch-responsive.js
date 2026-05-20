const fs = require('fs');
const htmlPath = 'C:/Users/agust/Documents/Codex/clash-conecta/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');
let changed = false;

// 1. Add hamburger button inside nav (before </nav>)
if (!html.includes('nav-hamburger')) {
  const btn = `\n  <button class="nav-hamburger" id="nav-hamburger" aria-label="Abrir menú"><span></span><span></span><span></span></button>`;
  html = html.replace('</nav>', btn + '\n</nav>');
  changed = true;
  console.log('+ hamburger button added');
} else {
  console.log('  hamburger button already present');
}

// 2. Add mobile overlay menu after </nav>
if (!html.includes('nav-mobile-menu')) {
  const menu = `\n<div class="nav-mobile-menu" id="nav-mobile-menu">\n  <ul class="nav-mobile-links">\n    <li><a href="#concepto">Concepto</a></li>\n    <li><a href="#desafio">Desafíos</a></li>\n    <li><a href="#solucion">Solución</a></li>\n    <li><a href="#circuito">Circuito</a></li>\n    <li><a href="#gestion">Gestión</a></li>\n    <li><a href="#distribucion">Distribución</a></li>\n    <li><a href="#analytics">Analytics</a></li>\n    <li><a href="#planes">Planes</a></li>\n    <li><a href="https://clash.com.ar/inicio/comercio" target="_blank" class="nav-mobile-cta">Empezá hoy →</a></li>\n  </ul>\n</div>`;
  const navEndIdx = html.indexOf('</nav>') + 6;
  html = html.slice(0, navEndIdx) + menu + html.slice(navEndIdx);
  changed = true;
  console.log('+ mobile menu added');
} else {
  console.log('  mobile menu already present');
}

// 3. Add hamburger toggle JS before </body>
if (!html.includes("classList.toggle('nav-open')")) {
  const js = `\n<script>\n(function(){\n  var btn=document.getElementById('nav-hamburger');\n  if(!btn)return;\n  btn.addEventListener('click',function(){document.body.classList.toggle('nav-open');});\n  document.querySelectorAll('#nav-mobile-menu a').forEach(function(a){\n    a.addEventListener('click',function(){document.body.classList.remove('nav-open');});\n  });\n}());\n</script>`;
  html = html.replace('</body>', js + '\n</body>');
  changed = true;
  console.log('+ hamburger JS added');
} else {
  console.log('  hamburger JS already present');
}

if (changed) {
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log('Done. Size:', Math.round(fs.statSync(htmlPath).size / 1024) + 'KB');
} else {
  console.log('No changes needed.');
}
