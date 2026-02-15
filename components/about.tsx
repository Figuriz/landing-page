"use client"

import { CheckCircle2, Users, TrendingUp, Shield } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Users,
    title: "Equipo Experto",
    description: "Profesionales altamente capacitados con amplia experiencia en automatización, IA y desarrollo de software.",
  },
  {
    icon: TrendingUp,
    title: "Soluciones Escalables",
    description: "Arquitecturas diseñadas para crecer junto con tu negocio sin comprometer el rendimiento.",
  },
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "Implementamos las mejores prácticas de seguridad para proteger tu información.",
  },
]

const benefits = [
  "Metodologías ágiles de desarrollo",
  "Comunicación transparente y constante",
  "Entrega puntual de proyectos",
  "Soporte post-implementación",
  "Código limpio y documentado",
  "Stack tecnológico moderno",
]

const techStack = [
  { name: "n8n", description: "Automatización sin límites" },
  { name: "IA", description: "Inteligencia Artificial aplicada" },
  { name: ".NET", description: "Backend robusto y escalable" },
  { name: "Angular", description: "Frontend moderno y dinámico" },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const animation = useScrollAnimation({
    delay: index * 150,
    animation: "slide-in-right",
  })

  return (
    <div
      ref={animation.ref}
      className={`flex gap-4 p-6 bg-muted/50 rounded-xl border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 ${animation.className}`}
    >
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        <feature.icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-foreground">
          {feature.title}
        </h3>
        <p className="mt-1 text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  )
}

export function About() {
  const leftAnimation = useScrollAnimation({ animation: "slide-in-left" })
  const benefitsAnimation = useScrollAnimation({ animation: "fade-in-up", delay: 200 })

  return (
    <section id="nosotros" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={leftAnimation.ref} className={leftAnimation.className}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
              Sobre <span className="text-primary">Nosotros</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              En Figuriz, nos apasiona transformar ideas en soluciones digitales de alto impacto.
              Con más de una década de experiencia, hemos ayudado a empresas de diversos sectores
              a automatizar sus procesos y potenciar sus resultados con inteligencia artificial.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Nuestro compromiso es entregar soluciones de calidad que no solo cumplan, sino que
              superen las expectativas de nuestros clientes.
            </p>

            <div className="mt-8 p-6 bg-muted/50 rounded-xl border border-border">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Nuestro Stack Tecnológico
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`group flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-300 ${
                      index < 2 ? "ring-1 ring-primary/10" : ""
                    }`}
                  >
                    <span className={`font-bold ${index < 2 ? "text-primary" : "text-foreground/70"}`}>
                      {tech.name}
                    </span>
                    <span className="text-xs text-muted-foreground hidden sm:inline">
                      {tech.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div ref={benefitsAnimation.ref} className={`mt-8 grid grid-cols-2 gap-4 ${benefitsAnimation.className}`}>
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
