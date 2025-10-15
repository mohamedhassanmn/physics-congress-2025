export const routes = {
  home: "/",
  program: "/program",
  registration: "/registration",
  contribution: "/contribution",
  venueAndTravel: "/venue_travel",
  awards: "/awards",
  committees: "/committees",
  schedule: "/program/schedule",
  topics: "/program/schedule/topics",
  authors: "/program/schedule/authors",
  keywords: "/program/schedule/keywords",
};

// Use NEXT_PUBLIC_BASE_URL in the browser (exposed env). If not set,
// fall back to VERCEL_URL (ensure it has a protocol) or localhost.
const _vercel = process.env.VERCEL_URL;
const vercelWithProto = _vercel
  ? _vercel.startsWith('http')
    ? _vercel
    : `https://${_vercel}`
  : undefined;

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || vercelWithProto || 'http://localhost:3000';
