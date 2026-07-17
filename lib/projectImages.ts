// lib/projectImages.ts
// Server-only: reads each project's public/projects/<id> folder directly, so any
// image dropped in there (any filename, any common raster format) shows up in the
// gallery automatically — no need to keep a hardcoded list in sync.

import fs from 'node:fs';
import path from 'node:path';

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);

/** Returns web paths for every supported image in /public/projects/<projectId>, naturally sorted by filename. */
export function getProjectImages(projectId: string): string[] {
  const dir = path.join(process.cwd(), 'public', 'projects', projectId);

  let entries: string[];
  try {
    entries = fs.readdirSync(dir);
  } catch {
    return [];
  }

  return entries
    .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map((name) => `/projects/${projectId}/${name}`);
}

/** First image of a project — used as the card cover on listing pages. */
export function getProjectCover(projectId: string): string | undefined {
  return getProjectImages(projectId)[0];
}

/** Cover lookup for a set of projects, safe to pass from server to client components. */
export function getProjectCovers(projectIds: string[]): Record<string, string | undefined> {
  return Object.fromEntries(projectIds.map((id) => [id, getProjectCover(id)]));
}
