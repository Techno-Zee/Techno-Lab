---
title: "Binary Encoding"
description: Ringkasan modul pengodean data dan hash HackVister — konsep, identifikasi, dan daftar tantangan.
sidebarTitle: Binary Encoding
---

Modul ini membahas tantangan pengodean data dari HackVister. Setiap tantangan memberikan data yang ter-*encode* menggunakan skema tertentu; tugas kita adalah mengenali skemanya, memahami cara kerjanya, lalu memulihkan *plaintext*-nya.

Seluruh jawaban pada modul ini mengikuti tema konsisten berupa **judul lukisan terkenal**, misalnya *Starry Night* karya Van Gogh.

---

## Konsep Dasar: Encoding ≠ Hashing

Sebelum membahas masing-masing skema, penting untuk membedakan dua konsep yang kerap tertukar:

| Aspek | Encoding | Hashing |
|-------|----------|---------|
| **Arah** | Dua arah (dapat di-*encode* dan di-*decode*) | Satu arah (tidak dapat dibalik) |
| **Panjang keluaran** | Bervariasi, proporsional dengan masukan | Tetap, tidak bergantung panjang masukan |
| **Kunci** | Tidak memerlukan kunci | Tidak memerlukan kunci |
| **Tujuan** | Representasi data agar portabel | Verifikasi integritas / penyimpanan kata sandi |
| **Contoh** | Base64, Hex, URL, HTML entities | MD5, SHA-1, SHA-256 |

Konsekuensi praktis: encoding dapat *langsung dipulihkan*, sedangkan hash hanya dapat diuji dengan membandingkan kandidat *plaintext* terhadap digest — proses yang disebut *hash cracking*.

---

## Cara Mengidentifikasi Skema

Langkah pertama setiap tantangan adalah mengenali skema dari karakteristik data:

| Karakteristik Data | Kemungkinan Skema |
|--------------------|-------------------|
| Hanya `0` dan `1`, dikelompokkan per 8 | [Binary](/id/hackvister/binary/binary) |
| Hanya `0–9` dan `A–F` (atau `a–f`), jumlah genap | [Hex](/id/hackvister/binary/hex) |
| Hanya angka desimal `32–127` yang dipisah spasi | [ASCII desimal](/id/hackvister/binary/ascii) |
| `A–Z a–z 0–9 + /` dengan `=` di akhir, kelipatan 4 | [Base64](/id/hackvister/binary/base64) |
| `A–Z` dan `2–7` dengan `=` di akhir, kelipatan 8 | [Base32](/id/hackvister/binary/base32) |
| Banyak pola `%XX` | [URL encoding](/id/hackvister/binary/url-encoding) |
| Banyak pola `&#N;` | [HTML numeric entities](/id/hackvister/binary/html-entities) |
| Banyak pola `=XX` | [Quoted-Printable](/id/hackvister/binary/quoted-printable) |
| Dimulai `begin <mode> <nama>` diakhiri `end` | [UUencode](/id/hackvister/binary/uuencode) |
| 32 karakter hex | [MD5](/id/hackvister/binary/md5) |
| 40 karakter hex | [SHA-1](/id/hackvister/binary/sha1) |

Aturan praktis: **periksa himpunan karakter terlebih dahulu**, lalu struktur (pemisah, *padding*, blok). Keduanya hampir selalu cukup untuk menentukan skema tanpa alat bantu.

---

## Daftar Tantangan

### Encoding

| # | Skema | Ciri Utama | Hasil |
|---|-------|------------|-------|
| 1 | [ASCII](/id/hackvister/binary/ascii) | Angka desimal `32–127` dipisah spasi | StarryNightVanGogh |
| 2 | [Binary](/id/hackvister/binary/binary) | Hanya `0`/`1`, kelompok 8 bit | GirlWithAPearlEarringVermeer |
| 3 | [Hex](/id/hackvister/binary/hex) | `0–9 A–F`, panjang genap | TheBirthOfVenusBotticelli |
| 4 | [Base64](/id/hackvister/binary/base64) | `A–Z a–z 0–9 + /`, padding `=` | MonaLisaDaVinci |
| 5 | [Base32](/id/hackvister/binary/base32) | `A–Z 2–7`, padding `=` | ThePersistenceOfMemoryDali |
| 6 | [URL Encoding](/id/hackvister/binary/url-encoding) | Pola `%XX` | TheScreamMunch |
| 7 | [HTML Entities](/id/hackvister/binary/html-entities) | Pola `&#N;` | FishermenAtSeaTurner |
| 8 | [Quoted-Printable](/id/hackvister/binary/quoted-printable) | Pola `=XX` | TheNightWatchRembrandt |
| 9 | [UUencode](/id/hackvister/binary/uuencode) | Blok `begin`/`end` | TheKissKlimt |

### Hashing

| # | Skema | Ciri Utama | Hasil |
|---|-------|------------|-------|
| 10 | [MD5](/id/hackvister/binary/md5) | Digest 32 karakter hex | `simple` |
| 11 | [SHA-1](/id/hackvister/binary/sha1) | Digest 40 karakter hex | *perlu di-crack* |

---

## Perbandingan Cepat: Encoding yang Saling Mirip

| Skema | Karakter Pemisah | Contoh `"T"` | Trik dekode cepat |
|-------|------------------|--------------|-------------------|
| [Hex](/id/hackvister/binary/hex) | tidak ada | `54` | `xxd -r -p` |
| [URL encoding](/id/hackvister/binary/url-encoding) | `%` | `%54` | buang `%`, lalu `xxd -r -p` |
| [Quoted-Printable](/id/hackvister/binary/quoted-printable) | `=` | `=54` | buang `=`, lalu `xxd -r -p` |
| [ASCII desimal](/id/hackvister/binary/ascii) | spasi | `84` | `printf` per angka |

Ketiga skema berbasis `%`/`=`/hex sebenarnya memetakan satu *byte* ke dua karakter hex. Begitu memahami satu, memahami semua.

---

## Pelajaran

- **Identifikasi datang dari karakter**: himpunan karakter dan struktur (pemisah, *padding*, blok) hampir selalu cukup untuk menentukan skema.
- **Encoding bisa dibalik, hash tidak**: bedakan keduanya sejak awal agar tidak membuang waktu mencoba "mendekode" hash.
- **Skema saling berhubungan**: URL encoding, QP, dan hex hanya berbeda pada pemisahnya; base32 dapat dikenali dari ketiadaan `0/1/8/9`.
- **Tema jawaban membantu verifikasi**: seluruh *plaintext* berupa nama lukisan, sehingga hasil yang tidak berbentuk nama lukisan menandakan kesalahan metode.
- **Untuk hash, gunakan *wordlist***: kandidat sederhana sering kali adalah jawabannya (seperti *"simple"* pada tantangan MD5).