/* =============================================
   BIRTHDAY WEB APP – SCRIPT.JS
   For: Reny Aprillia Safarty • 27 April 2026
   ============================================= */

'use strict';

// ── Config ──────────────────────────────────────
const BIRTHDAY = new Date('2026-04-27T00:00:00');

const GALLERY_ITEMS = [
  { file: 'img/1.JPG', caption: 'Awal dari segalanya, senyum yang mengubah duniaku ✨' },
  { file: 'img/2.jpg', caption: 'Matahari di hari-hariku yang mendung ☀️' },
  { file: 'img/3.jpg', caption: 'Tawamu adalah melodi favoritku 🎶' },
  { file: 'img/4.jpg', caption: 'Tempatku menemukan ketenangan 🏡' },
  { file: 'img/5.jpg', caption: 'Momen kecil yang terasa luar biasa bersamamu 💎' },
  { file: 'img/6.jpeg', caption: 'Kamu, dan selamanya kamu ❤️' },
  { file: 'img/7.jpeg', caption: 'Setiap detik bersamamu adalah hadiah terindah 🎁' },
  { file: 'img/8.jpeg', caption: 'Kebahagiaanku adalah melihatmu bahagia 😊' },
  { file: 'img/9.jpeg', caption: 'Di sampingmu, semua terasa pas dan aman 🤍' },
  { file: 'img/10.jpeg', caption: 'Kenangan ini, kusimpan rapi di dalam hati 💛' },
  { file: 'img/11.jpeg', caption: 'Waktu seakan berhenti ketika kita bersama ⏳' },
  { file: 'img/12.jpg', caption: 'Bukti nyata bahwa kebahagiaan itu ada 💖' },
  { file: 'img/13.jpg', caption: 'Hanya kamu yang bisa membuatku setenang ini 🌊' },
  { file: 'img/14.JPG', caption: 'Tatapanmu selalu bisa meneduhkan hatiku 🍃' },
  { file: 'img/15.JPG', caption: 'Langkah demi langkah, kita lalui bersama 👣' },
  { file: 'img/16.jpg', caption: 'Tak ada tempat yang lebih baik selain di sisimu ⛺' },
  { file: 'img/17.jpg', caption: 'Cerita kita, yang paling suka aku baca berulang kali 📖' },
  { file: 'img/18.jpg', caption: 'Setiap hari adalah petualangan baru bersamamu 🚀' },
  { file: 'img/19.jpg', caption: 'Kamu adalah definisi dari rumah yang sebenarnya 🏠' },
  { file: 'img/20.jpg', caption: 'Genggaman tanganmu membuatku tak pernah merasa sendiri 🤝' },
  { file: 'img/21.jpg', caption: 'Kita dan sejuta cerita yang belum sempat tertulis 📝' },
  { file: 'img/22.jpg', caption: 'Senyum yang membuatku jatuh cinta berkali-kali 😍' },
  { file: 'img/23.jpg', caption: 'Terima kasih telah menjadi versi terbaik darimu 💐' },
  { file: 'img/24.jpg', caption: 'Aku mencintaimu lebih dari kata-kata yang bisa kuucapkan 💌' },
  { file: 'img/25.jpg', caption: 'Tumbuh bersama adalah keajaiban terbesar 🌻' },
  { file: 'img/26.jpg', caption: 'Kamu adalah warna di hidupku yang sebelumnya monokrom 🎨' },
  { file: 'img/27.jpg', caption: 'Jalan bersamamu adalah jalan yang selalu ingin kutempuh 🛤️' },
  { file: 'img/28.jpg', caption: 'Tak ada yang lebih manis dari momen-momen ini 🍯' },
  { file: 'img/29.jpg', caption: 'Kita, hari ini, esok, dan untuk selamanya 🌠' },
  { file: 'img/30.jpg', caption: 'Cerita cinta kita yang akan selalu abadi 💞' }
];

