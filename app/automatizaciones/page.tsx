import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Wallet, BellRing, FileCheck2, CalendarClock, Tags, BarChart3 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"

const BASE = "https://figuriz.com"
const URL_PAGINA = `${BASE}/automatizaciones`
const TITULO = "Automatizaciones para pymes a precio cerrado · Figuriz"
const DESCRIPCION =
  "Cobros de Mercado Pago a tu planilla, avisos de deuda y recordatorios por WhatsApp, control de facturas de proveedores y más. Te la adaptamos a cómo trabajás y la dejamos andando, con precio cerrado antes de empezar."

export const metadata: Metadata = {
  title: { absolute: TITULO },
  description: DESCRIPCION,
  alternates: { canonical: URL_PAGINA },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITULO,
    description: DESCRIPCION,
    url: URL_PAGINA,
  },
}

type Automatizacion = {
  icon: typeof Wallet
  titulo: string
  resuelve: string
  para: string
  necesitamos: string[]
}

const AUTOMATIZACIONES: Automatizacion[] = [
  {
    icon: Wallet,
    titulo: "Los cobros de Mercado Pago, solos en tu planilla",
    resuelve:
      "Cada cobro que entra a tu Mercado Pago aparece en tu planilla con fecha, monto, comisión y neto. Sin copiarlos a mano y sin duplicados, aunque el mismo cobro se lea dos veces.",
    para: "Negocios que cobran con QR, link de pago o posnet de Mercado Pago y llevan la caja en Google Sheets o Excel.",
    necesitamos: [
      "Una credencial de tu cuenta de Mercado Pago, que generás vos y podés dar de baja cuando quieras",
      "La planilla donde querés los cobros (Google Sheets o Excel en la nube)",
    ],
  },
  {
    icon: BellRing,
    titulo: "Aviso de deuda por WhatsApp, con link de pago",
    resuelve:
      "Desde tu planilla de cuentas corrientes sale un WhatsApp a cada cliente con saldo vencido, con el monto y un link de pago de Mercado Pago. Vos definís a quién, cada cuánto y con qué texto.",
    para: "Corralones, distribuidoras, agronomías y todo el que vende en cuenta corriente.",
    necesitamos: [
      "Tu planilla de cuentas corrientes, con el teléfono de cada cliente",
      "Tu cuenta de Mercado Pago para generar los links",
      "El número de WhatsApp desde el que salen los avisos",
    ],
  },
  {
    icon: FileCheck2,
    titulo: "Facturas de proveedores controladas contra el QR de ARCA",
    resuelve:
      "Cada factura que te llega, en PDF o foto, se lee sola y se compara con los datos del QR de ARCA. Te marca las que no coinciden y te deja la planilla de compras lista para cargar en tu sistema o pasarle al contador.",
    para: "Empresas con muchas compras a proveedores, donde cargar facturas se come horas por semana.",
    necesitamos: [
      "Dónde te llegan las facturas (un mail o una carpeta)",
      "El formato en que las carga tu sistema o las pide tu contador",
    ],
  },
  {
    icon: CalendarClock,
    titulo: "Recordatorio de turno, vacuna o cuota por WhatsApp",
    resuelve:
      "El día antes del turno, cuando se acerca la vacuna o cuando vence la cuota, tu cliente recibe un WhatsApp con los datos y cómo confirmar o pagar. Menos gente que falta y menos cuotas que se olvidan.",
    para: "Veterinarias, consultorios, gimnasios y negocios que trabajan con turnos o cuotas.",
    necesitamos: [
      "Dónde anotás hoy los turnos, vacunas o cuotas (agenda, planilla o sistema)",
      "El teléfono de cada cliente",
      "El texto que querés que reciban",
    ],
  },
  {
    icon: Tags,
    titulo: "La lista del proveedor actualiza la tuya",
    resuelve:
      "Cuando un proveedor manda su lista nueva, tus precios se actualizan con tu margen y te queda el detalle de qué subió y cuánto. Se terminan las tardes pasando aumentos a mano.",
    para: "Corralones, ferreterías, casas de repuestos y comercios con muchos artículos y varios proveedores.",
    necesitamos: [
      "Un par de listas de cada proveedor, tal como te llegan",
      "Tu lista de precios y cómo calculás el margen (por rubro, por proveedor o por artículo)",
      "Cómo se corresponden tus códigos con los del proveedor, si no son los mismos",
    ],
  },
  {
    icon: BarChart3,
    titulo: "Resumen semanal de ventas y deudas al celular",
    resuelve:
      "Una vez por semana te llega al WhatsApp o al mail un resumen corto: cuánto vendiste, quién te debe y qué vence en los próximos días. Sin abrir planillas para saber cómo vas.",
    para: "Dueños que quieren los números importantes sin tener que ir a buscarlos.",
    necesitamos: [
      "De dónde salen las ventas y las deudas (planilla, Mercado Pago o tu sistema)",
      "Qué números querés ver y qué día te sirve recibirlos",
    ],
  },
]

