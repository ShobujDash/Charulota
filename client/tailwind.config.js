/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        primary: "#5F6FFF",
        dark_light: "#0A2339",
        dark_color: "#151534",
        dark_dark: "#0F1629",
      },
      boxShadow: {
        myShadow1:"4.1px -1px 0 0 rgb(17,24,39)",
        myShadow2:"-4.1px -1px 0 0 rgb(17,24,39)",
      }
    },
  },
  plugins: [],
};
