import Link from "next/link";
import Button from "./Button";
import StatusPanel from "./StatusPanel";

type Social = { platform: string; url: string };

export default function Hero({
  name,
  titles,
  lead,
  resumeHref = "/resume",
  socials,
}: {
  name: string;
  titles: string[];
  lead: React.ReactNode;
  resumeHref?: string;
  socials: Social[];
}) {
  const github = socials.find((s) => s.platform.toLowerCase() === "github");
  const linkedin = socials.find((s) => s.platform.toLowerCase() === "linkedin");

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line"
      aria-label="Introduction"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-eng-grid bg-grid"
        style={{
          backgroundPosition: "-1px -1px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 80% at 25% 10%, #000 20%, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse 70% 80% at 25% 10%, #000 20%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto flex max-w-container flex-wrap items-end gap-12 px-6 pb-[clamp(48px,6vw,88px)] pt-[clamp(56px,8vw,120px)]">
        <div className="min-w-0 flex-[1_1_580px]">
          <div className="mb-5 font-mono text-mono-md text-fg-3">
            <span className="text-accent-text">$</span> whoami
          </div>
          <h1 className="font-sans text-display text-fg">{name}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-mono-md text-fg-2">
            {titles.map((t, i) => (
              <span key={t} className="inline-flex items-center gap-2.5">
                {i > 0 ? <span className="text-fg-3">/</span> : null}
                <span className={i === 0 ? "text-accent-text" : ""}>{t}</span>
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-[580px] text-lead text-fg-2">{lead}</p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            <Button href={resumeHref} variant="primary">
              View resume <span aria-hidden>↗</span>
            </Button>
            {github ? (
              <Button href={github.url} external variant="secondary">
                GitHub
              </Button>
            ) : null}
            {linkedin ? (
              <Button href={linkedin.url} external variant="secondary">
                LinkedIn
              </Button>
            ) : null}
          </div>
        </div>
        <StatusPanel
          available
          rows={[
            {
              key: "open_to",
              value: "Founding engineer, principal IC, and staff backend roles",
            },
            {
              key: "building",
              value: (
                <>
                  <Link
                    href="https://knokr.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent-text"
                    style={{ borderBottom: "1px solid var(--accent-bg)" }}
                  >
                    Knokr
                  </Link>
                  <span className="text-fg-2">
                    {" "}
                    — music-industry data platform, solo founder
                  </span>
                </>
              ),
            },
            {
              key: "previously",
              value: (
                <span className="text-fg-2">
                  GitHub · Dassault Systèmes · Bose · Form Health
                </span>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
}
