import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

/** El armado común de las páginas de términos y de privacidad: texto corrido, fácil de leer en el celular. */
export function PaginaLegal({ titulo, vigencia, children }: { titulo: string; vigencia: string; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-4">Mostrador · Figuriz</p>
        <h1 className="text-3xl md:text-4xl font-extrabold font-[family-name:var(--font-heading)] text-foreground leading-tight">{titulo}</h1>
        <p className="mt-3 text-sm text-muted-foreground">Vigente desde el {vigencia}.</p>
        <div className="mt-10 flex flex-col gap-10">{children}</div>
      </article>
      <Footer />
    </main>
  )
}

export function Apartado({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-foreground">{titulo}</h2>
      <div className="mt-3 flex flex-col gap-3 text-muted-foreground leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  )
}
