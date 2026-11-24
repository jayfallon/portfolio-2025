# Zaaber

**Zaaber is a geography learning platform for schools.** Pupils learn the world by finding places on a blank map: they press the country, drag its outline into place, drop a pin on the city or pick its flag. There are no multiple-choice lists to guess from. Teachers build lessons and courses from more than 600 quiz sets covering every country, continent and ocean, and follow their class's progress in live reports. It works in 22 languages, including right-to-left Arabic and Urdu. It was designed from the first day for children's privacy: no advertising, no trackers, no leaderboards, and pupils' names are encrypted so that only their own teacher can read them.

---

## How it was designed, built and deployed

### The problem

Most geography quizzes are multiple choice. A pupil who picks "Peru" from four options has learned to recognise a word, not to find Peru. Zaaber is built around **recall on a real map**. Every question shows a blank map, and the pupil answers by acting on it:

- **Find them on the map:** press the place you're asked for.
- **Place the outlines:** drag a country's or a province's shape to where it belongs.
- **Drop the pins:** put a pin on a city, a peak or an airport.
- **Find them by their flag / Pick the right flag:** link a flag and a place.
- **Select by region:** select every province in a named region, then submit.

That choice drives most of the engineering. A map quiz needs accurate, licensed geographic data for every country it covers. It needs projections that are fair to the pupil, scoring that rewards a near miss, and touch targets a child can actually hit. It also has to run in a school, which means classes, teachers, reports and payment, and above all the privacy rules for under-13s.

### Product principles

Before any code, a written specification and an implementation plan fixed a few rules that every later decision was checked against:

1. **Privacy first, not at the end.** Under COPPA, a school product for children has to collect almost nothing. Privacy work was scheduled first, and the build fails when the code drifts from the published privacy notice (see _Testing_ below).
2. **No engagement mechanics.** No streaks, no loss-aversion nudges, no rankings. Levels only ever go up, and a timed run only races the pupil's own best time.
3. **Adding a country is a data change.** The application should not need code to support a new country's provinces or capitals. A country is a configuration entry that the data pipeline turns into published quiz sets.
4. **Every published fact has a source.** Each quiz set records where its geometry came from, under what licence and with what corrections. A provenance file is generated on every build.

### Architecture

Zaaber is a **Next.js 16 / React 19** application written in strict TypeScript, served from a single Node process.

| Layer                    | Choice                              | Why                                                                                                                                                                                             |
| ------------------------ | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UI                       | **HeroUI v3** + **Tailwind CSS v4** | An accessible component library (React Aria underneath) gives keyboard support, focus management and screen-reader semantics for free. A project rule: every piece of UI is a HeroUI component. |
| Data                     | **PostgreSQL 17** via **Prisma 7**  | Relational data (organisations, classes, memberships, attempts, courses) with migrations in the repo.                                                                                           |
| Sessions and rate limits | **Redis**                           | Server-side sessions (no JWTs to revoke) and sliding-window limits on sign-in and claim codes.                                                                                                  |
| Maps                     | **d3-geo**, drawn as plain SVG      | Projections and path generation on the server where possible, so the browser gets SVG paths, not geometry libraries.                                                                            |
| Charts                   | **visx**                            | Only the plot. Cards, legends and the "view as a table" alternative are HeroUI components, and charts draw with theme variables, so light and dark mode need no second code path.               |
| Passwords                | **Argon2id** (`@node-rs/argon2`)    |                                                                                                                                                                                                 |
| Payments                 | **Stripe Checkout (hosted)**        | No card data and no Stripe script on our pages.                                                                                                                                                 |
| Errors                   | **Sentry**                          | Configured to send no names, usernames, addresses or request bodies.                                                                                                                            |

The server owns everything that matters. **Scoring is computed on the server** from the published quiz document, never trusted from the client. Every quiz document is **versioned and immutable**: an attempt is pinned to the exact version it was played against, so a corrected border never changes a score already given.

### The geography data pipeline

The largest single body of work is an offline pipeline (`pnpm geo:build`) that turns raw geographic sources into the quiz documents the app plays.

