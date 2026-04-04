import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageCarousel, type CarouselImage } from "@/components/ui/image-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knokr Base | Jay Fallon",
  description:
    "Knokr Base is a multi-tenant CMS and administrative platform designed specifically for the music industry, managing the full lifecycle of data across 50,000+ artists and 1,400+ festivals.",
};

const technologies = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "PostgreSQL",
  "pgvector",
  "Prisma",
  "Redis",
  "BullMQ",
  "HeroUI",
  "Tailwind CSS 4",
  "Clerk",
  "AWS S3",
  "CloudFront",
  "OpenAI API",
  "Node2Vec",
  "Vitest",
  "Playwright",
  "Testcontainers",
  "Memlab",
  "Sentry",
  "Winston",
  "Railway",
];

const images: CarouselImage[] = [
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/base/carousel/base-01.webp",
    alt: "Knokr Base platform screenshot",
  },
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/base/carousel/base-02.webp",
    alt: "Knokr Base platform screenshot",
  },
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/base/carousel/base-03.webp",
    alt: "Knokr Base platform screenshot",
  },
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/base/carousel/base-04.webp",
    alt: "Knokr Base platform screenshot",
  },
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/base/carousel/base-05.webp",
    alt: "Knokr Base platform screenshot",
  },
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/base/carousel/base-06.webp",
    alt: "Knokr Base platform screenshot",
  },
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/base/carousel/base-07.webp",
    alt: "Knokr Base platform screenshot",
  },
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/base/carousel/base-08.webp",
    alt: "Knokr Base platform screenshot",
  },
];