const WISH_TEXT = `Reny yang paling aku sayangi,

Di hari yang spesial ini, izinkan aku menyampaikan semua yang selama ini 
ada di dalam hatiku, lewat kata-kata yang mungkin tak cukup untuk mewakilkan 
betapa besar rasa syukurku memilikimu.

Selamat ulang tahun, sayangku. Bertambah satu tahun usiamu, 
semoga semakin bertambah pula kebahagiaan, kesehatan, dan semua yang terbaik 
dalam hidupmu.

Kamu adalah salah satu hal terindah yang pernah hadir dalam hidupku. 
Kamu bukan hanya seseorang yang aku cintai — kamu adalah alasan mengapa 
aku ingin menjadi pribadi yang lebih baik setiap harinya.

Doa tertulusku untukmu:
Semoga Allah selalu menjaga dan melindungimu, 
memberikanmu kesehatan yang sempurna, 
hati yang selalu tenang dan lapang, 
rezeki yang mengalir tanpa henti, 
dan keberkahan di setiap langkahmu.

Semoga semua impianmu terwujud, semua usahamu membuahkan hasil, 
dan semua kebaikan yang kamu tanamkan kembali padamu berlipat ganda.

Terima kasih sudah ada, sudah mau hadir dalam hidupku, 
dan sudah menjadi cahaya di hari-hari yang paling gelap sekalipun.

Aku akan terus ada untukmu — kemarin, hari ini, dan selama yang Allah izinkan.

Dengan seluruh cinta yang aku punya,
Imam 💕`;



const EASTER_TITLE = 'Rahasia Kecil 🤫';
const EASTER_BODY = `Tahu tidak? Setiap kali kamu tersenyum, semua hal buruk di dunia ini seolah-olah menghilang sejenak. Kamu punya kekuatan itu — kekuatan untuk membuat dunia terasa lebih indah hanya dengan hadir. Jangan pernah underestimate dirimu sendiri, ya. Aku sangat bangga dengan kamu. 💫`;

const REASONS = [
  "Karena kamu selalu tahu cara membuatku tersenyum bahkan di hari yang paling berat.",
  "Karena cara kamu menatapku membuatku merasa menjadi orang paling beruntung di dunia.",
  "Karena kesabaranmu menghadapi kekuranganku tidak pernah ada habisnya.",
  "Karena kamu adalah pendengar terbaik yang selalu peduli dengan ceritaku.",
  "Karena tawamu adalah melodi paling indah yang pernah kudengar.",
  "Karena bersamamu, aku merasa menjadi diriku sendiri tanpa perlu berpura-pura.",
  "Karena tulusnya hatimu membuatku selalu ingin menjadi versi terbaik dari diriku.",
  "Karena genggaman tanganmu selalu memberiku kekuatan dan rasa aman.",
  "Karena kamu bukan hanya kekasihku, tapi juga sahabat terbaik dan rumahku.",
  "Dan yang terpenting... karena kamu adalah kamu. Aku mencintaimu tanpa syarat."
];

// ── State ────────────────────────────────────────
let musicPlaying = false;
let confettiActive = false;
let petalsActive = true;
let easterClickCount = 0;
let envelopeOpened = false;
let currentReasonIndex = 0;

// ── DOM Refs ─────────────────────────────────────
const pages = {
  opening: document.getElementById('page-opening'),
  'fireworks-overlay': document.getElementById('fireworks-overlay'),
  surprise: document.getElementById('page-surprise'),
  gallery: document.getElementById('page-gallery'),
  future: document.getElementById('page-future'),
};
const overlay = document.getElementById('transition-overlay');
const audioEl = document.getElementById('bg-music');
const audioCtrl = document.getElementById('audio-control');
const audioIcon = document.getElementById('audio-icon');

// ── Init ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  fillTextContent();
  initCountdown();
  initParticles();
  initPetals();
  initFloatingHearts('floating-hearts-1', 8);
  buildGallery();
  initAudioControl();
  initHiddenMessage();
  initParallax();
  setupAutoplay();
  buildReasons();
  initPinkyPromise();
  initGalleryGatekeeper();
});

// ── Fill text ────────────────────────────────────
function fillTextContent() {
  document.getElementById('easter-title').textContent = EASTER_TITLE;
  document.getElementById('easter-body').textContent = EASTER_BODY;
}

// ── Countdown ────────────────────────────────────
function initCountdown() {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  const now = new Date();
  const diff = BIRTHDAY - now;

  if (diff <= 0) {
    document.getElementById('countdown-container').classList.add('hidden');
    document.getElementById('birthday-reached').classList.remove('hidden');
    return;
  }

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  document.getElementById('days').textContent = String(d).padStart(2, '0');
  document.getElementById('hours').textContent = String(h).padStart(2, '0');
  document.getElementById('minutes').textContent = String(m).padStart(2, '0');
  document.getElementById('seconds').textContent = String(s).padStart(2, '0');
}

// ── Navigation ───────────────────────────────────
function showPage(name) {
  Object.entries(pages).forEach(([key, el]) => {
    if (key === name) {
      el.classList.remove('hidden');
      el.classList.add('active');
    } else {
      el.classList.remove('active');
      el.classList.add('hidden');
    }
  });
}

