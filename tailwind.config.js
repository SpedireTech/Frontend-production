/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        button: "#08418A",
        active: "#0B56B8",
        hero: "#041E40",
        inactive: "#4B4B4B",
      },
    },
    fontFamily: {
      hg: ["Hanken Grotesk"],
    },
    height: {
      15: "3.75rem", 
    },
  },
  plugins: [],
};
