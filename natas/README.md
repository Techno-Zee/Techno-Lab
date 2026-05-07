# Natas (Web Exploitation)

> **rule :** password untuk level selanjutnya ada di level sebelumnya

## Natas 0

punya username & password defalut
username:`natas0`
password:`natas0`

inspect elemen untuk mendapatkan password

## Natas 1

username:`natas1`
password:`0nzCigAq7t2iALyvU9xcHlYN4MlkIwlq`

inspect elemen untuk mendapatkan password

## Natas 2

username:`natas2`
password:`TguMNxKo1DSa1tujBLuZJnDUlCcUAPlI`

inspect elemen. terdapat sebuah tampilan image, awas ini hanya umpan

```html
<div id="content">
  There is nothing on this page
  <img src="files/pixel.png" />
</div>
```

password sebenarnya bisa ditemukan dengan Path traversal pada `files/`. disana akan ditemukan file lain yaitu user.txt

## Natas 3

username:`natas3`
password:`3gqisGdR0pjm6tpkDKdIWO2hSvchLeYH`

lakukan inspect elemen seperti biasa & kita termukan bahwa didalamnya kosong. & hanya ada petunjuk bahwa kita perlu melakukan pencarian google (dorking). karena terlalu banyak halaman yang biasanya langsung membocorkan analisis kita lebih baik langsung pergi & mencoba mencarinya di `robots.txt` karena inilah file yang membantu google untuk memetakan konfigurasi root sebuah web.

disana akan ditemukan sebuah file yaitu `/s3cr3t/` didalamnya ada user.txt

## Natas 4

username:`natas4`
password:`QryZXc2e0zahULdHrtHxzyYkj59kUxLQ`

dikatakan bahwa user yang sah hanya datang dari `natas5` ini adalah mekanisme WAF (Web Application Firewall) sederhana. jadi kita perlu memakai burpsuit untuk melakukan bypass pada file index.php memakai repeater. yang di reapeat adalah `/index.php` bukan root `/`

## Natas 5

username:`natas5`
password:`0n35PkggAPm2zbEpOU802c0x0Msn1ToK`

sama seperti sebelumnya dimana kita perlu memakai burpsuit untuk intercept & repeter untuk merubah `loggedin=0` menjadi `loggedin=1` yang merupakan parameter untuk mengecek apakah user benar benar sah atau tidak

## Natas 6

username:`natas6`
password:`0RoJwHdSKWFTYR5WuiAewauSuNaBXned`

terdapat mekanisme input query, awalnya saya kira harus di baypass. ternyata kita hanya perlu membaca file secret yang diimport `include "includes/secret.inc";`

maka akan ditemukan password query nya:

```php
<?
$secret = "FOEIUWGHFEEUHOFUOIU";
?>
```

## Natas 7

username:`natas7`
password:`bmg8SvU1LizuWjx3y7xkNERkHxGre0GS`

hint: kata sandi untuk pengguna web natas8 sudah masuk /etc/natas_webpass/natas8
kita perlu memakai endpoint get pada parameter `index.php?page=` untuk membaca isi file `/etc/natas_webpass/natas8`

## Natas 8

username:`natas8`
password:`xcoXLmzMkoIP9D7hlgPlh9XD7OgLAe5Q`

hint:

```php
<?

$encodedSecret = "3d3d516343746d4d6d6c315669563362";

function encodeSecret($secret) {
    return bin2hex(strrev(base64_encode($secret)));
}

if(array_key_exists("submit", $_POST)) {
    if(encodeSecret($_POST['secret']) == $encodedSecret) {
    print "Access granted. The password for natas9 is <censored>";
    } else {
    print "Wrong secret";
    }
}
?>
```

pengerjaan :

- perlu melakukan decode bertingkat
- bin2hex`3d3d516343746d4d6d6c315669563362` menjadi `==QcCtmMml1ViV3b`
- strrev atau reverse string dari `==QcCtmMml1ViV3b` menjadi `b3ViV1lmMmtCcQ==`
- base64 dari `b3ViV1lmMmtCcQ==` menjadi `oubWYf2kBq` ini adalah query passwordnya

## Natas 9

username:`natas9`
password:`ZE1ck82lmdGIoErlhQgWND6j2Wzz6b6t`

hint:

```php
<?
$key = "";

if(array_key_exists("needle", $_REQUEST)) {
    $key = $_REQUEST["needle"];
}

if($key != "") {
    passthru("grep -i $key dictionary.txt");
}
?>
```

ternyata cluenya mirip seperti natas 7 dimana password untuk challenge selanjutnya dimasukkan di `/etc/natas_webpass/natas10` jadi kita bisa langsung baypass memakai `; cat /etc/natas_webpass/natas10` karena passthru digunakan untuk mengeksekusi perintah langsung ke terminal

## Natas 10
username:`natas10`
password:`t7I5VHvpa14sJTUGV0cbEsbYfFP2dmOu`

dengan bantuan deepseek kita menemukan beberapa payload seperti :
- `.* cat /etc/natas_webpass/natas10 #`
- `"" cat /etc/natas_webpass/natas10 /`

dst
## Natas 11
username:`natas11`
password:`UJdqkK1pTu6VLt9UHWAgRZz6sVUZ3lEk`