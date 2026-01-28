# Knokr Base Product Description

## Overview

Knokr Base is a multi-tenant content management system designed specifically for the music industry. It provides artists, venues, festivals, and sponsors with a free CMS and hosting platform where they can manage their data, deploy to websites, and network their content across the ecosystem. Built with database-driven routing, the platform enables users to create pages without web administration expertise.

The system operates as the administrative backbone for the Knokr ecosystem, providing CRUD operations for all entities while sharing its PostgreSQL database with experimental products (Orchestra, Lineups, Nuncio). As features prove valuable in isolated applications, they are merged into Base, which will eventually incorporate all user-facing functionality.

## Purpose

Knokr Base addresses critical problems in the fragmented music industry:

### 1. Data Fragmentation and Inaccuracy

The music industry operates through multiple closed systems producing inconsistent, inaccurate data. Knokr Base provides a centralized, networked platform where artists, venues, and festivals host authoritative information—eliminating reliance on third-party data aggregators and reducing information decay across the industry.

### 2. Technical Barriers to Online Presence

Artists and small venues lack access to affordable, music-specific web infrastructure. Knokr Base provides a free CMS with hosting, removing technical barriers while offering music industry-specific features unavailable in generic website builders (Squarespace, Wix, WordPress).

### 3. Digital Press Kit Distribution

Organizations and venues require artist information to populate their digital offerings but traditionally rely on manual collection from artists or third parties. Knokr Base generates networked digital press kits that organizations can programmatically access, streamlining information distribution across the industry.

### 4. Content Management Without Technical Expertise

Traditional CMS platforms require web administrators to create routes and pages. Knokr Base's database-driven routing engine enables users to create pages, navigation structures, and content hierarchies without technical knowledge—routes are defined in the database, not the file system.

### Strategic Role

Knokr Base serves as the data administration layer and feature integration platform for the Knokr ecosystem. Orchestra, Lineups, and Nuncio operate as isolated experimental environments sharing the Base database. Proven features from these applications merge into Base, which will ultimately serve as the unified user-facing platform once experimentation concludes.

## Core Functionality

### Multi-Tenant CMS Architecture

- **User Namespacing**: Each user receives a site at `/f/[username]` with complete data isolation
- **Database-Driven Routing**: URLs stored in `NavigationItem` database records, enabling dynamic page creation without code deployments
- **Page Builder**: Component-based content creation with templates and draft/publish workflow
- **Entity-Specific Sites**: Dedicated branded presence for verified artists, venues, festivals, and sponsors
- **Premium Subdomains**: Custom domains for verified entities

### Music Industry Entity Management

- **Four Entity Types**: Artists, Venues, Festivals, Sponsors with type-specific workflows
- **Entity Request System**: Fan-initiated verification requests reviewed by SUPER_ADMINs
- **Official vs Fan Content**: Distinction between verified entity content and community contributions
- **Ownership Transfer**: Transfer venue/artist/festival ownership between users
- **Pending Entity Workflow**: Bulk selection, promotion, and linking for unverified entities

### Event Management

- **Three Event Types**: 
  - Official events (venue-created, verified)
  - Fan standalone events (community-organized)
  - Satellite events (linked to official events)
- **Multi-Entity Events**: Link multiple artists, venues, and festivals to single events
- **Geographic Discovery**: City-based event search with radius filtering
- **Real-Time RSVP**: Attendance tracking with commemorative digital ticket generation
- **Event Filters**: Genre, price, accessibility, date range, and custom criteria

### Festival Operations

- **Festival Builder**: Complete stage, event, and lineup management
- **CSV Bulk Upload**: Import lineups at scale
- **Cruise Festivals**: Support for ship-based and floating events
- **Poster Extraction Integration**: Automated artist name extraction from festival posters with pending artist creation

### Community and Networking

- **Fan Clubs**: Automatic clubs for each entity (artist clubs, venue clubs, festival clubs)
- **Following System**: Unified UI for following users, artists, venues, festivals, and sponsors
- **Road Trips**: Multi-city concert tour planning with stop sequencing
- **Organizations**: Team collaboration with role-based permissions and project management

### Content Distribution

- **Digital Press Kits**: Automated generation from entity data for organizational use
- **Content Networking**: Cross-entity content sharing across the platform
- **Media Library**: AWS S3 storage with CloudFront CDN delivery
- **Blog System**: Blog posts for artists and projects with builder interface and public pages
- **Social Link Scraper**: Automated extraction of social media URLs

### Discovery and Intelligence

