import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageCarousel, type CarouselImage } from "@/components/ui/image-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuncio | Jay Fallon",
  description:
    "Nuncio is an open event curation platform that enables users to create and share unlimited lists of musical events without claiming artist, venue, or festival associations.",
};

const technologies = [
  "Next.js 16",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "BullMQ",
  "HeroUI",
  "Tailwind CSS",
  "Framer Motion",
  "Zod",
  "Clerk",
  "AWS S3",
  "CloudFront",
  "Claude AI API",
  "Vitest",
];

const features = [
  {
    title: "Event Sourcing",
    items: [
      "Knokr Database Search: Search by artist, venue, or city from the existing Knokr event database",
      "User Event Creation: Create custom events with immediate availability—no approval workflow required",
      "Bulk Import: Import up to 100 events via CSV upload",
      "AI Image Extraction: Extract tour dates from images using Claude Vision API",
      "Location Intelligence: AI-powered country and state/region suggestions based on venue and city data",
    ],
  },
  {
    title: "List Management",
    items: [
      "Multiple Lists: Create and maintain separate event collections per user",
      "Privacy Controls: Three visibility levels—Private, Unlisted (link-only), or Public",
      "List Organization: Drag-and-drop reordering of events within lists",
      "Public Search: Full-text search across all public lists with genre and location filters",
    ],
  },
  {
    title: "Distribution",
    items: [
      "SEO-Optimized URLs: Public list pages with semantic event slugs",
      "Embeddable Widget: Single-script integration for any website with semantic HTML",
      "Export Formats: JSON-LD (Schema.org), iCal calendar feed, RSS feed",
      "Media Delivery: Image uploads via S3 with CloudFront CDN distribution",
    ],
  },
  {
    title: "Analytics",
    items: [
      "View Tracking: Event view metrics across embedded widgets and public pages",
      "Cross-Platform Measurement: Unified analytics for all distribution channels",
    ],
  },
];

const targetUsers = [
  {
    title: "Artists and Artist Teams",
    description: "Promote tours and events without platform verification requirements",
  },
  {
    title: "Venue Promoters",
    description: "Curate location-specific or genre-specific event calendars",
  },
  {
    title: "Festival Organizers",
    description: "Create and distribute festival lineups and schedules",
  },
  {
    title: "Music Fans and Community Curators",
    description: "Build and share themed event collections by artist, location, or genre",
  },
];

const images: CarouselImage[] = [
  {
    src: "https://dbf43z1u0dmox.cloudfront.net/nuncio/carousel/nuncio-01.webp",
    alt: "Nuncio platform screenshot",
  },
  {
    src: "https://dbf43z1u0dmox.cloudfront.net/nuncio/carousel/nuncio-02.webp",
    alt: "Nuncio platform screenshot",
  },
  {
    src: "https://dbf43z1u0dmox.cloudfront.net/nuncio/carousel/nuncio-03.webp",
    alt: "Nuncio platform screenshot",
  },
];

export default function NuncioPage() {
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
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Nuncio</h1>
        <p className="mt-4 text-lg text-slate-400">Open Event Curation Platform</p>
        <Link
          href="https://nuncio.knokr.com/"
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
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Overview</h2>
        <p className="text-slate-400 leading-relaxed">
          Nuncio is an open event curation platform that enables users to create and share unlimited
          lists of musical events without claiming artist, venue, or festival associations. Users
          can source events from the Knokr database, create their own events, or combine
          both—organizing concerts, festivals, and shows into custom lists by artist, location, or
          genre. Lists are shared via public URLs or embedded directly on websites.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          Built as the aggregation layer for Knokr, Nuncio competes directly with established
          platforms like Bandsintown, Songkick, and Seated by removing restrictions on list creation
          and ownership verification.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Purpose</h2>
        <div className="space-y-4 text-slate-400 leading-relaxed">
          <div>
            <h3 className="font-medium text-slate-300">Data Aggregation for Knokr</h3>
            <p>
              Collect artist event data through user contributions, expanding the Knokr database
              with events that would otherwise remain undiscovered. User-created events immediately
              appear in Knokr search results, creating exposure for emerging and independent
              artists.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-slate-300">Open Curation System</h3>
            <p>
              Provide unrestricted list creation without artist verification, venue partnerships, or
              organizational claims. Users create unlimited event lists targeting any combination of
              artists, locations, or genres, then distribute through public pages or website embeds.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Competitive Differentiation</h2>
        <p className="text-slate-400 leading-relaxed">
          Unlike platforms requiring artist claims or venue partnerships (Bandsintown, Songkick,
          Seated), Nuncio operates as an open system. Users curate and remix events from any
          source—Knokr database, bulk imports, or manual creation—without ownership verification or
          approval workflows. This removes barriers to list creation while simultaneously feeding
          event data back into the Knokr platform.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-200">Core Features</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title}>
              <h3 className="mb-3 font-medium text-slate-300">{feature.title}</h3>
              <ul className="space-y-2">
                {feature.items.map((item, index) => (
                  <li key={index} className="text-sm text-slate-400 leading-relaxed">
                    <span className="text-teal-300">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Website Embedding</h2>
        <p className="mb-4 text-slate-400 leading-relaxed">
          Lists can be embedded using a single script tag. Multiple lists are supported on a single
          page. The widget renders semantic HTML with namespace-prefixed classes for custom styling.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-slate-800/50 p-4 text-sm text-slate-300">
          <code>{`<div data-nuncio-list="list-slug"></div>
<script src="https://nuncio.app/widget.js" data-api="https://nuncio.app"></script>`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-200">Target Users</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {targetUsers.map((user) => (
            <div
              key={user.title}
              className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4"
            >
              <h3 className="font-medium text-slate-300">{user.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{user.description}</p>
            </div>
          ))}
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
