import { client } from "@/sanity/client";

const ROOT_QUERY = `{
  "welcomeSections": *[_type == "welcomeSection"]{
    welcomeTitle,
    welcomeContent,
    organizers[]->|order(rank asc){
      name,
      role,
      designationOrganization,
      rank
    }
  },
  "sponsorSections": *[_type == "sponsorSection"]{
    sponsorTitle,
    sponsorContent,
    sponsors[]->|order(rank asc){
      sponsorName,
      sponsorContent,
      image{
        asset->{
          _id,
          url
        },
        alt
      },
      rank
    }
  },
  "conferenceSections": *[_type == "conferenceSection"]{
    conferenceTitle,
    conferenceList[]->|order(rank asc){
      policyName,
      policyContent
    }
  },
  "importantDateSections": *[_type == "importantDateSection"]{
    importantDateTitle,
    importantDateList[]->|order(rank asc){
      dateContent
    }
  },
  "contactSections": *[_type == "contactSection"]{
    contactTitle,
    contactContent
  },
  "promotionSections": *[_type == "promotionSection"]{
    promotionTitle,
    promotionContent
  }
}`;

export async function GET() {
  try {
    const data = await client.fetch(ROOT_QUERY);    
    return new Response(JSON.stringify(data), {
        status: 200,    
        headers: {
            'Content-Type': 'application/json'
        }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
        status: 500,
        headers: {
            'Content-Type': 'application/json'
        }
    });
  } 
}