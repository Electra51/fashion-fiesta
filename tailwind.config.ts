import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('/bg.png')",
      },
      colors: {
        bodycolor: "#fbfaf7",
        darktext: "#242424",
        lightText: "#a5a5a5",
        lightbg: "#1010100d",
      },
    },
  },
  plugins: [],
};
export default config;
