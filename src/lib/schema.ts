import { OFFICE_INFO, LAWYER_PROFILE } from "./data";

export function getLegalServiceSchema() {
  const siteUrl = "https://nuriabedin.pages.dev";

  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteUrl}/#legalservice`,
    name: OFFICE_INFO.name,
    alternateName: OFFICE_INFO.shortName,
    description:
      "Advocacia e assessoria jurídica de alta performance sob liderança da Dra. Nuria Bedin. Atuação especializada e combativa em Direito Trabalhista e Previdenciário. Atendimento presencial sob agendamento em Maringá/PR e consultoria jurídica digital estratégica para todo o Brasil e exterior.",
    url: siteUrl,
    telephone: OFFICE_INFO.phoneRaw,
    priceRange: "$$$",
    image: `${siteUrl}/og-image_optimized_300.jpg`,
    logo: `${siteUrl}/logo_sem_fundo_usarnomodoclaro.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICE_INFO.address,
      addressLocality: OFFICE_INFO.city,
      addressRegion: OFFICE_INFO.state,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.4205,
      longitude: -51.9333,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "13:00",
      },
    ],
    sameAs: [
      OFFICE_INFO.instagramUrl,
    ],
    employee: [
      {
        "@type": "Person",
        name: LAWYER_PROFILE.name,
        jobTitle: LAWYER_PROFILE.role,
        description: `${LAWYER_PROFILE.academicSpecialization}, ${LAWYER_PROFILE.secondSpecialization}.`,
      },
    ],
  };
}