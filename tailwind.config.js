/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#062B4A',
        gold: '#D69103',
        bone: '#F4F1EB',
        'bone-dark': '#E8E3D8',
        'navy-light': '#0D3D66',
        'gold-light': '#E8A820',
        'gold-pale': '#F5D98A',
        aged: '#EDE8DE',
        'dark-bg': '#062B4A',
        'neon-green': '#D69103',
        'neon-glow': '#F5D98A',
      },
      fontFamily: {
        mileast: ['Mileast', 'Georgia', 'serif'],
        alverata: ['Alverata', 'Alverata Lt', 'Georgia', 'serif'],
        playfair: ['Mileast', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'cormorant-sc': ['"Cormorant SC"', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', 'Alverata', 'Georgia', 'sans-serif'],
        baskerville: ['Alverata', '"Cormorant Garamond"', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
