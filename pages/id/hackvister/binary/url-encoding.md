---
title: "URL Encoding"
description: Dekode data percent-encoding menjadi teks — tantangan Binary Encoding HackVister.
sidebarTitle: URL Encoding
---

# URL Encoding

## Profil Tantangan

- **Modul:** Binary Encoding — HackVister
- **Kelas:** Encoding (reversibel)
- **Ciri identifikasi:** Pola `%XX`
- **Hasil:** `TheScreamMunch`

## Konsep

URL encoding (*percent-encoding*) menggantikan karakter yang tidak aman dalam URL dengan `%` diikuti dua digit hex (nilai ASCII-nya). Karakter aman seperti huruf dan angka biasanya dibiarkan, sedangkan spasi menjadi `%20` dan karakter khusus menjadi `%XX`.

## Identifikasi

- Banyak pola `%` diikuti dua karakter hex (`%54`, `%65`, dst.).
- Sisa string adalah karakter alfanumerik biasa.

## Cara Kerja

```text
%54   %68   %65
 │     │     │
 0x54  0x68  0x65
 │     │     │
 T     h     e
```

## Penyelesaian

**Data:**

```text
%54%68%65%53%63%72%65%61%6D%4D%75%6E%63%68
```

**Metode 1 — Python:**

```bash
echo "%54%68%65%53%63%72%65%61%6D%4D%75%6E%63%68" | \
  python3 -c "import sys,urllib.parse; print(urllib.parse.unquote(sys.stdin.read()))"
```

**Metode 2 — `sed` + `xxd` (dekode manual):**

Hapus `%`, lalu perlakukan sisa sebagai hex:

```bash
echo "%54%68%65%53%63%72%65%61%6D%4D%75%6E%63%68" | tr -d '%' | xxd -r -p
```

**Metode 3 — CyberChef:** Recipe `URL Decode`.

## Hasil

`TheScreamMunch` — lukisan *The Scream* karya **Edvard Munch**.

## Pembahasan

Pola `%XX` sebenarnya sama dengan representasi hex dari tiap *byte* — itulah mengapa menghapus `%` lalu mendekode sebagai hex juga berhasil. Insight ini memperlihatkan bahwa skema pengodean sering kali saling berhubungan dan dapat dipecahkan dengan pendekatan yang sama.

## Pelajaran

- Pola `%XX` memetakan satu *byte* ke dua karakter hex.
- Menghapus `%` lalu mendekode sebagai hex adalah trik dekode cepat.
- Skema yang tampak berbeda sering kali hanya berbeda pada karakter pemisahnya.