// Brand config — hydrated at scaffold time by build_site.py from
// plan-input.json and the client record. All {{TOKENS}} are replaced
// by the scaffold step; this file should not be hand-edited after that.

export const brand = {
  slug: "drycor-restore",
  displayName: "DRYCOR RESTORE",
  shortName: "DRYCOR RESTORE",
  legalName: "Showalter Construction & Restoration, LLC",
  // Registered DBA / trade name — filled by rename_site_sync.py the moment
  // the state approves the client's DBA filing (empty until then). When set,
  // the footer carries the "[legal] doing business as [DBA]" line and schema
  // declares it as the business name, so Google/BrightLocal find the new
  // name corroborated on the site before and during the GBP rename.
  dbaName: "DryCor Restore",
  domain: "drycor.com",
  canonicalUrl: "https://drycor.com",
  phone: "(813) 829-1091",
  phoneRaw: "+18138291091",
  hideMobileHeaderCall: false,
  // Sitewide call-tracking number (2026-08-24). When BOTH fields are set,
  // a tiny inline script in BaseLayout swaps every visible phone mention
  // and tel: link to this number AFTER the page renders. The HTML source,
  // the JSON-LD in schema.ts, and anything crawlers/citation-checkers read
  // keep the canonical NAP number above — humans dial the tracked line,
  // Google sees consistent NAP. Empty = feature off (default at scaffold;
  // filled by the call-tracking provisioning step).
  trackingPhone: "(877) 369-9074",
  trackingPhoneRaw: "+18773699074",
  email: "team@drycor.com",
  hours: "24/7",
  foundedYear: "2005",
  primaryCity: "Thonotosassa",
  primaryState: "FL",
  // Marketing area for coverage copy (Robert 2026-10-09: "Thonotosassa is
  // mentioned many many times on the website"). Lead with the metro; the
  // home city stays in the address/NAP, map, schema and home-city pages.
  marketArea: "Tampa Bay",
  // primaryCity/primaryState = the #1 MARKETING city (headlines, coverage
  // copy). addressCity/addressState = where the business PHYSICALLY is.
  // They are usually the same and often diverge (DISS: Farrell PA office,
  // Youngstown OH target) — only the address pair may go in a PostalAddress.
  addressCity: "Thonotosassa",
  addressState: "FL",
  streetAddress: "10798 Florence Ave",
  postalCode: "33592",
  lat: "28.0655281",
  lng: "-82.294789",
  placeId: "ChIJ--4aNxtJuIURz7eqWifJBM4",
  googleCid: "14845211442582042575",
  imagesBase: "https://images.drycor.com",
  googleMapsApiKey: "",
  // Analytics — set post-scaffold (scripts/analytics_set.py / create_ga4.py); no-op if empty
  ga4MeasurementId: "",
  clarityProjectId: "",
  logoUrl: "/images/logo.png",
  licenseNumbers: ["CBC1253966"] as string[],
  licenseAuthority: "",
  // State license-verification page — the footer links the license number here.
  licenseLookupUrl: "https://www.myfloridalicense.com/wl11.asp",
  licenseType: "",
  // Operator-confirmed "licensed & insured" attestation from plan-input.json —
  // lets the TrustStrip show the badge before a license number is on file.
  licensedInsuredAttested: true as boolean,
  certifications: ["IICRC Certified Firm", "IICRC WRT (Water)", "EPA Lead-Safe Certified", "OSHA Trained", "NAERMC-(Mold)"] as string[],
  trustBadges: ["IICRC Certified Firm", "Licensed & Insured", "24/7 Emergency Service", "Locally Owned & Operated"] as string[],
  jobPhotos: [] as string[],
  sameAsUrls: ["https://www.linkedin.com/company/drycor-restore/", "https://www.bing.com/maps?ss=ypid.YND295ED88552C26BD", "https://homeguide.com/fl/tampa/water-damage-restoration/drycor-restore-B7Lx1MPyy"] as string[],
  // GBP rating fields — synced from the live Google Business Profile by
  // scripts/sync_brand_reviews.py; never hand-edited (real ratings only).
  gbpRatingValue: "4.9",
  gbpReviewCount: "33",
  gbpReviews: [
    { author: "Peter", rating: 5, text: "Great response, action AND follow up! Top quality people, process, equipment and materials. Hard working and conscientious crew on job-site. Knowledgeable office staff handling the complicated paperwork that accompanies these projects. Was refreshing to see an old school business with a hands on…", when: "October 2026" },
    { author: "Jeremy", rating: 5, text: "Robert and team are always on top of every issue. I’m amazed at how fast they respond and the fact they always respond and show up. Really appreciate it!", when: "October 2026" },
    { author: "Jake", rating: 5, text: "Great company did a great job clean professional work was very helpful and responsive with all our questions", when: "October 2026" },
    { author: "Michael", rating: 5, text: "Working with said company was a great experience. Very professional and timely. I would absolutely recommend this company for any type of construction work.", when: "October 2026" },
    { author: "Virgil", rating: 5, text: "Very consistent professional friendly customer service during a trying time being out of my home for 7 months.", when: "October 2026" },
    { author: "Don", rating: 5, text: "Rob and crew did great work when my indoor water heater leaked overnight and I needed to get a lot of work done!! Very satisfied with it all.", when: "October 2026" },
  ] as { author: string; rating: number; text: string; when: string }[],
  tagline: "24/7 restoration services across Tampa Bay, FL.",
  // Rob 2026-09-15: replaces "we work with all insurance carriers" (no carrier logos/names)
  insuranceTrustLine: "Managed Repair Preferred Vendor for 34 Insurance Carriers in the State of Florida",
  ctaLabel: "24/7 Emergency Line",
  // Vertical trade-identity copy — resolved at scaffold time from
  // templates/{vertical}/vertical-tokens.json (see scripts/verticals.py).
  // Components must use these instead of hardcoding a trade phrase.
  // vertical gates layout too: restoration is call-first, so the homepage
  // hero renders NO estimate form there (Santino 2026-09-11).
  vertical: "restoration",
  tradeNoun: "restoration",
  specialistPhrase: "Damage Restoration Specialists",
  announcementSuffix: "24/7 Emergency Response",
  // Client direction (Robert, 2026-10-08 call): replaces the default bar text site-wide.
  announcementText: "Serving the Panhandle hurricane-affected area",
  homeAboutBlurb: "DRYCOR RESTORE serves the Tampa Bay area from our Thonotosassa office with professional damage restoration for homes and businesses. From the first emergency call to the final walkthrough, our team manages the entire recovery — and we answer the phone 24/7, so help is on the way the moment something goes wrong.",
} as const;

export const entityId = `${brand.canonicalUrl}/#identity`;
