import Header from "../Header";
import Footer from "../Footer";
import portfolioData from "@/data/portfolio.json";

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  const { socialLinks } = portfolioData.personalInfo;
  const nav = [
    { label: "Work", href: "/#work" },
    { label: "Experience", href: "/#experience" },
    { label: "About", href: "/#about" },
    { label: "Education", href: "/#education" },
  ];
  return (
    <>
      <Header nav={nav} socials={socialLinks} resumeHref="/resume" />
      <main className="mx-auto max-w-container px-6 pb-[clamp(56px,7vw,96px)] pt-[clamp(32px,4vw,56px)]">
        {children}
      </main>
      <Footer socials={socialLinks} />
    </>
  );
}
