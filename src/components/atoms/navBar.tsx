"use client";

import { usePathname } from "next/navigation";

const NavBar = () => {  
    const pathname= usePathname();
    return(
        <div
            id="nav"
            style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.5), var(--color-primary-150))" }}
        >
              <ul>
                <li>
                  <a href="/" className={pathname === "/" ? "active" : ""}>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/program"
                    className={pathname === "/program" ? "active" : ""}
                  >
                    Program
                  </a>
                </li>
                <li>
                  <a
                    href="/registration"
                    className={pathname === "/registration" ? "active" : ""}
                  >
                    Registration
                  </a>
                </li>
                <li>
                  <a
                    href="/contribution"
                    className={pathname === "/contribution" ? "active" : ""}
                  >
                    Contribution
                  </a>
                </li>
                <li>
                  <a
                    href="/venue_travel"
                    className={pathname === "/venue_travel" ? "active" : ""}
                  >
                    Venue and travel
                  </a>
                </li>
                <li>
                  <a
                    href="/awards"
                    className={pathname === "/awards" ? "active" : ""}
                  >
                    Awards
                  </a>
                </li>
                <li>
                  <a
                    href="/committees"
                    className={pathname === "/committees" ? "active" : ""}
                  >
                    Committees
                  </a>
                </li>
              </ul>
            </div>
    )
}

export default NavBar;