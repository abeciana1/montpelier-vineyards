
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      beige: '#ffefbd',
      marv: '#53293b',
      blueMetal: '#1985a1',
      seaweed: '#66a182',
      black: '#0f161a',
      cotta: '#e87461'
    },
    extend: {},
    ...defaultTheme
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
