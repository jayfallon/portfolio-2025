import Link from "next/link";
import Image from "next/image";
import Placeholder from "./Placeholder";

export default function ProjectCardInactive({
  title,
  url,
  year,
  description,
  tagline,
  image,
}: {
  title: string;
  url: string;
  year?: string;
  description: string;
  tagline?: string;
  image?: { src: string; alt: string };
}) {
  return (
    <Link
      href={url}
      className="flex flex-col overflow-hidden rounded-panel border border-line bg-bg transition-colors duration-200 hover:border-line-2 hover:bg-surface-1"
    >
      <div className="border-b border-line">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={550}
            height={250}
            className="h-auto w-full"
            style={{ aspectRatio: "2.2" }}
          />
        ) : (
          <Placeholder caption="screenshot" aspect="2.2" />
        )}
      </div>
      <div className="flex flex-col gap-1.5 px-4 pb-4 pt-3.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-[15px] font-semibold leading-snug text-fg">{title}</h3>
          {year ? (
            <span className="font-mono text-mono-xs text-fg-3">{year}</span>
          ) : null}
        </div>
        <p className="m-0 text-[13.5px] leading-[1.5] text-fg-2">{description}</p>
        {tagline ? (
          <div className="mt-0.5 font-mono text-mono-xs text-fg-3">{tagline}</div>
        ) : null}
      </div>
    </Link>
  );
}
