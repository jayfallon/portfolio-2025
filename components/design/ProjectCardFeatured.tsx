import Link from "next/link";
import Image from "next/image";
import Tag from "./Tag";
import Placeholder from "./Placeholder";

export type FeaturedStat = { value: string; label: string; accent?: string };

export default function ProjectCardFeatured({
  title,
  url,
  dates,
  live = true,
  description,
  tags,
  image,
  stats,
}: {
  title: string;
  url: string;
  dates: string;
  live?: boolean;
  description: string;
  tags: string[];
  image?: { src: string; alt: string };
  stats?: FeaturedStat[];
}) {
  return (
    <Link
      href={url}
      className="group flex flex-wrap overflow-hidden rounded-card border border-line bg-surface-1 transition-all duration-200 hover:-translate-y-0.5 hover:border-line-2"
    >
      <div className="relative flex min-w-0 flex-[1_1_560px] border-r border-line">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={1120}
            height={700}
            className="h-auto w-full"
            style={{ aspectRatio: "1.6" }}
          />
        ) : (
          <Placeholder
            caption={`screenshot · ${title.toLowerCase()}`}
            className="w-full"
            aspect="1.6"
          />
        )}
      </div>

      <div className="flex flex-[1_1_320px] flex-col gap-3.5 p-[clamp(20px,2.6vw,36px)]">
        <div className="flex items-center justify-between font-mono text-mono-xs uppercase tracking-[.08em] text-fg-3">
          <span>{dates}</span>
          {live ? (
            <span className="inline-flex items-center gap-1.5 text-live">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-live" />
              live
            </span>
          ) : null}
        </div>
        <h3 className="text-card-title-lg text-fg">{title}</h3>
        <p className="m-0 text-pretty text-fg-2">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="flex-1" />
        <div className="font-mono text-mono-md font-semibold text-accent-text">
          read case study →
        </div>
      </div>

      {stats && stats.length > 0 ? (
        <div className="flex-[1_1_100%] grid gap-px border-t border-line bg-line [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))]">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface-1 px-5 py-4">
              <div className="font-mono text-mono-num-sm text-fg">
                {s.value.replace(/[+M~]/g, "")}
                {s.accent ? (
                  <span className="text-accent-text">{s.accent}</span>
                ) : null}
              </div>
              <div className="mt-1.5 font-mono text-mono-xs uppercase tracking-[.08em] text-fg-3">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </Link>
  );
}
