// ===== TAHUN FOOTER =====
document.getElementById('tahun').textContent = new Date().getFullYear();

// ===== HEADER SCROLL =====
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
  const wa = document.getElementById('wa-btn');
  wa.style.display = window.pageYOffset > 300 ? 'block' : 'none';
  const st = document.getElementById('scroll-top');
  st.style.display = window.pageYOffset > 500 ? 'flex' : 'none';
});

// ===== MOBILE MENU =====
const menuBtn  = document.getElementById('menu-btn');
const mobileNav = document.getElementById('mobile-nav');
menuBtn.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  document.getElementById('icon-menu').style.display  = open ? 'none' : '';
  document.getElementById('icon-close').style.display = open ? '' : 'none';
});
function closeMobileNav() {
  mobileNav.classList.remove('open');
  document.getElementById('icon-menu').style.display  = '';
  document.getElementById('icon-close').style.display = 'none';
}
setTimeout(() => tutupTooltip(), 5000);
function tutupTooltip() {
  const t = document.getElementById('wa-tooltip');
  if (t) t.style.display = 'none';
}
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// ===== BRAND LIST =====
const merek = [
  { nama: 'Honda',        logo: 'images/brands/Logo Honda.jfif' },
  { nama: 'Yamaha',       logo: 'images/brands/Logo Yamaha.jpeg' },
  { nama: 'Suzuki',       logo: 'images/brands/Logo Suzuki.jpeg' },
  { nama: 'Kawasaki',     logo: 'images/brands/Logo Kawasaki.jpeg' },
  { nama: 'Yamalube',     logo: 'images/brands/Logo Yamalube.png' },
  { nama: 'Enduro',       logo: 'images/brands/Logo Enduro.jpg' },
  { nama: 'Castrol',      logo: 'images/brands/Logo Castrol.jpg' },
  { nama: 'Shell Advance',logo: 'images/brands/Logo Shell.jpeg' },
  { nama: 'NGK',          logo: 'images/brands/Logo NGK.jpeg' },
  { nama: 'Denso',        logo: 'images/brands/Logo DENSO.jfif' },
  { nama: 'GS Astra',     logo: 'images/brands/Logo GS Astra.png' },
  { nama: 'IRC',          logo: 'images/brands/Logo IRC.png' },
  { nama: 'FDR',          logo: 'images/brands/logo FDR.jpeg' },
  { nama: 'Bridgestone',  logo: 'images/brands/Logo Bridgestone.jfif' },
  { nama: 'Aspira',       logo: 'images/brands/Logo Aspira.jpeg' },
  { nama: 'RK Chain',     logo: 'images/brands/Logo RK.jfif' },
  { nama: 'AHM Parts',    logo: 'images/brands/Logo AHM.jpeg' },
  { nama: 'MHM Parts',    logo: 'images/brands/Logo MHM.png' },
];
const brandList = document.getElementById('brand-list');
merek.forEach(m => {
  const item = document.createElement('div');
  item.className = 'brand-item';
  const isiIkon = m.logo
    ? `<img src="${m.logo}" alt="${m.nama} logo"
         style="max-width:90%;max-height:90%;object-fit:contain"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
       <i class="fa-solid fa-gears" style="display:none"></i>`
    : `<i class="fa-solid fa-gears"></i>`;
  item.innerHTML = `<div class="brand-card"><div class="brand-icon">${isiIkon}</div><p>${m.nama}</p></div>`;
  brandList.appendChild(item);
});

