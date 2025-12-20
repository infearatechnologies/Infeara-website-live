import { MetadataRoute } from 'next';
import { servicesData } from '@/data/services';
import { industriesData } from '@/data/industries';
import { blogPosts } from '@/data/blog';
import { caseStudies } from '@/data/case-studies';
import { downloadResources } from '@/data/downloads';

const baseUrl = 'https://infeara.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        '',
        '/about',
        '/careers',
        '/contact',
        '/services',
        '/industries',
        '/locations/chennai',
        '/legal/privacy-policy',
        '/legal/terms-of-service',
        '/legal/cookies',
        '/legal/disclaimer',
        '/legal/sitemap',
        '/resources',
        '/resources/blog',
        '/resources/case-studies',
        '/resources/downloads',
        '/handbook',
        '/login',
        '/forgot-password',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Routes: Services
    const serviceRoutes = Object.entries(servicesData).flatMap(([categorySlug, services]) =>
        Object.keys(services).map((serviceSlug) => ({
            url: `${baseUrl}/services/${categorySlug}/${serviceSlug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        }))
    );

    // Dynamic Routes: Industries
    const industryRoutes = Object.values(industriesData).map((industry: any) => ({
        url: `${baseUrl}/industries/${industry.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    // Dynamic Routes: Blog
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/resources/blog/${post.slug}`,
        lastModified: new Date(post.publishDate),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // Dynamic Routes: Case Studies
    const caseStudyRoutes = caseStudies.map((study) => ({
        url: `${baseUrl}/resources/case-studies/${study.slug}`,
        lastModified: new Date(), // Or a date if available in logic, using current for now
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic Routes: Downloads
    const downloadRoutes = downloadResources.map((resource) => ({
        url: `${baseUrl}/resources/downloads/${resource.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [
        ...staticRoutes,
        ...serviceRoutes,
        ...industryRoutes,
        ...blogRoutes,
        ...caseStudyRoutes,
        ...downloadRoutes,
    ];
}
