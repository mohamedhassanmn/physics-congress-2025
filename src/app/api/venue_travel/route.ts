import fetch from 'node-fetch';
import { proxyAgent } from '@/sanity/client';

const VENUETRAVEL_QUERY = `*[_type == "conferenceVenueSection"]{
  _id,
  venueTitle,
  venueContent,
  venueImages[]{ asset->{ _id, url, originalFilename } },
  sessionInfo[]{ session, campus, address, buildingAndRoom, buildingImage{ asset->{ _id, url, originalFilename } } },
  accommodationTitle,
  accommodationContent,
  travelTitle,
  travelContent,
  travelImage{ asset->{ _id, url, originalFilename } },
  travelBy[]->{ _id, transportationTitle, transportationContent },
  visaInfoTitle,
  visaInfoContent,
  tourInfoTitle,
  tourInfoContent,
  tourPlaceImages[]{ asset->{ _id, url, originalFilename } }
}`;

export async function GET() {
  try {
    const res = await fetch(`https://7v8y29gj.api.sanity.io/v2025-10-14/data/query/production?query=${encodeURIComponent(VENUETRAVEL_QUERY)}`, { agent: proxyAgent });
    const json = await res.json();
    return new Response(JSON.stringify(json.result), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error fetching venue travel:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch venue travel' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
