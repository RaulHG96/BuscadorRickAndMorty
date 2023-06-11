/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    boxShadow: {
      'inner': 'inset 0 0px 150px 0px'
    },
    extend: {
      fontFamily: {
        'Horror': ['schiwfty']
      }
    },
  },
  plugins: [],
}

