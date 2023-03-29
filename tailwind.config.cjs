/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
      },
      gridTemplateRows: {
        // Simple 8 row grid
      3: 'auto auto / repeat(5, 80px)'
      }
    },
  },
  plugins: [],
}
