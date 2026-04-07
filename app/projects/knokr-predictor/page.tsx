import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageCarousel, type CarouselImage } from "@/components/ui/image-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knokr Predictor | Jay Fallon",
  description:
    "Knokr Predictor is a festival lineup prediction system that generates probable artist bookings using Knokr's music discovery graph.",
};

const technologies = [
  "Python",
  "FastAPI",
  "asyncpg",
  "Redis",
  "scikit-learn",
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Prisma 6",
  "PostgreSQL",
  "HeroUI",
  "Tailwind CSS 4",
  "Railway",
];

const images: CarouselImage[] = [
  {
    src: "https://dbf43z1u0dmox.cloudfront.net/predictor/carousel/predictor-01.webp",
    alt: "Knokr Predictor screenshot",
  },
  {
    src: "https://dbf43z1u0dmox.cloudfront.net/predictor/carousel/predictor-02.webp",
    alt: "Knokr Predictor screenshot",
  },
];

export default function KnokrPredictorPage() {
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
          Knokr Predictor
        </h1>
        <p className="mt-4 text-lg text-slate-400">Festival Lineup Prediction System</p>
        <Link
          href="https://predictor.knokr.com/"
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
          Festival lineups follow patterns — genre affinity, geographic booking corridors, artist
          touring circuits, and cross-festival co-occurrence. Knokr&apos;s existing music discovery
          infrastructure (3.3M weighted artist connections, Louvain community detection, 1,400+
          festival lineups, 52K artists) contained the signal to predict plausible future lineups.
          The question was whether that signal could be extracted on demand, per festival, without
          loading the entire dataset into memory or relying on traditional supervised learning.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">What I Built</h2>
        <p className="text-slate-400 leading-relaxed">
          A two-service prediction system built end-to-end and iteratively improved: a Python
          prediction engine (FastAPI, asyncpg, Redis) that queries pre-computed graph data on
          demand, and a Next.js 16 frontend for browsing festivals, viewing current lineups,
          generating predictions, and regenerating for variety. Both services read from the shared
          Knokr PostgreSQL database, communicate via Redis job queue, and deploy independently on
          Railway.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">The Engine — Three Iterations</h2>

        <h3 className="mt-6 mb-2 text-lg font-medium text-slate-300">
          Attempt 1: Gradient Boosting Classifier
        </h3>
        <p className="text-slate-400 leading-relaxed">
          Built a scikit-learn GradientBoostingClassifier trained on 112K samples across 1,373
          festivals. Nine engineered features: appearance count, billing tier trajectory, genre
          overlap, geographic proximity, co-occurrence, recency, loyalty score, festival frequency,
          and scene membership. Used CalibratedClassifierCV for probability calibration.
          Cross-validation accuracy: 84%.
        </p>
        <p className="mt-3 text-slate-400 leading-relaxed">
          The co-occurrence feature caused data leakage — it directly encoded whether an artist
          shared festivals with the current lineup, perfectly predicting the training label. After
          fixing leakage, scene membership absorbed 65% of feature importance. Every artist in the
          same Louvain community got near-identical scores regardless of festival-specific fit.
          Training loaded 3.3M rows into memory, blocking startup for 90+ seconds. The model was
          abandoned.
        </p>

        <h3 className="mt-8 mb-2 text-lg font-medium text-slate-300">
          Attempt 2: Graph-Based Connection Scoring
        </h3>
        <p className="text-slate-400 leading-relaxed">
          Replaced the ML model with direct ArtistConnection weight queries. For each lineup artist,
          found connected artists filtered by genre overlap. Added scene membership scoring and
          geographic multipliers. Results improved but were dominated by heavily-connected artists
          who appeared in every prediction regardless of festival identity — a rock festival and a
          folk festival with one shared artist got similar candidates. The scoring was purely
          connection-driven; festival context was a filter, not a driver.
        </p>

        <h3 className="mt-8 mb-2 text-lg font-medium text-slate-300">
          Attempt 3: Festival-First Per-Artist Replacement
        </h3>
        <p className="text-slate-400 leading-relaxed">
          Inverted the approach: the festival defines the pool, not artist connections. The engine
          profiles the festival (type, tier, genre distribution from lineup, country distribution),
          then finds 20 similar festivals in a 90-day window sharing genres. Their lineups form the
          candidate pool — real artists booked at real festivals in the same season and genre space.
        </p>
        <p className="mt-3 text-slate-400 leading-relaxed">
          For each lineup artist, the engine finds replacement candidates from the pool at
          compatible rating levels (&plusmn;1 of the artist&apos;s level, within the festival&apos;s
          tier range) with genre overlap. Candidates are scored by connection weight + genre depth
          multiplier (2x at full overlap) + country distribution match. Slots are allocated
          proportional to the lineup&apos;s geographic mix — a 30% Spanish lineup yields ~30%
          Spanish predictions.
        </p>
        <p className="mt-3 text-slate-400 leading-relaxed">
          A Redis-backed frequency penalty tracks how often each artist appears across predictions
          (24-hour TTL), applying a 10% penalty per appearance to prevent over-prediction. Scores
          are sqrt-flattened for more even distribution, then sampled with weighted random
          selection. Each request gets a fresh seed so regenerating produces a different lineup.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Classification System</h2>
        <p className="text-slate-400 leading-relaxed">
          Built an artist rating system (1-5 levels) auto-calculated from festival appearance count,
          with manual override via admin UI. 51,953 artists auto-rated. Integrated with the existing
          festival tier system (1-6, Local to Legendary). Bulk classification pages for both artists
          and festivals with inline button controls and autosave. Festival type auto-set from venue
          count (1 venue = standalone, 2+ = citywide). The classification data feeds directly into
          the prediction engine&apos;s per-artist level matching.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-200">Connection Weight Signals</h2>
        <p className="mb-4 text-slate-400 leading-relaxed">
          The ArtistConnection table captures eight types of relationships, each with a different
          weight maintained by the graph worker in Knokr Base:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="py-2 pr-4 font-medium text-slate-300">Signal</th>
                <th className="py-2 font-medium text-slate-300">Weight</th>
              </tr>
            </thead>
            <tbody className="text-slate-400">
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">LOCAL_SCENE (city + region + genre)</td>
                <td className="py-2">8</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">SHARED_MEMBER (band members)</td>
                <td className="py-2">7</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">SAME_EVENT</td>
                <td className="py-2">6</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">SAME_FESTIVAL_DAY</td>
                <td className="py-2">5</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">SAME_VENUE</td>
                <td className="py-2">4</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">SAME_FESTIVAL</td>
                <td className="py-2">3</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">NATIONAL_SCENE (country + genre)</td>
                <td className="py-2">2</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">SAME_COUNTRY</td>
                <td className="py-2">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-200">Current Accuracy</h2>
        <p className="mb-4 text-slate-400 leading-relaxed">
          Based on manual review against known lineups:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="py-2 pr-4 font-medium text-slate-300">Metric</th>
                <th className="py-2 pr-4 font-medium text-slate-300">Current</th>
                <th className="py-2 font-medium text-slate-300">Target</th>
              </tr>
            </thead>
            <tbody className="text-slate-400">
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">Genre relevance</td>
                <td className="py-2 pr-4">~75%</td>
                <td className="py-2">90%+</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">Artist plausibility</td>
                <td className="py-2 pr-4">~55%</td>
                <td className="py-2">75%+</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">Geographic fit</td>
                <td className="py-2 pr-4">~50%</td>
                <td className="py-2">70%+</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">Confidence calibration</td>
                <td className="py-2 pr-4">Poor</td>
                <td className="py-2">Meaningful</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Regeneration variety</td>
                <td className="py-2 pr-4">Good</td>
                <td className="py-2">Good</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Key Technical Decisions</h2>
        <ul className="space-y-3 text-slate-400 leading-relaxed">
          <li>
            <span className="text-slate-300 font-medium">No ML model in production</span> — The
            graph data already encodes the features a classifier would learn. Querying it directly
            is faster, more transparent, and festival-specific. The scikit-learn model was built and
            validated before being replaced.
          </li>
          <li>
            <span className="text-slate-300 font-medium">Redis job queue</span> — Decouples request
            from processing. Frontend submits a job, polls for completion. No HTTP timeouts on
            long-running predictions.
          </li>
          <li>
            <span className="text-slate-300 font-medium">Per-artist replacement</span> — Each lineup
            slot gets its own candidate search scoped by genre and level, rather than one global
            pool ranked by a single score.
          </li>
          <li>
            <span className="text-slate-300 font-medium">Country-proportional sampling</span> — Hard
            allocation by geographic distribution prevents international festivals from predicting
            100% domestic acts.
          </li>
          <li>
            <span className="text-slate-300 font-medium">Separate repos, separate services</span> —
            Engine and frontend deploy independently. No shared build, no coupling.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Next Steps</h2>
        <p className="text-slate-400 leading-relaxed">
          Confidence calibration is the primary gap — scores cluster at the extremes rather than
          distributing meaningfully. Rebooking avoidance will penalize artists from the most recent
          edition. Billing tier prediction will assign headliner/main/support/opener using artist
          level and festival tier data. Redis pool caching will store the candidate pool per
          festival so regeneration resamples without re-querying. A supervised ML layer is planned
          once classification data matures — training on graph scores as features rather than raw
          co-occurrence data.
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
