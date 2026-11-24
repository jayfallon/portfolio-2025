import Tag from "../Tag";

export default function StackCloud({ items }: { items: string[] }) {
  return (
    <div className="mt-6">
      <div className="mb-3 font-mono text-mono-xs uppercase tracking-[.08em] text-fg-3">
        stack · {items.length}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <Tag key={item}>{item.toLowerCase()}</Tag>
        ))}
      </div>
    </div>
  );
}
