# IM Cell PMI - Panduan Belajar & Operasional

Panduan belajar dan referensi operasional untuk Information Management Cell PMI, mencakup materi IM, tools, dan OJT.

Dibangun oleh [@indrautomoputra](https://github.com/indrautomoputra). Bukan dokumen resmi PMI atau IFRC — murni untuk keperluan pembelajaran.

## Tentang Project

Situs ini membantu relawan lokal PMI belajar sambil bertugas di lokasi bencana. Konten disusun secara praktis dan berbasis skenario, agar bisa dipakai fleksibel tanpa bergantung pada jadwal kelas.

Relawan dapat mengakses 8 topik inti + 4 panduan tools, menyelesaikan tugas OJT secara bertahap, dan mengetahui kapan harus eskalasi ke IM senior atau koordinator operasi.

## Fitur

- **8 Topik Inti** — dari Memahami IM hingga Peran Relawan Lokal
- **4 Panduan Tools** — KoboToolbox, Excel, QGIS, Power BI
- **Panduan OJT di Posko** — alur harian dan target mingguan
- **Pencarian Global** — pencarian client-side di semua halaman
- **Mode Gelap/Terang** — toggle tema dengan persistensi localStorage
- **Kalkulator PIN Interaktif** — hitung People in Need langsung di halaman
- **Navigasi Samping** — sidebar dengan daftar isi otomatis dan breadcrumbs
- **Responsive** — mendukung desktop, tablet, dan ponsel
- **Mendukung Offline Fallback** — Markdown termuat via fetch, dengan fallback inline

## Tech Stack

- **Hosting:** GitHub Pages (static site, via `.nojekyll`)
- **CSS:** Vanilla CSS dengan design tokens (`tokens.css`)
- **JavaScript:** Vanilla JS (SPA-like client-side rendering)
- **Markdown Renderer:** [marked.js](https://marked.js.org/) (CDN)
- **Ikon & Grafik:** SVG (13 grafik infografis + ikon topik + logo)
- **Testing:** Playwright

## Struktur Project

```
elearning-im/
├── index.html                # Halaman utama (SPA shell)
├── index.md                  # Sumber Markdown halaman utama
├── 404.html                  # Halaman error kustom
├── favicon.svg               # Favicon PMI
├── _config.yml               # Konfigurasi GitHub Pages
├── .nojekyll                 # Menonaktifkan pemrosesan Jekyll
├── opencode.json             # Konfigurasi OpenCode AI
├── package.json              # Playwright (testing)
│
├── assets/
│   ├── css/
│   │   ├── tokens.css        # Design tokens (warna, font, spacing, shadow)
│   │   ├── main.css          # Layout inti, header, sidebar, grid, responsif
│   │   └── style.css         # Komponen: kartu, kalkulator PIN, callout, hero
│   ├── js/
│   │   └── main.js           # Render Markdown, navigasi, pencarian, tema
│   └── img/                  # 30 SVG: grafik, ikon topik (colour + white), logo
│
└── topics/                   # Semua halaman materi
    ├── 01-memahami-im.md/html
    ├── 02-setup-orientasi-sistem.md/html
    ├── 03-tools-operasional.md/html
    ├── 04-analisis-kebutuhan.md/html
    ├── 05-pin-prioritas.md/html
    ├── 06-produk-im.md/html
    ├── 07-paket-data-renops.md/html
    ├── 08-relawan-lokal.md/html
    ├── ojt-di-posko.html       # Panduan OJT
    ├── tools-kobotoolbox.md/html
    ├── tools-excel.md/html
    ├── tools-powerbi.md/html
    └── tools-qgis.md/html
```

### Pola Halaman Topik

Setiap topik memiliki dua file:

- **`topik.md`** — sumber konten Markdown murni
- **`topik.html`** — shell HTML dengan layout (header, sidebar, breadcrumbs, footer). Saat runtime, `main.js` mengambil file `.md` via `fetch()` dan me-render-nya dengan `marked.js`. Jika gagal, fallback ke konten inline di `<script type="text/markdown">`.

### Struktur Konten Topik

Setiap topik mengikuti kerangka yang konsisten:

1. Kapan Topik Ini Dipakai
2. Yang Harus Kamu Bisa Lakukan (dengan checkbox)
3. Gambaran Singkat
4. Langkah Kerja (langkah demi langkah)
5. Contoh Lapangan
6. Tugas Praktik OJT
7. Output Minimum
8. Checklist Cepat
9. Kesalahan Umum (tabel)
10. Kapan Harus Eskalasi
11. Grafik atau Visual Terkait
12. Catatan untuk Pendamping
13. Ringkasan Cepat

## Cara Menjalankan Lokal

Project ini 100% static. Cukup buka file `index.html` di browser, atau gunakan server lokal:

```bash
# Python
python -m http.server 8000

# VS Code Live Server (ekstensi)
# Klik kanan index.html → Open with Live Server
```

## Cara Berkontribusi

Kontribusi dari relawan, pendamping, atau siapa pun di komunsi IM Cell PMI sangat terbuka.

### Panduan

1. **Fork repository ini** ke akun GitHub kamu.
2. **Buat branch** untuk perubahanmu: `git checkout -b fix/typo` atau `feature/nama-fitur`.
3. **Lakukan perubahan** — pastikan mengikuti pola dan struktur yang sudah ada.
4. **Uji perubahan** — buka file HTML di browser, pastikan tidak ada error.
5. **Buat Pull Request** — jelaskan apa yang diubah dan mengapa.

### Yang Bisa Dibantu

| Area | Contoh |
|------|--------|
| ✏️ **Konten** | Memperbaiki typo, menambahkan contoh lapangan, memperbarui data |
| 🎨 **Visual** | Menambahkan grafik, diagram, atau infografis baru |
| 🧪 **Kode** | Memperbaiki bug CSS/JS, meningkatkan aksesibilitas, optimasi performa |
| 🌐 **Pencarian** | Meningkatkan kualitas hasil pencarian atau cakupan halaman |
| 📖 **Konten Baru** | Menambahkan topik baru, panduan tool, atau studi kasus |
| ✅ **Checklist** | Menambahkan daftar periksa atau template operasional |
| 🐛 **Laporkan Masalah** | Buka [issue](https://github.com/indrautomoputra/elearning-im/issues) |

### Pedoman Konten

- Gunakan bahasa Indonesia yang sederhana dan praktis
- Hindari jargon yang tidak perlu; jika ada, jelaskan
- Setiap topik harus punya contoh lapangan dan tugas praktik
- Tulis dari sudut pandang relawan di posko
- Sertakan kapan harus eskalasi ke IM senior

### Pedoman Kode

- CSS: Gunakan design tokens dari `tokens.css` (warna, font, spacing, shadow)
- JS: Ikuti gaya kode yang sudah ada (vanilla JS, tidak perlu framework)
- HTML: Setiap halaman harus punya aksesibilitas dasar (skip-link, semantic HTML)
- Pastikan mode terang dan gelap tetap terbaca
- Uji di Chrome dan Firefox sebelum Pull Request

## Lisensi

Hak cipta © 2025 — Untuk pembelajaran dan penggunaan internal komunitas IM Cell PMI.
