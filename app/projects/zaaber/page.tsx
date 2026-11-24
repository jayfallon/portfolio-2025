import type { Metadata } from "next";
import CaseStudyLayout from "@/components/design/case-study/CaseStudyLayout";
import Breadcrumb from "@/components/design/case-study/Breadcrumb";
import CaseStudyHeader from "@/components/design/case-study/CaseStudyHeader";
import MetaStrip from "@/components/design/case-study/MetaStrip";
import StackCloud from "@/components/design/case-study/StackCloud";
import CaseStudySection from "@/components/design/case-study/CaseStudySection";
import CaseStudyNav from "@/components/design/case-study/CaseStudyNav";

export const metadata: Metadata = {
  title: "Zaaber | Jay Fallon",
  description:
    "Zaaber is a geography learning platform for schools. Pupils learn the world by finding places on a blank map — pressing, dragging, pinning, and flagging. 22 languages, encrypted pupil names, no trackers, no leaderboards.",
};

const STACK = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "HeroUI v3",
  "Tailwind CSS 4",
  "PostgreSQL 17",
  "Prisma 7",
  "Redis",
  "d3-geo",
  "mapshaper",
  "visx",
  "Argon2id",
  "Stripe",
  "Sentry",
  "Vitest",
  "GitHub Actions",
  "Railway",
];

const SubH3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mt-6 text-h3 text-fg">{children}</h3>
);

