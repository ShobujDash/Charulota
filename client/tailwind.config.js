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

        primaryColor: "#010a5e",
        primaryColorLight: "#010d78",
        secondaryColor: "#FFCC00",
        paragraphColor: "#c0c0c0",
        whiteColor: "#fff",
        blackColor: "#000",
        greenColor: "#007936",
        redColor: "#cc3433",
        darkColor: "#000",
        darkColorLight: "#171717",
      },
      boxShadow: {
        myShadow1: "4.1px -1px 0 0 rgb(17,24,39)",
        myShadow2: "-4.1px -1px 0 0 rgb(17,24,39)",
      },
    },
  },
  plugins: [],
};
