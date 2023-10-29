/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pastel-100": "#f5f8fa",
        "pastel-800": "#5d7583",
        "steel-800": "#070b0e",
        "mint-100": "#93e9d4",
        "mint-200": "#6ed2ba",
        "mint-800": "#00392c",
        white: "#fff",
        azure: "#e1f6f9",
        gainsboro: "#d9d9d9",
        "pastel-300": "#e0e9ef",
      },
      spacing: {},
      fontFamily: {
        "de-body-bs-400": "Gellix",
      },
      borderRadius: {
        "281xl": "300px",
        "204xl-8": "223.8px",
        "7xs": "6px",
      },
    },
    fontSize: {
      sm: "14px",
      "3xs": "10px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