function doTransition(callback) {
  overlay.classList.remove('hidden');
  overlay.classList.add('active');
  playClickSound();
  setTimeout(() => {
    callback();
    overlay.classList.remove('active');
    setTimeout(() => overlay.classList.add('hidden'), 50);
  }, 400);
}

function goToSurprise() {
  doTransition(() => {
    showPage('fireworks-overlay');
    startFireworksSequence();
  });
}

// ── Fireworks Sequence ───────────────────────────
function startFireworksSequence() {
  const canvas = document.getElementById('fireworks-canvas');
  const ctx = canvas.getContext('2d');
  const textEl = document.getElementById('fireworks-text');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];
  const colors = ['#ff4d6d', '#ff758f', '#ffb703', '#00f5d4', '#fee440'];

  class Particle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 6 - 3;
      this.speedY = Math.random() * 6 - 3;
      this.opacity = 1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.opacity -= 0.01;
    }
    draw() {
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function createExplosion(x, y) {
    playClickSound();
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle(x, y, colors[Math.floor(Math.random() * colors.length)]));
    }
  }

  function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    particles = particles.filter(p => p.opacity > 0);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    
    if (document.getElementById('fireworks-overlay').classList.contains('active')) {
      requestAnimationFrame(animate);
    }
  }

  animate();

  const steps = [
    { text: 'HAPPY', delay: 1000 },
    { text: 'BIRTHDAY', delay: 2500 },
    { text: 'SAYANGKU!', delay: 4000 }
  ];

  steps.forEach((step, i) => {
    setTimeout(() => {
      textEl.textContent = step.text;
      textEl.classList.add('show');
      createExplosion(canvas.width / 2, canvas.height / 2);
      
      setTimeout(() => {
        textEl.classList.remove('show');
      }, 1200);
    }, step.delay);
  });

  // Final transition (Seamless)
  setTimeout(() => {
    const fwOverlay = document.getElementById('fireworks-overlay');
    fwOverlay.style.transition = 'opacity 2s ease';
    fwOverlay.style.opacity = '0';
    
    // Start surprise page stuff while fading out
    showPage('surprise');
    initFloatingHearts('floating-hearts-2', 8);
    triggerSurprise(); // Fix: restore the text reveal
    
    const audio = document.getElementById('bg-music');
    if (audio && audio.paused) audio.play();

    setTimeout(() => {
      fwOverlay.classList.remove('active');
      fwOverlay.classList.add('hidden');
      fwOverlay.style.opacity = '1'; // Reset for next time
    }, 2000);
  }, 6000);
}

function goToSurpriseDirect() {
  doTransition(() => {
    showPage('surprise');
    initFloatingHearts('floating-hearts-2', 8);
  });
}

function goToGallery() {
  doTransition(() => {
    showPage('gallery');
    initFloatingHearts('floating-hearts-3', 6);
    
    // Ensure gatekeeper is shown and main content hidden
    const gatekeeper = document.getElementById('gallery-gatekeeper');
    const mainContent = document.getElementById('gallery-main-content');
    if (gatekeeper && mainContent) {
      // Reset inline styles from previous animations
      gatekeeper.style.opacity = '';
      gatekeeper.style.transform = '';
      gatekeeper.style.transition = '';
      
      gatekeeper.classList.remove('hidden');
      mainContent.classList.add('hidden');
      
      // Reset box and key
      const box = document.getElementById('vintage-box');
      box.classList.remove('open');
      const keyWrap = document.getElementById('golden-key-wrap');
      keyWrap.style.transform = '';
      keyWrap.style.opacity = '';
      keyWrap.style.transition = '';
      
      document.getElementById('golden-key').style.pointerEvents = 'all';
      document.getElementById('golden-key').style.transform = '';
      
      // Ensure gallery is built once visible
      buildGallery();
    }
  });
}

function goToFuture() {
  doTransition(() => {
    showPage('future');
    initFloatingHearts('floating-hearts-4', 10);
    initStarCanvas();
    
    // Ensure promise section is visible and dreams are hidden
    const gatekeeper = document.getElementById('pinky-gatekeeper');
    const dreams = document.getElementById('future-dreams-content');
    if (gatekeeper && dreams) {
      // Reset gatekeeper inline styles
      gatekeeper.style.opacity = '';
      gatekeeper.style.transform = '';
      gatekeeper.style.transition = '';
      
      gatekeeper.classList.remove('hidden');
      dreams.classList.add('hidden');
      
      // Reset button and progress
      const btn = document.getElementById('pinky-promise-btn');
      if (btn) {
        btn.style.pointerEvents = '';
        btn.style.transform = '';
        const icon = btn.querySelector('.pinky-icon');
        if (icon) icon.textContent = '🤙';
        btn.classList.remove('holding');
      }

      const ring = document.getElementById('pinky-progress-circle');
      if (ring) ring.style.strokeDashoffset = '283';
      const msg = document.getElementById('pinky-message');
      if (msg) msg.classList.add('hidden');
    }
  });
}

