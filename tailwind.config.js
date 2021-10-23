module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "dreams": "url('./assets/bg-test.png')",
      }),
      colors: {
        "co-yellow": '#FFCB29',
        "co-blue": '#2F327D',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
