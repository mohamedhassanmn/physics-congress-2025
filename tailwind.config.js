/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--color-primary-50)",
          60: "var(--color-primary-60)",
          70: "var(--color-primary-70)",
          80: "var(--color-primary-80)",
          90: "var(--color-primary-90)",
          150: "var(--color-primary-150)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
        },
        "custom-gray": "#aaaaaa",
        secondary: "var(--color-secondary)",
        navbarBg: "var(--color-navbar-bg)",
      },
    },
  },
  safelist: [
    "bg-primary-50", "bg-primary-100", "bg-primary-200", "bg-primary-300", "bg-primary-400",
    "bg-primary-500", "bg-primary-600", "bg-primary-700", "bg-primary-800", "bg-primary-900",
    "hover:bg-primary-600", "text-primary-500", "border-primary-500"
  ],
  plugins: [],
};