function goToOpening() {
  doTransition(() => {
    showPage('opening');
    initFloatingHearts('floating-hearts-1', 8);
  });
}

// ── Surprise Page ────────────────────────────────
function triggerSurprise() {
  const burst = document.getElementById('light-burst');
  burst.classList.add('burst-active');
  setTimeout(() => burst.classList.remove('burst-active'), 1000);

  startConfetti();
  typeWriter(
    document.getElementById('surprise-title'),
    'Selamat Ulang Tahun\nReny Aprillia Safarty 🎉❤️',
    60
  );
  document.getElementById('surprise-subtitle').textContent =
    '"Kamu adalah hadiah terbaik yang pernah aku terima dari semesta."';
}

function typeWriter(el, text, speed) {
  el.textContent = '';
  let i = 0;
  const tick = () => {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(tick, speed);
    }
  };
  tick();
}

// ── Confetti ─────────────────────────────────────
function startConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 140 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 8 + 4,
    d: Math.random() * 80 + 20,
    color: ['#F9DAE6', '#FAD0E6', '#C1E3F1', '#9bc5d8', '#ffffff'][Math.floor(Math.random() * 5)],
    tilt: Math.random() * 10 - 10,
    tiltAngle: 0,
    tiltAngleInc: (Math.random() * .07) + .05,
  }));

  let frame = 0;
  confettiActive = true;

  function draw() {
    if (!confettiActive) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.lineWidth = p.r / 2;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
      ctx.stroke();
    });
    update();
    if (frame < 260) requestAnimationFrame(draw);
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); confettiActive = false; }
    frame++;
  }

  function update() {
    particles.forEach(p => {
      p.tiltAngle += p.tiltAngleInc;
      p.y += (Math.cos(frame / 20) + 1 + p.r / 2) * 1.5;
      p.tilt = Math.sin(p.tiltAngle - frame / 3) * 15;
      if (p.y > canvas.height) { p.x = Math.random() * canvas.width; p.y = -20; }
    });
  }

  draw();
}

// ── Particle Background (Page 1) ─────────────────
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  const NUM = 80;
  const pts = Array.from({ length: NUM }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 2 + .5,
    dx: (Math.random() - .5) * .4,
    dy: (Math.random() - .5) * .4,
    alpha: Math.random() * .6 + .2,
    color: ['#ff6eb4', '#c77dff', '#90e0ef'][Math.floor(Math.random() * 3)],
  }));

  window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });

  function loop() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > W) p.dx *= -1;
      if (p.y < 0 || p.y > H) p.dy *= -1;
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(loop);
  }
  loop();
}

// ── Star Canvas (Page 4) ──────────────────────────
function initStarCanvas() {
  const canvas = document.getElementById('star-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  const stars = Array.from({ length: 120 }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    r: Math.random() * 1.5 + .3,
    alpha: Math.random(),
    speed: Math.random() * .008 + .002,
    phase: Math.random() * Math.PI * 2,
  }));

  function loop() {
    ctx.clearRect(0, 0, W, H);
    const t = Date.now() / 1000;
    stars.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.globalAlpha = (.4 + .5 * Math.sin(t * s.speed * 60 + s.phase));
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(loop);
  }
  loop();
}

// ── Floating Hearts ───────────────────────────────
function initFloatingHearts(containerId, count) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  const emojis = ['❤️', '💕', '💗', '💖', '💝', '🌸', '✨', '💫'];
  for (let i = 0; i < count; i++) {
    const h = document.createElement('span');
    h.className = 'heart';
    h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    h.style.left = Math.random() * 100 + 'vw';
    h.style.fontSize = (Math.random() * 1.2 + .7) + 'rem';
    h.style.animationDuration = (Math.random() * 8 + 7) + 's';
    h.style.animationDelay = (Math.random() * 6) + 's';
    container.appendChild(h);
  }
}

