export const dynamic = "force-dynamic";

import Header from "@/components/design/Header";
import Footer from "@/components/design/Footer";
import Hero from "@/components/design/Hero";
import Work, {
  type FeaturedProject,
  type InactiveProject,
  type PastProject,
  type WorkProject,
} from "@/components/design/Work";
import Experience, {
  type ExperienceItem,
} from "@/components/design/Experience";
import AboutPanel from "@/components/design/AboutPanel";
import EducationGrid from "@/components/design/EducationGrid";
import { getHomepageFromRedis } from "@/app/actions/get-homepage-from-redis";
import portfolioData from "@/data/portfolio.json";

type Portfolio = typeof portfolioData;

const withTimeout = <T,>(p: Promise<T>, ms: number): Promise<T | null> =>
  Promise.race<T | null>([
    p.catch(() => null),
    new Promise<null>((resolve) => setTimeout(() => resolve(null), ms)),
  ]);

const firstSentence = (text: string, max = 220) => {
  const trimmed = text.trim();
  const dot = trimmed.indexOf(". ");
  const stop = dot > -1 && dot < max ? dot + 1 : Math.min(trimmed.length, max);
  const slice = trimmed.slice(0, stop);
  return slice.length < trimmed.length ? slice.replace(/[,;:\s]*$/, "") + "." : slice;
};

const loadPortfolio = async (): Promise<Portfolio> => {
  try {
    const fromRedis = await withTimeout(getHomepageFromRedis(), 500);
    if (fromRedis) return fromRedis as Portfolio;
  } catch {
    // fallthrough to JSON
  }
  return portfolioData;
};

export default async function Home() {
  const data = await loadPortfolio();
  const { personalInfo, sections } = data;
  const socials = personalInfo.socialLinks;

  const findProject = (title: string) =>
    sections.projects.items.find((p) => p.title === title);

  const nav = [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
  ];

  const knokr = findProject("Knokr");
  const featured: FeaturedProject = {
    title: "Knokr",
    url: knokr?.url ?? "/projects/knokr",
    dates: "2024 — present",
    live: true,
    description:
      "Music-industry discovery and social platform. 60,000+ artists, 1,500+ festivals, 1,000+ venues, and 25,000+ events in one searchable surface.",
    tags: ["next.js", "postgres", "pgvector", "bullmq", "fastapi"],
    image: knokr?.image,
    stats: [
      { value: "60,000", accent: "+", label: "artists" },
      { value: "1,500", accent: "+", label: "festivals" },
      { value: "3.3", accent: "M", label: "graph edges" },
      { value: "2,800", accent: "~", label: "tests" },
    ],
  };

  const activeTitles = ["Zaaber", "Knokr Base", "Knokr Experiments"];
  const active: WorkProject[] = activeTitles
    .map((t) => findProject(t))
    .filter(Boolean)
    .map((p) => ({
      title: p!.title,
      url: p!.url,
      description: firstSentence(p!.description, 180),
      tags: (p!.technologies ?? []).slice(0, 4).map((t) => t.toLowerCase()),
      image: p!.image,
    }));

  const predictor = findProject("Knokr Predictor");
  const inDevelopment: WorkProject[] = predictor
    ? [
        {
          title: predictor.title,
          url: predictor.url,
          description: firstSentence(predictor.description, 180),
          tags: (predictor.technologies ?? [])
            .slice(0, 3)
            .map((t) => t.toLowerCase()),
          image: predictor.image,
        },
      ]
    : [];

  const inactiveTitles = [
    "Knokr Guestlist",
    "Knokr Media",
    "Mojo Boston",
    "Knokr Fetch",
    "Orchestra",
    "Nuncio",
    "Connections Plus",
    "Knokr — Earlier Iterations",
  ];
  const yearByTitle: Record<string, string | undefined> = {
    "Knokr Guestlist": "2025",
    "Knokr Media": "2025",
    "Mojo Boston": "2025",
    "Knokr Fetch": "2024",
    Orchestra: "2024",
    Nuncio: "2024",
    "Connections Plus": "2024",
    "Knokr — Earlier Iterations": "2023",
  };
  const inactive: InactiveProject[] = inactiveTitles
    .map((t) => findProject(t))
    .filter(Boolean)
    .map((p) => ({
      title: p!.title,
      url: p!.url,
      year: yearByTitle[p!.title],
      description: firstSentence(p!.description, 160),
      tagline: (p!.technologies ?? []).slice(0, 2).join(" · ").toLowerCase(),
      image: p!.image,
    }));

  const pastClient: PastProject[] = [
    {
      title: "FormHealth Website",
      org: "Form Health",
      year: "2022–24",
      url: "https://www.formhealth.co",
    },
    {
      title: "SOLIDWORKS Cloud Platform",
      org: "Dassault Systèmes",
      year: "2019–23",
      url: "https://www.solidworks.com",
    },
    {
      title: "Apps for Kids Platform",
      org: "Dassault Systèmes",
      year: "2019–21",
      url: "https://www.3ds.com/products/apps-for-kids",
    },
  ];

  const experienceItems: ExperienceItem[] = sections.experience.items.map((it) => ({
    dates: it.dateRange,
    role: it.title,
    company: it.company,
    current: /present/i.test(it.dateRange),
    description: it.description,
    tags: (it.technologies ?? []).slice(0, 5).map((t) => t.toLowerCase()),
  }));

  return (
    <>
      <Header nav={nav} socials={socials} resumeHref="/resume" />
      <main>
        <Hero
          name={personalInfo.name}
          titles={personalInfo.titles}
          lead={
            <>
              Principal-level engineer who designs and operates{" "}
              <span className="text-fg">multi-service production platforms</span>{" "}
              end-to-end.
            </>
          }
          socials={socials}
          resumeHref="/resume"
        />
        <Work
          featured={featured}
          active={active}
          inDevelopment={inDevelopment}
          inactive={inactive}
          pastClient={pastClient}
        />
        <Experience items={experienceItems} rangeLabel="2000 → 2026" />
        <AboutPanel paragraphs={sections.about.content} />
        <EducationGrid
          items={sections.education.items.map((e) => ({
            dateRange: e.dateRange,
            degree: e.degree,
            institution: e.institution,
            institutionUrl: e.institutionUrl,
          }))}
        />
      </main>
      <Footer socials={socials} />
    </>
  );
}
