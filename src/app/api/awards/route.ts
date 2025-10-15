import fetch from 'node-fetch';
import { proxyAgent } from '@/sanity/client';

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
    const res = await fetch(`https://7v8y29gj.api.sanity.io/v2025-10-14/data/query/production?query=${encodeURIComponent(AWARDS_QUERY)}`, { agent: proxyAgent });
    const json = await res.json();
    const data = json.result;
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching awards:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch awards' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
