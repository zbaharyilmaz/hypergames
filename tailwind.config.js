/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "color-dark": "#0D0D0D",
        "color-light": "#fffefe",
        "color-anthracite": "#292929",
        "color-lightgrey": "#BFBFBF",
        "color-grey": "#C1C9D9",
        "color-olivegreen": "#556B2F",
        "color-cream": "#F5E6CC",
        "color-brown": "#59341E",
        "color-yellow": "#F29F05",
        "color-darkred": "#590414",
        "color-darkred2": "#8B0000",
        "color-blue": "#3C4E73",
        "color-seablue": "#2A5D75",
        "color-orange": "#FF7902",
        "color-bluedark": "#250784",
      },
    },
  },
  darkMode: "class",
  plugins: [],
}

