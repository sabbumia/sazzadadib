// app/sitemap.ts

import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config/site';
import { projectsData } from '@/lib/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/experience', '/projects', '/publications', '/contact'];

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: `${siteConfig.url}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
