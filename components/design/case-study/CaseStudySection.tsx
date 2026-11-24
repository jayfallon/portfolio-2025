export default function CaseStudySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="mb-5 flex items-baseline gap-3 text-h2 text-fg">
        <span className="font-mono text-mono-sm uppercase tracking-[.08em] text-accent-text">
          {number}
        </span>
        {title}
      </h2>
      <div className="max-w-prose space-y-4 text-prose text-fg-2 [&_a]:text-fg [&_a]:border-b [&_a]:border-accent [&_strong]:text-fg">
        {children}
      </div>
    </section>
  );
}
