type Entry = { label: string; value: React.ReactNode };

export default function MetaStrip({ entries }: { entries: Entry[] }) {
  return (
    <dl className="mt-10 grid gap-px overflow-hidden rounded-panel border border-line bg-line [grid-template-columns:repeat(auto-fit,minmax(170px,1fr))]">
      {entries.map((e) => (
        <div key={e.label} className="flex flex-col gap-1.5 bg-surface-1 px-5 py-4">
          <dt className="font-mono text-mono-xs uppercase tracking-[.08em] text-fg-3">
            {e.label}
          </dt>
          <dd className="m-0 text-fg">{e.value}</dd>
        </div>
      ))}
    </dl>
  );
}
