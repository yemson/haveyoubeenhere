/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  safelist: [
    'fill-green-100',
    'fill-green-200',
    'fill-green-300',
    'fill-green-400',
    'fill-green-500',
    'fill-green-600',
    'fill-green-700',
    'fill-green-800',
    'fill-green-900',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
