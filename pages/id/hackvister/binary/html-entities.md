---
title: "HTML Entities"
description: Dekode data numeric character reference menjadi teks — tantangan Binary Encoding HackVister.
sidebarTitle: HTML Entities
---

# HTML Entities

## Profil Tantangan

- **Modul:** Binary Encoding — HackVister
- **Kelas:** Encoding (reversibel)
- **Ciri identifikasi:** Pola `&#N;`
- **Hasil:** `FishermenAtSeaTurner`

## Konsep

*HTML numeric character reference* merepresentasikan karakter sebagai `&#` diikuti kode desimal (atau `&#x` untuk hex) dan diakhiri `;`. Browser me-*render* entitas ini menjadi karakter yang dimaksud, sehingga HTML dapat menyembunyikan teks di balik representasi numeriknya.

## Identifikasi

- Banyak pola `&#` diikuti angka desimal dan `;`.
- Nilai angka berada pada rentang kode karakter yang umum (mis. `70` = `F`).

## Cara Kerja

```text
&#70;   &#105;   &#115;
 │       │       │
 70      105     115
 │       │       │
 F       i       s
```

## Penyelesaian

**Data:**

```text
&#70;&#105;&#115;&#104;&#101;&#114;&#109;&#101;&#110;&#65;&#116;&#83;&#101;&#97;&#84;&#117;&#114;&#110;&#101;&#114;
```

**Metode 1 — Python:**

```python
>>> import re
>>> re.sub(r"&#(\d+);", lambda m: chr(int(m.group(1))), data)
'FishermenAtSeaTurner'
```

**Metode 2 — Browser:** Tempel entitas ke dalam dokumen HTML; browser akan menampilkan teks yang sebenarnya.

**Metode 3 — CyberChef:** Recipe `HTML Entity` → *Decode HTML Entities*.

## Hasil

`FishermenAtSeaTurner` — lukisan *Fishermen at Sea* karya **J. M. W. Turner**.

## Pembahasan

Entitas HTML adalah trik umum untuk mengaburkan teks dari mata manusia namun tetap ditampilkan normal di browser. Dalam keamanan web, entitas ini juga kerap digunakan untuk menghindari penyaringan XSS — memahami cara kerjanya membantu mendekode muatan yang diobfuskasi.

## Pelajaran

- Pola `&#N;` memetakan kode desimal ke satu karakter Unicode.
- Dekode dapat dilakukan dengan `re.sub` satu baris di Python.
- Entitas HTML juga berperan dalam obfuskasi muatan XSS.