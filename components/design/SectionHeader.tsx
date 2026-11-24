export default function SectionHeader({
  number,
  title,
  meta,
}: {
  number: string;
  title: string;
  meta?: string;
}) {
  return (
    <div className="mb-10 flex items-center gap-3.5">
      <span className="font-mono text-mono-sm uppercase tracking-[.08em] text-accent-text">
        {number}
      </span>
      <h2 className="text-h2 text-fg">{title}</h2>
      <span aria-hidden className="h-px flex-1 bg-line" />
      {meta ? (
        <span className="font-mono text-mono-sm uppercase tracking-[.08em] text-fg-3">{meta}</span>
      ) : null}
    </div>
  );
}
