import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Build target: "staging" (GitHub Pages, default) or "production" (scamhelp.net).
// Production build: DEPLOY_TARGET=production npm run build
const target = process.env.DEPLOY_TARGET === 'production' ? 'production' : 'staging';
const isProduction = target === 'production';
const basePath = isProduction ? '' : '/ScamHelp';

export default defineConfig({
  site: isProduction ? 'https://scamhelp.net' : 'https://alexralea.github.io',
  base: isProduction ? '/' : '/ScamHelp',
  integrations: [sitemap()],
  // Renamed service pages. On a static host these are HTML redirects;
  // configure matching 301 rules on the production server/CDN (see REDIRECTS.md).
  redirects: {
    '/services/fund-recovery': `${basePath}/services/payment-dispute-support/`,
    '/services/crypto-investigation': `${basePath}/services/crypto-fraud-investigation/`,
    '/services/dispute-resolution': `${basePath}/services/complaint-support/`,
  },
  vite: {
    plugins: [tailwindcss()],
    define: {
      'import.meta.env.DEPLOY_TARGET': JSON.stringify(target),
    },
    build: {
      chunkSizeWarningLimit: 700,
    },
  },
});
