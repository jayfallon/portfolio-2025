import type { Metadata } from "next";
import CaseStudyLayout from "@/components/design/case-study/CaseStudyLayout";
import Breadcrumb from "@/components/design/case-study/Breadcrumb";
import SectionHeader from "@/components/design/SectionHeader";
import Button from "@/components/design/Button";
import Tag from "@/components/design/Tag";
import { ContactInfo } from "@/components/ContactInfo";

export const metadata: Metadata = {
  title: "Resume | Jay Fallon",
  description:
    "Principal-level engineer who designs and operates multi-service production platforms end-to-end: schema design and entity resolution, service boundaries, background processing, applied ML, and the rollout discipline to change any of it safely in production.",
};

const technicalSkills = [
  {
    category: "Backend & Data",
    skills:
      "PostgreSQL · Prisma · pgvector + HNSW · Redis · BullMQ · Node.js · Express · Python · FastAPI · asyncpg · GraphQL · REST · WebSockets · multi-tenant systems · database-driven routing · microservices · Cassandra · MongoDB · MySQL · Supabase",
  },
  {
    category: "Applied ML & Search",
    skills:
      "Anthropic Claude API · OpenAI API · vector embeddings (CLIP, all-MiniLM, OpenAI text-embedding-3) · graph algorithms (Node2Vec, Louvain community detection) · semantic + full-text search · scikit-learn · Pandas · NumPy",
  },
  {
    category: "Infrastructure & DevOps",
    skills:
      "Railway · AWS (S3, Lambda, CloudFront) · Vercel · Docker · GitHub Actions CI/CD · Sentry · Winston · Husky pre-commit/pre-push gates · Testcontainers",
  },
  {
    category: "Data Pipelines & Automation",
    skills:
      "Selenium · BeautifulSoup · Puppeteer · asyncio · custom site parsers · data validation pipelines · scheduled BullMQ jobs",
  },
  {
    category: "Testing",
    skills: "Vitest · Playwright · Testing Library · Testcontainers · Supertest · Memlab · Happy-DOM",
  },
  {
    category: "Frameworks & Front-End",
    skills:
      "Next.js 16 · React 19 · TypeScript · Tailwind · HeroUI · Framer Motion · PayloadCMS · Prismic · Storybook",
  },
  {
    category: "Prior Stack Depth",
    skills:
      "Angular.js (6 years) · Ruby on Rails (4 years) · Express.js applications across multiple engagements · plus the full pre-React CSS lineage (CSS, SCSS, PostCSS, Stylus)",
  },
  {
    category: "Auth, Payments & Misc",
    skills: "Clerk · Zod validation · Stripe (checkout, billing portal, webhooks) · Firebase · Agile",
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

type Experience = {
  role: string;
  company: string;
  location?: string;
  dates: string;
  current?: boolean;
  paragraphs: string[];
  components?: { name: string; description: string }[];
  stack?: string;
};

const experiences: Experience[] = [
  {
    role: "Senior Software Engineer, In-Product Messaging",
    company: "GitHub",
    dates: "May 2026 – Sep 2026",
    paragraphs: [
      "On GitHub's in-product messaging team I owned the nudges, banners and prompts that guide users toward Copilot, billing actions and new features. That work covered GitHub's Ruby on Rails monolith and its React/TypeScript frontend. I built a canonical nudge registry and a priority-coordination system so competing messages resolve predictably. Each message kept its contract for eligibility, placement, dismissal, analytics and rendering across organization, enterprise, dashboard and Copilot surfaces. Every change shipped behind actor-scoped feature flags, cohort gates and kill switches, through A/B experiments and staged rollouts with explicit rollback paths. I instrumented it with Hydro analytics and Datadog metrics. Over the role I merged more than 100 pull requests and reviewed more than 200.",
    ],
    stack:
      "Ruby on Rails · Sorbet · React · TypeScript · SQL · Hydro · Datadog · Sentry · Feature Flags · A/B Experimentation · Background Jobs · Stream Processors",
  },
  {
    role: "Founder & Principal Engineer",
    company: "Knokr",
    dates: "2024 – Present",
    current: true,
    paragraphs: [
      "Sole architect and engineer of a federated music-industry platform spanning a consumer-facing application and an operator/CMS backend. Chose multi-service over monolith from day one: separate Next.js apps, a Python/FastAPI prediction service, and BullMQ workers sharing Postgres, Redis, and S3. Validated each major capability by building six standalone prototypes against the shared production infrastructure — a CLIP-based media platform, a festival prediction engine, a multi-source data ingestion pipeline, a white-label tenant site, an artist-relationship graph, and an AI event curation tool — then graduated five of them into the core services. Designed the schema for a complex domain — entity resolution across artists, venues, festivals, and events; slug stability; ownership transfer; multi-tenant isolation; six-tier RBAC with three-layer route protection. pgvector + HNSW for sub-100ms semantic search. Node2Vec + Louvain on 3.3M co-occurrence edges for artist discovery. Anthropic Claude API for festival recommendations and lineup extraction from posters. ~2,800 tests across the system (Vitest, Playwright, Testcontainers, Supertest, Memlab).",
    ],
    components: knokrComponents,
    stack:
      "PostgreSQL/Prisma · pgvector · Redis · BullMQ · Node.js · Python/FastAPI · asyncpg · scikit-learn · Pandas · NumPy · Selenium · BeautifulSoup · Next.js 16 · React 19 · TypeScript · Tailwind · Clerk · Stripe · AWS S3/CloudFront · Sentry · Railway · Anthropic Claude API · OpenAI API",
  },
  {
    role: "Consulting Engineer",
    company: "Form Health",
    dates: "2022 – 2024",
    paragraphs: [
      "Rewrote the front-end from scratch to incorporate the site redesign and built a componentized design-system library used across the platform. Worked with marketing and product teams on the customer-facing platform for a medical weight-loss company; built and maintained the marketing site infrastructure and shared component library. Implemented Storybook documentation and supporting tooling to standardize component usage and reduce front-end fragmentation across teams.",
    ],
    stack: "Next.js · TypeScript · Tailwind CSS · Prismic · Storybook",
  },
  {
    role: "Senior Software Engineering Manager",
    company: "Dassault Systèmes",
    location: "Waltham, MA",
    dates: "2021 – 2023",
    paragraphs: [
      "Senior IC role despite the manager title — hands-on engineer working alongside director-level peers on the SOLIDWORKS Cloud Platform. Implemented and maintained UI features across products to enforce design-system consistency and reduce accumulated technical debt. Designed and built a new content management system serving the entire product suite, replacing fragmented per-product docs. Partnered with new product teams on consumer-facing UIs while keeping product and design language consistent across the portfolio.",
    ],
  },
  {
    role: "Software Engineer (Contract)",
    company: "Dassault Systèmes",
    location: "Waltham, MA",
    dates: "2019 – 2021",
    paragraphs: [
      "Contractor across two products in the SOLIDWORKS Apps for Kids suite. Rewrote the entire front-end in Angular 1.x, JavaScript, and CSS. Built a componentized design system to unify the separate applications. Consolidated disparate API streams into one structure for easier maintenance. Rewrote the end-to-end test suite using Mocha, Chai, and Puppeteer.",
      "Sole engineer on Classroom — a teacher-facing application for 30,000 students aged 8–14 with classroom and assignment scheduling, grading tools, custom newsletter app, and COPPA-compliant data and account flows. Containerized an Express suite of 12 interdependent services using Docker Compose, replacing manual per-service startup. Introduced a design system the application had never had on a Dassault-licensed customized Angular 1.x build.",
    ],
    stack:
      "Angular 1.x · JavaScript · HTML · CSS · Node.js · Express · Docker · Docker Compose · Mocha · Chai · Puppeteer · Cassandra",
  },
  {
    role: "Software Engineering & Consulting · Earlier Roles",
    company: "Various",
    dates: "2000 – 2019",
    paragraphs: [
      "Engineering and consulting roles spanning financial services, education, consumer audio, and pharmaceuticals. Full-stack web development, design system architecture, and front-end engineering at scale. Stack depth from this period includes six years of Angular.js, four years of Ruby on Rails, multi-year Express.js applications, and the full pre-React CSS lineage (CSS, SCSS, PostCSS, Stylus). Clients and employers via direct hire and consulting: Bose Corporation, State Street Global Advisors, Cengage Learning, Boston Technologies, netNumina Solutions (Fidelity, State Street, Johnson & Johnson, Pfizer, ADQSR), and Style Me Pretty.",
    ],
  },
];

export default function ResumePage() {
  return (
    <CaseStudyLayout>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Breadcrumb items={[{ label: "home", href: "/" }, { label: "resume" }]} />
        <Button href="/jay-fallon-resume.pdf" external download variant="primary">
          Download PDF <span aria-hidden>↓</span>
        </Button>
      </div>

      <header className="mt-10 border-b border-line pb-10">
        <div className="mb-4 font-mono text-mono-md text-fg-3">
          <span className="text-accent-text">$</span> cat resume.md
        </div>
        <h1 className="text-display-sm text-fg">Jay Fallon</h1>
        <p className="mt-4 font-mono text-mono-md text-fg-2">
          <span className="text-accent-text">Founding Engineer</span>
          <span className="mx-2 text-fg-3">/</span>
          Platform Architect
          <span className="mx-2 text-fg-3">/</span>
          Full-Stack Engineer
        </p>
        <ContactInfo />
      </header>

      <section className="mt-16">
        <SectionHeader number="01" title="Summary" />
        <div className="max-w-prose space-y-4 text-prose text-fg-2">
          <p>
            Principal-level engineer who designs and operates multi-service production platforms
            end-to-end: schema design and entity resolution, service boundaries, background
            processing, applied ML, and the rollout discipline to change any of it safely in
            production. Recent work spans a contract on GitHub&apos;s Ruby on Rails monolith and
            React/TypeScript frontend, and Knokr — a federated music-industry platform I
            architected and built solo across Next.js, Python/FastAPI, and a shared
            Postgres/Redis/S3 backbone.
          </p>
          <p>
            Twenty-plus years of engineering experience across enterprise (Dassault Systèmes, Bose,
            State Street, Cengage, GitHub) and consumer health (Form Health). Deep on backend
            architecture, data modeling, and applied ML — pgvector and HNSW indexes, graph
            algorithms (Node2Vec, Louvain), AI-powered recommendation systems — with a long
            front-end track record that informs how I build APIs and design systems.
          </p>
          <p className="italic text-fg">
            Seeking founding engineer, principal IC, or staff backend roles where one engineer can
            own architecture and ship across the stack.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <SectionHeader number="02" title="Technical Skills" />
        <dl className="overflow-hidden rounded-panel border border-line">
          {technicalSkills.map((skill, i) => (
            <div
              key={skill.category}
              className={`flex flex-wrap gap-x-6 gap-y-1 bg-surface-1 px-5 py-4 ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
              <dt className="flex-[0_0_200px] font-mono text-mono-sm uppercase tracking-[.08em] text-fg-3">
                {skill.category}
              </dt>
              <dd className="m-0 flex-1 min-w-0 text-small text-fg-2">{skill.skills}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 font-mono text-mono-xs uppercase tracking-[.08em] text-fg-3">
          Fluent in English and Spanish
        </p>
      </section>

      <section className="mt-16">
        <SectionHeader number="03" title="Experience" />
        <ol className="m-0 list-none space-y-10 p-0">
          {experiences.map((e) => (
            <li
              key={`${e.company}-${e.dates}`}
              className="flex flex-wrap gap-x-8 gap-y-1"
            >
              <div className="flex-[0_0_190px] font-mono text-mono-sm uppercase leading-7 tracking-[.08em] text-fg-3">
                {e.dates}
              </div>
              <div className="relative min-w-0 flex-[1_1_480px] border-l border-line pl-7">
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-[9px] h-[9px] w-[9px] rounded-full"
                  style={{
                    background: e.current ? "var(--live)" : "var(--border-2)",
                    boxShadow: "0 0 0 4px var(--bg)",
                  }}
                />
                <h3 className="m-0 text-h3 text-fg">
                  {e.role} <span className="font-normal text-fg-3">·</span>{" "}
                  <span className="text-accent-text">{e.company}</span>
                  {e.location ? (
                    <span className="ml-2 font-mono text-mono-sm uppercase tracking-[.08em] text-fg-3">
                      {e.location}
                    </span>
                  ) : null}
                </h3>
                <div className="mt-2.5 max-w-[720px] space-y-3 text-[15.5px] text-fg-2">
                  {e.paragraphs.map((p, i) => (
                    <p key={i} className="m-0">
                      {p}
                    </p>
                  ))}
                </div>
                {e.components ? (
                  <div className="mt-4 space-y-2">
                    <div className="font-mono text-mono-xs uppercase tracking-[.08em] text-fg-3">
                      Platform components
                    </div>
                    {e.components.map((c) => (
                      <div
                        key={c.name}
                        className="rounded-panel border border-line bg-surface-1 px-4 py-3"
                      >
                        <h4 className="m-0 text-small font-semibold text-accent-text">{c.name}</h4>
                        <p className="m-0 mt-1 text-xs text-fg-2">{c.description}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
                {e.stack ? (
                  <p className="mt-4 text-xs text-fg-3">
                    <span className="font-mono uppercase tracking-[.08em] text-fg-2">
                      Tech Stack:
                    </span>{" "}
                    {e.stack}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <SectionHeader number="04" title="Education" />
        <div className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
          <div className="rounded-panel border border-line bg-surface-1 px-5 py-5">
            <div className="font-mono text-mono-sm uppercase tracking-[.08em] text-fg-3">
              2017 — 2019
            </div>
            <div className="mt-1.5 text-[18px] font-semibold text-fg">
              Master of Liberal Arts (ALM) in Digital Media Design
            </div>
            <div className="text-fg-2">Harvard University</div>
            <p className="mt-3 text-small text-fg-2">
              Completed Master of Liberal Arts degree in Digital Media Design through Harvard
              Extension School, focusing on user experience design, interaction design, and
              digital media production.
            </p>
          </div>
          <div className="rounded-panel border border-line bg-surface-1 px-5 py-5">
            <div className="font-mono text-mono-sm uppercase tracking-[.08em] text-fg-3">
              1993 — 1998
            </div>
            <div className="mt-1.5 text-[18px] font-semibold text-fg">
              Bachelor of Science (B.S.) in Business Administration
            </div>
            <div className="text-fg-2">Northeastern University</div>
            <p className="mt-3 text-small text-fg-2">
              Completed Bachelor of Science degree in Business Administration with majors in
              International Business and Finance, focusing on global operations and marketing.
              Participated in Northeastern&apos;s renowned cooperative education program,
              completing assignments at Boston&apos;s Better Snacks, FMRC, and PictureTel.
            </p>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
