/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'nav-menu-h': 'var(--nav-menu-h)',
        'nav-menu-sm-h': 'var(--nav-menu-sm-h)'
      }
    },
    screens: {
      '[550px-441px]': {
        min: '441px',
        max: '550px'
      },
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
      }
    }
  }
}

module.exports = tailwindConfig
