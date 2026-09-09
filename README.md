# Techno-Lab

> *"Segala sesuatu yang tidak didokumentasikan maka ia tak pernah terjadi."*

**Techno-Lab** adalah *knowledge base* pribadi di bidang keamanan siber yang mendokumentasikan writeup *Capture The Flag* (CTF), riset keamanan, catatan eksploitasi, dan eksperimen teknis dari berbagai sumber.

## Cakupan

Techno-Lab mendokumentasikan tantangan dari berbagai platform dan aktivitas, antara lain:

- **OverTheWire** — *Wargame* progresif (Natas, Leviathan, Krypton, dll.)
- **HackVister** — Latihan pengodean data, kriptografi, dan analisis berkas
- **picoCTF** — Kompetisi CTF berskala global
- **Hack The Box** — Mesin dan tantangan keamanan *real-world*
- **Pengujian Penetrasi Resmi** — *Writeup* dengan izin tertulis
- **Laboratorium Siber Pribadi** — Eksperimen dan simulasi *exploit*

## Daftar Konten

| Bagian | Deskripsi | Status |
|--------|-----------|:------:|
| Jadwal | Jadwal kuliah beserta informasi pendukung kampus | ✅ |
| HackVister — Binary Encoding | Latihan pengodean data dan hash | ✅ |
| OverTheWire — Natas | Wargame keamanan web sisi server (12 level) | ✅ |

## Struktur Proyek

```text
.
├── index.html              # Entry point HTML dengan SEO tags
├── tome.config.js          # Konfigurasi framework Tome
├── pages/                  # Seluruh konten dokumentasi
│   ├── id/                 # Konten bahasa Indonesia (aktif)
│   │   ├── index.md
│   │   ├── jadwal.md
│   │   ├── hackvister/
│   │   ├── overthewire/
│   │   └── ...
│   └── en/                 # Konten bahasa Inggris (dinonaktifkan sementara)
│       ├── index.md
│       ├── hackvister/
│       ├── overthewire/
│       └── ...
├── public/                 # Aset statis
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── Jadwal/             # Gambar pendukung halaman jadwal
│   └── HackVister/         # Data & screenshot tantangan HackVister
├── styles/                 # Kustomisasi gaya
├── .tome/
│   └── entry.tsx           # Skrip entry Tome
└── out/                    # Hasil build
```

## Teknologi

| Teknologi | Kegunaan |
|-----------|----------|
| [Tome](https://tome.dev) | Framework dokumentasi |
| Markdown | Penulisan seluruh materi |
| GitHub | *Version control* |
| Netlify | *Deployment* |

## Mulai

```bash
npm install
npm run dev      # Development server
npm run build    # Build produksi
npm run deploy   # Deploy ke Netlify
```

## Prinsip Dokumentasi

- Belajar melalui praktik, bukan sekadar teori
- Menjelaskan proses, bukan hanya hasil akhir
- Mencatat kesalahan agar tidak terulang
- Mengutamakan pemahaman dibanding menghafal langkah
- Mendokumentasikan setiap kemajuan, sekecil apa pun

## Lisensi

Seluruh materi ditulis untuk tujuan edukasi dan dokumentasi pribadi. Pengujian dilakukan pada lingkungan laboratorium atau sistem yang telah mendapatkan izin.