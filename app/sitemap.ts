import { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';
import { servicesData } from '@/data/services';
import { industriesData } from '@/data/industries';

const baseUrl = 'https://infeara.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // Static Routes
    const staticRoutes = [
        '',
        '/about',
        '/careers',
        '/contact',
        '/services',
        '/industries',

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

    // Dynamic Routes: Services (from local data)
    const serviceRoutes = Object.entries(servicesData).flatMap(([categorySlug, services]) =>
        Object.keys(services).map((serviceSlug) => ({
            url: `${baseUrl}/services/${categorySlug}/${serviceSlug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        }))
    );

    // Dynamic Routes: Industries (from local data)
    const industryRoutes = Object.values(industriesData).map((industry: any) => ({
        url: `${baseUrl}/industries/${industry.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    // Fetch Dynamic Data from Supabase
    const { data: posts } = await supabase.from('posts').select('slug, updated_at');
    const { data: caseStudies } = await supabase.from('case_studies').select('slug, created_at'); // Using created_at as updated_at might be null/same
    const { data: downloads } = await supabase.from('downloads').select('slug, created_at');
    const { data: jobs } = await supabase.from('jobs').select('slug, created_at').eq('is_active', true);

    // Dynamic Routes: Blog
    const blogRoutes = (posts || []).map((post) => ({
        url: `${baseUrl}/resources/blog/${post.slug}`,
        lastModified: post.updated_at ? new Date(post.updated_at) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // Dynamic Routes: Case Studies
    const caseStudyRoutes = (caseStudies || []).map((study) => ({
        url: `${baseUrl}/resources/case-studies/${study.slug}`,
        lastModified: study.created_at ? new Date(study.created_at) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic Routes: Downloads
    const downloadRoutes = (downloads || []).map((resource) => ({
        url: `${baseUrl}/resources/downloads/${resource.slug}`,
        lastModified: resource.created_at ? new Date(resource.created_at) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic Routes: Jobs
    const jobRoutes = (jobs || []).map((job) => ({
        url: `${baseUrl}/careers/${job.slug}`,
        lastModified: job.created_at ? new Date(job.created_at) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Extra Service Routes (handled by services/[slug]/page.tsx)
    const extraServiceRoutes = [
        '/services/managed-it-amc',
        '/services/cyber-security',
        '/services/cloud-solutions',
        '/services/remote-support'
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [
        ...staticRoutes,
        ...serviceRoutes,
        ...extraServiceRoutes,
        ...industryRoutes,
        ...blogRoutes,
        ...caseStudyRoutes,
        ...downloadRoutes,
        ...jobRoutes,
    ];
}
