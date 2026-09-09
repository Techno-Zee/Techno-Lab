---
title: "Hex"
description: Decode hexadecimal data into text — HackVister Binary Encoding challenge.
sidebarTitle: Hex
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

# Hex

## Challenge Profile

- **Module:** Binary Encoding — HackVister
- **Class:** Encoding (reversible)
- **Identifying signature:** `0–9 A–F`, even length
- **Result:** `TheBirthOfVenusBotticelli`

## Concept

Hexadecimal (base 16) represents each byte as two characters from `0–9 A–F`. Because each byte becomes two characters, hex strings always have even length. Often prefixed with `0x` to signal the base.

## Identification

- Contains only `0–9` and `A–F` (or `a–f`).
- Even string length (apart from a possible `0x` prefix).
- No characters outside the hex set.

## How It Works

```text
54    68    65    42
 │     │     │     │
 84    104   101   66   →  T   h   e   B
```

Each hex character pair maps directly to its byte value.

## Solving

**Data:**

```text
54686542697274684F6656656E7573426F74746963656C6C69
```

**Method 1 — `xxd`:**

```bash
echo "54686542697274684F6656656E7573426F74746963656C6C69" | xxd -r -p
```

**Method 2 — Python:**

```python
>>> bytes.fromhex(data).decode()
'TheBirthOfVenusBotticelli'
```

**Method 3 — CyberChef:** Recipe `From Hex`.

## Result

`TheBirthOfVenusBotticelli` — *The Birth of Venus* by **Sandro Botticelli**.

## Discussion

Hex is the most common "intermediate" format: the output of base64 decoding, hashes, or binary data is almost always displayed as hex. Mastering hex ⇄ ASCII conversion eases nearly all encoding analysis.

## Lessons Learned

- Two hex characters always represent one byte.
- Even string length is a key validity check for hex data.
- `xxd -r -p` is the fastest tool for hex-to-text conversion.

-->