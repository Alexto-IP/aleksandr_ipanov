/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        panel: token('panel'),
        line: token('line'),
        ink: token('ink'),
        muted: token('muted'),
        accent: token('accent'), // акцент для текста и линий (в тёмной теме светлее)
        solid: token('accent-solid'), // фирменный #490000 для заливок
        onsolid: token('on-solid'),
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
