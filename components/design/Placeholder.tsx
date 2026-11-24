import { cn } from "@/lib/utils";

export default function Placeholder({
  caption,
  className,
  aspect = "1.6",
}: {
  caption: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={cn(
        "grid place-items-center bg-placeholder font-mono text-mono-sm text-fg-3",
        className,
      )}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={caption}
    >
      {caption}
    </div>
  );
}
