# Aleksandr Ipanov — Portfolio

Personal portfolio and résumé of **Aleksandr Ipanov**, a web software engineer (React, TypeScript, Vue) with 3+ years of commercial experience.

**Live site:** https://alexto-ip.github.io/aleksandr_ipanov/

## Features

- **Single-page portfolio** with sections for experience, projects, skills, education, and certifications
- **Light and dark themes** — follows the system preference until you pick one manually; your choice is remembered, and there is no flash of the wrong theme on load
- **Bilingual (English / Russian)** — language switcher in the header, with automatic detection on first visit
- **Minimal, modern design** built around a single accent color, `#490000`
- **Accessible** — semantic markup, visible focus states, `aria` labels on controls, and `prefers-reduced-motion` support
- **Responsive** layout from mobile to desktop
- **Content-driven** — all text lives in one data file, so updating the portfolio doesn't require touching components

## Tech stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/) with CSS-variable design tokens
- [gh-pages](https://github.com/tschaub/gh-pages) for deployment to GitHub Pages

## Getting started

**Prerequisites:** Node.js 18+ and npm.

```bash
git clone https://github.com/Alexto-IP/aleksandr_ipanov.git
cd aleksandr_ipanov
npm install
npm run dev
```

The dev server starts at `http://localhost:5173/aleksandr_ipanov/`.

> **Note:** if `npm install` fails with a peer dependency conflict between `vite` and `@vitejs/plugin-react`, run `npm install --legacy-peer-deps`.

### Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the development server                 |
| `npm run build`   | Type-check and build for production (`dist/`) |
| `npm run preview` | Preview the production build locally         |
| `npm run deploy`  | Publish `dist/` to the `gh-pages` branch     |

To deploy, run `npm run build` and then `npm run deploy`.

## Project structure

```
├── public/
│   └── logos/              # Company logos used in the Experience section
├── src/
│   ├── components/         # Header, Hero, Stats, Experience, Projects, Skills,
│   │                       # Education, Certificates, Contact, Footer
│   ├── data/
│   │   └── content.ts      # All bilingual content (RU / EN)
│   ├── i18n/
│   │   └── LanguageContext.tsx   # Language detection, storage, and switching
│   ├── theme/
│   │   └── ThemeContext.tsx      # Light / dark theme logic
│   ├── index.css           # Color tokens for both themes + global styles
│   └── main.tsx
├── tailwind.config.js      # Maps Tailwind colors to the CSS variables
└── vite.config.ts          # Base path for GitHub Pages
```

## Customizing the content

All text on the site — name, summary, work experience, projects, skills, education, certifications, contacts, and UI labels — lives in a single file:

```
src/data/content.ts
```

It exports a `content` object with two keys, `en` and `ru`. Edit the text there and the components pick up the changes in both languages. You normally don't need to touch anything in `src/components/`.

To add a **company logo**, drop an image into `public/logos/` and reference it in the experience entry:

```ts
{
  company: 'Example Inc.',
  logo: 'logos/example.png',
  note: 'contract development', // optional label shown next to the company
  // ...
}
```

If an entry has no `logo`, a monogram tile with the company's first letter is shown instead.

## Theming

Colors are defined as RGB channel variables in `src/index.css` — one set for `:root` (light) and one for `:root.dark` — and mapped to Tailwind utilities in `tailwind.config.js` (`bg-bg`, `text-ink`, `text-muted`, `text-accent`, `bg-solid`, and so on).

The brand accent is `#490000`. It is used as-is in the light theme. On a near-black background it is too dark to work as text, so the dark theme keeps `#490000` for filled elements (buttons, active toggles) and uses a lighter tint of the same hue for text and links. To change the accent, edit `--accent` and `--accent-solid` in both theme blocks.

## Language and theme detection

**Language** is resolved in this order:

1. The language you picked manually (stored in `localStorage`).
2. The browser language, then the time zone — applied instantly to avoid a flash of the wrong language.
3. The country inferred from your IP via [ipapi.co](https://ipapi.co/) (no API key) — used only if you haven't chosen a language yourself; if the request fails or times out, the previous guess stays.
4. English by default.

**Theme** follows `prefers-color-scheme` until you toggle it manually; the manual choice is stored in `localStorage`.
