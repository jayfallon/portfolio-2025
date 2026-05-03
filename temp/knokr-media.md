# Knokr Media

Photo and video albums linked to Knokr's existing entities (artists,
festivals, venues, cities). Standalone Next.js app sharing the
production Postgres + Clerk + S3 with `knokr-base` and `knokr-lineups`
so it can be deployed and tested in isolation on Railway, then
integrated into the main apps once stable.

## Functionality

### Pages

| Route                     | Purpose                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                       | Top 20 rated albums (own row, "View more" beneath the grid) + Unrated albums grid + homepage search input that submits to `/search?q=`                                                                                                                                                                                                                                        |
| `/albums`                 | All published albums, 24/page                                                                                                                                                                                                                                                                                                                                                 |
| `/albums/top`             | Top rated albums, 24/page paginated                                                                                                                                                                                                                                                                                                                                           |
| `/albums/unrated`         | Unrated albums, 24/page paginated                                                                                                                                                                                                                                                                                                                                             |
| `/albums/new`             | Create album (entity link picker + title + description)                                                                                                                                                                                                                                                                                                                       |
| `/albums/[slug]`          | Album detail: items grid, rate slider, set cover, report album, per-item report                                                                                                                                                                                                                                                                                               |
| `/albums/[slug]/edit`     | Edit metadata + manage contributors                                                                                                                                                                                                                                                                                                                                           |
| `/albums/[slug]/upload`   | Inline golden-ratio cropper + multi-file upload, with "Don't upload" rules card                                                                                                                                                                                                                                                                                               |
| `/items/[id]`             | Full-size viewer (forced `aspect-[1/0.618]`): circular ArrowBigLeft/Right overlay nav with directional slide animation (`?dir=next/prev`), cross-album hop with wrap-around, three-row metadata under the image (Row 1: caption + Like / Save-to-album buttons; Row 2: album title link; Row 3: uploader avatar + username + date + Report), "More like this" CLIP grid below |
| `/library`                | Your created + contributing albums                                                                                                                                                                                                                                                                                                                                            |
| `/library/favorites`      | Items you've liked, newest-liked-first, 4-up grid (every tile `aspect-[1/0.618]`)                                                                                                                                                                                                                                                                                             |
| `/library/collabs`        | People who've contributed items to your albums; 4-up grid (every tile `aspect-[1/0.618]`), Latest / Most sort tabs (default Latest), 24/page                                                                                                                                                                                                                                  |
| `/u/[username]`           | Public profile + that user's published albums                                                                                                                                                                                                                                                                                                                                 |
| `/admin/flags`            | SUPER_ADMIN/ADMIN flag review queue (uphold → block item / hide album, dismiss)                                                                                                                                                                                                                                                                                               |
| `/admin/media/embeddings` | SUPER_ADMIN/ADMIN CLIP pipeline smoke test: queue stats, upload, status/quality/NSFW/dup chips, find-similar probe, re-embed                                                                                                                                                                                                                                                  |
| `/search`                 | Public CLIP text search across approved photos. Same input is also rendered at the top of `/`.                                                                                                                                                                                                                                                                                |
| _404_                     | `app/not-found.tsx` — Top rated albums + Newest albums (deduped) as suggestions, back-to-home button                                                                                                                                                                                                                                                                          |

### API

