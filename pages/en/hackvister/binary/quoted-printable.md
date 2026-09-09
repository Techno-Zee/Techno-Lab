---
title: "Quoted-Printable"
description: Decode Quoted-Printable data into text — HackVister Binary Encoding challenge.
sidebarTitle: Quoted-Printable
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

# Quoted-Printable

## Challenge Profile

- **Module:** Binary Encoding — HackVister
- **Class:** Encoding (reversible)
- **Identifying signature:** `=XX` pattern
- **Result:** `TheNightWatchRembrandt`

## Concept

Quoted-Printable (QP) is a MIME encoding used to transmit 8-bit data over 7-bit channels. Unsafe characters are represented as `=` followed by two hex digits. Its advantage: the encoded text remains largely human-readable.

## Identification

- Many `=` followed by two hex digits (`=54`, `=68`, etc.).
- Characters besides those are usually ordinary letters/digits.
- Unlike URL encoding, the `=` is not followed by `%`.

## How It Works

```text
=54   =68   =65
 │     │     │
 0x54  0x68  0x65
 │     │     │
 T     h     e
```

## Solving

**Data:**

```text
=54=68=65=4E=69=67=68=74=57=61=74=63=68=52=65=6D=62=72=61=6E=64=74
```

**Method 1 — Python (`quopri`):**

```python
>>> import quopri
>>> quopri.decodestring(data.encode()).decode()
'TheNightWatchRembrandt'
```

**Method 2 — Python (manual):**

```python
>>> bytes.fromhex(data.replace("=", "")).decode()
'TheNightWatchRembrandt'
```

**Method 3 — CyberChef:** Recipe `From Quoted Printable`.

## Result

`TheNightWatchRembrandt` — *The Night Watch* by **Rembrandt van Rijn**.

## Discussion

QP and URL encoding are structurally very similar — both map `=XX` (or `%XX`) to one byte. The only difference is the separator character. Recognizing this equivalence makes decoding automatic: strip the separator, then treat the remainder as hex.

## Lessons Learned

- The `=XX` pattern maps one byte to two hex characters.
- Stripping `=` and decoding as hex uses the same trick as URL encoding.
- QP mainly appears in email protocols (MIME).

-->