// ===== KATEGORI PRODUK =====
const kategori = [
  ['MESIN (ENGINE)', 'Piston, Ring Piston, Liner/Silinder, Klep, Per Klep, Kepala Silinder, Blok Mesin, Gasket, Crankshaft, Camshaft, Oil Seal Mesin'],
  ['SISTEM KOPLING', 'Kampas Kopling, Per Kopling, Mangkok Kopling, Plat Kopling, Kabel Kopling, Handle Kopling, Master Kopling'],
  ['SISTEM TRANSMISI', 'Gigi Transmisi 1-6, Garpu Pemindah, Poros Transmisi, Bearing Transmisi, Kick Starter'],
  ['RANTAI & GEAR', 'Rantai Roda, Gear Depan/Belakang, Gear Set, Rantai Keteng, Tensioner Keteng'],
  ['SISTEM BAHAN BAKAR', 'Karburator, Spuyer Main/Pilot Jet, Filter Udara/Bensin, Pompa Bensin, Injektor (FI), Throttle Body, Sensor TPS'],
  ['SISTEM PELUMASAN', 'Filter Oli, Oli Mesin, Pompa Oli, Oil Cooler, Seal Oli, Gasket Bak Oli'],
  ['SISTEM PENDINGIN', 'Radiator, Kipas Radiator, Water Pump, Thermostat, Selang Radiator, Coolant'],
  ['SISTEM PENGAPIAN', 'Busi, Koil Pengapian, CDI, ECU/ECM, Pickup Coil, Kabel Busi'],
  ['KELISTRIKAN', 'Aki/Baterai, Spul/Stator, Kiprok/Regulator, Starter Motor, Kunci Kontak, Speedometer, Klakson, Wiring Harness'],
  ['SISTEM LAMPU', 'Lampu Depan/Belakang, Lampu Rem, Lampu Sein, Lampu Panel, LED Strip, Reflektor, Mika Lampu'],
  ['SISTEM PENGEREMAN', 'Kampas Rem, Cakram, Kaliper Rem, Master Rem, Selang Rem, Minyak Rem, Tromol Rem, ABS Modulator'],
  ['SISTEM SUSPENSI', 'Shock Absorber Depan/Belakang, Per Shock, Oli Shock, Seal Shock, Segitiga Depan, Bearing Setang'],
  ['RODA & BAN', 'Ban Luar/Dalam, Velg, Jari-Jari, Bearing Roda, As Roda, Spacer Roda'],
  ['RANGKA & KEMUDI', 'Setang, Grip, Bearing Komstir, Foot Step, Centerstand, Sidestand'],
  ['SISTEM KNALPOT', 'Knalpot/Exhaust, Pipa Header, Silencer/Muffler, Gasket Knalpot, Bracket Knalpot'],
  ['BODY & FAIRING', 'Fairing, Spakbor, Cover Body, Jok Motor, Windshield, Panel Instrumen, Behel'],
  ['SISTEM MATIC', 'V-Belt, Roller CVT, Per CVT, Kampas Ganda, Mangkok CVT, Puli, Gear Reduksi, Oil Seal CVT'],
  ['BEARING & SEAL', 'Bearing Roda/Mesin/CVT, Oil Seal Kruk As, Oil Seal Transmisi, O-Ring Set'],
];
const catGrid = document.getElementById('cat-grid');
kategori.forEach(([nama, produk]) => {
  const card = document.createElement('div');
  card.className = 'cat-card';
  card.innerHTML = `<div class="cat-card-body"><h4>${nama}</h4><p>${produk}</p></div>`;
  catGrid.appendChild(card);
});

// ===== SWIPE CAROUSEL FOTO TOKO =====
(function() {
  const track    = document.getElementById('swipe-track');
  const dotsWrap = document.getElementById('swipe-dots');
  const btnPrev  = document.getElementById('swipe-prev');
  const btnNext  = document.getElementById('swipe-next');
  if (!track) return;
  const slides = track.querySelectorAll('.swipe-slide');
  let idx = 0, startX = 0, dragging = false;
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' aktif' : '');
    dot.setAttribute('aria-label', 'Foto ' + (i + 1));
    dot.onclick = () => gotoSlide(i);
    dotsWrap.appendChild(dot);
  });
  function gotoSlide(i) {
    idx = Math.max(0, Math.min(i, slides.length - 1));
    track.style.transform = 'translateX(-' + (idx * 100) + '%)';
    dotsWrap.querySelectorAll('.dot').forEach((d, j) => d.classList.toggle('aktif', j === idx));
    btnPrev.disabled = idx === 0;
    btnNext.disabled = idx === slides.length - 1;
  }
  btnPrev.onclick = () => gotoSlide(idx - 1);
  btnNext.onclick = () => gotoSlide(idx + 1);
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) gotoSlide(idx + (diff > 0 ? 1 : -1));
  });
  track.addEventListener('mousedown',  e => { startX = e.clientX; dragging = true; });
  track.addEventListener('mouseup',    e => {
    if (!dragging) return; dragging = false;
    const diff = startX - e.clientX;
    if (Math.abs(diff) > 40) gotoSlide(idx + (diff > 0 ? 1 : -1));
  });
  track.addEventListener('mouseleave', () => { dragging = false; });
  gotoSlide(0);
})();


