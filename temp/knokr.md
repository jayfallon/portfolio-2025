# Knokr

**Festival Discovery and Social Platform**

**Visit Site:** https://knokr.com/

**Hero Image:** https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/lineups/lineups-lg.webp

## The Problem

Festival information is scattered across hundreds of individual websites, each with different formats, incomplete lineups, and no way to compare options. A fan trying to decide between festivals has to manually check dozens of sites, cross-reference artists, and guess at genre overlap. There's no unified layer connecting festivals, artists, and attendees — and no tooling that helps fans make informed purchasing decisions across the entire landscape.

## What I Built

Knokr is a festival discovery and social platform that consolidates lineup data, schedules, and artist information across 1,400+ festivals and 50,000+ artists into a single searchable interface. Beyond discovery, it connects festival attendees with each other for social coordination around shared events.

The platform evolved through multiple iterations — starting as a Python-based poster extraction tool that output CSV and JSON, progressing through standalone experiments (Orchestra for artist relationships, Nuncio for event data distribution), and arriving at the current Next.js architecture with a shared PostgreSQL infrastructure. Each iteration validated specific capabilities before they were integrated into the production platform.

## Key Technical Decisions

### AI-Powered Lineup Extraction

Festival posters are the primary way lineups are announced, but extracting structured data from them is messy — inconsistent typography, creative layouts, and hundreds of artist names per image. I built an extraction pipeline using Claude Vision API that identifies artists from poster images, matches them against the existing 50,000+ artist database, derives genre information from artist self-reporting, and assembles complete lineups. This is what makes it possible to maintain 1,400+ festivals without manual data entry — a scale that would be infeasible to manage by hand when individual festivals can have 100+ artists each.

### Dual Search Architecture

The platform implements both semantic search using pgvector embeddings (for natural language queries like "chill electronic festivals near the coast") and full-text search using PostgreSQL tsvector indexing (for precise artist and festival name matching). Each serves a different user intent — discovery vs. lookup — and both operate against the same dataset without requiring separate search infrastructure.

### Dream Lineup Builder

Users can construct hypothetical festivals with drag-and-drop artist ordering, stage assignments, and schedule management using @dnd-kit — then export lineup posters as PNGs via html-to-image or share via public URLs. This required solving state management for complex nested drag operations across days, stages, and billing tiers, where a single festival can span multiple days with multiple stages and dozens of artists per stage.

### Conversational Recommendation Engine

A Claude-powered decision engine that takes user constraints (budget, location, genre preferences, must-see artists) and provides personalized festival comparisons with trade-off analysis. Rather than presenting raw data, the engine synthesizes lineup composition, geographic convenience, genre balance, and cost to surface what actually matters for purchasing decisions.

## Architecture

Built on Next.js 16 with React 19, TypeScript, PostgreSQL with pgvector extensions, Prisma ORM, and Redis caching. The application shares its database infrastructure with Knokr Base, enabling both applications to operate against a unified data model — lineup updates in Base appear on Knokr without manual sync. Media storage uses AWS S3 with CloudFront CDN. Authentication via Clerk. UI built with HeroUI, Tailwind CSS, and Framer Motion. Deployed to Railway.

## What This Enables

The shared data layer has proven extensible beyond the core platform. It now powers Mojo Boston — a white-label festival website built on PayloadCMS that pulls lineup, schedule, and venue data directly from the Knokr database, demonstrating a turnkey B2B product for festival organizers. The same infrastructure also feeds Orchestra (artist relationship mapping) and Nuncio (event curation and distribution), validating that the data model supports multiple distinct consumption patterns from a single source of truth.

## Technology Stack

Next.js 16, React 19, TypeScript, PostgreSQL, pgvector, Prisma, Redis, HeroUI, Tailwind CSS, Framer Motion, @dnd-kit, html-to-image, Clerk, AWS S3, CloudFront, Claude AI API, Xenova Transformers, React Hook Form, Zod, Railway
