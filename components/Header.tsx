import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";
import { PersonalInfo, NavigationItem } from "@/types/portfolio";

interface HeaderProps {
  personalInfo: PersonalInfo;
  navigation: NavigationItem[];
}

export default function Header({ personalInfo, navigation }: HeaderProps) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 w-full">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          {personalInfo.name}
        </h1>
        {personalInfo.titles.map((title, index) => (
          <h2
            key={index}
            className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl"
          >
            {title}
          </h2>
        ))}
        <p className="mt-4 max-w-xs leading-normal">{personalInfo.summary}</p>
        <Link
          href="/resume"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-teal-300"
        >
          View Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      <Navigation items={navigation} />
      <SocialLinks links={personalInfo.socialLinks} />
    </header>
  );
}
