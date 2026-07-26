---
title: "Level 8"
description: Memulihkan input asli dengan membalikkan fungsi encoding bertingkat.
sidebarTitle: "Level 8 — Rekayasa Balik Encoding"
---

## Profil

- **Target:** `http://natas8.natas.labs.overthewire.org`
- **Kredensial:** `natas8` / (*password* dari Level 7)

## Pengintaian

Laman menampilkan *form* masukan. Kode sumber PHP mengungkapkan fungsi *encoding* beserta nilai yang telah di-*encode*:

```php
$encodedSecret = "3d3d516343746d4d6d6c315669563362";

function encodeSecret($secret) {
    return bin2hex(strrev(base64_encode($secret)));
}
```

Aplikasi menghitung `encodeSecret($_POST['secret'])` lalu membandingkannya dengan `$encodedSecret`.

## Analisis

Rangkaian *encoding* terdiri dari tiga operasi yang diterapkan secara berurutan:

```text
input
  → base64_encode
  → strrev (membalikkan urutan karakter)
  → bin2hex (biner ke heksadesimal)
  → output
```

Untuk memulihkan nilai rahasia asli, setiap operasi harus dibalikkan dari urutan terakhir ke urutan pertama:

```text
encoded (hex)
  → hex2bin (heksadesimal ke biner)
  → strrev (mengembalikan urutan karakter)
  → base64_decode
  → input asli
```

## Eksploitasi

Menggunakan PHP CLI:

```php
$encoded = "3d3d516343746d4d6d6c315669563362";
$decoded = base64_decode(strrev(hex2bin($encoded)));
echo $decoded;
// Hasil: oubWYf2kBq
```

Menggunakan Python:

```python
import base64

encoded = "3d3d516343746d4d6d6c315669563362"
step1 = bytes.fromhex(encoded)       # hex → byte mentah
step2 = step1[::-1]                   # balikkan urutan
secret = base64.b64decode(step2)      # base64 → teks
print(secret.decode())                # oubWYf2kBq
```

Mengirimkan `oubWYf2kBq` sebagai nilai rahasia akan memicu respons "Access granted" dan mengungkapkan *password* untuk Level 9.

## Remediasi

- *Encoding* bukanlah enkripsi — tidak memberikan keamanan apa pun
- Gunakan *cryptographic hashing* (bcrypt, Argon2) untuk perbandingan nilai rahasia
- Hindari mengekspos kode *encoding*/*encryption* kepada pengguna
