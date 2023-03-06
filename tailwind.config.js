/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      md: "1024px",
      ssm: "360px",
    },
    fontFamily:{
      'space':['Space Grotesk', 'sans-serif']
    }
  },
  plugins: [],
};
