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
    },
  },
  plugins: [],
};
export default config;
