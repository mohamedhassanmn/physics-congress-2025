import fetch from 'node-fetch';
import { proxyAgent } from '@/sanity/client';

const PROGRAM_SCHEDULE_QUERY = `*[_type == "sessionSchedule"]|order(date asc){ _id, date, sessions[]{ timeFrom, timeTo, title, chair[]->{ _id, name }, location, subSessions[]{ timeFrom, timeTo, subSessions[]-> { _id, title, presenter-> { _id, name }, authors[]-> { _id, name }, abstract } } } }`;

const AUTHORS_QUERY = `*[_type == "authorType"]|order(name asc){ _id, name, affiliation, webpage, photo, "topics": *[_type == "topicsType" && references(^._id)]{ _id, title } }`;

const KEYWORDS_QUERY = `*[_type == "keywordType" && count(*[_type == "topicsType" && references(^._id)]) > 0] | order(name asc) { _id, name, "topics": *[_type == "topicsType" && references(^._id)]{ _id, title } }`;

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const type = url.searchParams.get('type') || 'topics';
    let query = PROGRAM_SCHEDULE_QUERY;
    if (type === 'authors') query = AUTHORS_QUERY;
    if (type === 'keywords') query = KEYWORDS_QUERY;
    const res = await fetch(`https://7v8y29gj.api.sanity.io/v2025-10-14/data/query/production?query=${encodeURIComponent(query)}`, { agent: proxyAgent });
    const json = await res.json();
    return new Response(JSON.stringify(json.result), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error fetching schedule:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch schedule' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
