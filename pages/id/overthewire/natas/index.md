---
title: "Natas — Ringkasan"
description: Wargame Natas dari OverTheWire — tantangan keamanan web sisi server.
sidebarTitle: Ringkasan
---

[Natas](https://overthewire.org/wargames/natas/) adalah wargame yang mengajarkan dasar-dasar keamanan web sisi server. Setiap level menghadirkan aplikasi web dengan kerentanan yang berbeda. Tujuannya adalah menemukan password untuk level berikutnya, yang selalu tersembunyi di dalam tantangan saat ini.

## Daftar Level

| # | Level | Teknik Utama |
|---|-------|--------------|
| 0 | [Level 0](/id/overthewire/natas/level-0) | HTML Source Review |
| 1 | [Level 1](/id/overthewire/natas/level-1) | Input Restriction Bypass |
| 2 | [Level 2](/id/overthewire/natas/level-2) | Directory Traversal |
| 3 | [Level 3](/id/overthewire/natas/level-3) | Robots.txt Enumeration |
| 4 | [Level 4](/id/overthewire/natas/level-4) | Referer Header Spoofing |
| 5 | [Level 5](/id/overthewire/natas/level-5) | Cookie Manipulation |
| 6 | [Level 6](/id/overthewire/natas/level-6) | Source Code Disclosure |
| 7 | [Level 7](/id/overthewire/natas/level-7) | Local File Inclusion |
| 8 | [Level 8](/id/overthewire/natas/level-8) | Encoded Secret Reversal |
| 9 | [Level 9](/id/overthewire/natas/level-9) | Command Injection |
| 10 | [Level 10](/id/overthewire/natas/level-10) | Input Filter Bypass |
| 11 | [Level 11](/id/overthewire/natas/level-11) | XOR Cryptanalysis |

## Memulai

Setiap tantangan berada di URL yang dapat diprediksi:

```
http://natas{X}.natas.labs.overthewire.org
```

Kredensial default untuk Level 0 adalah `natas0` / `natas0`. Dari sana, setiap level akan mengungkapkan kredensial yang diperlukan untuk level berikutnya.

## Tools yang Digunakan

- Browser developer tools (inspect element, network tab)
- Burp Suite Community Edition (proxy, repeater)
- Command-line tools (curl, base64, PHP CLI)
