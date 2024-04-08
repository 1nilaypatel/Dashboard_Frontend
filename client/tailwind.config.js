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
        customGreen: '#2bebc8',
        customOrange: '#ff7777',
        customYellow: '#f3c522',
        customGreen2: '#05aa8d',
      },
      margin: {
        '2/12': '16.66667%',
      }
    },
  },
  plugins: [],
}