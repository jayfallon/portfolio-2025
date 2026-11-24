import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-2 h-[42px] px-[18px] rounded-btn font-mono text-mono-md font-semibold transition";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-on hover:brightness-[1.08]",
  secondary:
    "bg-surface-1 border border-line-2 text-fg hover:border-fg-3 transition-colors duration-150",
};

type AnchorProps = {
  href: string;
  external?: boolean;
  download?: boolean;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  "aria-label"?: string;
};

export default function Button({
  href,
  external,
  download,
  children,
  variant = "primary",
  className,
  ...rest
}: AnchorProps) {
  const cls = cn(base, variants[variant], className);
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        download={download}
        className={cls}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
