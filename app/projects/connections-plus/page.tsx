import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageCarousel, type CarouselImage } from "@/components/ui/image-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connections Plus | Jay Fallon",
  description:
    "A daily word puzzle game that riffs on NYT Connections with a multi-level red herring progression system.",
};

const technologies = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Redis",
  "HeroUI",
  "Tailwind CSS 4",
  "Framer Motion",
  "Lucide React",
  "Claude AI API",
  "Turbopack",
];

const images: CarouselImage[] = [
  {
    src: "https://d381oh62lm94pz.cloudfront.net/connections/carousel/connections-01.webp",
    alt: "Connections Plus game interface",
  },
  {
    src: "https://d381oh62lm94pz.cloudfront.net/connections/carousel/connections-02.webp",
    alt: "Connections Plus game interface",
  },
  {
    src: "https://d381oh62lm94pz.cloudfront.net/connections/carousel/connections-03.webp",
    alt: "Connections Plus game interface",
  },
  {
    src: "https://d381oh62lm94pz.cloudfront.net/connections/carousel/connections-3a.webp",
    alt: "Connections Plus game interface",
  },
  {
    src: "https://d381oh62lm94pz.cloudfront.net/connections/carousel/connections-04.webp",
    alt: "Connections Plus game interface",
  },
];

export default function ConnectionsPlusPage() {
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
          Connections Plus
        </h1>
        <p className="mt-4 text-lg text-slate-400">A Daily Word Puzzle Game</p>
        <Link
          href="https://connections-plus.jayfallon.net"
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
        <h2 className="mb-4 text-xl font-semibold text-slate-200">What I Built</h2>
        <p className="text-slate-400 leading-relaxed">
          A daily word puzzle game that riffs on NYT Connections with a twist: 17 words per level
          instead of 16, with the extra word being a &ldquo;red herring&rdquo; that carries forward
          and accumulates across four increasingly difficult levels. By Level 4, the four
          accumulated red herrings form their own final group — &ldquo;Double Meanings&rdquo; —
          creating layers of misdirection that build as you play.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          The full-stack application includes the game itself, an admin panel for puzzle creation
          with Claude API integration for generating word groups, a calendar-based content
          scheduling system for daily puzzle releases, and anonymous player tracking with daily play
          limits — all backed by Redis on Railway.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-200">Key Technical Decisions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Red Herring Progression System</h3>
            <p className="text-slate-400 leading-relaxed">
              The core game mechanic required careful state management. Each level has 16 grouped
              words plus accumulated red herrings from prior levels — 17 words in Level 1, 18 in
              Level 2, 19 in Level 3. Level 4 drops back to 16 words with the four red herrings
              forming the final group. Game configs and player progress are stored in Redis with
              date-keyed and player-keyed patterns.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Puzzle Creation with AI Assistance</h3>
            <p className="text-slate-400 leading-relaxed">
              The admin panel uses Claude API to generate word groups from category descriptions.
              The workflow is red-herring-first: you create the four red herring words that form the
              final &ldquo;Double Meanings&rdquo; group, then build out the four levels around them,
              assigning one red herring to each of the first three levels. This inverted design
              process ensures the misdirection is intentional, not an afterthought.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Anonymous Player Tracking</h3>
            <p className="text-slate-400 leading-relaxed">
              No login, no personal data. Players get a persistent ID via localStorage with cookie
              backup. Daily play limits reset at UTC midnight. No accounts, no friction — just play.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Game State Persistence</h3>
            <p className="text-slate-400 leading-relaxed">
              Game progress — solved groups, current level, mistakes — persists to localStorage
              after every action. On page load, saved state is restored so the player picks up
              exactly where they left off. State clears when the player clicks &ldquo;Play
              Again&rdquo; or &ldquo;Start Over.&rdquo; No login or server-side player tracking
              required — the browser holds the state.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Content Scheduling</h3>
            <p className="text-slate-400 leading-relaxed">
              A calendar-based admin view for managing puzzle inventory across months. Each puzzle
              is keyed by date in Redis, with the admin interface showing which days have puzzles
              scheduled, monthly counts, and gaps that need filling. Puzzles go live automatically
              at their scheduled date.
            </p>
          </div>
        </div>
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
