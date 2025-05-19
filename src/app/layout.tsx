// export const dynamic = "force-dynamic";

import { client } from "@/sanity/client";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/atoms/navBar";
import { PortableText } from "next-sanity";

const portableTextComponents = {
  marks: {
    sup: ({children}: {children: React.ReactNode}) => <sup>{children}</sup>,
  },
};

const inter = Inter({ subsets: ["latin"] });

const LAYOUT_QUERY = `{
  "layoutSections": *[_type == "layoutSection"]{
    pageTitle,
    layoutContent,
    themeColor,
    heroImage{
      asset->{
        _id,
        url
      },
      alt
    },
    footerImages[]{
      asset->{
        _id,
        url
      },
      alt
    }
  }
}`;

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const data = await client.fetch(LAYOUT_QUERY);

  const layoutSection = data?.layoutSections[0];
  const heroImageUrl = layoutSection?.heroImage?.asset?.url;
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>{layoutSection?.pageTitle || "ICPP 2024"}</title>
        <meta name="description" content="21st International Congress on Plasma Physics" />
        <meta name="keywords" content="plasma physics,plasma technology,astrophysics,nuclear fusion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="cache-control" content="max-age=0" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="-1" />
        <meta httpEquiv="expires" content="Tue, 01 Jan 1980 11:00:00 GMT" />
        <meta httpEquiv="pragma" content="no-cache" />
      </head>
      <body className={inter.className} style={{ background: layoutSection?.themeColor || undefined }}>
        <div id="main-wrapper">
          <div id="top-wrapper">
            <div
              id="banner"
              style={{
                background: heroImageUrl
                  ? `linear-gradient(#0003, #0003), url(${heroImageUrl}) top no-repeat`
                  : undefined,
                backgroundSize: 'cover',
              }}
            >
              <div id="banner-text">
                <PortableText value={layoutSection?.layoutContent} components={portableTextComponents} />
              </div>
            </div>
            <NavBar/>
          </div>

          {children}

          <div className="footer">
            <div className="image-row">
              {layoutSection?.footerImages?.map((img: any, idx: number) => (
                <img
                  key={img.asset._id || idx}
                  src={img.asset.url}
                  height="100"
                  alt={img.alt || `Footer image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
