/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", "serif"]
      },
      backgroundColor: {
        'style-red': 'hsl(0, 78%, 62%)',
        'style-cyan': 'hsl(180, 62%, 55%)',
        'style-orange': 'hsl(34, 97%, 64%)',
        'style-blue': 'hsl(212, 86%, 64%)'
      }
    },
  },
  plugins: [],
}

