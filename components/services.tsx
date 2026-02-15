"use client"

import { Code2, Globe, Cog, Link2, Bot, MessageCircle, FileSearch, Brain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const mainServices = [
  {
    icon: Bot,
    title: "Chatbots Inteligentes",
    description: "Desarrollamos chatbots con IA que entienden el contexto, responden de forma natural y aprenden de cada interacción con tus clientes.",
    tech: "IA + n8n",
  },
  {
    icon: MessageCircle,
    title: "Asistentes de WhatsApp",
    description: "Implementamos asistentes virtuales en WhatsApp que automatizan la atención al cliente, ventas y soporte las 24 horas del día.",
    tech: "WhatsApp API + IA",
  },
  {
    icon: FileSearch,
    title: "Lectura Inteligente de Archivos",
    description: "Procesamos documentos, PDFs, imágenes y datos con IA para extraer información relevante y automatizar la captura de datos.",
    tech: "IA + OCR",
  },
  {
    icon: Brain,
    title: "Soluciones con IA",
    description: "Integramos inteligencia artificial en tus procesos de negocio para análisis predictivo, clasificación y toma de decisiones automatizada.",
    tech: "Machine Learning",
  },
  {
    icon: Cog,
    title: "Automatización de Procesos",
    description: "Optimizamos tus procesos con n8n, automatizando flujos de trabajo complejos sin necesidad de código extensivo.",
    tech: "n8n",
  },
  {
    icon: Link2,
    title: "Integraciones",
    description: "Conectamos tus sistemas usando n8n y APIs personalizadas para crear un ecosistema digital unificado.",
    tech: "n8n + APIs",
  },
]

const secondaryServices = [
  {
    icon: Code2,
    title: "Software a Medida",
    description: "Soluciones personalizadas con .NET: sistemas robustos, escalables y de alto rendimiento.",
    tech: ".NET",
  },
  {
    icon: Globe,
    title: "Aplicaciones Web",
    description: "Aplicaciones web modernas con Angular: experiencias de usuario excepcionales y código mantenible.",
    tech: "Angular",
  },
]

function ServiceCard({ service, index }: { service: typeof mainServices[0]; index: number }) {
  const animation = useScrollAnimation({ delay: index * 100, animation: "fade-in-up" })

  return (
    <div ref={animation.ref} className={animation.className}>
      <Card
        className="group bg-card border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:scale-[1.02] transition-all duration-300 h-full relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />
        <CardHeader>
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <service.icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl font-[family-name:var(--font-heading)]">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-muted-foreground leading-relaxed">
            {service.description}
          </CardDescription>
          <div className="mt-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              {service.tech}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function SecondaryServiceCard({ service, index }: { service: typeof secondaryServices[0]; index: number }) {
  const animation = useScrollAnimation({ delay: index * 150, animation: "fade-in-up" })

  return (
    <div ref={animation.ref} className={animation.className}>
      <Card
        className="group bg-card border-border hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 hover:scale-[1.02] transition-all duration-300 h-full"
      >
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <service.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div>
              <CardTitle className="text-lg font-[family-name:var(--font-heading)]">
                {service.title}
              </CardTitle>
              <span className="text-xs font-semibold text-muted-foreground">
                {service.tech}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-muted-foreground leading-relaxed text-sm">
            {service.description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}

export function Services() {
  const headerAnimation = useScrollAnimation({ animation: "fade-in-up" })
  const secondaryHeaderAnimation = useScrollAnimation({ animation: "fade-in-up" })

  return (
    <section id="servicios" className="py-20 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main section header */}
        <div ref={headerAnimation.ref} className={`text-center max-w-3xl mx-auto mb-16 ${headerAnimation.className}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-4">
            <Brain className="h-4 w-4" />
            Automatización e Inteligencia Artificial
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Implementamos soluciones de IA y automatización que transforman la manera en que
            interactuas con tus clientes y procesas información.
          </p>
        </div>

        {/* Main services grid - AI & Automation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Gradient separator */}
        <div className="my-16 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <span className="text-sm text-muted-foreground font-medium px-4">Además</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Secondary section */}
        <div ref={secondaryHeaderAnimation.ref} className={`text-center max-w-2xl mx-auto mb-10 ${secondaryHeaderAnimation.className}`}>
          <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
            También <span className="text-primary">desarrollamos</span>
          </h3>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">
            Software a medida y aplicaciones web con tecnologías de primer nivel.
          </p>
        </div>

        {/* Secondary services - more compact */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {secondaryServices.map((service, index) => (
            <SecondaryServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
