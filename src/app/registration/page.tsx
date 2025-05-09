const RegistrationPage = () => {
    return(
        <div id="mid-wrapper">        
        <div className="mid-wrapper-top-white">
            <br />            
            <p>All presenters, including plenary and invited talks, contributed talks and posters, must register by August 25 at the latest (early registration closes <s>June 30</s> July 15) in order to be included in the final program.</p>
            <br />
            <p>We use the Easychair platform for online registration. <strong>You will need an Easychair account.</strong></p>
            <br />
            <br />
            <h1>Registration form</h1>
            <p>Registration is currently open. Please click the button below to access the registration form.</p>
            <br />    
            <a href="https://easychair.org/conferences/?conf=icpp2024" target="_blank"><button className="button" style={{ verticalAlign: "middle" }}><span>Register here</span></button></a>
            <br />
            <br />        
            <br />    
            <h1>Registration fees</h1>                                    
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
                        <td width="150">Early (until <s>June 30</s> July 15)</td>
                        <td width="100">EUR 600</td>
                        <td width="100">EUR 300</td>
                        <td width="120">EUR 130</td>                    
                    </tr>
                    <tr>
                        <td>Late  (until August 25)</td>
                        <td>EUR 700</td>
                        <td>EUR 400</td>
                        <td>EUR 150</td>                    
                    </tr>
                </tbody>
            </table> 
            <br />
            <p><sup>*</sup>Please note that only persons enrolled as a full-time student (e.g. PhD student) qualify for the student fee. A proof of enrolment may be requested to verify your status as a student.</p>
            <br />
            <p><strong>The registration fee includes the following:</strong></p>
            <ul>
                <li>Conference with welcome package</li>                            
                <li>Welcome reception</li>                
                <li>Excursion</li>
                <li>Banquet</li>
                <li>Lunches</li>
                <li>Coffee breaks</li>
            </ul>            
            <p><strong>The fee for accompanying persons includes the following:</strong></p>
            <ul>
                <li>Welcome reception</li>                    
                <li>Excursion</li>
                <li>Banquet</li>
                <li>Lunches</li>    
                <li>Coffee breaks</li>
            </ul>                
            <br />
            <br />
            <h1>Cancellation and refund policy</h1>        
            <p>Refund requests following cancellation of paid registrations should be addressed to the conference secretariat at <a href="mailto:icpp2024@ugent.be?subject=Invitation letter">icpp2024@ugent.be</a>. The refund policy is as follows:</p><br />                                    
            <table>                
                <tbody>
                    <tr>
                        <td width="150">Until July 31, 2024:</td>
                        <td width="100">Full refund</td>                
                    </tr>
                    <tr>
                        <td>From August 1, 2024:</td>
                        <td>No refund</td>                
                    </tr>
                </tbody>
            </table> 
            <br />
            <br />            
            <h1>Visa information</h1>        
            <p>Please see <a href="venue_travel.html#visa_information">here</a> for visa information.</p>                        
            <br />
        </div>
    </div>
    )
}

export default RegistrationPage;