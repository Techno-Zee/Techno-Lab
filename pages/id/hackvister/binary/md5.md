---
title: "MD5"
description: Hash cracking MD5 — tantangan Binary Encoding HackVister.
sidebarTitle: MD5
---

# MD5

## Profil Tantangan

- **Modul:** Binary Encoding — HackVister
- **Kelas:** Hashing (satu arah)
- **Ciri identifikasi:** Digest 32 karakter hex
- **Hasil:** `simple`

## Konsep

MD5 (*Message Digest 5*) adalah fungsi hash yang menghasilkan digest tetap 128 bit (16 *byte*, 32 karakter hex) dari masukan berapa pun. Dikembangkan oleh Ronald Rivest pada 1991. Karena collision dan preimage attack telah ditemukan, MD5 **tidak lagi aman** untuk keperluan kriptografi, tetapi masih sering ditemui pada aplikasi lama.

## Identifikasi

- Persis 32 karakter hex (hanya `0–9 a–f`).
- Kelas **hash**, bukan encoding — tidak dapat di-*decode* langsung.

## Cara Kerja

```text
"simple" ──MD5──► 8dbdda48fb8748d6746f1965824e966a
  (6 byte)              (32 karakter hex / 16 byte)

"simpleeeeeeeeeeeee..." ──MD5──► tetap 32 karakter hex
  (berapapun panjang)              (digest selalu tetap)
```

## Penyelesaian

**Data:**

```text
8dbdda48fb8748d6746f1965824e966a
```

Karena hash satu arah, kita uji kandidat *plaintext*:

**Metode 1 — Python `hashlib`:**

```python
>>> import hashlib
>>> target = "8dbdda48fb8748d6746f1965824e966a"
>>> for candidate in wordlist:            # daftar kandidat
...     if hashlib.md5(candidate.encode()).hexdigest() == target:
...         print(candidate)
'simple'
```

**Metode 2 — `hashcat`:**

```bash
hashcat -m 0 -a 0 hash.txt wordlist.txt
```

**Metode 3 — `john`:**

```bash
john --format=raw-md5 hash.txt --wordlist=wordlist.txt
```

## Hasil

Plaintext yang cocok: **`simple`**.

## Pembahasan

`8dbdda48fb8748d6746f1965824e966a` adalah contoh MD5 yang sangat terkenal karena kerap dipakai di dokumentasi dan tutorial (merupakan hash dari kata *"simple"*). Pelajaran pentingnya: hash yang "kelihatan acak" sering kali berasal dari kata yang sederhana, sehingga pengujian terhadap *wordlist* umum adalah langkah pertama yang tepat.

## Pelajaran

- Hash tidak bisa dibalik; jawaban diperoleh dengan *matching* kandidat, bukan dekode.
- Mode `hashcat -m 0` dan format `john raw-md5` untuk MD5.
- Kandidat sederhana dari *wordlist* umum sering kali adalah jawabannya.