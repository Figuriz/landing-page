import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBasket, NotebookPen, CalendarRange, Wallet } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { BotonProbar } from "@/components/boton-probar"

const BASE = "https://figuriz.com"
const URL_PAGINA = `${BASE}/mostrador`
// Capturas de la app real, con un almacén de ejemplo. Si la app cambia, hay que volver a sacarlas.
const PANTALLAS = [
  {
    src: "/mostrador/vender.webp",
    titulo: "Vender",
    texto: "Ponés el monto, tocás cómo te pagaron y listo.",
    alt: "Pantalla Vender de Mostrador: teclado para poner el monto y botones de efectivo, Mercado Pago, transferencia, tarjeta y fiado",
  },
  {
    src: "/mostrador/fiado.webp",
    titulo: "Fiado",
    texto: "Quién te debe, qué se llevó y hace cuántos días.",
    alt: "Pantalla Fiado de Mostrador: lista de clientes con lo que debe cada uno, el detalle de lo que se llevó y botones para anotar un pago o mandar un recordatorio",
  },
  {
    src: "/mostrador/caja.webp",
    titulo: "Caja",
    texto: "El total del día, separado por cómo te pagaron.",
    alt: "Pantalla Caja de Mostrador: total del día separado en efectivo, Mercado Pago, transferencia y tarjeta, y cuánto tendría que haber en el cajón",
  },
]
// A dónde va "Probalo gratis": el registro de la app. El "de" queda guardado en el comercio para saber desde dónde llegó.
const URL_REGISTRO = "https://mostrador.figuriz.com/Registro?de=web-mostrador"
const TITULO = "Sistema para kiosco y almacén: ventas, caja y fiado · Mostrador"
const DESCRIPCION =
  "Mostrador es un sistema de ventas, caja diaria y fiado para kioscos, almacenes y comercios chicos. Se usa desde el celular, sin instalar nada. Sin tope de ventas. Probalo gratis 14 días, sin tarjeta."

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
    icon: Wallet,
    titulo: "Caja del día",
    frase: "Cerrás, y la caja ya está hecha.",
    texto:
      "Todo lo que entró, separado por cómo te pagaron: efectivo, transferencia, Mercado Pago, tarjeta. Anotás gastos y retiros, contás el efectivo y te dice si sobra o falta.",
  },
  {
    icon: ShoppingBasket,
    titulo: "Vender",
    frase: "Dos toques y listo.",
    texto:
      "Ponés solo el monto, o tocás los productos. Elegís cómo te pagan y queda anotado. Si es fiado, se suma solo a la cuenta del cliente con lo que se llevó.",
  },
  {
    icon: CalendarRange,
    titulo: "Resumen del mes",
    frase: "Cuánto entró, sin hacer cuentas.",
    texto:
      "El total del mes y cómo le fue a cada día. Qué fue lo que más se vendió y qué no salió. Podés volver a mirar la caja de cualquier día.",
  },
]

// Lo que distingue a Mostrador de los sistemas de gestión más grandes.
const DIFERENCIAS = [
  {
    titulo: "Sin tope de ventas",
    texto: "Hagas diez ventas en el día o trescientas, las anotás todas y la cuota no cambia.",
  },
  {
    titulo: "Hecho para el celular",
    texto: "Se usa parado, en el mostrador, con una mano. No hace falta computadora ni lector.",
  },
  {
    titulo: "Empezás sin cargar nada",
    texto: "La primera venta es poner el monto y cómo te pagaron. Los productos, si querés, después.",
  },
]

const PASOS = [
  {
    titulo: "Te registrás",
    texto: "El nombre de tu negocio, tu celular y una contraseña. Lleva un minuto y no pedimos tarjeta.",
  },
  {
    titulo: "Empezás a anotar",
    texto: "La primera venta la hacés poniendo solo el monto. Lo que ya te deben lo pasás del cuaderno con su fecha, cliente por cliente, cuando tengas un rato.",
  },
  {
    titulo: "Lo usás 14 días gratis",
    texto: "En tu local, con tus clientes de verdad, antes de pagar nada.",
  },
  {
    titulo: "Si te sirve, seguís",
    texto: "Con una cuota mensual fija. La app te avisa unos días antes de que termine la prueba.",
  },
]

