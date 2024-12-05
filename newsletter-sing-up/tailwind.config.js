/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      backgroundColor: {
        'tomato': 'hsl(4, 100%, 67%)'
      },
      fontFamily: {
        'roboto': ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

