import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const S3_PORTFOLIO_URL = "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com";

interface Project {
  title: string;
  url: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  technologies: string[];
}

interface Props {
  project: Project;
}

// Enhanced project content for Connections Plus
const getProjectContent = (projectTitle: string) => {
  if (projectTitle === "Connections Plus") {
    return {
      overview:
        "Connections Plus is a sophisticated daily word puzzle game that reimagines NYT Connections with innovative multi-level progression and strategic 'red herring' mechanics. Built as a full-stack web application with comprehensive admin tools and player tracking.",
      keyFeatures: [
        "Multi-Level Progression System with accumulating complexity across 4 levels",
        "Strategic Red Herring mechanics that create sophisticated misdirection",
        "AI-Powered Word Generation using Claude API with human oversight",
        "Anonymous Player Tracking using localStorage + cookies for privacy",
        "Daily Puzzle System with UTC midnight cutoffs",
        "Real-time Progress Saving to Redis for seamless experience",
        "Responsive Grid System handling 17-19 dynamic word layouts",
        "Comprehensive Admin Panel with calendar scheduling",
      ],
      technicalHighlights: [
        "Built with Next.js 15 and App Router for modern React development",
        "Full TypeScript implementation with strict type checking",
        "Redis Cloud integration for high-performance data storage",
        "HeroUI component library for polished, accessible UI",
        "Framer Motion animations for smooth user interactions",
        "Mobile-responsive design optimized for all screen sizes",
        "Basic Authentication middleware for admin security",
        "Date-based scheduling with calendar interface",
      ],
      challenges: [
        "Dynamic Grid Layouts: Handling variable word counts (17-19 words) across different levels",
        "State Management: Complex multi-level game progression with red herring carry-over",
        "Anonymous Privacy: Providing personalization without collecting personal data",
        "Date Handling: Proper UTC timezone management for global daily puzzles",
      ],
      gallery: [
        {
          src: "/images/connections-plus-02.png",
          alt: "Connections Plus game interface showing multi-level progression",
        },
        {
          src: "/images/connections-plus-03.png",
          alt: "Connections Plus admin panel and calendar management system",
        },
        {
          src: "/images/connections-plus-04.png",
          alt: "Connections Plus admin panel and calendar management system",
        },
      ],
    };
  }

  // Default content structure for other projects
  return {
    overview: null,
    keyFeatures: [],
    technicalHighlights: [],
    challenges: [],
    gallery: [],
  };
};

export default function ProjectPage({ project }: Props) {
  const content = getProjectContent(project.title);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Back navigation */}
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-start lg:py-24">
          <div>
            <Link
              href="/#projects"
              className="group mb-8 inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to projects
            </Link>
          </div>

          {/* Project image */}
          <div className="relative mb-8">
            <Image
              src={
                project.image.src.startsWith("/images/")
                  ? project.image.src
                  : `${S3_PORTFOLIO_URL}${project.image.src}`
              }
              alt={project.image.alt}
              width={600}
              height={400}
              className="rounded-lg border-2 border-slate-200/10"
              priority
            />
          </div>

          {/* Technologies */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-200">
              Technologies
            </h3>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <li key={index}>
                  <div className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    {tech}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="pt-12 lg:w-1/2 lg:py-24">
          <header className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              {project.title}
            </h1>
            <div className="mt-4">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center font-medium leading-tight text-teal-300 hover:text-teal-200 focus-visible:text-teal-200"
              >
                View live project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform hover:-translate-y-1 hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </header>

          {/* Project description */}
          <div className="mb-8">
            <p className="text-slate-400 leading-relaxed">{project.description}</p>
          </div>

          {/* Enhanced content based on project */}
          <div className="space-y-8 text-slate-400">
            {content.overview && (
              <div>
                <h2 className="mb-4 text-xl font-bold text-slate-200">Project Overview</h2>
                <p className="leading-relaxed">{content.overview}</p>
              </div>
            )}

            {content.keyFeatures.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-bold text-slate-200">Key Features</h2>
                <ul className="space-y-3">
                  {content.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300"></span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {content.technicalHighlights.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-bold text-slate-200">Technical Highlights</h2>
                <ul className="space-y-3">
                  {content.technicalHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300"></span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {content.challenges.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-bold text-slate-200">Technical Challenges</h2>
                <ul className="space-y-3">
                  {content.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300"></span>
                      <span className="leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {content.gallery.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-bold text-slate-200">Gallery</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {content.gallery.map((image, index) => (
                    <div key={index} className="relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="rounded-lg border-2 border-slate-200/10 transition-all hover:border-slate-200/30"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Fallback content for projects without enhanced content */}
            {!content.overview && content.keyFeatures.length === 0 && (
              <div>
                <h2 className="mb-4 text-xl font-bold text-slate-200">Project Overview</h2>
                <p className="leading-relaxed">
                  This section can be expanded with more detailed information about the project,
                  including challenges faced, solutions implemented, and key achievements.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
