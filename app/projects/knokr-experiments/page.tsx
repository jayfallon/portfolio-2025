import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageCarousel, type CarouselImage } from "@/components/ui/image-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knokr Experiments | Jay Fallon",
  description:
    "Standalone applications built to test emerging technologies and validate ideas before integrating them into the Knokr platform.",
};

const technologies = ["Next.js", "TypeScript", "Redis", "CSS", "Canvas"];

const images: CarouselImage[] = [
  {
    src: "https://dbf43z1u0dmox.cloudfront.net/experiments/carousel/knokr-experiments-01.webp",
    alt: "Knokr Experiments screenshot",
  },
];

export default function KnokrExperimentsPage() {
  return (
    <div className="max-w-3xl lg:py-24">
      <div className="mb-8">
        <Link
          href="/"
          className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl hover:text-teal-300"
        >
          Jay Fallon
        </Link>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full Stack Software Engineer
        </h2>
      </div>
      <Link
        href="/#projects"
        className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-teal-300"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Projects
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Knokr Experiments
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          Emerging Web Technologies for the Knokr Ecosystem
        </p>
        <Link
          href="https://experiments.knokr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:text-teal-200"
        >
          Visit Site
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0V6.75a.75.75 0 00-.75-.75H7.75a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </header>

      <div className="mb-12">
        <ImageCarousel images={images} priority />
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">The Approach</h2>
        <p className="text-slate-400 leading-relaxed">
          These are experiments focusing on emerging web technologies for potential inclusion into
          the Knokr ecosystem. Each experiment explores a specific API, rendering technique, or
          interaction pattern to evaluate its viability for production use. Some experiments may
          require Google Chrome Canary with experimental flags enabled.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Festival Lineup</h2>
        <p className="text-slate-400 leading-relaxed">
          A responsive artist grid pulling real festival lineup data from PostgreSQL via Redis.
          Artist images are served from CloudFront and rendered into a canvas using the
          HTML-in-Canvas API&apos;s{" "}
          <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">drawElementImage()</code>.
          Features keyboard navigation, Ken Burns animation, flip effects, live search filtering,
          and Web Audio API sound feedback. Each page refresh loads a different random festival with
          40+ artists.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Festival Homepage</h2>
        <p className="text-slate-400 leading-relaxed">
          A single-page festival homepage with a full-viewport video background and layered content
          sections rendered through the HTML-in-Canvas API. The hero displays the festival name,
          location, date range, a live countdown timer, and genre tags — all pulled from the
          database. Content sections are arranged in a two-column grid with the lineup section
          spanning a full row displaying artist images at the 3456/2000 aspect ratio. A fixed header
          and footer with backdrop blur hide on scroll down and reappear on scroll up.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Technology Stack</h2>
        <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech}>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
