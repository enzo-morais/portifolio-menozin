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
        // VØID Theme Colors
        void: {
          black: "#000000",
          dark: "#0a0a0a",
          darker: "#121212",
          gray: "#1a1a1a",
          light: "#2a2a2a",
          lighter: "#3a3a3a",
          white: "#ffffff",
          silver: "#c0c0c0",
        },
        background: {
          light: "#F5F7FA",
          dark: "#000000",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#0a0a0a",
        },
        text: {
          primary: {
            light: "#1A1D23",
            dark: "#ffffff",
          },
          secondary: {
            light: "#5A6270",
            dark: "#c0c0c0",
          },
        },
        border: {
          light: "#E5E8ED",
          dark: "#1a1a1a",
        },
        accent: {
          DEFAULT: "#ffffff",
          hover: "#c0c0c0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-space-grotesk)"],
      },
      borderRadius: {
        "2xl": "1rem",
      },
      boxShadow: {
        void: "0 0 20px rgba(255,255,255,0.1)",
        "void-lg": "0 0 40px rgba(255,255,255,0.15)",
        "void-xl": "0 0 60px rgba(255,255,255,0.2)",
      },
      backgroundImage: {
        "void-gradient": "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
        "void-gradient-hover": "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)",
        "void-radial": "radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        shine: "shine 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255,255,255,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(255,255,255,0.2)" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
