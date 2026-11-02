import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

// Imagen de vista previa (og:image) de cada demo genérica: /og/demo/<slug>
// La usan las etiquetas og:image de public/demos/demo-*/index.html.
const DEMOS: Record<string, { rubro: string; detalle: string }> = {
  'demo-pedidos': { rubro: 'Distribuidoras', detalle: 'Pedidos de los vendedores, stock y facturación' },
  'demo-fabrica': { rubro: 'Fábricas de alimentos', detalle: 'Lotes, vencimientos y stock por local' },
  'demo-corralon': { rubro: 'Corralones y ferreterías', detalle: 'Presupuestos, cuentas corrientes y entregas' },
  'demo-taller': { rubro: 'Talleres mecánicos', detalle: 'Órdenes de trabajo y presupuestos por WhatsApp' },
  'demo-cabanas': { rubro: 'Cabañas y hoteles', detalle: 'Todas las reservas en una sola grilla' },
  'demo-restaurante': { rubro: 'Restaurantes', detalle: 'Mesas, lista de espera y reservas confirmadas' },
  'demo-salon': { rubro: 'Salones de eventos', detalle: 'Fechas, presupuestos, señas y saldos' },
  'demo-inmobiliaria': { rubro: 'Inmobiliarias', detalle: 'Cobros, ajustes por índice y liquidaciones' },
  'demo-consultorio': { rubro: 'Consultorios', detalle: 'Turnos online y menos pacientes que faltan' },
  'demo-veterinaria': { rubro: 'Veterinarias', detalle: 'Vacunas, fichas y reposición de alimento' },
  'demo-repuestos': { rubro: 'Repuestos y autopartes', detalle: 'Búsqueda por vehículo y equivalencias' },
  'demo-usados': { rubro: 'Agencias de usados', detalle: 'Stock, consultas y transferencias' },
  'demo-agronomia': { rubro: 'Agronomías', detalle: 'Cuentas en dólares y pesos, y canje por granos' },
  'demo-acopio': { rubro: 'Acopios y cooperativas', detalle: 'Balanza, stock por productor y portal' },
  'demo-transporte': { rubro: 'Expresos y logística', detalle: 'Seguimiento de envíos y hoja de ruta' },
  'demo-gimnasio': { rubro: 'Gimnasios', detalle: 'Cuotas, ingreso y socios que dejan de venir' },
}

export function generateStaticParams() {
  return Object.keys(DEMOS).map((slug) => ({ slug }))
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const demo = DEMOS[slug]
  if (!demo) return new Response('No existe', { status: 404 })

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
            Demo para probar
          </div>
          <div style={{ fontSize: '76px', color: '#FFFFFF', fontWeight: 800, lineHeight: 1.05 }}>{demo.rubro}</div>
          <div style={{ fontSize: '36px', color: '#EEEAE3', opacity: 0.8 }}>{demo.detalle}</div>
        </div>
        <div style={{ fontSize: '26px', color: '#EEEAE3', opacity: 0.6 }}>figuriz.com/demos</div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
