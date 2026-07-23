---
title: "Level 1"
description: Melewati pembatasan klik kanan untuk melihat sumber halaman.
sidebarTitle: "Level 1 — Bypass Pembatasan Input"
---

## Profil

- **Target:** `http://natas1.natas.labs.overthewire.org`
- **Kredensial:** `natas1` / (password dari Level 0)

## Pengintaian

Halaman terlihat mirip dengan Level 0 tetapi klik kanan dinonaktifkan melalui atribut `oncontextmenu`. Ini adalah pembatasan sisi klien yang hanya memengaruhi menu konteks — tidak mencegah akses sumber melalui metode lain.

## Analisis

Atribut `oncontextmenu` pada tag `<body>` diatur ke `return false;`, yang mencegah menu konteks klik kanan browser muncul. Ini adalah langkah keamanan lemah karena:

1. Hanya memblokir satu metode akses sumber
2. Dapat dilewati dengan pintasan keyboard atau menu browser
3. Juga bisa dilewati dengan menonaktifkan JavaScript sepenuhnya

Metode bypass:

- **Pintasan keyboard:** `Ctrl+U` / `Cmd+U` membuka sumber langsung
- **Developer tools:** `F12` atau `Ctrl+Shift+I` / `Cmd+Opt+I`
- **Awalan URL:** `view-source:http://natas1.natas.labs.overthewire.org`

## Hasil

Sumber berisi komentar HTML yang identik dengan Level 0. Password untuk Level 2 diperoleh. Level ini menunjukkan bahwa pembatasan sisi klien tidak memberikan keamanan nyata dan selalu dapat dihindari melalui fitur browser alternatif.