// ── Gallery ───────────────────────────────────────
function buildGallery() {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = '';

  let loaded = 0;

  GALLERY_ITEMS.forEach((item, idx) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'gallery-item';
    wrapper.style.animationDelay = (idx * 0.08) + 's';
    wrapper.onclick = () => openModal(item.file, item.caption);

    const img = document.createElement('img');
    img.alt = item.caption;
    img.loading = 'lazy';

    // Test if image exists
    img.onload = () => { loaded++; };
    img.onerror = () => {
      wrapper.style.display = 'none';
      loaded++;
      if (loaded === GALLERY_ITEMS.length) checkEmptyGallery(grid);
    };
    img.src = item.file;

    const overlay = document.createElement('div');
    overlay.className = 'gallery-caption-overlay';
    const cap = document.createElement('span');
    cap.className = 'gallery-caption-text';
    cap.textContent = item.caption;
    overlay.appendChild(cap);

    wrapper.appendChild(img);
    wrapper.appendChild(overlay);
    grid.appendChild(wrapper);
  });
}

function checkEmptyGallery(grid) {
  const visible = grid.querySelectorAll('.gallery-item:not([style*="none"])');
  if (visible.length === 0) {
    grid.innerHTML = `
      <div class="gallery-placeholder">
        <div class="nav-buttons bottom-nav">
          <button class="btn-secondary" onclick="goToSurpriseDirect()">← Kembali</button>
          <button class="btn-primary" onclick="goToOpening()">🏠 Awal</button>
        </div>
        <div class="glass-card">
          <p>📂 Belum ada foto tersedia.<br>
          Letakkan foto di folder <strong>/img/</strong><br>
          dengan nama <em>img1.jpg, img2.jpg, ...</em></p>
        </div>
      </div>`;
  }
}

function openModal(src, caption) {
  const modal = document.getElementById('gallery-modal');
  document.getElementById('modal-img').src = src;
  document.getElementById('modal-caption').textContent = caption;
  modal.classList.remove('hidden');
  playClickSound();
}

function closeModal(e) {
  const modal = document.getElementById('gallery-modal');
  if (!e || e.target === modal || e.currentTarget.classList.contains('modal-close')) {
    modal.classList.add('hidden');
  }
}

// ── Easter Egg ────────────────────────────────────
function showEasterEgg() {
  document.getElementById('easter-egg-modal').classList.remove('hidden');
  playClickSound();
}

function hideEasterEgg(e) {
  const modal = document.getElementById('easter-egg-modal');
  if (!e || e.target === modal || e.currentTarget.classList.contains('modal-close')) {
    modal.classList.add('hidden');
  }
}

// ── Hidden Message (konami-style: 5× hint click) ─
function initHiddenMessage() {
  const hint = document.getElementById('easter-hint');
  const msg = document.getElementById('hidden-message');
  if (!hint) return;
  hint.addEventListener('click', () => {
    easterClickCount++;
    if (easterClickCount >= 3) {
      msg.classList.remove('hidden');
      setTimeout(() => msg.classList.add('hidden'), 4000);
      easterClickCount = 0;
    }
  });
}

// ── Audio ─────────────────────────────────────────
function initAudioControl() {
  audioCtrl.addEventListener('click', toggleMusic);
}

// Autoplay on first user touch/click (browser policy)
function setupAutoplay() {
  const tryPlay = () => {
    if (!musicPlaying) {
      audioEl.load();
      audioEl.play().then(() => {
        musicPlaying = true;
        audioIcon.textContent = '🎶';
        audioCtrl.classList.add('playing');
      }).catch(() => { });
    }
  };
  document.addEventListener('click', tryPlay, { once: true });
  document.addEventListener('touchstart', tryPlay, { once: true });
}

function toggleMusic() {
  if (musicPlaying) {
    audioEl.pause();
    audioIcon.textContent = '🎵';
    audioCtrl.classList.remove('playing');
    musicPlaying = false;
  } else {
    audioEl.play().then(() => {
      audioIcon.textContent = '🎶';
      audioCtrl.classList.add('playing');
      musicPlaying = true;
    }).catch(() => {
      audioIcon.textContent = '🔇';
      setTimeout(() => { audioIcon.textContent = '🎵'; }, 1500);
    });
  }
}

// ── Click Sound (Web Audio API) ───────────────────
function playClickSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + .15);
    gain.gain.setValueAtTime(.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .2);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + .2);
  } catch (_) { }
}

