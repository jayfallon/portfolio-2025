"use client";

import { useEffect } from "react";

export default function ScrollSpy() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove active class and styles from all nav links
          navLinks.forEach((link) => {
            link.classList.remove("active");
            const navText = link.querySelector(".nav-text");
            const navIndicator = link.querySelector(".nav-indicator");
            if (navText) navText.classList.remove("!text-slate-200");
            if (navIndicator) navIndicator.classList.remove("!w-16", "!bg-slate-200");
          });

          // Add active class and styles to current section's nav link
          const activeLink = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
          if (activeLink) {
            activeLink.classList.add("active");
            const navText = activeLink.querySelector(".nav-text");
            const navIndicator = activeLink.querySelector(".nav-indicator");
            if (navText) navText.classList.add("!text-slate-200");
            if (navIndicator) navIndicator.classList.add("!w-16", "!bg-slate-200");
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-20% 0px -80% 0px",
    });

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}