const PASOS = [
  {
    titulo: "Nos contás qué querés automatizar",
    texto: "Por WhatsApp o por mail. Nos mandás la planilla o la tarea tal como la hacés hoy.",
  },
  {
    titulo: "Te pasamos precio cerrado",
    texto: "Por escrito: qué hace, qué necesitamos de vos, cuánto sale y cuándo está. Antes de arrancar.",
  },
  {
    titulo: "La adaptamos y la dejamos andando",
    texto: "La armamos sobre tus cuentas y tus planillas, la probamos con tus datos y te mostramos cómo funciona.",
  },
  {
    titulo: "Si algo cambia, la ajustamos",
    texto: "Si cambia tu planilla, un proveedor o la forma de trabajar, la acomodamos. Si el ajuste tiene costo, te lo decimos antes.",
  },
]

const FAQ = [
  {
    q: "¿Tengo que cambiar de sistema?",
    a: "No. La automatización trabaja sobre lo que ya usás: tu planilla, tu cuenta de Mercado Pago, tu WhatsApp o tu sistema de gestión, si permite conectarse.",
  },
  {
    q: "¿Cuánto sale?",
    a: "Depende de qué haya que conectar y de cómo estén tus datos. Por eso te pasamos un precio cerrado por escrito antes de arrancar, y recién ahí decidís.",
  },
  {
    q: "¿Mandar mensajes por WhatsApp tiene costo?",
    a: "Si los mensajes salen solos por la API oficial de WhatsApp, Meta cobra un costo por mensaje; te lo pasamos al costo, sin recargo. Si preferís no pagarlo, el mensaje puede quedar armado y lo mandás vos con un toque desde tu WhatsApp, sin costo.",
  },
  {
    q: "¿Qué pasa con mis datos?",
    a: "Quedan en tus cuentas: tu planilla, tu Mercado Pago, tu WhatsApp. Nosotros usamos los accesos que nos des para que funcione, y los podés dar de baja cuando quieras.",
  },
]

export default function AutomatizacionesPage() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""
  const waHref = phone
    ? `https://wa.me/${phone}?text=${encodeURIComponent("Hola, vi las automatizaciones en figuriz.com y quería consultar.")}`
    : "/#contacto"

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Automatizaciones para pymes",
        description: DESCRIPCION,
        serviceType: "Automatización de procesos",
        provider: { "@id": `${BASE}/#organization` },
        areaServed: { "@type": "Country", name: "Argentina" },
        url: URL_PAGINA,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Automatizaciones",
          itemListElement: AUTOMATIZACIONES.map((a) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: a.titulo, description: a.resuelve },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-5">Automatizaciones</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[family-name:var(--font-heading)] text-foreground leading-tight text-balance">
              Lo que hoy hacés a mano, <span className="text-primary">que se haga solo.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Automatizaciones chicas, a precio cerrado, para cuando no necesitás un sistema entero. No es una suscripción
              más que tenés que configurar vos: la adaptamos a cómo trabajás (tu planilla, tu Mercado Pago, tu WhatsApp) y
              te la dejamos andando en días.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="px-8 py-6 shadow-lg shadow-primary/20">
                <a href={waHref} target={phone ? "_blank" : undefined} rel="noopener noreferrer">
                  Contanos qué querés automatizar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-6">
                <a href="#como-trabajamos">Cómo trabajamos</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
              Algunas que <span className="text-primary">armamos</span>
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Cada una se adapta a tu negocio. Si lo que hacés a mano no está acá, contanos igual: muchas veces se resuelve con algo parecido.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {AUTOMATIZACIONES.map((a) => {
              const Icon = a.icon
              return (
                <article
                  key={a.titulo}
                  className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors duration-300"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-foreground leading-snug">{a.titulo}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.resuelve}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-border flex flex-col gap-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Para</p>
                      <p className="mt-1.5 text-sm text-foreground/90 leading-relaxed">{a.para}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Qué necesitamos de vos</p>
                      <ul className="mt-1.5 flex flex-col gap-1.5">
                        {a.necesitamos.map((n) => (
                          <li key={n} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                            <span aria-hidden="true" className="mt-[9px] w-1 h-1 rounded-full bg-primary/60 flex-none" />
                            <span>{n}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="como-trabajamos" className="py-16 md:py-20 border-t border-border scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
            ¿Cómo <span className="text-primary">trabajamos?</span>
          </h2>
          <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PASOS.map((paso, i) => (
              <li key={paso.titulo} className="flex flex-col gap-3">
                <span className="text-5xl font-extrabold font-[family-name:var(--font-heading)] text-primary/30">{i + 1}</span>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-foreground">{paso.titulo}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{paso.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-foreground">Preguntas frecuentes</h2>
          <dl className="mt-8 flex flex-col gap-6">
            {FAQ.map((f) => (
              <div key={f.q}>
                <dt className="font-semibold text-foreground">{f.q}</dt>
                <dd className="mt-1.5 text-muted-foreground leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 rounded-xl border border-primary/30 bg-primary/5 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-heading)] text-foreground">
              ¿Qué hacés a mano todas las semanas?
            </h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Contanos la tarea y cómo la hacés hoy. Te decimos si se puede automatizar y cuánto saldría, antes de arrancar.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <a href={waHref} target={phone ? "_blank" : undefined} rel="noopener noreferrer">
                  Escribinos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <p className="mt-12 text-sm text-muted-foreground">
            ¿Necesitás algo más grande? Mirá los{" "}
            <Link href="/demos" className="text-primary hover:underline underline-offset-4">sistemas a medida por rubro</Link>.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
