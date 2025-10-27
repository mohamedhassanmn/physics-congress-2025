import { baseUrl } from '@/helper';
import { PortableText } from '@portabletext/react';
import Link from "next/link";

const ProgramPage = async () => {
  const res = await fetch(baseUrl+`/api/program`);
  const data = await res.json();
    const conferenceTopics = data?.conferenceTopics?.[0];
    const scientificPrograms = data?.scientificPrograms?.[0];
    const invitedSpeakers = data?.invitedSpeakers?.[0];
    const plenarySpeakers = data?.plenarySpeakers?.[0];
    const socialPrograms = data?.socialPrograms?.[0];
    return (
        <div id="mid-wrapper">
            <div className="mid-wrapper-top-white">
                <br />
                <h1>{conferenceTopics?.topicTitle}</h1>
                <PortableText value={conferenceTopics?.topicContent} />
                <br />
                <h1>{scientificPrograms?.scientificProgramTitle}</h1>
                {scientificPrograms.scientificProgramContent.map((program: any, index: number) => (
                    <div key={index}>
                        <h2>{program.name}</h2>
                        <PortableText value={program.scientificProgramContent} />
                        <br />
                        <div>
                            {program.clickableCTA?.map((cta: any, ctaIndex: number) => (
                                <Link key={ctaIndex} href={cta.buttonLink}>
                                    <button className="button" style={{ verticalAlign: "middle", backgroundColor: 'var(--color-primary-150)' }}>
                                        <span>{cta.buttonText}</span>
                                    </button>
                                </Link>
                            ))}
                        </div>
                        <br />
                    </div>
                ))}
                <br />
                <h2>{plenarySpeakers?.title}</h2>
                <table id="ftable">
                    <tbody>
                        {plenarySpeakers?.speakers?.map((speaker: any, index: number) => (
                            <tr key={index}>
                                <td className='w-1/6'>{speaker.name}</td>
                                <td className='w-2/6'>{speaker.organization}</td>
                                <td className='w-3/6'>{speaker.topic}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
                <br />
                <h2>{invitedSpeakers?.title}</h2>
                <table id="ftable">
                    <tbody>
                        {invitedSpeakers?.speakers?.map((speaker: any, index: number) => (
                            <tr key={index}>
                                <td className='w-1/6'>{speaker.name}</td>
                                <td className='w-2/6'>{speaker.organization}</td>
                                <td className='w-3/6'>{speaker.topic}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
                <br />
                <h2>{socialPrograms?.programTitle}</h2>
                <table id="ftable">
                    <tbody>
                       <PortableText value={socialPrograms?.programContent}/>
                    </tbody>
                </table>
                <br />
                <br />
            </div>
        </div>
    );
}

export default ProgramPage