import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Delmar Services | Global Maritime & Business Support',
    short_name: 'Delmar Services',
    description: 'Delmar Services provides global maritime operations, supply, logistics coordination, and international business support.',
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
