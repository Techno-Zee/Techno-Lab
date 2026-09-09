---
title: "Binary"
description: Dekode data biner 8-bit menjadi teks — tantangan Binary Encoding HackVister.
sidebarTitle: Binary
---

# Binary

## Profil Tantangan

- **Modul:** Binary Encoding — HackVister
- **Kelas:** Encoding (reversibel)
- **Ciri identifikasi:** Hanya `0`/`1`, kelompok 8 bit
- **Hasil:** `GirlWithAPearlEarringVermeer`

## Konsep

Biner adalah representasi data pada tingkat paling dasar. Setiap karakter ASCII direpresentasikan sebagai satu *byte* (8 bit). Kelompok 8 bit inilah yang menjembatani data mentah dengan representasi yang bisa dibaca.

## Identifikasi

- Hanya mengandung `0` dan `1`.
- Dikelompokkan per 8 bit (satu *byte* per karakter), sering dipisah spasi.
- Panjang total kelipatan 8.

## Cara Kerja

```text
01000111  01101001  01110010  01101100
    │         │         │         │
   71        105       114       108
    │         │         │         │
    G         i         r         l
```

Biner ke desimal dapat dihitung per *bit*: `01000111` = 64 + 4 + 2 + 1 = 71 → `G`.

## Penyelesaian

**Data:**

```text
01000111 01101001 01110010 01101100 01010111 01101001 01110100 01101000
01000001 01010000 01100101 01100001 01110010 01101100 01000101 01100001
01110010 01110010 01101001 01101110 01100111 01010110 01100101 01110010
01101101 01100101 01100101 01110010
```

**Metode 1 — Python:**

```python
>>> "".join(chr(int(b, 2)) for b in bits.split())
'GirlWithAPearlEarringVermeer'
```

**Metode 2 — `awk` (GNU, dengan `strtonum`):**

```bash
echo "01000111 01101001 ..." | \
  awk '{ for (i = 1; i <= NF; i++) printf "%c", strtonum("0b"$i); print "" }'
```

**Metode 3 — CyberChef:** Recipe `From Binary` dengan delimiter *Space*.

## Hasil

`GirlWithAPearlEarringVermeer` — lukisan *Girl with a Pearl Earring* karya **Johannes Vermeer**.

## Pembahasan

Biner dan hex adalah dua representasi yang saling berkaitan: satu karakter hex (4 bit / *nibble*) tepat mewakili setengah *byte*. Memahami hubungan ini membuat perpindahan antar skema menjadi intuitif.

## Pelajaran

- Satu *byte* (8 bit) setara dengan satu karakter ASCII.
- Kelompok 8 bit dan karakter `0`/`1` saja adalah penanda biner yang tegas.
- Hubungan biner ⇄ hex (4 bit per karakter) mempercepat verifikasi hasil.