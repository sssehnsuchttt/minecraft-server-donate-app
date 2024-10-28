/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-outline': {
          'text-shadow': '2px 2px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}



