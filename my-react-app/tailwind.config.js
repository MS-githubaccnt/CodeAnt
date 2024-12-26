/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      dropShadow:{
        "custom":"0 0 3px rgb(0 0 0 / 0.1)"
      },
      margin:{
        '-10p':'-10%'
      }
    },
  },
  plugins: [],
}

