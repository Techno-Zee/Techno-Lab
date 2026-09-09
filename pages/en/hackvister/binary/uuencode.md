---
title: "UUencode"
description: Decode UUencode data into text — HackVister Binary Encoding challenge.
sidebarTitle: UUencode
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

# UUencode

## Challenge Profile

- **Module:** Binary Encoding — HackVister
- **Class:** Encoding (reversible)
- **Identifying signature:** `begin`/`end` block
- **Result:** `TheKissKlimt`

## Concept

UUencode (*Unix-to-Unix encoding*) is a legacy scheme for transmitting binary files as 7-bit ASCII text. Its format begins with a `begin <mode> <filename>` line, followed by data lines (each prefixed with a length character), and ends with an `end` line. The filename in this example (`odt_uuencoding_file.dat`) marks an OpenDocument format.

## Identification

- Block begins with the keyword `begin` followed by a mode (e.g. `0744`) and a filename.
- Ends with an `end` line.
- Data lines contain only printable ASCII characters.

## How It Works

UUencode adds 32 to each byte (so values `0–63` become printable characters `' '`–`_`). Each data line starts with a character storing the line length:

```text
,5&AE2VES<TML:6UT
└┘ └────────────┘
len     13-byte data
```

## Solving

**Data:**

```text
begin 0744 odt_uuencoding_file.dat
,5&AE2VES<TML:6UT
`
end
```

**Method 1 — `uudecode`:**

```bash
printf 'begin 0744 odt_uuencoding_file.dat\n,5&AE2VES<TML:6UT\n`\nend\n' | uudecode -o -
```

**Method 2 — Python (`binascii`):**

```python
>>> import binascii
>>> binascii.a2b_uu(",5&AE2VES<TML:6UT\n")
b'TheKissKlimt'
```

**Method 3 — CyberChef:** Recipe `From UUencode`.

## Result

`TheKissKlimt` — *The Kiss* by **Gustav Klimt**.

## Discussion

UUencode is rarely used in the modern world, but recognizing the `begin ... end` format matters because similar wrapping formats are used by other schemes. When encountering a block with a header and footer, read the whole format first instead of only decoding the body.

## Lessons Learned

- A `begin <mode> <name>` ... `end` block is the definitive UUencode signature.
- Each data line starts with a length character; every byte is offset by 32.
- `uudecode` and `binascii.a2b_uu()` decode it automatically.

-->