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

      'xl': '1308px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1715px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: { grayscale: {
      50: '50%',
    }
    
  
  },
  },
  plugins: [],
}

