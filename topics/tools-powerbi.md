# Power BI Dashboard Interaktif

Alat untuk membuat dashboard interaktif yang memantau data operasi secara real-time.

---

## Kapan Dipakai

Saat operasi butuh tampilan data yang bisa difilter dan dilihat banyak orang command center, briefing harian, laporan perkembangan.

---

## Yang Harus Kamu Bisa

- [ ] Load data dari Excel/CSV
- [ ] Transformasi data di Power Query (hapus baris kosong, ubah tipe)
- [ ] Buat visual: Card, Bar Chart, Map, Slicer
- [ ] Atur halaman dashboard (satu dashboard = satu tujuan)
- [ ] Simpan file .pbix

---

## Langkah Kerja

1. **Get Data** > Excel / CSV
2. **Power Query** bersihkan data: hapus baris kosong, ubah tipe data (teks/angka/tanggal), hapus kolom tidak perlu
3. **Model** jika pakai > 1 tabel, buat relasi antar tabel (drag key)
4. **Visual** buat visual inti:
  - **Card** angka ringkasan (total pengungsi, total posko)
  - **Bar Chart** perbandingan per kecamatan
  - **Map** sebaran lokasi
  - **Slicer** filter interaktif (tanggal, wilayah)
5. **Atur halaman** satu dashboard = satu topik. Pisahkan ke halaman berbeda
6. **Simpan** File > Save As (.pbix)

---

## Tips

- Maksimal 5-6 visual per halaman lebih dari itu sulit dibaca
- Gunakan **slicer** untuk filter dinamis biarkan pengguna memilih tanggal atau wilayah
- Simpan file .pbix secara lokal sebelum publish ke Power BI Service
- Beri judul dashboard yang jelas "Situasi Banjir Kecamatan X - 25 Juni 2025"
- Warna konsisten: pakai palet PMI (merah, putih, navy)

---

## Contoh Lapangan

Kamu punya data pengungsi per kecamatan (Excel). Load ke Power BI. Buat Card untuk total pengungsi. Bar Chart untuk 5 kecamatan terdampak terbesar. Map untuk sebaran lokasi. Slicer untuk filter tanggal. Dashboard siap untuk briefing pagi.

---

## Tugas Praktik OJT

1. Load data latihan dari Excel
2. Buat 1 Card (total), 1 Bar Chart (per wilayah), 1 Map
3. Tambah slicer filter tanggal
4. Simpan file .pbix

---

## Checklist Cepat

- [ ] Bisa load data dari Excel/CSV
- [ ] Bisa buat Card, Bar Chart, Map
- [ ] Slicer berfungsi untuk filter
- [ ] File .pbix tersimpan

---

## Kesalahan Umum

| Kesalahan | Dampak | Pencegahan |
|-----------|--------|------------|
| Terlalu banyak visual dalam 1 halaman | Dashboard rumit, sulit dibaca | Maks 5-6 visual per halaman |
| Tidak pakai slicer | User tidak bisa filter data | Selalu tambah slicer |
| Lupa transformasi tipe data | Visual error (angka jadi teks) | Cek tipe di Power Query |
| Dashboard tanpa konteks | Pembaca tidak paham | Beri judul dan tanggal jelas |

---

## Eskalasi

Hubungi pendamping jika:
- Dashboard perlu di-publish ke Power BI Service (akses online)
- Perlu koneksi ke data source langsung (bukan file static)

---

## Ringkasan Cepat

- Satu dashboard = satu tujuan
- Maks 5-6 visual per halaman
- Slicer penting untuk filter dinamis
- Simpan .pbix lokal sebelum publish
