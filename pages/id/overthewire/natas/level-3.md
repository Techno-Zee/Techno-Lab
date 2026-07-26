---
title: "Level 3"
description: Memanfaatkan robots.txt untuk menemukan direktori tersembunyi.
sidebarTitle: "Level 3 — Robots.txt Enumeration"
---

## Profil

- **Target:** `http://natas3.natas.labs.overthewire.org`
- **Kredensial:** `natas3` / (*password* dari Level 2)

## Pengintaian

Sumber laman menunjukkan `<div id="content">` yang kosong tanpa komentar berarti. Indikasi yang ada mengarah pada kemungkinan bahwa mesin pencari semisal Google mungkin telah mengindeks sesuatu yang tidak semestinya.

## Analisis

Permintaan terhadap `/robots.txt` memberikan hasil:

```text
User-agent: *
Disallow: /s3cr3t/
```

Arahan `Disallow` menginstruksikan *crawler* untuk tidak mengindeks `/s3cr3t/`. Namun, pendekatan ini merupakan bentuk *security-through-obscurity* — siapa pun yang mengetahui cara memeriksa `robots.txt` dapat melihat secara persis apa yang coba disembunyikan.

## Eksploitasi

Navigasi ke `/s3cr3t/` menampilkan daftar direktori yang berisi `users.txt`. Akses terhadap berkas ini mengembalikan *password* untuk Level 4.

## Remediasi

- Jangan mengandalkan `robots.txt` sebagai mekanisme kontrol akses — berkas ini hanyalah arahan bagi *crawler*, bukan pengamanan yang legitimate
- Direktori sensitif wajib dilindungi dengan mekanisme autentikasi yang layak
- Gunakan kontrol akses tingkat server daripada bersandar pada ketidakjelasan (*obscurity*)
