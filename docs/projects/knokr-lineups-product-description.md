# Knokr Lineups Product Description

## Overview

Knokr Lineups is a unified festival discovery and lineup management platform that consolidates festival information into a single searchable interface. Built as an evolution from a Python-based poster extraction tool, the platform enables users to browse festivals by location, genre, and artist—eliminating the need to visit dozens of individual festival websites to make informed purchasing decisions.

The platform serves dual audiences: festival attendees seeking comprehensive lineup information and festival organizers requiring up-to-date data management. Knokr Lineups operates as the data acquisition and public-facing layer for the broader Knokr festival ecosystem, feeding the mobile festival application currently in development.

## Purpose

Knokr Lineups addresses three strategic objectives:

1. **Centralized Festival Information**: Replace the fragmented experience of visiting individual festival websites with a unified platform providing real-time lineup data, artist relationships, and festival comparisons. Users access comprehensive festival information—lineups, dates, locations, genres—through a single interface with advanced search and filtering.

2. **Rapid Data Acquisition**: Leverage AI-powered lineup extraction from festival posters to populate the database at scale. The extraction tool identifies artists, builds festival lineups, and derives genre information from artist self-reporting—enabling near real-time data updates that would be infeasible to maintain manually across hundreds of festivals with 100+ artists each.

3. **Decision Support**: Provide festival comparison and recommendation tools to help users navigate purchasing decisions constrained by budget, time, and artist availability. The AI decision engine cuts through marketing hype to deliver personalized recommendations based on user preferences, festival characteristics, and lineup composition.

### Competitive Differentiation

Unlike listing services such as Music Festival Wizard, Knokr Lineups provides deeper data relationships—artist connections, festival similarities, genre analysis, and recommendation intelligence. The platform's extraction capabilities and unified data model enable rapid updates across the entire festival database, maintaining accuracy without manual intervention. Once the mobile application launches, users will access all festival information through a single ecosystem rather than maintaining bookmarks across dozens of festival websites.

## Core Functionality

### Festival Discovery

- **Browse and Search**: Filter festivals by location, genre, artist, and dates
- **Semantic Search**: Vector embedding-based search (all-MiniLM-L6-v2) for natural language queries
- **Full-Text Search**: PostgreSQL tsvector indexing for precise text matching
- **Festival Detail Pages**: Comprehensive lineup information with artist profiles, dates, locations, and genres
- **Artist Navigation**: A-Z alphabetical browsing with pagination across the database

### AI-Powered Lineup Extraction

- **Poster Upload**: Extract artist names from festival poster images using Claude Vision API
- **Artist Matching**: Automatically match extracted names to existing database records
- **Genre Discovery**: Derive genre information from artist self-reporting and existing metadata
- **Lineup Assembly**: Build complete festival lineups from extracted data
- **Database Enrichment**: Add new artists and festival data in near real-time

The extraction tool serves as the primary data acquisition method, enabling rapid population and updates across festivals with 100+ artists—a scale that would require prohibitive manual effort.

### Dream Lineup Builder

- **Custom Festival Creation**: Build hypothetical festivals with names, descriptions, genres, and locations
- **Artist Search and Selection**: Add artists from the Knokr database to custom lineups
- **Lineup Organization**: Drag-and-drop reordering with billing assignments (headliner, main, support, opener)
- **Stage and Schedule Management**: Assign artists to performance days and stages
- **Multiple Views**: List, schedule, and poster display modes
- **Poster Export**: Generate PNG exports of custom lineup posters
- **Public Sharing**: Publish dream lineups via unique URLs

The dream lineup feature currently operates as an experimental comparison tool, allowing users to evaluate festival configurations and make informed purchasing decisions.

### AI Decision Engine

- **Conversational Interface**: Claude-powered chat for festival recommendations
- **Preference Analysis**: Budget, location, genre, and artist preference consideration
- **Festival Comparison**: Multi-festival trade-off analysis and ranking
- **Personalized Recommendations**: Intelligent matching based on user constraints and priorities

The decision engine addresses the purchasing complexity introduced by limited budgets, time constraints, and marketing hype—providing objective analysis to support festival selection.

### Artist Contribution System

- **Community Corrections**: Submit artist data improvements and additions
- **Admin Review Workflow**: Multi-stage approval process for community contributions
- **Database Enrichment**: Validated contributions integrated into the Knokr database

## Data Architecture

Knokr Lineups operates on a shared PostgreSQL database with the knokr-base application, utilizing pgvector extension for semantic search capabilities. The `searchable_items` table provides unified search across entities with:

- **Content Fields**: Title, description, genres
- **Search Indexes**: tsvector for full-text search, vector embeddings for semantic matching
- **Relationships**: Artist-festival connections, genre associations, lineup metadata

