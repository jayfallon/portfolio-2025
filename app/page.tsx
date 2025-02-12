import { getHomepageFromRedis } from "@/app/actions/get-homepage-from-redis";
import Header from "@/components/Header";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import ScrollSpy from "@/components/ScrollSpy";
import portfolioData from "@/data/portfolio.json"; // Keep as fallback

export default async function Home() {
  // Try to get data from Redis first
  let data;
  try {
    data = await getHomepageFromRedis();
    if (!data) {
      console.log("No data found in Redis, falling back to JSON file");
      data = portfolioData;
    }
  } catch (error) {
    console.error("Error fetching from Redis:", error);
    data = portfolioData; // Fallback to JSON file if Redis fails
  }

  return (
    <div className="group/spotlight relative">
      <ScrollSpy />
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header personalInfo={data.personalInfo} navigation={data.navigation} />

        <div className="pt-24 lg:w-[52%] lg:py-24">
          <About data={data.sections.about} />
          <Experience data={data.sections.experience} />
          <Education data={data.sections.education} />
          <Projects data={data.sections.projects} />
        </div>
      </div>
    </div>
  );
}
