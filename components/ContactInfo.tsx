"use client";

import { useEffect, useState } from "react";

export function ContactInfo() {
  const [domain, setDomain] = useState("jayfallon.com");

  useEffect(() => {
    setDomain(window.location.hostname);
  }, []);

  return (
    <p className="mt-4 font-mono text-mono-sm uppercase tracking-[.08em] text-fg-3">
      <a href="tel:+16174068027" className="hover:text-accent-text transition-colors">
        617-406-8027
      </a>
      {" · "}
      <a href="mailto:jayfallon@gmail.com" className="hover:text-accent-text transition-colors">
        jayfallon@gmail.com
      </a>
      {" · "}
      <a href={`https://${domain}`} className="hover:text-accent-text transition-colors">
        {domain}
      </a>
    </p>
  );
}
