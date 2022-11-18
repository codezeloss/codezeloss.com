/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      "desaturated-cyan": "#5FB4A2",
      "bright-red": "#F43030",
    },
    fontFamily: {
      "space-grotesk": ["Space Grotesk", "sans-serif"],
    },
    screens: {
      "1bp": { max: "1107px" },
      "2bp": { max: "1076px" },
      "3bp": { max: "967px" },
      "4bp": { max: "887px" },
      "5bp": { max: "783px" },
      "6bp": { max: "700px" },
      "7bp": { max: "540px" },
      "8bp": { max: "430px" },
      "9bp": { max: "389px" },
    },
    extend: {},
  },
  plugins: [],
}