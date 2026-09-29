import styles from "@/app/sponsorSection.module.css";

export type SponsorTier =
  | "diamond"
  | "platinum"
  | "gold"
  | "silver"
  | "exhibition"
  | "banquet"
  | "registrationDesk"
  | "studentTravelGrant"
  | "bestPaperAwards"
  | "lanyard"
  | "digitalPartner"
  | "technologyPartner";

export interface Sponsor {
  _key?: string;
  name: string;
  tier: SponsorTier;
  website?: string;
  logo?: { asset?: { _id?: string; url?: string }; alt?: string };
}

// Headline tiers: logo size steps down with the tier.
const HEADLINE_TIERS: { tier: SponsorTier; label: string; height: number }[] = [
  { tier: "diamond", label: "Diamond", height: 96 },
  { tier: "platinum", label: "Platinum", height: 80 },
  { tier: "gold", label: "Gold", height: 64 },
  { tier: "silver", label: "Silver", height: 52 },
];

// Category sponsors: shown together, each captioned with what they support.
const PARTNER_ROLES: { tier: SponsorTier; label: string }[] = [
  { tier: "banquet", label: "Banquet" },
  { tier: "exhibition", label: "Exhibition" },
  { tier: "registrationDesk", label: "Registration desk" },
  { tier: "studentTravelGrant", label: "Student travel grants" },
  { tier: "bestPaperAwards", label: "Best paper & poster awards" },
  { tier: "lanyard", label: "Lanyards" },
  { tier: "digitalPartner", label: "Digital partner" },
  { tier: "technologyPartner", label: "Technology partner" },
];

// Ask the Sanity CDN for a right-sized image (2x for retina).
function logoSrc(url: string | undefined, height: number) {
  if (!url) return undefined;
  if (!url.includes("cdn.sanity.io")) return url;
  return `${url}?h=${height * 2}&fit=max&auto=format`;
}

function SponsorLogo({
  sponsor,
  height,
  caption,
}: {
  sponsor: Sponsor;
  height: number;
  caption?: string;
}) {
  const src = logoSrc(sponsor.logo?.asset?.url, height);
  const content = (
    <>
      {caption && <span className={styles.role}>{caption}</span>}
      <span className={styles.plate} style={{ height: height + 32 }}>
        {src ? (
          <img
            src={src}
            alt={sponsor.logo?.alt || sponsor.name}
            style={{ maxHeight: height }}
            loading="lazy"
          />
        ) : (
          <span className={styles.fallbackName}>{sponsor.name}</span>
        )}
      </span>
      <span className={styles.name}>{sponsor.name}</span>
    </>
  );

  return sponsor.website ? (
    <a
      className={styles.sponsor}
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  ) : (
    <div className={styles.sponsor}>{content}</div>
  );
}

export default function SponsorsSection({
  sponsors,
}: {
  sponsors?: Sponsor[];
}) {
  if (!sponsors?.length) return null;

  const byTier = (tier: SponsorTier) => sponsors.filter((s) => s.tier === tier);
  const partners = PARTNER_ROLES.flatMap(({ tier, label }) =>
    byTier(tier).map((s) => ({ sponsor: s, label })),
  );

  return (
    <section className={styles.section} aria-labelledby="sponsors-heading">
      <h2 id="sponsors-heading" className={styles.heading}>
        Sponsors & partners
      </h2>

      {HEADLINE_TIERS.map(({ tier, label, height }) => {
        const list = byTier(tier);
        if (!list.length) return null;
        return (
          <div
            key={tier}
            className={`${styles.tier} ${styles[tier]}`}
            aria-label={`${label} sponsors`}
          >
            <br/>
            <h3 className={styles.tierLabel}>
              <span className={styles.swatch} aria-hidden="true" />
              {label}
            </h3>
            <div className={styles.row}>
              {list.map((s, i) => (
                <SponsorLogo key={s._key || i} sponsor={s} height={height} />
              ))}
            </div>
          </div>
        );
      })}

      {partners.length > 0 && (
        <div className={`${styles.tier} ${styles.partners}`}>
          <br/>
          <br/>
          <h3 className={styles.tierLabel}>Programme partners</h3>
          <br/>
          <div className={styles.row}>
            {partners.map(({ sponsor, label }, i) => (
              <SponsorLogo
                key={sponsor._key || i}
                sponsor={sponsor}
                height={44}
                caption={label}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
