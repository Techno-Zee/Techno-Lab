---
title: "SHA-1"
description: Hash cracking SHA-1 — tantangan Binary Encoding HackVister.
sidebarTitle: SHA-1
---

# SHA-1

## Profil Tantangan

- **Modul:** Binary Encoding — HackVister
- **Kelas:** Hashing (satu arah)
- **Ciri identifikasi:** Digest 40 karakter hex
- **Hasil:** *perlu di-crack*

## Konsep

SHA-1 (*Secure Hash Algorithm 1*) menghasilkan digest 160 bit (20 *byte*, 40 karakter hex) dari masukan berapa pun. Dirancang oleh NSA, dan seperti MD5, telah dianggap lemah sejak serangan collision ditemukan (SHAttered, 2017). SHA-2/SHA-3 direkomendasikan sebagai penggantinya.

## Identifikasi

- Persis 40 karakter hex.
- Kelas **hash**, tidak dapat di-*decode* langsung.

## Cara Kerja

```text
"(masukan berapa pun)" ──SHA-1──► 40 karakter hex (160 bit)
```

## Penyelesaian

**Data:**

```text
7610bae85f2b530654cc716772f1fe653373e892
```

Sama seperti MD5, lakukan pengujian kandidat:

**Metode 1 — Python `hashlib`:**

```python
>>> import hashlib
>>> target = "7610bae85f2b530654cc716772f1fe653373e892"
>>> for candidate in wordlist:
...     if hashlib.sha1(candidate.encode()).hexdigest() == target:
...         print(candidate)
```

**Metode 2 — `hashcat`:**

```bash
hashcat -m 100 -a 0 hash.txt wordlist.txt
```

**Metode 3 — `john`:**

```bash
john --format=raw-sha1 hash.txt --wordlist=wordlist.txt
```

## Hasil

Kandidat *plaintext* perlu diuji terhadap *wordlist* yang sesuai. Apabila belum diperoleh kecocokan, perluas daftar kandidat atau gunakan aturan mangling (mis. kombinasi kata + angka) pada `hashcat`.

## Pembahasan

Perbedaan utama dengan tantangan MD5 terletak pada mode `hashcat` (`-m 100` untuk SHA-1, `-m 0` untuk MD5) dan format `john`. Secara konsep, prosesnya identik: hash tidak bisa dibalik, sehingga jawaban diperoleh dengan *matching* kandidat, bukan dekode.

## Pelajaran

- Hash tidak bisa dibalik; jawaban diperoleh dengan *matching* kandidat.
- Mode `hashcat -m 100` dan format `john raw-sha1` untuk SHA-1.
- Bila *wordlist* standar gagal, perluas kandidat atau gunakan aturan mangling.