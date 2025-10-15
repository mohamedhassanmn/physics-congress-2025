import { PortableText } from '@portabletext/react';
import { baseUrl } from '@/helper';
import { portableTextComponents } from "@/components/atoms/sanitySupportComponent";

const CommitteesPage = async () => {
    const res = await fetch(baseUrl+`/api/committees`);
    const data = await res.json();
    const programCommitteesTitle = data?.[0]?.programCommitteesTitle || "Program Committee";
    const programCommitteesSpeakers = data?.[0]?.programCommitteesSpeakers || [];
    const advisoryCommitteesTitle = data?.[0]?.advisoryCommitteesTitle || "International Advisory Committee";
    const advisoryCommitteesSpeakers = data?.[0]?.advisoryCommitteesSpeakers || [];
    const localOrganizingCommitteeTitle = data?.[0]?.localOrganizingCommitteeTitle || "Local Organizing Committee";
    const localOrganizingCommitteeContent = data?.[0]?.localOrganizingCommitteeContent || ""
    const localOrganizingCommittee = data?.[0]?.localOrganizingCommittee || [];
    return(
        <div id="mid-wrapper">        
        <div className="mid-wrapper-top-white">
            <br />
            <h1>{programCommitteesTitle}</h1>                        
            <table id="ftable">        
                <tbody>
                    {programCommitteesSpeakers.map((speaker: any, index: number) => (
                        <tr key={index}>
                            <td>{speaker.name}</td>
                            <td>{speaker.organization}</td>
                            <td>{speaker.country}</td>      
                        </tr>
                    ))}
                </tbody>
            </table>            
            <br />
            <br />
            <h1>{advisoryCommitteesTitle}</h1>                        
            <table id="ftable">
                <tbody>
                    {advisoryCommitteesSpeakers.map((speaker: any, index: number) => (
                        <tr key={index}>
                            <td>{speaker.name}</td>
                            <td>{speaker.organization}</td>
                            <td>{speaker.country}</td>
                        </tr>
                    ))}         
                </tbody>
            </table>    
            <br />    
            <br />
            <h1>{localOrganizingCommitteeTitle}</h1>
            <div className='pr-4'>
                <PortableText value={localOrganizingCommitteeContent} components={portableTextComponents} />
            </div>
            <br />
            <table id="ftable">        
                <tbody>
                    {localOrganizingCommittee.map((speaker: any, index: number) => (
                        <tr key={index}>
                            <td>{speaker.name}</td>
                            <td>{speaker.organization}</td>
                            <td>{speaker.country}</td>      
                        </tr>
                    ))}
                </tbody>
            </table>   
            <br />
            <br />            
        </div>
    </div>
    )
}

export default CommitteesPage;