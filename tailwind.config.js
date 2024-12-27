
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #3bace2 100%, #406aff 117.04%)',
        'gradient-to-text': 'linear-gradient(267deg, #da7c25 .36%, #b923e1 102.06%)',
      },
      boxShadow: {
        'shade': '0 0 20px 10px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}