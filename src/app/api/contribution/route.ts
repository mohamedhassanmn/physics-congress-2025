import fetch from 'node-fetch';
import { proxyAgent } from '@/sanity/client';

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
    const res = await fetch(`https://7v8y29gj.api.sanity.io/v2025-10-14/data/query/production?query=${encodeURIComponent(CONTRIBUTION_QUERY)}`, { agent: proxyAgent });
    const json = await res.json();
    return new Response(JSON.stringify(json.result), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error fetching contribution:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch contribution' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
