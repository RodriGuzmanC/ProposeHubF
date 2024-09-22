/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        principal: {
          50: "var(--color-principal-50)",
          100: "var(--color-principal-100)",
          200: "var(--color-principal-200)",
          300: "var(--color-principal-300)",
          400: "var(--color-principal-400)",
          500: "var(--color-principal-500)",
          600: "var(--color-principal-600)",
          700: "var(--color-principal-700)",
          800: "var(--color-principal-800)",
          900: "var(--color-principal-900)",
          950: "var(--color-principal-950)",
        }
      },
    },
  },
  plugins: [],
};
