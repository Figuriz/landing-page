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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Figuriz | Sistemas y asistentes de WhatsApp para negocios',
    template: '%s | Figuriz',
  },
  description: 'Asistentes de WhatsApp que responden y toman turnos, sistemas a medida y páginas web para negocios. Desde Tandil, Buenos Aires. Probá la demo de tu rubro.',
  keywords: [
    'asistente de WhatsApp para negocios',
    'sistema a medida',
    'desarrollo de software Tandil',
    'páginas web Tandil',
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
    title: 'Figuriz | Sistemas y asistentes de WhatsApp para negocios',
    description: 'Asistentes de WhatsApp que responden y toman turnos, sistemas a medida y páginas web para negocios. Desde Tandil, Buenos Aires. Probá la demo de tu rubro.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Figuriz | Sistemas y asistentes de WhatsApp para negocios',
    description: 'Asistentes de WhatsApp que responden y toman turnos, sistemas a medida y páginas web para negocios. Desde Tandil, Buenos Aires. Probá la demo de tu rubro.',
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
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': ['Organization', 'LocalBusiness'],
                  '@id': 'https://figuriz.com/#organization',
                  name: 'Figuriz',
                  url: 'https://figuriz.com',
                  logo: 'https://figuriz.com/logo-figuriz.png',
                  description: 'Asistentes de WhatsApp, sistemas a medida, páginas web e integraciones para negocios. Tandil, Buenos Aires.',
                  email: 'contacto@figuriz.com',
                  sameAs: ['https://linkedin.com/company/figuriz'],
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
