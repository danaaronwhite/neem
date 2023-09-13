/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        check: "url('/svg/check.svg')",
        ddArrow: "url('/svg/ddArrow.svg')"
      },
      colors: {
        primary: "#70C4BB",
        gray: "#9DA7BE",
        "select-border": "#EFF1F5"
      },
      fontFamily: {
        sans: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#70C4BB"
        }
      }
    ]
  },
  plugins: [require("daisyui")],
};
