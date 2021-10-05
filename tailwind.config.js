const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#0f161a'
    },
    extend: {
      colors: {
        beige: {
          DEFAULT: '#ffefbd'
        },
        marv: {
          DEFAULT: '#53293b'
        },
        blueMetal: {
          DEFAULT: '#1985a1'
        },
        seaweed: {
          DEFAULT: '#66a182'
        },
        cotta: {
          DEFAULT:'#e87461'
        },
      }
    },
    ...defaultTheme
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
