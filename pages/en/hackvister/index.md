---
title: "HackVister — Overview"
description: Documentation of cybersecurity challenges from the HackVister platform.
sidebarTitle: Overview
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

[HackVister](https://hackvister.com/) is a challenge-based cybersecurity learning platform. It offers a wide range of exercises, from data encoding and cryptography to file analysis and exploitation simulations on real-world applications.

This documentation records the process, methodology, and results of every completed challenge. Each module is written not only to provide the answer but also to explain the concept, identification, and solving techniques.

## Challenge List

| Module | Topic | Status |
|--------|-------|:------:|
| [Binary Encoding](/en/hackvister/binary/index) | Encoding & hashing — ASCII, Binary, Hex, Base64/32, URL, HTML, QP, UUencode, MD5, SHA-1 | ✅ Done |

Additional modules will be added as more challenges are completed.

## Material Classification

The documented material is split into two major classes:

1. **Encoding (reversible)** — ASCII, Binary, Hex, Base64, Base32, URL encoding, HTML entities, Quoted-Printable, UUencode.
2. **Hashing (one-way)** — MD5 and SHA-1, solved through hash cracking against plaintext candidates.

This split matters because it determines the solving approach: direct decoding for encodings, and candidate matching for hashes.

## Workflow

Every challenge is documented with a consistent structure:

1. **Concept** — understanding the encoding/hashing scheme used.
2. **Identification** — recognizing patterns from the data characteristics.
3. **How it works** — understanding the transformation taking place.
4. **Data** — the payload provided by the challenge.
5. **Solving** — recovering the plaintext using multiple tools.
6. **Result & discussion** — the obtained answer along with lessons learned.

## Tools Used

- Command-line tools (`base64`, `base32`, `xxd`, `uudecode`, `printf`)
- Python one-liners (modules `base64`, `binascii`, `hashlib`, `quopri`, `re`)
- **CyberChef** as a visual tool for cross-verification
- **hashcat** / **John the Ripper** for hash cracking (MD5, SHA-1)

-->