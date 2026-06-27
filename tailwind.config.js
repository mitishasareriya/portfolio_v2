/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        surfaceHover: 'var(--surface-hover)',
        primary: '#3b82f6', // Electric Blue
        secondary: '#8b5cf6', // Purple
        accent: '#06b6d4', // Cyan
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        border: 'var(--border-color)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'orbit': 'orbit linear infinite',
        'shine': 'shine 1.5s ease-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        shine: {
          '100%': { left: '125%' },
        }
      }
    },
  },
  plugins: [],
}
