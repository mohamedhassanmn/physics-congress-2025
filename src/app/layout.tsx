import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/atoms/navBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>ICPP 2024</title>
        <meta name="description" content="21st International Congress on Plasma Physics" />
        <meta name="keywords" content="plasma physics,plasma technology,astrophysics,nuclear fusion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="cache-control" content="max-age=0" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="-1" />
        <meta httpEquiv="expires" content="Tue, 01 Jan 1980 11:00:00 GMT" />
        <meta httpEquiv="pragma" content="no-cache" />
      </head>
      <body className={inter.className}>
        <div id="main-wrapper">
          <div id="top-wrapper">
            <div id="banner">
              <div id="banner-text">
                21<sup>st</sup> International Congress<br />
                on Plasma Physics<br />
                <br />
                September 8-13, 2024 <br />
                Ghent, Belgium
              </div>
            </div>
            <NavBar/>
          </div>

          {children}

          <div className="footer">
            <div className="image-row">
              <img src="/images/ugent.png" height="100" alt="UGent logo" />
              <img src="/images/fwo.png" height="100" alt="FWO logo" />
              <img src="/images/iupap.jpg" height="100" alt="IUPAP logo" />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
