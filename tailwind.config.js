/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "328px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1324px",
      // => @media (min-width: 1024px) { ... }

      xl: "1580px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1736px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
