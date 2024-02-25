/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'andy': [
            '20px 20px 0px 5px rgba(0, 0, 0, 1)'
        ],
      },
      height: {
        'ol': ['40.3rem'],
      }
    },
    fontFamily: {
      helvetica: ['"Helvetica"', 'Helvetica'],
      roboto: ['Roboto Slab', 'serif'],
    }
  },
  plugins: [
    function ({ addUtilities }){
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        "no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};