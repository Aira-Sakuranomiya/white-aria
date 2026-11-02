# White Aria

Aira's Home Page

## Setup

Make sure to install the dependencies:

```bash
bun install
```

## Blog Content

Blog posts live in `content/posts/` and are registered in the `posts` collection
in `content.config.ts`. Each post needs a `title`, a string `slug`, and a date
in `YYYY/MM/DD` format. The slug determines its `/blog/:slug` URL.

Nuxt Content 3 generates a local SQLite database in `.data/` from Markdown.
This directory is ignored by Git; no external database service is needed.
Node uses `better-sqlite3`, while the Bun runtime uses its built-in SQLite.
Vercel's database location is configured automatically by Nuxt Content.

## Development Server

Start the development server on `http://localhost:3001`:

```bash
bun run dev
```

## Production

Build the application for production:

```bash
bun run build
```

Locally preview production build:

```bash
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
