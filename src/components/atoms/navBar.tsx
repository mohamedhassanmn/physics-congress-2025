"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { routes } from "@/helper";

const NavBar = () => {  
    const pathname= usePathname();
    return(
        <div
            id="nav"
            style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.5), var(--color-primary-150))" }}
        >
              <ul>
                <li>
                  <Link href={routes.home} className={pathname === "/" ? "active" : ""}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={routes.program} className={pathname === routes.program ? "active" : ""}>
                    Program
                  </Link>
                </li>
                <li>
                  <Link href={routes.registration} className={pathname === routes.registration ? "active" : ""}>
                    Registration
                  </Link>
                </li>
                <li>
                  <Link href={routes.contribution} className={pathname === routes.contribution ? "active" : ""}>
                    Contribution
                  </Link>
                </li>
                <li>
                  <Link href={routes.venueAndTravel} className={pathname === routes.venueAndTravel ? "active" : ""}>
                    Venue and travel
                  </Link>
                </li>
                <li>
                  <Link href={routes.awards} className={pathname === routes.awards ? "active" : ""}>
                    Awards
                  </Link>
                </li>
                <li>
                  <Link href={routes.committees} className={pathname === routes.committees ? "active" : ""}>
                    Committees
                  </Link>
                </li>
              </ul>
            </div>
    )
}

export default NavBar;