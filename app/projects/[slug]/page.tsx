import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "node:fs";
import path from "node:path";
import { ImageCarousel } from "@/components/ui/image-carousel";
import CaseStudyLayout from "@/components/design/case-study/CaseStudyLayout";
import Breadcrumb from "@/components/design/case-study/Breadcrumb";
import CaseStudyHeader from "@/components/design/case-study/CaseStudyHeader";
import MetaStrip from "@/components/design/case-study/MetaStrip";
import StackCloud from "@/components/design/case-study/StackCloud";
import CaseStudySection from "@/components/design/case-study/CaseStudySection";
import CaseStudyMarkdown from "@/components/design/case-study/CaseStudyMarkdown";
import CaseStudyNav from "@/components/design/case-study/CaseStudyNav";
import Placeholder from "@/components/design/Placeholder";
import portfolioData from "@/data/portfolio.json";
import { PROJECT_EXTRAS } from "@/lib/project-extras";
import type { Status } from "@/components/design/StatusDot";

type Project = (typeof portfolioData.sections.projects.items)[number];

type KeyDecision = { title: string; detail: string };

const PROJECT_ORDER = [
  "zaaber",
  "knokr",
  "knokr-base",
  "knokr-experiments",
  "knokr-predictor",
  "knokr-guestlist",
  "knokr-media",
  "mojo-boston",
  "knokr-fetch",
  "orchestra",
  "nuncio",
  "connections-plus",
];

const slugFromUrl = (url: string) => url.replace(/^\/projects\//, "");

const firstSentence = (text: string, max = 280) => {
  const trimmed = text.trim();
  const dot = trimmed.indexOf(". ");
  const stop = dot > -1 && dot < max ? dot + 1 : Math.min(trimmed.length, max);
  return trimmed.slice(0, stop);
};

const categoryToStatus = (category: string): Status => {
  if (category === "In Development") return "in-development";
  if (category === "Inactive") return "inactive";
  if (category === "Past") return "past";
  return "active";
};

const findProject = (slug: string): Project | null => {
  return (
    portfolioData.sections.projects.items.find(
      (p: Project) => slugFromUrl(p.url) === slug,
    ) ?? null
  );
};

const loadMarkdown = (slug: string): string | null => {
  try {
    return fs.readFileSync(
      path.join(process.cwd(), "content/projects", `${slug}.md`),
      "utf8",
    );
  } catch {
    return null;
  }
};

const prevNext = (slug: string) => {
  const i = PROJECT_ORDER.indexOf(slug);
  const titleFor = (s: string) => {
    const p = findProject(s);
    return p?.title ?? s;
  };
  const prev = i > 0 ? PROJECT_ORDER[i - 1] : null;
  const next =
    i >= 0 && i < PROJECT_ORDER.length - 1 ? PROJECT_ORDER[i + 1] : null;
  return {
    prev: prev ? { label: titleFor(prev), href: `/projects/${prev}` } : null,
    next: next ? { label: titleFor(next), href: `/projects/${next}` } : null,
  };
};

export async function generateStaticParams() {
  return PROJECT_ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Jay Fallon`,
    description: firstSentence(project.description, 220),
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  const extras = PROJECT_EXTRAS[slug] ?? { carousel: [] };
  const projectPage = (project as Project & { projectPage?: Record<string, unknown> })
    .projectPage;
  const status = categoryToStatus(project.category);
  const markdown = loadMarkdown(slug);
  const { prev, next } = prevNext(slug);

  const metaEntries = [
    extras.role ? { label: "role", value: extras.role } : null,
    { label: "status", value: project.category },
    extras.years ? { label: "years", value: extras.years } : null,
    extras.siteUrl
      ? {
          label: "link",
          value: (
            <a
              href={extras.siteUrl}
              target="_blank"
              rel="noreferrer"
              className="text-accent-text"
            >
              {extras.siteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
            </a>
          ),
        }
      : null,
  ].filter(Boolean) as { label: string; value: React.ReactNode }[];

  const sections: { title: string; content: React.ReactNode }[] = [];

  if (projectPage) {
    const pp = projectPage as {
      problem?: string;
      whatIBuilt?: string;
      keyDecisions?: KeyDecision[];
      architecture?: string;
      testing?: string;
      currentAccuracy?: string;
      knownWeaknesses?: string;
      whatItEnables?: string;
      whatILearned?: string;
    };
    if (pp.problem) sections.push({ title: "The problem", content: <p>{pp.problem}</p> });
    if (pp.whatIBuilt)
      sections.push({ title: "What I built", content: <p>{pp.whatIBuilt}</p> });
    if (pp.keyDecisions && pp.keyDecisions.length > 0)
      sections.push({
        title: "Key decisions",
        content: (
          <>
            {pp.keyDecisions.map((d) => (
              <div key={d.title}>
                <h3 className="mt-6 text-h3 text-fg">{d.title}</h3>
                <p>{d.detail}</p>
              </div>
            ))}
          </>
        ),
      });
    if (pp.architecture)
      sections.push({ title: "Architecture", content: <p>{pp.architecture}</p> });
    if (pp.testing) sections.push({ title: "Testing", content: <p>{pp.testing}</p> });
    if (pp.currentAccuracy)
      sections.push({ title: "Current accuracy", content: <p>{pp.currentAccuracy}</p> });
    if (pp.knownWeaknesses)
      sections.push({ title: "Known weaknesses", content: <p>{pp.knownWeaknesses}</p> });
    if (pp.whatItEnables)
      sections.push({ title: "What this enables", content: <p>{pp.whatItEnables}</p> });
    if (pp.whatILearned)
      sections.push({ title: "What I learned", content: <p>{pp.whatILearned}</p> });
  }

  return (
    <CaseStudyLayout>
      <Breadcrumb
        items={[
          { label: "work", href: "/#work" },
          { label: project.category.toLowerCase() },
          { label: project.title.toLowerCase() },
        ]}
      />

      <CaseStudyHeader
        title={project.title}
        tagline={firstSentence(project.description, 320)}
        status={status}
        siteUrl={extras.siteUrl}
      />

      <div className="mt-10">
        {extras.carousel.length > 0 ? (
          <ImageCarousel images={extras.carousel} priority />
        ) : (
          <div className="overflow-hidden rounded-panel border border-line">
            <Placeholder
              caption={`screenshots coming soon · ${project.title.toLowerCase()}`}
              aspect="1.6"
            />
          </div>
        )}
      </div>

      <MetaStrip entries={metaEntries} />

      <StackCloud items={project.technologies ?? []} />

      {markdown ? (
        <CaseStudyMarkdown source={markdown} />
      ) : sections.length > 0 ? (
        sections.map((s, i) => (
          <CaseStudySection
            key={s.title}
            number={String(i + 1).padStart(2, "0")}
            title={s.title}
          >
            {s.content}
          </CaseStudySection>
        ))
      ) : (
        <CaseStudySection number="01" title="About">
          <p>{project.description}</p>
        </CaseStudySection>
      )}

      <CaseStudyNav prev={prev} next={next} />
    </CaseStudyLayout>
  );
}