| Method | Path                                        | Notes                                                                                                                                                                                                                                                                                                                                                                                              |
| ------ | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | `/api/albums`                               | List albums; `sort=top\|new`, `linkType`, `linkedEntityId`, `limit` (1–50)                                                                                                                                                                                                                                                                                                                         |
| POST   | `/api/albums`                               | Create album (creator + non-banned only)                                                                                                                                                                                                                                                                                                                                                           |
| GET    | `/api/albums/[id]`                          | Detail with items, ratings rollup, contributors, `myRating`                                                                                                                                                                                                                                                                                                                                        |
| PATCH  | `/api/albums/[id]`                          | Update title / description / status / coverItemId; creator + admin only                                                                                                                                                                                                                                                                                                                            |
| DELETE | `/api/albums/[id]`                          | Delete album; creator + admin only                                                                                                                                                                                                                                                                                                                                                                 |
| GET    | `/api/albums/[id]/contributors`             | List contributors                                                                                                                                                                                                                                                                                                                                                                                  |
| POST   | `/api/albums/[id]/contributors`             | Add a contributor by `profileId` (creator + admin only)                                                                                                                                                                                                                                                                                                                                            |
| DELETE | `/api/albums/[id]/contributors/[profileId]` | Remove a contributor (creator + admin only)                                                                                                                                                                                                                                                                                                                                                        |
| POST   | `/api/albums/[id]/items`                    | Register an uploaded item (after S3 PUT)                                                                                                                                                                                                                                                                                                                                                           |
| PATCH  | `/api/albums/[id]/items/[itemId]`           | Edit caption / order                                                                                                                                                                                                                                                                                                                                                                               |
| DELETE | `/api/albums/[id]/items/[itemId]`           | Delete item + S3 object (uploader / creator / admin)                                                                                                                                                                                                                                                                                                                                               |
| POST   | `/api/albums/[id]/items/[itemId]/block`     | SUPER_ADMIN: block media item                                                                                                                                                                                                                                                                                                                                                                      |
| POST   | `/api/albums/[id]/items/[itemId]/unblock`   | SUPER_ADMIN: unblock media item                                                                                                                                                                                                                                                                                                                                                                    |
| POST   | `/api/ratings/album/[id]`                   | Upsert score 0–100                                                                                                                                                                                                                                                                                                                                                                                 |
| DELETE | `/api/ratings/album/[id]`                   | Remove your rating                                                                                                                                                                                                                                                                                                                                                                                 |
| POST   | `/api/flags`                                | `{ targetType, targetId, reason, notes? }` — banned users can flag                                                                                                                                                                                                                                                                                                                                 |
| POST   | `/api/admin/flags/[id]/review`              | Uphold / dismiss + optional applyAction (block item / hide album)                                                                                                                                                                                                                                                                                                                                  |
| GET    | `/api/admin/media/embeddings/[id]/similar`  | Top 5 nearest neighbors in same album by CLIP cosine distance                                                                                                                                                                                                                                                                                                                                      |
| POST   | `/api/admin/media/embeddings/[id]/reembed`  | Reset to PENDING + enqueue an embedding job                                                                                                                                                                                                                                                                                                                                                        |
| GET    | `/api/search/media?q=<text>`                | Public CLIP text search; filters to approved + published; ordered by cosine distance against the HNSW index on `MediaItem.embedding`                                                                                                                                                                                                                                                               |
| GET    | `/api/items/[id]/similar`                   | Public "More like this" — top N items closest to the source by HNSW cosine, filtered to APPROVED + PUBLISHED, never the source itself; returns empty when source isn't `embeddingStatus = READY`. `?limit=` clamped to 30 (default 12)                                                                                                                                                             |
| POST   | `/api/items/[id]/like`                      | Idempotent like; returns `{ liked: true, count }`                                                                                                                                                                                                                                                                                                                                                  |
| DELETE | `/api/items/[id]/like`                      | Idempotent unlike; returns `{ liked: false, count }`                                                                                                                                                                                                                                                                                                                                               |
| POST   | `/api/items/[id]/share-to`                  | `{ albumId }` — Save-to-album: creates a new MediaItem row in the target that re-uses the same s3Key (no S3 copy), preserving original uploader. Returns `{ alreadyExists: true }` when the same s3Key is already in the target. Authorization: caller must be able to contribute to the target. PHOTO clones get re-enqueued for embedding so dup detection runs against the new album's siblings |
| GET    | `/api/albums/mine`                          | Caller's contributable albums (created + invited), deduped, role: creator/contributor; excludes albums the caller is blocked from                                                                                                                                                                                                                                                                  |
| POST   | `/api/uploads/presign`                      | S3 PUT URL + final key (PHOTO: jpeg/png/webp, VIDEO: mp4/mov/webm, ≤200 MB)                                                                                                                                                                                                                                                                                                                        |
| GET    | `/api/entities/search`                      | Artist / Festival / Venue / City picker                                                                                                                                                                                                                                                                                                                                                            |
| GET    | `/api/users/search`                         | Contributor picker (active + non-banned only)                                                                                                                                                                                                                                                                                                                                                      |

### Auth + permissions

- Clerk sign-in.
- JIT Profile creation by `clerkId` then by email match (links to existing
  base/lineups Profile without overwriting `clerkId`).
- `MediaLibrary` auto-provisioned on every `getCurrentProfile()` call.
- `Profile.imageUrl` is **synced from Clerk on every request**, so a
  GitHub avatar set in Clerk replaces the default initials immediately.
- Banned users (`Profile.isBanned`) cannot create / contribute / rate /
  tag, but can still browse and flag abuse.
- Role gates: `SUPER_ADMIN` only blocks/unblocks items and bans users;
  `ADMIN` and above can review flags and edit/hide any album.

### Rating aggregation

