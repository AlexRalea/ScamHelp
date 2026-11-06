// Central site configuration.
//
// Two build targets:
//   - staging (default): https://alexralea.github.io/ScamHelp/  → noindex, nofollow
//   - production:        https://scamhelp.net/                  → index, follow
// Select production with: DEPLOY_TARGET=production npm run build
//
// Canonical and og:url always point to the production domain.

/** Base path without trailing slash: "" in production, "/ScamHelp" on staging. */
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Build an internal link that respects the base path, e.g. url('/fees/'). */
export const url = (path: string = '/') => `${BASE}${path.startsWith('/') ? path : `/${path}`}`;

export const IS_PRODUCTION = import.meta.env.DEPLOY_TARGET === 'production';

/** Production origin, used for canonical, og:url and structured data. */
export const SITE_URL = 'https://scamhelp.net';

/** Absolute production URL for a path, e.g. abs('/fees/'). */
export const abs = (path: string = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

/**
 * Google Tag Manager container (from the current scamhelp.net site).
 * Only loaded on production builds, and only after the visitor consents.
 */
export const GTM_ID = IS_PRODUCTION ? 'GTM-K3C85XS' : '';

export const COMPANY = {
  legalName: 'Transparent Business Solutions B.V.',
  tradeName: 'ScamHelp',
  kvk: '78091624',
  licence: 'POB 07373',
  street: 'Kalvermarkt 53',
  postalCode: '2511 CB',
  city: 'The Hague',
  country: 'Netherlands',
  email: 'support@scamhelp.net',
};

export const KVK_URL = 'https://www.kvk.nl/zoeken/?source=all&q=78091624';
export const JUSTIS_URL = 'https://www.justis.nl/registers/wpbr-register/transparent-business-solutions-bv';

export const PHONES = [
  { country: 'Netherlands', display: '+31 70 701 3260', tel: '+31707013260' },
  { country: 'United States', display: '+1 209 797 7714', tel: '+12097977714' },
  { country: 'United Kingdom', display: '+44 161 528 6799', tel: '+441615286799' },
  { country: 'Canada', display: '+1 647 689 7964', tel: '+16476897964' },
  { country: 'Australia', display: '+61 2 7252 2224', tel: '+61272522224' },
];

export const OUTCOMES_SENTENCE =
  'Outcomes vary by case and are not guaranteed. Success depends on factors including jurisdiction, the platform or institution involved, the age of the case, and the cooperation of third parties such as banks, exchanges and regulators.';

export const SERVICES = [
  { name: 'Payment Dispute Support', path: '/services/payment-dispute-support/' },
  { name: 'Crypto Tracing', path: '/services/crypto-tracing/' },
  { name: 'Crypto Fraud Investigation', path: '/services/crypto-fraud-investigation/' },
  { name: 'Complaint and Escalation Support', path: '/services/complaint-support/' },
];
