import { PortableText } from '@portabletext/react';

import { client } from "@/sanity/client";
import { portableTextComponents } from "@/components/atoms/sanitySupportComponent";

const VENUETRAVEL_QUERY = `*[_type == "conferenceVenueSection"]{
  _id,
  venueTitle,
  venueContent,
  venueImages[]{
    asset->{
      _id,
      url,
      originalFilename
    }
  },
  sessionInfo[]{
    session,
    campus,
    address,
    buildingAndRoom,
    buildingImage{
      asset->{
        _id,
        url,
        originalFilename
      }
    }
  },
  accommodationTitle,
  accommodationContent,
  travelTitle,
  travelContent,
  travelImage{
    asset->{
      _id,
      url,
      originalFilename
    }
  },
  travelBy[]->{
    _id,
    transportationTitle,
    transportationContent
  },
  visaInfoTitle,
  visaInfoContent,
  tourInfoTitle,
  tourInfoContent,
  tourPlaceImages[]{
    asset->{
      _id,
      url,
      originalFilename
    }
  }
}`;

const VenueTravelPage = async () => {
    const data = await client.fetch(VENUETRAVEL_QUERY);
    const venueSection = data?.[0];
    const venueTitle = venueSection?.venueTitle || "Conference Venue";
    const venueContent = venueSection?.venueContent || [];
    const venueImages = venueSection?.venueImages || [];
    const sessionInfo = venueSection?.sessionInfo || [];
    const accommodationTitle = venueSection?.accommodationTitle || "Accommodation";
    const accommodationContent = venueSection?.accommodationContent || [];
    const travelTitle = venueSection?.travelTitle || "Travel";
    const travelContent = venueSection?.travelContent || [];
    const travelImage = venueSection?.travelImage?.asset || "";
    const travelBy = venueSection?.travelBy || [];
    const visaInfoTitle = venueSection?.visaInfoTitle || "Visa Information";
    const visaInfoContent = venueSection?.visaInfoContent || [];
    const tourInfoTitle = venueSection?.tourInfoTitle || "Touristic Information";
    const tourInfoContent = venueSection?.tourInfoContent || [];
    const tourPlaceImages = venueSection?.tourPlaceImages || [];

    return (
        <div id="mid-wrapper">        
        <div className="mid-wrapper-top-white">
            <br />
            <h1>{venueTitle}</h1>                
            {venueImages.map((image: any, index: number) => (
                <img key={index} src={image.asset.url} alt={image.asset.originalFilename} className="fright h-[150px]" />
            ))}
            <PortableText value={venueContent} components={portableTextComponents} />
            <br />
            <br />
            <table className="w-full table-fixed">                
                <thead>
                    <tr>
                        <th className="w-[20%]">Session</th>
                        <th className="w-[18%]">Campus</th>
                        <th className="w-[24%]">Address</th>
                        <th className="w-[38%]">Building and room</th>
                    </tr>
                </thead>
                <tbody>
                    {sessionInfo.map((session: any, index: number) => (
                        <tr key={index}>
                            <td className="w-[20%] align-top">{session.session}</td>
                            <td className="w-[18%] align-top">
                                <PortableText value={session.campus} components={portableTextComponents} />
                            </td>
                            <td className="w-[24%] align-top">{session.address}</td>
                            <td className="w-[38%] align-top">
                                <b>{session.buildingAndRoom}</b>
                                <br />
                                {session.buildingImage && session.buildingImage.asset && (
                                    <img src={session.buildingImage.asset.url} className="w-full max-w-[250px] mt-2" alt={session.buildingAndRoom} />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>             
            <br />                
            <br />
            <br />
            <h1>{accommodationTitle}</h1>
            <PortableText value={accommodationContent} components={portableTextComponents} />
            <br />
            <br />
            <br />            
            <h1>{travelTitle}</h1>            
            <img src={travelImage?.url} width="450" alt={travelImage?.originalFilename} className="fright" />
            <PortableText value={travelContent} components={portableTextComponents} />
            <br />
            <br />
            {travelBy.map((transportation: any, index: number) => (
                <div key={index}>
                    <h2>{transportation.transportationTitle}</h2>
                    <PortableText value={transportation.transportationContent} components={portableTextComponents} />
                    <br />
                    <br />
                </div>
            ))}
            <br />
            <br />
            <a id="visa_information"><h1>{visaInfoTitle}</h1></a>
            <PortableText value={visaInfoContent} components={portableTextComponents} />         
            <br />    
            <br />        
            <br />
            <a id="tourist_information"><h1>{tourInfoTitle}</h1></a>
            <PortableText value={tourInfoContent} components={portableTextComponents} />
            <br />
            <div className='flex w-full gap-2 pr-5'>
                {tourPlaceImages.map((image: any, index: number) => (
                    <img key={index} className='w-1/3 h-[200px] object-cover' src={image.asset.url} alt={image.asset.originalFilename} />
                ))}
            </div>
            <br />
        </div>
    </div>
    )
}

export default VenueTravelPage;