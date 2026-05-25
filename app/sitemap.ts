import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://protonity.vercel.app/',
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: 'https://protonity.vercel.app/services',
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: 'https://protonity.vercel.app/testimonials',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://protonity.vercel.app/contact',
      lastModified: new Date(),
      priority: 0.8,
    },
  ]
}