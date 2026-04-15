document.getElementById('tahun').textContent = new Date().getFullYear();

const header = document.getElementById('site-header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);

  const wa = document.getElementById('wa-btn');
  wa.style.display = window.pageYOffset > 300 ? 'block' : 'none';

  const st = document.getElementById('scroll-top');
  st.style.display = window.pageYOffset > 500 ? 'flex' : 'none';
});

// mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
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

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// daftar merek dengan logo
// cara tambah logo: simpan file jpeg ke folder images/brands/
// contoh: images/brands/honda.jpg lalu isi logo: 'images/brands/honda.jpg'
// kalau logo kosong (''), otomatis tampil ikon gear
const merek = [
  // motor
  { nama: 'Honda',    logo: 'images/brands/Logo Honda.jfif' },
  { nama: 'Yamaha',   logo: 'images/brands/Logo Yamaha.jpeg' },
  { nama: 'Suzuki',   logo: 'images/brands/Logo Suzuki.jpeg' },
  { nama: 'Kawasaki', logo: 'images/brands/Logo Kawasaki.jpeg' },
  { nama: 'TVS',      logo: 'images/brands/Logo TVS.jpeg' },
  { nama: 'KTM',      logo: 'images/brands/Logo KTN.png' },
  // oli & pelumas
  { nama: 'Yamalube',      logo: 'images/brands/Logo Yamalube.png' },
  { nama: 'Enduro',        logo: 'images/brands/Logo Enduro.jpg' },
  { nama: 'Castrol',       logo: 'images/brands/Logo Castrol.jpg' },
  { nama: 'Shell Advance', logo: 'images/brands/Logo Shell.jpeg' },
  { nama: 'Top 1',         logo: 'images/brands/Logo Top 1.jpeg' },
  { nama: 'Repsol',        logo: 'images/brands/Logo Repsol.png' },
  { nama: 'Motul',         logo: 'images/brands/Logo Motul.jfif' },
  // busi & elektrik
  { nama: 'NGK',     logo: 'images/brands/Logo NGK.jpeg' },
  { nama: 'Denso',   logo: 'images/brands/Logo DENSO.jfif' },
  { nama: 'Champion',logo: 'images/brands/Logo Champion.jpeg' },
  { nama: 'Brisk',   logo: 'images/brands/Logo BRISK.jfif' },
  { nama: 'Osram',   logo: 'images/brands/Logo Osram.jfif' },
  { nama: 'HKS',     logo: 'images/brands/Logo HKS.jfif' },
  // aki
  { nama: 'GS Astra', logo: 'images/brands/Logo GS Astra.png' },
  // ban
  { nama: 'IRC',         logo: 'images/brands/Logo IRC.png' },
  { nama: 'FDR',         logo: 'images/brands/logo FDR.jpeg' },
  { nama: 'Swallow',     logo: 'images/brands/LOGO SWALLOW.jfif' },
  { nama: 'Corsa',       logo: 'images/brands/LOGO CORSA.jfif' },
  { nama: 'Michelin',    logo: 'images/brands/Logo Michelin.jfif' },
  { nama: 'Bridgestone', logo: 'images/brands/Logo Bridgestone.jfif' },
  { nama: 'Pirelli',     logo: 'images/brands/Logo Pirelli.jfif' },
  { nama: 'Maxxis',      logo: 'images/brands/Logo maxxis.png' },
  // part umum
  { nama: 'Aspira', logo: 'images/brands/Logo Aspira.jpeg' },
  { nama: 'Sapporo',logo: 'images/brands/Logo Sapporo.jfif' },
  // rantai
  { nama: 'RK Chain', logo: 'images/brands/Logo RK.jfif' },
  { nama: 'DID',      logo: 'images/brands/Logo D.I.D.jfif' },
  { nama: 'Tsubaki',  logo: 'images/brands/Logo Tsubaki.jfif' },
  // shock & rem
  { nama: 'Kayaba', logo: 'images/brands/Logo Kayaba.jfif' },
  { nama: 'Tokico', logo: 'images/brands/Logo Tokico.jfif' },
  // CDI & elektrik
  { nama: 'Takayama', logo: 'images/brands/logo Takayama.png' },
  { nama: 'Fukuyama', logo: 'images/brands/Logo Fukuyama.png' },
  // original parts
  { nama: 'AHM Parts',       logo: 'images/brands/Logo AHM.jpeg' },
  { nama: 'MHM Parts',       logo: 'images/brands/Logo MHM.png' },
  { nama: 'MHM Genuine',     logo: 'images/brands/Logo MHM Genuine Parts.jfif' },
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

  item.innerHTML = `
    <div class="brand-card">
      <div class="brand-icon">${isiIkon}</div>
      <p>${m.nama}</p>
    </div>`;
  brandList.appendChild(item);
});