Data flows bidirectionally:

- **Inbound**: Lineup extraction populates festival and artist records
- **Outbound**: Festival data feeds the mobile application and public discovery features

The shared database architecture ensures consistency across the Knokr ecosystem while enabling specialized interfaces for different user needs.

## Strategic Value

### For Festival Attendees

- **Unified Discovery**: Single platform replacing dozens of individual festival websites
- **Informed Decisions**: Comprehensive lineup data, artist relationships, and genre analysis
- **Comparison Tools**: Dream lineup builder and AI decision engine for evaluating options
- **Real-Time Updates**: Near real-time lineup changes through automated extraction

### For Festival Organizers

- **Data Management**: Centralized platform for lineup information with extraction capabilities
- **Audience Reach**: Public-facing pages providing festival visibility
- **Analytics Foundation**: Usage data and search patterns informing promotional strategies

### For Knokr Ecosystem

- **Mobile App Foundation**: Festival data layer for the mobile application in development
- **Data Acquisition**: Automated extraction maintaining database freshness at scale
- **User Engagement**: Public discovery features building awareness and adoption
- **Intelligence Layer**: Genre insights and artist relationships from self-reported data

## Technical Stack

### Application Framework

- **Next.js 16**: App Router architecture with React 19
- **TypeScript**: Type-safe development environment
- **Node.js 18+**: Minimum runtime requirement

### Frontend

- **UI Components**: HeroUI (formerly NextUI)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Drag & Drop**: @dnd-kit for lineup reordering
- **Image Export**: html-to-image for poster generation

### Backend

- **Database**: PostgreSQL with pgvector extension (shared with knokr-base)
- **ORM**: Prisma 6
- **Caching**: Redis for performance optimization
- **Authentication**: Clerk
- **Storage**: AWS S3 for image uploads

### AI and Machine Learning

- **LLM**: Anthropic Claude API (chat, vision, recommendations)
- **Embeddings**: @xenova/transformers (all-MiniLM-L6-v2 model)
- **Search**: Hybrid vector similarity and full-text search

### Utilities

- **Form Management**: React Hook Form with Zod validation
- **Date Handling**: date-fns

### Infrastructure

- **Hosting**: Railway
- **CDN**: AWS CloudFront (via shared knokr-base infrastructure)

## API Architecture

RESTful endpoints organized by functional area:

- **Artists**: Search, filtering, and detail retrieval
- **Festivals**: Browse, search, comparison, and public pages
- **User Festivals**: Dream lineup CRUD operations
- **Chat**: AI decision engine conversation interface
- **Extract**: Lineup extraction from poster images
- **Contributions**: Artist data submission and admin review

## Development Evolution

Knokr Lineups originated as a Python-based application focused on extracting festival lineups from posters into CSV and JSON formats. The Python implementation became limiting as requirements expanded to include:

- Interactive lineup building
- Festival recommendation intelligence
- Public-facing discovery features
- Integration with mobile application development

Migration to Next.js and React enabled:

- **Rich Interactions**: Drag-and-drop lineup management, poster generation
- **AI Integration**: Claude-powered extraction and decision engine
- **Scalable Architecture**: Shared database with knokr-base, Redis caching
- **Modern UI**: Component-based design system with HeroUI

The platform now serves as both production data acquisition tool and public-facing festival discovery interface.

## Requirements

### Development Environment

- Node.js 18 or higher
- PostgreSQL database with pgvector extension (shared with knokr-base)
- Redis instance (caching)
- Clerk account (authentication)
- AWS S3 bucket (image storage)
- Anthropic API key (AI features)

### Environment Configuration

Required environment variables include database connection strings, Clerk API keys, AWS credentials, Anthropic API key, and Redis connection URL. Full configuration details are documented in the repository.

## Target Users

### Primary Audiences

- **Festival Attendees**: Music fans seeking comprehensive festival information to make informed purchasing decisions
- **Festival Organizers**: Event managers requiring up-to-date lineup data management and public visibility

### Secondary Audiences

- **Mobile App Users**: Future users of the Knokr mobile festival application
- **Music Community**: Contributors improving artist data through the contribution system

## Strategic Role

Knokr Lineups functions as the data acquisition engine and public discovery layer for the Knokr festival ecosystem. By consolidating festival information into a unified platform with automated extraction capabilities, it enables:

- **Database Growth**: Rapid population and maintenance of festival data at scale
- **User Acquisition**: Public-facing features building awareness before mobile app launch
- **Decision Intelligence**: AI-powered tools differentiating Knokr from listing-service competitors
- **Ecosystem Foundation**: Shared database supporting multiple applications and interfaces

The platform eliminates the fragmented user experience of visiting individual festival websites while providing the data infrastructure necessary for the mobile application in development.

## License

Private - Knokr
