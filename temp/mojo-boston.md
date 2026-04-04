# Mojo Boston

**White-Label Festival Website on PayloadCMS**

**Visit Site:** https://mojo-boston.knokr.com/

**Hero Image:** https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/mojo-boston/mojo-boston-lg.webp

## The Problem

Festival organizers need websites, but they don't need another CMS to learn. They need a site that's pre-populated with their lineup, schedule, and venue data — the same data already living in Knokr Base. The question was whether an off-the-shelf CMS like PayloadCMS could serve as the foundation for a white-label festival site product, or whether the domain-specific requirements would outgrow it.

## What I Built

A fully custom festival website for a one-day Boston music festival, built on PayloadCMS 3.80 and Next.js 16. The stock Payload website template ships with a blog and four basic blocks. I kept the foundation — auth, admin panel, page builder, rich text editor — and rebuilt everything else into a festival-specific platform. 232 TypeScript files across 24 custom block components, a complete S3 media replacement, live database integration with Knokr, and a brand design system.

This is a demo site currently awaiting final content and visual design, built to prove that organizers can spin up a fully functional, branded festival website backed by the Knokr data ecosystem.

## Key Technical Decisions

### 24 Custom Block Components

The stock template's generic content blocks couldn't handle festival-specific layouts. I built 24 purpose-built blocks — a lineup word cloud with artist names sized by billing tier using Thingbat separator fonts, a day-tabbed schedule with stage grouping and 12h/24h time toggle, flip-card ticket tiers with front/back detail views, interactive Leaflet venue maps with Stadia dark tiles, sponsor grids, FAQ accordions with category headings, and more. Every block exposes full admin-configurable styling: colors, 4-way padding, max width, background images, rounded corners, shadows, font sizes and weights. This gives organizers real design control without touching code.

### Live Knokr Database Integration

Rather than duplicating data, the site reads directly from Knokr's shared PostgreSQL database — artist names, images, genres, billing tiers, social links, schedule events grouped by day and stage, venue coordinates, and festival metadata. All read-only. Data is managed in Knokr Base and displayed here, which means lineup updates in Base appear on the festival site without any manual sync. A single `KNOKR_FESTIVAL_ID` environment variable connects the site to the correct festival record.

### Custom S3 Media System

Payload's built-in media handling broke on Railway — files were wiped on every deploy, and the S3 plugin was unreliable. I replaced it entirely with a custom S3Media upload collection using `beforeChange` hooks for S3 uploads, `afterDelete` hooks for cleanup, a custom admin media library view at `/admin/media-library` with grid/list display, bulk upload, bulk delete, pagination at 64 items per page, and a sync endpoint to reconcile existing S3 bucket files with database records. Local storage is fully disabled — `disableLocalStorage: true` means no files on disk, no Sharp processing issues with SVGs, and all frontend components use the `s3Url` field for direct S3 access.

### Multi-Database Architecture

The site runs against two PostgreSQL databases simultaneously — one for Payload's own content (pages, posts, admin users, CMS configuration) and one for the Knokr festival data (read-only connection). This required managing separate connection pools and handling Railway's constraint that internal PostgreSQL hostnames don't resolve during build, meaning schema has to be pushed to the production database via external URL before deployment.

### Brand Design System

Custom CSS variables and Tailwind theme with the client's palette (`--mojo-blue`, `--mojo-navy`, `--mojo-white`, `--mojo-dark`), Moret serif font via Typekit for headings, golden ratio (1.618:1) for artist card images, and a rule of no opacity on text. Every block supports the full color palette through admin select fields, so the organizer controls brand consistency from the CMS. A custom festival hero type supports background video (MP4/WebM/YouTube), 9-position content alignment, and per-line color, size, font, and weight controls.

## What I Learned

PayloadCMS is a solid foundation for generic content management, but festival websites have domain-specific requirements that push against a general-purpose CMS at every turn. The 24 custom blocks, the replaced media system, and the external database integration represent significant engineering effort that would need to be repeated for every new festival site. This experiment validated two things: the Knokr data layer works well for powering external sites, and purpose-built festival site tooling will be more efficient than adapting a generic CMS — a finding that's informing the next phase of the platform.

## Technology Stack

Next.js 16, PayloadCMS 3.80, TypeScript, PostgreSQL (dual databases), AWS S3, Leaflet, Stadia Maps, Tailwind CSS 4, Lexical, Sharp, react-social-icons, Railway (Nixpacks)
