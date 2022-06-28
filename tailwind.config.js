/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app.tsx',
    './src/components/*.tsx',
    './src/components/templates/*.tsx',
    './scss/main.scss'
  ],
  theme: {
    extend: {
      colors: {
        'pizazz': '#FF8C00',
        'darkpizazz': '#D26104',
        'xdarkpizazz': '#7D3A03',
        'lightpizazz': '#ffaf4d',
        'xlightpizazz': '#ffbf80',
        'boldblue': '#38A9FF',
        'darkboldblue': '#0074CC'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
