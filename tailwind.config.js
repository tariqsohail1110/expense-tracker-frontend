/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        sans: ['Manrope', 'sans-serif'],        // default body font
        mono: ['JetBrains Mono', 'monospace'],  // for numbers/amounts
      },
  },
  plugins: [],
}