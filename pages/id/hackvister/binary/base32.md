---
title: "Base32"
description: Dekode data Base32 menjadi teks — tantangan Binary Encoding HackVister.
sidebarTitle: Base32
---

# Base32

## Profil Tantangan

- **Modul:** Binary Encoding — HackVister
- **Kelas:** Encoding (reversibel)
- **Ciri identifikasi:** `A–Z 2–7`, padding `=`
- **Hasil:** `ThePersistenceOfMemoryDali`

## Konsep

Base32 mengodekan data menjadi 32 karakter: huruf `A–Z` dan angka `2–7`. Setiap karakter mewakili 5 bit, sehingga 8 karakter Base32 mewakili 5 *byte* data. Panjang string selalu kelipatan 8, dan *padding* `=` digunakan sesuai kebutuhan.

## Identifikasi

- Hanya huruf besar `A–Z` dan angka `2–7` (perhatikan: **tidak ada** `0`, `1`, `8`, `9`).
- Panjang string kelipatan 8.
- Mungkin berakhir dengan `==` atau `======`.

## Cara Kerja

```text
K   R   U   G   K   U   D   F
│   │   │   │   │   │   │   │     masing-masing 5 bit
10  17  20  06  10  20  03  05
└─┘└─┘└─┘└─┘└─┘└─┘└─┘└─┘
      8 kelompok 5 bit = 40 bit = 5 byte
```

## Penyelesaian

**Data:**

```text
KRUGKUDFOJZWS43UMVXGGZKPMZGWK3LPOJ4UIYLMNE======
```

**Metode 1 — `base32` (GNU coreutils):**

```bash
echo "KRUGKUDFOJZWS43UMVXGGZKPMZGWK3LPOJ4UIYLMNE======" | base32 -d
```

**Metode 2 — Python:**

```python
>>> import base64
>>> base64.b32decode(data).decode()
'ThePersistenceOfMemoryDali'
```

**Metode 3 — CyberChef:** Recipe `From Base32`.

## Hasil

`ThePersistenceOfMemoryDali` — lukisan *The Persistence of Memory* karya **Salvador Dalí**.

## Pembahasan

Base32 lebih jarang daripada Base64, tetapi kunci identifikasinya justru paling tegas: **ketiadaan `0`, `1`, `8`, `9`** pada string alfanumerik huruf besar. Jika sebuah string terlihat seperti Base64 tetapi berisi `3`, `4`, `7`, dan hanya huruf besar, hampir pasti Base32.

## Pelajaran

- Himpunan karakter `A–Z` + `2–7` (tanpa `0/1/8/9`) adalah penanda khas Base32.
- Panjang string selalu kelipatan 8.
- Identifikasi Base32 lebih mudah daripada Base64 justru karena himpunan karakternya yang terbatas.