/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.7s ease-out',
      },
      fontSize: {
        'flex': 'clamp(1.5rem, 5vw, 2.5rem)',
        'smallFlex': 'clamp(1rem, 5vw, 1.5rem)',
      },
      backgroundColor: {
        'overlay': 'rgba(0,0,0)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

