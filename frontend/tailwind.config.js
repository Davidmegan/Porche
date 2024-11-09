/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        porsche: ['"Porsche"', "sans-serif"], // Add Porsche font as custom font
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
