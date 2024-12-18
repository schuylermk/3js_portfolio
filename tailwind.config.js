/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        beige: "#c9ad8b",
      },
      textColor: {
        beige: "#c9ad8b",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      minHeight: {
        "screen-dvh-50": "50dvh",
        "screen-dvh-75": "75dvh",
        "screen-dvh-100": "100dvh",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('images/Topo-Lines-4.webp')",
        "hero-overlay": `linear-gradient(rgba(5, 8, 22, 0.85), rgba(5, 8, 22, 0.8))`,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
