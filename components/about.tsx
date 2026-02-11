import { CheckCircle2, Users, TrendingUp, Shield } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Equipo Experto",
    description: "Profesionales altamente capacitados con amplia experiencia en desarrollo de software.",
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
  { name: ".NET", description: "Backend robusto y escalable" },
  { name: "Angular", description: "Frontend moderno y dinámico" },
  { name: "n8n", description: "Automatización sin límites" },
]

export function About() {
  return (
    <section id="nosotros" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
              Sobre <span className="text-primary">Nosotros</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              En Figuriz, nos apasiona transformar ideas en soluciones digitales de alto impacto. 
              Con más de una década de experiencia, hemos ayudado a empresas de diversos sectores 
              a optimizar sus procesos y alcanzar sus objetivos de negocio.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Nuestro compromiso es entregar software de calidad que no solo cumpla, sino que 
              supere las expectativas de nuestros clientes.
            </p>

            <div className="mt-8 p-6 bg-muted/50 rounded-xl border border-border">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Nuestro Stack Tecnológico
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <div 
                    key={tech.name}
                    className="group flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border hover:border-primary/30 transition-colors"
                  >
                    <span className="font-bold text-primary">{tech.name}</span>
                    <span className="text-xs text-muted-foreground hidden sm:inline">
                      {tech.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="flex gap-4 p-6 bg-muted/50 rounded-xl border border-border hover:border-primary/20 transition-colors"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