export default function ZaaberPage() {
  return (
    <CaseStudyLayout>
      <Breadcrumb
        items={[
          { label: "work", href: "/#work" },
          { label: "active" },
          { label: "zaaber" },
        ]}
      />

      <CaseStudyHeader
        title="Zaaber"
        tagline="A geography learning platform for schools. Pupils learn the world by finding places on a blank map — pressing a country, dragging its outline into place, dropping a pin on a city, picking its flag. Teachers build lessons and courses from 600+ quiz sets and follow their class in live reports."
        status="active"
        siteUrl="https://zaaber.com/"
      />

      <MetaStrip
        entries={[
          { label: "role", value: "Solo founder & engineer" },
          { label: "status", value: "Active" },
          { label: "years", value: "2026 — present" },
          { label: "scope", value: "~195k lines TypeScript" },
        ]}
      />

      <StackCloud items={STACK} />

      <CaseStudySection number="01" title="The problem">
        <p>
          Most geography quizzes are multiple choice. A pupil who picks{" "}
          <strong>Peru</strong> from four options has learned to recognise a word,
          not to find Peru. Zaaber is built around <strong>recall on a real map</strong>.
          Every question shows a blank map, and the pupil answers by acting on it:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong>Find them on the map:</strong> press the place you&apos;re asked for.
          </li>
          <li>
            <strong>Place the outlines:</strong> drag a country&apos;s or a province&apos;s shape to where it belongs.
          </li>
          <li>
            <strong>Drop the pins:</strong> put a pin on a city, a peak or an airport.
          </li>
          <li>
            <strong>Find them by their flag / Pick the right flag:</strong> link a flag and a place.
          </li>
          <li>
            <strong>Select by region:</strong> select every province in a named region, then submit.
          </li>
        </ul>
        <p>
          That choice drives most of the engineering. A map quiz needs accurate,
          licensed geographic data for every country it covers. It needs projections
          that are fair to the pupil, scoring that rewards a near miss, and touch
          targets a child can actually hit. It also has to run in a school, which
          means classes, teachers, reports and payment, and above all the privacy
          rules for under-13s.
        </p>
      </CaseStudySection>

      <CaseStudySection number="02" title="Product principles">
        <p>
          Before any code, a written specification and an implementation plan fixed
          a few rules that every later decision was checked against:
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            <strong>Privacy first, not at the end.</strong> Under COPPA, a school
            product for children has to collect almost nothing. Privacy work was
            scheduled first, and the build fails when the code drifts from the
            published privacy notice.
          </li>
          <li>
            <strong>No engagement mechanics.</strong> No streaks, no loss-aversion
            nudges, no rankings. Levels only ever go up, and a timed run only races
            the pupil&apos;s own best time.
          </li>
          <li>
            <strong>Adding a country is a data change.</strong> The application
            should not need code to support a new country&apos;s provinces or
            capitals. A country is a configuration entry that the data pipeline
            turns into published quiz sets.
          </li>
          <li>
            <strong>Every published fact has a source.</strong> Each quiz set
            records where its geometry came from, under what licence and with what
            corrections. A provenance file is generated on every build.
          </li>
        </ol>
      </CaseStudySection>

      <CaseStudySection number="03" title="Architecture">
        <p>
          Zaaber is a <strong>Next.js 16 / React 19</strong> application written in
          strict TypeScript, served from a single Node process.
        </p>
        <div className="overflow-hidden rounded-panel border border-line">
          <table className="w-full border-collapse font-sans text-small">
            <thead className="bg-surface-2">
              <tr className="text-left font-mono text-mono-xs uppercase tracking-[.08em] text-fg-3">
                <th className="px-4 py-3">Layer</th>
                <th className="px-4 py-3">Choice</th>
                <th className="px-4 py-3">Why</th>
              </tr>
            </thead>
            <tbody className="text-fg-2">
              <tr className="border-t border-line">
                <td className="px-4 py-3 align-top">UI</td>
                <td className="px-4 py-3 align-top">
                  <strong>HeroUI v3</strong> + <strong>Tailwind CSS v4</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  Accessible component library (React Aria underneath) gives
                  keyboard support, focus management and screen-reader semantics
                  for free. A project rule: every piece of UI is a HeroUI component.
                </td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-4 py-3 align-top">Data</td>
                <td className="px-4 py-3 align-top">
                  <strong>PostgreSQL 17</strong> via <strong>Prisma 7</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  Relational data (organisations, classes, memberships, attempts,
                  courses) with migrations in the repo.
                </td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-4 py-3 align-top">Sessions &amp; rate limits</td>
                <td className="px-4 py-3 align-top">
                  <strong>Redis</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  Server-side sessions (no JWTs to revoke) and sliding-window limits
                  on sign-in and claim codes.
                </td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-4 py-3 align-top">Maps</td>
                <td className="px-4 py-3 align-top">
                  <strong>d3-geo</strong>, drawn as plain SVG
                </td>
                <td className="px-4 py-3 align-top">
                  Projections and path generation on the server where possible, so
                  the browser gets SVG paths, not geometry libraries.
                </td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-4 py-3 align-top">Charts</td>
                <td className="px-4 py-3 align-top">
                  <strong>visx</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  Only the plot. Cards, legends and the &ldquo;view as a table&rdquo;
                  alternative are HeroUI components, and charts draw with theme
                  variables, so light and dark mode need no second code path.
                </td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-4 py-3 align-top">Passwords</td>
                <td className="px-4 py-3 align-top">
                  <strong>Argon2id</strong> (<code>@node-rs/argon2</code>)
                </td>
                <td className="px-4 py-3 align-top">—</td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-4 py-3 align-top">Payments</td>
                <td className="px-4 py-3 align-top">
                  <strong>Stripe Checkout (hosted)</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  No card data and no Stripe script on our pages.
                </td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-4 py-3 align-top">Errors</td>
                <td className="px-4 py-3 align-top">
                  <strong>Sentry</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  Configured to send no names, usernames, addresses or request
                  bodies.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The server owns everything that matters.{" "}
          <strong>Scoring is computed on the server</strong> from the published
          quiz document, never trusted from the client. Every quiz document is{" "}
          <strong>versioned and immutable</strong>: an attempt is pinned to the
          exact version it was played against, so a corrected border never changes
          a score already given.
        </p>
      </CaseStudySection>

      <CaseStudySection number="04" title="The geography data pipeline">
        <p>
          The largest single body of work is an offline pipeline (
          <code>pnpm geo:build</code>) that turns raw geographic sources into the
          quiz documents the app plays.
        </p>
        <SubH3>Sources</SubH3>
        <p>
          The baseline is Natural Earth (public domain) for countries, first-level
          divisions, rivers, lakes and physical regions. Where Natural Earth is not
          detailed or not current enough, national and humanitarian sources take
          over. Each is recorded with its licence and a file digest:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>OCHA administrative boundaries for Myanmar, Laos and Cambodia;</li>
          <li>geoBoundaries for the Philippines, Indonesia, Thailand and Panama;</li>
          <li>Spain&apos;s IGN for rivers, its terrain model and its gazetteer;</li>
          <li>the UK&apos;s Ordnance Survey and ONS;</li>
          <li>Japan&apos;s National Land Numerical Information;</li>
          <li>the US Census Bureau, IBGE (Brazil) and DANE (Colombia);</li>
          <li>OurAirports, plus national aeronautical publications for airports;</li>
          <li>Wikidata for names in every language.</li>
        </ul>
        <SubH3>Processing</SubH3>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Simplification</strong> runs through <strong>mapshaper</strong>{" "}
            (Visvalingam, keeping shapes), tuned per scale so a world map stays
            small and a country&apos;s provinces stay recognisable.
          </li>
          <li>
            <strong>Dissolving:</strong> regions and groupings are dissolved from
            their members, so borders always line up between related sets.
          </li>
          <li>
            <strong>Hand corrections are explicit and documented:</strong> Crimea
            is drawn as part of Ukraine on every map, with a test that checks
            Simferopol and Sevastopol fall inside Ukraine in every published
            document. Spain&apos;s rivers are traced from IGN segments and checked
            to end within 3 km of the sea. Ceuta and Melilla are handled as special
            cases.
          </li>
          <li>
            <strong>Projections are equal-area</strong> (conic equal-area fitted
            per region, Equal Earth for the world), because <em>place</em> mode
            scores an outline&apos;s position in canvas units, and Mercator would
            score the same mistake differently near the poles.
          </li>
          <li>
            <strong>Organisations:</strong> transnational groupings (the EU, NATO,
            the Commonwealth, the G20 and eleven more) are compiled from each
            organisation&apos;s own member page. Each list carries its source URL
            and the date it was checked, and its count is asserted in a build test.
          </li>
        </ul>
        <SubH3>Publishing</SubH3>
        <p>
          <code>pnpm geo:publish</code> loads the documents into Postgres. Published
          versions are never edited; a correction is a new version. The result is{" "}
          <strong>over 600 quiz sets</strong>: the world and its continents and
          regions, the 197 countries, and dedicated sets (divisions, capitals,
          cities, rivers, lakes, peaks, islands, airports) for about fifty
          countries.
        </p>
      </CaseStudySection>

      <CaseStudySection number="05" title="Making a map quiz fair">
        <p>
          A few problems came up again and again on the map canvas, and each has
          its own module:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Small places.</strong> Monaco, the Vatican, Tuvalu and the
            Caribbean islands are a pixel at continent scale. Any place drawn
            smaller than a 24-unit target (the WCAG 2.2 minimum) gets a uniform dot
            with a full-size invisible hit area. The rule is derived from the
            geometry, not listed by hand, so it holds for any new set.
          </li>
          <li>
            <strong>Scoring by distance.</strong> In Pin and Place modes an answer
            is marked by how far off it was, as a fraction of the map&apos;s
            diagonal: full marks inside a tolerance, partial marks beyond it,
            nothing past a cutoff. Pupils see &ldquo;So close!&rdquo; and
            &ldquo;Nearly there&rdquo;, not just &ldquo;Wrong&rdquo;. Find and flag
            modes stay right or wrong.
          </li>
          <li>
            <strong>Framing.</strong> A quiz opens on a frame that holds its items.
            When an item is mostly off the frame, the frame grows. This came from a
            real bug report that cut off the Kola Peninsula.
          </li>
          <li>
            <strong>Controls.</strong> Every map zooms and pans with buttons, the
            keyboard (arrow keys, <code>+</code>, <code>−</code> and <code>0</code>)
            and two-finger touch. In a quiz, one finger only answers, so a child
            never moves the map by accident.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection number="06" title="Classrooms, courses and reports">
        <p>
          Teachers create a class with a name, a web address and a list of pupils,
          one per line.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Pupil accounts.</strong> Each pupil gets a one-time{" "}
            <strong>claim code</strong>, chooses a six-digit PIN, and is given a
            generated username. There&apos;s no email and no date of birth.
          </li>
          <li>
            <strong>Lessons</strong> are sequences of steps (explore, practise,
            quiz). A step sets the mode, a pass mark, the number of attempts, the
            wait between attempts, a time limit, which attempt counts, and when
            answers are shown.
          </li>
          <li>
            <strong>Courses</strong> are versioned. They&apos;re assigned with a
            start date and a time zone, and gated: a step opens when the one
            before it is finished, when a quiz is passed or a score reached, or at
            a set date and time. Once a step is open, it stays open.
          </li>
          <li>
            <strong>Study decks</strong> are six-choice spaced-repetition questions
            on a Leitner schedule. Wrong answers are drawn from look-alikes,
            neighbours and the pupil&apos;s own past confusions.
          </li>
          <li>
            <strong>Reports</strong> cover pace and velocity; step-by-step grids; a
            burn-up chart with the median and middle-half band projecting a finish
            date; per-quiz statistics with the hardest questions; an
            &ldquo;attention&rdquo; list (stalled, stuck, behind, running out of
            time, rushing) only the teacher sees; and a live &ldquo;happening
            now&rdquo; panel that can give a pupil five more minutes or close a
            run.
          </li>
        </ul>
        <p>
          Reports are computed from attempts, so they can be rebuilt at any time. A
          nightly job stores daily rows for trend lines.
        </p>
      </CaseStudySection>

      <CaseStudySection number="07" title="Privacy and security by design">
        <p>
          Privacy is not a policy page attached at the end. It is built into the
          data model and enforced by tests.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Pupil names are encrypted per class.</strong> The only personal
            data about a pupil is the name the teacher typed. It is sealed with{" "}
            <strong>AES-256-GCM</strong> under a key derived with <strong>HKDF</strong>{" "}
            from a root key, salted by the class. The ciphertext is bound to its
            row as additional authenticated data, so a ciphertext can&apos;t be
            copied to another pupil. Names never appear in a query, a log or an
            error report. A pupil in two classes has two unrelated sealed names,
            and Zaaber never links them. Root keys rotate through a versioned
            re-encryption script.
          </li>
          <li>
            <strong>No third parties in the page.</strong> A strict
            Content-Security-Policy allows no outside scripts, fonts or
            connections. Fonts are self-hosted, and payments use Stripe&apos;s
            hosted page.
          </li>
          <li>
            <strong>Search keeps nothing.</strong> A test fails the build if any
            search file logs or stores the query.
          </li>
          <li>
            <strong>Retention is enforced, not promised.</strong> A scheduled job
            deletes on the schedule the privacy notice publishes: guests after 7
            days, attempts after 12 months, dormant accounts after 18 months, and
            unpaid classes after 24 hours.
          </li>
          <li>
            <strong>Authorisation</strong> is a central policy function. Every
            server action names the permission it checks, and teachers,
            co-teachers, organisation admins and enterprise admins each see exactly
            their scope. Enterprise views never show a group smaller than five.
          </li>
          <li>
            <strong>Sessions</strong> are server-side in Redis. Logins and claim
            codes are rate-limited, and state-changing requests are checked against
            a configured origin (CSRF).
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection number="08" title="Internationalisation">
        <p>The interface is in 22 languages:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong>Latin scripts:</strong> English, Spanish, Catalan, Portuguese,
            French, German, Italian, Dutch, Polish, Turkish, Indonesian and
            Vietnamese.
          </li>
          <li>
            <strong>Other scripts:</strong> Russian, Arabic, Urdu, Hindi, Bengali,
            Thai and Burmese.
          </li>
          <li>
            <strong>CJK:</strong> Chinese, Japanese and Korean.
          </li>
        </ul>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Completeness is enforced:</strong> a test fails the build if a
            language is missing a key, or if a translation drops a placeholder.
          </li>
          <li>
            <strong>Right-to-left:</strong> layout uses logical CSS properties
            throughout; icons that point a direction are mirrored, and others
            deliberately are not; and placeholders are wrapped in bidi isolation so
            mixed-direction sentences read correctly.
          </li>
          <li>
            <strong>Place names</strong> come from Wikidata, so a pupil working in
            Thai sees Thai names on the map.
          </li>
          <li>
            <strong>Typefaces</strong> are chosen per script: Noto Nastaliq for
            Urdu, Baloo for Devanagari, Bengali and Arabic, Mitr for Thai, Noto
            Sans Myanmar for Burmese.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection number="09" title="Interface and design process">
        <p>
          The visual design came as a series of <strong>design handoffs</strong>:
          static HTML mock-ups with a theme and written notes. Each was rebuilt in
          HeroUI against the real application, not copied. That mattered because
          designs regularly misstated how the app worked. The rule became{" "}
          <em>&ldquo;build on the app, fix the copy, and list every difference in
          the pull request&rdquo;</em>.
        </p>
        <p>
          The theme is a set of HeroUI v3 CSS variables with a derived dark
          palette. A repository-wide rule (and a test) bans hand-rolled UI: no{" "}
          <code>&lt;div&gt;</code> cards, no hand-built tables or modals. This came
          from experience: the component library had once been installed and then
          ignored for thirty components, and nothing caught it, because the shared
          stylesheet made them look right.
        </p>
      </CaseStudySection>

      <CaseStudySection number="10" title="Testing and quality">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>About 4,100 tests in 570 files</strong>, using Vitest in three
            projects:
            <ul className="mt-2 list-[circle] space-y-1 pl-5">
              <li>
                <strong>unit:</strong> scoring, projections, matching, gates;
              </li>
              <li>
                <strong>component:</strong> React Testing Library;
              </li>
              <li>
                <strong>integration:</strong> against a real Postgres test database
                that refuses to run unless its name ends in <code>_test</code>.
              </li>
            </ul>
          </li>
          <li>
            <strong>Guard tests encode rules, not just behaviour.</strong> For
            example: the published privacy notice must mention every database
            table that holds data; every icon-only button must have a translated
            label; charts may contain no colour literals; every in-app help link
            must resolve, and a pupil&apos;s screens may never link to a
            teacher&apos;s help page; Crimea must be in Ukraine in every published
            map.
          </li>
          <li>
            <strong>
              <code>pnpm verify</code>
            </strong>{" "}
            runs formatting, lint, type-checking, tests and a production build.
            It&apos;s the bar for every pull request, and CI runs the same steps.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection number="11" title="Deployment and operations">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Hosting:</strong> Zaaber runs on <strong>Railway</strong>: the
            Next.js service, managed Postgres and Redis, and the scheduled jobs
            (nightly reports, retention) as separate services from the same
            repository with cron start commands.
          </li>
          <li>
            <strong>CI:</strong> <strong>GitHub Actions</strong> runs on every pull
            request. Postgres 17 and Redis 7 run as service containers; it applies
            migrations, seeds, runs <code>verify</code> and audits dependencies.
          </li>
          <li>
            <strong>Migrations</strong> are versioned SQL under{" "}
            <code>lib/db/migrations</code> and applied with{" "}
            <code>prisma migrate deploy</code>. Destructive changes are flagged in
            the pull request, because a migration applied to a shared development
            database breaks other branches until it merges.
          </li>
          <li>
            <strong>Quiz content</strong> ships separately from code:{" "}
            <code>geo:build</code> writes versioned JSON files with a provenance
            record, and <code>geo:publish</code> loads them. Deployments never
            delete a published version.
          </li>
          <li>
            <strong>Runbooks</strong> (<code>OPERATIONS.md</code>) cover rotating
            the session secret and the name-encryption key, the CSRF origin
            setting, recovering a missed Stripe webhook, restarting after a schema
            change, dependency advisories, and Sentry.
          </li>
          <li>
            <strong>Payments:</strong> a hosted Stripe checkout, confirmed by a
            signed and idempotent webhook. Pricing is $4.95 per teacher per school
            year plus $1 per pupil per class, defined once in code and sent with
            each checkout session.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection number="12" title="How it was built">
        <p>
          The project started on 15 September 2026 with a specification, an
          implementation plan and a build checklist, before any code. Work then
          moved issue by issue:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Each feature or country is a GitHub issue that records the decisions taken.</li>
          <li>
            Each piece of work is a pull request, stacked when one depends on
            another, and merged with merge commits so history keeps its shape.
          </li>
          <li>
            Every pull request carries before-and-after screenshots taken from a
            production build and lists where it departs from the design.
          </li>
        </ul>
        <p>
          The code was written in close collaboration with an AI coding agent
          (Claude Code), with the product owner deciding scope, reviewing every
          change and merging it. The agent did the implementation; the data
          research (checking every member list against the organisation&apos;s own
          website); and the machine-drafted translations, flagged for fluent
          review. The owner made every product decision — the pricing, which
          member lists to trust when sources disagreed, and when a design should
          give way to how the app actually works. A persistent project memory kept
          those decisions consistent from one session to the next.
        </p>
        <p>
          In its first weeks the project reached about{" "}
          <strong>720 commits, 240 merged pull requests and 140 issues</strong>.
          The result is roughly 195,000 lines of TypeScript across the application,
          the data pipeline and the tests.
        </p>
      </CaseStudySection>

      <CaseStudySection number="13" title="What I would do next">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong>Generated help screenshots:</strong> Playwright against a demo
            dataset, in every language. The script refuses to run against
            production.
          </li>
          <li>
            <strong>A school-wide seat pool</strong> and invoices with 30 days to
            pay, because many public schools can&apos;t pay by card.
          </li>
          <li>
            <strong>Fluent review</strong> of the machine-drafted translations,
            language group by language group.
          </li>
          <li>
            <strong>Dark mode switched on</strong>, now that the palette exists.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudyNav
        prev={null}
        next={{ label: "Knokr", href: "/projects/knokr" }}
      />
    </CaseStudyLayout>
  );
}
