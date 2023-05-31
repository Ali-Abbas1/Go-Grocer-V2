/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter','sans-serif'],
        poppins: ['Poppins','sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        public: ['Public Sans', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

