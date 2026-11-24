"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const current = mounted ? (theme === "system" ? resolvedTheme : theme) : "dark";
  const next = current === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      className="inline-flex h-8 items-center gap-2 rounded-btn border border-line bg-surface-1 px-2.5 font-mono text-mono-sm text-fg-2 transition-colors duration-150 hover:border-line-2"
    >
      <span
        aria-hidden
        className="h-3 w-3 rounded-full border-[1.5px] border-fg"
        style={{
          background: "linear-gradient(90deg, var(--text) 50%, transparent 50%)",
        }}
      />
      {mounted ? current : ""}
    </button>
  );
}
