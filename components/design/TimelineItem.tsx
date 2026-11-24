"use client";

import { useState } from "react";
import Tag from "./Tag";

export default function TimelineItem({
  dates,
  role,
  company,
  current = false,
  description,
  tags,
}: {
  dates: string;
  role: string;
  company: string;
  current?: boolean;
  description: string;
  tags: string[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <li className="flex flex-wrap gap-x-8 gap-y-1">
      <div className="flex-[0_0_190px] font-mono text-mono-sm uppercase leading-7 tracking-[.08em] text-fg-3">
        {dates}
      </div>
      <div className="relative min-w-0 flex-[1_1_480px] border-l border-line pb-10 pl-7">
        <span
          aria-hidden
          className="absolute -left-[5px] top-[9px] h-[9px] w-[9px] rounded-full"
          style={{
            background: current ? "var(--live)" : "var(--border-2)",
            boxShadow: "0 0 0 4px var(--bg)",
          }}
        />
        <h3 className="m-0 text-h3 text-fg">
          {role} <span className="font-normal text-fg-3">·</span>{" "}
          <span className="text-accent-text">{company}</span>
        </h3>
        <p
          className="m-0 mt-2.5 max-w-[720px] text-pretty text-[15.5px] text-fg-2"
          style={{
            display: open ? "block" : "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: open ? "unset" : 3,
            overflow: "hidden",
          }}
        >
          {description}
        </p>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-2 border-b border-line-2 py-0.5 font-mono text-mono-sm text-fg"
        >
          {open ? "− collapse" : "+ read more"}
        </button>
        {tags.length > 0 ? (
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        ) : null}
      </div>
    </li>
  );
}
