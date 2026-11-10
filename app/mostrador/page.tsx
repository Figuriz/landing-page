import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ShoppingBasket, NotebookPen, BellRing, Wallet } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"

const BASE = "https://figuriz.com"
const URL_PAGINA = `${BASE}/mostrador`
const URL_DEMO = "/demos/mostrador"
const TITULO = "Mostrador: fiado, cobros y caja de tu comercio en el celular · Figuriz"
const DESCRIPCION =
  "Mostrador es la app de Figuriz para comercios de barrio: anotás el fiado con detalle y fecha, ves los cobros que te entran sin pedir la captura y cerrás la caja del día desde el celular. Te la dejamos cargada y andando."

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

const FUNCIONES = [
  {
    icon: NotebookPen,
    titulo: "Fiado",
    frase: "Tu cuaderno, pero en el celular.",
    texto:
      "Quién te debe, qué se llevó y qué día. Anotás lo que deja a cuenta, ves quién pasó los 30 días y le mandás el recordatorio por WhatsApp con el detalle.",
  },
  {
    icon: BellRing,
    titulo: "Cobros",
    frase: "Entra el cobro, y suena.",
    texto:
      "Cada cobro que te entra aparece en la pantalla con el nombre y el monto. Sin mirar el celular del cliente y sin pedir la captura.",
  },
  {
    icon: Wallet,
    titulo: "Caja del día",
    frase: "Cerrás, y la caja ya está hecha.",
    texto:
      "Todo lo que entró, separado por cómo te pagaron: efectivo, transferencia, tarjeta. Y el resumen del día, a tu WhatsApp con un toque.",
  },
  {
    icon: ShoppingBasket,
    titulo: "Vender",
    frase: "Dos toques y listo.",
    texto:
      "Tocás los productos, elegís cómo te pagan y queda anotado. Si es fiado, se suma solo a la cuenta del cliente con lo que se llevó.",
  },
]

const PASOS = [
  {
    titulo: "Nos escribís",
    texto: "Por WhatsApp. Nos contás qué vendés y cómo llevás hoy el fiado y la caja.",
  },
  {
    titulo: "Le sacás una foto al cuaderno",
    texto: "Nos mandás las hojas del fiado por WhatsApp y te las pasamos a la app. Revisás que esté bien, y listo: no tipeás nada.",
  },
  {
    titulo: "Lo probás gratis",
    texto: "Lo usás unos días en tu local, con tus clientes de verdad, antes de pagar nada.",
  },
  {
    titulo: "Si te sirve, seguís",
    texto: "Con una cuota mensual fija. Te avisamos antes de cada vencimiento.",
  },
]

const FAQ = [
  {
    q: "¿Necesito una computadora?",
    a: "No. Mostrador se usa desde el celular, en el mostrador. Si tenés computadora o tablet, también funciona ahí.",
  },
  {
    q: "¿Tengo que cargar todo yo?",
    a: "No. Le sacás una foto a las hojas de tu cuaderno y pasamos a la app lo que te debe cada cliente; vos solo revisás que esté bien. Los productos son opcionales: el fiado, los cobros y la caja funcionan sin cargarlos.",
  },
  {
    q: "¿Qué cobros aparecen solos?",
    a: "Los de Mercado Pago aparecen solos, al instante. Cuenta DNI y otros medios los vemos con vos cuando lo instalamos. Lo que cobrás en efectivo o con tarjeta queda anotado al hacer la venta.",
  },
  {
    q: "Ya tengo un sistema para facturar, ¿me sirve igual?",
    a: "Sí. Mostrador puede ir al lado de lo que ya usás, solo con el fiado, los cobros y la caja.",
  },
  {
    q: "¿Cuánto sale?",
    a: "Es una cuota mensual fija. Primero lo probás gratis en tu local, y recién si te sirve empezás a pagar.",
  },
  {
    q: "¿Para qué comercios es?",
    a: "Almacenes, kioscos, carnicerías, verdulerías, dietéticas, ferreterías, pet shops, forrajerías, tiendas de ropa y bazares. Si vendés en un mostrador, es para vos.",
  },
]

export default function MostradorPage() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""
  const waHref = phone
    ? `https://wa.me/${phone}?text=${encodeURIComponent("Hola, vi Mostrador en figuriz.com y lo quiero probar en mi local.")}`
    : "/#contacto"

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Mostrador",
        description: DESCRIPCION,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Android, iOS",
        provider: { "@id": `${BASE}/#organization` },
        url: URL_PAGINA,
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-5">Mostrador · para comercios</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[family-name:var(--font-heading)] text-foreground leading-tight text-balance">
              El fiado, los cobros y la caja de tu local, <span className="text-primary">en el celular.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Mostrador reemplaza el cuaderno del fiado y el “¿te llegó la transferencia?”. Sabés quién te debe y qué se
              llevó, ves cada cobro cuando entra y cerrás el día con la caja ya hecha. Sin instalar nada y sin pasar el
              cuaderno a mano.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="px-8 py-6 shadow-lg shadow-primary/20">
                <a href={waHref} target={phone ? "_blank" : undefined} rel="noopener noreferrer">
                  Quiero probarlo en mi local
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-6">
                <a href={URL_DEMO} target="_blank" rel="noopener noreferrer">Abrir la demo</a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">La demo tiene datos de ejemplo: tocá, vendé y anotá un fiado sin miedo.</p>
          </div>

          <div className="hidden lg:block" aria-label="Demo de Mostrador">
            <div className="rounded-[2.75rem] border-[3px] border-[#45454d] bg-[#0c0c0e] p-3 shadow-2xl shadow-primary/10">
              <iframe
                src={URL_DEMO}
                title="Demo de Mostrador con datos de ejemplo"
                loading="lazy"
                className="block w-[360px] h-[700px] rounded-[2rem] bg-[#F3F5F2]"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance max-w-3xl">
            Cuatro pantallas. <span className="text-primary">Nada más.</span>
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {FUNCIONES.map((f) => {
              const Icon = f.icon
              return (
                <article key={f.titulo} className="flex gap-5">
                  <div className="h-11 w-11 flex-none rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">{f.titulo}</p>
                    <h3 className="mt-1.5 text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground leading-snug">{f.frase}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{f.texto}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="como-arranca" className="py-16 md:py-20 border-t border-border scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
            ¿Cómo <span className="text-primary">arranca?</span>
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
              ¿Lo probamos en tu local?
            </h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Escribinos y contanos qué vendés. Con una foto de tu cuaderno te lo dejamos listo para que lo pruebes.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <a href={waHref} target={phone ? "_blank" : undefined} rel="noopener noreferrer">
                  Escribinos por WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={URL_DEMO} target="_blank" rel="noopener noreferrer">Abrir la demo</a>
              </Button>
            </div>
          </div>
          <p className="mt-12 text-sm text-muted-foreground">
            ¿Tu negocio es más grande o necesita algo propio? Mirá los{" "}
            <Link href="/demos" className="text-primary hover:underline underline-offset-4">sistemas a medida por rubro</Link>.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