- `MediaAlbum` carries denormalized `ratingAvg` (Float) and
  `ratingCount` (Int) columns, indexed `(ratingAvg DESC, ratingCount
DESC)`.
- `POST` / `DELETE /api/ratings/album/[id]` recompute the rollup off
  `MediaAlbumRating` and write it back to the album row in the same
  request, so reads never have to.
- The home query (`getTopRatedAlbums`) is a single
  `ORDER BY ratingAvg DESC, ratingCount DESC LIMIT 20` against the
  index — no `groupBy`, no per-request aggregation, constant-time at
  any rating volume.
- Unrated and all-albums lists read the same denormalized columns;
  `MediaAlbumRating` is only touched on writes and on per-album
  detail (`myRating` lookup).

### Media handling

- S3 path: `media/{userId}/{photos|videos}/{itemId}.{ext}` via presigned PUT.
- Photos cropped client-side to the golden ratio (1:0.618 landscape)
  before upload. JPG / PNG / WEBP only.
- Video upload: MP4 / MOV / WEBM, 200 MB cap, native player with
  `controlsList="nodownload"` + `disablePictureInPicture`.
- Cover image: explicit `coverItemId` or fallback to first item.
- Anti-grab: right-click and drag disabled on full-size images.
- Cards and tiles pin cover to `object-top` so faces don't get cropped
  off the bottom.

### CLIP image embedding pipeline

Every uploaded photo gets a 512-dim CLIP embedding plus quality, NSFW,
moderation, and near-duplicate scores. The same vectors are then
queried by the `/search` page at request time — text queries get
encoded by the worker's CLIP text tower, image queries (admin only,
via `/admin/media/embeddings`) get cosine-searched against the HNSW
index.

- **Schema** — `MediaItem` extended with `embedding vector(512)`,
  `embeddingStatus` (`PENDING/PROCESSING/READY/FAILED`),
  `embeddingError`, `embeddedAt`, `qualityScore`, `nsfwScore`,
  `moderationStatus` (`PENDING/APPROVED/FLAGGED/REJECTED`),
  `moderationFlags` (raw classifier outputs), `nearDuplicateOfId`
  (self-FK). `MediaLinkType` gains `EVENT`. HNSW index
  (`vector_cosine_ops`) on `embedding` for similarity search.
- **Producer** — `POST /api/albums/[id]/items` enqueues a job per
  `PHOTO` register; `VIDEO` is skipped. Producer + queue helpers live
  at `lib/queue/media-embedding-queue.ts`.
- **Worker** (`workers/media-embedding-worker/`) — separate Railway
  service in this repo, deployed via its own `Dockerfile` +
  `railway.toml`. Pure Node, no Next.js imports. PM2 supervises a
  single process (autorestart, 1 GB memory cap). At boot loads four
  things from `@xenova/transformers`: CLIP image-feature-extraction
  (`Xenova/clip-vit-base-patch32`) for stored embeddings,
  CLIPTextModelWithProjection + tokenizer (same model) for text
  search queries, zero-shot-image-classification for `qualityScore`,
  and `onnx-community/nsfw-classifier-ONNX` (5 classes:
  `drawings`/`hentai`/`neutral`/`porn`/`sexy`) for `nsfwScore`. The
  persisted score is `max(porn, hentai)`; `sexy` (swimwear, lingerie,
  artistic nudity) is intentionally excluded from the moderation
  gate so only actual pornography is rejected.
- **Per-job processing** — fetch S3 image, embed, score, query
  nearest neighbour in the same album for dup flag (cosine distance
  ≤ 0.05), decide moderation (`>0.7 → REJECTED`, `>0.3 → FLAGGED`,
  else `APPROVED`), single raw-SQL UPDATE with the vector cast.
  BullMQ retries on failure (`attempts: 3`, exponential backoff,
  `lockDuration: 120s`).
- **Synchronous text encoding** — `POST /encode-text` on the worker
  (Express health server) returns a 512-dim vector for the search
  route. Protected by `WORKER_TOKEN` shared with the web service.
- **Smoke test** — `/admin/media/embeddings` finds-or-creates a test
  album linked to an Event (`?eventId=…` or most recent published),
  uploads via the existing presign flow, and renders the worker
  outputs as chips. "Find similar" calls the `/similar` route to
  surface the top neighbours by cosine distance.
- **Backfill** — `npx tsx scripts/backfill-media-embeddings.ts`
  re-enqueues every `embeddingStatus = 'PENDING'` photo. Used once
  after the producer hook landed to embed seed data uploaded before
  the queue existed.

### Album contribution policy

Each `MediaAlbum` carries a `contributionPolicy` enum:

