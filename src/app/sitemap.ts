import { MetadataRoute } from 'next';
import { certifications } from '@/lib/certifications';
import { serviceCatalog } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kesharmarine.com';
  const currentDate = new Date().toISOString();

  const routes = [
    '',
    '/about',
    '/services',
    // '/fleet',
    '/shipping-solutions',
    '/supply-capability',
    '/global-supply-chain',
    '/network',
    '/certifications',
    '/resources',
    '/privacy-policy',
    '/terms-and-conditions',
    '/site-map',
    '/contact',
    ...serviceCatalog.map((service) => `/services/${service.slug}`),
    ...certifications.map((certification) => `/certifications/${certification.slug}`),
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
