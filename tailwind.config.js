/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#377cfb",
          secondary: "#66cc8a",
          accent: "#a992f7",
          neutral: "#3d4451",
          info: "#3abff8",
          success: "#16a249",
          warning: "#fbbd23",
          error: "#e01a2e",
        },
      },
    ],
  },
  safelist: [
    {
      pattern: /grid-cols-+/,
    },
    {
      pattern: /col-span-+/,
    },
  ],
  theme: {
    backgroundImage: {
      loginBG: "url('../public/assets/img/top.jpg')",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
