/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "778px",
        lg: "984px",
        xl: "1240px",
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
