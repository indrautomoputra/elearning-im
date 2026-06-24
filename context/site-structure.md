# Site Structure

## Semi-LMS OJT IM Cell PMI di GitHub Pages

## 1. Tujuan Struktur Situs

Struktur situs dibuat agar relawan lokal bisa:

- mulai dari halaman utama,
- memilih topik sesuai kebutuhan kerja,
- membuka checklist dengan cepat,
- melihat grafik pendukung,
- mengakses template kerja,
- belajar secara fleksibel tanpa harus mengikuti urutan kelas.

Situs harus nyaman dibaca di laptop posko dan ponsel.

---

## 2. Struktur Folder Rekomendasi

```text
im-cell-ojt/
├─ index.md
├─ README.md
├─ _config.yml
├─ assets/
│  ├─ img/
│  │  ├─ grafik-01-siklus-im-harian.png
│  │  ├─ grafik-02-alur-data-keputusan.png
│  │  ├─ grafik-03-tiga-pilar-analisis.png
│  │  ├─ grafik-04-piramida-populasi.png
│  │  ├─ grafik-05-rks-sektor.png
│  │  ├─ grafik-06-matriks-prioritas.png
│  │  ├─ grafik-07-alur-4w.png
│  │  └─ grafik-08-paket-data-renops.png
│  ├─ css/
│  │  └─ style.css
│  └─ downloads/
│     ├─ template-impact-tracker.xlsx
│     ├─ template-4w.xlsx
│     ├─ template-sitrep.docx
│     ├─ template-tasking.md
│     └─ template-serah-terima-shift.md
├─ context/
│  ├─ project-context.md
│  ├─ content-style-guide.md
│  ├─ page-template.md
│  └─ site-structure.md
├─ topics/
│  ├─ 01-memahami-im.md
│  ├─ 02-setup-orientasi-sistem.md
│  ├─ 03-tools-operasional.md
│  ├─ 04-analisis-kebutuhan.md
│  ├─ 05-pin-prioritas.md
│  ├─ 06-produk-im.md
│  └─ 07-paket-data-renops.md
├─ ojt/
│  └─ ojt-di-posko.md
├─ visuals/
│  └─ peta-visual-im-cell.md
├─ checklists/
│  ├─ checklist-lapangan.md
│  ├─ checklist-qa-produk-im.md
│  └─ checklist-kesiapan-relawan.md
└─ templates/
   ├─ template-tasking.md
   ├─ template-catatan-sumber.md
   ├─ template-serah-terima-shift.md
   └─ template-gap-informasi.md
```

---

## 3. Navigasi Utama

Navigasi utama situs:

1. Mulai dari Sini
2. Topik OJT
3. Checklist Lapangan
4. Peta Visual IM
5. Template Kerja
6. Tentang Modul

---

## 4. Halaman Utama: `index.md`

Halaman utama berisi:

- judul situs,
- pengantar singkat,
- siapa yang bisa menggunakan,
- cara memakai saat bertugas,
- kartu topik,
- tombol akses cepat ke checklist,
- tombol akses cepat ke grafik,
- tombol akses cepat ke template.

Struktur halaman utama:

```md
# OJT IM Cell PMI

Panduan belajar sambil bertugas untuk relawan lokal PMI di lokasi bencana.

## Mulai dari Sini

[penjelasan singkat]

## Akses Cepat

[kartu akses cepat]

## Pilih Topik Sesuai Kebutuhan Posko

[kartu topik]

## Jalur Cepat Berdasarkan Situasi

[kartu situasi]

## Peta Visual IM Cell

[kartu grafik]

## Aturan Dasar yang Harus Selalu Diingat

[kartu aturan dasar]
```

---

## 5. Kartu Topik di Halaman Utama

Setiap kartu topik berisi:

- judul topik,
- ringkasan satu kalimat,
- label kategori,
- daftar isi kecil,
- link ke halaman.

Contoh:

```md
<div class="card topic-card">
<span class="tag">Topik 1</span>
<h3>Memahami IM</h3>
<p>IM bukan sekadar laporan. IM membantu operasi mengambil keputusan dari data yang cukup jelas.</p>
<ul>
<li>Peran IM di posko</li>
<li>Alur data menjadi keputusan</li>
<li>Siklus kerja IM harian</li>
</ul>
<a class="button" href="topics/01-memahami-im.html">Buka topik →</a>
</div>
```

---

## 6. Halaman Topik

Halaman topik berada di folder `topics/`.

Daftar halaman:

1. `01-memahami-im.md`
2. `02-setup-orientasi-sistem.md`
3. `03-tools-operasional.md`
4. `04-analisis-kebutuhan.md`
5. `05-pin-prioritas.md`
6. `06-produk-im.md`
7. `07-paket-data-renops.md`

Setiap halaman mengikuti `context/page-template.md`.

---

## 7. Struktur Wajib Setiap Halaman Topik

Setiap halaman topik sebaiknya berisi:

