import { type SanityDocument } from "next-sanity";
import { PortableText } from '@portabletext/react';

import { client } from "@/sanity/client";

const POSTS_QUERY = `{
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
  }
}`;

const options = { next: { revalidate: 30 } };

const Home = async () => {
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
    const welcomeSection = posts?.welcomeSections[0];
    const sponsorSection = posts?.sponsorSections[0];
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
                            {/* <div className="column2">
                                <b>Geert Verdoolaege</b><br />
                                Chair of LOC<br />
                                Professor, Ghent University
                            </div>
                            <div className="column2">
                                <b>Bob Bingham</b><br />
                                Chair of PC<br />
                                Professor, Science and Technology Facilities Council (STFC)
                            </div> */}
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
                        <h3>Important dates (2024)</h3>
                        <ul>
                            <li>Early registration opens: March 5</li>
                            <li>Abstract submission opens: March 11</li>
                            <li>Abstract submission closes: <s>May 17</s> May 31</li>
                            <li>Notification of acceptance: <s>May 31</s> June 19</li>
                            <li>Early registration closes: <s>June 30</s> July 15</li>
                            <li>Final program online: <s>July 15</s> August 9</li>
                            <li>Final registration deadline: August 25</li>
                            <li>Conference: September 8-13</li>
                        </ul>
                    </div>
                    <div className="right-container-dwn">
                        <h4>Contact</h4>
                        <p><a href="mailto:icpp2024@ugent.be" style={{ color: "#FFFFFF", textDecoration: "underline" }}>icpp2024@ugent.be</a></p>
                        <br />
                        <br />
                        <h4>Promotion</h4>
                        <p>The conference poster can be downloaded <a href="files/Poster_ICPP_2024.pdf" style={{ color: "#FFFFFF", textDecoration: "underline" }}>here</a>.</p>
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
                    <h1>Conference policy</h1>
                    <br />
                    <h2>Free circulation of scientists</h2>
                    <p>The principle of the Universality of Science is fundamental to scientific progress. This principle embodies freedom of movement, association, expression and communication for scientists, as well as equitable access to data, information and research materials.</p>
                    <br />
                    <p>In pursuing its objectives with respect to the rights and responsibilities of scientists, the International Union of Pure and Applied Physics (IUPAP) actively upholds this principle, and, in so doing, opposes any discrimination on the basis of such factors as ethnic origin, religion, citizenship, language, political stance, gender, or age. IUPAP should only sponsor conferences and events at institutions and in countries that uphold this principle. If scientists are excluded from attending IUPAP-sponsored international conferences by a host institution or country on the basis of any of these factors, IUPAP should register its concern at the highest level of that institution or country, and should not sponsor any future events in that country until such exclusions have been eliminated.</p>
                    <br />
                    <br />
                    <h2>Harassment</h2>
                    <p>It is the policy of the International Union of Pure and Applied Physics (IUPAP) that all participants in Union activities will enjoy an environment which encourages the free expression and exchange of scientific ideas, and is free from all forms of discrimination, harassment, and retaliation. The conference organisers will name an advisor who will consult with those who have suffered from harassment and who will suggest ways of redressing their problems, and an advisor who will counsel those accused of harassment. The conference organisers may, after due consideration, take such action they deem appropriate.</p>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Home