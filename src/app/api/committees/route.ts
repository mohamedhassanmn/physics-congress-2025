import { querySanity } from '@/sanity/client';

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
    const res = await querySanity(COMMITTEES_QUERY);
    const data = res?.result;
    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error fetching committees:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch committees' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
