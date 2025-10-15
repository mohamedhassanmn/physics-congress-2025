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

export const baseUrl = process.env.VERCEL_URL 
  ? process.env.VERCEL_URL
  : 'http://localhost:3000';