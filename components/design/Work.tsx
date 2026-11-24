import Section from "./Section";
import SectionHeader from "./SectionHeader";
import StatusDot from "./StatusDot";
import ProjectCardFeatured, { FeaturedStat } from "./ProjectCardFeatured";
import ProjectCardActive from "./ProjectCardActive";
import ProjectCardInDev from "./ProjectCardInDev";
import ProjectCardInactive from "./ProjectCardInactive";
import PastClientRow from "./PastClientRow";

export type WorkProject = {
  title: string;
  url: string;
  description: string;
  tags: string[];
  image?: { src: string; alt: string };
};

export type FeaturedProject = WorkProject & {
  dates: string;
  live?: boolean;
  stats?: FeaturedStat[];
};

export type InactiveProject = WorkProject & {
  year?: string;
  tagline?: string;
};

export type PastProject = {
  title: string;
  org: string;
  year?: string;
  url: string;
  external?: boolean;
};

export default function Work({
  featured,
  active,
  inDevelopment,
  inactive,
  pastClient,
}: {
  featured: FeaturedProject;
  active: WorkProject[];
  inDevelopment: WorkProject[];
  inactive: InactiveProject[];
  pastClient: PastProject[];
}) {
  const total =
    1 + active.length + inDevelopment.length + inactive.length + pastClient.length;

  return (
    <Section id="work">
      <SectionHeader number="01" title="Work" meta={`${total} projects`} />

      <div className="mb-4">
        <StatusDot
          status="active"
          label={`active · ${1 + active.length}`}
          className="mb-4"
        />
        <ProjectCardFeatured
          title={featured.title}
          url={featured.url}
          dates={featured.dates}
          live={featured.live}
          description={featured.description}
          tags={featured.tags}
          image={featured.image}
          stats={featured.stats}
        />
        {active.length > 0 ? (
          <div className="mt-4 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
            {active.map((p) => (
              <ProjectCardActive key={p.title} {...p} />
            ))}
          </div>
        ) : null}
      </div>

      {inDevelopment.length > 0 ? (
        <div className="mt-14">
          <StatusDot
            status="in-development"
            label={`in development · ${inDevelopment.length}`}
            className="mb-4"
          />
          <div className="flex flex-col gap-3">
            {inDevelopment.map((p) => (
              <ProjectCardInDev key={p.title} {...p} />
            ))}
          </div>
        </div>
      ) : null}

      {inactive.length > 0 ? (
        <div className="mt-14">
          <StatusDot
            status="inactive"
            label={`inactive · ${inactive.length}`}
            className="mb-4"
          />
          <div className="grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))]">
            {inactive.map((p) => (
              <ProjectCardInactive key={p.title} {...p} />
            ))}
          </div>
        </div>
      ) : null}

      {pastClient.length > 0 ? (
        <div className="mt-14">
          <StatusDot
            status="past"
            label={`past client work · ${pastClient.length}`}
            className="mb-2"
          />
          <div className="border-t border-line">
            {pastClient.map((p) => (
              <PastClientRow key={p.title} {...p} />
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  );
}
