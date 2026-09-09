---
title: "SHA-1"
description: SHA-1 hash cracking — HackVister Binary Encoding challenge.
sidebarTitle: SHA-1
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

# SHA-1

## Challenge Profile

- **Module:** Binary Encoding — HackVister
- **Class:** Hashing (one-way)
- **Identifying signature:** 40-char hex digest
- **Result:** *to be cracked*

## Concept

SHA-1 (*Secure Hash Algorithm 1*) produces a 160-bit digest (20 bytes, 40 hex characters) from any input. Designed by the NSA, and like MD5, it has been considered weak since collision attacks were found (SHAttered, 2017). SHA-2/SHA-3 are recommended replacements.

## Identification

- Exactly 40 hex characters.
- Class **hash**, cannot be "decoded" directly.

## How It Works

```text
"(any input)" ──SHA-1──► 40 hex characters (160 bits)
```

## Solving

**Data:**

```text
7610bae85f2b530654cc716772f1fe653373e892
```

Same as MD5, test candidates:

**Method 1 — Python `hashlib`:**

```python
>>> import hashlib
>>> target = "7610bae85f2b530654cc716772f1fe653373e892"
>>> for candidate in wordlist:
...     if hashlib.sha1(candidate.encode()).hexdigest() == target:
...         print(candidate)
```

**Method 2 — `hashcat`:**

```bash
hashcat -m 100 -a 0 hash.txt wordlist.txt
```

**Method 3 — `john`:**

```bash
john --format=raw-sha1 hash.txt --wordlist=wordlist.txt
```

## Result

The plaintext candidate must be tested against an appropriate wordlist. If no match is found, expand the candidate list or use mangling rules (e.g. word + number combinations) in `hashcat`.

## Discussion

The main difference from the MD5 challenge is the `hashcat` mode (`-m 100` for SHA-1, `-m 0` for MD5) and the `john` format. Conceptually the process is identical: hashes cannot be reversed, so the answer is obtained by candidate matching, not decoding.

## Lessons Learned

- Hashes cannot be reversed; answers come from candidate matching.
- Use `hashcat -m 100` and `john raw-sha1` for SHA-1.
- When standard wordlists fail, expand candidates or use mangling rules.

-->