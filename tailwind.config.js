/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "2rem",
        lg: "0rem",
        xl: "0rem",
      },
      screens: {
        sm: "700px",
        md: "950px",
        lg: "1400px",
        xl: "1700px",
      },
    },
    extend: {
      fontFamily: {
        agrandir: ["Agrandir", "sans-serif"],
        moontime: ["Moontime", "cursive"],
        agrandirWide: ["Agrandir Wide", "sans-serif"],
        agrandirWideBold: ["Agrandir Wide Bold", "sans-serif"],

        agrandirWideBlack: ["Agrandir Wide Black", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
