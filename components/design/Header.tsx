"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Instagram, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Wordmark from "./Wordmark";
import ThemeToggle from "./ThemeToggle";

type NavItem = { label: string; href: string };
type Social = { platform: string; url: string };

const iconFor = (platform: string) => {
  const p = platform.toLowerCase();
  if (p === "github") return Github;
  if (p === "linkedin") return Linkedin;
  if (p === "instagram") return Instagram;
  return null;
};

const abbrFor = (platform: string) => {
  const p = platform.toLowerCase();
  if (p === "github") return "gh";
  if (p === "linkedin") return "in";
  if (p === "instagram") return "ig";
  return p.slice(0, 2);
};

export default function Header({
  nav,
  socials,
  resumeHref = "/resume",
}: {
  nav: NavItem[];
  socials: Social[];
  resumeHref?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg-glass backdrop-blur-md">
      <div className="mx-auto flex h-header max-w-container items-center gap-7 px-6">
        <Wordmark />

        <nav className="hidden items-center gap-1 font-mono text-mono-md md:flex">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-btn px-2.5 py-1.5 text-fg-2 transition-colors duration-150 hover:bg-surface-2 hover:text-fg"
            >
              <span className="text-fg-3">{String(i + 1).padStart(2, "0")}.</span>
              {item.label.toLowerCase()}
            </Link>
          ))}
        </nav>

        <div className="flex-1" />

        <div className="hidden items-center gap-2 font-mono text-mono-sm md:flex">
          <Link
            href={resumeHref}
            className="rounded-btn border border-line-2 px-2.5 py-1.5 text-fg transition-colors duration-150 hover:border-fg-3"
          >
            resume ↗
          </Link>
          <span aria-hidden className="mx-1.5 h-5 w-px bg-line" />
          {socials.map((s) => {
            const Icon = iconFor(s.platform);
            return (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.platform}
                className="grid h-8 w-8 place-items-center rounded-btn text-fg-2 transition-colors duration-150 hover:bg-surface-2 hover:text-fg"
              >
                {Icon ? <Icon className="h-4 w-4" aria-hidden /> : abbrFor(s.platform)}
              </a>
            );
          })}
        </div>

        <ThemeToggle />

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="grid h-8 w-8 place-items-center rounded-btn border border-line bg-surface-1 text-fg md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open ? (
        <nav
          className={cn(
            "border-t border-line px-6 pb-5 pt-2 font-mono text-[15px] md:hidden",
            "flex flex-col",
          )}
          aria-label="Mobile navigation"
        >
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3 text-fg"
            >
              <span className="text-fg-3">{String(i + 1).padStart(2, "0")}.</span>{" "}
              {item.label.toLowerCase()}
            </Link>
          ))}
          <div className="flex gap-2 pt-4 text-[13px]">
            <Link
              href={resumeHref}
              onClick={() => setOpen(false)}
              className="flex-1 rounded-btn border border-line-2 px-3 py-2.5 text-center text-fg"
            >
              resume ↗
            </Link>
            {socials.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.platform}
                className="rounded-btn border border-line px-3.5 py-2.5 text-fg-2"
              >
                {abbrFor(s.platform)}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
