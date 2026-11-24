import Section from "./Section";
import SectionHeader from "./SectionHeader";
import TimelineItem from "./TimelineItem";

export type ExperienceItem = {
  dates: string;
  role: string;
  company: string;
  current?: boolean;
  description: string;
  tags: string[];
};

export default function Experience({
  items,
  rangeLabel,
}: {
  items: ExperienceItem[];
  rangeLabel?: string;
}) {
  return (
    <Section id="experience">
      <SectionHeader number="02" title="Experience" meta={rangeLabel} />
      <ol className="m-0 list-none p-0">
        {items.map((it) => (
          <TimelineItem key={`${it.company}-${it.dates}`} {...it} />
        ))}
      </ol>
    </Section>
  );
}
