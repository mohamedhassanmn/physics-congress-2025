import { querySanity } from '@/sanity/client';

const CONTRIBUTION_QUERY = `{
  "contributionSections": *[_type == "contributionSection"]{
    contributionContent
  },
  "abstractSubmissionSections": *[_type == "abstractSubmissionSection"]{
    abstractSubmissionTitle,
    content,
    clickableCTA[]->{
      buttonText,
      buttonLink
    },
    abstractSubmissionInfo[]->{
      rank,
      name,
      content
    }
  },
  "presentationGuidelinesSections": *[_type == "presentationGuidelinesSection"]{
    presentationGuidelinesTitle,
    content
  }
}`;

export async function GET() {
  try {
    const res = await querySanity(CONTRIBUTION_QUERY);
    const data = res?.result;
    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error fetching contribution:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch contribution' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
