---
title: "Level 2"
description: Menemukan direktori dan file melalui path traversal.
sidebarTitle: "Level 2 — Directory Traversal"
---

## Profil

- **Target:** `http://natas2.natas.labs.overthewire.org`
- **Kredensial:** `natas2` / (password dari Level 1)

## Pengintaian

Halaman menampilkan teks "There is nothing on this page" bersama sebuah gambar. Pemeriksaan sumber HTML menunjukkan tag `<img>`:

```html
<div id="content">
  There is nothing on this page
  <img src="files/pixel.png" />
</div>
```

Gambar dimuat dari subdirektori `files/`, yang menunjukkan server memiliki penyajian file berbasis direktori.

## Analisis

Keberadaan direktori `files/` memunculkan kemungkinan directory listing aktif. Directory listing adalah konfigurasi server yang, jika diaktifkan, menampilkan semua file dalam direktori ketika tidak ada file indeks.

Mengunjungi `/files/` mengonfirmasi directory listing aktif. Direktori berisi dua file:

- `pixel.png` — gambar piksel 1×1 yang tidak berarti
- `users.txt` — file dengan tujuan yang jelas

Ini adalah kesalahan konfigurasi server di mana:

1. Direktori `files/` memiliki directory listing aktif
2. Data sensitif (`users.txt`) disimpan di lokasi yang dapat diakses web
3. Tidak ada kontrol akses yang melindungi file

## Eksploitasi

Mengakses `/files/users.txt` mengembalikan konten yang berisi password untuk Level 3.

## Remediasi

- Nonaktifkan directory listing di server web
- Simpan file sensitif di luar root web
- Terapkan kontrol akses untuk sumber daya yang dilindungi
