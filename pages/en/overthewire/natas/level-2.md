---
title: "Level 2"
description: Enumerating directories and files through path traversal.
sidebarTitle: "Level 2 — Directory Traversal"
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

## Profile

- **Target:** `http://natas2.natas.labs.overthewire.org`
- **Credentials:** `natas2` / (password from Level 1)

## Reconnaissance

The page displays the text "There is nothing on this page" alongside an image. Examining the HTML source reveals an `<img>` tag:

```html
<div id="content">
  There is nothing on this page
  <img src="files/pixel.png" />
</div>
```

The image is loaded from a `files/` subdirectory, which suggests the server has directory-based file serving.

## Analysis

The presence of a `files/` directory raises the possibility of directory listing being enabled. Directory listing is a server configuration that, when enabled, displays all files within a directory when no index file (e.g., `index.html`) is present.

Navigating to `http://natas2.natas.labs.overthewire.org/files/` confirms directory listing is active. The directory contains two files:

- `pixel.png` — a trivial 1×1 pixel image
- `users.txt` — a file whose purpose is self-evident

This is a server misconfiguration where:

1. The `files/` directory has directory listing enabled
2. Sensitive data (`users.txt`) is stored in a web-accessible location
3. No access controls protect the file

## Exploitation

Accessing `/files/users.txt` returns the contents, which include the password for Level 3.

## Remediation

- Disable directory listing on the web server
- Store sensitive files outside the web root
- Implement access controls for protected resources

-->
