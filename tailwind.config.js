const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "deep-red": {
        DEFAULT: "#ee2b2d",
        50: "#ffe5e3",
        100: "#febcb6",
        200: "#f78e88",
        300: "#f35d59",
        400: "#ee2b2d",
        500: "#d41c11",
        600: "#a61b0a",
        700: "#771906",
        800: "#4a1402",
        900: "#200b00",
      },
      "dark-gray": {
        DEFAULT: "#292c2f",
        50: "#edf3f8",
        100: "#d6d9db",
        200: "#bdbfc1",
        300: "#a3a6a8",
        400: "#888b8f",
        500: "#6f7276",
        600: "#56595c",
        700: "#3d4042",
        800: "#292c2f",
        900: "#070e13",
      },
      white: "#ffffff",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        inter: ["var(--inter-font)", ...fontFamily.sans],
        baiJamjuree: ["var(--bai-jamjuree-font)"],
        dmMono: ["var(--dm-mono-font)"],
      },
      height: {
        104: "26rem",
        250: "250px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "900px",
        1000: "1000px",
        2000: "2000px",
      },
    },
  },
  plugins: [],
};
