import Link from "next/link";
import Image from "next/image";
import Tag from "./Tag";
import Placeholder from "./Placeholder";
import StatusDot, { Status } from "./StatusDot";
import { resolveImageSrc } from "@/lib/images";

export default function ProjectCardActive({
  title,
  url,
  description,
  tags,
  image,
  status = "active",
}: {
  title: string;
  url: string;
  description: string;
  tags: string[];
  image?: { src: string; alt: string };
  status?: Status;
}) {
  return (
    <Link
      href={url}
      className="flex flex-col overflow-hidden rounded-card border border-line bg-surface-1 transition-all duration-200 hover:-translate-y-0.5 hover:border-line-2"
    >
      <div className="border-b border-line">
        {image ? (
          <div className="relative w-full" style={{ aspectRatio: "1.6" }}>
            <Image
              src={resolveImageSrc(image.src)}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover object-top"
            />
          </div>
        ) : (
          <Placeholder caption={`screenshot · ${title.toLowerCase()}`} aspect="1.6" />
        )}
      </div>
      <div className="flex flex-col gap-2.5 px-[22px] pb-[22px] pt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-card-title text-fg">{title}</h3>
          <StatusDot status={status} />
        </div>
        <p className="m-0 text-pretty text-small text-fg-2">{description}</p>
        <div className="mt-0.5 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}
