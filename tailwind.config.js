/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const myUtilities = {
      };
      addUtilities(myUtilities);
    }),
    require('flowbite/plugin')
  ],
}

