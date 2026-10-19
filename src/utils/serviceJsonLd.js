import { SITE_URL } from '../components/Seo';

/**
 * JSON-LD (Service + BreadcrumbList) de una landing de servicio adicional.
 * Llamarlo a nivel de módulo, nunca dentro del componente: Seo.jsx incluye
 * `jsonLd` en las dependencias de su useEffect.
 */
export function buildServiceJsonLd({ path, name, serviceType, description, offers }) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}${path}#service`,
      serviceType,
      name,
      description,
      url: `${SITE_URL}${path}`,
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: { '@type': 'City', name: 'Madrid' },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${SITE_URL}${path}`,
        servicePhone: '+34614744754',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name,
        itemListElement: offers.map((offer) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: offer },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` },
      ],
    },
  ];
}
