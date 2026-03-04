import Listhighlights from "@/components/atoms/listHighlights";
import SpeakerInvitationToast from "@/components/atoms/speakerInvitation";
import { baseUrl } from "@/helper";
import { PortableText } from "@portabletext/react";

const Home = async () => {
  const res = await fetch(baseUrl + `/api/home`);
  const data = await res.json();
  const welcomeSection = data?.welcomeSections?.[0];
  const sponsorSection = data?.sponsorSections?.[0];
  const conferenceSection = data?.conferenceSections?.[0];
  const importantDateSection = data?.importantDateSections?.[0];
  const contactSection = data?.contactSections?.[0];
  const promotionSection = data?.promotionSections?.[0];
  return (
    <div id="mid-wrapper">
      <div className="mid-wrapper-top bg-white">
        <div className="mid-leftouter">
          <div className="mid-left-container">
            <div className="alarm-info">
              <SpeakerInvitationToast
                delay={500}
                type="speaker"
                data={welcomeSection}
              />
              <SpeakerInvitationToast
                delay={500}
                type="visa"
                data={welcomeSection}
              />
            </div>

            <br />
            <h1>{welcomeSection?.welcomeTitle}</h1>
            <div>
              <PortableText value={welcomeSection?.welcomeContent} />
            </div>
            <div className="row">
              {welcomeSection?.organizers?.map((item: any, index: number) => (
                <div className="column2" key={index}>
                  <b>{item.name}</b>
                  <br />
                  {item.role}
                  <br />
                  {item.designationOrganization}
                </div>
              ))}
            </div>
          </div>
          <div className="mid-left-container" style={{ marginTop: "10px" }}>
            <div className="inner-left"></div>
            <div className="inner-right"></div>
          </div>
        </div>
        <div
          className="right-container"
          style={{ backgroundColor: "var(--color-secondary)" }}
        >
          <div className="right-container-top">
            <h3>{importantDateSection?.importantDateTitle}</h3>
            <ul>
              {importantDateSection?.importantDateList?.map(
                (item: any, index: number) => (
                  <Listhighlights key={index} isOpen={item.isOpen}>
                    <PortableText value={item.dateContent} />
                  </Listhighlights>
                ),
              )}
            </ul>
          </div>
          <div className="right-container-dwn">
            <h4>{contactSection?.contactTitle}</h4>
            <p>
              <PortableText value={contactSection?.contactContent} />
            </p>
            <br />
            <br />
            <h4>{promotionSection?.promotionTitle}</h4>
            <p>
              <PortableText value={promotionSection?.promotionContent} />
            </p>
            <br />
            <br />
            <br />
            <br />
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
              {sponsorSection?.sponsors?.map((sponsor: any, index: number) => (
                <tr key={index}>
                  <td width="300">
                    <img
                      src={sponsor.image.asset.url}
                      height="150"
                      alt={`${sponsor.sponsorName} logo`}
                    />
                  </td>
                  <td width="550">
                    <PortableText value={sponsor?.sponsorContent} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <br />
          <br />
          <h1>{conferenceSection?.conferenceTitle}</h1>
          {conferenceSection?.conferenceList?.map(
            (item: any, index: number) => (
              <div key={index}>
                <br />
                <h2>{item.policyName}</h2>
                <p>
                  <PortableText value={item.policyContent} />
                </p>
                <br />
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
