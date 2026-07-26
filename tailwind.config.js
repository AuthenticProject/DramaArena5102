/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#08090C',
          text: '#D7E2EA',
          darkText: '#0C0C0C',
          lightBg: '#FFFFFF',
          accent: '#0077B6',
          purple: '#7209B7',
          pink: '#F72585'
        }
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
