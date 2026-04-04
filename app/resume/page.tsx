import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { ContactInfo } from "@/components/ContactInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Jay Fallon",
  description:
    "Full-stack architect specializing in domain-specific platform development with expertise in multi-tenant systems, database architecture, and AI integration.",
};

const technicalSkills = [
  {
    category: "Architecture & Backend",
    skills:
      "Multi-tenant systems, database-driven routing, PostgreSQL, Prisma ORM, Redis, pgvector, BullMQ, Node.js/Express, Python, FastAPI, GraphQL, REST APIs, microservices, WebSockets, Supabase, PayloadCMS",
  },
  {
    category: "Frontend & Frameworks",
    skills:
      "Next.js, React 19, TypeScript, Tailwind CSS, HeroUI, Framer Motion, responsive design, semantic HTML, WCAG compliance",
  },
  {
    category: "AI & Machine Learning",
    skills:
      "Anthropic Claude API, OpenAI API, vector search, graph algorithms (Node2Vec, Louvain), semantic search, scikit-learn, Pandas",
  },
  {
    category: "Data & Automation",
    skills: "Selenium, BeautifulSoup, web scraping, asyncio, data validation pipelines, Puppeteer",
  },
  {
    category: "Testing & Performance",
    skills:
      "Vitest, Playwright, Testing Library, Testcontainers, Supertest, Memlab, Happy-DOM, Core Web Vitals",
  },
  {
    category: "DevOps & Infrastructure",
    skills:
      "Railway, AWS (S3, Lambda, CloudFront), Vercel, Docker Compose, CI/CD pipelines, Sentry, Winston",
  },
];

