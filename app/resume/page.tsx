import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { ContactInfo } from "@/components/ContactInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Jay Fallon",
  description:
    "Principal-level engineer who designs and operates multi-service production platforms end-to-end. Currently building Knokr — a music-industry platform managing 60,000+ artists, 1,500+ festivals, 1,000+ venues, and 25,000+ events.",
};

const technicalSkills = [
  {
    category: "Backend & Data",
    skills:
      "PostgreSQL, Prisma, pgvector + HNSW, Redis, BullMQ, Node.js, Express, Python, FastAPI, asyncpg, GraphQL, REST, WebSockets, multi-tenant systems, database-driven routing, microservices, Cassandra, MongoDB, MySQL, Supabase",
  },
  {
    category: "Applied ML & Search",
    skills:
      "Anthropic Claude API, OpenAI API, vector embeddings (CLIP, all-MiniLM, OpenAI text-embedding-3), graph algorithms (Node2Vec, Louvain community detection), semantic + full-text search, scikit-learn, Pandas, NumPy",
  },
  {
    category: "Infrastructure & DevOps",
    skills:
      "Railway, AWS (S3, Lambda, CloudFront), Vercel, Docker, GitHub Actions CI/CD, Sentry, Winston, Husky pre-commit/pre-push gates, Testcontainers",
  },
  {
    category: "Data Pipelines & Automation",
    skills:
      "Selenium, BeautifulSoup, Puppeteer, asyncio, custom site parsers, data validation pipelines, scheduled BullMQ jobs",
  },
  {
    category: "Testing",
    skills: "Vitest, Playwright, Testing Library, Testcontainers, Supertest, Memlab, Happy-DOM",
  },
  {
    category: "Frameworks & Front-End",
    skills:
      "Next.js 16, React 19, TypeScript, Tailwind, HeroUI, Framer Motion, PayloadCMS, Prismic, Storybook",
  },
  {
    category: "Prior Stack Depth",
    skills:
      "Angular.js (6 years), Ruby on Rails (4 years), Express.js applications across multiple engagements, plus the full pre-React CSS lineage (CSS, SCSS, PostCSS, Stylus)",
  },
  {
    category: "Auth, Payments & Misc",
    skills: "Clerk, Zod validation, Stripe (checkout, billing portal, webhooks), Firebase, Agile",
  },
];

const knokrComponents = [
  {
    name: "Knokr Lineups (knokr.com)",
    description:
      "Public site — city-context discovery across 60K+ artists, 1.5K+ festivals, 1K+ venues, and 25K+ events with semantic + full-text search, calendar/RSVPs, BullMQ-backed reminder pipeline, CLIP-based album search, and mutual-friend-gated messaging",
  },
  {
    name: "Knokr Base",
    description:
      "Multi-tenant admin CMS with database-driven routing, six-tier RBAC (90–95% latency reduction via Redis), graph-based discovery, OpenAI vector search, a five-worker BullMQ pipeline (graph, embedding, insights, social-card, reminder), and a six-strategy data ingestion cascade (JSON-LD → Bandsintown → Songkick → Seated → custom HTML → Claude LLM fallback)",
  },
  {
    name: "Knokr Predictor",
    description:
      "Festival lineup prediction engine — FastAPI service querying 3.3M co-occurrence edges with Louvain scene detection, weighted random sampling, and confidence tiering",
  },
];

