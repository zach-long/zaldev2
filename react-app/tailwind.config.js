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
      fontFamily: {
        'header': ['"Ibarra Real Nova"', 'serif'],
        'title': ['"Ibarra Real Nova"', 'sans-serif'],
        'body': ['"Inter"', 'sans-serif']
      },
      colors: {
        'pizazz': '#FF8C00',
        'darkpizazz': '#D26104',
        'xdarkpizazz': '#7D3A03',
        'lightpizazz': '#ffaf4d',
        'xlightpizazz': '#ffbf80',
        'boldblue': '#38A9FF',
        'darkboldblue': '#0074CC'
      },
      animation: {
        'fade-in-name': 'fadeIn 1200ms ease-in 2000ms normal forwards',
        'fade-in-title': 'fadeIn 1200ms ease-in 3200ms normal forwards',
        'fade-in-bar': 'fadeIn 600ms ease-in 5000ms normal forwards',
        'fade-in-section': 'fadeIn 900ms ease-in normal forwards',
        'fade-in-content': 'fadeIn 600ms ease-in normal forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        }
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
