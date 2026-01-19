import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          light: "#F5F7FA",
          dark: "#0B0D10",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#11151B",
        },
        text: {
          primary: {
            light: "#1A1D23",
            dark: "#EDEFF2",
          },
          secondary: {
            light: "#5A6270",
            dark: "#A7AFBA",
          },
        },
        border: {
          light: "#E5E8ED",
          dark: "#1B2330",
        },
        accent: {
          DEFAULT: "#6B86A8",
          hover: "#7A95B7",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-space-grotesk)"],
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
