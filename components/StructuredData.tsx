export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Neoura',
    url: 'https://neoura.com',
    logo: 'https://neoura.com/logo.png',
    description: 'Kurumsal yazılım geliştirme, web uygulamaları, mobil uygulama ve ERP sistemleri.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'İzmir',
      addressCountry: 'TR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@neoura.com',
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'English'],
    },
    sameAs: [
      'https://www.linkedin.com/company/neoura',
      'https://github.com/neoura',
      'https://twitter.com/neoura',
    ],
    offers: {
      '@type': 'AggregateOffer',
      offerCount: '6',
      offers: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Geliştirme',
            description: 'Modern ve ölçeklenebilir web uygulamaları',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobil Uygulama Geliştirme',
            description: 'iOS ve Android için native çözümler',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kurumsal ERP Sistemi',
            description: 'Entegre kurumsal kaynak planlaması',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
    },
  }

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://neoura.com',
    name: 'Neoura',
    image: 'https://neoura.com/logo.png',
    url: 'https://neoura.com',
    telephone: '',
    email: 'info@neoura.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'İzmir',
      addressRegion: 'İzmir',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.4237,
      longitude: 27.1428,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
    </>
  )
}

