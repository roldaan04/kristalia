# Kristalia — Web corporativa

Web de empresa de limpieza profesional de cristales. Fase 1: home completa + página Quiénes somos.

**Stack:** React 19 · Vite 8 · React Router 7 · CSS tradicional organizado · JavaScript

---

## Arrancar el proyecto

```bash
cd kristalia
npm install
npm run dev        # http://localhost:5173
npm run build      # build de producción en /dist
npm run preview    # previsualizar el build
```

---

## Estructura de archivos

```
kristalia/
├── index.html                        # HTML raíz — Google Fonts, meta SEO, título
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                      # Arranque — BrowserRouter + React root
    ├── App.jsx                       # Rutas + Header/Footer persistentes
    ├── index.css                     # Importa variables.css y global.css
    │
    ├── styles/
    │   ├── variables.css             # Variables CSS de todo el proyecto
    │   └── global.css                # Reset, tipografía base, clases de utilidad
    │
    ├── utils/
    │   └── constants.js              # WhatsApp, teléfono, email, nav links
    │
    ├── data/
    │   ├── services.js               # 6 servicios (home) + lista 12 servicios completa
    │   ├── benefits.js               # 4 ventajas competitivas
    │   ├── faqs.js                   # 6 preguntas frecuentes
    │   └── testimonials.js           # 3 testimonios
    │
    ├── assets/
    │   ├── logo.png                  # Logo corporativo
    │   ├── hero.png                  # Ilustración de cristal (decorativa)
    │   ├── cristales/
    │   │   ├── cristalera.jpeg       # Hero home, galería, intro Quiénes somos
    │   │   ├── cristalera2.jpeg      # Hero Quiénes somos, galería, servicios
    │   │   └── cristalera3.jpeg      # Card servicio Mantenimiento, galería
    │   ├── escaparates/
    │   │   └── escaparate.jpeg       # BusinessSection fondo, card Escaparates, galería
    │   └── paneles-solares/
    │       ├── paneles.jpeg          # Card servicio Paneles solares
    │       └── paneles2.jpeg         # Reservada para página de servicios (Fase 2)
    │
    ├── components/
    │   ├── ui/
    │   │   ├── Button.jsx            # Botón reutilizable multi-variante
    │   │   └── Button.css
    │   │
    │   ├── layout/
    │   │   ├── Header.jsx            # Cabecera fija con scroll-aware y menú móvil
    │   │   ├── Header.css
    │   │   ├── Footer.jsx            # Footer navy con 4 columnas
    │   │   └── Footer.css
    │   │
    │   └── home/
    │       ├── Hero.jsx              # Sección principal — full viewport
    │       ├── Hero.css
    │       ├── ServicesSection.jsx   # Grid 3x2 de servicios con foto
    │       ├── ServicesSection.css
    │       ├── BusinessSection.jsx   # Foto escaparate + stats de confianza
    │       ├── BusinessSection.css
    │       ├── BenefitsSection.jsx   # 4 ventajas en grid 2x2
    │       ├── BenefitsSection.css
    │       ├── ProcessSection.jsx    # 5 pasos del proceso de trabajo
    │       ├── ProcessSection.css
    │       ├── GallerySection.jsx    # Mosaico asimétrico 4 fotos
    │       ├── GallerySection.css
    │       ├── TestimonialsSection.jsx  # 3 testimonios estilo editorial
    │       ├── TestimonialsSection.css
    │       ├── FaqSection.jsx        # Acordeón de preguntas frecuentes
    │       ├── FaqSection.css
    │       ├── ContactSection.jsx    # Formulario de presupuesto (sin backend)
    │       └── ContactSection.css
    │
    └── pages/
        ├── HomePage.jsx              # Monta todas las secciones de la home en orden
        ├── QuienesSomosPage.jsx      # Página independiente — hero + valores + CTA
        └── QuienesSomosPage.css
```

---

## Rutas

| Ruta | Página | Descripción |
|---|---|---|
| `/` | HomePage | Home completa con todas las secciones |
| `/quienes-somos` | QuienesSomosPage | Página sobre la empresa |

### Anclas de la home

Los enlaces del menú "Servicios" y "Contacto" hacen scroll a:

| Ancla | Sección |
|---|---|
| `#inicio` | Hero |
| `#servicios` | ServicesSection |
| `#contacto` | ContactSection |

Si el usuario está en otra página al pulsar "Servicios" o "Contacto", el Header navega primero a `/` y luego hace scroll al id con un pequeño delay.

---

## Componentes en detalle

### `Button.jsx`

Botón polivalente. Se renderiza como `<button>` o `<a>` si recibe `href`.

**Variantes:**

