/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abril: ['"Abril Fatface"', "cursive"],
      },
    },
  },
  darkMode: "class", // Dark mode enabled with the "class" strategy
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // Enables light and dark themes for Daisy UI
  },
};