| Value                     | Who can post                                             |
| ------------------------- | -------------------------------------------------------- |
| `CLOSED`                  | Creator + admins only                                    |
| `INVITE_ONLY` _(default)_ | Creator + admins + explicit `MediaAlbumContributor` rows |
| `OPEN`                    | Any signed-in non-banned profile                         |

Set on the album edit page. NSFW + moderation pipeline still runs on
every uploaded photo regardless of policy, so open albums don't
weaken safety.

### knokr-base side patch

- `/admin/users` — Status chip (Active / Banned), Block/Unblock
  dropdown items (SUPER_ADMIN only, can't ban self or other
  SUPER_ADMINs), "View media library ↗" link to
  `NEXT_PUBLIC_KNOKR_MEDIA_URL/u/{username}`.
- `POST /api/admin/users/[id]/ban` — toggles `Profile.isBanned`.

## Stack

Next.js 16 / React 19 / TypeScript / Prisma 6 (own schema mirroring the
shared DB + new media tables) / HeroUI / Tailwind v4 / Clerk / AWS S3
(via `@aws-sdk/client-s3` + presign) / BullMQ + ioredis on the shared
Redis / `@xenova/transformers` for local CLIP + NSFW inference / pgvector
HNSW index / Railway deploy.

## Repo layout

```
app/                Next.js routes (App Router)
components/media/   Album / item / rating / flag UI
components/admin/   Flag review row
lib/
  db.ts             Prisma client
  permissions.ts    Auth + role + ban gates
  auth/             ensure-profile, ensure-library
  storage/s3.ts     Presign + key conventions
  queries/albums.ts Top / unrated / all album shaping
  queue/            BullMQ media-embedding queue (producer + helpers)
  search/           Worker client wrapper for /encode-text
  utils/            location, slug, image
  image/crop-utils  Golden-ratio crop helpers
workers/
  media-embedding-worker/  Standalone Node service. Own Dockerfile,
                           own package.json, deployed as a separate
                           Railway service in the same project.
prisma/
  schema.prisma     Mirror of the shared schema + media tables
scripts/            One-off seed + maintenance scripts
tests/              Vitest suite (see "Tests" below)
middleware.ts       Clerk
```

## Setup

```bash
cp .env.example .env.local
# fill in DATABASE_URL, Clerk keys, S3 keys, CloudFront URL
npm install
npx prisma generate --schema=prisma/schema.prisma
npm run dev
```

The CLIP embedding worker runs as a separate Railway service
(`workers/media-embedding-worker/`). It does not run in this dev
process. See that subfolder's README for local invocation if you
need to drive it from your terminal.

## Tests

Vitest + React Testing Library + jsdom on the web side; Vitest +
supertest on the worker side. Prisma, Clerk, AWS SDK, HeroUI
components, BullMQ, `@xenova/transformers`, and `react-image-crop`
are mocked per file. Server Components are exercised by `await`ing
the component and rendering its returned tree; client components
mock their HeroUI deps.

```bash
npm test           # web suite, single run
npm run test:watch # web suite, watch mode

cd workers/media-embedding-worker && npm test  # worker suite
```

**Coverage: 355 web tests across 64 files + 21 worker tests across 3 files = 376 total.**

### Web (`tests/`)

