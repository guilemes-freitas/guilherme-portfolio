/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'dancingScript': ['Dancing Script', 'cursive'],
      },
      colors:{
        greenBlue: '#1768AC',
        cambridgeBlue: '#87CBAC',
      },
      backgroundSize: {
        '200': '200%',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