// ── Parallax ──────────────────────────────────────
function initParallax() {
  document.addEventListener('mousemove', e => {
    const xp = (e.clientX / window.innerWidth - .5) * 12;
    const yp = (e.clientY / window.innerHeight - .5) * 12;
    document.querySelectorAll('.parallax-card').forEach((el, i) => {
      const depth = (i % 3 + 1) * 0.35;
      el.style.transform = `translate(${xp * depth}px, ${yp * depth}px)`;
    });
  });
}

// ── Keyboard: ESC closes modals ───────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    hideEasterEgg();
  }
});

// ── Resize: keep canvases correct ────────────────
window.addEventListener('resize', () => {
  const pc = document.getElementById('particle-canvas');
  if (pc) { pc.width = window.innerWidth; pc.height = window.innerHeight; }
});

// ── Petals Background ────────────────────────────
function initPetals() {
  const canvas = document.getElementById('petals-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  const petals = Array.from({ length: 40 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H - H,
    w: Math.random() * 15 + 10,
    h: Math.random() * 10 + 5,
    rot: Math.random() * Math.PI * 2,
    speed: Math.random() * 1.5 + 0.5,
    drift: Math.random() * 2 - 1,
    spin: (Math.random() - 0.5) * 0.05,
    color: ['#ffb7b2', '#f9dae6', '#ffc4d9', '#ffa6c9', '#ffffff'][Math.floor(Math.random() * 5)]
  }));

  window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });

  function draw() {
    if (!petalsActive) return;
    ctx.clearRect(0, 0, W, H);
    petals.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.beginPath();
      // Draw a simple petal shape
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(p.w / 2, -p.h, p.w, 0);
      ctx.quadraticCurveTo(p.w / 2, p.h, 0, 0);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.6;
      ctx.fill();
      ctx.restore();

      p.y += p.speed;
      p.x += p.drift + Math.sin(p.y * 0.01) * 1;
      p.rot += p.spin;

      if (p.y > H + p.w) {
        p.y = -p.w;
        p.x = Math.random() * W;
      }
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// ── Envelope ─────────────────────────────────────
function openEnvelope() {
  if (envelopeOpened) return;
  envelopeOpened = true;
  document.getElementById('envelope').classList.add('open');
  playClickSound();

  const paper = document.getElementById('wish-text');
  paper.innerHTML = '';
  paper.classList.add('wet-ink');
  
  const text = WISH_TEXT;
  const chars = text.split('');
  
  let i = 0;
  function writeChar() {
    if (i < chars.length) {
      const span = document.createElement('span');
      // Replace newline with <br> for display
      if (chars[i] === '\n') {
        paper.appendChild(document.createElement('br'));
      } else {
        span.textContent = chars[i];
        span.className = 'ink-stroke';
        paper.appendChild(span);
        
        // Force reflow
        span.offsetWidth;
        span.classList.add('visible', 'fresh');
        
        setTimeout(() => {
          span.classList.remove('fresh');
        }, 1500);
      }
      
      i++;
      const delay = chars[i-1] === '\n' ? 400 : (Math.random() * 40 + 20);
      setTimeout(writeChar, delay);
    }
  }

  // Start writing after paper slides out (1.4s delay)
  setTimeout(writeChar, 1400);
}

// ── Reasons Game (Bubble Pop) ────────────────────
let poppedCount = 0;

function buildReasons() {
  const container = document.getElementById('bubble-container');
  if (!container) return;
  
  container.innerHTML = '';
  poppedCount = 0;
  updateBubbleCounter();

  REASONS.forEach((reason, idx) => {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = idx + 1;
    
    // Random position and animation variables
    const size = Math.random() * 40 + 60; // 60-100px
    const left = Math.random() * 80 + 5; // 5-85%
    const top = Math.random() * 70 + 10; // 10-80%
    const duration = Math.random() * 3 + 4; // 4-7s
    const delay = Math.random() * 2;
    
    // Custom properties for CSS animation
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.top = `${top}%`;
    bubble.style.setProperty('--dur', `${duration}s`);
    bubble.style.animationDelay = `${delay}s`;
    
    // Floating variances
    bubble.style.setProperty('--tx', `${Math.random() * 40 - 20}px`);
    bubble.style.setProperty('--ty', `${Math.random() * 40 - 20}px`);
    bubble.style.setProperty('--tx2', `${Math.random() * 40 - 20}px`);
    bubble.style.setProperty('--ty2', `${Math.random() * 40 - 20}px`);

    bubble.onclick = (e) => {
      e.stopPropagation();
      popBubble(idx, bubble);
    };
    
    container.appendChild(bubble);
  });
}

function popBubble(idx, el) {
  if (el.classList.contains('popped')) return;
  
  el.classList.add('popped');
  playClickSound(); // Or a specific pop sound if available
  
  poppedCount++;
  updateBubbleCounter();

  // Show the reason after a short delay (animation sync)
  setTimeout(() => {
    showActiveReason(idx);
  }, 300);
}

function showActiveReason(idx) {
  const display = document.getElementById('active-reason-display');
  const numEl = document.getElementById('popped-reason-number');
  const textEl = document.getElementById('popped-reason-text');
  
  numEl.textContent = `#${idx + 1}`;
  textEl.textContent = REASONS[idx];
  display.classList.remove('hidden');
}

function hideActiveReason() {
  document.getElementById('active-reason-display').classList.add('hidden');
  playClickSound();
}

function updateBubbleCounter() {
  const counter = document.getElementById('reasons-counter-bubbles');
  if (counter) {
    counter.textContent = `Gelembung pecah: ${poppedCount} / ${REASONS.length}`;
  }
}

function showReasons() {
  document.getElementById('reasons-modal').classList.remove('hidden');
  buildReasons();
  playClickSound();
}

function closeReasons(e) {
  const modal = document.getElementById('reasons-modal');
  if (!e || e.target === modal || e.currentTarget.classList.contains('modal-close')) {
    modal.classList.add('hidden');
  }
}

// ── Mini Cinema ──────────────────────────────────
let cinemaInterval;
let currentCinemaIndex = 0;

function openCinema() {
  const modal = document.getElementById('cinema-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  playClickSound();
  
  // Start countdown
  const countdownEl = document.getElementById('cinema-countdown');
  const projectorEl = document.getElementById('cinema-projector');
  countdownEl.classList.remove('hidden');
  projectorEl.classList.add('hidden');
  
  let count = 3;
  countdownEl.textContent = count;
  
  const timer = setInterval(() => {
    count--;
    if (count > 0) {
      countdownEl.textContent = count;
      playClickSound();
    } else {
      clearInterval(timer);
      countdownEl.classList.add('hidden');
      projectorEl.classList.remove('hidden');
      startCinemaShow();
    }
  }, 1000);
}

function closeCinema() {
  const modal = document.getElementById('cinema-modal');
  if (modal) modal.classList.add('hidden');
  clearInterval(cinemaInterval);
}

function startCinemaShow() {
  const imgEl = document.getElementById('cinema-img');
  const capEl = document.getElementById('cinema-caption');
  
  if (!GALLERY_ITEMS || GALLERY_ITEMS.length === 0) return;
  
  currentCinemaIndex = 0;
  showCinemaSlide();
  
  cinemaInterval = setInterval(() => {
    imgEl.classList.add('fade-out');
    capEl.classList.add('fade-out');
    
    setTimeout(() => {
      currentCinemaIndex = (currentCinemaIndex + 1) % GALLERY_ITEMS.length;
      showCinemaSlide();
      imgEl.classList.remove('fade-out');
      capEl.classList.remove('fade-out');
    }, 1000);
  }, 4000); // 4 seconds per slide
}

function showCinemaSlide() {
  const item = GALLERY_ITEMS[currentCinemaIndex];
  const imgEl = document.getElementById('cinema-img');
  const capEl = document.getElementById('cinema-caption');
  if (imgEl && capEl) {
    imgEl.src = item.file;
    capEl.textContent = item.caption;
  }
}

// ── Pinky Promise ────────────────────────────────
function initPinkyPromise() {
  const btn = document.getElementById('pinky-promise-btn');
  const ring = document.getElementById('pinky-progress-circle');
  const msg = document.getElementById('pinky-message');
  if (!btn || !ring || !msg) return;

  let holdTimer;
  let progress = 0;
  const duration = 2000; // 2 seconds to seal the promise
  const interval = 20; // 20ms steps

  function startHold(e) {
    e.preventDefault();
    btn.classList.add('holding');
    progress = 0;
    
    holdTimer = setInterval(() => {
      progress += interval;
      const percent = Math.min(progress / duration, 1);
      const offset = 283 - (percent * 283);
      ring.style.strokeDashoffset = offset;
      
      if (percent >= 1) {
        clearInterval(holdTimer);
        sealPromise();
      }
    }, interval);
  }

  function stopHold() {
    btn.classList.remove('holding');
    clearInterval(holdTimer);
    if (progress < duration) {
      // Reset progress
      ring.style.strokeDashoffset = 283;
    }
  }

  function sealPromise() {
    btn.style.pointerEvents = 'none';
    btn.style.transform = 'scale(1.2)';
    btn.querySelector('.pinky-icon').textContent = '🤝';
    msg.classList.remove('hidden');
    playClickSound();
    
    // Reveal future dreams content after 3 seconds
    setTimeout(() => {
      const dreams = document.getElementById('future-dreams-content');
      if (dreams) {
        dreams.classList.remove('hidden');
        // Scroll to the revealed content
        dreams.scrollIntoView({ behavior: 'smooth' });
      }
    }, 3000);

    // Add some extra confetti or hearts locally
    if (window.confetti) {
       confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.8 }
       });
    }
  }

  btn.addEventListener('mousedown', startHold);
  btn.addEventListener('touchstart', startHold);
  
  window.addEventListener('mouseup', stopHold);
  window.addEventListener('touchend', stopHold);
}

