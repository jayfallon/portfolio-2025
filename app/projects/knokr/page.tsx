import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knokr | Jay Fallon",
  description:
    "Knokr is a multi-tenant content management system designed specifically for the music industry, providing artists, venues, festivals, and sponsors with a free CMS and hosting platform.",
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
  "Tailwind CSS",
  "Clerk",
  "AWS S3",
  "CloudFront",
  "OpenAI API",
  "Node2Vec",
  "Vitest",
  "Playwright",
  "Testcontainers",
  "Sentry",
  "Railway",
];

const coreFeatures = [
  {
    title: "Multi-Tenant CMS Architecture",
    items: [
      "User Namespacing: Each user receives a site at /f/[username] with complete data isolation",
      "Database-Driven Routing: URLs stored in database records, enabling dynamic page creation without code deployments",
      "Page Builder: Component-based content creation with templates and draft/publish workflow",
      "Entity-Specific Sites: Dedicated branded presence for verified artists, venues, festivals, and sponsors",
      "Premium Subdomains: Custom domains for verified entities",
    ],
  },
  {
    title: "Music Industry Entity Management",
    items: [
      "Four Entity Types: Artists, Venues, Festivals, Sponsors with type-specific workflows",
      "Entity Request System: Fan-initiated verification requests reviewed by admins",
      "Official vs Fan Content: Distinction between verified entity content and community contributions",
      "Ownership Transfer: Transfer venue/artist/festival ownership between users",
      "Pending Entity Workflow: Bulk selection, promotion, and linking for unverified entities",
    ],
  },
  {
    title: "Event Management",
    items: [
      "Three Event Types: Official events, fan standalone events, and satellite events",
      "Multi-Entity Events: Link multiple artists, venues, and festivals to single events",
      "Geographic Discovery: City-based event search with radius filtering",
      "Real-Time RSVP: Attendance tracking with commemorative digital ticket generation",
      "Event Filters: Genre, price, accessibility, date range, and custom criteria",
    ],
  },
  {
    title: "Festival Operations",
    items: [
      "Festival Builder: Complete stage, event, and lineup management",
      "CSV Bulk Upload: Import lineups at scale",
      "Cruise Festivals: Support for ship-based and floating events",
      "Poster Extraction Integration: Automated artist name extraction from festival posters",
    ],
  },
  {
    title: "Community and Networking",
    items: [
      "Fan Clubs: Automatic clubs for each entity (artist clubs, venue clubs, festival clubs)",
      "Following System: Unified UI for following users, artists, venues, festivals, and sponsors",
      "Road Trips: Multi-city concert tour planning with stop sequencing",
      "Organizations: Team collaboration with role-based permissions and project management",
    ],
  },
  {
    title: "Discovery and Intelligence",
    items: [
      "Vector Search: Semantic search using pgvector with OpenAI embeddings",
      "Full-Text Search: PostgreSQL tsvector indexing across all content",
      "Music Discovery Graph: Graph-based artist discovery using Node2Vec and Louvain scene detection",
      "Home Page Discovery: Personalized and trending recommendations",
      "Enhanced Embeddings: Artist embeddings include country, region, genres, gender for improved matching",
    ],
  },
];

const problemsSolved = [
  {
    title: "Data Fragmentation and Inaccuracy",
    description:
      "The music industry operates through multiple closed systems producing inconsistent, inaccurate data. Knokr provides a centralized, networked platform where artists, venues, and festivals host authoritative information.",
  },
  {
    title: "Technical Barriers to Online Presence",
    description:
      "Artists and small venues lack access to affordable, music-specific web infrastructure. Knokr provides a free CMS with hosting, removing technical barriers while offering music industry-specific features.",
  },
  {
    title: "Digital Press Kit Distribution",
    description:
      "Organizations require artist information but traditionally rely on manual collection. Knokr generates networked digital press kits that organizations can programmatically access.",
  },
  {
    title: "Content Management Without Technical Expertise",
    description:
      "Traditional CMS platforms require web administrators. Knokr's database-driven routing engine enables users to create pages without technical knowledge.",
  },
];

const targetUsers = [
  {
    title: "Artists",
    description: "Musicians and bands seeking free online presence with music-specific features",
  },
  {
    title: "Venues",
    description: "Music venues managing events and building fan communities",
  },
  {
    title: "Festivals",
    description: "Festival organizers coordinating multi-day lineups and ticket distribution",
  },
  {
    title: "Sponsors",
    description: "Music industry sponsors establishing brand presence",
  },
  {
    title: "Fans",
    description: "Music enthusiasts discovering events and planning concert tours",
  },
  {
    title: "Organizations",
    description: "Music industry teams collaborating on projects with role-based access",
  },
];

