/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px', 
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
        'modern': ['DM Sans', 'sans-serif'],
        'clean': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

