---
title: "ASCII"
description: Decode decimal data into text — HackVister Binary Encoding challenge.
sidebarTitle: ASCII
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

# ASCII

## Challenge Profile

- **Module:** Binary Encoding — HackVister
- **Class:** Encoding (reversible)
- **Identifying signature:** Decimal `32–127` separated by spaces
- **Result:** `StarryNightVanGogh`

## Concept

ASCII (*American Standard Code for Information Interchange*) maps 128 characters to numbers `0–127`. Printable characters fall between `32` (space) and `126` (`~`). Each decimal number in the data equals exactly one character.

## Identification

- Contains only decimal numbers.
- Values fall in the printable range (especially `65–90` uppercase, `97–122` lowercase).
- Numbers are separated by spaces.

## How It Works

Each character is represented by its numeric code:

```text
83   116  97  114  114  121
 │    │    │    │    │    │
S    t    a    r    r    y
```

## Solving

**Data:**

```text
83 116 97 114 114 121 78 105 103 104 116 86 97 110 71 111 103 104
```

**Method 1 — `awk`:**

```bash
echo "83 116 97 114 114 121 78 105 103 104 116 86 97 110 71 111 103 104" | \
  awk '{ for (i = 1; i <= NF; i++) printf "%c", $i; print "" }'
```

**Method 2 — Python:**

```python
>>> "".join(chr(int(n)) for n in data.split())
'StarryNightVanGogh'
```

**Method 3 — CyberChef:** Recipe `From Decimal` with *Space* delimiter.

## Result

`StarryNightVanGogh` — *The Starry Night* by **Vincent van Gogh**.

## Discussion

ASCII data often appears in simple checks such as file reads, logs, or server responses. Memorizing a few key codes helps speed up identification: `65=A`, `97=a`, `48=0`.

## Lessons Learned

- Each decimal value `32–127` represents one printable character.
- Data with only space-separated decimal numbers is instantly identifiable as ASCII.
- A single `awk` or `printf` command decodes it without extra tools.

-->