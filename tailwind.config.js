/** @type {import('tailwindcss').Config} */
const { screens } = require('tailwindcss/defaultTheme')

const tailwindConfig = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '[350px-max]': {
        max: '350px'
      },
      '[400px-max]': {
        max: '400px'
      },
      '[440px-max]': {
        max: '440px'
      },
      '[550px-max]': {
        max: '550px'
      },
      '[650px-max]': {
        max: '650px'
      },
      ...screens
    }
  }
}

module.exports = tailwindConfig
