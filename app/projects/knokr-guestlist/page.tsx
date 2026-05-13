import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageCarousel, type CarouselImage } from "@/components/ui/image-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knokr Guestlist | Jay Fallon",
  description:
    "Knokr Guestlist is a Rails 8 + Hotwire RSVP service for the Knokr ecosystem, with Turbo Streams, native <dialog> modals, and a small qwen3.5 LLM on Ollama driving admin triage and approval-likelihood scores.",
};

const technologies = [
  "Rails 8.1",
  "Ruby 4.0",
  "Hotwire",
  "Turbo",
  "Stimulus",
  "Action Cable",
  "Tailwind CSS 4",
  "Propshaft",
  "PostgreSQL",
  "Prisma",
  "ActiveRecord",
  "Redis",
  "Clerk",
  "AWS S3",
  "Ollama",
  "Qwen 3.5",
  "Adobe Typekit",
  "Railway",
];

const images: CarouselImage[] = [
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/knokr-guestiist/knokr-guestlist-01.webp",
    alt: "Knokr Guestlist platform screenshot",
  },
  {
    src: "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/knokr-guestiist/knokr-guestlist-02.webp",
    alt: "Knokr Guestlist platform screenshot",
  },
];

export default function KnokrGuestlistPage() {
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
          Knokr Guestlist
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          Rails 8 + Hotwire RSVP service for the Knokr ecosystem
        </p>
      </header>

      <div className="mb-12">
        <ImageCarousel images={images} priority />
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">The Problem</h2>
        <p className="text-slate-400 leading-relaxed">
          Knokr already covers discovery (knokr-lineups), administration (knokr-base), and visual
          coverage (knokr-media), but there was no surface for the actual transactional moment
          between fan and venue: &ldquo;I want to be on this guestlist.&rdquo; Existing apps in the
          ecosystem are all Next.js — there was no proof the shared Postgres + Clerk + S3
          infrastructure could feed a different stack, no pattern for slotting in a Rails surface,
          and no place to test small-LLM triage in production without disturbing the rest of the
          platform.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">What I Built</h2>
        <p className="text-slate-400 leading-relaxed">
          A standalone Rails 8 + Hotwire application that lets a signed-in fan search across every
          artist, venue, festival, and city in the Knokr graph, claim up to five active standbys,
          see each request rendered as a status pill (Standby / Approved / Denied) on a homepage
          grid, and click through to the per-event approval grid where a manager (or the same user)
          flips status with one button.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          Status flips broadcast over Turbo Streams + Action Cable so every open tab on the same
          event updates live. An LLM service running{" "}
          <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">qwen3.5:4b</code> on Ollama
          drives an admin &ldquo;Suggest&rdquo; button that classifies pending requests into
          pre-approve / standby / ignore buckets, and renders a per-event likelihood score on every
          search ticket card so the user can pick which five slots to spend.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-200">Key Technical Decisions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 font-medium text-slate-300">
              Prisma-Owned Schema, ActiveRecord-Read
            </h3>
            <p className="text-slate-400 leading-relaxed">
              The Postgres database is shared with knokr-base and knokr-lineups, where Prisma is the
              schema owner. Rails reads and writes the same tables via ActiveRecord through a small{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">PrismaModel</code>{" "}
              concern that sets{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">primary_key = &quot;id&quot;</code>{" "}
              (cuid strings, not integers), turns off AR&apos;s auto-timestamp magic (column names
              are camelCase), and mints a cuid-shaped id in a{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">before_create</code>{" "}
              callback to mirror Prisma&apos;s{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">@default(cuid())</code>.{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">
                config.active_record.maintain_test_schema = false
              </code>{" "}
              enforces that Rails never runs its own migrations against the shared DB.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-medium text-slate-300">
              Three-Status App over a Five-Value Enum
            </h3>
            <p className="text-slate-400 leading-relaxed">
              The schema enum has{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">
                PENDING / PROMOTED / DEMOTED / BLOCKED / IGNORED
              </code>
              , but this app uses three (
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">
                PENDING / PROMOTED / BLOCKED
              </code>
              ) mapped to user-facing labels (Standby / Approved / Denied) and action verbs
              (Standby / Approve / Deny).{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">
                EventAttendee::STATUSES
              </code>
              ,{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">STATUS_LABELS</code>, and{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">STATUS_ACTIONS</code>{" "}
              constants drive every piece of copy. The other two enum values stay reserved in the
              schema for future surfaces without re-migration.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-medium text-slate-300">
              Small LLM on Railway for Triage and Likelihood
            </h3>
            <p className="text-slate-400 leading-relaxed">
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">app/services/llm.rb</code>{" "}
              wraps two operations:{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">LLM.triage</code>{" "}
              classifies every PENDING attendee for an event,{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">LLM.likelihood</code>{" "}
              returns a 0–100 approval score for a (profile, event) pair. Both POST to
              Ollama&apos;s{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">/api/generate</code> with{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">format: &quot;json&quot;</code>{" "}
              and{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">temperature: 0.2</code>,
              asking{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">qwen3.5:4b</code> for
              structured output. A second mode keyed off{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">LLM_FAKE=1</code> returns
              deterministic in-process stubs so the integration ships before the Ollama service is
              up and tests stay fast.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-medium text-slate-300">
              Per-Event Triage Cache via Rails.cache
            </h3>
            <p className="text-slate-400 leading-relaxed">
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">
                POST /events/:id/manage/suggest
              </code>{" "}
              runs the LLM over every PENDING attendee, indexes the result by attendee_id, and
              writes the map to{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">Rails.cache</code> for an
              hour. The manage page reads from cache and renders an{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">AI: Pre-approve</code>{" "}
              /{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">AI: Standby</code> /{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">AI: Ignore</code> pill on
              each tile. Expensive LLM call happens once per click; subsequent renders are free.
              Test environment switches{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">cache_store</code> from{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">:null_store</code> to{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">:memory_store</code> so
              the round-trip is exercised in integration tests.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-medium text-slate-300">
              Patron Tier Bars (Gold VIP, Green Repeat)
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Admins triaging 100+ requests need a visual signal for repeat customers and VIPs.{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">Profile#tier</code>{" "}
              returns{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">&quot;vip&quot;</code>,{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">&quot;repeat&quot;</code>
              , or{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">nil</code> from a
              hard-coded{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">SEED_TIERS</code> map;
              the manage tile prepends a 1.5px-tall colored bar at the top —{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">bg-amber-400</code> for
              VIP,{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">bg-emerald-500</code>{" "}
              for repeat, blank for unknown. Render-time only, no schema change. Promotes from a
              demo to a real signal by swapping the constant for a derived count of past Approved
              EventAttendee rows or a dedicated{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">tier</code> column.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-medium text-slate-300">
              CSRF Skip on State-Changing button_to Forms
            </h3>
            <p className="text-slate-400 leading-relaxed">
              The dev Clerk bypass (
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">DEV_CLERK_USER_ID</code>{" "}
              env) doesn&apos;t keep the Rails session cookie sticky across requests, which silently
              422&apos;d every RSVP create/destroy and admin Suggest. Auth is already enforced by
              the{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">Authed</code> concern via
              the Clerk session, so{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">
                skip_forgery_protection
              </code>{" "}
              on{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">RsvpsController</code>{" "}
              and{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">
                EventManageController#suggest
              </code>{" "}
              removes the false negative without weakening the real auth boundary. Other moderation
              routes keep default CSRF protection.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-medium text-slate-300">
              turbo_action: &quot;advance&quot; to Surface Silent Failures
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Search submits as a Turbo Frame request scoped to{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">
                &lt;turbo-frame id=&quot;search_results&quot;&gt;
              </code>{" "}
              — by default frame nav doesn&apos;t push history, so on prod a silent auth-timeout or
              5xx looked identical to a successful search. Adding{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">
                data-turbo-action=&quot;advance&quot;
              </code>{" "}
              to the form and pagination links makes each frame nav push{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">/search?q=…</code> into
              the address bar; the URL freezing on a stale value is now a visible signal that the
              request actually failed.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Testing</h2>
        <p className="text-slate-400 leading-relaxed">
          76 tests across 13 files (Minitest + ActionDispatch integration tests + ActiveSupport for
          the LLM service). Coverage spans every controller (search, RSVP create/destroy with the
          cap, standbys page, event-manage three-section grid + filter pagination + suggest
          endpoint + AI badge render, venue-admin moderation + event toggle, events guestlist panel,
          Authed redirect/allow), every model (
          <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">Event#hero_image_url</code>{" "}
          priority,{" "}
          <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">EventAttendee</code>{" "}
          defaults +{" "}
          <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">active_for</code> scope +
          status validator + Turbo Stream broadcast callbacks,{" "}
          <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">Profile#by_clerk_id</code> +{" "}
          <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">tier</code> method), and the
          LLM service in fake mode (VIP / repeat / unknown classification, score buckets, every
          attendee covered). Clerk is stubbed by overriding{" "}
          <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">
            clerk_user_id_from_session
          </code>{" "}
          per test; tests run against the shared Railway DB inside a transactional rollback so prod
          data is never touched.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">What It Enables</h2>
        <p className="text-slate-400 leading-relaxed">
          Knokr Guestlist proves the Knokr platform isn&apos;t tied to a single web stack — the
          shared Postgres + Clerk + S3 + Redis infrastructure that backs Next.js apps (knokr-base,
          knokr-lineups, knokr-media) also feeds a Rails + Hotwire surface, with Prisma still in
          charge of the schema and Rails staying a polite reader. The pattern unblocks slotting in
          different stacks per surface where it makes sense — a Sinatra microservice, a Phoenix
          LiveView screen, anything that speaks Postgres — without renegotiating the data model. The
          LLM integration also doubles as a sandbox for small-model deployment patterns (Ollama on
          Railway, fake-mode toggles, cached structured-output prompts) that can graduate into the
          larger platform once stable.
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
