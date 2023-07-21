/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        desktop: '1440px',
        mobile: '375px'
      }
    },
    colors: {
      desaturatedBlueMain: '#2B4173',
      desaturatedBlueKeyPad: '#232C43',
      desaturatedBlueScreen: '#182034'
    },
  },
  plugins: [],
}

