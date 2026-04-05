# Connections Plus

**Daily Word Puzzle Game with Multi-Level Progression**

**Visit Site:** https://connections-plus.jayfallon.net

**Hero Image:** https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/connections/connections-lg.webp

## The Problem

NYT Connections is a great daily puzzle, but it's a single-level experience — four groups, sixteen words, done. There's no escalation, no accumulating complexity, and no strategic depth beyond pattern recognition within a flat grid. I wanted to build something that rewards sustained attention across multiple rounds, where early decisions carry consequences into later levels.

## What I Built

Connections Plus is a daily word puzzle game that reimagines NYT Connections with a multi-level progression system. Players work through four increasingly challenging levels (Easy, Medium, Hard, Final), but with a strategic twist: "red herring" words intentionally placed for misdirection carry forward and accumulate across levels, building layers of complexity as players progress.

The game ships with a full admin interface for AI-assisted puzzle creation, a calendar-based content scheduling system, and anonymous player progress tracking — all backed by Redis on Railway.

### The Red Herring Mechanic

- Level 1: 17 words (16 regular + 1 red herring)
- Level 2: 18 words (16 regular + 2 accumulated red herrings)
- Level 3: 19 words (16 regular + 3 accumulated red herrings)
- Level 4: 16 words (12 regular + 4 red herrings revealed as the final "Double Meanings" group)

Red herrings from early levels might actually belong to groups in later levels, creating misdirection and "aha!" moments that culminate in the Level 4 reveal.

## Key Technical Decisions

### Redis as Primary Data Store

The entire application runs on Redis — no SQL database. Game data, puzzle content, player progress, and scheduling all live in Redis on Railway. This keeps the architecture simple and fast (sub-second load times) for a use case that's fundamentally key-value: daily puzzles keyed by date, player progress keyed by anonymous ID.

### AI-Assisted Puzzle Creation

The admin panel integrates Claude API for word generation, but with a red-herring-first workflow — the strategic misdirection words are designed before the regular groups, ensuring the game's core mechanic isn't an afterthought. A live preview system lets the creator validate puzzle quality before publishing.

### Anonymous Player Tracking

Players are tracked via localStorage + cookies with no personal data collection. The system enforces daily play limits (one puzzle per day), persists progress across browser sessions, and tracks mistake counts for performance ratings — all without accounts or sign-up.

### Dynamic Grid Layouts

The word grid handles variable counts (17-19 words across levels) with a responsive layout that works on all screen sizes. This required solving grid reflow for non-standard counts while keeping the UI clean and touch-friendly on mobile.

### Calendar-Based Content Scheduling

A monthly calendar view with a HeroUI DatePicker lets the admin schedule puzzles in advance, see published vs. unpublished dates at a glance, and manage content with full CRUD operations. Games are tied to UTC midnight cutoffs for consistent daily rotation.

## Architecture

Built on Next.js 16 with React 19, TypeScript, HeroUI component library, Tailwind CSS, and Framer Motion for animations. Redis on Railway serves as the sole data store. Admin panel secured with basic authentication. Deployed to Railway.

## What I Learned

Building a game with accumulating state across levels is a different kind of state management problem than typical CRUD apps. The red herring mechanic means every level's word set depends on decisions made in earlier levels — puzzle creation is inherently sequential and constrained. The AI-assisted workflow helps generate candidates, but the strategic design still requires human judgment to ensure the misdirection actually works.

## Technology Stack

Next.js 16, React 19, TypeScript, Redis, HeroUI, Tailwind CSS, Claude AI API, Framer Motion, Railway
