/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow : {
        '3xl': '0 0 7px 15px rgba(255,0,0,.302)',
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

