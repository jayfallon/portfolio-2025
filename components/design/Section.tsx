import { cn } from "@/lib/utils";

export default function Section({
  id,
  children,
  divider = true,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  divider?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-16",
        divider && "border-b border-line",
        className,
      )}
    >
      <div className="mx-auto max-w-container px-6 py-[clamp(56px,7vw,96px)]">{children}</div>
    </section>
  );
}
