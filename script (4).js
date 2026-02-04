// script.js: slideshow sederhana, kontrol musik, dan print
document.addEventListener('DOMContentLoaded', () => {
  const anchorImgs = Array.from(document.querySelectorAll('.gallery a'));
  const imgs = anchorImgs.map(a => a.querySelector('img'));
  let idx = 0;

  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const playToggle = document.getElementById('playToggle');
  const printBtn = document.getElementById('print');
  const openYoutubeBtn = document.getElementById('openYoutube');

  const localAudio = document.getElementById('localAudio');
  let audioPlaying = false;

  function show(i){
    imgs.forEach((img, j) => {
      img.classList.toggle('active', j === i);
    });
  }
  function next(){ idx = (idx + 1) % imgs.length; show(idx); }
  function prev(){ idx = (idx - 1 + imgs.length) % imgs.length; show(idx); }

  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);

  // auto-slide setiap 5s
  let auto = setInterval(next, 5000);
  const gallery = document.querySelector('.gallery');
  gallery.addEventListener('mouseover', () => clearInterval(auto));
  gallery.addEventListener('mouseout', () => auto = setInterval(next, 5000));

  // Play toggle untuk audio lokal (song.mp3). Banyak browser tidak mengizinkan autoplay sebelum interaksi.
  playToggle.addEventListener('click', () => {
    if (!localAudio || !localAudio.src) {
      alert('Tidak menemukan file song.mp3. Jika mau pakai YouTube, klik "Putar di YouTube" atau letakkan file song.mp3 di folder yang sama.');
      return;
    }
    if (!audioPlaying) {
      localAudio.play().catch(() => alert('Browser memblokir pemutaran otomatis. Silakan klik "Play Musik" sekali lagi.'));
      playToggle.textContent = 'Pause Musik';
      audioPlaying = true;
    } else {
      localAudio.pause();
      playToggle.textContent = 'Play Musik';
      audioPlaying = false;
    }
  });

  // Open YouTube: ganti 'YOUTUBE_ID' di prompt berikut sesuai video yang Anda mau
  openYoutubeBtn.addEventListener('click', () => {
    // Ganti YOUTUBE_ID dengan ID video YouTube romantis Anda (contoh: y6120QOlsfU)
    const YOUTUBE_ID = 'y6120QOlsfU';
    const url = `https://www.youtube.com/watch?v=${YOUTUBE_ID}`;
    window.open(url, '_blank', 'noopener');
  });

  printBtn.addEventListener('click', () => window.print());

  // Inisialisasi
  show(idx);
});