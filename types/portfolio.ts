export interface PersonalInfo {
  name: string;
  titles: string[];
  summary: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  section: string;
}

export interface AboutSection {
  title: string;
  content: string[];
}

export interface ExperienceSection {
  title: string;
  items: ExperienceItem[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  url: string;
  dateRange: string;
  description: string;
  technologies: string[];
}

export interface EducationSection {
  title: string;
  items: EducationItem[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  institutionUrl: string;
  startDate: string;
  endDate: string;
  dateRange: string;
  description: string;
  specializations: string[];
  status: string;
  highlights?: string[];
}

export interface ProjectsSection {
  title: string;
  items: ProjectItem[];
}

export interface ProjectItem {
  title: string;
  url: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  technologies: string[];
}
