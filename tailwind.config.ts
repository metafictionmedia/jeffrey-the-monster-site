import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-bangers)"],
        body: ["var(--font-comic-neue)"],
      },
      colors: {
        // Light Mode Palette
        light: {
          background: "#ffffff", // White
          card: "#f8fafc", // Slate-50
          text: "#0f172a", // Slate-900
          "text-secondary": "#475569", // Slate-600
          border: "#e2e8f0", // Slate-200
        },
        // Dark Mode Palette
        dark: {
          background: "#000000", // Black
          card: "#1f2937", // Gray-800
          text: "#ffffff", // White
          "text-secondary": "#d1d5db", // Gray-300
          border: "rgba(255, 255, 255, 0.2)",
        },
        // Accent Colors
        accent: {
          green: "#4ade80",
          "green-dark": "#16a34a",
          purple: "#a855f7",
          "purple-dark": "#7c3aed",
          yellow: "#facc15",
          "yellow-dark": "#eab308",
          "yellow-hover": "#f59e0b",
        },
      },
      boxShadow: {
        comic: "4px 4px 0px 0px rgba(0,0,0,1)",
        "comic-dark": "4px 4px 0px 0px rgba(255,255,255,0.7)",
        "comic-hover": "2px 2px 0px 0px rgba(0,0,0,1)",
        "comic-hover-dark": "2px 2px 0px 0px rgba(255,255,255,0.7)",
      },
      backgroundImage: {
        'grid-light': "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
        'grid-dark': "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '20px 20px',
      },
    },
  },
  plugins: [],
};
export default config;
