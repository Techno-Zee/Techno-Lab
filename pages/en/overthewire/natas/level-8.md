---
title: "Level 8"
description: Reversing a multi-layered encoding function to recover the original input.
sidebarTitle: "Level 8 — Encoded Secret Reversal"
---

## Profile

- **Target:** `http://natas8.natas.labs.overthewire.org`
- **Credentials:** `natas8` / (password from Level 7)

## Reconnaissance

The page presents an input form. The PHP source reveals an encoding function and a stored encoded value:

```php
$encodedSecret = "3d3d516343746d4d6d6c315669563362";

function encodeSecret($secret) {
    return bin2hex(strrev(base64_encode($secret)));
}
```

The application computes `encodeSecret($_POST['secret'])` and compares it against `$encodedSecret`.

## Analysis

The encoding pipeline consists of three operations applied sequentially:

```text
input
  → base64_encode
  → strrev (reverse the string)
  → bin2hex (binary to hexadecimal)
  → output
```

To recover the original secret, each operation must be reversed in reverse order:

```text
encoded (hex)
  → hex2bin (hexadecimal to binary)
  → strrev (reverse the string back)
  → base64_decode
  → original input
```

## Exploitation

Using PHP CLI:

```php
$encoded = "3d3d516343746d4d6d6c315669563362";
$decoded = base64_decode(strrev(hex2bin($encoded)));
echo $decoded;
// Result: oubWYf2kBq
```

Using Python:

```python
import base64

encoded = "3d3d516343746d4d6d6c315669563362"
step1 = bytes.fromhex(encoded)       # hex → raw bytes
step2 = step1[::-1]                   # reverse
secret = base64.b64decode(step2)      # base64 → plaintext
print(secret.decode())                # oubWYf2kBq
```

Submitting `oubWYf2kBq` as the secret triggers the "Access granted" response and reveals the password for Level 9.

## Techniques

- Reverse engineering encoding functions
- Understanding the base64, hex encoding schemes
- Working backwards through transformation pipelines

## Remediation

- Encoding is not encryption — it provides no security
- Use proper cryptographic hashing (bcrypt, Argon2) for secret comparison
- Avoid exposing encoding/encryption source code to users

## References

- [PHP: bin2hex](https://www.php.net/manual/en/function.bin2hex.php)
- [PHP: base64_encode](https://www.php.net/manual/en/function.base64-encode.php)
