# Excel Olah Data Tabular

Alat utama untuk membersihkan, menganalisis, dan menyajikan data tabel. Excel adalah tools yang paling sering kamu pakai setiap hari.

---

## Kapan Dipakai

Setiap hari untuk membersihkan data mentah, mencocokkan data antar tabel, membuat ringkasan, dan menyiapkan data untuk dashboard atau peta.

---

## Yang Harus Kamu Bisa

- [ ] VLOOKUP / XLOOKUP untuk mencocokkan data
- [ ] Pivot Table untuk meringkas data
- [ ] IF / IFS untuk logika bersyarat
- [ ] COUNTIF / SUMIF untuk hitung berdasarkan kriteria
- [ ] TRIM untuk bersihkan spasi
- [ ] Format tabel dengan Ctrl+T

---

## Langkah Kerja

1. **Import data** buka CSV/XLS dari Kobo atau sumber lain
2. **Cleaning** hapus duplikat, TRIM spasi, konsistenkan format (tanggal, angka)
3. **Matching** VLOOKUP/XLOOKUP untuk gabung data dari tabel berbeda
4. **Analisis** Pivot Table untuk ringkasan per wilayah/kategori
5. **Export** simpan sebagai .xlsx untuk Power BI atau .csv untuk QGIS

---

## Fungsi Wajib

| Fungsi | Kegunaan | Contoh |
|--------|----------|--------|
| VLOOKUP / XLOOKUP | Mencocokkan data antar tabel | `=XLOOKUP(A2;Sheet2!A:A;Sheet2!B:B)` |
| Pivot Table | Meringkas data | Jumlah pengungsi per kecamatan |
| IF / IFS | Logika bersyarat | `=IF(B2>100;"Prioritas";"Normal")` |
| COUNTIF / SUMIF | Hitung/jumlah berdasarkan kriteria | `=COUNTIF(C:C;"Banjir")` |
| TRIM | Bersihkan spasi berlebih | `=TRIM(A2)` |

---

## Tips

- **Simpan data mentah terpisah** dari data olahan jangan timpa raw data. Buat sheet "Raw" dan "Olahan"
- Format tabel sebagai **Table** (`Ctrl + T`) formula otomatis meluas saat data nambah
- Untuk data > 50rb baris, Excel mulai lemot pindah ke Power BI atau Python
- Gunakan **named ranges** untuk formula yang lebih mudah dibaca
- Backup file setiap akhir shift kasih tanggal di nama file

---

## Contoh Lapangan

Kamu dapat 500 baris data pengungsi dari Kobo. Pakai Pivot Table untuk ringkasan per kecamatan. Pakai XLOOKUP untuk tambah kolom data bantuan dari tabel lain. Hasil: tabel siap untuk dashboard Power BI.

---

## Tugas Praktik OJT

1. Buka data latihan, praktik VLOOKUP untuk gabung 2 tabel
2. Buat Pivot Table ringkasan per kecamatan
3. Gunakan IF untuk kategorisasi prioritas

---

## Checklist Cepat

- [ ] VLOOKUP/XLOOKUP sudah pernah dicoba
- [ ] Pivot Table bisa dibuat
- [ ] Raw data terpisah dari olahan
- [ ] Backup file

---

## Kesalahan Umum

| Kesalahan | Dampak | Pencegahan |
|-----------|--------|------------|
| Overwrite raw data | Data asli hilang | Simpan raw di sheet terpisah |
| File > 100rb baris | Excel crash | Pindah ke Power BI |
| Tidak backup | Data hilang | Backup setiap akhir shift |

---

## Ringkasan Cepat

- Excel adalah alat utama kuasai VLOOKUP dan Pivot Table
- Raw data jangan ditimpa
- Ctrl+T untuk tabel
- Backup setiap shift
