import Link from "next/link";

export default function Wordmark() {
  return (
    <Link
      href="/#top"
      className="flex items-center font-mono text-[14px] font-semibold tracking-[-0.01em] text-fg"
      aria-label="Jay Fallon — home"
    >
      <span className="text-accent-text">~/</span>jay-fallon
      <span
        aria-hidden
        className="ml-1 inline-block h-3.5 w-[7px] bg-accent opacity-85"
      />
    </Link>
  );
}
