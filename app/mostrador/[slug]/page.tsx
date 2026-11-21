import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BotonProbar } from "@/components/boton-probar"
import { BUSQUEDAS, buscarBusqueda } from "@/lib/busquedas"

const BASE = "https://figuriz.com"

export const dynamicParams = false

export function generateStaticParams() {
  return BUSQUEDAS.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const b = buscarBusqueda(slug)
  if (!b) return {}
  const url = `${BASE}/mostrador/${b.slug}`
  return {
    title: { absolute: b.titulo },
    description: b.descripcion,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { title: b.titulo, description: b.descripcion, url },
  }
}

const ALT = {
  vender: "Pantalla Vender de Mostrador: teclado para el monto y botones de medios de pago",
  fiado: "Pantalla Fiado de Mostrador: lo que debe cada cliente, qué se llevó y hace cuántos días",
  caja: "Pantalla Caja de Mostrador: total del día separado por medio de pago",
}

export default async function BusquedaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const b = buscarBusqueda(slug)
  if (!b) notFound()

  // El "de" queda guardado en el comercio que se registra: así se sabe qué página lo trajo.
  const registro = `https://mostrador.figuriz.com/Registro?de=web-${b.slug}`
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: b.preguntas.map((p) => ({
      "@type": "Question",
      name: p.q,
      acceptedAnswer: { "@type": "Answer", text: p.a },
    })),
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-12 lg:gap-16 items-start">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-5">
              <Link href="/mostrador" className="hover:underline underline-offset-4">Mostrador</Link> · de Figuriz
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-heading)] text-foreground leading-tight text-balance">
              {b.encabezado}
            </h1>
            <p className="mt-6 text-base md:text-lg text-foreground/85 leading-relaxed">{b.respuesta}</p>
            <div className="mt-8">
              <BotonProbar href={registro} lugar={b.slug} className="px-8 py-6 shadow-lg shadow-primary/20">
                Probalo gratis 14 días
              </BotonProbar>
              <p className="mt-3 text-sm text-muted-foreground">Sin tarjeta. Te registrás en un minuto.</p>
            </div>

            <div className="mt-14 flex flex-col gap-9">
              {b.secciones.map((s) => (
                <section key={s.titulo}>
                  <h2 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-heading)] text-foreground">{s.titulo}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.texto}</p>
                </section>
              ))}
            </div>
          </div>

          <div className="mx-auto lg:sticky lg:top-28">
            <div className="rounded-[2.5rem] border-[3px] border-[#45454d] bg-[#0c0c0e] p-2.5 shadow-2xl shadow-primary/10">
              <Image
                src={`/mostrador/${b.pantalla}.webp`}
                alt={ALT[b.pantalla]}
                width={780}
                height={1560}
                priority
                className="block w-[280px] sm:w-[320px] h-auto rounded-[2rem]"
              />
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">Pantalla de la app, con un almacén de ejemplo.</p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-foreground">Preguntas frecuentes</h2>
          <dl className="mt-8 flex flex-col gap-6">
            {b.preguntas.map((p) => (
              <div key={p.q}>
                <dt className="font-semibold text-foreground">{p.q}</dt>
                <dd className="mt-1.5 text-muted-foreground leading-relaxed">{p.a}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 rounded-xl border border-primary/30 bg-primary/5 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-heading)] text-foreground">Probalo hoy en tu negocio</h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">Son 14 días gratis y no pedimos tarjeta.</p>
            <div className="mt-6">
              <BotonProbar href={registro} lugar={`${b.slug}-abajo`}>
                Empezar la prueba gratis
              </BotonProbar>
            </div>
          </div>
          <p className="mt-10 text-sm text-muted-foreground">
            Más sobre <Link href="/mostrador" className="text-primary hover:underline underline-offset-4">Mostrador</Link>:{" "}
            {BUSQUEDAS.filter((o) => o.slug !== b.slug).map((o, i) => (
              <span key={o.slug}>
                {i > 0 ? " · " : ""}
                <Link href={`/mostrador/${o.slug}`} className="text-primary hover:underline underline-offset-4">{o.encabezado}</Link>
              </span>
            ))}
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
