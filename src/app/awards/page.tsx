import { PortableText } from '@portabletext/react';

import { client } from "@/sanity/client";
import { portableTextComponents } from "@/components/atoms/sanitySupportComponent";

const AWARDS_QUERY = `*[_type == "awardsSection"]{
  _id,
  scientistPrizeTitle,
  scientistPrizeContent,
  posterAwardsTitle,
  posterAwardsContent,
  travelAndParticipationAwardsTitle,
  travelAndParticipationAwardsContent
}`;

const AwardsPage = async () => {
    const data = await client.fetch(AWARDS_QUERY);
    const awardsSection = data?.[0];
    const scientistPrizeTitle = awardsSection?.scientistPrizeTitle || "IUPAP Early Career Scientist Prize";
    const scientistPrizeContent = awardsSection?.scientistPrizeContent || [];
    const posterAwardsTitle = awardsSection?.posterAwardsTitle || "Poster awards";
    const posterAwardsContent = awardsSection?.posterAwardsContent || [];
    const travelAndParticipationAwardsTitle = awardsSection?.travelAndParticipationAwardsTitle || "Travel and participation awards";
    const travelAndParticipationAwardsContent = awardsSection?.travelAndParticipationAwardsContent || [];
    return(
        <div id="mid-wrapper">    
        <div className="mid-wrapper-top-white">
            <br />                
            <h1>{scientistPrizeTitle}</h1>                
            <PortableText value={scientistPrizeContent} components={portableTextComponents} />
            <br />                
            <br />
            <h1>{posterAwardsTitle}</h1>     
            <PortableText value={posterAwardsContent} components={portableTextComponents} />   
            <br />                    
            <br />
            <h1>{travelAndParticipationAwardsTitle}</h1>       
            <PortableText value={travelAndParticipationAwardsContent} components={portableTextComponents} />                         
           <br />
        </div>
    </div>
    )
}

export default AwardsPage;