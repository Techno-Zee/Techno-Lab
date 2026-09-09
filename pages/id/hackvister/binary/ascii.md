---
title: "ASCII"
description: Dekode data angka desimal menjadi teks — tantangan Binary Encoding HackVister.
sidebarTitle: ASCII
---

# ASCII

## Profil Tantangan

- **Modul:** Binary Encoding — HackVister
- **Kelas:** Encoding (reversibel)
- **Ciri identifikasi:** Angka desimal `32–127` dipisah spasi
- **Hasil:** `StarryNightVanGogh`

## Konsep

ASCII (*American Standard Code for Information Interchange*) adalah standar yang memetakan 128 karakter ke angka `0–127`. Karakter yang dapat dicetak berada pada rentang `32` (spasi) hingga `126` (`~`). Setiap angka desimal dalam data setara dengan tepat satu karakter.

## Identifikasi

- Hanya terdiri dari angka desimal.
- Nilai berada pada rentang karakter yang dapat dicetak (terutama `65–90` huruf besar, `97–122` huruf kecil).
- Antara satu angka dan angka lainnya dipisah oleh spasi.

## Cara Kerja

Setiap karakter direpresentasikan oleh kode numeriknya:

```text
83   116  97  114  114  121
 │    │    │    │    │    │
S    t    a    r    r    y
```

## Penyelesaian

**Data:**

```text
83 116 97 114 114 121 78 105 103 104 116 86 97 110 71 111 103 104
```

**Metode 1 — `awk`:**

```bash
echo "83 116 97 114 114 121 78 105 103 104 116 86 97 110 71 111 103 104" | \
  awk '{ for (i = 1; i <= NF; i++) printf "%c", $i; print "" }'
```

**Metode 2 — Python:**

```python
>>> "".join(chr(int(n)) for n in data.split())
'StarryNightVanGogh'
```

**Metode 3 — CyberChef:** Recipe `From Decimal` dengan delimiter *Space*.

## Hasil

`StarryNightVanGogh` — lukisan *The Starry Night* karya **Vincent van Gogh**.

## Pembahasan

Data ASCII sering muncul pada pengecekan sederhana seperti pembacaan file, log, atau respons server. Kemampuannya membaca tabel ASCII secara mental membantu mempercepat identifikasi: `65=A`, `97=a`, `48=0`.

## Pelajaran

- Setiap nilai desimal `32–127` mewakili satu karakter yang dapat dicetak.
- Identifikasi data ASCII sangat cepat: hanya angka desimal yang dipisah spasi.
- Konversi dapat dilakukan dengan satu perintah `awk` atau `printf` tanpa alat bantu tambahan.