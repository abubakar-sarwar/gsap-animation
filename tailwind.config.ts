import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "30px",
      },
      colors: {
        "drak-body": "#080808",
        "light-dark": "#161615",

        primary: "#91efc8",

        "font-dark": "#94938d",
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
