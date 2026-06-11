import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f4efe3",
        card: "#fffcf2",
        ink: "#1e1b16",
        muted: "#6e6757",
        apple: {
          green: "#61bb46",
          yellow: "#fdb827",
          orange: "#f5821f",
          red: "#e03a3e",
          purple: "#963d97",
          blue: "#009ddc",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "hard-sm": "3px 3px 0 0 var(--ink)",
        hard: "4px 4px 0 0 var(--ink)",
        "hard-lg": "7px 7px 0 0 var(--ink)",
      },
      keyframes: {
        "page-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "page-in": "page-in 0.45s cubic-bezier(0.16, 1, 0.3, 1) both",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;