---
title: "HackVister — Ringkasan"
description: Dokumentasi tantangan keamanan siber dari platform HackVister.
sidebarTitle: Ringkasan
---

[HackVister](https://hackvister.com/) merupakan platform pembelajaran keamanan siber berbasis tantangan (*challenge-based learning*). Platform ini menyajikan berbagai macam latihan, mulai dari pengodean data, kriptografi, analisis berkas, hingga simulasi eksploitasi pada aplikasi nyata.

Dokumentasi ini mencatat proses pengerjaan, metodologi, serta hasil dari setiap tantangan yang diselesaikan. Setiap modul disusun agar tidak hanya berisi jawaban, tetapi juga menjelaskan konsep, cara identifikasi, dan teknik penyelesaiannya.

## Daftar Tantangan

| Modul | Tema | Status |
|-------|------|:------:|
| [Binary Encoding](/id/hackvister/binary/index) | Encoding & hashing — ASCII, Binary, Hex, Base64/32, URL, HTML, QP, UUencode, MD5, SHA-1 | ✅ Selesai |

Modul lain akan ditambahkan seiring bertambahnya tantangan yang diselesaikan.

## Klasifikasi Materi

Materi yang terdokumentasi terbagi menjadi dua kelas besar:

1. **Encoding (dapat dibalik)** — ASCII, Binary, Hex, Base64, Base32, URL encoding, HTML entities, Quoted-Printable, UUencode.
2. **Hashing (satu arah)** — MD5 dan SHA-1, yang diselesaikan melalui *hash cracking* terhadap kandidat *plaintext*.

Pembagian ini penting karena menentukan pendekatan penyelesaian: *decode* langsung untuk encoding, dan *candidate matching* untuk hash.

## Alur Pengerjaan

Setiap tantangan didokumentasikan dengan struktur yang konsisten:

1. **Konsep** — memahami skema pengodean/hash yang digunakan.
2. **Identifikasi** — mengenali pola dari karakteristik data.
3. **Cara kerja** — memahami transformasi yang terjadi.
4. **Data** — muatan yang diberikan oleh tantangan.
5. **Penyelesaian** — langkah pemulihan *plaintext* menggunakan beberapa alat.
6. **Hasil & pembahasan** — jawaban yang diperoleh beserta pelajaran yang bisa dipetik.

## Alat yang Digunakan

- *Command-line tools* (`base64`, `base32`, `xxd`, `uudecode`, `printf`)
- *One-liner* bahasa Python (modul `base64`, `binascii`, `hashlib`, `quopri`, `re`)
- **CyberChef** sebagai alat visual untuk verifikasi silang
- **hashcat** / **John the Ripper** untuk *hash cracking* (MD5, SHA-1)