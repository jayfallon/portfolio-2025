export default function PastClientRow({
  title,
  org,
  year,
  url,
  external = true,
}: {
  title: string;
  org: string;
  year?: string;
  url: string;
  external?: boolean;
}) {
  const content = (
    <>
      <span className="flex-[1_1_260px] text-[16px] font-semibold text-fg">{title}</span>
      <span className="flex-[1_1_220px] text-[14px] text-fg-2">{org}</span>
      <span className="min-w-[90px] font-mono text-mono-xs text-fg-3">{year}</span>
      <span className="font-mono text-mono-xs font-semibold text-accent-text">
        visit ↗
      </span>
    </>
  );

  return (
    <a
      href={url}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b border-line px-1 py-4 transition-colors duration-150 hover:bg-surface-1"
    >
      {content}
    </a>
  );
}
