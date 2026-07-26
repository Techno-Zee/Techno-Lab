---
title: "Level 2"
description: Menemukan direktori dan file melalui path traversal.
sidebarTitle: "Level 2 — Directory Traversal"
---

## Profil

- **Target:** `http://natas2.natas.labs.overthewire.org`
- **Kredensial:** `natas2` / (*password* dari Level 1)

## Pengintaian

Laman menampilkan teks "There is nothing on this page" beserta sebuah gambar. Pemeriksaan terhadap sumber HTML mengungkapkan keberadaan tag `<img>`:

```html
<div id="content">
  There is nothing on this page
  <img src="files/pixel.png" />
</div>
```

Gambar dimuat dari subdirektori `files/`, mengindikasikan bahwa server memiliki mekanisme penyajian file berbasis direktori.

## Analisis

Keberadaan direktori `files/` membuka kemungkinan adanya *directory listing* yang aktif. *Directory listing* merupakan konfigurasi server yang, apabila diaktifkan, akan menampilkan seluruh isi berkas dalam suatu direktori ketika tidak ditemukan berkas indeks.

Navigasi ke `/files/` menegaskan bahwa *directory listing* dalam keadaan aktif. Direktori tersebut memuat dua berkas:

- `pixel.png` — gambar piksel 1×1 yang tidak memiliki signifikansi
- `users.txt` — berkas dengan tujuan yang terang benderang

Ini merupakan kesalahan konfigurasi server di mana:

1. Direktori `files/` memiliki *directory listing* yang aktif
2. Data sensitif (`users.txt`) tersimpan di lokasi yang dapat diakses melalui web
3. Tidak terdapat mekanisme kontrol akses yang melindungi berkas tersebut

## Eksploitasi

Permintaan terhadap `/files/users.txt` mengembalikan konten yang memuat *password* untuk Level 3.

## Remediasi

- Nonaktifkan *directory listing* pada server web
- Simpan berkas sensitif di luar *root* web
- Terapkan kontrol akses yang ketat terhadap sumber daya yang dilindungi
