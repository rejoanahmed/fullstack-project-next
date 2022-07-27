/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  important: "#__next",
  theme: {
    extend: {
      translate: {
        100: "100%",
      },
    },
  },
  plugins: [],
};
