/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#eefdff'
      }, 
      fontFamily: {
        'inter': ['Inter']
      }
    },
  },
  plugins: [],
}