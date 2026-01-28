# Nuncio Product Description

## Overview

Nuncio is an open event curation platform that enables users to create and share unlimited lists of musical events without claiming artist, venue, or festival associations. Users can source events from the Knokr database, create their own events, or combine both—organizing concerts, festivals, and shows into custom lists by artist, location, or genre. Lists are shared via public URLs or embedded directly on websites.

Built as the aggregation layer for Knokr, Nuncio competes directly with established platforms like Bandsintown, Songkick, and Seated by removing restrictions on list creation and ownership verification.

## Purpose

Nuncio serves two primary objectives:

1. **Data Aggregation for Knokr**: Collect artist event data through user contributions, expanding the Knokr database with events that would otherwise remain undiscovered. User-created events immediately appear in Knokr search results, creating exposure for emerging and independent artists.

2. **Open Curation System**: Provide unrestricted list creation without artist verification, venue partnerships, or organizational claims. Users create unlimited event lists targeting any combination of artists, locations, or genres, then distribute through public pages or website embeds.

### Competitive Differentiation

Unlike platforms requiring artist claims or venue partnerships (Bandsintown, Songkick, Seated), Nuncio operates as an open system. Users curate and remix events from any source—Knokr database, bulk imports, or manual creation—without ownership verification or approval workflows. This removes barriers to list creation while simultaneously feeding event data back into the Knokr platform.

## Core Functionality

### Event Sourcing

- **Knokr Database Search**: Search by artist, venue, or city from the existing Knokr event database
- **User Event Creation**: Create custom events with immediate availability—no approval workflow required
- **Bulk Import**: Import up to 100 events via CSV upload
- **AI Image Extraction**: Extract tour dates from images using Claude Vision API
- **Location Intelligence**: AI-powered country and state/region suggestions based on venue and city data

### List Management

- **Multiple Lists**: Create and maintain separate event collections per user
- **Privacy Controls**: Three visibility levels—Private, Unlisted (link-only), or Public
- **List Organization**: Drag-and-drop reordering of events within lists
- **Public Search**: Full-text search across all public lists with genre and location filters

### Distribution

- **SEO-Optimized URLs**: Public list pages with semantic event slugs (format: `2026-jan-14-artist-name-venue-name`)
- **Embeddable Widget**: Single-script integration for any website with semantic HTML and `.nuncio-*` CSS classes
- **Export Formats**: 
  - JSON-LD (Schema.org)
  - iCal calendar feed
  - RSS feed
- **Media Delivery**: Image uploads via S3 with CloudFront CDN distribution

### Analytics

- **View Tracking**: Event view metrics across embedded widgets and public pages
- **Cross-Platform Measurement**: Unified analytics for all distribution channels

## Data Architecture

The platform operates on four primary data models:

- **EventList**: User-owned collections with privacy and sharing configuration
- **EventListItem**: Junction records linking events to lists with ordering
- **NuncioEvent**: User-created events with full ownership by the creating user
- **Event**: Read-only references to published events in the Knokr database

Additional metadata entities (Artist, Venue, Festival) provide relational context from the Knokr database.

## Technical Stack

### Application Framework

- **Next.js 16.1**: App Router architecture
- **TypeScript 5**: Strict mode enabled throughout codebase
- **Node.js 18+**: Minimum runtime requirement

### Frontend

- **UI Framework**: HeroUI 2.8 component library
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Validation**: Zod 4 schema validation

### Backend

- **Database**: PostgreSQL with Prisma 6.18 ORM
- **Authentication**: Clerk (including webhook integration)
- **Queue Management**: BullMQ with Redis (ioredis client)
- **AI Integration**: Anthropic SDK for Claude API

### Infrastructure

- **Storage**: AWS S3 for images
- **CDN**: CloudFront for media delivery
- **Testing**: Vitest 4 with Testing Library

### API Architecture

RESTful API with the following endpoint groups:

- **Lists**: CRUD operations, item management, search, reordering
- **Events**: Knokr search, user event CRUD, Knokr-to-user event copying
- **Import**: CSV parsing, image extraction, AI location suggestions
- **Public**: CORS-enabled data access, export format generation
- **Analytics**: View event tracking

## Integration

### Website Embedding

Lists can be embedded using a single script tag:

```html
<div data-nuncio-list="list-slug"></div>
<script src="https://nuncio.app/widget.js" data-api="https://nuncio.app"></script>
```

Multiple lists are supported on a single page. The widget renders semantic HTML with namespace-prefixed classes for custom styling.

### Public Access

Three public URL patterns provide direct access:

- `/l/[list-slug]` — List page
- `/e/[username]/[list-slug]/[event-slug]` — Event detail page
- `/docs` — Platform documentation

## Requirements

### Development Environment

- Node.js 18 or higher
- PostgreSQL database instance
- Redis instance (for queue management)
- Clerk account (authentication)
- AWS S3 bucket (image storage)
- AWS CloudFront distribution (CDN)

### Environment Configuration

Required environment variables include database connection strings, Clerk API keys, AWS credentials, and application URLs. Full configuration details are documented in the repository.

## Target Users

- **Artists and Artist Teams**: Promote tours and events without platform verification requirements
- **Venue Promoters**: Curate location-specific or genre-specific event calendars
- **Festival Organizers**: Create and distribute festival lineups and schedules
- **Music Fans and Community Curators**: Build and share themed event collections by artist, location, or genre

## License

Private