| Layer                                    | Files | What's covered                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tests/lib/utils/`                       | 3     | `formatLocation`, `slugify` / `slugWithSuffix`, `resolveImageUrl` (CDN + S3 + legacy fallback)                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `tests/lib/auth/`                        | 2     | `ensureMediaLibrary` upsert; `ensureUserProfile` JIT creation, email-match reuse, imageUrl sync                                                                                                                                                                                                                                                                                                                                                                                                                |
| `tests/lib/permissions.test.ts`          | 1     | `getCurrentProfile`, `requireProfile`, `canMutate`, `isSuperAdmin`, `isAdminOrAbove`, `canContributeToAlbum` (incl. OPEN / CLOSED / INVITE_ONLY policy branches)                                                                                                                                                                                                                                                                                                                                               |
| `tests/lib/storage/s3.test.ts`           | 1     | `mediaKey` formatting, `publicUrlFor` (CDN / bucket / fallback), `presignPut` expiry, `deleteMedia`                                                                                                                                                                                                                                                                                                                                                                                                            |
| `tests/lib/queries/albums.test.ts`       | 1     | `getAllAlbums`, `getUnratedAlbums`, `getTopRatedAlbums` shaping + ordering + pagination                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `tests/lib/image/crop-utils.test.ts`     | 1     | `GOLDEN_RATIO_ASPECT`, `initCrop`, `cropImageToFile` (canvas + toBlob)                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `tests/lib/search/worker-client.test.ts` | 1     | `encodeText` POSTs the right URL + token, strips trailing slashes, surfaces non-200 errors, throws when env vars are missing                                                                                                                                                                                                                                                                                                                                                                                   |
| `tests/api/`                             | 18    | Every API route: presign, flags, ratings, albums CRUD, contributors, items, items bulk delete, per-album blocks (block + unblock), block/unblock single item, admin flag review, entity + user search, `/api/search/media`, `/api/items/[id]/similar`, `/api/items/[id]/like`, `/api/items/[id]/share-to` (400, 404 source/target, 403 perm, alreadyExists, photo enqueue, video skip), `/api/albums/mine` (creator + contributor merge, dedupe, block filter)                                                 |
| `tests/components/`                      | 20    | AlbumCard, AlbumPagination, MediaTile, ProtectedMedia (anti-grab), CoverButton, RatingSlider, FlagModal, ContributorPicker, EntityLinkPicker, FlagReviewRow, ImageCropper, UploadPanel, HomeSearch, SearchResults, AlbumItemsGrid, AlbumOwnerActions, AlbumContributorRow, MoreLikeThis, LikeButton (initial state, signed-out disabled, optimistic POST/DELETE with server snap, error revert), ShareToAlbumModal (signed-out disabled, lazy album load, POST share with success/duplicate/error/empty paths) |
| `tests/pages/`                           | 10    | `/`, `/albums`, `/albums/top`, `/albums/unrated`, `/albums/[slug]`, `/albums/[slug]/edit`, `/albums/[slug]/upload`, `/albums/new`, `/items/[id]`, `/library`, `/u/[username]`, `/admin/flags`                                                                                                                                                                                                                                                                                                                  |

### Worker (`workers/media-embedding-worker/tests/`)

| File                      | What's covered                                                                                                                                                                                                                                                                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tests/embedder.test.ts`  | `loadModels` wires up CLIP image + text + quality + NSFW pipelines; `embedText` returns 512-dim L2-normalized vector via `CLIPTextModelWithProjection`; `embedImage` validates dim; `classifyQuality` softmax score; `classifyNsfw` returns `max(porn, hentai)` from the 5-class classifier                                                  |
| `tests/processor.test.ts` | Happy-path UPDATE with embedding cast + APPROVED; NSFW thresholds → REJECTED (porn ≥ 0.7) / FLAGGED (0.3–0.7) / APPROVED; high `sexy` score still APPROVED; `nearDuplicateOfId` set when cosine ≤ 0.05 and ignored above; VIDEO + blocked items short-circuit; missing item early return; failure flips status to FAILED + records the error |
| `tests/health.test.ts`    | `/encode-text` rejects missing or wrong `X-Worker-Token`, 400 on missing text, 200 with embedding when authorized, 500 when the embedder throws                                                                                                                                                                                              |

## Deploy

- Production: <https://media.knokr.com>
- Hosted on Railway, same Postgres + Clerk + S3 as base/lineups.

### One-time manual setup

Anything outside the repo that the code can't do for itself:

1. **Clerk** — add `https://media.knokr.com` to **User & Authentication →
   Origins** in the Clerk dashboard. Otherwise sign-in fails with a
   CORS-style error.
2. **Clerk OAuth** — enable GitHub (or any other social provider) under
   **User & Authentication → Social Connections** if you want users'
   real avatars to populate `Profile.imageUrl`.
3. **S3 CORS** — allow `PUT` (and `GET`) from `https://media.knokr.com`
   on the `takostan-amplify` bucket. Mirror the policy already in
   place for base/lineups direct uploads.
4. **knokr-base env** — set `NEXT_PUBLIC_KNOKR_MEDIA_URL` in Railway if
   the prod media domain ever differs from the default
   `https://media.knokr.com`. Skip locally — the default is fine.
5. **media-embedding-worker service** — separate Railway service in the
   same project. Source: this repo, branch `main`,
   Config-as-Code Path: `workers/media-embedding-worker/railway.toml`.
   Variables: `DATABASE_URL` and `REDIS_URL` referenced from the
   shared services, plus `WORKER_TOKEN` (any 32-byte hex string).
   Web service mirrors `MEDIA_EMBEDDING_WORKER_URL` (the worker's
   public Railway domain, `https://…up.railway.app`, no port) and
   `MEDIA_EMBEDDING_WORKER_TOKEN` (must equal the worker's
   `WORKER_TOKEN`).
