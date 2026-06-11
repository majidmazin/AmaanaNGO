import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
  YOUTUBE_URL,
} from "@/lib/constants";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}${SITE_OG_IMAGE}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Hyderabad",
    },
    sameAs: [INSTAGRAM_URL, YOUTUBE_URL, FACEBOOK_URL],
  };
}
