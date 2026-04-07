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
  "FastAPI",
  "asyncpg",
  "Redis",
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
          Fans want to know who&apos;s playing next year&apos;s festival before the lineup drops.
          Festival lineups aren&apos;t random — they follow patterns driven by genre, geography,
          booking relationships, and artist touring circuits. The question was whether Knokr&apos;s
          existing music discovery graph (3.3M artist co-occurrence edges, Louvain scene detection,
          weighted connection signals) contained enough signal to generate plausible lineup
          predictions without a traditional ML model.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">What I Built</h2>
        <p className="text-slate-400 leading-relaxed">
          A two-service prediction system: a Python engine (FastAPI, asyncpg) that queries
          pre-computed graph data on demand, and a Next.js frontend for browsing festivals and
          viewing predictions. Both services read from the shared Knokr PostgreSQL database and
          communicate via Redis queue. Deployed to Railway as separate services within the Knokr
          project.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          The system does not train a model or load data into memory. It queries the existing graph
          data per-request — 3.3M ArtistConnection rows weighted across eight signal types, 27K
          SceneMember records from Louvain community detection, and 56K FestivalLineup entries — to
          score and rank candidates for each festival.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">How It Works</h2>
        <p className="text-slate-400 leading-relaxed">
          The prediction starts with a festival&apos;s current lineup and automatically discovers up
          to 5 similar festivals based on shared artists and genre overlap. The combined lineups
          form a seed pool. For each seed artist, the engine queries their ArtistConnection edges
          (weighted co-occurrence) and SceneMember associations (Louvain communities) to build a
          candidate pool.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          Candidates are hard-filtered: must share at least one genre with the festival, must have
          complete profile data (image, location, genres), must not be retired or a duplicate
          record. Surviving candidates are scored by connection weight sum, scene affinity
          (SceneMember.score &times; FestivalScene.strength), and a genre-depth multiplier that
          rewards artists matching multiple festival genres.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          Scores are flattened with square root to reduce dominance by heavily-connected artists,
          then sampled without replacement using weighted random selection. Each request gets a
          fresh random seed, so regenerating produces a different lineup. Confidence scores are
          relative — highest scorer in the batch gets 100%, not a probability of appearing.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          Results are grouped into three tiers: High Confidence (&ge;70%), There&apos;s a Chance
          (40-70%), and Probably Not (&lt;40%). Each predicted artist includes the top 5
          contributing factors showing which lineup artists drove the prediction.
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
                <td className="py-2 pr-4">~70%</td>
                <td className="py-2">90%+</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">Artist plausibility</td>
                <td className="py-2 pr-4">~50%</td>
                <td className="py-2">75%+</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 pr-4">Geographic fit</td>
                <td className="py-2 pr-4">~30%</td>
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
        <h2 className="mb-4 text-xl font-semibold text-slate-200">
          Known Weaknesses &amp; Next Steps
        </h2>
        <p className="text-slate-400 leading-relaxed">
          Geographic weighting is the biggest gap — a Barcelona festival should predict more
          Spanish/European acts but geography isn&apos;t factored into scoring yet. Connection
          weight normalization is needed to prevent artists who appear at 20+ festivals from
          dominating every prediction. Other planned improvements include rebooking avoidance
          (penalizing artists from the most recent edition), top-3 genre filtering to prevent
          over-permissive matching on festivals with 30+ genre tags, billing tier prediction using
          popularity and career data, and a supervised ML layer once the graph-based predictions
          stabilize.
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
