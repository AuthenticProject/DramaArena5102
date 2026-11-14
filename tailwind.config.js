/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // DA 5102 Official Brand Guideline Palette
        navy: {
          DEFAULT: '#192E41',
          dark: '#101D2A',
          light: '#24415C',
          deep: '#0B151F',
        },
        teal: {
          DEFAULT: '#325956',
          dark: '#223C3A',
          light: '#447773',
          soft: '#EAF0EF',
        },
        bone: {
          DEFAULT: '#EDE8E2',
          dark: '#DDD7CE',
          light: '#F7F5F0',
          pure: '#FAF8F5',
        },
        gold: {
          DEFAULT: '#B58A3C',
          dark: '#8E6B28',
          light: '#D4A853',
          pale: '#F3E1B8',
        },
        aged: '#E5DFD4',
        'dark-bg': '#101D2A',
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        dm: ['"DM Sans"', '"Plus Jakarta Sans"', 'sans-serif'],
        instrument: ['"Instrument Serif"', 'Mileast', 'Georgia', 'serif'],
        mileast: ['Mileast', 'Georgia', 'serif'],
        alverata: ['Alverata', 'Alverata Lt', 'Georgia', 'serif'],
        arabic: ['"Amiri"', '"Traditional Arabic"', '"Scheherazade New"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'cormorant-sc': ['"Cormorant SC"', 'Georgia', 'serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', '"Plus Jakarta Sans"', 'Alverata', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
