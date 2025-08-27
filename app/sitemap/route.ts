export async function GET() {
  const baseUrl = "https://awa-consulting.fr";

  const pages = [
    {
      url: "/",
      changefreq: "daily",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/contact",
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/legal",
      changefreq: "yearly",
      priority: 0.5,
      lastmod: new Date().toISOString(),
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
    )
    .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
