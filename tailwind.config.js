/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6633',
        'gray-blue': {
          100: '#ADB8CC',
          150: '#C3CAD9',
          200: '#7D8FB3',
          400: '#6B7A99',
          500: '#4D5E80'
        },
        dark: {
          90: '#181618',
          80: '#1F1E1F',
          70: '#282729'
        },
        border: '#EDEFF2',
        background: '#F7F8FA'
      },
      boxShadow: {
        boxShadow1: '0px 2px 5px rgba(38, 51, 77, 0.03)',
        orangeShadow: '0px 10px 30px rgba(255, 102, 51, 0.2)'
      },
      dropShadow: {
        dropShadow1: 'drop-shadow(0px 2px 5px rgba(38, 51, 77, 0.03)' 
      }
    },
  },
  plugins: [],
}
