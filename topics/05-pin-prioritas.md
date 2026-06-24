# Menghitung PIN dan Prioritas Kebutuhan

Cara menghitung jumlah populasi terdampak (PIN) dan menentukan prioritas respons berdasarkan data.

---

## Kapan Topik Ini Dipakai di Posko

Topik ini dipakai saat menyusun analisis kebutuhan untuk perencanaan operasi. Biasanya setelah data terkumpul dan sebelum RenOps disusun.

---

## Yang Harus Kamu Bisa Lakukan

- [ ] Hitung PIN dengan metode direct count dan proporsi
- [ ] Hitung kebutuhan per sektor pakai standar Sphere
- [ ] Buat analisis gap dan matriks prioritas
- [ ] Sajikan rekomendasi prioritas untuk pengambil keputusan

---

## Gambaran Singkat

PIN (People in Need) adalah perkiraan jumlah orang yang butuh bantuan. Bukan angka pasti, tapi perkiraan terbaik berdasarkan data yang ada.

Data kemanusiaan berlapis:
1. Total penduduk - semua orang di area operasi
2. Populasi terdampak - kena dampak bencana
3. Populasi terdampak parah - kehilangan rumah/mata pencaharian
4. Populasi rentan - anak, lansia, difabel, ibu hamil
5. Populasi target - yang akan dijangkau program

---

## Langkah Kerja

### Hitung PIN - Metode Proporsi (Saat Data Terbatas)

```
PIN = Total Populasi Area x % Populasi Terdampak
```

Contoh: 50.000 jiwa x 33,75% = 16.875 jiwa

### Hitung Kebutuhan Sektoral

```
Total Kebutuhan = Jumlah Populasi Target x Standar Sektoral
```

Standar umum (Sphere):
- Air bersih: 15 liter/orang/hari
- Makanan: 2.100 kkal/orang/hari
- Shelter: 1 unit/5 orang
- MCK: 1 toilet/20 orang

### Analisis Gap

```
Gap = Total Kebutuhan - Total Respons (actual + planned)
```

Prioritaskan sektor dengan gap terbesar dan dampak paling kritis.

### Matriks Prioritas

| Sektor | PIN | Sudah Terbantu | Gap | Prioritas |
|--------|-----|----------------|-----|-----------|
| Air bersih | 16.875 | 5.000 | 11.875 | Tinggi |
| Makanan | 20.000 | 12.000 | 8.000 | Sedang |
| Shelter | 10.000 | 8.000 | 2.000 | Rendah |

---

## Contoh Lapangan

Kecamatan X (populasi 50.000). Data menunjukkan: 35% rumah rusak, 45% kehilangan akses air, 30% kehilangan mata pencaharian, 25% mengungsi. Rata-rata: 33,75%.

PIN = 50.000 x 33,75% = 16.875 jiwa.

Dari 16.875 jiwa, baru 5.000 yang dapat air bersih. Gap air bersih: 11.875 jiwa - prioritas tinggi. Rekomendasi: tambah distribusi air ke 2 kecamatan yang belum terjangkau.

<div class="pin-calc">
<h3>Kalkulator PIN &amp; Prioritas</h3>

<div class="pin-section">
<h4>1. Hitung PIN Metode Proporsi</h4>
<p class="pin-desc">PIN = Total Populasi x % Populasi Terdampak. Persentase terdampak diestimasi dari rata-rata indikator di bawah. <strong>PIN = People in Need</strong> = perkiraan jumlah orang butuh bantuan bukan angka pasti. Satuan dalam <strong>jiwa</strong> (1 KK ~ 5 jiwa).</p>
<div class="pin-calc-grid">
<label>Total Populasi Area <input type="number" id="pin-total" oninput="pinCalc()" placeholder="0"></label>
<label>% Rumah Rusak <input type="number" id="pin-rusak" oninput="pinCalc()" placeholder="0" step="0.1" aria-label="Persen Rumah Rusak"></label>
<label>% Kehilangan Akses Air <input type="number" id="pin-air" oninput="pinCalc()" placeholder="0" step="0.1" aria-label="Persen Kehilangan Akses Air"></label>
<label>% Kehilangan Mata Pencaharian <input type="number" id="pin-mp" oninput="pinCalc()" placeholder="0" step="0.1" aria-label="Persen Kehilangan Mata Pencaharian"></label>
<label>% Mengungsi <input type="number" id="pin-ngungsi" oninput="pinCalc()" placeholder="0" step="0.1" aria-label="Persen Mengungsi"></label>
<label>Durasi Operasi (hari) <input type="number" id="pin-durasi" oninput="pinCalc()" placeholder="30" value="30" aria-label="Durasi Operasi dalam Hari"></label>
</div>
</div>

