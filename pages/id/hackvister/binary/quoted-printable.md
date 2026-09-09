---
title: "Quoted-Printable"
description: Dekode data Quoted-Printable menjadi teks — tantangan Binary Encoding HackVister.
sidebarTitle: Quoted-Printable
---

# Quoted-Printable

## Profil Tantangan

- **Modul:** Binary Encoding — HackVister
- **Kelas:** Encoding (reversibel)
- **Ciri identifikasi:** Pola `=XX`
- **Hasil:** `TheNightWatchRembrandt`

## Konsep

Quoted-Printable (QP) adalah skema pengodean MIME untuk mentransmisikan data 8-bit melalui saluran 7-bit. Karakter yang tidak aman direpresentasikan sebagai `=` diikuti dua digit hex. Keunggulannya: teks yang ter-*encode* masih sebagian besar dapat dibaca manusia.

## Identifikasi

- Banyak pola `=` diikuti dua karakter hex (`=54`, `=68`, dst.).
- Karakter selain itu biasanya huruf/angka biasa.
- Tidak seperti URL encoding, pola `=` tidak diikuti `%`.

## Cara Kerja

```text
=54   =68   =65
 │     │     │
 0x54  0x68  0x65
 │     │     │
 T     h     e
```

## Penyelesaian

**Data:**

```text
=54=68=65=4E=69=67=68=74=57=61=74=63=68=52=65=6D=62=72=61=6E=64=74
```

**Metode 1 — Python (`quopri`):**

```python
>>> import quopri
>>> quopri.decodestring(data.encode()).decode()
'TheNightWatchRembrandt'
```

**Metode 2 — Python (manual):**

```python
>>> bytes.fromhex(data.replace("=", "")).decode()
'TheNightWatchRembrandt'
```

**Metode 3 — CyberChef:** Recipe `From Quoted Printable`.

## Hasil

`TheNightWatchRembrandt` — lukisan *The Night Watch* karya **Rembrandt van Rijn**.

## Pembahasan

QP dan URL encoding sangat mirip secara struktural — keduanya memetakan `=XX` (atau `%XX`) ke satu *byte*. Perbedaan utama hanya pada karakter pemisah. Mengenali persamaan ini membuat dekode menjadi otomatis: bersihkan pemisahnya, lalu perlakukan sebagai hex.

## Pelajaran

- Pola `=XX` memetakan satu *byte* ke dua karakter hex.
- Mengganti `=` lalu mendekode sebagai hex adalah trik yang sama dengan URL encoding.
- QP muncul terutama pada protokol email (MIME).