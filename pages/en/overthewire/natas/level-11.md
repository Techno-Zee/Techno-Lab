---
title: "Level 11"
description: Recovering an XOR encryption key through known-plaintext attack to forge authenticated cookies.
sidebarTitle: "Level 11 — XOR Cryptanalysis"
---

## Profile

- **Target:** `http://natas11.natas.labs.overthewire.org`
- **Credentials:** `natas11` / (password from Level 10)

## Reconnaissance

The page displays the current background color setting and includes a color picker. The PHP source code reveals the application's data handling logic.

## Source Code Analysis

```php
$defaultdata = array("showpassword"=>"no", "bgcolor"=>"#ffffff");

function xor_encrypt($in) {
    $key = '<redacted>';
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

The application stores a JSON object containing `showpassword` and `bgcolor` fields in a cookie. This data is XOR-encrypted with a secret key, then base64-encoded. The password for the next level is disclosed when `showpassword` is set to `"yes"`.

## Vulnerability Analysis

XOR encryption with a static key is vulnerable to a **known-plaintext attack** because of XOR's fundamental property:

```
ciphertext ⊕ plaintext = key
ciphertext ⊕ key = plaintext
```

If we know both the ciphertext (from the cookie) and the corresponding plaintext (the default data structure), we can recover the XOR key.

| Attribute | Value |
|-----------|-------|
| **Type** | XOR stream cipher |
| **Weakness** | Static key, known-plaintext recoverable |
| **Impact** | Cookie forgery → privilege escalation |

## Exploitation

### Step 1 — Extract the cookie

The cookie `data` contains a base64-encoded, XOR-encrypted payload. Decode it:

```php
$cookie = base64_decode($_COOKIE["data"]);
// Raw bytes of ciphertext
```

### Step 2 — Recover the XOR key

Since the default plaintext is known, XOR it with the ciphertext:

```php
$known = '{"showpassword":"no","bgcolor":"#ffffff"}';

$key = "";
for($i = 0; $i < strlen($cookie); $i++) {
    $key .= $cookie[$i] ^ $known[$i % strlen($known)];
}
```

The recovered key is `eDWo` (a 4-byte repeating pattern).

### Step 3 — Forge an authenticated cookie

Encrypt a modified payload with `showpassword` set to `"yes"`:

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

### Step 4 — Replace the cookie

Set the forged cookie value in the browser:

```javascript
document.cookie = "data=" + forged_value;
location.reload();
```

Or using Burp Suite, replace the `Cookie: data=...` header with the new value.

## Result

The application decrypts the forged cookie and reads `showpassword` as `"yes"`, which grants access to the password for Level 12.

## Remediation

- Never use XOR with a static key for encryption
- Use authenticated encryption (AES-GCM) with proper key management
- Use server-side sessions instead of client-stored state
- If client-stored data is necessary, use HMAC signing to detect tampering

## References

- [XOR cipher — Wikipedia](https://en.wikipedia.org/wiki/XOR_cipher)
- [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)
