---
title: "Base32"
description: Decode Base32 data into text — HackVister Binary Encoding challenge.
sidebarTitle: Base32
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

# Base32

## Challenge Profile

- **Module:** Binary Encoding — HackVister
- **Class:** Encoding (reversible)
- **Identifying signature:** `A–Z 2–7`, `=` padding
- **Result:** `ThePersistenceOfMemoryDali`

## Concept

Base32 encodes data into 32 characters: letters `A–Z` and digits `2–7`. Each character represents 5 bits, so 8 Base32 characters represent 5 bytes. The string length is always a multiple of 8, with `=` padding as needed.

## Identification

- Only uppercase `A–Z` and digits `2–7` (note: **no** `0`, `1`, `8`, `9`).
- String length is a multiple of 8.
- May end with `==` or `======`.

## How It Works

```text
K   R   U   G   K   U   D   F
│   │   │   │   │   │   │   │     each 5 bits
10  17  20  06  10  20  03  05
└─┘└─┘└─┘└─┘└─┘└─┘└─┘└─┘
   8 groups of 5 bits = 40 bits = 5 bytes
```

## Solving

**Data:**

```text
KRUGKUDFOJZWS43UMVXGGZKPMZGWK3LPOJ4UIYLMNE======
```

**Method 1 — `base32` (GNU coreutils):**

```bash
echo "KRUGKUDFOJZWS43UMVXGGZKPMZGWK3LPOJ4UIYLMNE======" | base32 -d
```

**Method 2 — Python:**

```python
>>> import base64
>>> base64.b32decode(data).decode()
'ThePersistenceOfMemoryDali'
```

**Method 3 — CyberChef:** Recipe `From Base32`.

## Result

`ThePersistenceOfMemoryDali` — *The Persistence of Memory* by **Salvador Dalí**.

## Discussion

Base32 is rarer than Base64, but its identifying signature is the most definitive: **the absence of `0`, `1`, `8`, `9`** in an uppercase alphanumeric string. If a string looks like Base64 but contains `3`, `4`, `7` and only uppercase letters, it is almost certainly Base32.

## Lessons Learned

- The `A–Z` + `2–7` set (without `0/1/8/9`) is the hallmark of Base32.
- String length is always a multiple of 8.
- Base32 is actually easier to identify than Base64 thanks to its restricted character set.

-->