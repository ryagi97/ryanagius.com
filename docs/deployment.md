# Deployment

## Current status (verified 2026-09-03)

- GitHub `main` contains commit `7ce2abb` with the Milestone 1 site.
- Cloudflare Worker `ryanagius-com` is deployed, and its `ryanagius.com` custom domain is active.
- The apex homepage returns `200` over HTTPS and contains the expected Ryan Agius build.
- An unknown path returns the generated custom page with HTTP status `404`.
- **Pending:** connect the Worker to the GitHub repository in Workers Builds and confirm a push-triggered deployment.
- **Pending:** create the proxied `www` DNS record and the permanent `www`-to-apex Redirect Rule.

## Pipeline

```text
local development
  → push to GitHub `main`
  → Cloudflare Workers Builds runs `npm ci` and `npm run build`
  → Wrangler publishes `dist/` as Workers Static Assets
  → `https://ryanagius.com`
```

Astro pre-renders the site to `dist/`. `wrangler.jsonc` declares that directory as the Worker's static assets, enables the generated `404.html`, and attaches the apex custom domain. No Astro Cloudflare adapter is needed because version 1 has no server-rendered routes.

The Worker name is `ryanagius-com`. Cloudflare requires the dashboard project name to match the `name` in `wrangler.jsonc` when Workers Builds is connected to a Git repository.

## One-time Cloudflare setup

The initial direct Wrangler deployment and apex custom domain are complete. The following account-side actions still require Ryan's authenticated Cloudflare dashboard session:

1. Open Worker `ryanagius-com`, then go to **Settings → Builds** and connect a Git repository.
2. Authorize the Cloudflare GitHub app for the private `ryagi97/ryanagius.com` repository.
3. Use production branch `main`, build command `npm run build`, and deploy command `npx wrangler deploy`.
4. Push a harmless commit to `main`, confirm Workers Builds deploys it successfully, and then remove the **Pending** status above.

## `www` to apex redirect

The `www` hostname is intentionally handled at Cloudflare's edge rather than in Astro:

1. Add a proxied `A` record for `www` pointing to the reserved placeholder `192.0.2.0`.
2. Add a Redirect Rule matching `https://www.ryanagius.com/*` with target `https://ryanagius.com/${1}`, status `301`, and query-string preservation enabled.
3. Verify a path and query both survive the redirect, for example `https://www.ryanagius.com/test?source=check`.

## Verification

After a production deployment, verify:

```sh
curl -I https://ryanagius.com
curl -I https://www.ryanagius.com/test?source=check
curl -I https://ryanagius.com/does-not-exist
```

Expected results: the apex returns `200`, `www` returns a permanent redirect to the same apex path/query, and the missing path returns the site's `404.html` with status `404`.

Do not commit Cloudflare API tokens. Cloudflare's Git integration supplies deployment credentials to its build environment.
