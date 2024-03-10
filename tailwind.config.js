/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',  
      'lg': '1024px',   
      'xl': '1308px',  
      '2xl': '1715px',     
    },
    extend: { grayscale: {
      50: '50%',
    }
    
  
  },
  },
  plugins: [],
}

