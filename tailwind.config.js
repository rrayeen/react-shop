/** @type {import('tailwindcss').Config} */
/* eslint-disable */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "raisin-black": "#1E212B",
        "forest-green": "#4D8B31",
        "mikado-yellow": "#FFC800",
        "orange-wheel": "#FF8427",
        "raisin-light": "#585D6E",
        "lavender-blush": "#E0D8DE",
        "tiny-blue": "#99d5c9",
        "hoker-green": "#5C7B7A",
        gunmental: "#262D35",
        "burnet-sienna": "#C7755D",
        russet: "#8F5329",
        "tiffany-blue": "#99D5C9",
        "old-rose": "#AB6D78",
        "pomp-power": "#8F6593",
      },
      backgroundImage: {
        "home-page": "url('homepage.png')",
      },
    },
  },
  plugins: [],
};
