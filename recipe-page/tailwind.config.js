/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],

  theme: {
    extend: {
      fontFamily: {
        "outfit": ["Outfit", "sans-serif"],
        "young": ["Young Serif", "serif"],
      },
      backgroundColor: {
        'primary-bg': '#fff5fa',
        'secondary-bg': ' hsl(332, 51%, 32%)',
      },
      textColor: {
        'brown': '#854632',
        'secondary': ' hsl(332, 51%, 32%)',
      }
    },
  },
  plugins: [],
}

