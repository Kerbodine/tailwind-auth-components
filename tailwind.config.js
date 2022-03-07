const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        margin: "margin",
      },
      colors: {
        main: colors.zinc,
        accent: ({ opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--accent), ${opacityValue})`;
          }
          return `rgb(var(--accent)`;
        },
      },
    },
  },
  plugins: [],
};
