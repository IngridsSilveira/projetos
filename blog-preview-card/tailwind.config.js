/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      backgroundColor: {
        'bg-primary-yellow': '#f4d04e',
      },
      fontFamily: {
        'figtree': ['Figtree', 'sans-serif']
      }
    },
  },
  plugins: [],
}

