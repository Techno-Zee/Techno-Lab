---
title: "Level 11"
description: Memulihkan kunci enkripsi XOR melalui known-plaintext attack.
sidebarTitle: "Level 11 — Kriptanalisis XOR"
---

## Profil

- **Target:** `http://natas11.natas.labs.overthewire.org`
- **Kredensial:** `natas11` / (*password* dari Level 10)

## Pengintaian

Laman menampilkan pengaturan warna latar belakang saat ini beserta pemilih warna. Kode sumber PHP mengungkapkan logika penanganan data aplikasi.

## Analisis Kode Sumber

```php
$defaultdata = array("showpassword"=>"no", "bgcolor"=>"#ffffff");

function xor_encrypt($in) {
    $key = '<dirahasiakan>';
    $text = $in;
    $outText = '';

    for($i = 0; $i < strlen($text); $i++) {
        $outText .= $text[$i] ^ $key[$i % strlen($key)];
    }
    return $outText;
}

function loadData($def) {
    global $_COOKIE;
    $mydata = $def;
    if(array_key_exists("data", $_COOKIE)) {
        $tempdata = json_decode(xor_encrypt(base64_decode($_COOKIE["data"])), true);
        if(is_array($tempdata) && ...) {
            $mydata = $tempdata;
        }
    }
    return $mydata;
}
```

Aplikasi menyimpan objek JSON yang memuat `showpassword` dan `bgcolor` di dalam *cookie*. Data ini dienkripsi menggunakan XOR dengan kunci rahasia, lalu di-*encode* dengan base64. *Password* untuk level berikutnya diungkapkan ketika `showpassword` diatur menjadi `"yes"`.

## Analisis Kerentanan

Enkripsi XOR dengan kunci statis rentan terhadap **serangan *known-plaintext*** karena properti fundamental XOR:

```
ciphertext ⊕ plaintext = key
ciphertext ⊕ key = plaintext
```

Jika kita mengetahui baik *ciphertext* (dari *cookie*) maupun *plaintext* yang berkorespondensi (struktur data bawaan), kita dapat memulihkan kunci XOR.

| Atribut | Nilai |
|---------|-------|
| **Tipe** | XOR *stream cipher* |
| **Kelemahan** | Kunci statis, dapat dipulihkan melalui *known-plaintext* |
| **Dampak** | Pemalsuan *cookie* → eskalasi hak akses |

## Eksploitasi

### Langkah 1 — Ekstrak *cookie*

*Cookie* `data` berisi muatan yang telah di-*encode* base64 dan dienkripsi XOR. Dekode base64 untuk mendapatkan *ciphertext* mentah.

### Langkah 2 — Pulihkan kunci XOR

Dikarenakan *plaintext* bawaan diketahui, lakukan XOR dengan *ciphertext* untuk mendapatkan kunci:

```php
$known = '{"showpassword":"no","bgcolor":"#ffffff"}';

$key = "";
for($i = 0; $i < strlen($cookie); $i++) {
    $key .= $cookie[$i] ^ $known[$i % strlen($known)];
}
// Hasil: $key = "eDWo" (pola 4-byte berulang)
```

### Langkah 3 — Buat *cookie* palsu

```php
function xor_encrypt($in, $key) {
    $outText = "";
    for($i = 0; $i < strlen($in); $i++) {
        $outText .= $in[$i] ^ $key[$i % strlen($key)];
    }
    return $outText;
}

$key = "eDWo";
$newdata = json_encode(array(
    "showpassword"=>"yes",
    "bgcolor"=>"#ffffff"
));
$forged = base64_encode(xor_encrypt($newdata, $key));
```

### Langkah 4 — Ganti *cookie*

Atur nilai *cookie* `data` dengan nilai palsu di *browser*:

```javascript
document.cookie = "data=" + forged_value;
location.reload();
```

Atau menggunakan Burp Suite, ganti header `Cookie: data=...` dengan nilai baru.

## Hasil

Aplikasi mendekripsi *cookie* palsu dan membaca `showpassword` sebagai `"yes"`, yang memberikan akses ke *password* Level 12.

## Remediasi

- Jangan gunakan XOR dengan kunci statis untuk keperluan enkripsi
- Gunakan enkripsi terautentikasi (AES-GCM) dengan manajemen kunci yang tepat
- Gunakan sesi sisi server daripada penyimpanan data di sisi klien
- Apabila data sisi klien diperlukan, gunakan penandatanganan HMAC untuk mendeteksi manipulasi
