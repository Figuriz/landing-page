import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { RUBROS, getRubro } from "@/lib/rubros"

const BASE = "https://figuriz.com"

export const dynamicParams = false

export function generateStaticParams() {
  return RUBROS.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const r = getRubro(slug)
  if (!r) return {}
  const url = `${BASE}/sistema-para/${r.slug}`
  return {
    title: r.title,
    description: r.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${r.title} · Figuriz`,
      description: r.description,
      url,
      images: [{ url: `${BASE}/og/demo/${r.demo}`, width: 1200, height: 630 }],
    },
  }
}

export default async function RubroPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const r = getRubro(slug)
  if (!r) notFound()

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""
  const waHref = phone
    ? `https://wa.me/${phone}?text=${encodeURIComponent(`Hola, vi la página de sistemas para ${r.para} en figuriz.com y quería consultar.`)}`
    : "/#contacto"
  const demoHref = `/demos/${r.demo}`
  const otros = RUBROS.filter((o) => o.slug !== r.slug)

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: r.title,
        description: r.description,
        serviceType: r.title,
        provider: { "@id": `${BASE}/#organization` },
        areaServed: { "@type": "Country", name: "Argentina" },
        url: `${BASE}/sistema-para/${r.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: r.faq.map((f) => ({
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
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-5">
              <Link href="/demos" className="hover:underline underline-offset-4">Demos por rubro</Link> · {r.para}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[family-name:var(--font-heading)] text-foreground leading-tight text-balance">
              {r.title}
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">{r.intro}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="px-8 py-6 shadow-lg shadow-primary/20">
                <a href={demoHref}>
                  Probar la demo
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-6">
                <a href={waHref} target={phone ? "_blank" : undefined} rel="noopener noreferrer">
                  Consultar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
              ¿Te pasa esto en {r.negocio}?
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {r.problemas.map((p) => (
                <li key={p} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <X className="h-5 w-5 text-primary flex-none mt-0.5" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
              Lo que resolvemos <span className="text-primary">primero</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">Una primera etapa chica, con alcance y precio cerrados por escrito, que se usa en pocas semanas.</p>
            <ul className="mt-6 flex flex-col gap-3">
              {r.primeraEtapa.map((p) => (
                <li key={p} className="flex gap-3 text-foreground/90 leading-relaxed">
                  <Check className="h-5 w-5 text-primary flex-none mt-0.5" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Después, si te sirve</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              {r.despues.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-foreground">Preguntas frecuentes</h2>
          <dl className="mt-8 flex flex-col gap-6">
            {r.faq.map((f) => (
              <div key={f.q}>
                <dt className="font-semibold text-foreground">{f.q}</dt>
                <dd className="mt-1.5 text-muted-foreground leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 rounded-xl border border-primary/30 bg-primary/5 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-heading)] text-foreground">Probalo antes de hablar de números</h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              La demo funciona con datos de ejemplo: tocá, cargá y mirá cómo se vería en {r.negocio}. Si te sirve, lo charlamos en 20 minutos, sin costo.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <a href={demoHref}>
                  Probar la demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={waHref} target={phone ? "_blank" : undefined} rel="noopener noreferrer">
                  Escribinos
                </a>
              </Button>
            </div>
          </div>
          <p className="mt-12 text-sm text-muted-foreground">
            También armamos sistemas para{" "}
            {otros.map((o, i) => (
              <span key={o.slug}>
                <Link href={`/sistema-para/${o.slug}`} className="text-primary hover:underline underline-offset-4">{o.para}</Link>
                {i < otros.length - 2 ? ", " : i === otros.length - 2 ? " y " : ""}
              </span>
            ))}
            . <Link href="/demos" className="text-primary hover:underline underline-offset-4">Ver todas las demos</Link>.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
