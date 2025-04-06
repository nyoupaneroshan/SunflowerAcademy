/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0171bb',
          light: '#0288dd',
          dark: '#015fa3'
        },
        secondary: {
          DEFAULT: '#ffca05',
          light: '#ffd633',
          dark: '#e6b600'
        },
        accent: {
          DEFAULT: '#ec8732',
          light: '#ef9a50',
          dark: '#e67417'
        }
      }
    },
  },
  plugins: [],
};