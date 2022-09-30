/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': "'Cabin', sans-serif",
      },
      boxShadow: {
        'notion': '4px -2px 0px 0px'
      },
      backgroundImage: {
        'button-section-bg': "url(/src/assets/button-background.svg)",
      }
    },
  },
  plugins: [],
}
