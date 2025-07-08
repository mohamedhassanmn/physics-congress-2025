import { PortableText } from '@portabletext/react';

import { client } from "@/sanity/client";
import { portableTextComponents } from "@/components/atoms/sanitySupportComponent";

const CONTRIBUTION_QUERY = `{
  "contributionSections": *[_type == "contributionSection"]{
    contributionContent
  },
  "abstractSubmissionSections": *[_type == "abstractSubmissionSection"]{
    abstractSubmissionTitle,
    content,
    clickableCTA[]->{
      buttonText,
      buttonLink
    },
    abstractSubmissionInfo[]->{
      rank,
      name,
      content
    }
  },
  "presentationGuidelinesSections": *[_type == "presentationGuidelinesSection"]{
    presentationGuidelinesTitle,
    content
  }
}`;


const ContributionPage = async () => {
  const data = await client.fetch(CONTRIBUTION_QUERY);
  const contributionSection = data?.contributionSections?.[0];
  const abstractSubmissionSection = data?.abstractSubmissionSections?.[0] || {};
  const presentationGuidelinesSection = data?.presentationGuidelinesSections?.[0] || {};
  return (
    <div id="mid-wrapper">
      <div className="mid-wrapper-top-white">
        <PortableText value={contributionSection?.contributionContent} components={portableTextComponents} />
        <br />
        <h1>{abstractSubmissionSection?.abstractSubmissionTitle}</h1>
        <PortableText value={abstractSubmissionSection?.content} components={portableTextComponents} />
        <br />
        <a href={abstractSubmissionSection?.clickableCTA?.[0]?.buttonLink} target="_blank"><button className="button" style={{ verticalAlign: "middle" }}><span>{abstractSubmissionSection?.clickableCTA?.[0]?.buttonText}</span></button></a>
        <br />
        <br />
        <br />
        {abstractSubmissionSection?.abstractSubmissionInfo?.map((info:any) => (
          <div key={info.rank} className="contribution-info">
            <h2>{info.name}</h2>
            <PortableText value={info.content} components={portableTextComponents} />
            <br />
            <br />
          </div>))}
        <h1>{presentationGuidelinesSection?.presentationGuidelinesTitle}</h1>
        <PortableText value={presentationGuidelinesSection?.content} components={portableTextComponents} />
        <br />
      </div>
    </div>
  )
}

export default ContributionPage;