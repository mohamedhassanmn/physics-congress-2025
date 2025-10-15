import { baseUrl } from '@/helper';
import { PortableText } from '@portabletext/react';
import Link from "next/link";
import { portableTextComponents } from "@/components/atoms/sanitySupportComponent";

const RegistrationPage = async () => {
  const res = await fetch(baseUrl + '/api/registration');
  const data = await res.json();
    const registrationSection = data?.registrationSections?.[0];
    const registrationForms = data?.registrationForms?.[0] || {};
    const registrationFees = data?.registrationFees?.[0];
    const cancellationAndRefundPolicies = data?.cancellationAndRefundPolicies?.[0];
    const visaInformation = data?.visaInformation?.[0]; 
    return(
        <div id="mid-wrapper">        
        <div className="mid-wrapper-top-white">
            <br />            
            <PortableText value={registrationSection?.registrationContent} />
            <br />
            <h1>{registrationForms?.name}</h1>
            <PortableText value={registrationForms?.registerationFormDetails} />
            <br />
            <Link href={registrationForms?.clickableCTA[0]?.buttonLink} target="_blank"><button className="button" style={{ verticalAlign: "middle" }}><span>{registrationForms?.clickableCTA[0]?.buttonText}</span></button></Link>
            <br />
            <br />        
            <br />
            <h1>{registrationFees?.registrationFeesTitle}</h1>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Regular<br /> participants</th>
                        <th>Students<sup>*</sup><br /></th>
                        <th>Accompanying<br /> persons</th>                 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td width="150"><PortableText value={registrationFees?.earlyRegistrationDate} /></td>
                        <td width="100">{registrationFees?.registrationFeeStructure?.[0]?.earlyParticipants}</td>
                        <td width="100">{registrationFees?.registrationFeeStructure?.[0]?.earlyStudents}</td>
                        <td width="120">{registrationFees?.registrationFeeStructure?.[0]?.earlyAccompanyingPerson}</td>                    
                    </tr>
                    <tr>
                        <td><PortableText value={registrationFees?.lateRegistrationDate} /></td>
                        <td>{registrationFees?.registrationFeeStructure?.[0]?.lateParticipants}</td>
                        <td>{registrationFees?.registrationFeeStructure?.[0]?.lateStudents}</td>
                        <td>{registrationFees?.registrationFeeStructure?.[0]?.lateAccompanyingPerson}</td>                    
                    </tr>
                    <tr>
                        <td><PortableText value={registrationFees?.accommodationTitle} /></td>
                        <td>{registrationFees?.registrationFeeStructure?.[0]?.accommodationParticipants}</td>
                        <td>{registrationFees?.registrationFeeStructure?.[0]?.accommodationStudents}</td>
                        <td>{registrationFees?.registrationFeeStructure?.[0]?.accommodationAccompanyingPerson}</td>                    
                    </tr>
                </tbody>
            </table> 
            <br />
            <PortableText value={registrationFees?.registrationNote} components={portableTextComponents} />
            <br />
            <h1>{cancellationAndRefundPolicies?.cancellationTitle}</h1>  
            <PortableText value={cancellationAndRefundPolicies?.cancellationContent}  components={portableTextComponents}/>                               
            <br />
            <br />            
            <h1>{visaInformation?.visaTitle}</h1>
            <PortableText value={visaInformation?.visaInfoContent}  components={portableTextComponents}/>
            <br />
        </div>
    </div>
    )
}

export default RegistrationPage;