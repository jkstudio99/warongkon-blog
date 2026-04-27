# Warongkon Blog V1.0

[warongkon.dev](https://warongkon.dev)

---

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support
- ✅ Post tags
- ✅ Projects
- ✅ Table of content

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
│   └── styles/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run backoffice`      | Starts local blog CRUD back office at `localhost:8787/backoffice/` |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## Blog Back Office

Run the local blog manager with:

```sh
pnpm run backoffice
```

Then open `http://localhost:8787/backoffice/`.

The back office reads and writes real files inside `src/content/blog/`.

- Dashboard: `http://localhost:8787/backoffice/`
- Create post: `http://localhost:8787/backoffice/create`
- Edit post: `http://localhost:8787/backoffice/edit?slug=your-post-slug`

The API is exposed under `/api/v1` and supports listing posts, getting stats, creating posts, editing frontmatter/body, replacing cover images, renaming slugs, and deleting post folders. Cover uploads are converted to `cover.jpg` at 960 x 480 to satisfy the Astro content schema.

## 👀 Want to learn more?

Check out [Astro documentation](https://docs.astro.build).
