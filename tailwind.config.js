/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-lite": "#E8EDF6",
        "primary": "#2D65B4",
        "primary-dark": "#02102E",
        "secondary": "#F1E18E",
        "grey-lite": "#F4F4F2",
        "grey-dark": "#1C1C1C",
        "gradient-dark-blue": "#182978",
        "gradient-lite-blue": "#2D65B4",
        "gradient-lite-grey": "#E8EDF6",
        "gradient-dark-grey": "#02102E",
        "gradient-red": "#B8A540",
        "gradient-yellow": "#7ECE3F",
        "gradient-green": "#25DAE5",
        "accent-red": "#B42D2D",
        "accent-green": "#53BA02",
        "accent-blue": "#31B8EE",
      },
    },
  },
  plugins: [],
}