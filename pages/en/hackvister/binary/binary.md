---
title: "Binary"
description: Decode 8-bit binary data into text — HackVister Binary Encoding challenge.
sidebarTitle: Binary
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

# Binary

## Challenge Profile

- **Module:** Binary Encoding — HackVister
- **Class:** Encoding (reversible)
- **Identifying signature:** Only `0`/`1`, groups of 8 bits
- **Result:** `GirlWithAPearlEarringVermeer`

## Concept

Binary is the most basic representation of data. Each ASCII character is represented as one byte (8 bits). Groups of 8 bits bridge raw data with a human-readable representation.

## Identification

- Contains only `0` and `1`.
- Grouped by 8 bits (one byte per character), often separated by spaces.
- Total length is a multiple of 8.

## How It Works

```text
01000111  01101001  01110010  01101100
    │         │         │         │
   71        105       114       108
    │         │         │         │
    G         i         r         l
```

To convert binary to decimal, add powers of two per bit: `01000111` = 64 + 4 + 2 + 1 = 71 → `G`.

## Solving

**Data:**

```text
01000111 01101001 01110010 01101100 01010111 01101001 01110100 01101000
01000001 01010000 01100101 01100001 01110010 01101100 01000101 01100001
01110010 01110010 01101001 01101110 01100111 01010110 01100101 01110010
01101101 01100101 01100101 01110010
```

**Method 1 — Python:**

```python
>>> "".join(chr(int(b, 2)) for b in bits.split())
'GirlWithAPearlEarringVermeer'
```

**Method 2 — GNU `awk` (with `strtonum`):**

```bash
echo "01000111 01101001 ..." | \
  awk '{ for (i = 1; i <= NF; i++) printf "%c", strtonum("0b"$i); print "" }'
```

**Method 3 — CyberChef:** Recipe `From Binary` with *Space* delimiter.

## Result

`GirlWithAPearlEarringVermeer` — *Girl with a Pearl Earring* by **Johannes Vermeer**.

## Discussion

Binary and hex are closely related: one hex character (4 bits / one nibble) represents exactly half a byte. Understanding this relationship makes converting between schemes intuitive.

## Lessons Learned

- One byte (8 bits) equals one ASCII character.
- Groups of 8 bits made only of `0`/`1` are a definitive binary signature.
- The binary ⇄ hex relationship (4 bits per character) speeds up result verification.

-->