import Image from "next/image";
import Link from "next/link";
import { ProjectsSection } from "@/types/portfolio";

const S3_PORTFOLIO_URL = "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com";

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function Projects({ data }: { data: ProjectsSection }) {
  return (
    <section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="projects"
      aria-label="Projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">{data.title}</h2>
      </div>
      <div className="relative">
        {data.items.map((project, index) => (
          <div
            key={index}
            className="mb-12 group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <Link
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                  href={`/projects/${createSlug(project.title)}`}
                  aria-label={`${project.title} project details`}
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    {project.title}
                  </span>
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-normal">{project.description}</p>
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative sm:order-1 sm:col-span-2">
              <Image
                src={project.image.src.startsWith('/images/') ? project.image.src : `${S3_PORTFOLIO_URL}${project.image.src}`}
                alt={project.image.alt}
                width={200}
                height={125}
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
