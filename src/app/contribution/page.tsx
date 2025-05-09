const ContributionPage = () => {
    return (
        <div id="mid-wrapper">        
        <div className="mid-wrapper-top-white">
            <br />
            <p>The ICPP 2024 Organizing Committee cordially invites you to submit abstracts for oral and poster presentations. All abstracts will be reviewed by the Program Committee and assigned to the appropriate session for oral and poster presentations.</p>
            <br />
            <p>We will be using the Easychair platform for abstract submission. <strong>You will need an Easychair account.</strong></p>
            <br />        
            <br />
            <h1>Abstract submission</h1>
            <p>Abstract submission of contributed and invited talks is requested, as well as poster presentations.</p>
            <br />
            <p>Abstracts, limited to one page, can only be submitted through the Easychair platform. Only the PDF file format will be accepted.</p>
            <br />
            <p>The abstract submission deadline is <s>May 17</s> <strong>May 31</strong>, 2024. Authors will be notified by email regarding acceptance of their contribution on <s>May 31</s> June 19, 2024. Accepted abstracts might be reassigned to an oral or poster presentation in the appropriate topical session at the discretion of the program committee.</p>
            <br />                
            <p>Please be informed that the presenter of each accepted abstract must complete his/her registration and pay the registration fee, otherwise the abstract will be withdrawn from the final program.</p>
            <br />
            <p>Please click the button below to start the abstract submission process.</p>
            <br />
            <a href="https://easychair.org/conferences/?conf=icpp2024" target="_blank"><button className="button" style={{ verticalAlign: "middle" }}><span>Abstract submission</span></button></a>
            <br />
            <br />
            <br />
            <h2>Guidelines</h2>
            <ul>
                <li>The abstract must be in English, and the abstract length is limited to one page (including title, authors, affiliations, body text, references, acknowledgements, etc.), with a body text of 400 words at most.</li>
                <li>The page size should be A4 (21cm x 29.7cm). Page margins must be 2.54 cm from the top, left, right and bottom.</li>
                <li>Your abstract must be written using the Times New Roman font.</li>
                <li>The abstract title must be centered, with 1.5 spacing and in 14 pt bold font with initial letters capitalized. The title should be concise and informative enough to facilitate understanding of the paper. Acronyms should not occur in the title.</li>
                <li>Authors, affiliations and body text must be in 12 pt font.</li>                
                <li>For the body text, use single spacing and justified margins.</li>                                
                <li>Any references must occur at the end of the document, numbered between square brackets (e.g. [1]).</li>
                <li>Only the PDF file format will be accepted.</li>
            </ul>            
            <br />
            <br />
            <h2>Templates</h2>
            <ul>
                <li><a href="files/Abstract_ICPP_2024.tex">LaTeX template</a></li>
                <li><a href="files/Abstract_ICPP_2024.docx">MS Word template</a></li>
                <li><a href="files/Abstract_ICPP_2024.odt">Open Document template</a></li>
            </ul>
            <p>An example of the abstract layout is available <a href="files/Abstract_example_ICPP_2024.pdf">here</a>.</p>
            <br />
            <br />
            <h1>Presentation guidelines</h1>
            <p>For oral presentations a slide format of 16:9 is recommended in the plenary sessions, as well as in the sessions labeled A and B. A slide format of 4:3 is recommended in sessions labeled C. The allocated time is as follows:</p>            
            <ul>
                <li>Plenary talks: 40 min., incl. 5 min. questions</li>
                <li>Invited talks: 30 min., incl. 5 min. questions</li>
                <li>Contributed talks: 20 min., incl. 3 min. questions</li>
            </ul>            
            <br />
            <p>The poster panels are A0 portrait.</p>
            <br />
        </div>
    </div>
    )
}

export default ContributionPage;