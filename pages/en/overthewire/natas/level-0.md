---
title: "Level 0"
description: Locating a password hidden within HTML source code.
sidebarTitle: "Level 0 — HTML Source Review"
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

## Profile

- **Target:** `http://natas0.natas.labs.overthewire.org`
- **Credentials:** `natas0` / `natas0`

## Reconnaissance

The landing page displays a simple message but offers no obvious interactive elements. The first step in any web assessment is to examine the HTML source, as developers often leave sensitive information in comments or hidden elements during development.

Viewing the page source can be done through:

- Right-click → "Inspect" or "View Page Source"
- Keyboard shortcut `Ctrl+U` (Windows/Linux) or `Cmd+U` (macOS)
- Prepending `view-source:` to the URL

## Analysis

The page source contains a standard HTML document. Within the `<body>` section, an HTML comment is visible:

```html
<body>
  <h1>natas0</h1>
  <div id="content">
    You can find the password for the next level in this source.
  </div>
  <!--The password for natas1 is ...-->
</body>
```

HTML comments are stripped from rendering but remain fully readable in the source. This is a common information disclosure vulnerability where developers use comments for debugging and forget to remove them before deployment.

## Result

The comment contains the password for Level 1. No other attack vectors are necessary — the flag is obtained purely through source review.

-->
