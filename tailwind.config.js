/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      dark: '#333333',
      DEFAULT: '#333333',
      primary: "#054C73",
      secondary: "#666666",
      info: "#DFE9F4",
      frozen: "#F2F5FF",
    },
    container: {
      center: true,
      padding: '15px'
    },
    extend: {
      screens: {
        'sm': '576px',
      },
    },
  },
  plugins: [],
}