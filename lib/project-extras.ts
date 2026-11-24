export type ProjectExtras = {
  siteUrl?: string;
  role?: string;
  years?: string;
  carousel: { src: string; alt: string }[];
};

const CF = "https://dbf43z1u0dmox.cloudfront.net";
const S3 = "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com";

const cf = (dir: string, prefix: string, n: number, alt: string) =>
  Array.from({ length: n }, (_, i) => ({
    src: `${CF}/${dir}/carousel/${prefix}-${String(i + 1).padStart(2, "0")}.webp`,
    alt,
  }));

export const PROJECT_EXTRAS: Record<string, ProjectExtras> = {
  zaaber: {
    siteUrl: "https://zaaber.com/",
    role: "Solo founder & engineer",
    years: "2026 — present",
    carousel: [],
  },
  knokr: {
    siteUrl: "https://knokr.com/",
    role: "Solo founder & engineer",
    years: "2024 — present",
    carousel: cf("knokr", "knokr", 6, "Knokr screenshot"),
  },
  "knokr-base": {
    role: "Solo founder & engineer",
    years: "2024 — present",
    carousel: cf("base", "base", 8, "Knokr Base screenshot"),
  },
  "knokr-experiments": {
    siteUrl: "https://experiments.knokr.com",
    role: "Solo founder & engineer",
    years: "2024 — present",
    carousel: [
      {
        src: `${CF}/experiments/carousel/knokr-experiments-01.webp`,
        alt: "Knokr Experiments screenshot",
      },
    ],
  },
  "knokr-predictor": {
    siteUrl: "https://predictor.knokr.com/",
    role: "Solo founder & engineer",
    years: "2024 — present",
    carousel: cf("predictor", "predictor", 2, "Knokr Predictor screenshot"),
  },
  "knokr-guestlist": {
    role: "Solo founder & engineer",
    years: "2025",
    carousel: [
      {
        src: `${S3}/knokr-guestiist/knokr-guestlist-01.webp`,
        alt: "Knokr Guestlist screenshot",
      },
      {
        src: `${S3}/knokr-guestiist/knokr-guestlist-02.webp`,
        alt: "Knokr Guestlist screenshot",
      },
    ],
  },
  "knokr-media": {
    role: "Solo founder & engineer",
    years: "2025",
    carousel: [
      { src: `${S3}/knokr-media/knokr-media-lg.webp`, alt: "Knokr Media screenshot" },
      { src: `${S3}/knokr-media/knokr-media-02.webp`, alt: "Knokr Media screenshot" },
      { src: `${S3}/knokr-media/knokr-media-03.webp`, alt: "Knokr Media screenshot" },
      { src: `${S3}/knokr-media/knokr-media-04.webp`, alt: "Knokr Media screenshot" },
      { src: `${S3}/knokr-media/knokr-media-05.webp`, alt: "Knokr Media screenshot" },
    ],
  },
  "mojo-boston": {
    role: "Consulting engineer",
    years: "2025",
    carousel: cf("mojo-boston", "mojo", 8, "Mojo Boston screenshot"),
  },
  "knokr-fetch": {
    role: "Solo founder & engineer",
    years: "2024",
    carousel: cf("knokr-fetch", "fetch", 3, "Knokr Fetch screenshot"),
  },
  orchestra: {
    role: "Solo founder & engineer",
    years: "2024",
    carousel: cf("orchestra", "orchestra", 3, "Orchestra screenshot"),
  },
  nuncio: {
    role: "Solo founder & engineer",
    years: "2024",
    carousel: cf("nuncio", "nuncio", 3, "Nuncio screenshot"),
  },
  "connections-plus": {
    siteUrl: "https://connections-plus.jayfallon.net",
    role: "Side project",
    years: "2024",
    carousel: [
      { src: `${CF}/connections/carousel/connections-01.webp`, alt: "Connections Plus screenshot" },
      { src: `${CF}/connections/carousel/connections-02.webp`, alt: "Connections Plus screenshot" },
      { src: `${CF}/connections/carousel/connections-03.webp`, alt: "Connections Plus screenshot" },
      { src: `${CF}/connections/carousel/connections-04.webp`, alt: "Connections Plus screenshot" },
      { src: `${CF}/connections/carousel/connections-3a.webp`, alt: "Connections Plus screenshot" },
    ],
  },
};
