/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937', // gray-900
        secondary: '#374151', // gray-800
        accent: '#6366f1', // indigo-500
        hoverAccent: '#4f46e5', // indigo-600
      },
    },
  },
  plugins: [],
}