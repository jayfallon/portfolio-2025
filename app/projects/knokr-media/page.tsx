import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageCarousel, type CarouselImage } from "@/components/ui/image-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knokr Media | Jay Fallon",
  description:
    "Knokr Media is a photo and video album platform for the Knokr ecosystem, with a CLIP embedding pipeline powering semantic search, moderation, and near-duplicate detection.",
};

const technologies = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "PostgreSQL",
  "pgvector",
  "Prisma 6",
  "Redis",
  "BullMQ",
  "HeroUI",
  "Tailwind CSS 4",
  "Clerk",
  "AWS S3",
  "@xenova/transformers",
  "Railway",
];

const images: CarouselImage[] = [
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/knokr-media/knokr-media-lg.webp",
    alt: "Knokr Media platform screenshot",
  },
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/knokr-media/knokr-media-02.webp",
    alt: "Knokr Media platform screenshot",
  },
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/knokr-media/knokr-media-03.webp",
    alt: "Knokr Media platform screenshot",
  },
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/knokr-media/knokr-media-04.webp",
    alt: "Knokr Media platform screenshot",
  },
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/knokr-media/knokr-media-05.webp",
    alt: "Knokr Media platform screenshot",
  },
];

export default function KnokrMediaPage() {
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
          Knokr Media
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          Photo &amp; Video Albums for the Knokr Ecosystem
        </p>
        <Link
          href="https://media.knokr.com"
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
          Knokr tracks 50,000+ artists, 1,400+ festivals, and thousands of venues and cities — but
          every photo and video documenting a show or festival lives outside the system, scattered
          across personal feeds with no link back to the entities it actually depicts. There was no
          way for fans to contribute visual coverage to the platform, and no infrastructure to
          moderate, deduplicate, or surface that media at scale.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">What I Built</h2>
        <p className="text-slate-400 leading-relaxed">
          A standalone Next.js application that lets signed-in users create photo and video albums
          explicitly linked to Knokr entities (artists, festivals, venues, cities). Albums support
          ratings, contributors, configurable contribution policies, and abuse flagging. Photos run
          through a CLIP embedding pipeline that powers semantic text search, near-duplicate
          detection, NSFW moderation, and &ldquo;more like this&rdquo; recommendations.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          The app shares production Postgres, Clerk, and S3 with knokr-base and knokr-lineups, but
          deploys as its own Railway service so it can be iterated in isolation before features get
          rolled into the core platform.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-200">Key Technical Decisions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 font-medium text-slate-300">
              CLIP Embedding Worker as a Separate Railway Service
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Every uploaded photo gets a 512-dim CLIP embedding plus quality, NSFW, and
              near-duplicate scores. The web service produces jobs to a BullMQ queue; a standalone
              Node worker (own Dockerfile, own railway.toml, no Next.js imports) consumes them. The
              worker boots four <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">@xenova/transformers</code>{" "}
              pipelines on startup — CLIP image-feature-extraction, CLIPTextModelWithProjection for
              query encoding, zero-shot quality classification, and an ONNX NSFW classifier — and
              writes the embedding into a pgvector column via a single raw-SQL UPDATE. PM2
              supervises one process with a 1 GB memory cap; BullMQ retries failed jobs with
              exponential backoff.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Synchronous Text Encoding for Search</h3>
            <p className="text-slate-400 leading-relaxed">
              Search queries need an embedding too. Rather than running CLIP twice (once on the web
              service, once on the worker), the worker exposes a token-protected{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">/encode-text</code>{" "}
              endpoint on its Express health server. The search route calls the worker over HTTP,
              gets back a 512-dim vector, and runs an HNSW cosine-distance query against the same{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">MediaItem.embedding</code>{" "}
              column the worker populated. One model, two consumption paths.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">
              Content-Keyed Deduplication and S3 Key Reuse
            </h3>
            <p className="text-slate-400 leading-relaxed">
              The save-to-album feature creates a new MediaItem row pointing at the same S3 key as
              the source — no S3 copy, no duplicated bytes, no extra storage cost. The PHOTO clone
              gets re-enqueued for embedding so duplicate detection runs against the new
              album&apos;s siblings, not the original&apos;s. Near-duplicate detection itself is a
              cosine-distance query against the album&apos;s existing items at upload time; matches
              inside 0.05 get tagged with{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">nearDuplicateOfId</code>.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Three-Tier Contribution Policy</h3>
            <p className="text-slate-400 leading-relaxed">
              Each album carries a{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">contributionPolicy</code>{" "}
              enum: CLOSED (creator + admins only), INVITE_ONLY (default; explicit
              MediaAlbumContributor rows), or OPEN (any signed-in non-banned profile). The NSFW and
              moderation pipeline runs on every uploaded photo regardless of policy, so opening an
              album up doesn&apos;t weaken safety. Banned users are hard-blocked from contributing,
              rating, or tagging — but can still browse and flag abuse.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Denormalized Rating Rollups</h3>
            <p className="text-slate-400 leading-relaxed">
              MediaAlbum carries{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">ratingAvg</code> and{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">ratingCount</code>{" "}
              columns indexed{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">
                (ratingAvg DESC, ratingCount DESC)
              </code>
              . Rate writes recompute the rollup off MediaAlbumRating and write it back inline, so
              the home query is a single{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">
                ORDER BY ratingAvg DESC, ratingCount DESC LIMIT 20
              </code>{" "}
              against the index — no per-request groupBy, constant-time at any rating volume. The
              MediaAlbumRating table is only touched on writes and on the per-album detail page.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">JIT Profile Sync with Clerk</h3>
            <p className="text-slate-400 leading-relaxed">
              Profile creation is just-in-time on first authenticated request — keyed by{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">clerkId</code> first,
              then by email match so a Clerk login lands on the existing base/lineups Profile
              without overwriting the linkage.{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">Profile.imageUrl</code>{" "}
              is re-synced from Clerk on every request, so a GitHub avatar set in Clerk replaces
              the default initials immediately. MediaLibrary is auto-provisioned on the same hot
              path.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-slate-300">Golden-Ratio Client-Side Cropping</h3>
            <p className="text-slate-400 leading-relaxed">
              Photos are forced to a 1:0.618 landscape aspect ratio cropped in-browser before the
              S3 PUT, using a custom react-image-crop wrapper. Tiles and full-size viewers all
              share{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">aspect-[1/0.618]</code>{" "}
              so the entire app speaks one shape — covers pin to{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">object-top</code> so
              faces don&apos;t get cropped off the bottom. Anti-grab (right-click and drag disabled)
              on full-size images keeps casual scraping out.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Testing</h2>
        <p className="text-slate-400 leading-relaxed">
          376 tests total — 355 web tests across 64 files (Vitest + React Testing Library + jsdom)
          plus 21 worker tests across 3 files (Vitest + supertest). Coverage spans every API route
          (presign, flags, ratings, albums CRUD, contributors, items, share-to-album, similar,
          like, search), all major components (cropper, rating slider, contributor picker,
          share-to-album modal), Server Components rendered by{" "}
          <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">await</code>ing the
          component and inspecting its returned tree, and the worker&apos;s CLIP, NSFW, embedding,
          processor, and health paths. Prisma, Clerk, AWS SDK, HeroUI, BullMQ,{" "}
          <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">@xenova/transformers</code>,
          and{" "}
          <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">react-image-crop</code> are
          mocked per file.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">What It Enables</h2>
        <p className="text-slate-400 leading-relaxed">
          Knokr Media validates the pattern of building a focused experimental app against shared
          production infrastructure — same Postgres, Clerk, and S3 as base/lineups, but deployed
          and iterated independently. The embedding pipeline, moderation gates, and contribution
          policies can graduate into the core platform once stable, without disturbing existing
          users. Linked albums turn previously orphaned fan media into structured coverage of every
          entity in the Knokr graph — artists, festivals, venues, and cities — opening up
          downstream features like media-driven recommendations, lineup imagery, and venue
          galleries.
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
