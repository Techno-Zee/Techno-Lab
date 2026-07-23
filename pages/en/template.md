---
title: Writeup Template
description: Template for writing consistent CTF writeups.
hidden: true
---

# [Challenge Name]

| Attribute | Value |
|-----------|-------|
| **CTF** | [CTF Name] |
| **Category** | [Web / Reverse / Crypto / PWN / Forensics / OSINT] |
| **Difficulty** | [Easy / Medium / Hard / Insane] |
| **Target** | [URL or binary] |

## Summary

A concise overview of the challenge and the approach used to solve it.

## Reconnaissance

Describe the information-gathering phase. What tools and techniques were used to map out the attack surface?

- Source code review — interesting endpoints, parameters, or comments
- Directory enumeration — hidden paths or files
- Technology fingerprinting — server headers, framework signatures
- Network scanning — open ports, services

## Vulnerability Analysis

Identify and explain the root cause.

```
Type:       [SQL injection / XSS / LFI / RCE / IDOR / etc.]
Location:   [which component or parameter]
Root Cause: [why does this vulnerability exist — missing validation, unsafe deserialization, etc.]
CVSS:       [optional severity score]
```

## Exploitation

Walk through the exploitation step by step. Include commands, requests, and code.

### Step 1 — [Phase Name]

```bash
# commands used
```

```http
# relevant HTTP request/response
```

### Step 2 — [Phase Name]

```python
# exploit script if applicable
```

### Result

Describe what a successful exploitation yields.

## Remediation

Explain how this vulnerability should be fixed in production.

- Input sanitization and validation
- Principle of least privilege
- Proper authentication and authorization checks
- Security headers and configurations

## References

- [Challenge URL]
- [OWASP entry for this vulnerability class]
- [Related CVEs or blog posts]
