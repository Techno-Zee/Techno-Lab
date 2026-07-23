---
title: "Level 0"
description: Menemukan password yang tersembunyi di dalam kode sumber HTML.
sidebarTitle: "Level 0 — Review Sumber HTML"
---

## Profil

- **Target:** `http://natas0.natas.labs.overthewire.org`
- **Kredensial:** `natas0` / `natas0`

## Pengintaian

Halaman menampilkan pesan sederhana tanpa elemen interaktif yang jelas. Langkah pertama dalam setiap pengujian web adalah memeriksa kode sumber HTML, karena pengembang sering meninggalkan informasi sensitif di komentar atau elemen tersembunyi selama pengembangan.

Melihat sumber halaman dapat dilakukan melalui:

- Klik kanan → "Inspect" atau "View Page Source"
- Pintasan keyboard `Ctrl+U` (Windows/Linux) atau `Cmd+U` (macOS)
- Menambahkan `view-source:` di depan URL

## Analisis

Sumber halaman berisi dokumen HTML standar. Di dalam `<body>`, terdapat komentar HTML yang terlihat:

```html
<body>
  <h1>natas0</h1>
  <div id="content">
    You can find the password for the next level in this source.
  </div>
  <!--The password for natas1 adalah ...-->
</body>
```

Komentar HTML tidak ditampilkan di rendering tetapi tetap dapat dibaca sepenuhnya di sumber. Ini adalah kerentanan kebocoran informasi umum di mana pengembang menggunakan komentar untuk debugging dan lupa menghapusnya sebelum deployment.

## Hasil

Komentar tersebut berisi password untuk Level 1. Tidak diperlukan vektor serangan lain — flag diperoleh murni melalui review sumber.