const FAQ = [
  {
    q: "¿Es gratis?",
    a: "Los primeros 14 días son gratis y no pedimos tarjeta. Después es una cuota mensual fija. Si no seguís, tus datos quedan guardados y los podés descargar.",
  },
  {
    q: "¿Hay un tope de ventas por mes?",
    a: "No. Anotás todas las ventas que hagas y la cuota es la misma, vendas veinte veces por día o quinientas.",
  },
  {
    q: "¿Necesito una computadora?",
    a: "No. Mostrador se usa desde el celular, en el mostrador, y no hay que instalar nada: se abre desde el navegador. Si tenés computadora o tablet, también funciona ahí.",
  },
  {
    q: "¿Tengo que cargar todos mis productos?",
    a: "No. Podés vender poniendo solo el monto y cómo te pagaron. Si querés ver qué se vende más, cargás los productos de a poco.",
  },
  {
    q: "¿Tiene control de stock, código de barras o factura?",
    a: "Por ahora no. Mostrador lleva las ventas, la caja y el fiado. Si necesitás controlar stock o facturar desde el mismo sistema, te conviene uno más grande. Si ya tenés con qué facturar, Mostrador puede ir al lado.",
  },
  {
    q: "¿Funciona sin internet?",
    a: "No, necesita conexión: con los datos del celular alcanza.",
  },
  {
    q: "¿Qué pasa con mis datos?",
    a: "Son tuyos. Cada negocio ve solo lo suyo, y podés descargar tus clientes, ventas y fiados cuando quieras, en un archivo que se abre con Excel.",
  },
  {
    q: "¿Para qué comercios es?",
    a: "Kioscos, almacenes, despensas, carnicerías, verdulerías, dietéticas, ferreterías, pet shops, tiendas de ropa, bazares, peluquerías y barberías. Si atendés en un mostrador y anotás en un cuaderno, es para vos.",
  },
]

export default function MostradorPage() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""
  const waHref = phone
    ? `https://wa.me/${phone}?text=${encodeURIComponent("Hola, vi Mostrador en figuriz.com y tengo una consulta.")}`
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
        offers: { "@type": "Offer", description: "Prueba gratis de 14 días, sin tarjeta" },
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
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-5">Mostrador · sistema para kioscos, almacenes y comercios</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[family-name:var(--font-heading)] text-foreground leading-tight text-balance">
              Las ventas, la caja y el fiado de tu negocio, <span className="text-primary">en el celular.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Mostrador es un sistema simple para kioscos, almacenes y comercios chicos. Anotás cada venta en dos
              toques, cerrás el día con la caja ya hecha y sabés quién te debe y qué se llevó. Sin instalar nada y sin
              computadora.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <BotonProbar href={URL_REGISTRO} lugar="arriba" className="px-8 py-6 shadow-lg shadow-primary/20">
                Probalo gratis 14 días
              </BotonProbar>
              <Button asChild size="lg" variant="outline" className="px-8 py-6">
                <a href="#como-se-ve">Ver cómo es</a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Sin tarjeta y sin tope de ventas. Te registrás en un minuto con el nombre de tu negocio y tu celular.</p>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-[2.75rem] border-[3px] border-[#45454d] bg-[#0c0c0e] p-3 shadow-2xl shadow-primary/10">
              <Image
                src={PANTALLAS[2].src}
                alt={PANTALLAS[2].alt}
                width={780}
                height={1560}
                priority
                className="block w-[340px] h-auto rounded-[2rem]"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance max-w-3xl">
            Lo que hace. <span className="text-primary">Y nada más.</span>
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

      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-border">
            {DIFERENCIAS.map((d) => (
              <div key={d.titulo} className="py-8 md:py-10 md:px-8 first:md:pl-0 last:md:pr-0 border-b border-border last:border-b-0 md:border-b-0">
                <dt className="text-lg font-semibold font-[family-name:var(--font-heading)] text-foreground">{d.titulo}</dt>
                <dd className="mt-2 text-muted-foreground leading-relaxed">{d.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="como-se-ve" className="py-16 md:py-20 border-t border-border scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance max-w-3xl">
            Así se ve <span className="text-primary">en el celular.</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">Son pantallas de la app, con un almacén de ejemplo.</p>
          <div className="mt-10 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-10 md:overflow-visible md:pb-0">
            {PANTALLAS.map((p) => (
              <figure key={p.titulo} className="flex-none w-[72%] max-w-[300px] snap-center md:w-auto md:max-w-none md:justify-self-center">
                <div className="rounded-[2rem] border-[3px] border-[#45454d] bg-[#0c0c0e] p-2">
                  <Image src={p.src} alt={p.alt} width={780} height={1560} className="block w-full h-auto rounded-[1.5rem] md:w-[280px]" />
                </div>
                <figcaption className="mt-4">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-primary">{p.titulo}</span>
                  <span className="mt-1 block text-muted-foreground leading-relaxed">{p.texto}</span>
                </figcaption>
              </figure>
            ))}
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
              Probalo hoy en tu negocio
            </h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Son 14 días gratis y no pedimos tarjeta. Si tenés una duda antes de empezar, escribinos.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <BotonProbar href={URL_REGISTRO} lugar="abajo">
                Empezar la prueba gratis
              </BotonProbar>
              <Button asChild size="lg" variant="outline">
                <a href={waHref} target={phone ? "_blank" : undefined} rel="noopener noreferrer">Consultar por WhatsApp</a>
              </Button>
            </div>
          </div>
          <p className="mt-12 text-sm text-muted-foreground">
            Más sobre Mostrador:{" "}
            <Link href="/mostrador/sistema-para-kiosco" className="text-primary hover:underline underline-offset-4">sistema para kiosco</Link>,{" "}
            <Link href="/mostrador/programa-para-almacen" className="text-primary hover:underline underline-offset-4">programa para almacén</Link> y{" "}
            <Link href="/mostrador/como-llevar-la-caja-diaria" className="text-primary hover:underline underline-offset-4">cómo llevar la caja diaria</Link>.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
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