1. Judul topik
2. Ringkasan singkat
3. Kapan topik ini dipakai di posko
4. Yang harus kamu bisa lakukan
5. Gambaran singkat
6. Langkah kerja
7. Contoh lapangan
8. Tugas praktik OJT
9. Output minimum
10. Checklist cepat
11. Kesalahan umum
12. Kapan harus eskalasi
13. Grafik atau visual terkait
14. Catatan untuk pendamping
15. Ringkasan cepat

---

## 8. Halaman OJT

File:

```text
ojt/ojt-di-posko.md
```

Isi halaman:

- cara menggunakan OJT,
- prinsip OJT IM Cell,
- pola pendampingan,
- tugas praktik per topik,
- checklist kesiapan relawan,
- kapan eskalasi,
- checklist penutup OJT.

Halaman ini menjadi pegangan untuk pendamping dan relawan lokal.

---

## 9. Halaman Visual

File:

```text
visuals/peta-visual-im-cell.md
```

Isi 8 grafik:

1. Siklus Kerja IM Harian
2. Alur Data Menjadi Keputusan
3. Kerangka Tiga Pilar Analisis Kebutuhan
4. Piramida Populasi Kemanusiaan
5. Grafik Batang RKS per Sektor
6. Matriks Prioritas Severity vs Gap Respons
7. Alur Pemanfaatan 4W
8. Alur Paket Data RenOps

Setiap grafik wajib punya:

- gambar,
- caption,
- kapan dipakai,
- cara membaca,
- pesan kunci,
- pertanyaan diskusi,
- catatan pendamping.

---

## 10. Halaman Checklist

Folder:

```text
checklists/
```

File:

- `checklist-lapangan.md`
- `checklist-qa-produk-im.md`
- `checklist-kesiapan-relawan.md`

Isi checklist:

- onboarding akses,
- struktur folder,
- sumber data,
- verifikasi,
- Impact Tracker,
- 4W,
- SitRep,
- peta,
- dashboard,
- Paket Data RenOps,
- serah-terima shift.

---

## 11. Halaman Template

Folder:

```text
templates/
```

File:

- `template-tasking.md`
- `template-catatan-sumber.md`
- `template-serah-terima-shift.md`
- `template-gap-informasi.md`

Setiap template berisi:

- kapan dipakai,
- format template,
- contoh pengisian,
- checklist cepat.

---

## 12. Penamaan File

Gunakan huruf kecil dan tanda hubung.

Contoh benar:

```text
01-memahami-im.md
02-setup-orientasi-sistem.md
checklist-qa-produk-im.md
grafik-01-siklus-im-harian.png
```

Hindari:

```text
Blok 1 Memahami IM.md
Materi_Final_FIX.md
Grafik Baru 1.png
```

---

## 13. Standar Aset Gambar

Nama file grafik:

```text
grafik-01-siklus-im-harian.png
grafik-02-alur-data-keputusan.png
grafik-03-tiga-pilar-analisis.png
grafik-04-piramida-populasi.png
grafik-05-rks-sektor.png
grafik-06-matriks-prioritas.png
grafik-07-alur-4w.png
grafik-08-paket-data-renops.png
```

Semua gambar disimpan di:

```text
assets/img/
```

---

## 14. Rekomendasi Navigasi Footer

Setiap halaman sebaiknya punya footer:

```md
---

**Lanjutkan:**

- [Kembali ke halaman utama](../index.md)
- [Buka Checklist Lapangan](../checklists/checklist-lapangan.md)
- [Buka Peta Visual IM Cell](../visuals/peta-visual-im-cell.md)
```

Untuk halaman topik berurutan, tambahkan:

```md
← Topik sebelumnya | Topik berikutnya →
```

---

## 15. Rekomendasi Tema GitHub Pages

Tema yang cocok:

- Minima,
- Just the Docs,
- Jekyll Cayman,
- custom simple card layout.

Jika ingin semi-LMS card-based yang mirip katalog visual:

- gunakan `index.md` dengan grid kartu,
- gunakan `assets/css/style.css` untuk layout,
- gunakan gambar thumbnail untuk setiap topik,
- pastikan halaman tetap nyaman dibaca di ponsel.

---

## 16. Prinsip Navigasi

Pengguna harus bisa menjawab tiga pertanyaan dalam 10 detik:

1. Saya harus mulai dari mana?
2. Topik mana yang saya butuhkan sekarang?
3. Checklist/template apa yang bisa langsung saya pakai?

Jika halaman terlalu panjang, tambahkan daftar isi lokal di bagian atas.

---

## 17. Catatan Deploy GitHub Pages

Langkah deploy dasar:

1. Buat repository GitHub.
2. Tambahkan file dan folder sesuai struktur.
3. Masukkan `_config.yml`.
4. Aktifkan GitHub Pages dari repository settings.
5. Pilih branch utama.
6. Cek halaman utama.
7. Pastikan semua link internal bekerja.
8. Pastikan gambar di `assets/img/` muncul dengan benar.