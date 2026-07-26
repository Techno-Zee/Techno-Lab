---
title: "Level 1"
description: Bypassing client-side input restrictions to view the page source.
sidebarTitle: "Level 1 — Input Restriction Bypass"
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

## Profile

- **Target:** `http://natas1.natas.labs.overthewire.org`
- **Credentials:** `natas1` / (password from Level 0)

## Reconnaissance

The page appears similar to Level 0 but right-clicking is disabled via the `oncontextmenu` event attribute. This is a client-side restriction that only affects the context menu — it does not prevent source access through other methods.

## Analysis

The `oncontextmenu` attribute on the `<body>` tag is set to `return false;`, which prevents the browser's default right-click context menu from appearing. This is a weak security measure because:

1. It only blocks one method of accessing the source
2. It is trivially bypassed by keyboard shortcuts or browser menus
3. It can also be bypassed by disabling JavaScript entirely

Bypass methods include:

- **Keyboard shortcut:** `Ctrl+U` / `Cmd+U` opens the raw source directly
- **Developer tools:** `F12` or `Ctrl+Shift+I` / `Cmd+Opt+I`
- **URL prefix:** `view-source:http://natas1.natas.labs.overthewire.org`

## Result

The source contains an HTML comment identical in structure to Level 0:

```html
<!--The password for natas2 is ...-->
```

The password for Level 2 is obtained. This level demonstrates that client-side restrictions provide no real security and can always be circumvented through alternative browser features.

-->
