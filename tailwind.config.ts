/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "var(--brand-black)",
          gray: "var(--brand-gray)",
          white: "var(--brand-white)",
          indigo: "var(--brand-indigo)",
        },
      },
      fontFamily: {
        serif: ["Ganton", "serif"],
      },
    },
  },
  plugins: [],
};