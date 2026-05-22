import { MetadataRoute } from 'next';
import { certifications } from '@/lib/certifications';
import { serviceCatalog } from '@/lib/services';
import { blogPosts } from '@/lib/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.delmarservice.com';
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
    '/blog',
    ...serviceCatalog.map((service) => `/services/${service.slug}`),
    ...certifications.map((certification) => `/certifications/${certification.slug}`),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
