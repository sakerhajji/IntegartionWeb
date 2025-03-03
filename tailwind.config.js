/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*", "./src/*"],
  theme: {
    extend: {
      colors: {
        primary: "#314584",
        secondary: "#ff3946",
        tertiary: "#6e757a",
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
        display: ["Roboto", "sans-serif"],
      },
      fontSize: {
        navSize: "24px",
        heroSize: "74px",
        pSize: "18px",
      },
    },
  },
};
