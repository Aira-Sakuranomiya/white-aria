# Repository Guidelines

## Project Structure & Module Organization

White Aria is a personal homepage and blog built with Nuxt 4, Vue, TypeScript, and SCSS.

- `app/pages/` defines routes, including `/`, `/links`, and `/blog/[slug]`.
- `app/components/` groups components into `Home/`, `Blog/`, `DXTransition/`, and Markdown components in `content/`.
- `app/layouts/default.vue` defines the layout; `app/app.vue` is the entry point.
- `app/assets/` holds SVG logo icons and shared SCSS mixins.
- `content/posts/` stores Markdown posts; `public/` holds directly served assets, including blog images in `public/blog/`.
- `nuxt.config.ts` configures the app. `server/` currently contains only TypeScript configuration.

## Build, Test, and Development Commands

Use Bun; retain `bun.lock` for dependency updates.

- `bun install`: install dependencies and run `nuxt prepare`.
- `bun run dev`: start development at `http://localhost:3001`.
- `bun run build`: create a production build.
- `bun run preview`: preview the production build locally.
- `bun run generate`: generate static site output.
- `bunx eslint .`: check code and formatting with Antfu ESLint; add `--fix` for automatic fixes.

## Coding Style & Naming Conventions

Follow `.editorconfig`: two-space indentation, UTF-8, LF endings, and a final newline. Use `<script setup lang="ts">` and scoped SCSS where appropriate. TypeScript uses single quotes and no semicolons.

Use PascalCase components (`SectionTitle.vue`) and Nuxt route names (`index.vue`, `[slug].vue`). Preserve lowercase Markdown component names. Reuse globally injected mixins from `app/assets/styles/_mixins.scss`.

## Testing Guidelines

No automated test framework, test script, or coverage threshold is currently configured. Before submitting changes, run ESLint and a production build. Manually check affected routes, navigation, animations, responsive layouts, and light/dark appearance. For blog changes, verify Markdown rendering and image paths.

## Commit & Pull Request Guidelines

Use short imperative commit subjects, following history: `Update dependencies`, `Fix links anim`.

PRs should explain changes, link issues, and list validation. Include screenshots or recordings for visual changes. Exclude `.nuxt/`, `.output/`, and `node_modules/`.

## AI Assistance & Nuxt Documentation

- Prefer the official [Nuxt MCP server](https://nuxt.com/docs/4.x/guide/ai/mcp) at `https://nuxt.com/mcp` when connected. Discover pages with `list-documentation-pages` (version `4.x`), then retrieve relevant content with `get-documentation-page`.
- Without MCP, start with [llms.txt](https://nuxt.com/llms.txt) and fetch relevant linked pages. Use [llms-full.txt](https://nuxt.com/llms-full.txt) only when comprehensive context is necessary; it is very large. See the [official usage guide](https://nuxt.com/docs/4.x/guide/ai/llms-txt).
- Check `package.json` before applying examples: this repository uses Nuxt 4 and Nuxt Content 2. Confirm module compatibility separately. Report unavailable documentation access rather than claiming it was verified.