const knokrComponents = [
  {
    name: "Knokr",
    description:
      "Festival discovery and social platform across 1,400+ festivals and 50,000+ artists with AI-powered lineup extraction and recommendations",
  },
  {
    name: "Knokr Base",
    description:
      "Multi-tenant back office with database-driven routing, graph-based discovery, vector search, and six-tier permissions",
  },
  {
    name: "Mojo Boston",
    description:
      "White-label festival website on PayloadCMS with 24 custom blocks, live Knokr data integration, and custom S3 media system",
  },
  {
    name: "Orchestra",
    description:
      "Standalone experiment for mapping artist relationships through community-driven data contribution",
  },
  {
    name: "Nuncio",
    description:
      "Standalone experiment for AI-powered event curation with embeddable widgets and structured data exports",
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
          Full-Stack Software Engineer · UX Designer · Product Strategist
        </p>
        <ContactInfo />
      </header>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-200">Summary</h2>
        <p className="text-slate-400 leading-relaxed">
          Full-stack architect specializing in domain-specific platform development. I design and
          implement complex, multi-tenant systems that solve real industry problems — from
          database-driven routing engines and AI-powered data extraction pipelines to graph-based
          discovery algorithms and background worker architectures. My background combines
          enterprise experience (Form Health, Dassault Systèmes, Bose, Cengage) with
          interdisciplinary education — B.S. in Business Administration (International Business,
          Finance) from Northeastern University and ALM in Digital Media Design from Harvard
          University.
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
              Completed through Harvard Extension School, focusing on user experience design,
              interaction design, and digital media production. Developed comprehensive
              understanding of design principles, user research methodologies, and digital product
              development.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-slate-300">
              Bachelor of Science (B.S.) in Business Administration · Northeastern University
            </h3>
            <p className="text-slate-500 text-sm">1993 – 1998</p>
            <p className="text-sm text-slate-400 mt-1">
              Majors in International Business and Finance. Participated in cooperative education
              program at Boston&apos;s Better Snacks, FMRC, and PictureTel, gaining hands-on
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
            <h3 className="font-medium text-slate-300">Founder, Designer & Principal Engineer</h3>
            <span className="text-sm text-slate-500">2024 – Present</span>
          </div>
          <p className="text-teal-300 mb-3">Knokr Media</p>
          <p className="text-slate-400 mb-4 leading-relaxed">
            Architecting a platform ecosystem addressing data fragmentation in the music industry.
            The system manages 50,000+ artists and 1,400+ festivals through a shared PostgreSQL
            infrastructure with pgvector extensions, powering multiple interconnected applications
            from a single data model. Features include AI-powered lineup extraction from festival
            posters, graph-based artist discovery using Node2Vec and Louvain scene detection,
            semantic vector search, a background worker architecture (BullMQ) for heavy data
            processing, and 614+ test files across Vitest, Playwright, and Testcontainers.
          </p>
          <h4 className="text-sm font-medium text-slate-300 mb-2">Platform Components</h4>
          <div className="grid gap-2 sm:grid-cols-2">
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
            <span className="text-slate-400">Tech Stack:</span> Next.js 16, React 19, TypeScript,
            PostgreSQL/Prisma, pgvector, Redis, BullMQ, PayloadCMS, Python, FastAPI, Selenium,
            BeautifulSoup, Claude AI API, OpenAI API, Clerk, AWS S3/CloudFront, Railway
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-medium text-slate-300">Consulting Engineer</h3>
            <span className="text-sm text-slate-500">2022 – 2024</span>
          </div>
          <p className="text-teal-300 mb-3">Form Health</p>
          <p className="text-slate-400 mb-2 leading-relaxed">
            Collaborated with the marketing team on redesign and development of the customer-facing
            website for this leading medical weight loss platform. Implemented modern web
            development practices and a comprehensive design system to ensure consistency across the
            platform. Improved user experience through responsive design and optimized performance.
          </p>
          <p className="text-xs text-slate-500">
            <span className="text-slate-400">Tech Stack:</span> Next.js, TypeScript, Tailwind CSS,
            Prismic, Storybook
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-medium text-slate-300">Senior Software Engineering Manager</h3>
            <span className="text-sm text-slate-500">2019 – 2023</span>
          </div>
          <p className="text-teal-300 mb-3">Dassault Systèmes SE · Waltham, MA</p>
          <p className="text-slate-400 mb-3 leading-relaxed">
            Led development teams across multiple products within The 3DEXPERIENCE platform,
            including SOLIDWORKS and educational products Apps for Kids and Apps for Kids Classroom.
          </p>
          <div className="space-y-3 text-sm">
            <div>
              <span className="font-medium text-slate-300">SOLIDWORKS Cloud Platform</span>
              <span className="text-slate-500"> (2021–2023)</span>
              <p className="text-slate-400 mt-1">
                Implemented comprehensive design system technology and documentation systems.
                Managed shared component libraries and design tokens. Coordinated feature rollouts
                spanning Apps for Kids, xDesign, and 3DEXPERIENCE tools.
              </p>
            </div>
            <div>
              <span className="font-medium text-slate-300">SOLIDWORKS Apps for Kids</span>
              <span className="text-slate-500"> (2019–2021)</span>
              <p className="text-slate-400 mt-1">
                Rebuilt front-end and back-office systems for educational platform introducing
                children ages 4-14 to 3D design. Developed admin tools for educators while
                maintaining COPPA compliance.
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            <span className="text-slate-400">Tech Stack:</span> Angular.js, JavaScript, Node.js,
            Express.js, CSS, Cassandra, Docker
          </p>
        </div>

        <div>
          <h3 className="font-medium text-slate-300 mb-2">Additional Experience (2000–2019)</h3>
          <p className="text-slate-400 leading-relaxed text-sm">
            Worked as a UX engineer with the following companies as either an employee or
            consultant: Syrinx Consulting/Bose Corporation, State Street Global Advisors, Cengage
            Learning, Boston Technologies, netNumina Solutions (Fidelity, State Street, Johnson &
            Johnson, Pfizer, ADQSR), and Style Me Pretty.
          </p>
        </div>
      </section>
    </div>
  );
}
