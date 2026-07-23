---
title: "Level 8"
description: Membalikkan fungsi encoding bertingkat untuk mendapatkan input asli.
sidebarTitle: "Level 8 — Rekayasa Balik Encoding"
---

## Profil

- **Target:** `http://natas8.natas.labs.overthewire.org`
- **Kredensial:** `natas8` / (password dari Level 7)

## Pengintaian

Halaman menampilkan form input. Kode sumber PHP mengungkapkan fungsi encoding dan nilai encoded:

```php
$encodedSecret = "3d3d516343746d4d6d6c315669563362";

function encodeSecret($secret) {
    return bin2hex(strrev(base64_encode($secret)));
}
```

## Analisis

Pipeline encoding terdiri dari tiga operasi:

```text
input → base64_encode → strrev → bin2hex → output
```

Untuk memulihkan rahasia asli, setiap operasi harus dibalik dalam urutan terbalik:

```text
encoded → hex2bin → strrev → base64_decode → input
```

## Eksploitasi

Menggunakan PHP CLI:

```php
$encoded = "3d3d516343746d4d6d6c315669563362";
$decoded = base64_decode(strrev(hex2bin($encoded)));
echo $decoded;
```

Menggunakan Python:

```python
import base64
encoded = "3d3d516343746d4d6d6c315669563362"
secret = base64.b64decode(bytes.fromhex(encoded)[::-1])
print(secret.decode())
```

Mengirimkan hasilnya sebagai secret memicu respons "Access granted" dan mengungkapkan password untuk Level 9.

## Remediasi

- Encoding bukan enkripsi — tidak memberikan keamanan
- Gunakan cryptographic hashing (bcrypt, Argon2) untuk perbandingan rahasia
- Hindari mengekspos kode encoding/enkripsi ke pengguna
