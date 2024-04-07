/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#f5f5f5',
        customPurple: '#694bdb',
        customPurple2: '#3c1ead',
        customBlack: '#1e1f23',
      },
    },
  },
  plugins: [],
}