- **Vector Search**: Semantic search using pgvector with OpenAI embeddings (text-embedding-3-small)
- **Full-Text Search**: PostgreSQL tsvector indexing across all content
- **Music Discovery Graph**: Graph-based artist discovery using:
  - Festival co-occurrence analysis
  - Node2Vec embeddings
  - Louvain scene detection
  - Anti-popularity scoring
- **Home Page Discovery**: Personalized and trending recommendations for festivals, artists, and music scenes
- **Enhanced Embeddings**: Artist embeddings include country, region, genres, gender for improved matching

### Administrative Tools

- **Prisma Database Management**: Complete CRUD operations for all entities via Knokr Base
- **SUPER_ADMIN Controls**: User management, entity verification, request approval
- **Audit Logging**: Tracking of all sensitive actions
- **Black Book System**: Protected artist flag with nullable location fields for privacy
- **Fix Tools**: Admin interfaces for correcting country data, location data, and festival conversions
- **Moderation UI**: Review submissions from external tools (Orchestra band member data)

### External Tool Integration

- **Orchestra**: Crowdsourced band member data at orchestra.knokr.com
  - ArtistMember and PendingArtistMember models
  - SUPER_ADMIN moderation UI
  - Automatic linking to existing artists or PendingArtist creation
- **Lineups**: Festival lineup extraction and management
- **Nuncio**: Event list curation and distribution

All external tools share the Knokr Base PostgreSQL database, with Base providing the administrative layer.

## Data Architecture

### Database Schema

PostgreSQL database shared across the Knokr ecosystem with:

- **Multi-Tenant Isolation**: Strict filtering by user ownership
- **Entity-Project Separation**: Two-layer architecture separating entity types (Artist, Venue, Festival, Sponsor) from unified Project container
- **Vector Extensions**: pgvector for semantic search with OpenAI embeddings
- **Graph Analysis**: Festival co-occurrence, Node2Vec embeddings, scene detection

### Permission System

Six-tier role-based access control with Redis caching:

- **SUPER_ADMIN**: Full system access, user management, entity verification
- **ADMIN**: CMS operations, limited user management
- **EDITOR**: Create and edit content, publish drafts
- **CONTRIBUTOR**: Create drafts only, no publishing
- **MEMBER**: Basic access, no administrative privileges
- **VIEWER**: Read-only access (organizations)

Three-layer route protection: middleware → layout → component with Redis-cached permissions achieving 90-95% latency reduction.

### Caching Strategy

Redis caching for high-frequency operations:

- Permission checks (1-hour TTL)
- Organization memberships (1-hour TTL)
- Event listings by city (15-minute TTL)
- Notification counts (60-second TTL)

## Technical Stack

### Application Framework

- **Next.js 16.0.10**: App Router with React Server Components, Turbopack
- **React 19.1.0**: Latest stable release
- **TypeScript 5**: Strict mode enabled throughout
- **Node.js 20+**: Minimum runtime requirement

### Frontend

- **UI Components**: HeroUI React 2.8.5
- **Styling**: Tailwind CSS 4
- **State Management**: React Server Components with selective client components

### Backend

- **Database**: PostgreSQL via Prisma 6.18.0 with pgvector extension
- **Cache**: Redis 5.8.3
- **Authentication**: Clerk 6.36.3
- **Storage**: AWS S3 with CloudFront CDN
- **ORM**: Prisma with type-safe queries

### AI and Machine Learning

- **Embeddings**: OpenAI 6.8.1 (text-embedding-3-small model)
- **Vector Search**: pgvector for semantic similarity
- **Graph Algorithms**: Node2Vec for artist embeddings, Louvain for scene detection
- **Scene Detection**: Python-based discovery service

### Background Processing

- **Job Queues**: BullMQ 5.63.0
- **Workers**: 
  - graph-worker (TypeScript): Graph analysis and scene detection
  - embedding-worker (TypeScript): Vector embedding generation
- **Discovery Service**: Python service for advanced graph analysis

### Infrastructure

- **Hosting**: Railway with automatic PostgreSQL and Redis provisioning
- **CDN**: AWS CloudFront for media delivery
- **Monitoring**: Sentry 10.23.0 (error tracking, performance, session replay)
- **Logging**: Winston with Sentry integration

### Testing and Quality

- **Unit/Integration**: Vitest 3.2.4 (2,300+ tests)
- **E2E**: Playwright 1.56.1
- **Container Testing**: Testcontainers 11.7.1 for database integration tests
- **Coverage**: Vitest Coverage (V8)
- **Linting**: ESLint 9 (Flat Config)
- **Memory**: Memlab for leak detection

## Competitive Differentiation

Knokr Base competes with generic website builders (Squarespace, Wix, WordPress) by providing:

### Music Industry Specialization

