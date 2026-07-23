---
title: Template Writeup
description: Template untuk menulis writeup CTF yang konsisten.
hidden: true
---

# [Nama Tantangan]

| Atribut | Nilai |
|---------|-------|
| **CTF** | [Nama CTF] |
| **Kategori** | [Web / Reverse / Crypto / PWN / Forensics / OSINT] |
| **Kesulitan** | [Mudah / Sedang / Sulit / Ekstrim] |
| **Target** | [URL atau binary] |

## Ringkasan

Ikhtisar singkat tentang tantangan dan pendekatan yang digunakan untuk menyelesaikannya.

## Pengintaian

Jelaskan fase pengumpulan informasi. Alat dan teknik apa yang digunakan?

- Review kode sumber — endpoint, parameter, atau komentar menarik
- Enumerasi direktori — path atau file tersembunyi
- Fingerprinting teknologi — header server, framework
- Pemindaian jaringan — port terbuka, layanan

## Analisis Kerentanan

Identifikasi dan jelaskan akar penyebab.

```
Tipe:       [SQL injection / XSS / LFI / RCE / IDOR / dll.]
Lokasi:     [komponen atau parameter mana]
Akar:       [mengapa kerentanan ini ada]
CVSS:       [skor keparahan opsional]
```

## Eksploitasi

Jelaskan eksploitasi langkah demi langkah. Sertakan perintah, request, dan kode.

### Langkah 1 — [Nama Fase]

```bash
# perintah yang digunakan
```

```http
# request/response HTTP
```

### Langkah 2 — [Nama Fase]

```python
# script exploit
```

## Remediasi

Jelaskan bagaimana kerentanan ini harus diperbaiki.

- Sanitasi dan validasi input
- Prinsip hak akses minimal
- Autentikasi dan otorisasi yang tepat
- Header dan konfigurasi keamanan

## Referensi

- [URL Tantangan]
- [OWASP untuk kelas kerentanan ini]
- [CVE atau artikel terkait]