<div class="pin-section">
<h4>2. Metode Direct Count</h4>
<p class="pin-desc">Jika data aktual tersedia (sensus, registrasi), masukkan jumlah PIN langsung dalam <strong>jiwa</strong>. Kosongkan jika pakai metode proporsi.</p>
<label style="font-size:var(--text-sm);display:flex;align-items:center;gap:8px"><strong>PIN (Direct Count):</strong> <input type="number" id="pin-direct" oninput="pinCalc()" placeholder="biarkan kosong" aria-label="PIN Direct Count" style="padding:8px 10px;border:1px solid var(--color-gray-300);border-radius:var(--radius-sm);font-size:1rem;width:180px"></label>
</div>

<div class="pin-result" id="pin-result">Masukkan Total Populasi dan minimal 1 indikator dampak, atau isi PIN langsung via Direct Count.</div>
<div class="pin-table" id="pin-table"></div>
</div>

---

## Tugas Praktik OJT

1. Hitung PIN dari data latihan yang diberikan pendamping (pakai metode proporsi)
2. Hitung kebutuhan air bersih untuk PIN tersebut selama 30 hari
3. Buat matriks prioritas untuk 4 sektor (air, makanan, shelter, kesehatan)
4. Tulis rekomendasi prioritas - sektor mana yang harus ditangani dulu

---

## Output Minimum

- 1 lembar kerja perhitungan PIN
- 1 matriks prioritas (4 sektor)
- 1 rekomendasi prioritas (1 paragraf)

---

## Checklist Cepat

- [ ] PIN sudah dihitung - cantumkan rentang dan metode
- [ ] Kebutuhan sektoral sudah pakai standar yang benar
- [ ] Gap analysis sudah selesai untuk semua sektor utama
- [ ] Prioritas sudah ditentukan berdasarkan severity dan urgency
- [ ] Rekomendasi sudah ditulis jelas untuk pengambil keputusan

---

## Kesalahan Umum

| Kesalahan | Dampak | Pencegahan |
|-----------|--------|------------|
| PIN disajikan sebagai angka pasti | Keputusan berdasarkan asumsi yang terlalu presisi | Selalu cantumkan rentang dan metode perhitungan |
| Tidak pakai standar sektoral | Kebutuhan terlalu rendah/tinggi | Gunakan Sphere Standards |
| Lupa hitung gap | Tidak tahu sektor mana yang kurang | Gap = kebutuhan - respons |
| Analisis tanpa rekomendasi | Pengambil keputusan bingung | Setiap temuan harus ada rekomendasi |

---

## Kapan Harus Eskalasi

Eskalasi ke pendamping jika:
- Data dasar (populasi, demografi) tidak tersedia atau bertentangan
- PIN dari dua sumber berbeda menghasilkan selisih >50%
- Standar sektoral yang dipakai tidak sesuai konteks lokal
- Manajer Operasi/Kepala Operasi minta prioritas tapi data gap belum selesai

---

## Grafik atau Visual Terkait

<div class="img-placeholder"><img src="../assets/img/grafik-04-piramida-populasi.svg" alt="Piramida Populasi" style="max-width:100%;height:auto;border-radius:4px"></div>
<div class="img-placeholder"><img src="../assets/img/grafik-12-rasio-kebutuhan-sektor.svg" alt="Rasio Kebutuhan Sektoral" style="max-width:100%;height:auto;border-radius:4px"></div>
<div class="img-placeholder"><img src="../assets/img/grafik-06-matriks-prioritas.svg" alt="Matriks Prioritas" style="max-width:100%;height:auto;border-radius:4px"></div>

---

## Catatan untuk Pendamping

PIN adalah konsep yang paling sering salah dipahami relawan baru. Tekankan: PIN adalah perkiraan, bukan angka pasti. Selalu gunakan rentang.

Latih relawan dengan satu skenario: beri data latihan dan minta mereka hitung PIN, kebutuhan, dan gap dalam 30 menit. Ini simulasi tekanan waktu di posko.

---

## Ringkasan Cepat

- PIN = perkiraan populasi butuh bantuan - bukan angka pasti
- 5 lapisan data: total > terdampak > parah > rentan > target
- Kebutuhan sektoral = populasi target x standar
- Gap = kebutuhan - respons - fokus ke gap terbesar
- Output utama: PIN + matriks prioritas + rekomendasi
