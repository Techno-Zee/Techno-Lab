---
title: "Level 6"
description: Membaca file source PHP yang mengekspos rahasia aplikasi.
sidebarTitle: "Level 6 — Kebocoran Kode Sumber"
---

## Profil

- **Target:** `http://natas6.natas.labs.overthewire.org`
- **Kredensial:** `natas6` / (password dari Level 5)

## Pengintaian

Halaman menampilkan kolom input dengan tombol "Submit Query". Pemeriksaan sumber HTML mengungkapkan arahan include PHP:

```php
include "includes/secret.inc";
```

## Analisis

Fungsi `include()` PHP memuat dan mengevaluasi file saat runtime. File `includes/secret.inc` tidak dirender sebagai PHP tetapi dapat diakses sebagai file teks mentah jika diminta langsung, karena ekstensi `.inc` biasanya tidak terkait dengan pemrosesan PHP oleh server web.

## Eksploitasi

Meminta `http://natas6.natas.labs.overthewire.org/includes/secret.inc` secara langsung mengembalikan isi file. Mengirimkan nilai rahasia yang ditemukan melalui form akan memicu respons "Access granted" yang mengungkapkan password untuk Level 7.

## Remediasi

- Simpan konfigurasi sensitif di luar root web
- Gunakan ekstensi `.php` untuk file yang di-include agar diproses daripada disajikan sebagai teks
- Hindari hardcoding rahasia di file sumber
