import fetch from 'node-fetch';
import { proxyAgent } from '@/sanity/client';

const REGISTRATION_QUERY = `{
  "registrationSections": *[_type == "registrationSection"]{ registrationContent },
  "registrationForms": *[_type == "registrationFormType"]{ name, registerationFormDetails, clickableCTA[]->{ buttonText, buttonLink } },
  "registrationFees": *[_type == "registrationFeeType"]{ registrationFeeStructure[]{ earlyParticipants, earlyStudents, earlyAccompanyingPerson, lateParticipants, lateStudents, lateAccompanyingPerson, accommodationParticipants, accommodationStudents, accommodationAccompanyingPerson }, earlyRegistrationDate, lateRegistrationDate, accommodationTitle, registrationFeesTitle, registrationNote },
  "cancellationAndRefundPolicies": *[_type == "cancellationAndRefundPolicy"]{ cancellationTitle, cancellationContent },
  "visaInformation": *[_type == "visaInformation"]{ visaTitle, visaInfoContent }
}`;

export async function GET() {
  try {
    const res = await fetch(`https://7v8y29gj.api.sanity.io/v2025-10-14/data/query/production?query=${encodeURIComponent(REGISTRATION_QUERY)}`, { agent: proxyAgent });
    const json = await res.json();
    return new Response(JSON.stringify(json.result), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error fetching registration:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch registration' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
