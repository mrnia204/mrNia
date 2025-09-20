import { defineConfig } from 'vite';

/** @type {import('tailwindcss').Config} */
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // make sure this matches where your components are
  ],
  theme: {
    extend: {
      keyframes: {
        colorCycle: {
          '0%, 100%': { color: '#ea580c' },  // orange-600
          '25%': { color: '#16a34a' },       // green-600
          '50%': { color: '#2563eb' },       // blue-600
          '75%': { color: '#9333ea' },       // purple-600
        },
      },
      animation: {
        colorCycle: 'colorCycle 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
})
