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
    default: 'Figuriz | Automatización e IA para tu negocio',
    template: '%s | Figuriz',
  },
  description: 'Ahorra hasta un 80% del tiempo en tareas repetitivas. Chatbots con IA, asistentes de WhatsApp y automatizaciones que trabajan 24/7 para tu negocio en Argentina.',
  keywords: [
    'automatización de procesos',
    'inteligencia artificial para empresas',
    'chatbot con IA',
    'asistente WhatsApp',
    'n8n automatización',
    'integración de sistemas',
    'automatización Argentina',
    'flujos de trabajo inteligentes',
    'agencias de automatización',
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
    title: 'Figuriz | Automatización e IA para tu negocio',
    description: 'Ahorra hasta un 80% del tiempo en tareas repetitivas. Chatbots con IA, asistentes de WhatsApp y automatizaciones que trabajan 24/7 para tu negocio en Argentina.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Figuriz | Automatización e IA para tu negocio',
    description: 'Ahorra hasta un 80% del tiempo en tareas repetitivas. Chatbots con IA, asistentes de WhatsApp y automatizaciones que trabajan 24/7 para tu negocio en Argentina.',
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
                  description: 'Automatizamos procesos de negocio con IA. Chatbots, asistentes de WhatsApp, integraciones y flujos de trabajo inteligentes.',
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
                  name: 'Chatbots con IA',
                  description: 'Chatbots inteligentes que atienden consultas de tus clientes 24/7 con inteligencia artificial.',
                  provider: { '@id': 'https://figuriz.com/#organization' },
                },
                {
                  '@type': 'Service',
                  name: 'Asistentes de WhatsApp',
                  description: 'Asistentes automatizados en WhatsApp que responden, procesan pedidos y gestionan consultas.',
                  provider: { '@id': 'https://figuriz.com/#organization' },
                },
                {
                  '@type': 'Service',
                  name: 'Automatización de procesos',
                  description: 'Automatización de tareas repetitivas e integración de sistemas con n8n e IA.',
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
