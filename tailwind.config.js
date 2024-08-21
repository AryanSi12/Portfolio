/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'amatic-sc': ['Amatic SC', 'sans-serif'],
        'mylocal': ['MyLocalFont', 'sans-serif'],
      },
      fontWeight: {
        'regular': 400,
        'bold': 700,
      },
    },
  },
  plugins: [],
}

