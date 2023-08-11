/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      desaturatedBlueMain: '#3A4764',
      desaturatedBlueKeyPad: '#232C43',
      desaturatedBlueScreen: '#182034',
      desaturatedDarkBlueKeys: '#6B789E',
      desaturatedDarkBlueKeysShadows: '#404E72',
      redKey: '#D03F2F',
      redKeyShadow: '#93261A',
      lightGrayishOrangeKey: '#EAE3DC',
      lightGrayishOrangeKeyShadow: '#B4A597',
      grayishBlue:'#444B5A',
      white: 'hsl(0, 0%, 100%)',
      lightGrey: 'hsl(0, 0%, 90%)',
      grayishRed: 'hsl(0, 5%, 81%)',
      veryLightGrey: 'hsl(0, 0%, 93%)',
      moderateCyan: 'hsl(185, 42%, 37%)',
      darkCyan: 'hsl(185, 58%, 25%)',
      orange: 'hsl(25, 98%, 40%)',
      darkOrange: 'hsl(25, 99%, 27%)',
      lightGrayishYellow: 'hsl(45, 7%, 89%)',
      darkGrayishOrange: 'hsl(35, 11%, 61%)',
      darkGrayishYellow: 'hsl(60, 10%, 19%)',
      veryDarkVioletMain: 'hsl(268, 75%, 9%)',
      veryDarkViolet: 'hsl(268, 71%, 12%)',
      darkViolet: 'hsl(281, 89%, 26%)',
      vividMagenta: 'hsl(285, 91%, 52%)',
      pureCyan: 'hsl(176, 100%, 44%)',
      softCyan: 'hsl(177, 92%, 70%)',
      darkVioletKey: 'hsl(268, 47%, 21%)',
      darkMagenta: 'hsl(290, 70%, 36%)',
      lightYellow: 'hsl(52, 100%, 62%)',
      veryDarkBlue: 'hsl(198, 20%, 13%)'
    },
  },
  plugins: [],
}

