module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Jura: ['"Jura"', "sans-serif"],
      },
      colors: {
        purple: {
          btn: "#debfff",
          btnH: "#d2a7ff",
        },
      },
    },
  },
  plugins: [],
};
