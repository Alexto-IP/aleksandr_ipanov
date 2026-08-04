/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blueprint: {
          bg: '#0B1526',
          panel: '#101E33',
          line: '#1E3A5F',
          cyan: '#4FC3E0',
          cyanDim: '#2E7A93',
          amber: '#E8A33D',
          paper: '#EAF1F7',
          dim: '#7C93AC',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(79,195,224,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(79,195,224,0.07) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
    },
  },
  plugins: [],
}
