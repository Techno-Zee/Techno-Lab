---
title: "Level 11"
description: Memulihkan kunci enkripsi XOR melalui known-plaintext attack.
sidebarTitle: "Level 11 — Kriptanalisis XOR"
---

## Profil

- **Target:** `http://natas11.natas.labs.overthewire.org`
- **Kredensial:** `natas11` / (password dari Level 10)

## Analisis Kode Sumber

Aplikasi menyimpan objek JSON dalam cookie. Data ini dienkripsi XOR dengan kunci rahasia, lalu di-base64.

```php
function xor_encrypt($in) {
    $key = '<dirahasiakan>';
    $text = $in;
    $outText = '';
    for($i = 0; $i < strlen($text); $i++) {
        $outText .= $text[$i] ^ $key[$i % strlen($key)];
    }
    return $outText;
}
```

Password untuk level berikutnya ditampilkan ketika `showpassword` diatur ke `"yes"`.

## Analisis Kerentanan

Enkripsi XOR dengan kunci statis rentan terhadap **known-plaintext attack** karena properti fundamental XOR:

```
ciphertext ⊕ plaintext = key
ciphertext ⊕ key = plaintext
```

## Eksploitasi

### Langkah 1 — Ekstrak cookie

Dekode cookie `data` dari base64.

### Langkah 2 — Pulihkan kunci XOR

Karena plaintext diketahui (`{"showpassword":"no","bgcolor":"#ffffff"}`), XOR dengan ciphertext untuk mendapatkan kunci:

```php
$known = '{"showpassword":"no","bgcolor":"#ffffff"}';
$key = "";
for($i = 0; $i < strlen($cookie); $i++) {
    $key .= $cookie[$i] ^ $known[$i % strlen($known)];
}
// Hasil: $key = "eDWo" (pola 4-byte berulang)
```

### Langkah 3 — Buat cookie palsu

```php
$key = "eDWo";
$newdata = json_encode(array(
    "showpassword"=>"yes",
    "bgcolor"=>"#ffffff"
));
$forged = base64_encode(xor_encrypt($newdata, $key));
```

### Langkah 4 — Ganti cookie

Setel cookie `data` dengan nilai baru di browser atau Burp Suite, lalu muat ulang halaman.

## Hasil

Aplikasi mendekripsi cookie palsu dan membaca `showpassword` sebagai `"yes"`, yang memberikan akses ke password Level 12.

## Remediasi

- Jangan gunakan XOR dengan kunci statis untuk enkripsi
- Gunakan enkripsi terautentikasi (AES-GCM) dengan manajemen kunci yang tepat
- Gunakan sesi sisi server daripada penyimpanan sisi klien
