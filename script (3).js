// Gallery + audio controls for Valentine mini-site
(() => {
  const imgs = Array.from(document.querySelectorAll('.gallery img'));
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const playToggle = document.getElementById('playToggle');
  const printBtn = document.getElementById('print');
  const localAudio = document.getElementById('localAudio');
  const openYoutube = document.getElementById('openYoutube');

  if (!imgs.length) return;

  let current = imgs.findIndex(i => i.classList.contains('active'));
  if (current < 0) current = 0;

  function show(index){
    index = (index + imgs.length) % imgs.length;
    imgs.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
    current = index;
    // ensure active image is scrolled into view on small screens
    imgs[current].scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
  }

  prevBtn.addEventListener('click', () => show(current - 1));
  nextBtn.addEventListener('click', () => show(current + 1));

  // click thumbnail -> set active
  imgs.forEach((img, i) => {
    img.addEventListener('click', (ev) => {
      // if user clicked the image itself (inside <a>), allow link to open in new tab.
      // but also set active before that for UX.
      show(i);
    });
  });

  // keyboard support
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'ArrowLeft') show(current - 1);
    if (ev.key === 'ArrowRight') show(current + 1);
    if (ev.key === ' ' || ev.key === 'Spacebar') {
      // toggle audio on space (when not focusing input)
      if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        ev.preventDefault();
        toggleAudio();
      }
    }
  });

  function toggleAudio(){
    if (!localAudio) return;
    if (localAudio.paused) {
      // Many browsers require user gesture; this click qualifies.
      localAudio.play().then(() => {
        playToggle.textContent = 'Jeda Lagu';
        playToggle.setAttribute('aria-pressed','true');
      }).catch(() => {
        // play failed (autoplay blocked), update UI accordingly
        playToggle.textContent = 'Putar Lagu';
        playToggle.setAttribute('aria-pressed','false');
        alert('Browser mungkin memblokir autoplay. Klik tombol Putar Lagu sekali lagi untuk mengizinkan audio.');
      });
    } else {
      localAudio.pause();
      playToggle.textContent = 'Putar Lagu';
      playToggle.setAttribute('aria-pressed','false');
    }
  }

  playToggle.addEventListener('click', toggleAudio);

  // Print / Save as PDF
  printBtn.addEventListener('click', () => {
    // pause audio while printing
    if (localAudio && !localAudio.paused) {
      localAudio.pause();
      playToggle.textContent = 'Putar Lagu';
      playToggle.setAttribute('aria-pressed','false');
    }
    window.print();
  });

  // YouTube button: if data-youtube-id set, open overlay; otherwise open new tab youtube search
  openYoutube.addEventListener('click', () => {
    const id = openYoutube.dataset.youtubeId && openYoutube.dataset.youtubeId.trim();
    if (id) {
      // open embed in a new window (or you can implement overlay)
      const url = `https://www.youtube.com/watch?v=${encodeURIComponent(id)}`;
      window.open(url, '_blank', 'noopener');
    } else {
      alert('ID YouTube belum diisi. Jika ingin gunakan YouTube, isi attribute data-youtube-id pada tombol.');
    }
  });

  // initialize
  show(current);
})();