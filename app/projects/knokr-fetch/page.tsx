import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageCarousel, type CarouselImage } from "@/components/ui/image-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knokr Fetch | Jay Fallon",
  description:
    "KnokrFetch is an intelligent event data extraction system that harvests, verifies, and deduplicates concert data from artist websites using a multi-strategy Python pipeline.",
};

const technologies = [
  "Python",
  "FastAPI",
  "asyncio",
  "Selenium",
  "BeautifulSoup 4",
  "Anthropic Claude API",
  "httpx",
  "psycopg2",
  "SQLite",
  "WebSocket",
  "PostgreSQL",
];

const images: CarouselImage[] = [
  {
    src: "https://dbf43z1u0dmox.cloudfront.net/knokr-fetch/carousel/fetch-01.webp",
    alt: "Knokr Fetch screenshot",
  },
  {
    src: "https://dbf43z1u0dmox.cloudfront.net/knokr-fetch/carousel/fetch-02.webp",
    alt: "Knokr Fetch screenshot",
  },
  {
    src: "https://dbf43z1u0dmox.cloudfront.net/knokr-fetch/carousel/fetch-03.webp",
    alt: "Knokr Fetch screenshot",
  },
];

export default function KnokrFetchPage() {
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
          Knokr Fetch
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          Intelligent Event Data Extraction &amp; Verification System
        </p>
      </header>

      <div className="mb-12">
        <ImageCarousel images={images} priority />
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">The Problem</h2>
        <p className="text-slate-400 leading-relaxed">
          Knokr tracks 52K artists across 1,400+ festivals, but tour date data lives on thousands of
          individual artist websites in wildly different formats — JSON-LD structured data,
          Bandsintown widgets, Songkick embeds, Seated iframes, custom HTML tables, React SPAs, and
          plain text listings. No single API covers the full catalog. Information is fragmented
          across dozens of platforms, leading to duplicates, missing data, and inconsistency. Manual
          data collection doesn&apos;t scale. The system needed to automatically detect the page
          format, extract structured event data, handle JavaScript-rendered content, and keep data
          current without re-processing unchanged pages.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">What I Built</h2>
        <p className="text-slate-400 leading-relaxed">
          A production-grade Python system built on FastAPI that implements a hierarchical,
          multi-strategy extraction pipeline. The core fetcher (4,142 lines) adapts its approach
          based on what it finds on each artist&apos;s website — trying the most reliable extraction
          method first and falling back through progressively less deterministic options.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          The system runs headless Chrome via Selenium for JavaScript-rendered widgets, uses the
          Anthropic Claude API as a last-resort fallback for unstructured pages, and processes all
          extracted events through a rigorous cleaning pipeline that handles 13+ international date
          formats and deduplicates by content rather than URL. Parallel job processing with asyncio,
          WebSocket progress streaming, and subprocess isolation ensure one failing artist site
          can&apos;t affect a batch of thousands.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Extraction Strategy Cascade</h2>
        <p className="text-slate-400 leading-relaxed">
          The fetcher implements a six-level hierarchy, exhausting free and deterministic methods
          before reaching for AI:
        </p>
        <ol className="mt-4 space-y-4 text-slate-400 leading-relaxed list-decimal list-inside">
          <li>
            <span className="text-slate-300 font-medium">JSON-LD Structured Data</span> — The most
            reliable path. Parses{" "}
            <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">application/ld+json</code>{" "}
            tags for schema.org MusicEvent and Event types. Falls back to microdata when JSON-LD
            isn&apos;t present. No JavaScript rendering needed.
          </li>
          <li>
            <span className="text-slate-300 font-medium">Bandsintown Extraction</span> — Detects
            widgets via script/iframe src attributes and CSS class patterns. Handles iframe content
            switching and shadow DOM traversal. Can call the REST API directly.
          </li>
          <li>
            <span className="text-slate-300 font-medium">Songkick Extraction</span> — Identifies
            widgets through platform-specific classes and attributes. Parses event containers with
            custom wait conditions.
          </li>
          <li>
            <span className="text-slate-300 font-medium">Seated Extraction</span> — Detects embeds
            and calls the widget API. Extracts sold-out status from CSS patterns, merges tour name
            metadata.
          </li>
          <li>
            <span className="text-slate-300 font-medium">Custom HTML Parsing</span> — Generic
            pattern matching for sites that don&apos;t use standard widgets. CSS selectors and regex
            to extract date/venue pairs from raw HTML.
          </li>
          <li>
            <span className="text-slate-300 font-medium">LLM Fallback (Claude API)</span> — When all
            structured approaches fail, preprocessed HTML is sent to Claude. Cost-optimized with
            stripped tags, haiku model default, CSV output format, and automatic escalation to
            sonnet for complex pages.
          </li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Key Technical Decisions</h2>
        <ul className="space-y-3 text-slate-400 leading-relaxed">
          <li>
            <span className="text-slate-300 font-medium">Deduplication by content, not URL</span> —
            Events are keyed on (artist_id, venue, date, time) rather than source URL. A hard-won
            lesson: 25 Ed Sheeran events all shared one URL and were being collapsed into one
            record. Content-based keying catches true duplicates regardless of page structure.
          </li>
          <li>
            <span className="text-slate-300 font-medium">Process isolation per artist</span> — Each
            artist fetch runs as an independent subprocess with a 5-minute timeout. A crash or
            unexpected HTML on one site cannot affect the batch. The parallel job manager uses
            asyncio.Semaphore for concurrency control (1-20 simultaneous) and asyncio.to_thread() to
            bridge blocking Selenium calls to the async event loop.
          </li>
          <li>
            <span className="text-slate-300 font-medium">LLM as last resort, not first choice</span>{" "}
            — The Claude fallback is powerful but costs money and time. The system exhausts free,
            deterministic extraction methods first. HTML is preprocessed to strip non-content
            elements, reducing token cost. Default model is haiku for cost efficiency with automatic
            fallback to sonnet for complex pages.
          </li>
          <li>
            <span className="text-slate-300 font-medium">Selenium for JavaScript rendering</span> —
            Many artist sites render event widgets client-side. Headless Chrome handles iframe
            extraction, content switching, and SPAs with platform-specific wait strategies:
            Bandsintown (4-7s), Seated (up to 12s on retry), Songkick (4-7s).
          </li>
          <li>
            <span className="text-slate-300 font-medium">13+ date format normalization</span> — ISO,
            US, EU, textual, relative dates (Today, Tomorrow), and TBA handling. Location parsing
            splits raw strings into city/state/country with normalization for all 50 US states, 40+
            countries, and common aliases.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-200">Python Architecture</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="py-2 pr-4 font-medium text-slate-300">Component</th>
                <th className="py-2 font-medium text-slate-300">Implementation</th>
              </tr>
            </thead>
            <tbody className="text-slate-400">
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">Web Server</td>
                <td className="py-2">
                  FastAPI + Uvicorn, async request handling, CORS, WebSocket streaming
                </td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">Job Orchestration</td>
                <td className="py-2">
                  asyncio.Semaphore concurrency, asyncio.to_thread() bridging, dataclass job
                  modeling
                </td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">Core Fetcher</td>
                <td className="py-2">
                  4,142-line multi-strategy engine, 6 extraction methods, platform-specific parsers
                </td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">Browser Automation</td>
                <td className="py-2">
                  Selenium WebDriver, headless Chrome, iframe traversal, configurable wait
                  strategies
                </td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">LLM Integration</td>
                <td className="py-2">
                  Anthropic SDK, HTML preprocessing, model fallback (haiku → sonnet), rate limit
                  handling
                </td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">Data Pipeline</td>
                <td className="py-2">
                  Parse → Clean → Deduplicate → Normalize → Export CSV → Stage to queue
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Persistence</td>
                <td className="py-2">
                  PostgreSQL (psycopg2) for production data, SQLite for local job history
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-200">Accuracy</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="py-2 pr-4 font-medium text-slate-300">Source</th>
                <th className="py-2 font-medium text-slate-300">Accuracy</th>
              </tr>
            </thead>
            <tbody className="text-slate-400">
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">JSON-LD / Widget APIs</td>
                <td className="py-2">99%+</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">LLM date extraction</td>
                <td className="py-2">~85%</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">LLM venue/location data</td>
                <td className="py-2">~90%</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Date format handling</td>
                <td className="py-2">13+ formats (ISO, US, EU, textual, relative)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">
          Known Limitations &amp; Next Steps
        </h2>
        <p className="text-slate-400 leading-relaxed">
          Some artist tour pages use third-party ticketing iframes that don&apos;t expose event data
          in the accessible HTML. Date format ambiguity (MM/DD vs DD/MM) requires locale-aware
          parsing not fully implemented for all regions. LLM extraction costs scale with artists
          lacking widget integrations. Selenium browser instances consume significant memory at high
          concurrency. Planned improvements include headless browser pooling for memory efficiency,
          expanded widget detection for newer ticketing platforms, and a validation feedback loop
          where downstream data quality metrics inform upstream extraction tuning.
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
