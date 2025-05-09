const ProgramPage = () => {
    return (
        <div id="mid-wrapper">
            <div className="mid-wrapper-top-white">
                <br />
                <h1>Conference topics</h1>
                <ol type="i">
                    <li>Magnetic Confinement Plasmas</li>
                    <li>Laser and Beam Plasmas</li>
                    <li>Space Plasmas</li>
                    <li>Astrophysical Plasmas</li>
                    <li>Basic Plasma Physics</li>
                    <li>Plasma Diagnostics & Space Instrumentation</li>
                    <li>Low Temperature and Dusty Plasmas</li>
                    <li>Plasma Applications</li>
                </ol>
                <br />
                <h1>Scientific program</h1>
                <h2>Timetable</h2>
                <p>Please use the buttons below to access the program.</p>
                <br />
                <a href="files/ICPP_2024_program_overview.pdf" target="_blank"><button className="button" style={{ verticalAlign: "middle" }}><span>Program overview</span></button></a>
                <a href="https://easychair.org/smart-program/ICPP2024/" target="_blank"><button className="button" style={{ verticalAlign: "middle" }}><span>Detailed program</span></button></a>
                <br />
                <br />
                <h2>Program book</h2>
                <p>The program book can be downloaded below.</p>
                <br />
                <a href="files/ICPP_2024_program_book_online.pdf" target="_blank"><button className="button" style={{ verticalAlign: "middle" }}><span>Program book</span></button></a>
                <br />
                <br />
                <br />
                <h2>Plenary speakers</h2>
                <table id="ftable">
                    <tbody>
                        <tr>
                            <td>Chris Deeney</td>
                            <td>Rochester University, UK</td>
                            <td>Pioneering High-Energy-Density Plasma Physics at the Laboratory for Laser Energetics</td>
                        </tr>
                        <tr>
                            <td>Nicolas Dubuit</td>
                            <td>Aix Marseille University, France</td>
                            <td>Complex Interplay of Magnetic Islands and Turbulence in Fusion Plasmas </td>
                        </tr>
                        <tr>
                            <td>Gianluca Gregori</td>
                            <td>University of Oxford,  UK</td>
                            <td>Suppression of pair beam instabilities in a laboratory analogue of blazar pair cascades</td>
                        </tr>
                        <tr>
                            <td>Frank Jenko</td>
                            <td>IPP Garching, Germany</td>
                            <td>Towards Digital Twins of Fusion Systems</td>
                        </tr>
                        <tr>
                            <td>Tammy Ma</td>
                            <td>LLNL, USA</td>
                            <td>Ignition Achieved: next Steps in the Path Toward an Inertial Fusion Energy Future</td>
                        </tr>
                        <tr>
                            <td>Victor Malka</td>
                            <td>Weizmann Institute of Science,  Israel</td>
                            <td>Laser Plasma Accelerators: Manipulating Relativistic Electrons with Intense Lasers</td>
                        </tr>
                        <tr>
                            <td>Didier Mazon</td>
                            <td>IRFM - CEA Cadarache, France</td>
                            <td>Developing numerical tools for tungsten profile measurement from X-ray diagnostics in WEST plasmas</td>
                        </tr>
                        <tr>
                            <td>Jozef Ongena</td>
                            <td>LPP-ERM/KMS, Belgium</td>
                            <td>Overview and Initial Results of the ICRH Antenna for the Optimized Stellarator Wendelstein 7-X</td>
                        </tr>
                        <tr>
                            <td>Rahul Pandit</td>
                            <td>Indian Institute of Science, Bangalore, India </td>
                            <td>The solar wind and statistical properties of three-dimensional Hall magnetohydrodynamics turbulence</td>
                        </tr>
                        <tr>
                            <td>G. Ravindra Kumar</td>
                            <td>Tata Institute of Fundamental Research, Mumbai, India </td>
                            <td>10^4 fold field amplification and control of relativistic Mega Ampere electron beams in a modest, static magnetic field</td>
                        </tr>
                        <tr>
                            <td>Osamu Sakai</td>
                            <td>The University of Shiga Prefecture, Japan</td>
                            <td>Design of Plasma Shapes for Metamaterials, Chemical Filters, and Maze-Solvers</td>
                        </tr>
                        <tr>
                            <td>Emilia R. Solano</td>
                            <td>CIEMAT, Spain</td>
                            <td>JET isotope studies and the L-H transition</td>
                        </tr>
                        <tr>
                            <td>Eve Stenson</td>
                            <td>Max Planck Institute for Plasma Physics, Germany</td>
                            <td>Highlights from the path toward confined e+e-pair plasmas</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <br />
                <h2>Invited speakers</h2>
                <table id="ftable">
                    <tbody>
                        <tr>
                            <td>Eduardo Paulo Alves</td>
                            <td>University of California Los Angeles, USA </td>
                            <td>Ab initio kinetic simulations meet machine learning: opportunities in plasma physics</td>
                        </tr>
                        <tr>
                            <td>Robert Babjak</td>
                            <td>Insituto Superior Técnico, University of Lisbon, Portugal</td>
                            <td>Optimised direct laser acceleration of electrons - towards high-brilliance gamma-ray sources</td>
                        </tr>
                        <tr>
                            <td>Renaud Dejarnac</td>
                            <td>IPP Prague, Czech Republic</td>
                            <td>Physics drivers for the plasma-facing components design of the COMPASS-U tokamak</td>
                        </tr>
                        <tr>
                            <td>Sylvie Depierreux</td>
                            <td>CEA, France</td>
                            <td>Experimental investigation of Laser Plasma Interaction in the context of Inertial Confinement Fusion on the Laser Mégajoule facility</td>
                        </tr>
                        <tr>
                            <td>Turlough Downes</td>
                            <td>Dublin City University, Ireland</td>
                            <td>Dissipative Structures In Non-Ideal MHD Turbulence: The Hall Effect Unveiled</td>
                        </tr>
                        <tr>
                            <td>Vinicius Duarte</td>
                            <td>PPPL, USA</td>
                            <td>Relaxation of energetic particles in plasmas and dark matter in galaxies through a common resonance-broadened kinetic theory </td>
                        </tr>
                        <tr>
                            <td>Luca Garzotti</td>
                            <td>UKAEA, UK</td>
                            <td>JET experiments in support of JT-60SA scenario development</td>
                        </tr>
                        <tr>
                            <td>Kazuaki Hanada</td>
                            <td>Kyushu University, Japan</td>
                            <td>Experimental Progress and Future Plan on Spherical Tokamak, QUEST</td>
                        </tr>
                        <tr>
                            <td>Matthew Hole</td>
                            <td>ANU, Australia</td>
                            <td>Plasma equilibria, stability and nonlinear dynamics – A celebration of the contributions of Prof. Robert Dewar</td>
                        </tr>
                        <tr>
                            <td>Kenji Imadera</td>
                            <td>Kyoto University, Japan</td>
                            <td>Fuel supply and helium ash exhaust in gyrokinetic flux-driven ITG/TEM turbulence</td>
                        </tr>
                        <tr>
                            <td>Igor Kaganovich</td>
                            <td>PPPL, USA</td>
                            <td>Modelling of Modern Plasma Processing Reactors: Plasma Physics and Surface Chemistry</td>
                        </tr>
                        <tr>
                            <td>Henri Kumpulainen</td>
                            <td>Forschungszentrum Jülich, Germany</td>
                            <td>Impact of co-dependent energy and angular atomic impact spectra on tungsten erosion in JET</td>
                        </tr>
                        <tr>
                            <td>Yevgen Kazakov</td>
                            <td>Laboratory for Plasma Physics of the Ecole Royale Militaire, Belgium</td>
                            <td>Alpha-Particle Physics Studies in D-3He Plasmas at JET and JT-60SA in Support of ITER Rebaseline</td>
                        </tr>
                        <tr>
                            <td>Daniel Kennedy</td>
                            <td>UKAEA, UK</td>
                            <td>Electromagnetic Instabilities In Spherical Tokamaks</td>
                        </tr>
                        <tr>
                            <td>Eun-Jin Kim</td>
                            <td>Coventry University, UK</td>
                            <td>Stochastic theory of plasma bifurcations and advanced operations</td>
                        </tr>
                        <tr>
                            <td>Mark Koepke</td>
                            <td>West Verginia University, USA</td>
                            <td>Developing Community Engagement for RM3FD: Repository, Management, and Modeling for Materials Fundamental Data</td>
                        </tr>
                        <tr>
                            <td>M Krishnamurthy</td>
                            <td>Tata Institute of Fundamental Research,  India</td>
                            <td>Laser driven microdroplet for efficient electron acceleration</td>
                        </tr>
                        <tr>
                            <td>Zetao Lin </td>
                            <td>Aix Marseille University, France</td>
                            <td>Data-driven Heavy Impurity Dynamics In The Edge Plasma Of Tokamaks</td>
                        </tr>
                        <tr>
                            <td>Alan Mašláni</td>
                            <td>IPP Prague, Czech Republic</td>
                            <td>Steam thermal plasma for turquoise hydrogen production</td>
                        </tr>
                        <tr>
                            <td>Dominika Maslarova</td>
                            <td>Chalmers University of Technology, Sweden</td>
                            <td>Scheme for Injecting Breit-Wheeler Positrons into a Plasma Channel Using Multi-PW Lasers</td>
                        </tr>
                        <tr>
                            <td>Yasushi Ono</td>
                            <td>University of Tokyo, Japan</td>
                            <td>High Power Ion Heating by Magnetic Reconnection in Two Merging Toroidal Plasmas with High Guide Field</td>
                        </tr>
                        <tr>
                            <td>Hyeon Park</td>
                            <td>UNIST, South Korea</td>
                            <td>Most Probable Ignition Approach for Magnetic Fusion Plasmas</td>
                        </tr>
                        <tr>
                            <td>Jessica Shaw</td>
                            <td>LLE, U. Rochester, USA</td>
                            <td>Raman Amplification with a 1 x 10^15 W/cm^2 Seed: Efficient Amplification past Wavebreaking</td>
                        </tr>
                        <tr>
                            <td>Thales Silva</td>
                            <td>Insituto Superior Téncico, University of Lisbon, Portugal</td>
                            <td>Generation of Unstable Plasmas Leveraging Laser-Matter Interactions in Unmagnetized and Magnetized Regimes</td>
                        </tr>
                        <tr>
                            <td>Rony Snyders</td>
                            <td>Université de Mons, Belgium</td>
                            <td>Study of an atmospheric gliding arc discharge for sustainable nitrogen fixation into Nox</td>
                        </tr>
                        <tr>
                            <td>Hideo Sugama</td>
                            <td>National Institute for Fusion Science, Japan</td>
                            <td>Momentum balance and energy exchange in gyrokinetic turbulent systems</td>
                        </tr>
                        <tr>
                            <td>Hiroshi Tanabe</td>
                            <td>University of Tokyo, Japan</td>
                            <td>Ion and electron heating characteristics during magnetic reconnection in ST-40 and TS-6 plasma merging experiments</td>
                        </tr>
                        <tr>
                            <td>Hubertus M. Thomas</td>
                            <td>German Aerospace Centre, Germany</td>
                            <td>30 years of plasma crystal research</td>
                        </tr>
                        <tr>
                            <td>Dmitri Uzdensky</td>
                            <td>Oxford University (presently Univ. Colorado Boulder), UK</td>
                            <td>Radiative Relativistic Magnetic Reconnection in Astrophysical Plasmas</td>
                        </tr>
                        <tr>
                            <td>Hao Wang</td>
                            <td>National Institute for Fusion Science, Japan</td>
                            <td>Nonlinear excitation of energetic-particle-driven geodesic acoustic mode by resonance overlap with Alfvén eigenmode</td>
                        </tr>
                        <tr>
                            <td>Colin Whyte</td>
                            <td>University of Strathclyde, UK</td>
                            <td>The Laser-hybrid Accelerator for Radiobiological Applications (LhARA)</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <br />
                <h1>Social program</h1>
                <ul>
                    <li>Welcome reception: Sunday, September 8, 2024 at 18:00</li>
                    <li>Excursion: Wednesday, September 11, 2024, from 14:30 to 17:30</li>
                    <li>Banquet: Thursday, September 12, 2024, at 19:00</li>
                </ul>
            </div>
        </div>
    );
}

export default ProgramPage