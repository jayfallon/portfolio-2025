import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function CaseStudyMarkdown({ source }: { source: string }) {
  return (
    <div className="case-study-body mt-12 max-w-prose text-prose text-fg-2">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: () => null,
          hr: () => null,
          h2: ({ children }) => (
            <h2 className="mt-14 mb-5 flex items-baseline gap-3 text-h2 text-fg">
              <span
                aria-hidden
                className="case-study-section-number font-mono text-mono-sm uppercase tracking-[.08em] text-accent-text"
              />
              <span>{children}</span>
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-8 text-h3 text-fg">{children}</h3>
          ),
          p: ({ children }) => <p className="mt-4 text-pretty">{children}</p>,
          ul: ({ children }) => (
            <ul className="mt-4 list-disc space-y-1.5 pl-5">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mt-4 list-decimal space-y-2 pl-5">{children}</ol>
          ),
          li: ({ children }) => <li className="text-pretty">{children}</li>,
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
          strong: ({ children }) => (
            <strong className="font-semibold text-fg">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          code: ({ children }) => (
            <code className="rounded bg-surface-2 border border-line px-1.5 py-0.5 font-mono text-[0.86em]">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="mt-4 overflow-x-auto rounded-panel border border-line bg-code px-4 py-3 font-mono text-[13.5px] leading-[1.7]">
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="mt-4 rounded-panel border border-line bg-accent-bg px-5 py-3 text-fg-2">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="mt-6 overflow-x-auto rounded-panel border border-line">
              <table className="w-full border-collapse text-small">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-surface-2">{children}</thead>
          ),
          tr: ({ children }) => (
            <tr className="border-t border-line first:border-t-0">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left font-mono text-mono-xs uppercase tracking-[.08em] text-fg-3">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 align-top text-fg-2">{children}</td>
          ),
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
