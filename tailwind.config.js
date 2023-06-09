/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    //components
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}