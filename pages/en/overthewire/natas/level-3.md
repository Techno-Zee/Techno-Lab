---
title: "Level 3"
description: Leveraging robots.txt to discover hidden directories.
sidebarTitle: "Level 3 — Robots.txt Enumeration"
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

## Profile

- **Target:** `http://natas3.natas.labs.overthewire.org`
- **Credentials:** `natas3` / (password from Level 2)

## Reconnaissance

The page source reveals an empty `<div id="content">` with no helpful comments. The hint suggests that search engines like Google might have indexed something unintended.

A common tool for controlling search engine crawlers is `robots.txt`, a file placed at the root of a domain that instructs crawlers which paths to avoid. Ironically, this file often reveals the very paths the developer intended to hide.

## Analysis

Fetching `/robots.txt` yields:

```text
User-agent: *
Disallow: /s3cr3t/
```

The `Disallow` directive tells crawlers not to index `/s3cr3t/`. However, this is a security-through-obscurity measure — anyone who knows to check `robots.txt` can see exactly what is being hidden.

## Exploitation

Navigating to `/s3cr3t/` reveals a directory listing containing `users.txt`. Accessing this file returns the password for Level 4.

## Remediation

- Do not rely on `robots.txt` for access control — it is a crawl directive, not a security mechanism
- Sensitive directories should be protected by authentication
- Use server-level access controls rather than relying on obscurity

## References

- [Google robots.txt documentation](https://developers.google.com/search/docs/crawling-indexing/robots/intro)

-->
