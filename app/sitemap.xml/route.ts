import { publications } from '@/lib/data'
import { NextResponse } from 'next/server'

const BASE = 'https://Dr.AbelHealthConsulting.org'

export function GET() {
  const staticPages = ['/', '/about', '/projects', '/services', '/publications', '/blog', '/contact']

  const urls = staticPages
    .map((p) => `<url><loc>${BASE}${p}</loc></url>`)
    .join('\n')

  const pubUrls = publications
    .map((p) => `<url><loc>${BASE}/publications/${p.id}</loc></url>`)
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n${pubUrls}\n</urlset>`

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
