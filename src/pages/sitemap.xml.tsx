import type { GetServerSideProps } from 'next'

const SITE_URL = 'https://terranabota.com.br'

// Incluir apenas páginas indexáveis.
// /privacidade tem meta noindex — excluída para evitar sinal contraditório.
const pages = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
]

const Sitemap = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const today = new Date().toISOString().split('T')[0]

  const urls = pages
    .map(
      ({ path, changefreq, priority }) => `
  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`

  res.setHeader('Content-Type', 'text/xml; charset=utf-8')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
  res.write(xml)
  res.end()

  return { props: {} }
}

export default Sitemap
