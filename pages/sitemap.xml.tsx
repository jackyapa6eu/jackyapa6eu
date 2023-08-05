import * as fs from 'fs';
import { GetServerSideProps } from 'next';

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const BASE_URL =
    process.env.NODE_ENV === 'production'
      ? 'https://jackyapa6eu-v0-1.vercel.app/'
      : 'http://localhost:3000';

  const products = []; // Здесь может быть вызов с любого API

  const dynamicPaths = products.map((singleProduct) => {
    return `${BASE_URL}/product/${singleProduct.id}`;
  });

  const staticPaths = fs
    .readdirSync('pages')
    .filter((staticPage) => {
      return ![
        'api',
        'portfolio',
        '_app.tsx',
        '_document.tsx',
        '404.tsx',
        'sitemap.xml.tsx',
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath.split('.')[0]}`;
    });

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map(
          (url) =>
            `<url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>`
        )
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
