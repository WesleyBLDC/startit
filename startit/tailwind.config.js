/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      brand: {
        mainOrange: "#f37721",
        darkerOrange: "#f37721",
        blue: "#80b1ca",
        black: "#231f20",
        white: "000000",
      },
    },
    extend: {
      backgroundImage: {
        hero: "url('../public/spaceFullLength.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f37721",

          secondary: "#80b1ca",

          accent: "#f37721",

          neutral: "#231f20",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
