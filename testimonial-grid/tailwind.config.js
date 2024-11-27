/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      backgroundImage: {
        'pattern-quotation': 'url(/images/bg-pattern-quotation.svg)'
      }
    },
  },
  plugins: [],
}

