# KoboToolbox Form & Data Collection

Alat untuk membuat form survei, mengumpulkan data dari lapangan (online/offline), dan mengekspor hasilnya.

---

## Kapan Dipakai

Saat kamu perlu mengumpulkan data dari banyak responden atau relawan di lapangan assessment awal, monitoring distribusi, survei kebutuhan.

---

## Yang Harus Kamu Bisa

- [ ] Buat form dari awal (Blank Form) atau upload XLSForm
- [ ] Tambah variasi pertanyaan: Text, Integer, Select One, GPS
- [ ] Atur validasi (required, min/max) agar data bersih dari awal
- [ ] Deploy form dan bagikan ke enumerator
- [ ] Monitor pengiriman data
- [ ] Download data ke XLS/CSV

---

## Langkah Kerja

1. Login ke `kobotoolbox.org`
2. Klik **New** > **Blank Form** atau upload file XLSForm
3. Tambah pertanyaan:
  - **Text** nama, keterangan
  - **Integer** jumlah, usia
  - **Select One** pilihan jawaban
  - **GPS** titik lokasi
  - **Image** foto dokumentasi
4. Atur **validation**: centang `required`, set min/max value
5. Klik **Deploy** dapatkan link atau QR code untuk enumerator
6. Monitor pengiriman: tab **Data** > lihat jumlah submission per hari
7. Download: **Data** > **Download** > pilih XLS atau CSV

---

## Tips Lapangan

- Uji coba form dengan 2-3 enumerator sebelum deploy resmi cari pertanyaan yang membingungkan
- Gunakan `select_one` dari XLSForm untuk cascading wilayah generator: [xlsform.aiim.space](https://xlsform.aiim.space/)
- Dokumentasi XLSForm lengkap: [xlsform.org](https://xlsform.org/)
- Batasi penggunaan `text` pakai pilihan ganda agar data mudah diolah
- Pastikan enumerator paham cara submit offline sinyal tidak selalu ada di lapangan

---

## Contoh Lapangan

Banjir di Kecamatan X. Kamu buat form assessment dengan pertanyaan: nama kepala keluarga, jumlah anggota, lokasi GPS, jenis bantuan yang dibutuhkan. Deploy form, kirim link ke 10 relawan. Dalam 3 jam, 120 data masuk. Download CSV, data siap diolah di Excel.

---

## Tugas Praktik OJT

1. Buat 1 form sederhana (nama, usia, lokasi, jenis bantuan)
2. Deploy dan isi 3 data uji
3. Download hasilnya ke CSV

---

## Checklist Cepat

- [ ] Akun KoboToolbox aktif dan bisa login
- [ ] Bisa buat form dari blank
- [ ] Bisa deploy dan dapatkan link
- [ ] Bisa download data

---

## Kesalahan Umum

| Kesalahan | Dampak | Pencegahan |
|-----------|--------|------------|
| Form tidak diuji coba | Data kacau, enumerator bingung | Uji coba dengan 2-3 orang |
| Terlalu banyak field text | Data tidak konsisten, susah diolah | Pakai pilihan ganda sebisa mungkin |
| Tidak ada validasi | Data kosong di field penting | Set required di pertanyaan kunci |
| Lupa GPS-enabled | Lokasi tidak terekam | Pastikan setting GPS aktif |

---

## Eskalasi

Hubungi pendamping jika:
- Server Kobo error dan data tidak bisa di-download
- Butuh form kompleks dengan logika skipping/validation lanjutan

---

## Ringkasan Cepat

- Kobo untuk kumpulkan data dari lapangan
- Uji coba sebelum deploy selalu
- Download hasilnya ke CSV/Excel untuk diolah lanjut
- GPS penting untuk data spasial
