/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1991B9',
          50: '#E8F4F8',
          100: '#D1E9F1',
          200: '#A3D3E3',
          300: '#75BDD5',
          400: '#47A7C7',
          500: '#1991B9',
          600: '#147494',
          700: '#0F576F',
          800: '#0A3A4A',
          900: '#051D25',
        },
        secondary: {
          DEFAULT: '#111D4A',
          50: '#E8EAF2',
          100: '#D1D5E5',
          200: '#A3ABCB',
          300: '#7581B1',
          400: '#475797',
          500: '#111D4A',
          600: '#0E173B',
          700: '#0A112C',
          800: '#070C1E',
          900: '#03060F',
        },
      },
      fontFamily: {
        sans: ['Jost', 'system-ui', 'sans-serif'],
        heading: ['Oswald', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
