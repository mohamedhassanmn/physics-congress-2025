import fetch from 'node-fetch';
import { proxyAgent } from '@/sanity/client';

const LAYOUT_QUERY = `{
  "layoutSections": *[_type == "layoutSection"]{
    pageTitle,
    layoutContent,
    themeColor,
    heroImage{ asset->{ _id, url }, alt },
    footerImages[]{ asset->{ _id, url }, alt }
  }
}`;

export async function GET() {
  try {
    const res = await fetch(`https://7v8y29gj.api.sanity.io/v2025-10-14/data/query/production?query=${encodeURIComponent(LAYOUT_QUERY)}`, { agent: proxyAgent });
    const json = await res.json();
    return new Response(JSON.stringify(json.result), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error fetching layout:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch layout' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
