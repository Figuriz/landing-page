import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

// Imagen de vista previa (og:image) de /automatizaciones, con el mismo estilo que /og/demo/<slug>.
export const alt = 'Automatizaciones para pymes a precio cerrado · Figuriz'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const logoData = readFileSync(join(process.cwd(), 'public', 'logo-figuriz.png'))
  const logo = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0C0C10',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
          borderLeft: '16px solid #C1121F',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt="Figuriz" width={300} height={90} style={{ objectFit: 'contain', objectPosition: 'left' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ fontSize: '30px', color: '#C1121F', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            A precio cerrado
          </div>
          <div style={{ fontSize: '76px', color: '#FFFFFF', fontWeight: 800, lineHeight: 1.05 }}>Automatizaciones</div>
          <div style={{ fontSize: '36px', color: '#EEEAE3', opacity: 0.8 }}>Cobros, avisos y reportes que salen solos</div>
        </div>
        <div style={{ fontSize: '26px', color: '#EEEAE3', opacity: 0.6 }}>figuriz.com/automatizaciones</div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