export default function KnokrBasePage() {
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
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Knokr Base</h1>
        <p className="mt-4 text-lg text-slate-400">Music Industry Data Platform and Back Office</p>
        <Link
          href="https://base.knokr.com/"
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
          Managing 50,000+ artists and 1,400+ festivals requires more than a spreadsheet. The data
          relationships are complex — artists play at multiple festivals, festivals share artists
          across years, genres overlap and evolve, and venues host events across different
          promoters. The music industry needed a purpose-built back office that could handle entity
          management, content publishing, team collaboration, and data enrichment at scale — while
          feeding multiple consumer-facing applications from a single source of truth.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          Beyond data management, artists and small venues lack access to affordable, music-specific
          web infrastructure. Generic website builders don&apos;t understand discographies, lineup
          management, or cross-entity networking. The industry needed a platform that removes
          technical barriers while providing domain-specific tooling.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">What I Built</h2>
        <p className="text-slate-400 leading-relaxed">
          Knokr Base is a multi-tenant CMS and administrative platform designed specifically for the
          music industry. It manages the full lifecycle of festival, artist, venue, and sponsor data
          — from image uploading and lineup management to graph-based discovery and AI-powered data
          enrichment. Every entity gets its own managed presence with a branded site at
          /f/[username], and the platform serves as the data backbone for the entire Knokr
          ecosystem.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          The system also operates as an integration platform — Orchestra, Knokr, and Nuncio share
          its PostgreSQL database but operate independently, enabling rapid feature iteration in
          isolation. As features prove valuable in these experimental products, they merge into
          Base, which will ultimately serve as the unified user-facing platform.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-200">Key Technical Decisions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Database-Driven Routing</h3>
            <p className="text-slate-400 leading-relaxed">
              URLs are defined in the database via NavigationItem records rather than filesystem
              paths. This means content changes don&apos;t require code deployments — users can
              create pages, restructure navigation, and publish content entirely through the CMS
              without web administration expertise. It required building a routing engine that
              resolves database records at request time while maintaining performance through Redis
              caching. This is a meaningful differentiator against generic website builders, where
              page creation typically requires either technical knowledge or rigid templates.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Multi-Tenant Entity Architecture</h3>
            <p className="text-slate-400 leading-relaxed">
              I designed a two-layer system separating entity types (Artist, Venue, Festival,
              Sponsor tables with type-specific fields) from a unified Project container that
              provides common functionality — pages, media, navigation, and permissions. Each user
              gets their own namespace at /f/[username], with strict data isolation enforced at the
              query level. This lets the same infrastructure serve individual artists, festival
              organizers, venue managers, and sponsors without cross-contamination, while enabling
              cross-entity features like networked digital press kits and multi-entity event
              linking.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Six-Tier Permission System</h3>
            <p className="text-slate-400 leading-relaxed">
              SUPER_ADMIN, ADMIN, EDITOR, CONTRIBUTOR, MEMBER, and VIEWER roles with three-layer
              route protection (middleware → layout → component). Permission checks are Redis-cached
              with 1-hour TTL, achieving 90-95% latency reduction on authorization. The system
              includes audit logging for sensitive actions, ownership transfer workflows between
              users, and organization-level team collaboration with role-based project management.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Music Discovery Graph</h3>
            <p className="text-slate-400 leading-relaxed">
              This is where the data science gets interesting. I built a graph-based artist
              discovery system using festival co-occurrence data — if two artists frequently appear
              at the same festivals, they&apos;re likely related musically. The system uses Node2Vec
              embeddings to learn artist representations from the co-occurrence graph, then applies
              Louvain community detection to identify music &ldquo;scenes&rdquo; automatically. An
              anti-popularity scoring mechanism ensures recommendations surface emerging artists
              rather than defaulting to headliners. A separate Python service handles scene
              detection and graph analysis.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Background Worker Architecture</h3>
            <p className="text-slate-400 leading-relaxed">
              Four BullMQ workers handle computationally intensive tasks without blocking the main
              application: a graph-worker for relationship computation, an embedding-worker for
              vector generation, an insights-worker for analytics processing, and a
              social-card-worker for automated social media image generation. This separation keeps
              the user-facing application responsive while enabling heavy data processing — critical
              when regenerating embeddings or recomputing graph relationships across 50,000+
              artists.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">
              Vector Search with Enhanced Embeddings
            </h3>
            <p className="text-slate-400 leading-relaxed">
              OpenAI text-embedding-3-small generates embeddings enriched with artist metadata —
              country, region, genres, gender — enabling semantic search that understands queries
              like &ldquo;female electronic artists from Berlin&rdquo; without exact keyword
              matching. The same embedding infrastructure powers festival lineup matching, similar
              artist surfacing, and the home page discovery feed with both personalized and trending
              modes.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Festival Operations</h2>
        <p className="text-slate-400 leading-relaxed">
          The platform includes a complete festival builder supporting everything from single-day
          showcases to multi-day, multi-city, multi-stage events with 100+ artists. Features include
          stage and schedule management, CSV bulk lineup upload, poster extraction integration for
          automated artist name extraction, cruise festival support for ship-based events, and a
          pending entity workflow for bulk selection, promotion, and linking of unverified artists
          and venues.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Community Features</h2>
        <p className="text-slate-400 leading-relaxed">
          Beyond data management, the platform builds engagement through fan clubs (automatic for
          each entity), a following system across all entity types, road trip planning for
          multi-city concert tours with stop sequencing, real-time RSVP with commemorative digital
          ticket generation, and an artist contribution system for community-driven data
          improvements with admin review.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Testing and Quality</h2>
        <p className="text-slate-400 leading-relaxed">
          614 test files across Vitest, Playwright, and Testcontainers. Tests cover API endpoints
          with real PostgreSQL instances via Testcontainers, permission and RBAC validation, data
          isolation between tenants, organization workflows, and multi-tenant boundary enforcement.
          Memlab handles memory leak detection. ESLint 9 with flat config and TypeScript strict mode
          enforce code quality. The project maintains 106+ detailed implementation guides in
          documentation.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">What This Enables</h2>
        <p className="text-slate-400 leading-relaxed">
          Knokr Base&apos;s shared PostgreSQL infrastructure feeds every application in the
          ecosystem — Knokr (public discovery and social features), Mojo Boston (white-label
          festival websites), Orchestra (artist relationship mapping), and Nuncio (event curation
          and distribution). The data model has proven robust enough to support four distinct
          consumption patterns from a single source of truth, validating the architecture for the
          planned mobile application and public API.
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
