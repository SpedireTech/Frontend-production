/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: { min: "320px", max: "360px" },
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
        sendPurple: "#792FF3",
      },
      width: {
        '120': '30rem',
        '144': '36rem',
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
      inter: ["Inter"],
    },
  },
  plugins: [],
};
