/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
    
  },
  fontFamily: {
    'abril': ['"Abril Fatface"', 'cursive'], // Define custom font
  },
};
