import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      silver: "#c0c0c0",
      purple: "#7c3aed",
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      colors: {
        void: {
          black: "#000000",
          dark: "#0a0a0a",
          card: "#1a1a1a",
          "card-hover": "#2a2a2a",
          muted: "#a1a1aa",
        },
        primary: {
          DEFAULT: "#7c3aed",
          hover: "#6d28d9",
        },
        danger: "#ef4444",
        success: "#22c55e",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
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
        "void-radial": "radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)",
        "text-gradient": "linear-gradient(to right, #ffffff, #c0c0c0, #ffffff)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        shine: "shine 3s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        drift: "drift1 8s ease-in-out infinite",
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
        twinkle: {
          "0%, 100%": { opacity: "0.1" },
          "50%": { opacity: "0.4" },
        },
        drift1: {
          "0%": { transform: "translate(0, 0) rotate(0deg) scale(1)" },
          "50%": { transform: "translate(30px, -20px) rotate(3deg) scale(1.05)" },
          "100%": { transform: "translate(0, 0) rotate(0deg) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
