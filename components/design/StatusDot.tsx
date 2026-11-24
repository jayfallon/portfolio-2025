import { cn } from "@/lib/utils";

export type Status = "active" | "in-development" | "inactive" | "past";

const ring = "0 0 0 3px var(--live-bg)";

export default function StatusDot({
  status,
  label,
  className,
}: {
  status: Status;
  label?: string;
  className?: string;
}) {
  const dotClass =
    status === "active"
      ? "h-2 w-2 rounded-full bg-live"
      : status === "in-development"
        ? "h-2 w-2 rounded-full bg-accent"
        : status === "inactive"
          ? "h-2 w-2 rounded-full bg-fg-3"
          : "h-2 w-2 rounded-sm border border-fg-3";

  const dotStyle =
    status === "active"
      ? { boxShadow: ring }
      : status === "in-development"
        ? { boxShadow: "0 0 0 3px var(--accent-bg)" }
        : undefined;

  if (label) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2.5 font-mono text-mono-sm uppercase tracking-[.08em] text-fg-2",
          className,
        )}
      >
        <span aria-hidden className={dotClass} style={dotStyle} />
        {label}
      </span>
    );
  }
  return <span aria-hidden className={cn(dotClass, className)} style={dotStyle} />;
}
