# Connections Plus

**A Daily Word Puzzle Game**

**Visit Site:** https://connections-plus.jayfallon.net

**Hero Image:** https://jf-portfolio-2025.s3.us-east-1.amazonaws.com/connections/connections-homescreen.png

## What I Built

A daily word puzzle game that riffs on NYT Connections with a twist: 17 words per level instead of 16, with the extra word being a "red herring" that carries forward and accumulates across four increasingly difficult levels. By Level 4, the four accumulated red herrings form their own final group — "Double Meanings" — creating layers of misdirection that build as you play.

The full-stack application includes the game itself, an admin panel for puzzle creation with Claude API integration for generating word groups, a calendar-based content scheduling system for daily puzzle releases, and anonymous player tracking with daily play limits — all backed by Redis on Railway.

## Key Technical Decisions

### Red Herring Progression System

The core game mechanic required careful state management. Each level has 16 grouped words plus accumulated red herrings from prior levels — 17 words in Level 1, 18 in Level 2, 19 in Level 3. Level 4 drops back to 16 words with the four red herrings forming the final group. Game configs and player progress are stored in Redis with date-keyed and player-keyed patterns.

### Puzzle Creation with AI Assistance

The admin panel uses Claude API to generate word groups from category descriptions. The workflow is red-herring-first: you create the four red herring words that form the final "Double Meanings" group, then build out the four levels around them, assigning one red herring to each of the first three levels. This inverted design process ensures the misdirection is intentional, not an afterthought.

### Anonymous Player Tracking

No login, no personal data. Players get a persistent ID via localStorage with cookie backup. Daily play limits reset at UTC midnight. No accounts, no friction — just play.

### Content Scheduling

A calendar-based admin view for managing puzzle inventory across months. Each puzzle is keyed by date in Redis, with the admin interface showing which days have puzzles scheduled, monthly counts, and gaps that need filling. Puzzles go live automatically at their scheduled date.

## Technology Stack

Next.js 16, React 19, TypeScript, Redis (Railway), HeroUI, Tailwind CSS 4, Framer Motion, Lucide React, Claude AI API, Turbopack
