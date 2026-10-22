# Warongkon Blog V1.0

[warongkon-blog.vercel.app](https://warongkon-blog.vercel.app)

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

## 🚀 Deploy (Vercel)

- เว็บ deploy ผ่าน Vercel Git integration (โปรเจกต์ `warongkon-blog`) ทุกครั้งที่ push เข้า `main` จะขึ้น production อัตโนมัติ และ branch/PR อื่นจะได้ Preview URL
- Build: `pnpm run build` → output `dist/` (Vercel ตรวจเจอ Astro ให้เอง ไม่ต้องมี `vercel.json`)
- URL ของเว็บตั้งผ่าน env `SITE_URL` (ใช้กับ canonical, sitemap, RSS) ถ้าไม่ตั้งจะใช้ `https://warongkon-blog.vercel.app`
- GitHub Actions (`.github/workflows/ci.yml`) แค่ install + build เพื่อเช็กว่าโค้ดไม่พัง ไม่ได้ deploy
- เลิกใช้ Azure Static Web Apps และโดเมน warongkon.dev แล้ว
