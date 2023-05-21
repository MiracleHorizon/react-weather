/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'rep-2': 'repeat(2, 1fr)'
      },
      gridTemplateRows: {
        'rep-2': 'repeat(2, 1fr)'
      }
    },
    screens: {
      'sm-max': {
        max: '576px'
      },
      'md-max': {
        max: '768px'
      },
      'lg-max': {
        max: '992px'
      },
      'xl-max': {
        max: '1200px'
      },
      'xxl-max': {
        max: '1400px'
      }
    }
  },
  plugins: []
}

module.exports = tailwindConfig
