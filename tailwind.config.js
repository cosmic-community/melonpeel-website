/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        melon: {
          50: '#fef2f4',
          100: '#fde6ea',
          200: '#fbd0d9',
          300: '#f7aab9',
          400: '#f17993',
          500: '#e74c6f',
          600: '#d12d56',
          700: '#b01f47',
          800: '#931d41',
          900: '#7d1c3d',
        },
        peel: {
          50: '#f1f9f3',
          100: '#dff1e4',
          200: '#c0e3cb',
          300: '#92cca7',
          400: '#5fac7d',
          500: '#3f9061',
          600: '#2e734c',
          700: '#265c3e',
          800: '#214a33',
          900: '#1c3d2c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}