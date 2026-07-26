---
title: "Level 10"
description: Bypassing input filters by exploiting grep's multi-file matching behavior.
sidebarTitle: "Level 10 — Input Filter Bypass"
hidden: true
---

<!-- English content is temporarily disabled. Please refer to the Indonesian (id) version.

## Profile

- **Target:** `http://natas10.natas.labs.overthewire.org`
- **Credentials:** `natas10` / (password from Level 9)

## Reconnaissance

The source code is similar to Level 9, but with added input filtering:

```php
$key = $_REQUEST["needle"];

if($key != "") {
    if(preg_match('/[;|&]/', $key)) {
        print "Input contains an illegal character!";
    } else {
        passthru("grep -i $key dictionary.txt");
    }
}
```

Shell metacharacters (`;`, `|`, `&`) are blocked by the regex filter. The command injection approach from Level 9 no longer works.

## Analysis

While shell metacharacters are filtered, the `grep` command itself is still fed unsanitized input. `grep` accepts a pattern and one or more file paths:

```bash
grep [options] pattern [file...]
```

If the input contains a pattern that matches all lines, and additional file paths are provided, `grep` will search those files too. Lines matched are printed in the output, effectively leaking the file contents.

The payload must satisfy two conditions:

1. The pattern must match lines in `dictionary.txt` (to avoid empty output)
2. Additional file paths must be appended to include the target password file

## Exploitation

Since `#` comments out the rest of the command in bash, a payload like:

```
.* /etc/natas_webpass/natas10 #
```

Causes the following effective command:

```bash
grep -i .* /etc/natas_webpass/natas10 # dictionary.txt
```

The `.*` pattern matches all lines. `grep` searches both `/etc/natas_webpass/natas10` and `dictionary.txt`, but everything after `#` is treated as a comment by the shell.

Alternative working payloads:

- `"" /etc/natas_webpass/natas10 /` — empty pattern matches everything
- `.* /etc/natas_webpass/natas10` — explicit file path

## Remediation

- Use `escapeshellarg()` to treat user input as a single argument rather than allowing it to inject additional arguments
- Avoid shell execution functions entirely when possible
- Implement strict whitelists for allowed patterns

## References

- [OWASP: Command Injection — Filter Bypass](https://owasp.org/www-community/attacks/Command_Injection)
- [PHP: preg_match()](https://www.php.net/manual/en/function.preg-match.php)

-->
