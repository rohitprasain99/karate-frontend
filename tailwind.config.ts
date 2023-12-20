import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D52727",
        secondary: "#4E4B66",
        white: "#FFFFFF",
        grayScale: "#F4F4F4",
        faint: "#6E7191",
        ternary: "#14142B",
        irish: "#5D5FEF",
        footer: "#333546",
        payment: "#00966D",
      },
      fontFamily: {},
      fontSize: {
        rem2: "2rem",
        rem3: "3rem",
        rem1: "1rem",
        rem4: "4rem",
        rem5: "5rem",
      },
      screens: {
        xs: "375px",
        sm: "768px",
        // => @media (min-width: 576px) { ... }

        md: "1024px",
        // => @media (min-width: 768px) { ... }

        lg: "1280px",
        // => @media (min-width: 992px) { ... }

        xl: "1920px",
        // => @media (min-width: 1200px) { ... }
      },
      height: {
        vh50: "50vh",
        560: "560px",
      },
      width: {
        p10: "10%",
        p20: "20%",
        p30: "30%",
        p40: "40%",
        p50: "50%",
        p60: "60%",
        p70: "70%",
        p80: "80%",
        p90: "90%",
      },
      margin: {
        top25: "4rem 0 0 0 ",
      },
    },
  },
  plugins: [],
  // plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
