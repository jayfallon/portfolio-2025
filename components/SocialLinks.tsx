import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import { SocialLink } from "@/types/portfolio";

const IconMap = {
  Github,
  Linkedin,
  Instagram,
};

export default function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <ul className="ml-1 mt-8 flex items-center">
      {links.map((link) => {
        const Icon = IconMap[link.icon as keyof typeof IconMap];
        return (
          <li key={link.platform} className="mr-5 shrink-0 text-xs">
            <Link
              href={link.url}
              target="_blank"
              title={`View ${link.platform} Profile`}
              aria-label={`Visit Jay Fallon's ${link.platform} profile`}
              className="flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-teal-300"
            >
              <Icon size={20} />
              <span className="sr-only">{link.platform}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
