---
title: "Binary Encoding"
description: Overview of the HackVister encoding and hashing module — concept, identification, and challenge list.
sidebarTitle: Binary Encoding
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

This module covers the data encoding challenges from HackVister. Each challenge provides data encoded with a specific scheme; our task is to recognize the scheme, understand how it works, and recover the plaintext.

All answers in this module consistently follow the theme of **famous painting titles**, such as *Starry Night* by Van Gogh.

---

## Core Concept: Encoding ≠ Hashing

Before discussing each scheme, it is important to distinguish two concepts that are often confused:

| Aspect | Encoding | Hashing |
|--------|----------|---------|
| **Direction** | Two-way (can be encoded and decoded) | One-way (cannot be reversed) |
| **Output length** | Variable, proportional to input | Fixed, independent of input length |
| **Key** | No key required | No key required |
| **Purpose** | Data representation for portability | Integrity verification / password storage |
| **Examples** | Base64, Hex, URL, HTML entities | MD5, SHA-1, SHA-256 |

Practical consequence: encodings can be *directly recovered*, whereas hashes can only be tested by comparing plaintext candidates against the digest — a process called *hash cracking*.

---

## How to Identify the Scheme

The first step of every challenge is to recognize the scheme from data characteristics:

| Data Characteristic | Likely Scheme |
|---------------------|---------------|
| Only `0` and `1`, grouped by 8 | [Binary](/en/hackvister/binary/binary) |
| Only `0–9` and `A–F` (or `a–f`), even count | [Hex](/en/hackvister/binary/hex) |
| Only decimal `32–127` separated by spaces | [Decimal ASCII](/en/hackvister/binary/ascii) |
| `A–Z a–z 0–9 + /` with trailing `=`, multiple of 4 | [Base64](/en/hackvister/binary/base64) |
| `A–Z` and `2–7` with trailing `=`, multiple of 8 | [Base32](/en/hackvister/binary/base32) |
| Many `%XX` sequences | [URL encoding](/en/hackvister/binary/url-encoding) |
| Many `&#N;` sequences | [HTML numeric entities](/en/hackvister/binary/html-entities) |
| Many `=XX` sequences | [Quoted-Printable](/en/hackvister/binary/quoted-printable) |
| Starts `begin <mode> <name>`, ends `end` | [UUencode](/en/hackvister/binary/uuencode) |
| 32 hex characters | [MD5](/en/hackvister/binary/md5) |
| 40 hex characters | [SHA-1](/en/hackvister/binary/sha1) |

Rule of thumb: **check the character set first**, then the structure (separators, padding, blocks). Both are almost always enough to determine the scheme without tools.

---

## Challenge List

### Encoding

| # | Scheme | Key Signature | Result |
|---|--------|---------------|--------|
| 1 | [ASCII](/en/hackvister/binary/ascii) | Decimal `32–127` separated by spaces | StarryNightVanGogh |
| 2 | [Binary](/en/hackvister/binary/binary) | Only `0`/`1`, groups of 8 bits | GirlWithAPearlEarringVermeer |
| 3 | [Hex](/en/hackvister/binary/hex) | `0–9 A–F`, even length | TheBirthOfVenusBotticelli |
| 4 | [Base64](/en/hackvister/binary/base64) | `A–Z a–z 0–9 + /`, `=` padding | MonaLisaDaVinci |
| 5 | [Base32](/en/hackvister/binary/base32) | `A–Z 2–7`, `=` padding | ThePersistenceOfMemoryDali |
| 6 | [URL Encoding](/en/hackvister/binary/url-encoding) | `%XX` pattern | TheScreamMunch |
| 7 | [HTML Entities](/en/hackvister/binary/html-entities) | `&#N;` pattern | FishermenAtSeaTurner |
| 8 | [Quoted-Printable](/en/hackvister/binary/quoted-printable) | `=XX` pattern | TheNightWatchRembrandt |
| 9 | [UUencode](/en/hackvister/binary/uuencode) | `begin`/`end` block | TheKissKlimt |

### Hashing

| # | Scheme | Key Signature | Result |
|---|--------|---------------|--------|
| 10 | [MD5](/en/hackvister/binary/md5) | 32-char hex digest | `simple` |
| 11 | [SHA-1](/en/hackvister/binary/sha1) | 40-char hex digest | *to be cracked* |

---

## Quick Comparison: Similar Encodings

| Scheme | Separator | Example `"T"` | Fast decode trick |
|--------|-----------|---------------|-------------------|
| [Hex](/en/hackvister/binary/hex) | none | `54` | `xxd -r -p` |
| [URL encoding](/en/hackvister/binary/url-encoding) | `%` | `%54` | strip `%`, then `xxd -r -p` |
| [Quoted-Printable](/en/hackvister/binary/quoted-printable) | `=` | `=54` | strip `=`, then `xxd -r -p` |
| [Decimal ASCII](/en/hackvister/binary/ascii) | space | `84` | `printf` per number |

The three `%`/`=`/hex-based schemes actually map one byte to two hex characters. Understand one, understand them all.

---

## Lessons Learned

- **Identification comes from characters**: the character set and structure (separators, padding, blocks) are almost always enough to determine the scheme.
- **Encodings are reversible, hashes are not**: distinguish the two early to avoid wasting time trying to "decode" a hash.
- **Schemes are interrelated**: URL encoding, QP, and hex differ only in their separators; Base32 is recognizable by the absence of `0/1/8/9`.
- **The answer theme helps verification**: every plaintext is a painting name, so a result that does not look like a painting name signals a method error.
- **For hashes, use wordlists**: simple candidates are often the answer (like *"simple"* in the MD5 challenge).

-->