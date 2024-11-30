/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./node_modules/nativewind/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        roboto: [
          "Roboto-Regular",
          "Roboto-Light",
          "Roboto-Medium",
          "Roboto-Bold",
          "Roboto-Black",
          "Roboto-Italic",
          "Roboto-Thin",
          "system-ui",
          "sans-serif",
        ],
        spaceMono: ["SpaceMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
