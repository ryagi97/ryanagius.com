# ryanagius.com agent guide

## Purpose

This is Ryan Agius's personal home on the internet. It presents Computer Vision work alongside projects, photography, travel, cooking, hobbies, life events, and writing. Preserve a personal, editorial tone; do not turn it into a recruiter-focused portfolio.

The site starts from [Astro Wanderer](https://github.com/igagansingh/astro-wanderer) and should retain its restrained typography, whitespace, photography support, and static-first character while becoming distinctly Ryan's site.

## Current architecture

- Astro + TypeScript, statically generated to `dist/`.
- Markdown content uses Astro Content Collections under `src/content/`.
- Shared identity and social configuration lives in `src/data/site.ts`.
- Resume/skills data currently lives in `src/data/resume.ts`.
- Plain CSS and design tokens live in `src/styles/global.css`.
- Cloudflare Workers serves the static output; `wrangler.jsonc` is the deploy configuration.

See [README.md](README.md) for local setup and [docs/deployment.md](docs/deployment.md) for the production pipeline and account-side setup.

## Commands

- `npm ci` — install the locked dependency set.
- `npm run dev` — local Astro development server.
- `npm run check` — Astro/TypeScript diagnostics.
- `npm run build` — production static build.
- `npm run preview` — serve the built site locally.
- `npm run deploy` — build and deploy with Wrangler; use only when deployment is explicitly in scope.

Before handing off a meaningful change, run `npm run check` and `npm run build`. For visual or interaction changes, also inspect the relevant pages at narrow and wide viewports and test keyboard behavior.

## Working constraints

- Keep the architecture static-first and client JavaScript minimal. Do not add React, a CMS, database, API, Tailwind, or a UI library without a demonstrated need.
- Reuse Wanderer components when they fit; understand them before replacing them.
- Prefer semantic HTML, visible keyboard focus, useful alternative text, logical headings, and responsive layouts.
- Do not invent biography, employers, contact details, dates, or social URLs. Ask Ryan or leave the field absent.
- Do not expose confidential employer or client material. Professional case studies should describe general problems, constraints, patterns, and lessons.
- Version 1 is light-only. Keep dark-mode tokens maintainable, but do not re-enable a theme toggle.
- Every publishable item will have one primary section: Computer Vision, Projects, or Life. Posts and tags are aggregate views, not duplicated content.
- Do not proceed across a named milestone boundary unless Ryan confirms the preceding milestone.

## Repository knowledge

Keep this file concise. Put durable architectural, content-model, deployment, or product decisions in focused documents under `docs/`, then link them here. Encode mechanical invariants as checks or tests rather than relying on agents to remember prose. Create project Skills only after a workflow is repeated and stable.