const permissionTiers = [
  { role: "SUPER_ADMIN", description: "Full system access, user management, entity verification" },
  { role: "ADMIN", description: "CMS operations, limited user management" },
  { role: "EDITOR", description: "Create and edit content, publish drafts" },
  { role: "CONTRIBUTOR", description: "Create drafts only, no publishing" },
  { role: "MEMBER", description: "Basic access, no administrative privileges" },
  { role: "VIEWER", description: "Read-only access (organizations)" },
];

export default function KnokrPage() {
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
          Knokr
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          Multi-Tenant CMS for the Music Industry
        </p>
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
        <Image
          src="https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/knokr-base/knokr-lg.webp"
          alt="Knokr platform screenshot"
          width={1200}
          height={675}
          className="rounded-lg border border-slate-700/50"
          priority
        />
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Overview</h2>
        <p className="text-slate-400 leading-relaxed">
          Knokr is a multi-tenant content management system designed specifically for the
          music industry. It provides artists, venues, festivals, and sponsors with a free
          CMS and hosting platform where they can manage their data, deploy to websites,
          and network their content across the ecosystem. Built with database-driven routing,
          the platform enables users to create pages without web administration expertise.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          The system operates as the administrative backbone for the Knokr ecosystem,
          providing CRUD operations for all entities while sharing its PostgreSQL database
          with experimental products (Orchestra, Lineups, Nuncio). As features prove
          valuable in isolated applications, they are merged into the base platform.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-200">Problems Solved</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {problemsSolved.map((problem) => (
            <div
              key={problem.title}
              className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4"
            >
              <h3 className="font-medium text-slate-300">{problem.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{problem.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-200">Core Features</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {coreFeatures.map((feature) => (
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
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Permission System</h2>
        <p className="mb-4 text-slate-400 leading-relaxed">
          Six-tier role-based access control with Redis caching, achieving 90-95% latency
          reduction through three-layer route protection: middleware, layout, and component.
        </p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {permissionTiers.map((tier) => (
            <div
              key={tier.role}
              className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3"
            >
              <h3 className="font-medium text-teal-300">{tier.role}</h3>
              <p className="mt-1 text-xs text-slate-400">{tier.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">
          Ecosystem Integration
        </h2>
        <p className="mb-4 text-slate-400 leading-relaxed">
          Knokr serves as the integration platform for the broader ecosystem. External
          tools share the database but operate independently, enabling rapid feature
          iteration:
        </p>
        <ul className="space-y-2 text-slate-400">
          <li>
            <span className="text-teal-300">•</span>{" "}
            <strong className="text-slate-300">Orchestra:</strong> Crowdsourced band member
            data with admin moderation UI
          </li>
          <li>
            <span className="text-teal-300">•</span>{" "}
            <strong className="text-slate-300">Lineups:</strong> Festival lineup extraction
            and AI recommendation engines
          </li>
          <li>
            <span className="text-teal-300">•</span>{" "}
            <strong className="text-slate-300">Nuncio:</strong> Event list curation and
            distribution with embeddable widgets
          </li>
        </ul>
        <p className="mt-4 text-slate-400 leading-relaxed">
          Proven features from isolated applications merge into the base platform, which
          will ultimately serve as the unified user-facing platform.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">
          Competitive Differentiation
        </h2>
        <p className="mb-4 text-slate-400 leading-relaxed">
          Knokr competes with generic website builders (Squarespace, Wix, WordPress) by
          providing:
        </p>
        <ul className="space-y-2 text-slate-400">
          <li>
            <span className="text-teal-300">•</span>{" "}
            <strong className="text-slate-300">Music Industry Specialization:</strong>{" "}
            Artist discographies, venue capacity management, festival lineup builders
          </li>
          <li>
            <span className="text-teal-300">•</span>{" "}
            <strong className="text-slate-300">Networked Data Model:</strong> Cross-entity
            relationships and discovery features
          </li>
          <li>
            <span className="text-teal-300">•</span>{" "}
            <strong className="text-slate-300">Database-Driven Routing:</strong> Dynamic
            page creation without code deployments
          </li>
          <li>
            <span className="text-teal-300">•</span>{" "}
            <strong className="text-slate-300">Free Hosting:</strong> No cost barrier for
            emerging artists and small venues
          </li>
          <li>
            <span className="text-teal-300">•</span>{" "}
            <strong className="text-slate-300">Vector Search:</strong> Semantic discovery
            unavailable in traditional CMSs
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Testing and Quality</h2>
        <p className="text-slate-400 leading-relaxed">
          Comprehensive testing strategy with 2,300+ tests including Vitest for unit and
          integration testing, Playwright for end-to-end testing, Testcontainers for
          database integration tests, and Memlab for memory leak detection. ESLint 9
          with flat config ensures code quality.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-200">Target Users</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
