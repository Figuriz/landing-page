import { MetadataRoute } from 'next'

const BASE = 'https://figuriz.com'

// Demos genéricas por rubro (public/demos/<slug>/index.html).
// Los bocetos con el nombre de un negocio real llevan noindex y no van acá.
const DEMOS = [
  'demo-pedidos',
  'demo-fabrica',
  'demo-corralon',
  'demo-taller',
  'demo-cabanas',
  'demo-restaurante',
  'demo-salon',
  'demo-inmobiliaria',
  'demo-consultorio',
  'demo-veterinaria',
  'demo-repuestos',
  'demo-usados',
  'demo-agronomia',
  'demo-acopio',
  'demo-transporte',
  'demo-gimnasio',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/demos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...DEMOS.map((slug) => ({
      url: `${BASE}/demos/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
