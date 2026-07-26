---
title: "Level 0"
description: Menemukan password yang tersembunyi di dalam kode sumber HTML.
sidebarTitle: "Level 0 — Review Sumber HTML"
---

## Profil

- **Target:** `http://natas0.natas.labs.overthewire.org`
- **Kredensial:** `natas0` / `natas0`

## Pengintaian

Laman menampilkan pesan sederhana tanpa elemen interaktif yang jelas. Langkah awal dalam setiap pengujian keamanan web adalah memeriksa kode sumber HTML, karena pengembang kerap meninggalkan informasi sensitif di dalam komentar atau elemen tersembunyi selama proses pengembangan.

Terdapat beberapa metode untuk mengakses sumber laman:

- Klik kanan → "Inspect" atau "View Page Source"
- Pintasan papan tik `Ctrl+U` (Windows/Linux) atau `Cmd+U` (macOS)
- Menambahkan prefiks `view-source:` sebelum URL

## Analisis

Sumber laman memuat dokumen HTML standar. Di dalam tag `<body>`, terdapat komentar HTML yang kasat mata:

```html
<body>
  <h1>natas0</h1>
  <div id="content">
    You can find the password for the next level in this source.
  </div>
  <!--The password for natas1 adalah ...-->
</body>
```

Komentar HTML tidak ditampilkan pada *rendering* browser tetapi tetap dapat dibaca sepenuhnya melalui sumber laman. Ini merupakan kerentanan kebocoran informasi yang lazim terjadi, di mana pengembang menyisipkan komentar untuk keperluan *debugging* dan lupa menghapusnya sebelum *deployment*.

## Hasil

Komentar tersebut memuat *password* untuk Level 1. Tidak diperlukan vektor serangan tambahan — *flag* diperoleh semata-mata melalui peninjauan sumber laman.
