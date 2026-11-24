type Row = { key: string; value: React.ReactNode };

export default function StatusPanel({
  filename = "status.json",
  available = true,
  rows,
}: {
  filename?: string;
  available?: boolean;
  rows: Row[];
}) {
  return (
    <aside className="w-full max-w-[420px] flex-1 overflow-hidden rounded-panel border border-line bg-surface-1 text-[14px]">
      <div className="flex items-center justify-between border-b border-line bg-surface-2 px-3.5 py-2.5 font-mono text-mono-xs uppercase tracking-[.08em] text-fg-3">
        <span>{filename}</span>
        {available ? (
          <span className="inline-flex items-center gap-1.5 text-live">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-live"
              style={{ boxShadow: "0 0 0 3px var(--live-bg)" }}
            />
            available
          </span>
        ) : null}
      </div>
      <dl className="px-3.5 py-2">
        {rows.map((row, i) => (
          <div
            key={row.key}
            className="flex gap-3.5 py-2.5"
            style={{
              borderBottom:
                i < rows.length - 1 ? "1px dashed var(--border)" : undefined,
            }}
          >
            <dt className="flex-[0_0_78px] font-mono text-mono-xs uppercase leading-[1.9] tracking-[.08em] text-fg-3">
              {row.key}
            </dt>
            <dd className="m-0 text-fg">{row.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
