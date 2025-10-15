import fetch from 'node-fetch';
import { proxyAgent } from '@/sanity/client';

const COMMITTEES_QUERY = `*[_type == "committeesSection"]{
  _id,
  programCommitteesTitle,
  programCommitteesSpeakers[]->{ _id, name, organization, country },
  advisoryCommitteesTitle,
  advisoryCommitteesSpeakers[]->{ _id, name, organization, country },
  localOrganizingCommitteeTitle,
  localOrganizingCommitteeContent,
  localOrganizingCommittee[]->{ _id, name, organization, country }
}`;

export async function GET() {
  try {
    const res = await fetch(`https://7v8y29gj.api.sanity.io/v2025-10-14/data/query/production?query=${encodeURIComponent(COMMITTEES_QUERY)}`, { agent: proxyAgent });
    const json = await res.json();
    return new Response(JSON.stringify(json.result), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error fetching committees:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch committees' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
