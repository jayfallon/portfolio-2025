import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageCarousel, type CarouselImage } from "@/components/ui/image-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mojo Boston | Jay Fallon",
  description:
    "Mojo Boston is a white-label festival website built on PayloadCMS and Next.js 16, powered by live data from the Knokr ecosystem.",
};

const technologies = [
  "Next.js 16",
  "PayloadCMS 3.80",
  "TypeScript",
  "PostgreSQL",
  "AWS S3",
  "Leaflet",
  "Stadia Maps",
  "Tailwind CSS 4",
  "Lexical",
  "Sharp",
  "react-social-icons",
  "Railway",
];

const images: CarouselImage[] = [
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/mojo-boston/carousel/mojo-01.webp",
    alt: "Mojo Boston festival website screenshot",
  },
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/mojo-boston/carousel/mojo-02.webp",
    alt: "Mojo Boston festival website screenshot",
  },
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/mojo-boston/carousel/mojo-03.webp",
    alt: "Mojo Boston festival website screenshot",
  },
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/mojo-boston/carousel/mojo-04.webp",
    alt: "Mojo Boston festival website screenshot",
  },
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/mojo-boston/carousel/mojo-05.webp",
    alt: "Mojo Boston festival website screenshot",
  },
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/mojo-boston/carousel/mojo-06.webp",
    alt: "Mojo Boston festival website screenshot",
  },
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/mojo-boston/carousel/mojo-07.webp",
    alt: "Mojo Boston festival website screenshot",
  },
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/mojo-boston/carousel/mojo-08.webp",
    alt: "Mojo Boston festival website screenshot",
  },
];

export default function MojoBostonPage() {
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
          Mojo Boston
        </h1>
        <p className="mt-4 text-lg text-slate-400">White-Label Festival Website on PayloadCMS</p>
        <Link
          href="https://mojo-boston.knokr.com/"
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
          Festival organizers need websites, but they don&apos;t need another CMS to learn. They
          need a site that&apos;s pre-populated with their lineup, schedule, and venue data — the
          same data already living in Knokr Base. The question was whether an off-the-shelf CMS like
          PayloadCMS could serve as the foundation for a white-label festival site product, or
          whether the domain-specific requirements would outgrow it.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">What I Built</h2>
        <p className="text-slate-400 leading-relaxed">
          A fully custom festival website for a one-day Boston music festival, built on PayloadCMS
          3.80 and Next.js 16. The stock Payload website template ships with a blog and four basic
          blocks. I kept the foundation — auth, admin panel, page builder, rich text editor — and
          rebuilt everything else into a festival-specific platform. 232 TypeScript files across 24
          custom block components, a complete S3 media replacement, live database integration with
          Knokr, and a brand design system.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          This is a demo site currently awaiting final content and visual design, built to prove
          that organizers can spin up a fully functional, branded festival website backed by the
          Knokr data ecosystem.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-200">Key Technical Decisions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 font-medium text-slate-300">24 Custom Block Components</h3>
            <p className="text-slate-400 leading-relaxed">
              The stock template&apos;s generic content blocks couldn&apos;t handle
              festival-specific layouts. I built 24 purpose-built blocks — a lineup word cloud with
              artist names sized by billing tier using Thingbat separator fonts, a day-tabbed
              schedule with stage grouping and 12h/24h time toggle, flip-card ticket tiers with
              front/back detail views, interactive Leaflet venue maps with Stadia dark tiles,
              sponsor grids, FAQ accordions with category headings, and more. Every block exposes
              full admin-configurable styling: colors, 4-way padding, max width, background images,
              rounded corners, shadows, font sizes and weights. This gives organizers real design
              control without touching code.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Live Knokr Database Integration</h3>
            <p className="text-slate-400 leading-relaxed">
              Rather than duplicating data, the site reads directly from Knokr&apos;s shared
              PostgreSQL database — artist names, images, genres, billing tiers, social links,
              schedule events grouped by day and stage, venue coordinates, and festival metadata.
              All read-only. Data is managed in Knokr Base and displayed here, which means lineup
              updates in Base appear on the festival site without any manual sync. A single
              KNOKR_FESTIVAL_ID environment variable connects the site to the correct festival
              record.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Custom S3 Media System</h3>
            <p className="text-slate-400 leading-relaxed">
              Payload&apos;s built-in media handling broke on Railway — files were wiped on every
              deploy, and the S3 plugin was unreliable. I replaced it entirely with a custom S3Media
              upload collection using beforeChange hooks for S3 uploads, afterDelete hooks for
              cleanup, a custom admin media library view at /admin/media-library with grid/list
              display, bulk upload, bulk delete, pagination at 64 items per page, and a sync
              endpoint to reconcile existing S3 bucket files with database records. Local storage is
              fully disabled — disableLocalStorage: true means no files on disk, no Sharp processing
              issues with SVGs, and all frontend components use the s3Url field for direct S3
              access.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Multi-Database Architecture</h3>
            <p className="text-slate-400 leading-relaxed">
              The site runs against two PostgreSQL databases simultaneously — one for Payload&apos;s
              own content (pages, posts, admin users, CMS configuration) and one for the Knokr
              festival data (read-only connection). This required managing separate connection pools
              and handling Railway&apos;s constraint that internal PostgreSQL hostnames don&apos;t
              resolve during build, meaning schema has to be pushed to the production database via
              external URL before deployment.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Brand Design System</h3>
            <p className="text-slate-400 leading-relaxed">
              Custom CSS variables and Tailwind theme with the client&apos;s palette (--mojo-blue,
              --mojo-navy, --mojo-white, --mojo-dark), Moret serif font via Typekit for headings,
              golden ratio (1.618:1) for artist card images, and a rule of no opacity on text. Every
              block supports the full color palette through admin select fields, so the organizer
              controls brand consistency from the CMS. A custom festival hero type supports
              background video (MP4/WebM/YouTube), 9-position content alignment, and per-line color,
              size, font, and weight controls.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">What I Learned</h2>
        <p className="text-slate-400 leading-relaxed">
          PayloadCMS is a solid foundation for generic content management, but festival websites
          have domain-specific requirements that push against a general-purpose CMS at every turn.
          The 24 custom blocks, the replaced media system, and the external database integration
          represent significant engineering effort that would need to be repeated for every new
          festival site. This experiment validated two things: the Knokr data layer works well for
          powering external sites, and purpose-built festival site tooling will be more efficient
          than adapting a generic CMS — a finding that&apos;s informing the next phase of the
          platform.
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
