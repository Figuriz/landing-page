import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Syne } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
})

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
})

const siteUrl = 'https://figuriz.com'
const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(/\D/g, '')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Figuriz | Sistemas simples para comercios y negocios',
    template: '%s | Figuriz',
  },
  description: 'Mostrador: sistema de ventas, caja y fiado para kioscos, almacenes y comercios, gratis por 14 días. También sistemas a medida por rubro y automatizaciones para negocios de todo el país.',
  keywords: [
    'sistema para comercios',
    'sistema para kiosco',
    'programa para almacén',
    'sistema de ventas y caja para negocio',
    'app para llevar control de ventas',
    'app para fiado',
    'sistema a medida',
    'asistente de WhatsApp para negocios',
    'desarrollo de software a medida',
    'sistema para pymes',
    'páginas web para negocios',
    'sistema de turnos',
    'integración de sistemas',
    'automatización de procesos',
    'Figuriz',
  ],
  authors: [{ name: 'Figuriz', url: siteUrl }],
  creator: 'Figuriz',
  publisher: 'Figuriz',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: siteUrl,
    siteName: 'Figuriz',
    title: 'Figuriz | Sistemas simples para comercios y negocios',
    description: 'Mostrador: sistema de ventas, caja y fiado para kioscos, almacenes y comercios, gratis por 14 días. También sistemas a medida por rubro y automatizaciones para negocios de todo el país.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Figuriz | Sistemas simples para comercios y negocios',
    description: 'Mostrador: sistema de ventas, caja y fiado para kioscos, almacenes y comercios, gratis por 14 días. También sistemas a medida por rubro y automatizaciones para negocios de todo el país.',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', sizes: '32x32', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', media: '(prefers-color-scheme: dark)' },
      { url: '/icon-figuriz.svg', type: 'image/svg+xml' },
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180' },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'es-AR': siteUrl,
      'es': siteUrl,
      'x-default': siteUrl,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${syne.variable} font-sans antialiased`}>
        {children}
        {/* Etiqueta <script> común (no next/script) para que el JSON-LD salga en el HTML del servidor
            y lo lean también los rastreadores que no ejecutan JavaScript. */}
        <script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': ['Organization', 'ProfessionalService'],
                  '@id': 'https://figuriz.com/#organization',
                  name: 'Figuriz',
                  url: 'https://figuriz.com',
                  logo: 'https://figuriz.com/logo-figuriz.png',
                  description: 'Mostrador para comercios, sistemas a medida, automatizaciones y páginas web para negocios de toda Argentina.',
                  email: 'contacto@figuriz.com',
                  ...(whatsappNumber ? { telephone: `+${whatsappNumber}` } : {}),
                  sameAs: ['https://www.instagram.com/figuriz.web/', 'https://linkedin.com/company/figuriz'],
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Tandil',
                    addressRegion: 'Buenos Aires',
                    addressCountry: 'AR',
                  },
                  areaServed: { '@type': 'Country', name: 'Argentina' },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://figuriz.com/#website',
                  url: 'https://figuriz.com',
                  name: 'Figuriz',
                  publisher: { '@id': 'https://figuriz.com/#organization' },
                },
                {
                  '@type': 'Service',
                  name: 'Mostrador',
                  description: 'App para comercios que se usa desde el celular: ventas en dos toques, caja del día y cobros que aparecen solos. También lleva el fiado, con detalle y fecha.',
                  url: 'https://figuriz.com/mostrador',
                  provider: { '@id': 'https://figuriz.com/#organization' },
                },
                {
                  '@type': 'Service',
                  name: 'Sistemas a medida',
                  description: 'Sistemas de pedidos, stock, cuentas corrientes y turnos pensados para usar desde el celular.',
                  provider: { '@id': 'https://figuriz.com/#organization' },
                },
                {
                  '@type': 'Service',
                  name: 'Asistentes de WhatsApp',
                  description: 'Asistentes en WhatsApp que responden consultas con los datos del negocio y toman pedidos de turnos o reservas.',
                  provider: { '@id': 'https://figuriz.com/#organization' },
                },
                {
                  '@type': 'Service',
                  name: 'Páginas web',
                  description: 'Páginas web con fotos y reseñas reales del negocio y consultas que llegan armadas por WhatsApp.',
                  provider: { '@id': 'https://figuriz.com/#organization' },
                },
              ],
            }),
          }}
        />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
