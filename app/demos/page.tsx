import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Package,
  Factory,
  Hammer,
  Cog,
  Car,
  Wrench,
  Stethoscope,
  PawPrint,
  Dumbbell,
  Building2,
  Truck,
  TreePine,
  UtensilsCrossed,
  PartyPopper,
  Sprout,
  Wheat,
  MousePointerClick,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Demos por rubro",
  description:
    "Sistemas a medida para negocios de Tandil y la zona. Probá una demo de tu rubro: pedidos, stock, turnos, cuentas corrientes y avisos por WhatsApp.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://figuriz.com/demos" },
}

type Demo = { slug: string; name: string; text: string; icon: typeof Package }

const groups: { title: string; demos: Demo[] }[] = [
  {
    title: "Comercio y producción",
    demos: [
      { slug: "demo-pedidos", name: "Distribuidoras", icon: Package, text: "Pedidos de los vendedores desde el celular, stock y facturación A/B con un toque." },
      { slug: "demo-fabrica", name: "Fábricas de alimentos", icon: Factory, text: "Lotes en maduración, vencimientos, stock de fábrica y locales, trazabilidad." },
      { slug: "demo-corralon", name: "Corralones y ferreterías", icon: Hammer, text: "Presupuestos con seguimiento, cuentas corrientes, agenda del camión y aumentos por proveedor." },
      { slug: "demo-repuestos", name: "Repuestos y autopartes", icon: Cog, text: "Búsqueda por vehículo con equivalencias y consultas de WhatsApp respondidas con stock y precio." },
      { slug: "demo-usados", name: "Agencias de usados", icon: Car, text: "Stock con días en playa, consultas de MercadoLibre, Instagram y WhatsApp juntas, transferencias con checklist." },
    ],
  },
  {
    title: "Servicios",
    demos: [
      { slug: "demo-taller", name: "Talleres mecánicos", icon: Wrench, text: "Órdenes de trabajo, presupuesto aprobado por WhatsApp e historial por patente." },
      { slug: "demo-consultorio", name: "Consultorios", icon: Stethoscope, text: "Turnos online, confirmación automática y menos pacientes que faltan." },
      { slug: "demo-veterinaria", name: "Veterinarias", icon: PawPrint, text: "Ficha de cada mascota, recordatorio de vacunas y reposición de alimento." },
      { slug: "demo-gimnasio", name: "Gimnasios", icon: Dumbbell, text: "Control de cuotas en la entrada, cobros y socios que dejaron de venir." },
      { slug: "demo-inmobiliaria", name: "Inmobiliarias", icon: Building2, text: "Cobro de alquileres, ajustes por índice y liquidaciones a propietarios." },
      { slug: "demo-transporte", name: "Expresos y logística", icon: Truck, text: "Seguimiento de envíos para el cliente, hoja de ruta del chofer y contrareembolsos." },
    ],
  },
  {
    title: "Turismo y gastronomía",
    demos: [
      { slug: "demo-cabanas", name: "Cabañas y hoteles", icon: TreePine, text: "Booking, WhatsApp y reservas directas en una sola grilla, sin overbooking." },
      { slug: "demo-restaurante", name: "Restaurantes", icon: UtensilsCrossed, text: "Mesas en tiempo real, lista de espera con aviso y reservas confirmadas." },
      { slug: "demo-salon", name: "Salones de eventos", icon: PartyPopper, text: "Calendario sin dobles reservas, presupuestador, señas y checklist." },
    ],
  },
  {
    title: "Campo",
    demos: [
      { slug: "demo-agronomia", name: "Agronomías e insumos", icon: Sprout, text: "Cuenta de cada productor en dólares y pesos, pedidos por WhatsApp y canje por granos." },
      { slug: "demo-acopio", name: "Acopios y cooperativas", icon: Wheat, text: "Balanza con carta de porte y merma, stock por productor y un portal para el productor." },
    ],
  },
]

const steps = [
  { title: "Charlamos", text: "Nos contás cómo trabajan hoy y qué les hace perder tiempo. Sin compromiso." },
  { title: "Empezamos por algo chico", text: "Una primera parte con precio cerrado, que se usa en pocas semanas." },
  { title: "Crece con tu negocio", text: "Los datos son tuyos. Lo vamos ampliando cuando lo necesites." },
]

export default function DemosPage() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""
  const waHref = phone
    ? `https://wa.me/${phone}?text=${encodeURIComponent("Hola, vi las demos de Figuriz y quería consultar.")}`
    : "/#contacto"
  let n = 0

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#EEEAE3 1px, transparent 1px), linear-gradient(90deg, #EEEAE3 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium text-primary mb-6 animate-fade-in">
              <MousePointerClick className="h-3.5 w-3.5" />
              Demos que funcionan, con datos de ejemplo
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[family-name:var(--font-heading)] text-foreground leading-tight text-balance animate-fade-in-up">
              Tu negocio sin Excel, sin cuaderno y{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                sin perseguir a nadie por WhatsApp.
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
              Armamos sistemas a medida para negocios de Tandil y la zona, pensados para usar desde el celular.
              Elegí tu rubro y probá: tocá, cargá y mirá cómo se vería. No se rompe nada.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-5">{group.title}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.demos.map((demo) => {
                  n += 1
                  const Icon = demo.icon
                  return (
                    <a
                      key={demo.slug}
                      href={`/demos/${demo.slug}`}
                      className="group flex flex-col gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-muted/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-xs font-mono text-muted-foreground tabular-nums">{String(n).padStart(2, "0")}</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-base font-semibold font-[family-name:var(--font-heading)] text-foreground">{demo.name}</h2>
                        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{demo.text}</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        Probar demo
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
            ¿Cómo <span className="text-primary">trabajamos?</span>
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="flex flex-col gap-3">
                <span className="text-5xl font-extrabold font-[family-name:var(--font-heading)] text-primary/30">{i + 1}</span>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild size="lg" className="px-8 py-6 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300">
              <a href={waHref} target={phone ? "_blank" : undefined} rel="noopener noreferrer">
                Quiero ver la de mi negocio
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
