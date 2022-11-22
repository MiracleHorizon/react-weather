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
      mobile: { max: '390px' },
    },
  },
  plugins: [],
}
