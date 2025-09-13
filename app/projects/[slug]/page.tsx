import { notFound } from "next/navigation";
import { getHomepageFromRedis } from "@/app/actions/get-homepage-from-redis";
import portfolioData from "@/data/portfolio.json";
import ProjectPage from "@/components/ProjectPage";
import { ProjectItem } from "@/types/portfolio";

interface Props {
  params: Promise<{ slug: string }>;
}

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function Project({ params }: Props) {
  const { slug } = await params;
  // Get data from Redis or fallback to JSON
  let data;
  try {
    data = await getHomepageFromRedis();
    if (!data) {
      data = portfolioData;
    }
  } catch (error) {
    data = portfolioData;
  }

  // Find the project by slug
  const project = data.sections.projects.items.find(
    (item: ProjectItem) => createSlug(item.title) === slug
  );

  if (!project) {
    notFound();
  }

  return <ProjectPage project={project} />;
}

export async function generateStaticParams() {
  // Generate static params for all projects
  let data;
  try {
    data = await getHomepageFromRedis();
    if (!data) {
      data = portfolioData;
    }
  } catch (error) {
    data = portfolioData;
  }

  return data.sections.projects.items.map((project: ProjectItem) => ({
    slug: createSlug(project.title),
  }));
}