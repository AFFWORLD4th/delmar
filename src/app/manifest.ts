import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Keshar Marine | Global Ship Management & Maritime Excellence',
    short_name: 'Keshar Marine',
    description: 'Keshar Marine is a global maritime powerhouse redefining ship management and end-to-end supply chain solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0E2942',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
