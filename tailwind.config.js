/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["Space Grotesk", "sans-serif"]
      },
      colors:{
        primary:"#5846FB",
        myGray:"#1F2123",
        lightGray:"#F0F0F0"
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