| Valor | Aspecto | Uso |
|---|---|---|
| `primary` | Navy relleno | Acciones secundarias |
| `outline` | Borde navy, fondo transparente | Sobre fondos blancos |
| `outline-light` | Borde blanco, fondo transparente | Sobre fondos oscuros o fotos |
| `whatsapp` | Verde WhatsApp | Siempre que enlace a WhatsApp |
| `gold` | Dorado con texto navy | CTA principal de cada sección |

**Tamaños:** `sm`, `md`, `lg`

```jsx
<Button variant="gold" size="lg" onClick={fn}>
  Solicitar presupuesto
</Button>

<Button variant="whatsapp" size="md" href={WHATSAPP_URL} target="_blank">
  WhatsApp
</Button>
```

---

### `Header.jsx`

Cabecera fija (`position: fixed`, `z-index: 100`) con tres estados:

1. **Transparente** — home + `scrollY < 40px`. Texto nav en blanco para contraste con el hero.
2. **Sólido** — al hacer scroll o en cualquier página interior. Fondo blanco con sombra.
3. **Menú móvil** — hamburger activo en `≤ 900px`. Bloquea `overflow` del body mientras está abierto.

---

### `Hero.jsx`

- Fondo `cristalera.jpeg` a pantalla completa (`min-height: 100vh`)
- Overlay degradado: `rgba(navy, 0.82)` a la izquierda, transparente a la derecha
- Texto alineado a la izquierda, no centrado
- Tres CTAs: presupuesto (gold), ver servicios (outline-light), WhatsApp (verde)
- Indicador de scroll animado (línea con pulso CSS)

---

### `ServicesSection.jsx`

Lee `data/services.js`. Grid 3 columnas (2 en tablet, 1 en móvil). Cada servicio: foto real con aspect-ratio 4:3, número en dorado, título y descripción. Zoom en hover.

---

### `BusinessSection.jsx`

Dos bloques:
1. **Imagen a sangre** — `escaparate.jpeg` + overlay navy + mensaje de impacto + 2 CTAs. Parallax ligero en desktop (`background-attachment: fixed`).
2. **Banda de stats** — 4 números en dorado: `+200 clientes`, `+8 años`, `100% presupuesto sin compromiso`, `24h respuesta`.

---

### `BenefitsSection.jsx`

Lee `data/benefits.js`. Grid 2x2 sobre fondo plata. Cada bloque: número decorativo en dorado semitransparente, título, descripción. Hover: borde izquierdo dorado de 3px.

---

### `ProcessSection.jsx`

5 pasos hardcoded (sin archivo de datos — son pocas líneas que no cambian).
- Desktop: disposición horizontal con línea conectora entre círculos numerados.
- Móvil: vertical con conector lateral izquierdo.

---

### `GallerySection.jsx`

CSS Grid asimétrico de 3 columnas, 2 filas:
- Izquierda (1.6fr, 2 filas): `cristalera.jpeg`
- Centro (1fr, 2 filas): `cristalera2.jpeg`
- Derecha (1fr): `escaparate.jpeg` arriba, `cristalera3.jpeg` abajo

Hover: zoom + caption con gradiente.

---

### `TestimonialsSection.jsx`

Lee `data/testimonials.js`. Tres columnas en desktop, una en móvil. Comilla tipográfica grande en dorado, texto en cursiva, nombre + cargo. Sin estrellas, sin avatares, sin badges.

---

### `FaqSection.jsx`

Dos columnas: sidebar sticky (encabezado) a la izquierda, acordeón a la derecha. Estado con `useState`. Atributo `hidden` en la respuesta para accesibilidad. `aria-expanded` en el botón.

---

### `ContactSection.jsx`

Dos columnas: datos de contacto (izquierda) + formulario sobre fondo plata (derecha).

**Campos:** nombre, empresa, teléfono, email, tipo de cliente (select), tipo de servicio (select), ubicación, mensaje, checkbox privacidad.

**Sin backend conectado.** El `handleSubmit` solo activa `setSubmitted(true)` y muestra pantalla de confirmación. Preparado para Fase 3 (React Hook Form + Zod + endpoint de envío).

---

### `QuienesSomosPage.jsx`

Cuatro secciones:

1. **Hero** — `cristalera2.jpeg`, overlay desde abajo, breadcrumb, título grande "Kristalia."
2. **Intro** — texto en dos columnas + foto `cristalera.jpeg`
3. **Valores** — grid 4 columnas (transparencia, profesionalidad, puntualidad, compromiso)
4. **Tipos de cliente** — grid 2x2 (empresas, locales, comunidades, particulares)
5. **CTA final** — fondo navy + `hero.png` decorativo semitransparente (8% opacidad) + 2 botones

---

## Estilos

### Variables CSS principales

Todas en `src/styles/variables.css`. Para cambiar un color, solo tocar ese archivo.

