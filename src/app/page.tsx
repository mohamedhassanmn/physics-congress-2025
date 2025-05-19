import { type SanityDocument } from "next-sanity";
import { PortableText } from '@portabletext/react';

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

const options = { next: { revalidate: 30 } };

const Home = async () => {
    const data = await client.fetch<SanityDocument[]>(ROOT_QUERY, {}, options);
    const welcomeSection = data?.welcomeSections[0];
    const sponsorSection = data?.sponsorSections[0];
    const conferenceSection = data?.conferenceSections[0];
    const importantDateSection = data?.importantDateSections[0];
    const contactSection = data?.contactSections[0];
    const promotionSection = data?.promotionSections[0];
    return (
        <div id="mid-wrapper">
            <div className="mid-wrapper-top">
                <div className="mid-leftouter">
                    <div className="mid-left-container">
                        {/* <!--<p><font size="+1" style="background-color:Tomato;"><strong>The abstract submission deadline has been extended to May 31, 2024.</strong></font></p>
					<br/>
					<br/>-->					 */}
                        <br />
                        <h1>{welcomeSection?.welcomeTitle}</h1>
                        <div>
                            <PortableText value={welcomeSection?.welcomeContent} />
                        </div>
                        <div className="row">
                            {
                                welcomeSection?.organizers?.map((item, index: number) => (
                                    <div className="column2" key={index}>
                                        <b>{item.name}</b><br />
                                        {item.role}<br />
                                        {item.designationOrganization}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="mid-left-container" style={{ marginTop: '10px' }}>
                        <div className="inner-left">
                        </div>
                        <div className="inner-right">
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <div className="right-container-top">
                        <h3>{importantDateSection?.importantDateTitle}</h3>
                        <ul>
                            {importantDateSection?.importantDateList?.map((item, index: number) => (
                                <li key={index}>
                                     <PortableText value={item.dateContent} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="right-container-dwn">
                        <h4>{contactSection?.contactTitle}</h4>
                        <p><PortableText value={contactSection?.contactContent} /></p>
                        <br />
                        <br />
                        <h4>{promotionSection?.promotionTitle}</h4>
                        <p><PortableText value={promotionSection?.promotionContent} /></p>
                    </div>
                </div>
            </div>
            <div id="mid-wrapper-bttm">
                <div className="mid-wrapper-bttm-white">
                    <h1>{sponsorSection?.sponsorTitle}</h1>
                    <br />
                    <div>
                        <PortableText value={sponsorSection?.sponsorContent} />
                    </div>
                    <br />
                    <table>
                        <tbody>
                            {sponsorSection?.sponsors?.map((sponsor, index) => (
                                <tr key={index}>
                                    <td width="300"><img src={sponsor.image.asset.url} height="150" alt={`${sponsor.sponsorName} logo`} /></td>
                                    <td width="550"><PortableText value={sponsor?.sponsorContent} /></td>
                                </tr>
                            ))}
                            {/* <tr>
                                <td width="300"><img src="images/iupap.jpg" height="150" alt="IUPAP logo" /></td>
                                <td width="550">The <a href="https://iupap.org/" target="_blank">International Union of Pure and Applied Physics</a> (IUPAP) is the only international physics organization that is organized and run by the physics community itself. Its members are identified physics communities in countries or regions around the world. <br />
                                    To secure IUPAP sponsorship, the organisers have provided assurance that ICPP 2024 will be conducted in accordance with IUPAP principles as stated in the IUPAP resolution passed by the General Assembly in 2008 and 2011. In particular, no bona fide scientist will be excluded from participation on the grounds of national origin, nationality, or political considerations unrelated to science.</td>
                            </tr>
                            <tr>
                                <td width="300"><img src="/images/fwo.png" height="110" alt="FWO logo" /></td>
                                <td width="550">The <a href="https://www.fwo.be/en/" target="_blank">Research Foundation Flanders</a> (FWO) offers researchers in Flanders the opportunity to create knowledge. The FWO provides financial support for individual researchers, programmes and projects, and research infrastructure.</td>
                            </tr> */}
                        </tbody>
                    </table>
                    <br />
                    <br />
                    <br />
                    <h1>{conferenceSection?.conferenceTitle}</h1>
                    {conferenceSection?.conferenceList?.map((item, index: number) => (
                        <div key={index}>
                            <br />
                            <h2>{item.policyName}</h2>
                            <p><PortableText value={item.policyContent} /></p>
                            <br />
                        </div>
                    ))}
                    {/* <h2>Free circulation of scientists</h2>
                    <p>The principle of the Universality of Science is fundamental to scientific progress. This principle embodies freedom of movement, association, expression and communication for scientists, as well as equitable access to data, information and research materials.</p>
                    <br />
                    <p>In pursuing its objectives with respect to the rights and responsibilities of scientists, the International Union of Pure and Applied Physics (IUPAP) actively upholds this principle, and, in so doing, opposes any discrimination on the basis of such factors as ethnic origin, religion, citizenship, language, political stance, gender, or age. IUPAP should only sponsor conferences and events at institutions and in countries that uphold this principle. If scientists are excluded from attending IUPAP-sponsored international conferences by a host institution or country on the basis of any of these factors, IUPAP should register its concern at the highest level of that institution or country, and should not sponsor any future events in that country until such exclusions have been eliminated.</p>
                    <br />
                    <br />
                    <h2>Harassment</h2>
                    <p>It is the policy of the International Union of Pure and Applied Physics (IUPAP) that all participants in Union activities will enjoy an environment which encourages the free expression and exchange of scientific ideas, and is free from all forms of discrimination, harassment, and retaliation. The conference organisers will name an advisor who will consult with those who have suffered from harassment and who will suggest ways of redressing their problems, and an advisor who will counsel those accused of harassment. The conference organisers may, after due consideration, take such action they deem appropriate.</p>
                    <br /> */}
                </div>
            </div>
        </div>
    )
}

export default Home