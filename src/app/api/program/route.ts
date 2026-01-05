import { querySanity } from '@/sanity/client';

const PROGRAM_QUERY = `{
  "conferenceTopics": *[_type == "conferenceTopics"]{ topicTitle, topicContent },
  "scientificPrograms": *[_type == "scientificProgramSection"]{ scientificProgramTitle, scientificProgramContent[]->{ name, scientificProgramContent, clickableCTA[]->{ buttonText, buttonLink } } },
  "plenarySpeakers": *[_type == "plenarySpeakers"]{ title, speakers[]->{ name, organization, topic } },
  "invitedSpeakers": *[_type == "invitedSpeakers"]{ title, speakers[]->{ name, organization, topic } },
  "invitePlenaryAndInvitedSpeakers": *[_type == "invitePlenaryAndInvitedSpeakersType"]{ content },
  "socialPrograms": *[_type == "socialProgram"]{ programTitle, programContent }
}`;

export async function GET() {
  try {
    const res = await querySanity(PROGRAM_QUERY);
    const data = res?.result;
    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error fetching program:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch program' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
