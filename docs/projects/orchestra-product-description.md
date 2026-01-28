# Orchestra Product Description

## Overview

Orchestra is a community-driven platform for documenting band member relationships within the music industry. Built as an experimental standalone application, it enables music fans to search for artists and contribute band member information through a curated submission process. Orchestra operates on the Knokr database, extending primary artist data into secondary and tertiary relationship networks that inform music scene discovery and industry business intelligence.

The platform serves dual purposes: as a functional community tool for completing artist data and as an isolated testing environment for artist relationship building, search functionality, and feature experimentation before integration into the broader Knokr ecosystem.

## Purpose

Orchestra addresses three strategic objectives:

1. **Artist Relationship Mapping**: Collect band member data to establish secondary and tertiary artist connections that would otherwise remain undocumented. These relationships form the foundation for music scene discovery systems and recommendation engines based on shared members, festivals, genres, and geographic proximity.

2. **Community Data Completion**: Engage like-minded music fans in collaborative data curation, building familiarity with the Knokr platform while accumulating the relationship data necessary for advanced discovery features. User contributions undergo multi-layered admin review before database integration.

3. **Experimental Platform**: Provide an isolated environment for testing artist search algorithms, relationship building services, and feature development without impacting the main Knokr application. Orchestra functions as both working application and technology evaluation framework.

### Business Intelligence Value

Band member relationship data enables Knokr to surface patterns and predict improvements across the live music industry logistics chain. By understanding who plays with whom, when, where, and how frequently, the platform delivers actionable business intelligence to industry decision makers—venue operators, promoters, booking agents, and artist management.

## Core Functionality

### Artist Discovery

- **Autocomplete Search**: Debounced artist name queries returning up to 50 results
- **Random Artist**: Discovery feature surfacing random artists from the database
- **Artist Profiles**: Comprehensive pages displaying band members, related artists, festival appearances, and social links

### Band Member Data

- **Current and Historical Members**: Display of active and past band members with role information and active years
- **Member Contributions**: Community submission of member details including name, role, tenure, images, and Wikipedia references
- **Automatic Linking**: Members matched to existing artist profiles in the Knokr database
- **Social Integration**: Artist profiles linked to Spotify, Instagram, Facebook, YouTube, TikTok, Apple Music, Bandcamp, SoundCloud, and official websites

### Relationship Intelligence

- **Related Artists**: Discovery based on shared band members, festival co-appearances, genre overlap, and geographic connections
- **Festival History**: Display of upcoming and past festival appearances
- **Relationship Scoring**: Backend logic for measuring artist connections through multiple relationship types (shared members, genre, gender, performance frequency, geographic proximity)

### Curation and Security

- **Admin Review Process**: Multi-layered review workflow for all submissions before database integration
- **Rate Limiting**: 10 submissions per hour per IP address
- **Bot Prevention**: Cloudflare Turnstile CAPTCHA and honeypot field implementation
- **Authentication**: Optional Clerk sign-in for enhanced features

## Data Architecture

Orchestra operates directly on the Knokr production database, utilizing existing artist, festival, and relationship entities. New band member submissions create connections between artist records, expanding the relationship graph for discovery and recommendation systems.

The platform establishes three relationship tiers:

- **Primary**: Direct artist-to-artist connections through band membership
- **Secondary**: Artists connected through shared members
- **Tertiary**: Extended network connections via festival co-appearances, genre, and geography

This multi-tiered relationship model enables sophisticated discovery algorithms and provides the data foundation for industry logistics prediction.

## Technical Stack

### Application Framework

- **Next.js 16**: App Router architecture with React 19
- **TypeScript**: Type-safe development environment
- **Node.js 18+**: Minimum runtime requirement

### Frontend

- **Styling**: Tailwind CSS 4
- **UI Components**: HeroUI component library
- **Animation**: Framer Motion
- **Form Validation**: Zod schema validation

### Backend

- **Database**: PostgreSQL shared with Knokr (via Prisma ORM)
- **Authentication**: Clerk (optional sign-in)
- **Security**: Cloudflare Turnstile CAPTCHA
- **Rate Limiting**: IP-based submission throttling

### Infrastructure

- **Hosting**: Railway
- **CDN**: AWS CloudFront for artist images
- **Database Access**: Prisma client with shared Knokr schema

### API Architecture

RESTful endpoints for search, discovery, and submission:

- **Search**: Artist name autocomplete with debouncing
- **Random**: Discovery feature returning random artist
- **Artist Detail**: Complete artist profile with members, festivals, and relationships
- **Member Submission**: POST endpoint with Turnstile verification and rate limiting

## Development Approach

Orchestra functions as an experimental isolation layer for the Knokr platform. Features are developed and tested independently before consideration for integration into the main application. This approach enables:

- **Rapid Iteration**: Feature experimentation without main application impact
- **Technology Evaluation**: Assessment of frameworks, libraries, and architectural patterns
- **Search Algorithm Testing**: Artist search and relationship query optimization
- **User Feedback Collection**: Community engagement and feature validation before broader rollout

The standalone nature allows focused development on artist-centric features while gathering real-world usage data and community input.

## Requirements

### Development Environment

- Node.js 18 or higher
- PostgreSQL database (shared with Knokr)
- Clerk account (authentication)
- Cloudflare account (Turnstile CAPTCHA)
- AWS CloudFront distribution (image delivery)

### Environment Configuration

Required environment variables include database connection strings, Clerk API keys, Cloudflare Turnstile keys, and CloudFront CDN URLs. Full configuration details are documented in the repository.

## Target Users

- **Music Fans**: Community members interested in documenting band lineups and artist relationships
- **Music Researchers**: Individuals tracking band member changes and artist connections over time
- **Knokr Community**: Early adopters providing feedback on platform features and data quality
- **Industry Professionals**: Secondary audience benefiting from relationship intelligence and discovery features

## Strategic Role

Orchestra serves as both community tool and research platform within the Knokr ecosystem. By focusing exclusively on artist relationships, it enables:

- **Data Network Growth**: Accumulation of relationship data for music scene discovery systems
- **Community Building**: Engagement with users invested in music data curation
- **Feature Incubation**: Safe environment for testing concepts before main platform integration
- **Business Intelligence Foundation**: Collection of relationship data supporting industry logistics prediction

## License

MIT
