"use client"

import { CheckCircle2, Users, TrendingUp, Shield, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Users,
    title: "Equipo Dedicado",
    description: "Profesionales especializados en automatización, IA y desarrollo de software que se comprometen con cada proyecto.",
  },
  {
    icon: TrendingUp,
    title: "Soluciones Escalables",
    description: "Arquitecturas diseñadas para crecer junto con tu negocio sin comprometer el rendimiento.",
  },
  {
    icon: Shield,
    title: "Seguridad Primero",
    description: "Implementamos las mejores prácticas de seguridad para proteger tu información empresarial.",
  },
  {
    icon: Zap,
    title: "Entrega Ágil",
    description: "Metodologías ágiles que nos permiten entregar resultados incrementales y adaptar el rumbo según tu feedback.",
  },
]

const benefits = [
  "Metodologías ágiles de desarrollo",
  "Comunicación transparente y constante",
  "Entrega puntual de proyectos",
  "Soporte post-implementación",
  "Resultados medibles desde el inicio",
  "Atención en español, siempre disponible",
]

const techStack = [
  { name: "n8n", description: "Automatización", primary: true },
  { name: "IA", description: "Inteligencia Artificial", primary: true },
  { name: ".NET", description: "Backend", primary: false },
  { name: "Angular", description: "Frontend", primary: false },
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
  const leftAnimation = useScrollAnimation({ animation: "slide-in-left", delay: 150 })
  const benefitsAnimation = useScrollAnimation({ animation: "fade-in-up", delay: 200 })

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
        {/* Section Header */}
        <div ref={headerAnimation.ref} className={`mb-14 ${headerAnimation.className}`}>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
                Sobre <span className="text-primary">Nosotros</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Somos un equipo apasionado por la automatización y la inteligencia artificial.
                Nos enfocamos en construir soluciones reales que eliminen trabajo manual
                y conecten los sistemas que ya usas.
              </p>
            </div>
            <div className="lg:text-right">
              <p className="text-base text-muted-foreground leading-relaxed">
                Nuestro compromiso es entregar soluciones de calidad que no solo cumplan,
                sino que superen las expectativas — con comunicación clara y soporte real.
              </p>
            </div>
          </div>
          {/* Decorative rule */}
          <div className="mt-10 h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div ref={leftAnimation.ref} className={leftAnimation.className}>
            {/* Benefits */}
            <div ref={benefitsAnimation.ref} className={`grid grid-cols-2 gap-3 ${benefitsAnimation.className}`}>
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mt-8 p-6 bg-background/70 rounded-xl border border-border">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                Nuestro Stack Tecnológico
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className={`flex items-center gap-3 px-4 py-3 bg-muted/50 rounded-lg border transition-all duration-300 hover:border-primary/30 hover:shadow-sm ${
                      tech.primary ? "border-primary/20" : "border-border"
                    }`}
                  >
                    <span className={`font-bold text-sm ${tech.primary ? "text-primary" : "text-foreground/70"}`}>
                      {tech.name}
                    </span>
                    <span className="text-xs text-muted-foreground">{tech.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - 2x2 Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