export default function ResumePage() {
  return (
    <div className="max-w-3xl lg:py-24">
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-teal-300"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        <Link
          href="/jay-fallon-resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-300 hover:bg-teal-400/20 transition-colors"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </Link>
      </div>

      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Jay Fallon</h1>
        <p className="mt-4 text-lg text-slate-400">
          Founding Engineer · Platform Architect · Full-Stack Engineer
        </p>
        <ContactInfo />
      </header>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Summary</h2>
        <p className="text-slate-400 leading-relaxed">
          Principal-level engineer who designs and operates multi-service production platforms
          end-to-end. Currently building Knokr, a music-industry platform managing 60,000+ artists,
          1,500+ festivals, 1,000+ venues, and 25,000+ events across a federated architecture: three
          Next.js apps, a Python/FastAPI prediction service, and four BullMQ background workers
          sharing a single Postgres/Redis/S3 backbone.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          Twenty-plus years of engineering experience across enterprise (Dassault Systèmes, Bose,
          State Street, Cengage) and consumer health (Form Health). Deep on backend architecture,
          data modeling, and applied ML — pgvector and HNSW indexes, graph algorithms (Node2Vec,
          Louvain), AI-powered recommendation systems — with a long front-end track record that
          informs how I build APIs and design systems.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed italic">
          Seeking founding engineer, principal IC, or staff backend roles where one engineer can own
          architecture and ship across the stack.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Technical Skills</h2>
        <div className="space-y-3">
          {technicalSkills.map((skill) => (
            <div key={skill.category}>
              <span className="font-medium text-slate-300">{skill.category}: </span>
              <span className="text-slate-400">{skill.skills}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-500">Fluent in English and Spanish</p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-slate-300">
              Master of Liberal Arts (ALM) in Digital Media Design · Harvard University
            </h3>
            <p className="text-slate-500 text-sm">2017 – 2019</p>
            <p className="text-sm text-slate-400 mt-1">
              Completed Master of Liberal Arts degree in Digital Media Design through Harvard
              Extension School, focusing on user experience design, interaction design, and digital
              media production. Developed comprehensive understanding of design principles, user
              research methodologies, and digital product development.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-slate-300">
              Bachelor of Science (B.S.) in Business Administration · Northeastern University
            </h3>
            <p className="text-slate-500 text-sm">1993 – 1998</p>
            <p className="text-sm text-slate-400 mt-1">
              Completed Bachelor of Science degree in Business Administration with majors in
              International Business and Finance, focusing on global operations and marketing.
              Participated in Northeastern&apos;s renowned cooperative education program, completing
              assignments at Boston&apos;s Better Snacks, FMRC, and PictureTel, gaining hands-on
              experience in operations, marketing, technical documentation, and
              internationalization.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-200">Experience</h2>

        <div className="mb-8">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-medium text-slate-300">Founder & Principal Engineer</h3>
            <span className="text-sm text-slate-500">2024 – Present</span>
          </div>
          <p className="text-teal-300 mb-3">Knokr</p>
          <p className="text-slate-400 mb-4 leading-relaxed">
            Sole architect and engineer of a federated music-industry platform spanning a
            consumer-facing application and an operator/CMS backend. Chose multi-service over
            monolith from day one: separate Next.js apps, a Python/FastAPI prediction service, and
            BullMQ workers sharing Postgres, Redis, and S3. Validated each major capability by
            building six standalone prototypes against the shared production infrastructure — a
            CLIP-based media platform, a festival prediction engine, a multi-source data ingestion
            pipeline, a white-label tenant site, an artist-relationship graph, and an AI event
            curation tool — then graduated five of them into the core services. Designed the
            schema for a complex domain — entity resolution across artists, venues, festivals, and
            events; slug stability; ownership transfer; multi-tenant isolation; six-tier RBAC with
            three-layer route protection. pgvector + HNSW for sub-100ms semantic search. Node2Vec
            + Louvain on 3.3M co-occurrence edges for artist discovery. Anthropic Claude API for
            festival recommendations and lineup extraction from posters. ~2,800 tests across the
            system (Vitest, Playwright, Testcontainers, Supertest, Memlab).
          </p>
          <h4 className="text-sm font-medium text-slate-300 mb-2">Platform Components</h4>
          <div className="space-y-2">
            {knokrComponents.map((component) => (
              <div
                key={component.name}
                className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3"
              >
                <h5 className="font-medium text-teal-300 text-sm">{component.name}</h5>
                <p className="text-xs text-slate-400">{component.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">
            <span className="text-slate-400">Tech Stack:</span> PostgreSQL/Prisma, pgvector, Redis,
            BullMQ, Node.js, Python/FastAPI, asyncpg, scikit-learn, Pandas, NumPy, Selenium,
            BeautifulSoup, Next.js 16, React 19, TypeScript, Tailwind, Clerk, Stripe, AWS
            S3/CloudFront, Sentry, Railway, Anthropic Claude API, OpenAI API
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-medium text-slate-300">Consulting Engineer</h3>
            <span className="text-sm text-slate-500">2022 – 2024</span>
          </div>
          <p className="text-teal-300 mb-3">Form Health</p>
          <p className="text-slate-400 mb-2 leading-relaxed">
            Rewrote the front-end from scratch to incorporate the site redesign and built a
            componentized design-system library used across the platform. Worked with marketing and
            product teams on the customer-facing platform for a medical weight-loss company; built
            and maintained the marketing site infrastructure and shared component library.
            Implemented Storybook documentation and supporting tooling to standardize component
            usage and reduce front-end fragmentation across teams.
          </p>
          <p className="text-xs text-slate-500">
            <span className="text-slate-400">Tech Stack:</span> Next.js, TypeScript, Tailwind CSS,
            Prismic, Storybook
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-medium text-slate-300">Senior Software Engineering Manager</h3>
            <span className="text-sm text-slate-500">2021 – 2023</span>
          </div>
          <p className="text-teal-300 mb-3">Dassault Systèmes SE · Waltham, MA</p>
          <p className="text-slate-400 mb-2 leading-relaxed">
            Senior IC role despite the manager title — hands-on engineer working alongside
            director-level peers on the SOLIDWORKS Cloud Platform. Implemented and maintained UI
            features across products to enforce design-system consistency and reduce accumulated
            technical debt. Designed and built a new content management system serving the entire
            product suite, replacing fragmented per-product docs. Partnered with new product teams
            on consumer-facing UIs while keeping product and design language consistent across the
            portfolio.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-medium text-slate-300">Software Engineer (Contract)</h3>
            <span className="text-sm text-slate-500">2019 – 2021</span>
          </div>
          <p className="text-teal-300 mb-3">Dassault Systèmes SE · Waltham, MA</p>
          <p className="text-slate-400 mb-3 leading-relaxed">
            Contractor across two products in the SOLIDWORKS Apps for Kids suite.
          </p>
          <div className="space-y-3 text-sm">
            <div>
              <span className="font-medium text-slate-300">SOLIDWORKS Apps for Kids</span>
              <p className="text-slate-400 mt-1">
                Rewrote the entire front-end in Angular 1.x, JavaScript, and CSS. Built a
                componentized design system to unify the separate applications. Consolidated
                disparate API streams into one structure for easier maintenance. Rewrote the
                end-to-end test suite using Mocha, Chai, and Puppeteer.
              </p>
            </div>
            <div>
              <span className="font-medium text-slate-300">
                SOLIDWORKS Apps for Kids — Classroom
              </span>
              <p className="text-slate-400 mt-1">
                Sole engineer on Classroom — a teacher-facing application for 30,000 students aged
                8–14 with classroom and assignment scheduling, grading tools, custom newsletter app,
                and COPPA-compliant data and account flows. Containerized an Express suite of 12
                interdependent services using Docker Compose, replacing manual per-service startup.
                Introduced a design system the application had never had on a Dassault-licensed
                customized Angular 1.x build.
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            <span className="text-slate-400">Tech Stack:</span> Angular 1.x, JavaScript, HTML, CSS,
            Node.js, Express, Docker, Docker Compose, Mocha, Chai, Puppeteer, Cassandra
          </p>
        </div>

        <div>
          <h3 className="font-medium text-slate-300 mb-2">
            Software Engineering & Consulting · Earlier Roles (2000–2019)
          </h3>
          <p className="text-slate-400 leading-relaxed text-sm">
            Engineering and consulting roles spanning financial services, education, consumer
            audio, and pharmaceuticals. Full-stack web development, design system architecture,
            and front-end engineering at scale. Stack depth from this period includes six years of
            Angular.js, four years of Ruby on Rails, multi-year Express.js applications, and the
            full pre-React CSS lineage (CSS, SCSS, PostCSS, Stylus). Clients and employers via
            direct hire and consulting: Bose Corporation, State Street Global Advisors, Cengage
            Learning, Boston Technologies, netNumina Solutions (Fidelity, State Street, Johnson &
            Johnson, Pfizer, ADQSR), and Style Me Pretty.
          </p>
        </div>
      </section>
    </div>
  );
}
