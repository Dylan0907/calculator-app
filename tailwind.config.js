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
      desaturatedBlueScreen: '#182034',
      desaturatedDarkBlueKeys: '#6B789E',
      desaturatedDarkBlueKeysShadows: '#404E72',
      redKey: '#D03F2F',
      redKeyShadow: '#93261A',
      lightGrayishOrangeKey: '#EAE3DC',
      lightGrayishOrangeKeyShadow: '#B4A597',
      textColorBlue:'#444B5A',
      white: '#FFFFFF'
    },
  },
  plugins: [],
}

