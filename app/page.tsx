import portfolioData from "@/data/portfolio.json";
import Header from "@/components/Header";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import ScrollSpy from "@/components/ScrollSpy";

export default function Home() {
  return (
    <div className="group/spotlight relative">
      <ScrollSpy />
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header personalInfo={portfolioData.personalInfo} navigation={portfolioData.navigation} />

        <div className="pt-24 lg:w-[52%] lg:py-24">
          <About data={portfolioData.sections.about} />
          <Experience data={portfolioData.sections.experience} />
          <Education data={portfolioData.sections.education} />
          <Projects data={portfolioData.sections.projects} />
        </div>
      </div>
    </div>
  );
}
