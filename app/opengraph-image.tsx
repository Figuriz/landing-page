import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const alt = 'Figuriz — Automatización e IA para tu negocio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const logoData = readFileSync(join(process.cwd(), 'public', 'logo-figuriz.png'))
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0C0C10',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Fondo con gradiente rojo */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(193,18,31,0.25) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Grid de fondo */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(238,234,227,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(238,234,227,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Contenido */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            zIndex: 1,
            padding: '0 80px',
            textAlign: 'center',
          }}
        >
          {/* Logo imagen */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoBase64}
            alt="Figuriz"
            width={480}
            height={144}
            style={{ objectFit: 'contain' }}
          />

          {/* Línea roja */}
          <div
            style={{
              width: '80px',
              height: '4px',
              background: '#C1121F',
              borderRadius: '2px',
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: '32px',
              fontWeight: '600',
              color: '#EEEAE3',
              opacity: 0.85,
              maxWidth: '800px',
              lineHeight: 1.3,
            }}
          >
            Automatización e IA para tu negocio
          </div>

          {/* Subtitulo */}
          <div
            style={{
              fontSize: '20px',
              color: '#7878A0',
              maxWidth: '700px',
            }}
          >
            Chatbots · Asistentes de WhatsApp · n8n · Integraciones
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '18px',
            color: '#C1121F',
            fontWeight: '600',
            zIndex: 1,
          }}
        >
          figuriz.com
        </div>
      </div>
    ),
    { ...size }
  )
}
