import ReactMarkdown from "react-markdown";
import { AboutSection } from "@/types/portfolio";

export default function About({ data }: { data: AboutSection }) {
  return (
    <section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="about"
      aria-label="About Jay Fallon"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">{data.title}</h2>
      </div>
      {data.content.map((paragraph, index) => (
        <div key={index} className="mb-4">
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  {...props}
                  className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
            }}
          >
            {paragraph}
          </ReactMarkdown>
        </div>
      ))}
    </section>
  );
}
