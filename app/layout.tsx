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
  description: 'Automatizamos la atención al cliente, el procesamiento de datos y las tareas repetitivas de tu negocio. Chatbots, asistentes de WhatsApp e integraciones para que tu empresa trabaje sola.',
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
    description: 'Automatizamos tus procesos con n8n e IA. Chatbots, asistentes de WhatsApp e integraciones — para que vos te enfoques en crecer.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Figuriz | Automatización e IA para tu negocio',
    description: 'Automatizamos tus procesos con n8n e IA. Chatbots, asistentes de WhatsApp e integraciones.',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', sizes: '32x32', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180' },
  },
  alternates: {
    canonical: siteUrl,
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
              '@type': 'Organization',
              name: 'Figuriz',
              url: 'https://figuriz.com',
              logo: 'https://figuriz.com/logo-figuriz.png',
              description: 'Automatizamos procesos de negocio con n8n e IA. Chatbots, asistentes de WhatsApp, integraciones y flujos de trabajo inteligentes.',
              email: 'contacto@figuriz.com',
              sameAs: ['https://linkedin.com/company/figuriz'],
              serviceType: [
                'Automatización de procesos',
                'Chatbots con IA',
                'Asistentes de WhatsApp',
                'Integración de sistemas',
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
