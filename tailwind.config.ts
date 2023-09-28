import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: '"SF Pro Display", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
    },
    colors: {
      background: "#000212",
      white: "#ffffff",
    },
    fontSize: {
      md: "1.6rem",
      lg: ["2.2rem", "1.3"],
      "5xl": ["8rem", "1"],
    },
  },
  plugins: [],
};
export default config;