```css
--color-navy:   #1a2744   /* Principal — botones, textos, footer */
--color-blue:   #2d4a8a   /* Secundario — hover */
--color-gold:   #c9a84c   /* Acento — números, divisores, borders */
--color-silver: #e8edf2   /* Fondo alternado */
--color-sky:    #b8d4e8   /* Suave — bordes, tintes */

--font-heading: 'Playfair Display', Georgia, serif
--font-body:    'DM Sans', system-ui, sans-serif

--container-max: 1240px
--header-height: 80px
```

### Clases de utilidad globales

Definidas en `src/styles/global.css`:

| Clase | Efecto |
|---|---|
| `.container` | max-width 1240px, centrado, padding lateral adaptativo |
| `.section` | padding vertical 6rem |
| `.section-tag` | Etiqueta pequeña en dorado, uppercase, letter-spacing |
| `.section-title` | H2 grande en Playfair Display navy |
| `.section-subtitle` | Párrafo de apoyo en color muted |
| `.section-header--center` | Encabezado centrado con max-width 640px |
| `.gold-line` | Línea decorativa dorada 48x2px |
| `.gold-line--center` | Variante centrada |
| `.bg-alt` | Fondo plata (`--color-silver`) |
| `.bg-dark` | Fondo navy con texto blanco |

---

## Imágenes — dónde se usa cada una

| Archivo | Componentes que la usan |
|---|---|
| `logo.png` | Header (color normal), Footer (filtro blanco) |
| `hero.png` | QuienesSomosPage (decorativa, 8% opacidad) |
| `cristalera.jpeg` | Hero (fondo), ServicesSection (card Comunidades), GallerySection, QuienesSomosPage (intro) |
| `cristalera2.jpeg` | ServicesSection (cards Altura y Fachadas), GallerySection, QuienesSomosPage (hero) |
| `cristalera3.jpeg` | ServicesSection (card Mantenimiento), GallerySection |
| `escaparate.jpeg` | BusinessSection (fondo), ServicesSection (card Escaparates), GallerySection |
| `paneles.jpeg` | ServicesSection (card Paneles) |
| `paneles2.jpeg` | Sin usar — reservada para Fase 2 (página de servicios) |

---

## Configuración a actualizar

### Datos de contacto y WhatsApp

Editar `src/utils/constants.js`:

```js
// Número sin +, sin espacios (código de país incluido)
export const WHATSAPP_NUMBER = '34600000000';

// Mensaje que aparece pre-escrito al abrir WhatsApp
export const WHATSAPP_MESSAGE = encodeURIComponent('Hola, me gustaría...');

export const PHONE_DISPLAY = '+34 614 744 754';
export const EMAIL = 'info@kristalia.es';
export const ADDRESS = 'Madrid, España';
```

---

## Dependencias

| Paquete | Versión | Rol |
|---|---|---|
| react | ^19.2.6 | Framework UI |
| react-dom | ^19.2.6 | Renderizado al DOM |
| react-router-dom | ^7.18.0 | Routing cliente |
| vite | ^8.0.12 | Build tool + HMR |
| @vitejs/plugin-react | ^6.0.1 | Soporte JSX en Vite |

---

## Roadmap

### Fase 1 — completada
- [x] Home completa (hero, servicios, empresas, ventajas, proceso, galería, testimonios, FAQ, contacto)
- [x] Página Quiénes somos
- [x] Header con scroll-aware y menú móvil
- [x] Footer profesional
- [x] Diseño responsive
- [x] React Router

### Fase 2 — pendiente
- [ ] Página de servicios completa (`/servicios`)
- [ ] Página de contacto independiente (`/contacto`)
- [ ] Páginas legales (privacidad, aviso legal, cookies)

### Fase 3 — pendiente
- [ ] Backend para formulario de contacto
- [ ] Envío de email (Resend, SendGrid u otro)
- [ ] Validación con React Hook Form + Zod

### Fase 4 — pendiente
- [ ] Registro e inicio de sesión
- [ ] Panel de usuario
- [ ] Historial de presupuestos solicitados

### Fase 5 — pendiente
- [ ] Motor de presupuesto orientativo (reglas de baremo)
- [ ] Subida de imágenes del espacio
- [ ] Análisis asistido por IA
- [ ] Generación de propuesta en PDF

---

## Convenciones del proyecto

- Un archivo `.css` por componente, importado directamente en el `.jsx`.
- Los datos de contenido repetitivos van en `src/data/`, no hardcoded en componentes.
- Colores, tipografías y espaciados siempre con variables CSS — nunca valores literales en componentes.
- HTML semántico: `<section>`, `<article>`, `<header>`, `<main>`, `<footer>`, `<nav>`, `<blockquote>`.
- Todas las imágenes tienen `alt` descriptivo.
- El formulario usa `noValidate` + validación HTML5 nativa. Se conectará con React Hook Form + Zod en Fase 3.
- Los archivos de datos (`data/`) exportan arrays puros — sin lógica, sin imports de assets cuando no es necesario.
