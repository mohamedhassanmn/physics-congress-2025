import { querySanity } from '@/sanity/client';

const LAYOUT_QUERY = `{
  "layoutSections": *[_type == "layoutSection"]{
    pageTitle,
    layoutContent,
    primaryColor,
    secondaryColor,
    navColor,
    heroImage{ asset->{ _id, url }, alt },
    footerImages[]{ asset->{ _id, url }, alt }
  }
}`;

export async function GET() {
  try {
    const res = await querySanity(LAYOUT_QUERY);
    const data = res?.result;
    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error fetching layout:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch layout' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
