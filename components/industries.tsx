"use client"

import {
  ShoppingCart,
  Building2,
  Stethoscope,
  Calculator,
  UtensilsCrossed,
  GraduationCap,
  Truck,
  Briefcase,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const industries = [
  {
    icon: ShoppingCart,
    name: "E-commerce",
    description: "Sincronizá stock, pedidos y envíos entre tu tienda y tus proveedores de forma automática.",
  },
  {
    icon: Building2,
    name: "Inmobiliarias",
    description: "Respondé consultas por WhatsApp al instante y agendá visitas sin intervención manual.",
  },
  {
    icon: Stethoscope,
    name: "Salud y consultorios",
    description: "Recordatorios automáticos de turnos, confirmaciones y seguimiento post-consulta.",
  },
  {
    icon: Calculator,
    name: "Estudios contables",
    description: "Procesá facturas y documentos automáticamente, sin cargar datos uno por uno.",
  },
  {
    icon: UtensilsCrossed,
    name: "Gastronomía",
    description: "Recibí pedidos por WhatsApp y conectá tu cocina con el delivery sin errores.",
  },
  {
    icon: GraduationCap,
    name: "Educación",
    description: "Automatizá inscripciones, comunicaciones con alumnos y seguimiento de pagos.",
  },
  {
    icon: Truck,
    name: "Logística",
    description: "Conectá sistemas de seguimiento, notificá clientes y optimizá rutas automáticamente.",
  },
  {
    icon: Briefcase,
    name: "Servicios profesionales",
    description: "Agendá reuniones, enviá presupuestos y hacé follow-up sin mover un dedo.",
  },
]

function IndustryCard({ industry, index }: { industry: typeof industries[0]; index: number }) {
  const animation = useScrollAnimation({ delay: index * 80, animation: "fade-in-up" })
  const Icon = industry.icon

  return (
    <div
      ref={animation.ref}
      className={`group flex flex-col gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-muted/50 transition-all duration-300 ${animation.className}`}
    >
      <div className="h-9 w-9 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
        <Icon className="h-4.5 w-4.5 text-primary" />
      </div>
      <div>
        <h3 className="text-sm font-semibold font-[family-name:var(--font-heading)] text-foreground">
          {industry.name}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
          {industry.description}
        </p>
      </div>
    </div>
  )
}

export function Industries() {
  const headerAnimation = useScrollAnimation({ animation: "fade-in-up" })

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerAnimation.ref} className={`text-center max-w-3xl mx-auto mb-14 ${headerAnimation.className}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
            Ideal para <span className="text-primary">tu industria</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Trabajamos con negocios de distintos rubros. Si hacés tareas repetitivas,
            podemos automatizarlas — sin importar tu sector.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.name} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
