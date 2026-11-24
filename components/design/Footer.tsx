import Container from "./Container";

type Social = { platform: string; url: string };

export default function Footer({
  email,
  socials,
}: {
  email?: string;
  socials: Social[];
}) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-wrap items-center gap-x-6 gap-y-2.5 py-6 font-mono text-mono-sm text-fg-3">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-live" />
          jay fallon · {year}
        </span>
        <div className="flex-1" />
        <div className="flex flex-wrap gap-4">
          {email ? (
            <a
              href={`mailto:${email}`}
              className="text-fg-2 transition-colors duration-150 hover:text-accent-text"
            >
              email
            </a>
          ) : null}
          {socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="text-fg-2 transition-colors duration-150 hover:text-accent-text"
            >
              {s.platform.toLowerCase()}
            </a>
          ))}
          <a
            href="#top"
            className="text-fg-2 transition-colors duration-150 hover:text-accent-text"
          >
            top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
