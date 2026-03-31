/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('/assets/bg.jpg')"
      }

    },
  },
  plugins: [],
}