// ── Gallery Gatekeeper ───────────────────────────
function initGalleryGatekeeper() {
  const key = document.getElementById('golden-key');
  const keyWrap = document.getElementById('golden-key-wrap');
  const box = document.getElementById('vintage-box');
  const keyhole = document.querySelector('.keyhole');
  if (!key || !box || !keyhole) return;

  let isDragging = false;
  let startX, startY;
  let currentX = 0, currentY = 0;

  function onStart(e) {
    isDragging = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    startX = clientX - currentX;
    startY = clientY - currentY;
    playClickSound();
  }

  function onMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    currentX = clientX - startX;
    currentY = clientY - startY;
    keyWrap.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }

  function onEnd() {
    if (!isDragging) return;
    isDragging = false;

    // Check if key is near keyhole
    const keyRect = key.getBoundingClientRect();
    const holeRect = keyhole.getBoundingClientRect();
    
    // Distance check (center to center)
    const keyCenterX = keyRect.left + keyRect.width / 2;
    const keyCenterY = keyRect.top + keyRect.height / 2;
    const holeCenterX = holeRect.left + holeRect.width / 2;
    const holeCenterY = holeRect.top + holeRect.height / 2;
    
    const dist = Math.hypot(keyCenterX - holeCenterX, keyCenterY - holeCenterY);
    
    if (dist < 60) {
      unlockBox(holeCenterX, holeCenterY);
    } else {
      // Snap back or stay? Let's stay but maybe snap back slightly if too far
      if (dist > 300) {
        currentX = 0; currentY = 0;
        keyWrap.style.transition = 'transform 0.5s';
        keyWrap.style.transform = 'translate(0, 0)';
        setTimeout(() => keyWrap.style.transition = '', 500);
      }
    }
  }

  function unlockBox(targetX, targetY) {
    key.style.pointerEvents = 'none';
    
    // Animate key into the hole
    const keyRect = key.getBoundingClientRect();
    const wrapRect = keyWrap.getBoundingClientRect();
    const offsetX = targetX - (keyRect.left + keyRect.width / 2);
    const offsetY = targetY - (keyRect.top + keyRect.height / 2);
    
    currentX += offsetX;
    currentY += offsetY;
    
    keyWrap.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    keyWrap.style.transform = `translate(${currentX}px, ${currentY}px)`;
    
    setTimeout(() => {
      // Rotate key
      key.style.transition = 'transform 0.5s';
      key.style.transform = 'rotate(90deg)';
      playClickSound();
      
      setTimeout(() => {
        // Open box
        box.classList.add('open');
        playClickSound();
        
        // Hide key
        keyWrap.style.opacity = '0';
        keyWrap.style.transition = 'opacity 0.5s';
        
        // Reveal gallery content after box opens
        setTimeout(() => {
          const gatekeeper = document.getElementById('gallery-gatekeeper');
          const mainContent = document.getElementById('gallery-main-content');
          if (gatekeeper && mainContent) {
            gatekeeper.style.transition = 'opacity 1s, transform 1s';
            gatekeeper.style.opacity = '0';
            gatekeeper.style.transform = 'scale(1.1)';
            
            setTimeout(() => {
              gatekeeper.classList.add('hidden');
              mainContent.classList.remove('hidden');
              mainContent.style.animation = 'fadeInUp 1s forwards';
              buildGallery(); // Rebuild to ensure animations trigger
            }, 1000);
          }
        }, 1500);
      }, 600);
    }, 800);
  }

  key.addEventListener('mousedown', onStart);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onEnd);
  
  key.addEventListener('touchstart', onStart, { passive: false });
  window.addEventListener('touchmove', onMove, { passive: false });
  window.addEventListener('touchend', onEnd);
}
