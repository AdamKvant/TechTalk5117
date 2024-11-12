/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  theme: {
    extend: {height: {
      '30vh': '30vh',
    },},
  },
  plugins: [],
};
