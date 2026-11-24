import Link from "next/link";

type Nav = { label: string; href: string } | null;

export default function CaseStudyNav({ prev, next }: { prev: Nav; next: Nav }) {
  return (
    <nav
      aria-label="Project navigation"
      className="mt-20 grid gap-4 border-t border-line pt-10 md:grid-cols-2"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col gap-2 rounded-card border border-line bg-surface-1 px-5 py-4 transition-colors duration-200 hover:border-accent"
        >
          <span className="font-mono text-mono-xs uppercase tracking-[.08em] text-fg-3">
            ← previous
          </span>
          <span className="text-card-title text-fg transition-colors group-hover:text-accent-text">
            {prev.label}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex flex-col items-end gap-2 rounded-card border border-line bg-surface-1 px-5 py-4 text-right transition-colors duration-200 hover:border-accent"
        >
          <span className="font-mono text-mono-xs uppercase tracking-[.08em] text-fg-3">
            next →
          </span>
          <span className="text-card-title text-fg transition-colors group-hover:text-accent-text">
            {next.label}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
