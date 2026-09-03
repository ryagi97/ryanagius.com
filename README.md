# ryanagius.com

Source for [ryanagius.com](https://ryanagius.com), Ryan Agius's personal site.

The site is built with Astro and TypeScript, generated as static files, and deployed to Cloudflare Workers Static Assets. It is based on [Astro Wanderer](https://github.com/igagansingh/astro-wanderer) at upstream commit [`06415fa`](https://github.com/igagansingh/astro-wanderer/commit/06415fa918a5af526303a8e459f41a2d4a5c5058).

## Local development

Requires Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

Before pushing:

```sh
npm run check
npm run build
```

See [`docs/deployment.md`](docs/deployment.md) for the Cloudflare pipeline and initial account setup.
