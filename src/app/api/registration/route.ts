import { querySanity } from '@/sanity/client';

const REGISTRATION_QUERY = `{
  "registrationSections": *[_type == "registrationSection"]{ registrationContent },
  "registrationForms": *[_type == "registrationFormType"]{ name, registerationFormDetails, clickableCTA[]->{ buttonText, buttonLink } },
  "registrationFees": *[_type == "registrationFeeType"]{ registrationFeeStructure[]{ earlyParticipants, earlyStudents, earlyAccompanyingPerson, lateParticipants, lateStudents, lateAccompanyingPerson, accommodationParticipants, accommodationStudents, accommodationAccompanyingPerson, premiumParticipants, premiumStudents, premiumAccompanyingPerson }, earlyRegistrationDate, lateRegistrationDate, accommodationTitle, premiumTitle, registrationFeesTitle, registrationNote },
  "cancellationAndRefundPolicies": *[_type == "cancellationAndRefundPolicy"]{ cancellationTitle, cancellationContent },
  "visaInformation": *[_type == "visaInformation"]{ visaTitle, visaInfoContent }
}`;

export async function GET() {
  try {
    const res = await querySanity(REGISTRATION_QUERY);
    const data = res?.result;
    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error fetching registration:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch registration' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
