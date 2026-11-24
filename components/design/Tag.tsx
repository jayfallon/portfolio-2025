import { cn } from "@/lib/utils";

export default function Tag({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "chip";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono text-mono-xs lowercase",
        variant === "default" &&
          "rounded-tag border border-line px-2 py-[3px] text-fg-2",
        variant === "chip" &&
          "rounded-full bg-accent-bg px-2.5 py-[3px] text-accent-text",
        className,
      )}
    >
      {children}
    </span>
  );
}
