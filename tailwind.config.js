/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tertiary: "#151030",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
    },
    screens: {
      md: "1024px",
      ssm: "360px",
    },
  },
  plugins: [],
};
