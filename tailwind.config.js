/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Pacifico:"'Pacifico',cursive",
        Poetsen: "'Poetsen',sans-serif",
        Poppins:"'Poppins', sans-serif"      
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

