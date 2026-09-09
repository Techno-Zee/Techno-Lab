---
title: "Base64"
description: Decode Base64 data into text — HackVister Binary Encoding challenge.
sidebarTitle: Base64
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

# Base64

## Challenge Profile

- **Module:** Binary Encoding — HackVister
- **Class:** Encoding (reversible)
- **Identifying signature:** `A–Z a–z 0–9 + /`, `=` padding
- **Result:** `MonaLisaDaVinci`

## Concept

Base64 encodes binary data into 64 printable characters: `A–Z`, `a–z`, `0–9`, `+`, `/`. Each Base64 character represents 6 bits, so 4 Base64 characters represent 3 bytes of original data. When the input length is not a multiple of 3, `=` padding is appended so the total length is a multiple of 4.

## Identification

- Character set `A–Z a–z 0–9 + /`.
- String length is a multiple of 4.
- May end with `=` or `==`.
- Contains no characters outside that set (e.g. no spaces or dots).

## How It Works

```text
T   W   9   u
│   │   │   │        each 6 bits
011001 010011 011001 111110
└────┘└─────┘└─────┘└──────┘
 8 bit (M)  8 bit (o)  8 bit (n)
```

Each group of 3 bytes (24 bits) is split into 4 groups of 6 bits, then each group is mapped to a Base64 table index.

## Solving

**Data:**

```text
TW9uYUxpc2FEYVZpbmNp
```

**Method 1 — `base64` (GNU coreutils):**

```bash
echo "TW9uYUxpc2FEYVZpbmNp" | base64 -d
```

**Method 2 — Python:**

```python
>>> import base64
>>> base64.b64decode(data).decode()
'MonaLisaDaVinci'
```

**Method 3 — CyberChef:** Recipe `From Base64`.

## Result

`MonaLisaDaVinci` — *Mona Lisa* by **Leonardo da Vinci**.

## Discussion

Base64 is the most common encoding on the web (data URIs, JWT tokens, email attachments). In a security context, always examine data that looks "random" but contains only alphanumeric characters plus `+/` — it is likely Base64.

## Lessons Learned

- The 64-character set (`A–Z a–z 0–9 + /`) with `=` padding is the Base64 signature.
- String length is always a multiple of 4.
- `base64 -d` or `base64.b64decode()` handles nearly every case.

-->