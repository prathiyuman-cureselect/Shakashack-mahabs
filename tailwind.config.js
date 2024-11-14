/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#039BE5',
        customPeach: '#fbebd9',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, white, #039BE5, #fbebd9)',
      },
    },
  },
  plugins: [],
}

