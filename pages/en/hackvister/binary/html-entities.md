---
title: "HTML Entities"
description: Decode numeric character reference data into text — HackVister Binary Encoding challenge.
sidebarTitle: HTML Entities
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

# HTML Entities

## Challenge Profile

- **Module:** Binary Encoding — HackVister
- **Class:** Encoding (reversible)
- **Identifying signature:** `&#N;` pattern
- **Result:** `FishermenAtSeaTurner`

## Concept

An HTML *numeric character reference* represents a character as `&#` followed by a decimal code (or `&#x` for hex) and terminated with `;`. Browsers render these entities as the intended character, so HTML can hide text behind numeric representations.

## Identification

- Many `&#` followed by decimal numbers and `;`.
- Values fall in common character code ranges (e.g. `70` = `F`).

## How It Works

```text
&#70;   &#105;   &#115;
 │       │       │
 70      105     115
 │       │       │
 F       i       s
```

## Solving

**Data:**

```text
&#70;&#105;&#115;&#104;&#101;&#114;&#109;&#101;&#110;&#65;&#116;&#83;&#101;&#97;&#84;&#117;&#114;&#110;&#101;&#114;
```

**Method 1 — Python:**

```python
>>> import re
>>> re.sub(r"&#(\d+);", lambda m: chr(int(m.group(1))), data)
'FishermenAtSeaTurner'
```

**Method 2 — Browser:** Paste the entities into an HTML document; the browser will display the real text.

**Method 3 — CyberChef:** Recipe `HTML Entity` → *Decode HTML Entities*.

## Result

`FishermenAtSeaTurner` — *Fishermen at Sea* by **J. M. W. Turner**.

## Discussion

HTML entities are a common trick to obfuscate text from human eyes while it still renders normally in a browser. In web security, entities are often used to bypass XSS filters — understanding them helps decode obfuscated payloads.

## Lessons Learned

- The `&#N;` pattern maps a decimal code to one Unicode character.
- A single-line `re.sub` in Python decodes it.
- HTML entities also play a role in XSS payload obfuscation.

-->