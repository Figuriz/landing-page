import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-muted/50 via-background to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm font-medium text-foreground/80 mb-6">
            <Zap className="h-4 w-4 text-primary" />
            Soluciones digitales que transforman negocios
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] text-foreground leading-tight text-balance">
            Desarrollamos software que impulsa tu{" "}
            <span className="text-primary">éxito</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            En <span className="text-primary font-semibold">Figuriz</span>, creamos soluciones 
            tecnológicas a medida que potencian tu negocio. Especializados en{" "}
            <span className="font-semibold text-foreground">.NET</span>,{" "}
            <span className="font-semibold text-foreground">Angular</span>,{" "}
            <span className="font-semibold text-foreground">n8n</span> e{" "}
            <span className="font-semibold text-foreground">Inteligencia Artificial</span>.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="text-base px-8 py-6 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
              <Link href="#contacto">
                Contactanos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 bg-transparent">
              <Link href="#servicios">
                Ver servicios
              </Link>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border">
            {[
              { number: "50+", label: "Proyectos entregados" },
              { number: "99%", label: "Clientes satisfechos" },
              { number: "10+", label: "Años de experiencia" },
              { number: "24/7", label: "Soporte técnico" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
