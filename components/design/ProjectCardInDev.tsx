import Link from "next/link";
import Image from "next/image";
import Tag from "./Tag";
import Placeholder from "./Placeholder";

export default function ProjectCardInDev({
  title,
  url,
  description,
  tags,
  image,
}: {
  title: string;
  url: string;
  description: string;
  tags: string[];
  image?: { src: string; alt: string };
}) {
  return (
    <Link
      href={url}
      className="flex flex-wrap items-center gap-5 rounded-card border border-dashed border-line-2 bg-surface-1 p-3.5 transition-colors duration-200 hover:border-accent"
    >
      <div className="flex-[0_0_200px] overflow-hidden rounded-md border border-line">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={250}
            className="h-auto w-full"
            style={{ aspectRatio: "1.6" }}
          />
        ) : (
          <Placeholder caption="screenshot" aspect="1.6" />
        )}
      </div>
      <div className="flex flex-[1_1_300px] flex-col gap-2">
        <div className="flex items-center gap-2.5">
          <h3 className="text-card-title text-fg">{title}</h3>
          <span className="rounded-full bg-accent-bg px-2 py-0.5 font-mono text-mono-xs text-accent-text">
            wip
          </span>
        </div>
        <p className="m-0 text-small text-fg-2">{description}</p>
        <div className="mt-0.5 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}
