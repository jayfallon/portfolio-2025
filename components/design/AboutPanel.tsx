import ReactMarkdown from "react-markdown";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function AboutPanel({
  paragraphs,
  heading = "Hi, I'm Jay.",
}: {
  paragraphs: string[];
  heading?: string;
}) {
  return (
    <Section id="about">
      <SectionHeader number="03" title="About" />
      <article className="max-w-readme overflow-hidden rounded-panel border border-line bg-surface-1">
        <div className="flex items-center border-b border-line bg-surface-2 font-mono text-mono-sm uppercase tracking-[.08em]">
          <span className="-mb-px border-r border-line border-b border-b-surface-1 bg-surface-1 px-4 py-2.5 text-fg">
            README.md
          </span>
          <span className="px-4 py-2.5 text-fg-3">jay-fallon / about</span>
        </div>
        <div className="flex flex-col gap-4.5 p-[clamp(22px,3.4vw,44px)] text-prose text-fg-2">
          <div className="font-mono text-[22px] font-semibold text-fg">
            <span className="text-fg-3"># </span>
            {heading}
          </div>
          {paragraphs.map((p, i) => (
            <ReactMarkdown
              key={i}
              components={{
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={href?.startsWith("http") ? "noreferrer" : undefined}
                    className="text-fg"
                    style={{ borderBottom: "1px solid var(--accent)" }}
                  >
                    {children}
                  </a>
                ),
                p: ({ children }) => (
                  <p className="m-0 text-pretty">{children}</p>
                ),
              }}
            >
              {p}
            </ReactMarkdown>
          ))}
        </div>
      </article>
    </Section>
  );
}
