import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageCarousel, type CarouselImage } from "@/components/ui/image-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knokr | Jay Fallon",
  description:
    "Knokr is a festival discovery and social platform that consolidates lineup data, schedules, and artist information across 1,400+ festivals and 50,000+ artists into a single searchable interface.",
};

const technologies = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "PostgreSQL",
  "pgvector",
  "Prisma",
  "Redis",
  "HeroUI",
  "Tailwind CSS",
  "Framer Motion",
  "@dnd-kit",
  "html-to-image",
  "Clerk",
  "AWS S3",
  "CloudFront",
  "Claude AI API",
  "Xenova Transformers",
  "React Hook Form",
  "Zod",
  "Railway",
];

const images: CarouselImage[] = [
  {
    src: "https://dbf43z1u0dmox.cloudfront.net/knokr/carousel/knokr-01.webp",
    alt: "Knokr platform screenshot",
  },
  {
    src: "https://dbf43z1u0dmox.cloudfront.net/knokr/carousel/knokr-02.webp",
    alt: "Knokr platform screenshot",
  },
  {
    src: "https://dbf43z1u0dmox.cloudfront.net/knokr/carousel/knokr-03.webp",
    alt: "Knokr platform screenshot",
  },
  {
    src: "https://dbf43z1u0dmox.cloudfront.net/knokr/carousel/knokr-04.webp",
    alt: "Knokr platform screenshot",
  },
  {
    src: "https://dbf43z1u0dmox.cloudfront.net/knokr/carousel/knokr-05.webp",
    alt: "Knokr platform screenshot",
  },
  {
    src: "https://dbf43z1u0dmox.cloudfront.net/knokr/carousel/knokr-06.webp",
    alt: "Knokr platform screenshot",
  },
];

export default function KnokrPage() {
  return (
    <div className="max-w-3xl lg:py-24">
      <div className="mb-8">
        <Link href="/" className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl hover:text-teal-300">
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
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Knokr</h1>
        <p className="mt-4 text-lg text-slate-400">Festival Discovery and Social Platform</p>
        <Link
          href="https://knokr.com/"
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
        <h2 className="mb-4 text-xl font-semibold text-slate-200">The Problem</h2>
        <p className="text-slate-400 leading-relaxed">
          Festival information is scattered across hundreds of individual websites, each with
          different formats, incomplete lineups, and no way to compare options. A fan trying to
          decide between festivals has to manually check dozens of sites, cross-reference artists,
          and guess at genre overlap. There&apos;s no unified layer connecting festivals, artists,
          and attendees — and no tooling that helps fans make informed purchasing decisions across
          the entire landscape.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">What I Built</h2>
        <p className="text-slate-400 leading-relaxed">
          Knokr is a festival discovery and social platform that consolidates lineup data,
          schedules, and artist information across 1,400+ festivals and 50,000+ artists into a
          single searchable interface. Beyond discovery, it connects festival attendees with each
          other for social coordination around shared events.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          The platform evolved through multiple iterations — starting as a Python-based poster
          extraction tool that output CSV and JSON, progressing through standalone experiments
          (Orchestra for artist relationships, Nuncio for event data distribution), and arriving at
          the current Next.js architecture with a shared PostgreSQL infrastructure. Each iteration
          validated specific capabilities before they were integrated into the production platform.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-200">Key Technical Decisions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 font-medium text-slate-300">AI-Powered Lineup Extraction</h3>
            <p className="text-slate-400 leading-relaxed">
              Festival posters are the primary way lineups are announced, but extracting structured
              data from them is messy — inconsistent typography, creative layouts, and hundreds of
              artist names per image. I built an extraction pipeline using Claude Vision API that
              identifies artists from poster images, matches them against the existing 50,000+
              artist database, derives genre information from artist self-reporting, and assembles
              complete lineups. This is what makes it possible to maintain 1,400+ festivals without
              manual data entry — a scale that would be infeasible to manage by hand when individual
              festivals can have 100+ artists each.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Dual Search Architecture</h3>
            <p className="text-slate-400 leading-relaxed">
              The platform implements both semantic search using pgvector embeddings (for natural
              language queries like &ldquo;chill electronic festivals near the coast&rdquo;) and
              full-text search using PostgreSQL tsvector indexing (for precise artist and festival
              name matching). Each serves a different user intent — discovery vs. lookup — and both
              operate against the same dataset without requiring separate search infrastructure.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Dream Lineup Builder</h3>
            <p className="text-slate-400 leading-relaxed">
              Users can construct hypothetical festivals with drag-and-drop artist ordering, stage
              assignments, and schedule management using @dnd-kit — then export lineup posters as
              PNGs via html-to-image or share via public URLs. This required solving state
              management for complex nested drag operations across days, stages, and billing tiers,
              where a single festival can span multiple days with multiple stages and dozens of
              artists per stage.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">
              Conversational Recommendation Engine
            </h3>
            <p className="text-slate-400 leading-relaxed">
              A Claude-powered decision engine that takes user constraints (budget, location, genre
              preferences, must-see artists) and provides personalized festival comparisons with
              trade-off analysis. Rather than presenting raw data, the engine synthesizes lineup
              composition, geographic convenience, genre balance, and cost to surface what actually
              matters for purchasing decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Architecture</h2>
        <p className="text-slate-400 leading-relaxed">
          Built on Next.js 16 with React 19, TypeScript, PostgreSQL with pgvector extensions, Prisma
          ORM, and Redis caching. The application shares its database infrastructure with Knokr
          Base, enabling both applications to operate against a unified data model — lineup updates
          in Base appear on Knokr without manual sync. Media storage uses AWS S3 with CloudFront
          CDN. Authentication via Clerk. UI built with HeroUI, Tailwind CSS, and Framer Motion.
          Deployed to Railway.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">What This Enables</h2>
        <p className="text-slate-400 leading-relaxed">
          The shared data layer has proven extensible beyond the core platform. It now powers Mojo
          Boston — a white-label festival website built on PayloadCMS that pulls lineup, schedule,
          and venue data directly from the Knokr database, demonstrating a turnkey B2B product for
          festival organizers. The same infrastructure also feeds Orchestra (artist relationship
          mapping) and Nuncio (event curation and distribution), validating that the data model
          supports multiple distinct consumption patterns from a single source of truth.
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
