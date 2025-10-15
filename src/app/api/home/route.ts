import fetch from 'node-fetch';
import { client, proxyAgent } from "@/sanity/client";

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
    console.log("Using proxy agent:", !!proxyAgent);
    // const data = await client.fetch(ROOT_QUERY,{agent: proxyAgent});   
    const res = await fetch(`https://7v8y29gj.api.sanity.io/v2025-10-14/data/query/production?query=${encodeURIComponent(ROOT_QUERY)}`,{agent: proxyAgent});    
    const json = await res.json();
    const data = json.result;
    console.log(data,"check data"); 
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