const colors = require("tailwindcss/colors");

module.exports = {
  prefix: "tw-",
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      cyan: colors.cyan,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
