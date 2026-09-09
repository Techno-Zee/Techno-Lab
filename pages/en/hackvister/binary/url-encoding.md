---
title: "URL Encoding"
description: Decode percent-encoding data into text — HackVister Binary Encoding challenge.
sidebarTitle: URL Encoding
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

# URL Encoding

## Challenge Profile

- **Module:** Binary Encoding — HackVister
- **Class:** Encoding (reversible)
- **Identifying signature:** `%XX` pattern
- **Result:** `TheScreamMunch`

## Concept

URL encoding (*percent-encoding*) replaces characters that are unsafe in a URL with `%` followed by two hex digits (their ASCII value). Safe characters such as letters and digits are usually left as-is, while spaces become `%20` and special characters become `%XX`.

## Identification

- Many `%` followed by two hex digits (`%54`, `%65`, etc.).
- The rest of the string is ordinary alphanumeric text.

## How It Works

```text
%54   %68   %65
 │     │     │
 0x54  0x68  0x65
 │     │     │
 T     h     e
```

## Solving

**Data:**

```text
%54%68%65%53%63%72%65%61%6D%4D%75%6E%63%68
```

**Method 1 — Python:**

```bash
echo "%54%68%65%53%63%72%65%61%6D%4D%75%6E%63%68" | \
  python3 -c "import sys,urllib.parse; print(urllib.parse.unquote(sys.stdin.read()))"
```

**Method 2 — manual decode (`sed` + `xxd`):**

Remove the `%`, then treat the remainder as hex:

```bash
echo "%54%68%65%53%63%72%65%61%6D%4D%75%6E%63%68" | tr -d '%' | xxd -r -p
```

**Method 3 — CyberChef:** Recipe `URL Decode`.

## Result

`TheScreamMunch` — *The Scream* by **Edvard Munch**.

## Discussion

The `%XX` pattern is effectively the same as the hex representation of each byte — that is why removing `%` and decoding as hex also works. This insight shows that encoding schemes are often interrelated and can be solved with the same approach.

## Lessons Learned

- The `%XX` pattern maps one byte to two hex characters.
- Strip the `%` and decode as hex for a fast manual decode.
- Seemingly different schemes often differ only in their separator character.

-->