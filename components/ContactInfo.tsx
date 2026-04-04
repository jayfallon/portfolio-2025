"use client";

import { useEffect, useState } from "react";

export function ContactInfo() {
  const [domain, setDomain] = useState("jayfallon.com");

  useEffect(() => {
    setDomain(window.location.hostname);
  }, []);

  return (
    <p className="mt-2 text-sm text-slate-500">
      <a href="tel:+16174068027" className="hover:text-teal-300 transition">
        617-406-8027
      </a>
      {" · "}
      <a href="mailto:jayfallon@gmail.com" className="hover:text-teal-300 transition">
        jayfallon@gmail.com
      </a>
      {" · "}
      <a href={`https://${domain}`} className="hover:text-teal-300 transition">
        {domain}
      </a>
    </p>
  );
}