(function() {
  const GOOGLE_G = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="22" height="22">
    <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>`;

  const COLORS = ['#8B2E3C','#c0392b','#1a6b3c','#27ae60','#d35400','#7B3F9E','#2980b9','#16a085','#2d2d2d','#8e44ad'];

  function buildCard(r) {
    const initial = (r.name || '?')[0].toUpperCase();
    const color   = r.avatarColor || COLORS[(r.name || '').charCodeAt(0) % COLORS.length];
    const stars   = Array.from({length:5}, (_,i) =>
      `<i class="fa-${i < (r.rating||5) ? 'solid' : 'regular'} fa-star"></i>`).join('');
    return `
      <div class="review-card">
        <div class="review-header">
          <div class="reviewer-avatar avatar-initial" style="background:${color}">${initial}</div>
          <div class="reviewer-info">
            <p class="reviewer-name">${r.name}</p>
            <div class="review-stars">${stars}</div>
            
          </div>
          <div class="gmaps-icon">${GOOGLE_G}</div>
        </div>
        <div class="review-quote-icon"><i class="fa-solid fa-quote-left"></i></div>
        <p class="review-text">${r.text || ''}</p>
        <div class="review-verified"><i class="fa-solid fa-circle-check"></i> Ulasan Terverifikasi Google</div>
      </div>`;
  }

  function initCarousel(reviews) {
    const track    = document.getElementById('review-track');
    const dotsWrap = document.getElementById('review-dots');
    if (!track) return;

    track.innerHTML = reviews.map(buildCard).join('');
    const cards = track.querySelectorAll('.review-card');
    let current = 0;
    let autoTimer;

    function vis()   { return window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1; }
    function total() { return Math.ceil(cards.length / vis()); }

    function buildDots() {
      dotsWrap.innerHTML = '';
      for (let i = 0; i < total(); i++) {
        const b = document.createElement('button');
        b.className = 'rdot' + (i === current ? ' aktif' : '');
        b.setAttribute('aria-label', 'Slide ' + (i+1));
        b.addEventListener('click', () => { goTo(i); startAuto(); });
        dotsWrap.appendChild(b);
      }
    }

    function goTo(idx) {
      current = ((idx % total()) + total()) % total();
      const v = vis(), gap = 20;
      const cardW = (track.parentElement.offsetWidth - gap * (v - 1)) / v;
      track.style.transform = `translateX(-${current * v * (cardW + gap)}px)`;
      dotsWrap.querySelectorAll('.rdot').forEach((d,i) => d.classList.toggle('aktif', i === current));
    }

    function startAuto() {
      clearInterval(autoTimer);
      autoTimer = setInterval(() => goTo(current + 1), 5000);
    }

    document.getElementById('review-prev').addEventListener('click', () => { goTo(current - 1); startAuto(); });
    document.getElementById('review-next').addEventListener('click', () => { goTo(current + 1); startAuto(); });

    // Touch swipe
    let tx = 0;
    track.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend',   e => {
      const d = tx - e.changedTouches[0].clientX;
      if (Math.abs(d) > 40) { goTo(current + (d > 0 ? 1 : -1)); startAuto(); }
    });

    let resizeT;
    window.addEventListener('resize', () => {
      clearTimeout(resizeT);
      resizeT = setTimeout(() => { current = 0; buildDots(); goTo(0); }, 200);
    });

    buildDots();
    goTo(0);
    startAuto();

    // Pause saat hover
    track.addEventListener('mouseenter', () => clearInterval(autoTimer));
    track.addEventListener('mouseleave', () => startAuto());
  }

  const fallback = [
    { name: 'Rogen bagas Smg',    rating: 5, text: 'Sangat recommended belanja disini, pelayanannya pun mantap 👍' },
    { name: 'RafikoAlfahri Purba',rating: 5, text: 'Sangat bagus, lengkap, dan cepat.' },
    { name: 'Yandri Sihombing',   rating: 5, text: 'Barangnya bagus, harga terjangkau pokoknya mantaplah.' },
    { name: 'Ibnu Chalik',        rating: 5, text: 'Sparepart cukup lengkap, harga masih terjangkau, pelayanan cepat dan ramah.' },
    { name: 'Angel',              rating: 5, text: 'Toko menjual sparepart motor lengkap, bisa konsultasi, terpercaya.' },
    { name: 'Family Sidabalok',   rating: 5, text: 'Harga oke, pelayanannya cepat.' },
    { name: 'rusdin Sihotang',    rating: 5, text: 'Barangnya lengkap dan pelayanannya ramah.' },
    { name: 'Rizky Saragi',       rating: 5, text: 'Lengkap dan terpercaya.' },
    { name: 'Yoga Lepi Berasa',   rating: 5, text: 'Pelayanan sangat memuaskan, stok lengkap!' },
  ];

  
  initCarousel(fallback);

  const bust = `?v=${Math.floor(Date.now() / 3600000)}`;
  fetch(`reviews.json${bust}`)
    .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(data => {
      if (!Array.isArray(data) || !data.length) return;
      initCarousel(data)
    })
    .catch(() => { /* diam-diam, fallback sudah tampil */ });

})();

