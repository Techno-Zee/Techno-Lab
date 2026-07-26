---
title: "Level 1"
description: Melewati pembatasan klik kanan untuk melihat sumber halaman.
sidebarTitle: "Level 1 — Bypass Pembatasan Input"
---

## Profil

- **Target:** `http://natas1.natas.labs.overthewire.org`
- **Kredensial:** `natas1` / (*password* dari Level 0)

## Pengintaian

Laman ini tampak serupa dengan Level 0, namun fungsi klik kanan telah dinonaktifkan melalui atribut `oncontextmenu`. Pembatasan ini bersifat *client-side* dan hanya memengaruhi menu konteks — tidak menghalangi akses sumber laman melalui metode alternatif.

## Analisis

Atribut `oncontextmenu` pada tag `<body>` diatur dengan nilai `return false;`, yang mengakibatkan menu konteks default browser tidak muncul saat klik kanan. Mekanisme pengamanan ini sangat lemah karena:

1. Hanya memblokir satu metode akses terhadap sumber laman
2. Dapat dilewati dengan pintasan papan tik atau menu browser
3. Dapat dihindari dengan menonaktifkan JavaScript sepenuhnya

Metode *bypass* yang dapat digunakan:

- **Pintasan papan tik:** `Ctrl+U` / `Cmd+U` untuk membuka sumber laman secara langsung
- **Perangkat pengembang:** `F12` atau `Ctrl+Shift+I` / `Cmd+Opt+I`
- **Prefiks URL:** `view-source:http://natas1.natas.labs.overthewire.org`

## Hasil

Sumber laman memuat komentar HTML yang identik dengan struktur Level 0. *Password* untuk Level 2 berhasil diperoleh. Level ini menegaskan bahwa pembatasan sisi klien tidak memberikan keamanan yang sesungguhnya dan senantiasa dapat diakali melalui fitur *browser* alternatif.
