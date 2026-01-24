/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      keyframes: {
    shine: {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(100%)' },
    },
    reverseShine: {
      '0%': { transform: 'translateX(100%)' },
      '100%': { transform: 'translateX(-100%)' },
    },
    borderGlow: {
      '0%': { borderColor: 'rgba(250,163,2,0.2)' },
      '50%': { borderColor: 'rgba(250,163,2,0.6)' },
      '100%': { borderColor: 'rgba(250,163,2,0.2)' },
    },
    
  },
  
  animation: {
    shine: 'shine 3s linear infinite',
    reverseShine: 'reverseShine 3s linear infinite',
    borderGlow: 'borderGlow 2.5s ease-in-out infinite',
  },

},
  },
  plugins: [],
}

