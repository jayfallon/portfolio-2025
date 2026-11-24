import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Tag from "./Tag";

export type EducationItem = {
  dateRange: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  description?: string;
  specializations?: string[];
};

export default function EducationGrid({ items }: { items: EducationItem[] }) {
  return (
    <Section id="education" divider={false}>
      <SectionHeader number="04" title="Education" />
      <div className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(360px,1fr))]">
        {items.map((it) => (
          <div
            key={it.degree}
            className="flex flex-col gap-2 rounded-panel border border-line bg-surface-1 px-6 py-5"
          >
            <div className="font-mono text-mono-sm uppercase tracking-[.08em] text-fg-3">
              {it.dateRange}
            </div>
            <div className="text-[18px] font-semibold tracking-[-0.015em] text-fg">
              {it.degree}
            </div>
            {it.institutionUrl ? (
              <a
                href={it.institutionUrl}
                target="_blank"
                rel="noreferrer"
                className="text-fg-2 transition-colors hover:text-accent-text"
              >
                {it.institution}
              </a>
            ) : (
              <div className="text-fg-2">{it.institution}</div>
            )}
            {it.description ? (
              <p className="mt-2 text-small text-fg-2">{it.description}</p>
            ) : null}
            {it.specializations && it.specializations.length > 0 ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {it.specializations.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
