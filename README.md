# Clash Conecta — Micrositio Institucional

Micrositio SaaS para **Clash Conecta**, plataforma de gestión centralizada de beneficios y promociones para marcas con múltiples puntos de venta.

---

## Demo en vivo

**[Ver micrositio → github.com/agustinorellano/clash.conecta](https://github.com/agustinorellano/clash.conecta)**

---

## Descripción

Clash Conecta permite a marcas como Burger King y Levi's centralizar, ordenar y distribuir sus promociones en todos los puntos de contacto — vidriera, mostrador, app, WhatsApp y redes — desde un único panel.

Este micrositio es el material de presentación comercial de la plataforma, orientado a marcas y comercios interesados en adoptar Clash como solución de comunicación de beneficios.

---

## Estructura del proyecto

```
clash-conecta/
├── index.html          # HTML principal (secciones, contenido, imágenes base64)
├── styles.css          # Estilos globales (~38KB)
├── script.js           # JavaScript vanilla (nav, acordeones, animaciones)
├── assets/
│   ├── brands/         # Logos de marcas (BK, Levi's)
│   └── mockups/        # Fotos reales de materiales físicos BK
├── .gitignore
└── README.md
```

---

## Secciones

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | Hero | Identidad y propuesta de valor |
| 2 | Concepto | Qué es Clash Conecta |
| 3 | Desafíos | Problemas del mercado que resuelve |
| 4 | La Solución | 5 capacidades clave (acordeón interactivo) |
| 5 | El Circuito | Flujo completo en 4 pasos |
| 6 | Gestión | Panel de administración centralizado |
| 7 | Caso Levi's | Ejemplo real de integración |
| 8 | Distribución | Canales de distribución omnicanal |
| 9 | Analytics | Métricas e inteligencia de datos |
| 10 | Caso Burger King | Materiales físicos reales implementados |
| 11 | Planes | Autogestión / Gestión asistida / A medida |
| 12 | Métricas | Números de la plataforma |
| 13 | CTA Final | Llamada a la acción |

---

## Stack técnico

- HTML5 semántico
- CSS3 (custom properties, grid, flexbox, keyframe animations)
- JavaScript vanilla — sin dependencias ni frameworks
- Imágenes embebidas como base64 (autocontenido, sin CDN externo)
- Funciona como archivo estático puro

---

## Ejecutar localmente

```bash
# Opción 1: abrir directamente
open index.html

# Opción 2: servidor local
npx serve .
# o
python -m http.server 8000
```

---

## Deploy en GitHub Pages

1. Ir a **Settings → Pages** en el repositorio
2. Source: `main` branch, directorio raíz `/`
3. Disponible en: `https://agustinorellano.github.io/clash.conecta/`

---

## Contacto Clash

- Web: [clash.com.ar](https://clash.com.ar/inicio/comercio)
- Instagram: [@clash.beneficios](https://www.instagram.com/clash.beneficios/)
