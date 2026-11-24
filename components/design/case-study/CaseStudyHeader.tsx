import Button from "../Button";
import type { Status } from "../StatusDot";

const labelFor: Record<Status, string> = {
  active: "active",
  "in-development": "in development",
  inactive: "inactive",
  past: "past",
};

export default function CaseStudyHeader({
  title,
  tagline,
  status,
  siteUrl,
}: {
  title: string;
  tagline: string;
  status: Status;
  siteUrl?: string;
}) {
  return (
    <header className="mt-8 flex flex-col gap-5">
      <span
        className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface-1 px-3 py-1 font-mono text-mono-sm uppercase tracking-[.08em] text-fg-2"
      >
        <span
          aria-hidden
          className={
            status === "active"
              ? "h-2 w-2 rounded-full bg-live"
              : status === "in-development"
                ? "h-2 w-2 rounded-full bg-accent"
                : status === "inactive"
                  ? "h-2 w-2 rounded-full bg-fg-3"
                  : "h-2 w-2 rounded-sm border border-fg-3"
          }
          style={
            status === "active"
              ? { boxShadow: "0 0 0 3px var(--live-bg)" }
              : status === "in-development"
                ? { boxShadow: "0 0 0 3px var(--accent-bg)" }
                : undefined
          }
        />
        {labelFor[status]}
      </span>
      <h1 className="text-display-sm text-fg">{title}</h1>
      <p className="max-w-[720px] text-lead text-fg-2">{tagline}</p>
      {siteUrl ? (
        <div>
          <Button href={siteUrl} external variant="primary">
            Visit site <span aria-hidden>↗</span>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
