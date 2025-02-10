import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import ScrollSpy from "./components/ScrollSpy";
import Image from "next/image";

const S3_PORTFOLIO_URL = "https://jf-portfolio-2025.s3.us-east-1.amazonaws.com" as const;

export default async function Home() {
  return (
    <div className="group/spotlight relative">
      <ScrollSpy />
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 w-full">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              Jay Fallon
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Full Stack Software Engineer
            </h2>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              User Experience Designer
            </h2>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Product Strategist
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I build scalable systems, design engaging experiences, and develop product strategies
              that drive business growth.
            </p>
          </div>
          <nav className="nav hidden lg:block">
            <ul className="mt-16 w-max" id="nav-list">
              <li>
                <Link
                  className="group flex items-center py-3 nav-link"
                  href="#about"
                  data-section="about"
                  title="About Jay Fallon"
                  aria-label="Navigate to About section"
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-slate-100 group-focus-visible:text-slate-100">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="group flex items-center py-3 nav-link"
                  href="#experience"
                  data-section="experience"
                  title="Experience History"
                  aria-label="Navigate to Experience section"
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-slate-100 group-focus-visible:text-slate-100">
                    Experience
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="group flex items-center py-3 nav-link"
                  href="#education"
                  data-section="education"
                  title="Education Background"
                  aria-label="Navigate to Education section"
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-slate-100 group-focus-visible:text-slate-100">
                    Education
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="group flex items-center py-3 nav-link"
                  href="#projects"
                  data-section="projects"
                  title="Projects Portfolio"
                  aria-label="Navigate to Projects section"
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-slate-100 group-focus-visible:text-slate-100">
                    Projects
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="ml-1 mt-8 flex items-center">
            <li className="mr-5 shrink-0 text-xs">
              <Link
                href="https://github.com/jayfallon"
                target="_blank"
                title="View GitHub Profile"
                aria-label="Visit Jay Fallon's GitHub profile"
                className="flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-teal-300"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
            </li>
            <li className="mr-5 shrink-0 text-xs">
              <Link
                href="https://www.linkedin.com/in/jayfallon/"
                target="_blank"
                title="View LinkedIn Profile"
                aria-label="Visit Jay Fallon's LinkedIn profile"
                className="flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-teal-300"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </li>
            <li className="mr-5 shrink-0 text-xs">
              <Link
                href="https://www.instagram.com/jayfallon/"
                target="_blank"
                title="View Instagram Profile"
                aria-label="Visit Jay Fallon's Instagram profile"
                className="flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-teal-300"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </li>
          </ul>
        </header>
        <div className="pt-24 lg:w-[52%] lg:py-24">
          <section
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            id="about"
            aria-label="About Jay Fallon"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">About</h2>
            </div>
            <p className="mb-4">
              As a seasoned <strong>full-stack developer</strong> specializing in the{" "}
              <strong>JavaScript ecosystem</strong>, I bring over a decade of experience
              architecting and implementing sophisticated web applications. My expertise spans the
              entire development lifecycle, from designing intuitive user interfaces to building
              robust backend systems that scale. Having worked with industry leaders like{" "}
              <strong>Form Health</strong>, <strong>Dassault Systèmes</strong>,{" "}
              <strong>Bose</strong>, and <strong>Cengage</strong>, I&apos;ve developed a deep
              understanding of enterprise-level software development and system architecture.
            </p>
            <p className="mb-4">
              My unique background combines{" "}
              <strong>technical prowess with strong business acumen</strong>, backed by a{" "}
              <strong>Bachelor&apos;s in Business Administration</strong> with majors in
              International Business and Finance, complemented by a{" "}
              <strong>Master&apos;s degree in Digital Design</strong>. This interdisciplinary
              foundation enables me to bridge the gap between technical requirements and business
              objectives, ensuring solutions that not only function flawlessly but also drive
              meaningful business outcomes.
            </p>
            <p className="mb-4">
              Throughout my career, I&apos;ve had the privilege of working on diverse projects
              ranging from <strong>global enterprise systems</strong> handling thousands of users to
              custom solutions for small businesses. This versatility has honed my ability to adapt
              development approaches based on project scope, team dynamics, and business
              requirements. I&apos;m particularly passionate about creating{" "}
              <strong>scalable architectures</strong>, implementing{" "}
              <strong>clean code practices</strong>, and mentoring development teams.
            </p>
            <p className="mb-4">
              My approach to development centers on building high-performance, scalable solutions
              with a strong emphasis on <strong>accessibility and SEO</strong>. I specialize in
              optimizing web vitals, implementing semantic HTML structures, and ensuring WCAG
              compliance across all projects. Whether I&apos;m architecting microservices for scale,
              fine-tuning Core Web Vitals, or implementing advanced SEO strategies, I focus on
              creating inclusive digital experiences that perform exceptionally well for all users.
              I maintain a deep commitment to web standards and best practices, consistently
              delivering solutions that excel in both technical performance metrics and
              accessibility benchmarks.
            </p>
          </section>
          <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" id="experience">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                Experience
              </h2>
            </div>
            <ul>
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label="2024 to Present"
                  >
                    2024 — Present
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href="https://www.takostan.com"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Founder, Designer & Principal Engineer at Takomedia (opens in a new tab)"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            Founder, Designer & Principal Engineer ·{" "}
                            <span className="inline-block">
                              Takomedia
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      Designed and developed a full-stack application for artists, venues, and
                      festivals, creating a comprehensive promotion and social engagement platform.
                      Implemented scalable architecture and real-time features to enhance user
                      interaction and event promotion capabilities.
                    </p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Next.js
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          TypeScript
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Tailwind CSS
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Supabase
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Redis
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          AWS
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Anthropic
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label="2022 to 2024"
                  >
                    2022 — 2024
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href="https://www.formhealth.co"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Senior Software Engineer at Form Health (opens in a new tab)"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            Consulting Engineer ·{" "}
                            <span className="inline-block">
                              Form Health
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      As a consultant, worked with the marketing team on the redesign and
                      development of the customer-facing website for this leading medical weight
                      loss platform. Implemented modern web development practices and a
                      comprehensive design system to ensure consistency across the platform.
                      Improved user experience through responsive design and optimized performance.
                    </p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Next.js
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          TypeScript
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Tailwind CSS
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Prismic
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Storybook
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label="2019 to 2023"
                  >
                    2019 — 2023
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href="https://www.3ds.com/"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Senior Software Engineering Manager at Dassault Systèmes (opens in a new tab)"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            Senior Software Engineering Manager ·{" "}
                            <span className="inline-block">
                              Dassault Systèmes
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      Led development teams across multiple products within The 3DEXPERIENCE
                      platform, including SOLIDWORKS - a leading 3D CAD software, Apps for Kids, and
                      Apps for Kids Classroom. Managed the development of innovative solutions for
                      desktop and cloud-based CAD applications while ensuring high performance and
                      reliability.
                    </p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Angular.js
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          JavaScript
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          CSS
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Cassandra
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label="2018 to 2019"
                  >
                    2018 — 2019
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href="https://www.syrinx.com/"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Senior UX/UI Developer at Syrinx Consulting (opens in a new tab)"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            Sr. UX/UI Developer ·{" "}
                            <span className="inline-block">
                              Syrinx Consulting
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      Contracted to Bose Corporation to develop targeted applications as part of
                      their initiative to create agile, customer-focused solutions. Specialized in
                      building rapid prototypes and MVPs to address specific customer segment needs
                      while maintaining high standards of user experience and interface design.
                    </p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Next.js
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          JavaScript
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Node.js
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Express.js
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label="2014 to 2016"
                  >
                    2014 — 2016
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href="https://www.cengage.com/"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="UX Designer and Developer at Cengage Learning (opens in a new tab)"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            UX Designer and Developer ·{" "}
                            <span className="inline-block">
                              Cengage Learning
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      Developed an in-house CSS framework and reusable component library while
                      providing design direction across multiple projects. Led initiatives in legacy
                      code conversion and cross-platform CSS standardization. Collaborated with
                      senior management to define design and technical requirements for platform
                      releases, while conducting component design and user testing.
                    </p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          CSS
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          JavaScript
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Angular.js
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          React
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Sass
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label="2013 to 2014"
                  >
                    2017 — 2019
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href="https://www.extension.harvard.edu/"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Master's in Digital Design at Harvard University (opens in a new tab)"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            Master's in Digital Design ·{" "}
                            <span className="inline-block">
                              Harvard University
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      Completed Master's degree in Digital Design, focusing on user experience
                      design, interaction design, and digital media. Developed comprehensive
                      understanding of design principles, user research methodologies, and digital
                      product development.
                    </p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Areas of study">
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          UX Design
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Digital Media
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Interaction Design
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          User Research
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" id="education">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                Education
              </h2>
            </div>
            <ul>
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label="2017 to 2019"
                  >
                    2017 — 2019
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href="https://www.extension.harvard.edu/"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Master's in Digital Design at Harvard University (opens in a new tab)"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            Master's in Digital Design ·{" "}
                            <span className="inline-block">
                              Harvard University
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      Completed Master's degree in Digital Design, focusing on user experience
                      design, interaction design, and digital media. Developed comprehensive
                      understanding of design principles, user research methodologies, and digital
                      product development.
                    </p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Areas of study">
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          UX Design
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Digital Media
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Interaction Design
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          User Research
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label="1993 to 1998"
                  >
                    1993 — 1998
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href="https://www.northeastern.edu/"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Bachelor of Science in Business Administration at Northeastern University (opens in a new tab)"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            B.S. in Business Administration ·{" "}
                            <span className="inline-block">
                              Northeastern University
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      Majored in International Business and Finance with a focus on global
                      operations and marketing. Participated in Northeastern's renowned cooperative
                      education program, completing assignments at Boston's Better Snacks, FMRC, and
                      PictureTel, gaining hands-on experience in operations, marketing, technical
                      documentation, and internationalization.
                    </p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Areas of study">
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          International Business
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Finance
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Operations
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Marketing
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            id="projects"
            data-section="projects"
            aria-label="Projects Portfolio"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                Projects
              </h2>
            </div>
            <ul>
              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href="https://www.takostan.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Takostan Global Music Resource (opens in a new tab)"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          Takostan Global Music Resource{" "}
                          <span className="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      A comprehensive platform for artists, venues, and festivals to promote their
                      events and engage with their audience. Features include real-time updates,
                      interactive calendars, and social networking capabilities.
                    </p>
                  </div>
                  <div className="relative w-full sm:order-1 sm:col-span-2">
                    <Image
                      src={`${S3_PORTFOLIO_URL}/tkstn-01.png`}
                      alt="Takostan Global Music Resource preview"
                      width={200}
                      height={125}
                      className="w-full aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:w-auto sm:translate-y-1"
                      priority
                    />
                  </div>
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href="https://www.formhealth.co"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Form Health Website (opens in a new tab)"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          Form Health Website{" "}
                          <span className="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      Led the redesign and development of Form Health's customer-facing website,
                      implementing modern web development practices and optimized for performance.
                      The project focused on improving user experience and conversion rates through
                      responsive design and seamless content management integration.
                    </p>
                  </div>
                  <div className="relative sm:order-1 sm:col-span-2">
                    <Image
                      src={`${S3_PORTFOLIO_URL}/fh-01.png`}
                      alt="Form Health website preview"
                      width={200}
                      height={125}
                      className="w-full aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:w-auto sm:translate-y-1"
                      priority
                    />
                  </div>
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href="https://www.solidworks.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="SOLIDWORKS Cloud Platform (opens in a new tab)"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          SOLIDWORKS Cloud Platform{" "}
                          <span className="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      Managed the development of cloud-based CAD applications within The
                      3DEXPERIENCE platform. Led initiatives to modernize the user interface and
                      improve system performance, resulting in enhanced user experience and
                      increased adoption rates.
                    </p>
                  </div>
                  <div className="relative sm:order-1 sm:col-span-2">
                    <Image
                      src={`${S3_PORTFOLIO_URL}/solidworks-01.png`}
                      alt="SOLIDWORKS platform preview"
                      width={200}
                      height={125}
                      className="w-full aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:w-auto sm:translate-y-1"
                      priority
                    />
                  </div>
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href="https://www.3ds.com/products/apps-for-kids"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Apps for Kids Platform (opens in a new tab)"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          Apps for Kids Platform{" "}
                          <span className="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      Directed the development of an educational platform designed to introduce
                      children to 3D design concepts. The project included creating intuitive
                      interfaces for both students and teachers, implementing classroom management
                      features, and ensuring a secure, child-friendly environment.
                    </p>
                  </div>
                  <div className="relative sm:order-1 sm:col-span-2">
                    <Image
                      src={`${S3_PORTFOLIO_URL}/afk-01.png`}
                      alt="Apps for Kids platform preview"
                      width={200}
                      height={125}
                      className="w-full aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:w-auto sm:translate-y-1"
                      priority
                    />
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
