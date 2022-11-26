/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}',
    './app/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'rep-2': 'repeat(2, 1fr)',
      },
      gridTemplateRows: {
        'rep-2': 'repeat(2, 1fr)',
      },
    },
    screens: {
      'sm-max': {
        max: '576px',
      },
      'md-max': {
        max: '768px',
      },
      'lg-max': {
        max: '992px',
      },
      'xl-max': {
        max: '1200px',
      },
      'xxl-max': {
        max: '1400px',
      },
    },
  },
  plugins: [],
}
