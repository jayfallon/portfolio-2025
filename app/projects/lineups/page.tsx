import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knokr Lineups | Jay Fallon",
  description:
    "Knokr Lineups is a unified festival discovery and lineup management platform that consolidates festival information into a single searchable interface with AI-powered extraction.",
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

const features = [
  {
    title: "Festival Discovery",
    items: [
      "Browse and Search: Filter festivals by location, genre, artist, and dates",
      "Semantic Search: Vector embedding-based search for natural language queries",
      "Full-Text Search: PostgreSQL tsvector indexing for precise text matching",
      "Festival Detail Pages: Comprehensive lineup information with artist profiles",
      "Artist Navigation: A-Z alphabetical browsing with pagination",
    ],
  },
  {
    title: "AI-Powered Lineup Extraction",
    items: [
      "Poster Upload: Extract artist names from festival poster images using Claude Vision API",
      "Artist Matching: Automatically match extracted names to existing database records",
      "Genre Discovery: Derive genre information from artist self-reporting",
      "Lineup Assembly: Build complete festival lineups from extracted data",
      "Database Enrichment: Add new artists and festival data in near real-time",
    ],
  },
  {
    title: "Dream Lineup Builder",
    items: [
      "Custom Festival Creation: Build hypothetical festivals with names, descriptions, genres, and locations",
      "Artist Search and Selection: Add artists from the Knokr database to custom lineups",
      "Lineup Organization: Drag-and-drop reordering with billing assignments",
      "Stage and Schedule Management: Assign artists to performance days and stages",
      "Poster Export: Generate PNG exports of custom lineup posters",
      "Public Sharing: Publish dream lineups via unique URLs",
    ],
  },
  {
    title: "AI Decision Engine",
    items: [
      "Conversational Interface: Claude-powered chat for festival recommendations",
      "Preference Analysis: Budget, location, genre, and artist preference consideration",
      "Festival Comparison: Multi-festival trade-off analysis and ranking",
      "Personalized Recommendations: Intelligent matching based on user constraints",
    ],
  },
];

const audienceValue = [
  {
    title: "For Festival Attendees",
    items: [
      "Unified Discovery: Single platform replacing dozens of individual festival websites",
      "Informed Decisions: Comprehensive lineup data, artist relationships, and genre analysis",
      "Comparison Tools: Dream lineup builder and AI decision engine for evaluating options",
      "Real-Time Updates: Near real-time lineup changes through automated extraction",
    ],
  },
  {
    title: "For Festival Organizers",
    items: [
      "Data Management: Centralized platform for lineup information with extraction capabilities",
      "Audience Reach: Public-facing pages providing festival visibility",
      "Analytics Foundation: Usage data and search patterns informing promotional strategies",
    ],
  },
  {
    title: "For Knokr Ecosystem",
    items: [
      "Mobile App Foundation: Festival data layer for the mobile application in development",
      "Data Acquisition: Automated extraction maintaining database freshness at scale",
      "User Engagement: Public discovery features building awareness and adoption",
      "Intelligence Layer: Genre insights and artist relationships from self-reported data",
    ],
  },
];

const targetUsers = [
  {
    title: "Festival Attendees",
    description:
      "Music fans seeking comprehensive festival information to make informed purchasing decisions",
  },
  {
    title: "Festival Organizers",
    description:
      "Event managers requiring up-to-date lineup data management and public visibility",
  },
  {
    title: "Mobile App Users",
    description: "Future users of the Knokr mobile festival application",
  },
  {
    title: "Music Community",
    description: "Contributors improving artist data through the contribution system",
  },
];

export default function LineupsPage() {
  return (
    <div className="max-w-3xl lg:py-24">
      <Link
        href="/#projects"
        className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-teal-300"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Projects
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Knokr Lineups
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          Festival Discovery and Lineup Management Platform
        </p>
        <Link
          href="https://lineups.knokr.com/"
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
        <Image
          src="https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/lineups/lineups-lg.webp"
          alt="Knokr Lineups platform screenshot"
          width={1200}
          height={675}
          className="rounded-lg border border-slate-700/50"
          priority
        />
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Overview</h2>
        <p className="text-slate-400 leading-relaxed">
          Knokr Lineups is a unified festival discovery and lineup management platform that
          consolidates festival information into a single searchable interface. Built as an
          evolution from a Python-based poster extraction tool, the platform enables users
          to browse festivals by location, genre, and artist—eliminating the need to visit
          dozens of individual festival websites to make informed purchasing decisions.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          The platform serves dual audiences: festival attendees seeking comprehensive
          lineup information and festival organizers requiring up-to-date data management.
          Knokr Lineups operates as the data acquisition and public-facing layer for the
          broader Knokr festival ecosystem, feeding the mobile festival application
          currently in development.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Purpose</h2>
        <div className="space-y-4 text-slate-400 leading-relaxed">
          <div>
            <h3 className="font-medium text-slate-300">Centralized Festival Information</h3>
            <p>
              Replace the fragmented experience of visiting individual festival websites
              with a unified platform providing real-time lineup data, artist relationships,
              and festival comparisons. Users access comprehensive festival information—lineups,
              dates, locations, genres—through a single interface with advanced search and
              filtering.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-slate-300">Rapid Data Acquisition</h3>
            <p>
              Leverage AI-powered lineup extraction from festival posters to populate the
              database at scale. The extraction tool identifies artists, builds festival
              lineups, and derives genre information from artist self-reporting—enabling
              near real-time data updates that would be infeasible to maintain manually
              across hundreds of festivals with 100+ artists each.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-slate-300">Decision Support</h3>
            <p>
              Provide festival comparison and recommendation tools to help users navigate
              purchasing decisions constrained by budget, time, and artist availability.
              The AI decision engine cuts through marketing hype to deliver personalized
              recommendations based on user preferences, festival characteristics, and
              lineup composition.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">
          Competitive Differentiation
        </h2>
        <p className="text-slate-400 leading-relaxed">
          Unlike listing services such as Music Festival Wizard, Knokr Lineups provides
          deeper data relationships—artist connections, festival similarities, genre
          analysis, and recommendation intelligence. The platform&apos;s extraction capabilities
          and unified data model enable rapid updates across the entire festival database,
          maintaining accuracy without manual intervention. Once the mobile application
          launches, users will access all festival information through a single ecosystem
          rather than maintaining bookmarks across dozens of festival websites.
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
                    <span className="text-teal-300">•</span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-200">Strategic Value</h2>
        <div className="space-y-6">
          {audienceValue.map((audience) => (
            <div key={audience.title}>
              <h3 className="mb-3 font-medium text-slate-300">{audience.title}</h3>
              <ul className="space-y-2">
                {audience.items.map((item, index) => (
                  <li key={index} className="text-sm text-slate-400 leading-relaxed">
                    <span className="text-teal-300">•</span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Development Evolution</h2>
        <p className="text-slate-400 leading-relaxed">
          Knokr Lineups originated as a Python-based application focused on extracting
          festival lineups from posters into CSV and JSON formats. Migration to Next.js
          and React enabled rich interactions like drag-and-drop lineup management, poster
          generation, Claude-powered extraction and decision engine, scalable architecture
          with shared database and Redis caching, and a modern component-based design
          system with HeroUI.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          The platform now serves as both production data acquisition tool and public-facing
          festival discovery interface.
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
