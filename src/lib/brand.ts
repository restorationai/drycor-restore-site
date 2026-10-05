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
  trackingPhone: "(352) 424-6035",
  trackingPhoneRaw: "+13524246035",
  email: "team@drycor.com",
  hours: "24/7",
  foundedYear: "2005",
  primaryCity: "Thonotosassa",
  primaryState: "FL",
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
  gbpReviewCount: "27",
  gbpReviews: [
    { author: "Lauren", rating: 5, text: "They did excellent work upon the flood and the clean up process !! Thank you!", when: "October 2026" },
    { author: "Tim", rating: 5, text: "Robert and his crew did excellent work following water damage to our home.", when: "October 2026" },
    { author: "John", rating: 5, text: "These guys are absolutely amazing. So happy that we used them for our family’s home and I believe you will be happy as well.", when: "October 2026" },
    { author: "Charles", rating: 5, text: "Very detail oriented on the drying process. Works with all major insurance carriers & makes the entire process as smooth as possible. Definitely recommend", when: "September 2026" },
    { author: "Bobbie", rating: 5, text: "I can’t say enough wonderful things about Drycor Company! When a pipe broke in my home and caused water and mold problems, they responded so quickly and were there when I needed them most. Their promptness, professionalism, and genuine concern made a very stressful situation so much easier to…", when: "August 2026" },
    { author: "Shane", rating: 5, text: "A company with a long track record! Willow is great to deal with and really cares. No one wants to use the service but can not mess around with having mold in Florida", when: "July 2026" },
  ] as { author: string; rating: number; text: string; when: string }[],
  tagline: "24/7 restoration services in Thonotosassa, FL.",
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
  homeAboutBlurb: "DRYCOR RESTORE serves Thonotosassa and the surrounding FL area with professional damage restoration for homes and businesses. From the first emergency call to the final walkthrough, our team manages the entire recovery — and we answer the phone 24/7, so help is on the way the moment something goes wrong.",
} as const;

export const entityId = `${brand.canonicalUrl}/#identity`;