- **Entity-Specific Features**: Artist discographies, venue capacity management, festival lineup builders unavailable in generic CMSs
- **Networked Data Model**: Cross-entity relationships and discovery features require music industry schema
- **Digital Press Kits**: Automated generation for organizational distribution
- **Event Management**: Music-specific event workflows with RSVP, commemorative tickets, and multi-entity linking

### Technical Advantages

- **Database-Driven Routing**: Dynamic page creation without web administration expertise or code deployments
- **Free Hosting**: No cost barrier for emerging artists and small venues
- **Multi-Tenant Architecture**: Complete data isolation with shared infrastructure efficiency
- **Vector Search**: Semantic discovery unavailable in traditional CMSs

### Ecosystem Integration

Generic CMSs operate in isolation. Knokr Base provides:

- **Networked Content**: Entity relationships surface across the platform
- **Shared Database**: Integration with Orchestra (band members), Lineups (festival extraction), Nuncio (event lists)
- **Graph Intelligence**: Music scene discovery through relationship analysis
- **Mobile App Foundation**: Shared data layer for upcoming mobile applications

## Development Approach

Knokr Base operates as the integration platform for the Knokr ecosystem. The development methodology separates concerns:

### Isolated Experimentation

- **Orchestra**: Band member relationships and artist search testing
- **Lineups**: Festival lineup extraction and AI recommendation engines
- **Nuncio**: Event list curation and embedding

These applications share the Base database but operate independently, enabling rapid feature iteration without impacting the main platform.

### Feature Integration

Proven features from isolated applications merge into Base:

- **Successful Patterns**: Validated UX and technical approaches
- **Data Models**: Shared schema refinement through real-world usage
- **API Patterns**: Tested endpoints before main platform integration

### Long-Term Vision

Once experimentation concludes, Knokr Base will incorporate all user-facing functionality from isolated applications, serving as the unified platform for the Knokr ecosystem. The mobile application currently in development will inform monetization strategy and feature prioritization.

## Requirements

### Development Environment

- Node.js 20 or higher
- PostgreSQL database with pgvector extension
- Redis instance
- Clerk account (authentication)
- AWS S3 bucket (media storage)
- OpenAI API key (embeddings)
- Sentry account (optional, monitoring)

### Environment Configuration

Required environment variables include:

- Clerk authentication keys
- Database connection string (Railway auto-provides)
- Redis connection URL (Railway auto-provides)
- AWS credentials and bucket configuration
- OpenAI API key
- Sentry DSN (optional)

Full configuration details are documented in the repository.

## Target Users

### Primary Audiences

- **Artists**: Musicians and bands seeking free online presence with music-specific features
- **Venues**: Music venues managing events and building fan communities
- **Festivals**: Festival organizers coordinating multi-day lineups and ticket distribution
- **Sponsors**: Music industry sponsors establishing brand presence

### Secondary Audiences

- **Fans**: Music enthusiasts discovering events and planning concert tours
- **Organizations**: Music industry teams collaborating on projects with role-based access
- **Music Professionals**: Industry stakeholders accessing digital press kits and business intelligence

### Future Audiences

- **Mobile App Users**: Once mobile applications launch, informed by usage patterns and monetization testing

## Strategic Role

Knokr Base functions as the administrative and integration layer for the Knokr ecosystem, addressing music industry data fragmentation through:

### Data Centralization

- Authoritative source for artist, venue, festival, and sponsor information
- Networked relationships eliminating third-party data dependency
- Shared database architecture enabling ecosystem-wide intelligence

### Technical Platform

- Free CMS removing barriers for emerging artists and small venues
- Database-driven routing enabling non-technical content creation
- Multi-tenant architecture providing enterprise features at consumer scale

### Ecosystem Coordination

- Administrative layer for Orchestra, Lineups, and Nuncio
- Feature integration platform for proven experimental functionality
- Foundation for mobile application development

### Business Intelligence

- Music scene discovery through graph analysis
- Artist relationship mapping for industry logistics
- Event patterns and trend analysis for decision makers

The platform eliminates reliance on fragmented closed systems while providing music-specific features unavailable in generic website builders, positioning Knokr as the centralized data and distribution platform for the music industry.

## Documentation

The repository includes comprehensive documentation:

- **DEVELOPERS.md**: Technical architecture and setup
- **API.md**: Complete endpoint reference
- **ARCHITECTURE.md**: System design decisions
- **VECTOR-SEARCH.md**: Embedding and search architecture
- **docs/testing-guide.md**: Testing strategy
- **docs/**: 106+ feature-specific implementation guides
- **CLAUDE.md**: AI agent integration instructions

## License

Proprietary - All rights reserved
