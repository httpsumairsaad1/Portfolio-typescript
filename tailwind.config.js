/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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

      'lgm': '1170px'
    },
    extend: {
      boxShadow: {
        'bubble-pink': "0 0 0 2px #ff2d7544, 0 0 5px #ff2d75, 0 0 10px #ff2d75",
        'bubble-blue': "0 0 0 2px #02cbf744, 0 0 5px #02cbf7, 0 0 10px #02cbf7"
      }
    },
  },
  plugins: [],
}