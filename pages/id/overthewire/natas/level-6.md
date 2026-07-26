---
title: "Level 6"
description: Membaca file source PHP yang mengekspos rahasia aplikasi.
sidebarTitle: "Level 6 — Kebocoran Kode Sumber"
---

## Profil

- **Target:** `http://natas6.natas.labs.overthewire.org`
- **Kredensial:** `natas6` / (*password* dari Level 5)

## Pengintaian

Laman menampilkan kolom masukan dengan tombol "Submit Query". Pemeriksaan terhadap sumber HTML mengungkapkan adanya arahan *include* PHP:

```php
include "includes/secret.inc";
```

Sebuah *form* mengirimkan masukan ke `index.php` di mana nilainya dibandingkan terhadap suatu nilai dari berkas yang di-*include*.

## Analisis

Fungsi `include()` pada PHP memuat dan mengevaluasi berkas pada saat *runtime*. Berkas `includes/secret.inc` tidak dirender sebagai PHP melainkan dapat diakses sebagai teks mentah apabila diminta secara langsung, dikarenakan ekstensi `.inc` tidak lazim dikaitkan dengan pemrosesan PHP oleh server web.

## Eksploitasi

Permintaan terhadap `http://natas6.natas.labs.overthewire.org/includes/secret.inc` secara langsung mengembalikan isi berkas yang memuat nilai rahasia. Mengirimkan nilai rahasia tersebut melalui *form* akan memicu respons "Access granted" yang mengungkapkan *password* untuk Level 7.

## Remediasi

- Simpan konfigurasi sensitif di luar *root* web
- Gunakan ekstensi `.php` untuk berkas yang di-*include* agar diproses daripada disajikan sebagai teks mentah
- Hindari praktik *hardcoding* rahasia di dalam berkas sumber
