module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueColor: {
          50: '#e0f2ff',
          100: '#b2d4ff',
          200: '#81b8fd',
          300: '#519cfb',
          400: '#267ffa',
          500: '#1366e0',
          600: '#094faf',
          700: '#02387e',
          800: '#00224d',
          900: '#000b1e',
        },
        bmsgray:{
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#b6b8c9',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#21222e',
          900: '#0a0a16',
        }

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
