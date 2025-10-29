import { PortableText } from '@portabletext/react';
import { baseUrl } from '@/helper';
import Link from "next/link";
import { portableTextComponents } from "@/components/atoms/sanitySupportComponent";

const ContributionPage = async () => {
  const res = await fetch(baseUrl+`/api/contribution`);
  const data = await res.json();
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
        <Link href={abstractSubmissionSection?.clickableCTA?.[0]?.buttonLink} target="_blank"><button className="button" style={{ verticalAlign: "middle", backgroundColor: 'var(--color-secondary)' }}><span>{abstractSubmissionSection?.clickableCTA?.[0]?.buttonText}</span></button></Link>
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