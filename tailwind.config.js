/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0) -28.11%, #FFFFFF 43.96%)',
      }
    }
  },
  plugins: [],
}

