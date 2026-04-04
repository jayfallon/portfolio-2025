import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageCarousel, type CarouselImage } from "@/components/ui/image-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orchestra | Jay Fallon",
  description:
    "Orchestra is a community-driven platform for documenting band member relationships within the music industry, enabling music fans to search for artists and contribute band member information.",
};

const technologies = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "HeroUI",
  "Framer Motion",
  "Zod",
  "Clerk",
  "Cloudflare Turnstile",
  "AWS CloudFront",
  "Railway",
];

const features = [
  {
    title: "Artist Discovery",
    items: [
      "Autocomplete Search: Debounced artist name queries returning up to 50 results",
      "Random Artist: Discovery feature surfacing random artists from the database",
      "Artist Profiles: Comprehensive pages displaying band members, related artists, festival appearances, and social links",
    ],
  },
  {
    title: "Band Member Data",
    items: [
      "Current and Historical Members: Display of active and past band members with role information and active years",
      "Member Contributions: Community submission of member details including name, role, tenure, images, and Wikipedia references",
      "Automatic Linking: Members matched to existing artist profiles in the Knokr database",
      "Social Integration: Artist profiles linked to Spotify, Instagram, Facebook, YouTube, TikTok, Apple Music, Bandcamp, SoundCloud, and official websites",
    ],
  },
  {
    title: "Relationship Intelligence",
    items: [
      "Related Artists: Discovery based on shared band members, festival co-appearances, genre overlap, and geographic connections",
      "Festival History: Display of upcoming and past festival appearances",
      "Relationship Scoring: Backend logic for measuring artist connections through multiple relationship types",
    ],
  },
  {
    title: "Curation and Security",
    items: [
      "Admin Review Process: Multi-layered review workflow for all submissions before database integration",
      "Rate Limiting: 10 submissions per hour per IP address",
      "Bot Prevention: Cloudflare Turnstile CAPTCHA and honeypot field implementation",
      "Authentication: Optional Clerk sign-in for enhanced features",
    ],
  },
];

const targetUsers = [
  {
    title: "Music Fans",
    description: "Community members interested in documenting band lineups and artist relationships",
  },
  {
    title: "Music Researchers",
    description: "Individuals tracking band member changes and artist connections over time",
  },
  {
    title: "Knokr Community",
    description: "Early adopters providing feedback on platform features and data quality",
  },
  {
    title: "Industry Professionals",
    description: "Secondary audience benefiting from relationship intelligence and discovery features",
  },
];

const relationshipTiers = [
  {
    tier: "Primary",
    description: "Direct artist-to-artist connections through band membership",
  },
  {
    tier: "Secondary",
    description: "Artists connected through shared members",
  },
  {
    tier: "Tertiary",
    description: "Extended network connections via festival co-appearances, genre, and geography",
  },
];

const images: CarouselImage[] = [
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/orchestra/orchestra-lg.webp",
    alt: "Orchestra platform screenshot",
  },
];

export default function OrchestraPage() {
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
          Orchestra
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          Community-Driven Artist Relationship Platform
        </p>
        <Link
          href="https://orchestra.knokr.com/"
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
          Orchestra is a community-driven platform for documenting band member relationships
          within the music industry. Built as an experimental standalone application, it
          enables music fans to search for artists and contribute band member information
          through a curated submission process. Orchestra operates on the Knokr database,
          extending primary artist data into secondary and tertiary relationship networks
          that inform music scene discovery and industry business intelligence.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          The platform serves dual purposes: as a functional community tool for completing
          artist data and as an isolated testing environment for artist relationship building,
          search functionality, and feature experimentation before integration into the
          broader Knokr ecosystem.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Purpose</h2>
        <div className="space-y-4 text-slate-400 leading-relaxed">
          <div>
            <h3 className="font-medium text-slate-300">Artist Relationship Mapping</h3>
            <p>
              Collect band member data to establish secondary and tertiary artist connections
              that would otherwise remain undocumented. These relationships form the foundation
              for music scene discovery systems and recommendation engines based on shared
              members, festivals, genres, and geographic proximity.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-slate-300">Community Data Completion</h3>
            <p>
              Engage like-minded music fans in collaborative data curation, building familiarity
              with the Knokr platform while accumulating the relationship data necessary for
              advanced discovery features. User contributions undergo multi-layered admin
              review before database integration.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-slate-300">Experimental Platform</h3>
            <p>
              Provide an isolated environment for testing artist search algorithms, relationship
              building services, and feature development without impacting the main Knokr
              application. Orchestra functions as both working application and technology
              evaluation framework.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">
          Business Intelligence Value
        </h2>
        <p className="text-slate-400 leading-relaxed">
          Band member relationship data enables Knokr to surface patterns and predict
          improvements across the live music industry logistics chain. By understanding
          who plays with whom, when, where, and how frequently, the platform delivers
          actionable business intelligence to industry decision makers—venue operators,
          promoters, booking agents, and artist management.
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
        <h2 className="mb-4 text-xl font-semibold text-slate-200">
          Relationship Tiers
        </h2>
        <p className="mb-4 text-slate-400 leading-relaxed">
          Orchestra establishes three relationship tiers that enable sophisticated discovery
          algorithms and provide the data foundation for industry logistics prediction:
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {relationshipTiers.map((tier) => (
            <div
              key={tier.tier}
              className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4"
            >
              <h3 className="font-medium text-teal-300">{tier.tier}</h3>
              <p className="mt-1 text-sm text-slate-400">{tier.description}</p>
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
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Strategic Role</h2>
        <p className="mb-4 text-slate-400 leading-relaxed">
          Orchestra serves as both community tool and research platform within the Knokr
          ecosystem, enabling:
        </p>
        <ul className="space-y-2 text-slate-400">
          <li>
            <span className="text-teal-300">•</span>{" "}
            <strong className="text-slate-300">Data Network Growth:</strong> Accumulation
            of relationship data for music scene discovery systems
          </li>
          <li>
            <span className="text-teal-300">•</span>{" "}
            <strong className="text-slate-300">Community Building:</strong> Engagement
            with users invested in music data curation
          </li>
          <li>
            <span className="text-teal-300">•</span>{" "}
            <strong className="text-slate-300">Feature Incubation:</strong> Safe environment
            for testing concepts before main platform integration
          </li>
          <li>
            <span className="text-teal-300">•</span>{" "}
            <strong className="text-slate-300">Business Intelligence Foundation:</strong>{" "}
            Collection of relationship data supporting industry logistics prediction
          </li>
        </ul>
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
