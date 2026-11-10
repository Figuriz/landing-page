import Link from "next/link"
import { ArrowRight, Store, LayoutGrid } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 bg-background overflow-hidden">
      {/* Technical grid overlay */}
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
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-[family-name:var(--font-heading)] text-foreground leading-tight text-balance animate-fade-in-up">
            <span className="block">Menos cuaderno y planillas.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-gradient">
              Más tiempo para vender.
            </span>
          </h1>

          <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty animate-fade-in-up animation-delay-200">
            Sistemas simples para tu negocio, pensados para usar desde el celular. Probalos con datos de ejemplo antes de decidir nada.
          </p>

          <div className="mt-8 md:mt-10 grid sm:grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto text-left animate-fade-in-up animation-delay-400">
            <Link
              href="/mostrador"
              className="group flex items-start gap-4 rounded-xl bg-primary px-5 py-4 md:px-6 md:py-5 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow duration-300"
            >
              <Store className="h-6 w-6 flex-none mt-0.5" aria-hidden="true" />
              <span className="flex-1">
                <span className="flex items-center gap-2 text-base md:text-lg font-bold font-[family-name:var(--font-heading)]">
                  Vendo en un mostrador
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
                <span className="mt-1 block text-sm text-primary-foreground/85 leading-snug">
                  Almacén, kiosco, carnicería, verdulería, ferretería, pet shop. Fiado, cobros y caja.
                </span>
              </span>
            </Link>
            <Link
              href="/demos"
              className="group flex items-start gap-4 rounded-xl border border-border/60 bg-card/40 px-5 py-4 md:px-6 md:py-5 hover:border-primary/40 transition-colors duration-300"
            >
              <LayoutGrid className="h-6 w-6 flex-none mt-0.5 text-primary" aria-hidden="true" />
              <span className="flex-1">
                <span className="flex items-center gap-2 text-base md:text-lg font-bold font-[family-name:var(--font-heading)] text-foreground">
                  Busco mi rubro
                  <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
                <span className="mt-1 block text-sm text-muted-foreground leading-snug">
                  Talleres, veterinarias, consultorios, distribuidoras y más: 17 demos para probar.
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
