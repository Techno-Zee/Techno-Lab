---
title: "Hex"
description: Dekode data heksadesimal menjadi teks — tantangan Binary Encoding HackVister.
sidebarTitle: Hex
---

# Hex

## Profil Tantangan

- **Modul:** Binary Encoding — HackVister
- **Kelas:** Encoding (reversibel)
- **Ciri identifikasi:** `0–9 A–F`, panjang genap
- **Hasil:** `TheBirthOfVenusBotticelli`

## Konsep

Heksadesimal (basis 16) merepresentasikan setiap *byte* sebagai dua karakter dari himpunan `0–9 A–F`. Karena setiap *byte* menjadi dua karakter, panjang string hex selalu genap. Sering diberi prefiks `0x` untuk menandai basisnya.

## Identifikasi

- Hanya mengandung `0–9` dan `A–F` (atau `a–f`).
- Panjang string selalu genap (kecuali ada prefiks `0x`).
- Tidak ada karakter di luar himpunan hex.

## Cara Kerja

```text
54    68    65    42
 │     │     │     │
 84    104   101   66   →  T   h   e   B
```

Setiap pasangan karakter hex dipetakan langsung ke nilai *byte*-nya.

## Penyelesaian

**Data:**

```text
54686542697274684F6656656E7573426F74746963656C6C69
```

**Metode 1 — `xxd`:**

```bash
echo "54686542697274684F6656656E7573426F74746963656C6C69" | xxd -r -p
```

**Metode 2 — Python:**

```python
>>> bytes.fromhex(data).decode()
'TheBirthOfVenusBotticelli'
```

**Metode 3 — CyberChef:** Recipe `From Hex`.

## Hasil

`TheBirthOfVenusBotticelli` — lukisan *The Birth of Venus* karya **Sandro Botticelli**.

## Pembahasan

Hex adalah format "perantara" paling umum: hasil dekode dari base64, hash, atau data biner hampir selalu ditampilkan sebagai hex. Menguasai konversi hex ⇄ ASCII memperlancar hampir seluruh analisis pengodean.

## Pelajaran

- Dua karakter hex selalu mewakili satu *byte*.
- Panjang string yang genap menjadi syarat penting validasi data hex.
- `xxd -r -p` adalah alat paling cepat untuk konversi hex ke teks.