**Sources.** The baseline is [Natural Earth](https://www.naturalearthdata.com/) (public domain) for countries, first-level divisions, rivers, lakes and physical regions. Where Natural Earth is not detailed or not current enough, national and humanitarian sources take over. Each is recorded with its licence and a file digest:

- OCHA administrative boundaries for Myanmar, Laos and Cambodia;
- geoBoundaries for the Philippines, Indonesia, Thailand and Panama;
- Spain's IGN for rivers, its terrain model and its gazetteer;
- the UK's Ordnance Survey and ONS;
- Japan's National Land Numerical Information;
- the US Census Bureau, IBGE (Brazil) and DANE (Colombia);
- OurAirports, plus national aeronautical publications for airports;
- Wikidata for names in every language.

**Processing.**

- **Simplification** runs through **mapshaper** (Visvalingam, keeping shapes), tuned per scale so a world map stays small and a country's provinces stay recognisable.
- **Dissolving:** regions and groupings are dissolved from their members, so borders always line up between related sets.
- **Hand corrections are explicit and documented:**
  - Crimea is drawn as part of Ukraine on every map, with a test that checks Simferopol and Sevastopol fall inside Ukraine in every published document.
  - Spain's rivers are traced from IGN segments and checked to end within 3 km of the sea.
  - Ceuta and Melilla are handled as special cases.
- **Projections are equal-area** (conic equal-area fitted per region, Equal Earth for the world), because `place` mode scores an outline's position in canvas units, and Mercator would score the same mistake differently near the poles.
- **Organisations:** transnational groupings (the EU, NATO, the Commonwealth, the G20 and eleven more) are compiled from each organisation's own member page. Each list carries its source URL and the date it was checked, and its count is asserted in a build test.

**Publishing.** `pnpm geo:publish` loads the documents into Postgres. Published versions are never edited; a correction is a new version. The result is **over 600 quiz sets**: the world and its continents and regions, the 197 countries, and dedicated sets (divisions, capitals, cities, rivers, lakes, peaks, islands, airports) for about fifty countries.

### Making a map quiz fair

A few problems came up again and again on the map canvas, and each has its own module:

- **Small places.** Monaco, the Vatican, Tuvalu and the Caribbean islands are a pixel at continent scale. Any place drawn smaller than a 24-unit target (the WCAG 2.2 minimum) gets a uniform dot with a full-size invisible hit area. The rule is derived from the geometry, not listed by hand, so it holds for any new set.
- **Scoring by distance.** In Pin and Place modes an answer is marked by how far off it was, as a fraction of the map's diagonal: full marks inside a tolerance, partial marks beyond it, nothing past a cutoff. Pupils see "So close!" and "Nearly there", not just "Wrong". Find and flag modes stay right or wrong.
- **Framing.** A quiz opens on a frame that holds its items. When an item is mostly off the frame, the frame grows. This came from a real bug report that cut off the Kola Peninsula.
- **Controls.** Every map zooms and pans with buttons, the keyboard (arrow keys, `+`, `−` and `0`) and two-finger touch. In a quiz, one finger only answers, so a child never moves the map by accident.

### Classrooms, courses and reports

Teachers create a class with a name, a web address and a list of pupils, one per line.

- **Pupil accounts.** Each pupil gets a one-time **claim code**, chooses a six-digit PIN, and is given a generated username. There's no email and no date of birth.
- **Lessons** are sequences of steps (explore, practise, quiz). A step sets the mode, a pass mark, the number of attempts, the wait between attempts, a time limit, which attempt counts, and when answers are shown.
- **Courses** are versioned. They're assigned with a start date and a time zone, and gated: a step opens when the one before it is finished, when a quiz is passed or a score reached, or at a set date and time. Once a step is open, it stays open.
- **Study decks** are six-choice spaced-repetition questions on a Leitner schedule. Wrong answers are drawn from look-alikes, neighbours and the pupil's own past confusions.
- **Reports:**
  - an overview of pace and velocity;
  - a step-by-step grid;
  - a burn-up chart with the median and middle-half band, projecting a finish date;
  - per-quiz statistics with the hardest questions;
  - an "attention" list (stalled, stuck, behind, running out of time, rushing) that only the teacher sees;
  - a live "happening now" panel that can give a pupil five more minutes or close a run.

Reports are computed from attempts, so they can be rebuilt at any time. A nightly job stores daily rows for trend lines.

### Privacy and security by design

Privacy is not a policy page attached at the end. It is built into the data model and enforced by tests.

- **Pupil names are encrypted per class.** The only personal data about a pupil is the name the teacher typed. It is sealed with **AES-256-GCM** under a key derived with **HKDF** from a root key, salted by the class. The ciphertext is bound to its row as additional authenticated data, so a ciphertext can't be copied to another pupil. Names never appear in a query, a log or an error report. A pupil in two classes has two unrelated sealed names, and Zaaber never links them. Root keys rotate through a versioned re-encryption script.
- **No third parties in the page.** A strict Content-Security-Policy allows no outside scripts, fonts or connections. Fonts are self-hosted, and payments use Stripe's hosted page.
- **Search keeps nothing.** A test fails the build if any search file logs or stores the query.
- **Retention is enforced, not promised.** A scheduled job deletes on the schedule the privacy notice publishes: guests after 7 days, attempts after 12 months, dormant accounts after 18 months, and unpaid classes after 24 hours.
- **Authorisation** is a central policy function. Every server action names the permission it checks, and teachers, co-teachers, organisation admins and enterprise admins each see exactly their scope. Enterprise views never show a group smaller than five.
- **Sessions** are server-side in Redis. Logins and claim codes are rate-limited, and state-changing requests are checked against a configured origin (CSRF).

### Internationalisation

The interface is in **22 languages**:

- **Latin scripts:** English, Spanish, Catalan, Portuguese, French, German, Italian, Dutch, Polish, Turkish, Indonesian and Vietnamese.
- **Other scripts:** Russian, Arabic, Urdu, Hindi, Bengali, Thai and Burmese.
- **CJK:** Chinese, Japanese and Korean.

- **Completeness is enforced:** a test fails the build if a language is missing a key, or if a translation drops a placeholder.
- **Right-to-left:** layout uses logical CSS properties throughout; icons that point a direction are mirrored, and others deliberately are not; and placeholders are wrapped in bidi isolation so mixed-direction sentences read correctly.
- **Place names** come from Wikidata, so a pupil working in Thai sees Thai names on the map.
- **Typefaces** are chosen per script: Noto Nastaliq for Urdu, Baloo for Devanagari, Bengali and Arabic, Mitr for Thai, Noto Sans Myanmar for Burmese.

### Interface and design process

The visual design came as a series of **design handoffs**: static HTML mock-ups with a theme and written notes. Each was rebuilt in HeroUI against the real application, not copied. That mattered because designs regularly misstated how the app worked. The rule became "build on the app, fix the copy, and list every difference in the pull request".

The theme is a set of HeroUI v3 CSS variables with a derived dark palette. A repository-wide rule (and a test) bans hand-rolled UI: no `<div>` cards, no hand-built tables or modals. This came from experience: the component library had once been installed and then ignored for thirty components, and nothing caught it, because the shared stylesheet made them look right.

### Testing and quality

- **About 4,100 tests in 570 files**, using Vitest in three projects:
  - **unit:** scoring, projections, matching, gates;
  - **component:** React Testing Library;
  - **integration:** against a real Postgres test database that refuses to run unless its name ends in `_test`.
- **Guard tests encode rules, not just behaviour.** For example:
  - the published privacy notice must mention every database table that holds data;
  - every icon-only button must have a translated label;
  - charts may contain no colour literals;
  - every in-app help link must resolve, and a pupil's screens may never link to a teacher's help page;
  - Crimea must be in Ukraine in every published map.
- **`pnpm verify`** runs formatting, lint, type-checking, tests and a production build. It's the bar for every pull request, and CI runs the same steps.

### Deployment and operations

- **Hosting:** Zaaber runs on **Railway**: the Next.js service, managed Postgres and Redis, and the scheduled jobs (nightly reports, retention) as separate services from the same repository with cron start commands.
- **CI:** **GitHub Actions** runs on every pull request. Postgres 17 and Redis 7 run as service containers; it applies migrations, seeds, runs `verify` and audits dependencies.
- **Migrations** are versioned SQL under `lib/db/migrations` and applied with `prisma migrate deploy`. Destructive changes are flagged in the pull request, because a migration applied to a shared development database breaks other branches until it merges.
- **Quiz content** ships separately from code: `geo:build` writes versioned JSON files with a provenance record, and `geo:publish` loads them. Deployments never delete a published version.
- **Runbooks** (`OPERATIONS.md`) cover:
  - rotating the session secret and the name-encryption key;
  - the CSRF origin setting;
  - recovering a missed Stripe webhook;
  - restarting after a schema change;
  - dependency advisories;
  - Sentry.
- **Payments:** a hosted Stripe checkout, confirmed by a signed and idempotent webhook. Pricing is $4.95 per teacher per school year plus $1 per pupil per class, defined once in code and sent with each checkout session.

### How it was built

The project started on 15 September 2026 with a specification, an implementation plan and a build checklist, before any code. Work then moved issue by issue:

- Each feature or country is a GitHub issue that records the decisions taken.
- Each piece of work is a pull request, stacked when one depends on another, and merged with merge commits so history keeps its shape.
- Every pull request carries before-and-after screenshots taken from a production build and lists where it departs from the design.

The code was written in close collaboration with an AI coding agent (Claude Code), with the product owner deciding scope, reviewing every change and merging it. The agent did:

- the implementation;
- the data research, such as checking every member list against the organisation's own website;
- the machine-drafted translations, flagged for fluent review.

The owner made every product decision. That included the pricing, which member lists to trust when sources disagreed, and when a design should give way to how the app actually works. A persistent project memory kept those decisions consistent from one session to the next.

In its first weeks the project reached about **720 commits, 240 merged pull requests and 140 issues**. The result is roughly 195,000 lines of TypeScript across the application, the data pipeline and the tests.

### What I would do next

- **Generated help screenshots:** Playwright against a demo dataset, in every language. The script refuses to run against production.
- **A school-wide seat pool** and invoices with 30 days to pay, because many public schools can't pay by card.
- **Fluent review** of the machine-drafted translations, language group by language group.
- **Dark mode switched on**, now that the palette exists.

---

_Stack: Next.js 16, React 19, TypeScript, HeroUI v3, Tailwind CSS v4, PostgreSQL 17, Prisma 7, Redis, d3-geo, mapshaper, visx, Stripe, Sentry, Vitest, GitHub Actions, Railway._
