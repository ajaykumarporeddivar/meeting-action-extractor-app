/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'action-brand': '#4f46e5', // A deep indigo, primary brand color
        'action-accent': '#22c55e', // A vibrant green for success/highlight
        'action-warning': '#f97316', // An orange for warnings/alerts
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}