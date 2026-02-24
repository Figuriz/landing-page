"use client"

import { Target, Handshake, Clock, Headphones } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Target,
    title: "Foco en resultados",
    description: "No vendemos tecnología por vender. Cada solución se diseña para resolver un problema concreto de tu operación.",
  },
  {
    icon: Handshake,
    title: "Hablamos tu idioma",
    description: "Te explicamos todo en términos simples. No necesitás saber de programación para trabajar con nosotros.",
  },
  {
    icon: Clock,
    title: "Entregas rápidas",
    description: "Trabajamos con sprints cortos para que veas avances reales cada semana, no después de meses.",
  },
  {
    icon: Headphones,
    title: "Soporte real",
    description: "No desaparecemos después de entregar. Te acompañamos con soporte continuo para que todo siga funcionando.",
  },
]

const stats = [
  { value: "24/7", label: "Automatizaciones activas" },
  { value: "Días", label: "Para ver resultados" },
  { value: "-80%", label: "Tareas manuales" },
  { value: "x3", label: "Más rápido" },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const animation = useScrollAnimation({ delay: index * 100, animation: "fade-in-up" })

  return (
    <div
      ref={animation.ref}
      className={`flex flex-col gap-3 p-6 bg-muted/40 rounded-xl border border-border hover:border-primary/30 hover:bg-muted/70 hover:shadow-lg transition-all duration-300 ${animation.className}`}
    >
      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <feature.icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h3 className="text-base font-semibold font-[family-name:var(--font-heading)] text-foreground">
          {feature.title}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  )
}

export function About() {
  const headerAnimation = useScrollAnimation({ animation: "fade-in-up" })
  const statsAnimation = useScrollAnimation({ animation: "fade-in-up", delay: 100 })

  return (
    <section id="nosotros" className="py-20 md:py-32 bg-muted/20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary/4 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header — centrado */}
        <div ref={headerAnimation.ref} className={`text-center max-w-3xl mx-auto mb-14 ${headerAnimation.className}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
            Por qué elegir <span className="text-primary">Figuriz</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Somos un equipo especializado en automatización e inteligencia artificial.
            Nos enfocamos en una sola cosa: hacer que tu negocio funcione
            con menos esfuerzo manual.
          </p>
        </div>

        {/* Stats — fila horizontal */}
        <div ref={statsAnimation.ref} className={`grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 ${statsAnimation.className}`}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 px-4 py-5 bg-background/70 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 text-center"
            >
              <span className="text-2xl font-bold font-[family-name:var(--font-heading)] text-primary">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Feature cards — 4 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
