export const dynamic = "force-dynamic";

import { Inter } from "next/font/google";
import { PortableText } from "next-sanity";
import "./globals.css";
import { baseUrl } from '@/helper';
import NavBar from "@/components/atoms/navBar";
import { generateColorShades} from "@/theme/utils";
import { portableTextComponents } from "@/components/atoms/sanitySupportComponent";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const res = await fetch(baseUrl+`/api/layout`);
  const data = await res.json();

  const layoutSection = data?.layoutSections?.[0];
  const heroImageUrl = layoutSection?.heroImage?.asset?.url;
  const baseColor = layoutSection?.themeColor || "rgb(0, 43, 65)";
  const themeVars = generateColorShades(baseColor);
  // Generate CSS variable string for SSR (ensure variables are prefixed with --)
  const cssVars = `:root { ${Object.entries(themeVars).map(([k, v]) => `${k}: ${v};`).join(' ')} }`;
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>{layoutSection?.pageTitle || "ICPP 2026"}</title>
        <meta name="description" content="22nd International Congress on Plasma Physics" />
        <meta name="keywords" content="plasma physics,plasma technology,astrophysics,nuclear fusion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="cache-control" content="max-age=0" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="-1" />
        <meta httpEquiv="expires" content="Tue, 01 Jan 1980 11:00:00 GMT" />
        <meta httpEquiv="pragma" content="no-cache" />
        <style>{cssVars}</style>
      </head>
      <body className={inter.className} style={{ backgroundColor: "var(--color-primary-500)" }}>
        {/* Set theme colors on client */}
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
