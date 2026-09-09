---
title: "Base64"
description: Dekode data Base64 menjadi teks — tantangan Binary Encoding HackVister.
sidebarTitle: Base64
---

# Base64

## Profil Tantangan

- **Modul:** Binary Encoding — HackVister
- **Kelas:** Encoding (reversibel)
- **Ciri identifikasi:** `A–Z a–z 0–9 + /`, padding `=`
- **Hasil:** `MonaLisaDaVinci`

## Konsep

Base64 mengodekan data biner menjadi 64 karakter yang dapat dicetak: `A–Z`, `a–z`, `0–9`, `+`, `/`. Setiap karakter Base64 mewakili 6 bit, sehingga 4 karakter Base64 mewakili 3 *byte* data asli. Bila panjang data bukan kelipatan 3, ditambahkan *padding* `=` agar panjang total kelipatan 4.

## Identifikasi

- Himpunan karakter `A–Z a–z 0–9 + /`.
- Panjang string kelipatan 4.
- Mungkin berakhir dengan `=` atau `==`.
- Tidak mengandung karakter di luar himpunan tersebut (mis. spasi, titik).

## Cara Kerja

```text
T   W   9   u
│   │   │   │        masing-masing 6 bit
011001 010011 011001 111110
└────┘└─────┘└─────┘└──────┘
 8 bit (M)  8 bit (o)  8 bit (n)
```

Setiap kelompok 3 *byte* (24 bit) dipecah menjadi 4 kelompok 6 bit, lalu tiap kelompok dipetakan ke indeks tabel Base64.

## Penyelesaian

**Data:**

```text
TW9uYUxpc2FEYVZpbmNp
```

**Metode 1 — `base64` (GNU coreutils):**

```bash
echo "TW9uYUxpc2FEYVZpbmNp" | base64 -d
```

**Metode 2 — Python:**

```python
>>> import base64
>>> base64.b64decode(data).decode()
'MonaLisaDaVinci'
```

**Metode 3 — CyberChef:** Recipe `From Base64`.

## Hasil

`MonaLisaDaVinci` — lukisan *Mona Lisa* karya **Leonardo da Vinci**.

## Pembahasan

Base64 adalah skema pengodean paling umum di dunia web (data URI, token JWT, lampiran email). Dalam konteks keamanan, selalu periksa data yang tampak "acak" namun hanya berisi karakter alfanumerik plus `+/` — kemungkinan besar Base64.

## Pelajaran

- Set 64 karakter (`A–Z a–z 0–9 + /`) dengan *padding* `=` adalah penanda Base64.
- Panjang string selalu kelipatan 4.
- `base64 -d` atau `base64.b64decode()` cukup untuk mendekode hampir semua kasus.