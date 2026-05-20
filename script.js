
// ── Nav scroll + active ──
const nav = document.getElementById('main-nav');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

function updateNav() {
  const scrolled = window.scrollY > 40;
  nav.classList.toggle('scrolled', scrolled);
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) current = s.id; });
  navLinks.forEach(a => {
    const active = a.getAttribute('href') === '#' + current;
    a.classList.toggle('active', active);
  });
}
window.addEventListener('scroll', updateNav, {passive:true});
updateNav();

// ── Smooth scroll for nav ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// ── Reveal on scroll ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); } });
}, {threshold:0.1});
document.querySelectorAll('.rv').forEach(el => observer.observe(el));

// ── Desafíos accordion ──
function toggleAcc(item) {
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.acc-item').forEach(i => { i.classList.remove('open'); i.querySelector('.acc-body').style.maxHeight = '0'; });
  if (!isOpen) { item.classList.add('open'); const b = item.querySelector('.acc-body'); b.style.maxHeight = b.scrollHeight + 'px'; }
}
(function(){ const f = document.querySelector('.acc-item'); if(f){ f.classList.add('open'); f.querySelector('.acc-body').style.maxHeight = f.querySelector('.acc-body').scrollHeight + 'px'; } })();

// ── Distribución accordion ──
function toggleDAcc(item) {
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.d-acc').forEach(i => { i.classList.remove('open'); i.querySelector('.d-acc-body').style.maxHeight = '0'; });
  if (!isOpen) { item.classList.add('open'); const b = item.querySelector('.d-acc-body'); b.style.maxHeight = b.scrollHeight + 'px'; }
}
(function(){ const f = document.querySelector('.d-acc'); if(f){ f.classList.add('open'); const b = f.querySelector('.d-acc-body'); b.style.maxHeight = b.scrollHeight + 'px'; } })();

// ── Planes toggle ──
function setToggle(btn, mode) {
  document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ── Levi's branches ──
(function(){
  const grid = document.getElementById('branches-grid');
  if (!grid) return;
  for (let i = 1; i <= 30; i++) {
    const dot = document.createElement('div');
    dot.className = 'b-dot' + (i === 1 ? ' central' : i <= 8 ? ' active' : '');
    dot.textContent = i === 1 ? 'HQ' : i;
    grid.appendChild(dot);
  }
})();


// ── La Solución accordion + dynamic panel switching ──
function solShowPanel(n) {
  document.querySelectorAll('.sol-panel').forEach(function(p) { p.classList.remove('active'); });
  var target = document.querySelector('.sol-panel[data-panel="' + n + '"]');
  if (target) target.classList.add('active');
}
function toggleSolAcc(item) {
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.sol-acc-item').forEach(function(i) {
    i.classList.remove('open');
    i.querySelector('.sol-acc-body').style.maxHeight = '0';
  });
  if (!isOpen) {
    item.classList.add('open');
    var b = item.querySelector('.sol-acc-body');
    b.style.maxHeight = b.scrollHeight + 'px';
    var n = item.getAttribute('data-sol');
    if (n) solShowPanel(n);
  }
}
(function() {
  // Hover: preview panel without closing accordion
  document.querySelectorAll('.sol-acc-item').forEach(function(item) {
    item.addEventListener('mouseenter', function() {
      var n = item.getAttribute('data-sol');
      if (n) solShowPanel(n);
    });
    item.addEventListener('mouseleave', function() {
      // Restore to whichever item is currently open
      var openItem = document.querySelector('.sol-acc-item.open');
      if (openItem) {
        var n = openItem.getAttribute('data-sol');
        if (n) solShowPanel(n);
      }
    });
  });
  // Init: open first, show panel 1
  var first = document.querySelector('.sol-acc-item');
  if (first) {
    first.classList.add('open');
    var b = first.querySelector('.sol-acc-body');
    b.style.maxHeight = b.scrollHeight + 'px';
    solShowPanel('1');
  }
})();
// ── BK QR Code visual generator ──
(function(){
  function buildQR(svgId, size, showBadge) {
    const svg = document.getElementById(svgId);
    if (!svg) return;
    const ns = 'http://www.w3.org/2000/svg';
    const n = 21, c = size / n;
    function r(x,y,w,h,fill){
      const el = document.createElementNS(ns,'rect');
      el.setAttribute('x',x*c); el.setAttribute('y',y*c);
      el.setAttribute('width',w*c); el.setAttribute('height',h*c);
      el.setAttribute('fill',fill);
      svg.appendChild(el);
    }
    function finder(ox,oy){
      r(ox,oy,7,7,'#3D1A00');
      r(ox+1,oy+1,5,5,'#fff');
      r(ox+2,oy+2,3,3,'#3D1A00');
    }
    // Finder patterns (3 corners)
    finder(0,0); finder(14,0); finder(0,14);
    // Separator lines (light border around finders)
    r(7,0,.9,7.9,'#fff'); r(0,7,7.9,.9,'#fff');
    r(14,7,.9,7.9,'#fff'); r(7,0,7.9,.9,'#fff');
    r(7,14,.9,6.9,'#fff'); r(0,13,7.9,.9,'#fff');
    // Timing patterns
    for (let i=8;i<=12;i++){
      if(i%2===0){ r(i,6,.88,.88,'#3D1A00'); r(6,i,.88,.88,'#3D1A00'); }
    }
    // Format info area (dark alignment marks)
    r(8,8,1,1,'#3D1A00');
    // Data modules (seeded pseudo-random)
    let s=0xAF5C3B;
    function rnd(){ s=(s*1664525+1013904223)>>>0; return s/4294967295; }
    for(let row=0;row<n;row++){
      for(let col=0;col<n;col++){
        // Skip finder + separator zones
        if(row<9&&col<9)continue;
        if(row<9&&col>12)continue;
        if(row>12&&col<9)continue;
        if(row===6||col===6)continue;
        // Skip center badge area (on main only)
        if(showBadge&&row>=9&&row<=12&&col>=9&&col<=12)continue;
        if(rnd()>0.51) r(col,row,.9,.9,'#3D1A00');
      }
    }
    // BK badge in center of main QR
    if(showBadge){
      const cx=(10.5)*c, cy=(10.5)*c, rad=2.1*c;
      const circ=document.createElementNS(ns,'circle');
      circ.setAttribute('cx',cx); circ.setAttribute('cy',cy);
      circ.setAttribute('r',rad); circ.setAttribute('fill','#FF8C42');
      svg.appendChild(circ);
      const t=document.createElementNS(ns,'text');
      t.setAttribute('x',cx); t.setAttribute('y',cy+rad*0.38);
      t.setAttribute('text-anchor','middle');
      t.setAttribute('fill','#fff');
      t.setAttribute('font-size',rad*0.72);
      t.setAttribute('font-weight','900');
      t.setAttribute('font-family','Arial Black,sans-serif');
      t.textContent='BK';
      svg.appendChild(t);
    }
  }
  buildQR('sol-qr',62,false);
  buildQR('bk-qr-main',146,true);
})();

