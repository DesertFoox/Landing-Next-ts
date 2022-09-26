/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '1rem',
      },
    },
    extend: {
      backgroundImage: {
        'herobg':"url('../../../public/images/HeroBackground.svg')"
      },
      colors: {
        'purple-primary': '#A174DB',
        'green-secondary': '#49BE55',
        '6362D7': '#6362D7',
        'FF8FE2': '#FF8FE2',
        'red':'red'
      },
    },
  },
  plugins: [],
}