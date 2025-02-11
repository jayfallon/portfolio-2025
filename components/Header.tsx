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
      </div>
      <Navigation items={navigation} />
      <SocialLinks links={personalInfo.socialLinks} />
    </header>
  );
}
