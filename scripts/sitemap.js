import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { SitemapStream, streamToPromise } from 'sitemap';
import { BASE_URL, dynamicRoutes, excludeRoutes } from '../sitemap.config.js';
import { routerPaths } from '../src/routesForSitemap.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

(async () => {
  const staticRoutes = routerPaths.filter(Boolean);
  const dynRoutes = await dynamicRoutes();
  const allRoutes = [...staticRoutes, ...dynRoutes].filter(r => !excludeRoutes.includes(r));

  const sitemapStream = new SitemapStream({ hostname: BASE_URL });

  allRoutes.forEach(route => {
    sitemapStream.write({ url: route, changefreq: 'weekly', priority: 0.8 });
  });

  sitemapStream.end();

  const sitemapXml = await streamToPromise(sitemapStream);
  writeFileSync(resolve(__dirname, '../dist/sitemap.xml'), sitemapXml.toString());
  console.log('✅ Sitemap generated at dist/sitemap.xml');
})();
