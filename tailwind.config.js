module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        brand: "'Metropolis', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
