/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "390px",
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
        lightBlue: "#DAE6F4",
        gray: "#4B4B4B",
        greyLight: "#FBFBFB",
        lightBlue: "#DAE6F4",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
    fontFamily: {
      hg: ["Hanken Grotesk"],
    },    
  },
  plugins: [],
};
