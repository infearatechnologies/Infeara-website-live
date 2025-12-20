import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Infeara Technologies',
        short_name: 'Infeara',
        description: 'Next-Gen IT Solutions & Services',
        start_url: '/',
        display: 'standalone',
        background_color: '#020617', // slate-950
        theme_color: '#f97316', // orange-500
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
