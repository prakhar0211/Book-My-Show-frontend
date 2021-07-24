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
          50: '#2b3149',
          100: '#d3d4e1',
          200: '#b6b8c9',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#21222e',
          900: '#0a0a16',
        },
        bcolor:
        {
          50: '#ffe4ea',
          100: '#ffb4c1',
          200: '#fb849a',
          300: '#f74464',
          400: '#f52549',
          500: '#db0e30',
          600: '#ab0725',
          700: '#7b031a',
          800: '#4b000f',
          900: '#1e0003',
        }

      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