// kategori produk
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

// swipe carousel foto toko
(function() {
  const track = document.getElementById('swipe-track');
  const dotsWrap = document.getElementById('swipe-dots');
  const btnPrev = document.getElementById('swipe-prev');
  const btnNext = document.getElementById('swipe-next');
  if (!track) return;

  const slides = track.querySelectorAll('.swipe-slide');
  let idx = 0;
  let startX = 0;
  let dragging = false;

  // buat dots
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
    dotsWrap.querySelectorAll('.dot').forEach((d, j) => {
      d.classList.toggle('aktif', j === idx);
    });
    btnPrev.disabled = idx === 0;
    btnNext.disabled = idx === slides.length - 1;
  }

  btnPrev.onclick = () => gotoSlide(idx - 1);
  btnNext.onclick = () => gotoSlide(idx + 1);

  // swipe touch
  track.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) gotoSlide(idx + (diff > 0 ? 1 : -1));
  });

  // swipe mouse (desktop)
  track.addEventListener('mousedown', e => { startX = e.clientX; dragging = true; });
  track.addEventListener('mouseup', e => {
    if (!dragging) return;
    dragging = false;
    const diff = startX - e.clientX;
    if (Math.abs(diff) > 40) gotoSlide(idx + (diff > 0 ? 1 : -1));
  });
  track.addEventListener('mouseleave', () => { dragging = false; });

  gotoSlide(0);
})();

// ===== REVIEW CAROUSEL =====
(function() {
  const track = document.getElementById('review-track');
  if (!track) return;

  const cards = track.querySelectorAll('.review-card');
  const dotsWrap = document.getElementById('review-dots');
  let current = 0;

  // berapa card yang terlihat sekaligus
  function visibleCount() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640)  return 2;
    return 1;
  }

  function totalSlides() {
    return Math.ceil(cards.length / visibleCount());
  }

  function buildDots() {
    dotsWrap.innerHTML = '';
    for (let i = 0; i < totalSlides(); i++) {
      const b = document.createElement('button');
      b.className = 'rdot' + (i === current ? ' aktif' : '');
      b.setAttribute('aria-label', 'Slide ' + (i + 1));
      b.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(b);
    }
  }

  function updateDots() {
    dotsWrap.querySelectorAll('.rdot').forEach((d, i) => {
      d.classList.toggle('aktif', i === current);
    });
  }

  function goTo(idx) {
    const total = totalSlides();
    current = Math.max(0, Math.min(idx, total - 1));
    const vis = visibleCount();
    const gap = 20; // px, harus sama dengan gap di CSS (1.25rem = 20px)
    const cardW = (track.parentElement.offsetWidth - gap * (vis - 1)) / vis;
    const offset = current * vis * (cardW + gap);
    track.style.transform = `translateX(-${offset}px)`;
    updateDots();
  }

  document.getElementById('review-prev').addEventListener('click', () => goTo(current - 1));
  document.getElementById('review-next').addEventListener('click', () => goTo(current + 1));

  // rebuild saat resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      current = 0;
      buildDots();
      goTo(0);
    }, 200);
  });

  buildDots();
  goTo(0);

  // auto-play setiap 5 detik
  setInterval(() => {
    const next = (current + 1) % totalSlides();
    goTo(next);
  }, 5000);
})();
