---
title: "UUencode"
description: Dekode data UUencode menjadi teks — tantangan Binary Encoding HackVister.
sidebarTitle: UUencode
---

# UUencode

## Profil Tantangan

- **Modul:** Binary Encoding — HackVister
- **Kelas:** Encoding (reversibel)
- **Ciri identifikasi:** Blok `begin`/`end`
- **Hasil:** `TheKissKlimt`

## Konsep

UUencode (*Unix-to-Unix encoding*) adalah skema lama untuk mentransmisikan berkas biner sebagai teks ASCII 7-bit. Formatnya diawali baris `begin <mode> <nama-berkas>`, diikuti baris data (tiap baris berisi awalan panjang), dan ditutup baris `end`. Nama berkas pada contoh ini (`odt_uuencoding_file.dat`) adalah penanda format OpenDocument.

## Identifikasi

- Blok diawali kata kunci `begin` diikuti *mode* (mis. `0744`) dan nama berkas.
- Diakhiri baris `end`.
- Baris data hanya berisi karakter ASCII yang dapat dicetak.

## Cara Kerja

UUencode menambahkan 32 ke setiap *byte* (sehingga nilai `0–63` menjadi karakter `' '`–`_`). Baris data diawali karakter yang menyimpan panjang baris:

```text
,5&AE2VES<TML:6UT
└┘ └────────────┘
 panjang   data 13 byte
```

## Penyelesaian

**Data:**

```text
begin 0744 odt_uuencoding_file.dat
,5&AE2VES<TML:6UT
`
end
```

**Metode 1 — `uudecode`:**

```bash
printf 'begin 0744 odt_uuencoding_file.dat\n,5&AE2VES<TML:6UT\n`\nend\n' | uudecode -o -
```

**Metode 2 — Python (`binascii`):**

```python
>>> import binascii
>>> binascii.a2b_uu(",5&AE2VES<TML:6UT\n")
b'TheKissKlimt'
```

**Metode 3 — CyberChef:** Recipe `From UUencode`.

## Hasil

`TheKissKlimt` — lukisan *The Kiss* karya **Gustav Klimt**.

## Pembahasan

UUencode jarang digunakan di dunia modern, tetapi mengenali format `begin ... end` sangat penting karena format pembungkus (wrapping) semacam ini juga dipakai oleh skema lain. Saat menemukan blok dengan *header* dan *footer*, jangan hanya mendekode isinya — baca format keseluruhannya terlebih dahulu.

## Pelajaran

- Blok `begin <mode> <nama>` ... `end` adalah penanda UUencode yang tegas.
- Data baris diawali karakter panjang; setiap *byte* diberi offset 32.
- `uudecode` dan `binascii.a2b_uu()` mendekode secara otomatis.