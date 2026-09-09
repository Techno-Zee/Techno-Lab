---
title: "MD5"
description: MD5 hash cracking — HackVister Binary Encoding challenge.
sidebarTitle: MD5
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

# MD5

## Challenge Profile

- **Module:** Binary Encoding — HackVister
- **Class:** Hashing (one-way)
- **Identifying signature:** 32-char hex digest
- **Result:** `simple`

## Concept

MD5 (*Message Digest 5*) is a hash function producing a fixed 128-bit digest (16 bytes, 32 hex characters) from any input. Developed by Ronald Rivest in 1991. Because collisions and preimage attacks have been found, MD5 is **no longer secure** for cryptographic purposes, but is still encountered in legacy applications.

## Identification

- Exactly 32 hex characters (only `0–9 a–f`).
- Class **hash**, not encoding — cannot be "decoded" directly.

## How It Works

```text
"simple" ──MD5──► 8dbdda48fb8748d6746f1965824e966a
  (6 bytes)             (32 hex chars / 16 bytes)

"simpleeeeeeeeeeeee..." ──MD5──► still 32 hex characters
  (any length)                   (digest always fixed)
```

## Solving

**Data:**

```text
8dbdda48fb8748d6746f1965824e966a
```

Because hashing is one-way, we test plaintext candidates:

**Method 1 — Python `hashlib`:**

```python
>>> import hashlib
>>> target = "8dbdda48fb8748d6746f1965824e966a"
>>> for candidate in wordlist:          # candidate list
...     if hashlib.md5(candidate.encode()).hexdigest() == target:
...         print(candidate)
'simple'
```

**Method 2 — `hashcat`:**

```bash
hashcat -m 0 -a 0 hash.txt wordlist.txt
```

**Method 3 — `john`:**

```bash
john --format=raw-md5 hash.txt --wordlist=wordlist.txt
```

## Result

Matching plaintext: **`simple`**.

## Discussion

`8dbdda48fb8748d6746f1965824e966a` is a well-known MD5 example often used in documentation and tutorials (it is the hash of the word *"simple"*). The key lesson: a hash that "looks random" often comes from a simple word, so testing against a common wordlist is the right first step.

## Lessons Learned

- Hashes cannot be reversed; answers come from candidate matching, not decoding.
- Use `hashcat -m 0` and `john raw-md5` for MD5.
- Simple candidates from a common wordlist are often the answer.

-->