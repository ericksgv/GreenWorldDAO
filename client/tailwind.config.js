/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: '#CFF09E',
        white: '#F7F9FB',
        lightgreen : '#CBE9D2',
        blackgreen : '#053126',
        gray: '#f5f5f5',
        grencarmel: '#79BD9A',
      },
    },
  },
  plugins: [],
}

