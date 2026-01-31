# Copilot instructions for GiftyPaper

This repository is an Astro static site deployed to Cloudflare Workers. Use these notes to be productive quickly and make safe, minimal changes.

- **Big picture:** Astro site with content collections under src/content/blog; pages are in src/pages and server-rendered routes use Astro's content API. The site is built with the Cloudflare adapter (see astro.config.mjs) and deployed via Wrangler.

- **Key files:**
  - Content schema: [src/content.config.ts](src/content.config.ts#L1-L40)
  - Layout used for posts: [src/layouts/BlogPost.astro](src/layouts/BlogPost.astro#L1-L60)
  - Blog index and routing: [src/pages/blog/index.astro](src/pages/blog/index.astro#L1-L80) and [src/pages/blog/[...slug].astro](src/pages/blog/[...slug].astro#L1-L80)
  - Site constants: [src/consts.ts](src/consts.ts#L1-L20)
  - Build & deploy scripts: [package.json](package.json#L1-L120)

- **What to change where:**
  - Add or edit posts under src/content/blog/*.md or .mdx. Keep frontmatter matching the schema in src/content.config.ts (title, description, pubDate, optional updatedDate and heroImage). Dates are coercible — prefer ISO date strings.
  - The post id used in routes comes from the content collection entry id (file name). Links use `/blog/{post.id}/` as in src/pages/blog/index.astro.
  - Layouts expect post metadata as props (see BlogPost.astro which reads title, description, pubDate, heroImage).

- **Developer workflows / commands:**
  - Install: npm install
  - Dev server: npm run dev (runs `astro dev`)
  - Build: npm run build (astro build)
  - Preview (build + local preview): npm run preview
  - Deploy: npm run deploy (runs `wrangler deploy`)
  - Typegen for Wrangler: npm run cf-typegen (runs `wrangler types`)
  - Pre-deploy check: npm run check (runs build, tsc, and a wrangler dry-run)

- **Cloudflare specifics:** astro.config.mjs uses the Cloudflare adapter; wrangler is listed in devDependencies. Avoid changing the adapter or wrangler configuration unless updating deployment needs — adjust only with explicit intent and test with `npm run check` and `wrangler dev`.

- **Patterns & conventions:**
  - Content-driven: use astro:content getCollection and render APIs (see [src/pages/blog/[...slug].astro](src/pages/blog/[...slug].astro#L1-L80)).
  - Frontmatter schema is enforced via zod in src/content.config.ts; changing fields requires updating the schema and any consuming code (sorting, templates).
  - Images referenced in frontmatter (heroImage) are expected to be reachable paths (likely served from public/). Use absolute paths or add assets to public/.
  - Styling is local to components/pages via <style> blocks inside .astro files; follow existing patterns (Header/Footer embed styles in-place).

- **Testing & validation:**
  - Run `npm run build` and `npm run check` after content/schema changes.
  - Use `npm wrangler tail` to inspect logs on Cloudflare after deployment.

- **Safe change guidance for AI agents:**
  - Prefer small, focused PRs: change a single page, component, or content file per commit.
  - Never modify deployment credentials or the wrangler.toml (not included here) without human approval.
  - When editing content schema, update src/content.config.ts, then run `npm run check` and fix any TypeScript or content errors.

If anything here is unclear or you want me to expand a section (e.g., examples of frontmatter entries or the deploy checklist), tell me which part to iterate on.