// ── Logos marquee ──
(function(){
  const logos = [
    {name:'Alto Palermo', bg:'#E8F4F8', color:'#0066A1', border:'#CCE0EF'},
    {name:'Unicenter', bg:'#FFF4E0', color:'#C75B00', border:'#FFD699'},
    {name:'Abasto', bg:'#F0E8F5', color:'#7B2D8B', border:'#D4ADDF'},
    {name:'DOT Baires', bg:'#E8F0FE', color:'#1967D2', border:'#C0D2F8'},
    {name:'Galerías Pacífico', bg:'#E6F4EA', color:'#137333', border:'#A8D5B5'},
    {name:'Falabella', bg:'#FEE8E8', color:'#B71C1C', border:'#F4AAAA'},
    {name:'Frávega', bg:'#FFF3E0', color:'#E65100', border:'#FFCC80'},
    {name:'Patio Bullrich', bg:'#FDF0E8', color:'#8D4E21', border:'#DDB48A'},
    {name:'Palermo Soho', bg:'#E8F5E9', color:'#2E7D32', border:'#A5D6A7'},
    {name:'Nordelta', bg:'#E3F2FD', color:'#1565C0', border:'#90CAF9'},
    {name:'Las Palmas', bg:'#F9FBE7', color:'#558B2F', border:'#C5E1A5'},
    {name:'Garbarino', bg:'#FEEBE9', color:'#C62828', border:'#EF9A9A'},
    {name:'Musimundo', bg:'#EDE7F6', color:'#4527A0', border:'#B39DDB'},
    {name:'Coto', bg:'#E8F5E9', color:'#1B5E20', border:'#A5D6A7'},
    {name:'La Plata Shopping', bg:'#E3F2FD', color:'#0D47A1', border:'#90CAF9'},
  ];
  const track = document.getElementById('marquee-track');
  if (!track) return;
  const double = [...logos, ...logos];
  double.forEach(l => {
    const chip = document.createElement('span');
    chip.className = 'logo-chip';
    chip.style.background = l.bg;
    chip.style.color = l.color;
    chip.style.borderColor = l.border;
    chip.textContent = l.name;
    track.appendChild(chip);
  });
})();
