# Knokr Base

**Music Industry Data Platform and Back Office**

**Visit Site:** https://base.knokr.com/

**Hero Image:** https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/knokr-base/knokr-lg.webp

## The Problem

Managing 50,000+ artists and 1,400+ festivals requires more than a spreadsheet. The data relationships are complex — artists play at multiple festivals, festivals share artists across years, genres overlap and evolve, and venues host events across different promoters. The music industry needed a purpose-built back office that could handle entity management, content publishing, team collaboration, and data enrichment at scale — while feeding multiple consumer-facing applications from a single source of truth.

Beyond data management, artists and small venues lack access to affordable, music-specific web infrastructure. Generic website builders don't understand discographies, lineup management, or cross-entity networking. The industry needed a platform that removes technical barriers while providing domain-specific tooling.

## What I Built

Knokr Base is a multi-tenant CMS and administrative platform designed specifically for the music industry. It manages the full lifecycle of festival, artist, venue, and sponsor data — from image uploading and lineup management to graph-based discovery and AI-powered data enrichment. Every entity gets its own managed presence with a branded site at `/f/[username]`, and the platform serves as the data backbone for the entire Knokr ecosystem.

The system also operates as an integration platform — Orchestra, Knokr, and Nuncio share its PostgreSQL database but operate independently, enabling rapid feature iteration in isolation. As features prove valuable in these experimental products, they merge into Base, which will ultimately serve as the unified user-facing platform.

## Key Technical Decisions

### Database-Driven Routing

URLs are defined in the database via NavigationItem records rather than filesystem paths. This means content changes don't require code deployments — users can create pages, restructure navigation, and publish content entirely through the CMS without web administration expertise. It required building a routing engine that resolves database records at request time while maintaining performance through Redis caching. This is a meaningful differentiator against generic website builders, where page creation typically requires either technical knowledge or rigid templates.

### Multi-Tenant Entity Architecture

I designed a two-layer system separating entity types (Artist, Venue, Festival, Sponsor tables with type-specific fields) from a unified Project container that provides common functionality — pages, media, navigation, and permissions. Each user gets their own namespace at `/f/[username]`, with strict data isolation enforced at the query level. This lets the same infrastructure serve individual artists, festival organizers, venue managers, and sponsors without cross-contamination, while enabling cross-entity features like networked digital press kits and multi-entity event linking.

### Six-Tier Permission System

SUPER_ADMIN, ADMIN, EDITOR, CONTRIBUTOR, MEMBER, and VIEWER roles with three-layer route protection (middleware → layout → component). Permission checks are Redis-cached with 1-hour TTL, achieving 90-95% latency reduction on authorization. The system includes audit logging for sensitive actions, ownership transfer workflows between users, and organization-level team collaboration with role-based project management.

### Music Discovery Graph

This is where the data science gets interesting. I built a graph-based artist discovery system using festival co-occurrence data — if two artists frequently appear at the same festivals, they're likely related musically. The system uses Node2Vec embeddings to learn artist representations from the co-occurrence graph, then applies Louvain community detection to identify music "scenes" automatically. An anti-popularity scoring mechanism ensures recommendations surface emerging artists rather than defaulting to headliners. A separate Python service handles scene detection and graph analysis.

### Background Worker Architecture

Four BullMQ workers handle computationally intensive tasks without blocking the main application: a graph-worker for relationship computation, an embedding-worker for vector generation, an insights-worker for analytics processing, and a social-card-worker for automated social media image generation. This separation keeps the user-facing application responsive while enabling heavy data processing — critical when regenerating embeddings or recomputing graph relationships across 50,000+ artists.

### Vector Search with Enhanced Embeddings

OpenAI text-embedding-3-small generates embeddings enriched with artist metadata — country, region, genres, gender — enabling semantic search that understands queries like "female electronic artists from Berlin" without exact keyword matching. The same embedding infrastructure powers festival lineup matching, similar artist surfacing, and the home page discovery feed with both personalized and trending modes.

## Festival Operations

The platform includes a complete festival builder supporting everything from single-day showcases to multi-day, multi-city, multi-stage events with 100+ artists. Features include stage and schedule management, CSV bulk lineup upload, poster extraction integration for automated artist name extraction, cruise festival support for ship-based events, and a pending entity workflow for bulk selection, promotion, and linking of unverified artists and venues.

## Community Features

Beyond data management, the platform builds engagement through fan clubs (automatic for each entity), a following system across all entity types, road trip planning for multi-city concert tours with stop sequencing, real-time RSVP with commemorative digital ticket generation, and an artist contribution system for community-driven data improvements with admin review.

## Testing and Quality

614 test files across Vitest, Playwright, and Testcontainers. Tests cover API endpoints with real PostgreSQL instances via Testcontainers, permission and RBAC validation, data isolation between tenants, organization workflows, and multi-tenant boundary enforcement. Memlab handles memory leak detection. ESLint 9 with flat config and TypeScript strict mode enforce code quality. The project maintains 106+ detailed implementation guides in documentation.

## What This Enables

Knokr Base's shared PostgreSQL infrastructure feeds every application in the ecosystem — Knokr (public discovery and social features), Mojo Boston (white-label festival websites), Orchestra (artist relationship mapping), and Nuncio (event curation and distribution). The data model has proven robust enough to support four distinct consumption patterns from a single source of truth, validating the architecture for the planned mobile application and public API.

## Technology Stack

Next.js 16, React 19, TypeScript, PostgreSQL, pgvector, Prisma, Redis, BullMQ, HeroUI, Tailwind CSS 4, Clerk, AWS S3, CloudFront, OpenAI API, Node2Vec, Vitest, Playwright, Testcontainers, Memlab, Sentry, Winston, Railway
