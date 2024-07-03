/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#D97652",
        "primary-light": "#F29D52",
        "bg-primary": "#F2E9D8",
        "bg-secondary": "#263140",
      },
      fontSize: {
        "4xl": "48px",
        "3xl": "36px",
        "2xl": "24px",
        base: "16px",
        sm: "14px",
        xs: "12px",
      },
    },
  },
  plugins: [],
};
