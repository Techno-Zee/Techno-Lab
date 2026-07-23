---
title: "Level 3"
description: Memanfaatkan robots.txt untuk menemukan direktori tersembunyi.
sidebarTitle: "Level 3 — Robots.txt Enumeration"
---

## Profil

- **Target:** `http://natas3.natas.labs.overthewire.org`
- **Kredensial:** `natas3` / (password dari Level 2)

## Pengintaian

Sumber halaman menunjukkan `<div id="content">` kosong tanpa komentar yang membantu. Petunjuknya mengindikasikan bahwa mesin pencari seperti Google mungkin mengindeks sesuatu yang tidak diinginkan.

## Analisis

Mengambil `/robots.txt` menghasilkan:

```text
User-agent: *
Disallow: /s3cr3t/
```

Arahan `Disallow` memberi tahu crawler untuk tidak mengindeks `/s3cr3t/`. Namun, ini adalah langkah keamanan yang lemah karena siapa pun yang tahu cara memeriksa `robots.txt` dapat melihat persis apa yang disembunyikan.

## Eksploitasi

Mengunjungi `/s3cr3t/` menampilkan daftar direktori yang berisi `users.txt`. Mengakses file ini mengembalikan password untuk Level 4.

## Remediasi

- Jangan mengandalkan `robots.txt` untuk kontrol akses — ini adalah arahan crawler, bukan mekanisme keamanan
- Direktori sensitif harus dilindungi dengan autentikasi
- Gunakan kontrol akses tingkat server daripada mengandalkan ketidakjelasan
