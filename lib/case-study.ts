import fs from "node:fs";
import path from "node:path";

export function loadCaseStudy(slug: string): string {
  return fs.readFileSync(
    path.join(process.cwd(), "content/projects", `${slug}.md`),
    "utf8",
  );
}

export const PROJECT_ORDER = [
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
] as const;

export type ProjectSlug = (typeof PROJECT_ORDER)[number];

const TITLE_BY_SLUG: Record<ProjectSlug, string> = {
  zaaber: "Zaaber",
  knokr: "Knokr",
  "knokr-base": "Knokr Base",
  "knokr-experiments": "Knokr Experiments",
  "knokr-predictor": "Knokr Predictor",
  "knokr-guestlist": "Knokr Guestlist",
  "knokr-media": "Knokr Media",
  "mojo-boston": "Mojo Boston",
  "knokr-fetch": "Knokr Fetch",
  orchestra: "Orchestra",
  nuncio: "Nuncio",
  "connections-plus": "Connections Plus",
};

export function prevNext(slug: ProjectSlug) {
  const i = PROJECT_ORDER.indexOf(slug);
  const prevSlug = i > 0 ? PROJECT_ORDER[i - 1] : null;
  const nextSlug = i < PROJECT_ORDER.length - 1 ? PROJECT_ORDER[i + 1] : null;
  return {
    prev: prevSlug
      ? { label: TITLE_BY_SLUG[prevSlug], href: `/projects/${prevSlug}` }
      : null,
    next: nextSlug
      ? { label: TITLE_BY_SLUG[nextSlug], href: `/projects/${nextSlug}` }
      : null,
  };
}
