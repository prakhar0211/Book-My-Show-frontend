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
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
