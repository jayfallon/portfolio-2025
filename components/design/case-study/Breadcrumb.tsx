import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-1.5 font-mono text-mono-sm uppercase tracking-[.08em] text-fg-3"
    >
      <Link href="/" className="transition-colors hover:text-fg">
        ←
      </Link>
      {items.map((it, i) => (
        <span key={`${it.label}-${i}`} className="inline-flex items-center gap-1.5">
          {i > 0 ? <span aria-hidden>/</span> : null}
          {it.href ? (
            <Link href={it.href} className="transition-colors hover:text-fg">
              {it.label}
            </Link>
          ) : (
            <span className="text-fg">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
