# Redirects (301) for production

The site is static. Astro generates HTML redirect pages for the old service URLs
(see `redirects` in `astro.config.mjs`), but search engines need real **301** redirects.
Configure these on the production host / CDN (e.g. Cloudflare → Rules → Redirect Rules,
status code 301, preserve query string):

| Old URL | New URL |
|---|---|
| https://scamhelp.net/services/fund-recovery/ | https://scamhelp.net/services/payment-dispute-support/ |
| https://scamhelp.net/services/crypto-investigation/ | https://scamhelp.net/services/crypto-fraud-investigation/ |
| https://scamhelp.net/services/dispute-resolution/ | https://scamhelp.net/services/complaint-support/ |
| https://scamhelp.net/services/crypto-tracing/ | no change |

Match both with and without the trailing slash.

## Build targets

- Staging (GitHub Pages, default): `npm run build` → base `/ScamHelp`, `noindex, nofollow`.
- Production (scamhelp.net): `DEPLOY_TARGET=production npm run build` → base `/`, `index, follow`,
  Google Tag Manager loaded only after cookie consent.

Canonical and `og:url` always point to `https://scamhelp.net`.
