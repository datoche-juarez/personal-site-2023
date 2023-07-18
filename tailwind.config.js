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
      xs: "260px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
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
        "facebook-blue": {
          DEFAULT: "#3b5998",
          50: "#e9f0ff",
          100: "#c5d3ef",
          200: "#a1b5de",
          300: "#7d98ce",
          400: "#5a7abf",
          500: "#3b5998",
          600: "#314b82",
          700: "#22365e",
          800: "#11203b",
          900: "#010b1a",
        },
        "linkedin-blue": {
          DEFAULT: "#0077B5",
          50: "#daf8ff",
          100: "#ade6ff",
          200: "#7ed3ff",
          300: "#4dc2ff",
          400: "#23b0fe",
          500: "#1097e5",
          600: "#0077B5",
          700: "#005481",
          800: "#003250",
          900: "#001220",
        },
        "github-black": {
          DEFAULT: "#171515",
          50: "#f3f2f2",
          100: "#d8d8d8",
          200: "#bdbdbd",
          300: ",#a4a4a4",
          400: "#898989",
          500: "#707070",
          600: "#575757",
          700: "#3e3e3e",
          800: "#262626",
          900: "#171515",
        },
        "whatsapp-green": {
          DEFAULT: "	#25D366",
          50: "#dffeec",
          100: "#b9f5d0",
          200: "#90edb3",
          300: ",#65e495",
          400: "#3cdd78",
          500: "#25D366",
          600: "#179848",
          700: "#0c6c33",
          800: "#01421c",
          900: "#001803",
        },
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
