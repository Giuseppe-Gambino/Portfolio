/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: "auto",
      margin: "0",
      screens: {
        sm: "600px",
        md: "950px",
        lg: "1400px",
        xl: "1700px",
      },
    },
    extend: {
      fontFamily: {
        agrandir: ["Agrandir", "sans-serif"],
        moontime: ["Moontime", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
