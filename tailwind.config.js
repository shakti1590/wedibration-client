/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans_Serif: ['"sans_Serif"', "sans-serif"],
        cursive: ['"Great Vibes"', "cursive"],
        serif: ['"Merriweather"', "serif"],
        sans: ['"Open Sans"', "sans-serif"],
        times: ['"Times New Roman"', "serif"],
        handwriting: ['"Dancing Script"', "cursive"],
        display: ['"Oswald"', "sans-serif"],
        mono: ['"Roboto Mono"', "monospace"],
        festive: ['"Festive"', "cursive"],
        elegant: ['"Cormorant Garamond"', "serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
