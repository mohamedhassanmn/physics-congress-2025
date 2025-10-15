import { querySanity } from '@/sanity/client';

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
    const res = await querySanity(VENUETRAVEL_QUERY);
    const data = res?.result;
    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error fetching venue travel:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch venue travel' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
