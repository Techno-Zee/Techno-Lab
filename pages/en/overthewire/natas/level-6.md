---
title: "Level 6"
description: Reading included PHP source files that expose application secrets.
sidebarTitle: "Level 6 — Source Code Disclosure"
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

## Profile

- **Target:** `http://natas6.natas.labs.overthewire.org`
- **Credentials:** `natas6` / (password from Level 5)

## Reconnaissance

The page presents an input field with a "Submit Query" button. Examining the HTML source reveals a PHP include directive:

```php
include "includes/secret.inc";
```

A form posts the input to `index.php` where it is compared against a value from the included file.

## Analysis

PHP's `include()` statement loads and evaluates a file at runtime. The referenced file `includes/secret.inc` is not rendered as PHP but is accessible as a raw text file if requested directly, because the `.inc` extension is not typically associated with PHP processing by the web server.

## Exploitation

Requesting `http://natas6.natas.labs.overthewire.org/includes/secret.inc` directly returns the file contents:

```php
<?
$secret = "FOEIUWGHFEEUHOFUOIU";
?>
```

Submitting this secret value through the form triggers the "Access granted" response, which reveals the password for Level 7.

## Remediation

- Store sensitive configuration outside the web root
- Use `.php` extension for included files so they are processed rather than served as text
- Avoid hardcoding secrets in source files

## References

- [OWASP: Sensitive Data Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure)

-->
