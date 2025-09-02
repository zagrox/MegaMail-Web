import fs from 'fs';
import path from 'path';

// This script generates a sitemap.xml file in the public directory.
// To add a new page, simply add its path to the `routes` array below.

const domain = 'https://www.megamail.ir';
const publicDir = path.resolve(process.cwd(), 'public');

// Add all your application's routes here.
const routes = [
  '/',
  '/features',
  '/pricing',
  '/modules',
  '/templates',
  '/contacts',
  '/about',
  '/support',
  '/terms',
  '/privacy',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      const path = route === '/' ? '' : route;
      const priority = route === '/' ? '1.0' : '0.8';
      return `
    <url>
      <loc>${domain}${path}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${priority}</priority>
    </url>
  `;
    })
    .join('')}
</urlset>
`;

const sitemapPath = path.join(publicDir, 'sitemap.xml');

// Ensure the public directory exists before writing the file
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(sitemapPath, sitemap);

console.log('sitemap.xml generated successfully!');