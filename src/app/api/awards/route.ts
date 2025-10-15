import { querySanity} from '@/sanity/client';

const AWARDS_QUERY = `*[_type == "awardsSection"]{
  _id,
  scientistPrizeTitle,
  scientistPrizeContent,
  posterAwardsTitle,
  posterAwardsContent,
  travelAndParticipationAwardsTitle,
  travelAndParticipationAwardsContent
}`;

export async function GET() {
  try {
    const res = await querySanity(AWARDS_QUERY);
    const data = res?.result;
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching awards:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch awards' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
