import type { Config } from "tailwindcss";

// Colours resolve to CSS variables in tokens.css, so theme switching is a single
// data-theme attribute on <html> (e.g. via next-themes, attribute="data-theme").
export default {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "24px", screens: { DEFAULT: "1248px" } },
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-glass": "var(--bg-glass)",
        surface: { 1: "var(--surface-1)", 2: "var(--surface-2)" },
        code: "var(--code-bg)",
        line: { DEFAULT: "var(--border)", 2: "var(--border-2)" },
        fg: { DEFAULT: "var(--text)", 2: "var(--text-2)", 3: "var(--text-3)" },
        accent: {
          DEFAULT: "var(--accent)",
          text: "var(--accent-text)",
          bg: "var(--accent-bg)",
          on: "var(--on-accent)",
        },
        live: { DEFAULT: "var(--live)", bg: "var(--live-bg)" },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // [size, { lineHeight, letterSpacing, fontWeight }]
        display: ["clamp(52px, 8vw, 104px)", { lineHeight: "0.95", letterSpacing: "-0.045em", fontWeight: "600" }],
        "display-sm": ["clamp(48px, 7vw, 88px)", { lineHeight: "0.95", letterSpacing: "-0.045em", fontWeight: "600" }],
        lead: ["clamp(18px, 1.7vw, 22px)", { lineHeight: "1.5" }],
        h2: ["clamp(24px, 2.2vw, 30px)", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "card-title-lg": ["clamp(26px, 2.6vw, 34px)", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "600" }],
        "card-title": ["20px", { lineHeight: "1.3", letterSpacing: "-0.02em", fontWeight: "600" }],
        h3: ["19px", { lineHeight: "1.45", letterSpacing: "-0.015em", fontWeight: "600" }],
        prose: ["17px", { lineHeight: "1.7" }],
        body: ["16px", { lineHeight: "1.6" }],
        small: ["15px", { lineHeight: "1.55" }],
        xs: ["13.5px", { lineHeight: "1.5" }],
        // mono
        "mono-num": ["clamp(30px, 3.4vw, 44px)", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "500" }],
        "mono-num-sm": ["22px", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "500" }],
        "mono-md": ["13px", { lineHeight: "1.4", fontWeight: "500" }],
        "mono-sm": ["12px", { lineHeight: "1.4", fontWeight: "500" }],
        "mono-xs": ["11px", { lineHeight: "1.4", fontWeight: "500" }], // labels: uppercase + tracking-[.08em]
      },
      borderRadius: { tag: "4px", btn: "6px", panel: "10px", card: "12px" },
      maxWidth: { container: "1200px", prose: "720px", readme: "880px" },
      spacing: { header: "56px" },
      transitionTimingFunction: { out: "cubic-bezier(0.2, 0, 0, 1)" },
      backgroundImage: {
        "eng-grid":
          "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
        placeholder:
          "repeating-linear-gradient(135deg, var(--surface-2) 0 10px, var(--surface-1) 10px 20px)",
      },
      backgroundSize: { grid: "32px 32px" },
    },
  },
  plugins: [],
} satisfies Config;
