# QGIS Peta & Analisis Spasial

Alat untuk membuat peta situasi, sebaran posko dan pengungsi, serta analisis spasial dasar.

---

## Kapan Dipakai

Saat operasi butuh visualisasi lokasi sebaran pengungsi, titik banjir, lokasi posko, jangkauan layanan.

---

## Yang Harus Kamu Bisa

- [ ] Tambah layer (SHP, GeoJSON, CSV dengan koordinat)
- [ ] Atur styling layer (warna, ukuran, simbol)
- [ ] Tambah label pada peta
- [ ] Buat layout peta dengan judul, legenda, skala, north arrow
- [ ] Ekspor peta ke PNG/PDF

---

## Langkah Kerja

1. **Install** download Long Term Release dari `qgis.org`
2. **Tambah basemap** Plugin > QuickMapServices > OpenStreetMap
3. **Tambah data** `Ctrl + Shift + L` > pilih file SHP/GeoJSON atau CSV (pastikan ada kolom latitude/longitude)
4. **Styling** klik kanan layer > **Properties** > **Symbology** > atur warna, ukuran, klasifikasi
5. **Label** Properties > **Labels** > pilih kolom untuk label
6. **Layout** **Project** > **Layout Manager** > **Add Map** > atur extent
7. **Lengkapi** tambah **Judul**, **Legenda**, **Skala**, **North Arrow**, **Tanggal**, **Sumber Data**
8. **Ekspor** Layout > Export as Image/PDF

---

## Elemen Wajib Peta

Setiap peta yang kamu buat harus punya:

- Judul lokasi dan tema
- Legenda arti setiap simbol dan warna
- Skala batang skala
- North arrow arah utara
- Tanggal pembuatan
- Sumber data "Sumber: BPBD, PMI, 2025"

---

## Tips

- Siapkan basemap OpenStreetMap via plugin **QuickMapServices**
- Simpan project (.qgz) secara rutin QGIS bisa crash
- Gunakan **graduated** symbology untuk data numerik (jumlah pengungsi)
- Untuk pemula: cukup kuasai **point map** dulu (sebaran lokasi) polygon dan line nanti
- Koordinat dari GPS Kobo: pastikan format desimal (bukan derajat-menit-detik)

---

## Contoh Lapangan

Kamu dapat data 50 titik posko dari Excel (latitude + longitude). Import ke QGIS sebagai layer CSV. Styling: posko PMI merah, posko BPBD biru. Tambah basemap OSM. Buat layout, tambah legenda dan skala. Ekspor PNG untuk di-embed ke SitRep.

---

## Tugas Praktik OJT

1. Install QGIS (Long Term Release)
2. Tambah QuickMapServices plugin
3. Import data CSV dengan koordinat
4. Buat layout peta sederhana
5. Ekspor ke PNG

---

## Checklist Cepat

- [ ] QGIS terinstall (LTS)
- [ ] Bisa tambah layer dan atur styling
- [ ] Bisa buat layout peta
- [ ] Peta punya legenda, skala, north arrow

---

## Kesalahan Umum

| Kesalahan | Dampak | Pencegahan |
|-----------|--------|------------|
| Peta tanpa legenda | Pembaca tidak paham simbol | Selalu tambah legenda |
| Tidak ada north arrow | Orientasi tidak jelas | Selalu tambah north arrow |
| Lupa simpan project | Ulang dari awal | Ctrl+S setiap selesai step |
| Koordinat salah format | Titik tidak muncul di peta | Pastikan desimal, bukan DMS |

---

## Eskalasi

Hubungi pendamping jika:
- Peta butuh data spasial yang tidak dimiliki tim (batas administratif, sungai, jalan)
- Butuh analisis spasial lanjutan (buffer, intersect)

---

## Ringkasan Cepat

- Peta wajib punya: judul, legenda, skala, north arrow, tanggal, sumber
- Gunakan QuickMapServices untuk basemap
- Simpan project rutin
- Untuk pemula: kuasai point map dulu
