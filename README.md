# Valentine Mini-Site

Ini situs sederhana untuk menampilkan foto (slide) dan memutar lagu, plus ucapan Valentine.

Cara pakai:
1. Struktur folder:
   - index.html
   - styles.css
   - script.js
   - audio/
     - song.mp3    <-- letakkan file lagu di sini (ganti namanya atau ubah src di index.html)
   - images/
     - photo1.jpg
     - photo2.jpg
     - photo3.jpg
     - photo4.jpg

2. Ganti foto:
   - Masukkan foto yang ingin ditampilkan ke folder `images/` dan pastikan namanya cocok dengan yang ada di `index.html`.
   - Jika ingin menambah/mengurangi foto, tambahkan/kurangi `<div class="slide">` di bagian slider dan sesuaikan jumlah.

3. Ganti lagu:
   - Tempatkan file mp3 ke folder `audio/song.mp3` atau ubah atribut `src` pada elemen `<audio>` di `index.html`.

4. Autoplay:
   - Banyak browser memblokir autoplay audio bertekstur. Pengguna perlu klik tombol "Putar Lagu" sekali untuk mengizinkan suara.

5. Menjalankan lokal:
   - Buka `index.html` langsung di browser (double-click) untuk pemakaian sederhana.
   - Untuk beberapa browser, jalankan dengan web server lokal (mis. `npx http-server` atau `python -m http.server`) agar audio dan resource bekerja lebih konsisten.

6. Hosting:
   - Kamu bisa upload folder ini ke GitHub Pages, Netlify, Vercel, atau layanan hosting lain.

Penting: Pastikan kamu punya izin untuk menampilkan/mempublikasikan foto yang menampilkan anak-anak. Jika foto hanya untuk personal, simpan/pinjam privat dan jangan dipublikasikan tanpa izin.

Selamat mencoba! Kalau mau kuubah desain, warna, atau mau kugabungkan lirik/efek animasi, bilang aja.