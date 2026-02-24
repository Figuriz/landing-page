"use client"

import { Cog, Link2, Bot, MessageCircle, FileSearch, Brain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const mainServices = [
  {
    icon: Bot,
    title: "Chatbots Inteligentes",
    description: "Chatbots con IA que entienden el contexto, responden de forma natural y resuelven consultas sin intervención humana.",
    example: "Ej: Un bot que responde preguntas frecuentes, califica leads y agenda reuniones — sin que nadie de tu equipo intervenga.",
    tech: "Funciona 24/7",
  },
  {
    icon: MessageCircle,
    title: "Asistentes de WhatsApp",
    description: "Asistentes virtuales en WhatsApp que automatizan la atención al cliente, ventas y soporte las 24 horas del día.",
    example: "Ej: El cliente pregunta por un producto, recibe disponibilidad y precio al instante, y puede reservar sin esperar.",
    tech: "Respuesta inmediata",
  },
  {
    icon: FileSearch,
    title: "Lectura Inteligente de Archivos",
    description: "Procesamos documentos, PDFs e imágenes con IA para extraer información y automatizar la carga de datos.",
    example: "Ej: Subís una factura en PDF y el sistema extrae proveedor, monto e impuestos directo a tu planilla o sistema contable.",
    tech: "Sin carga manual",
  },
  {
    icon: Brain,
    title: "Soluciones con IA",
    description: "Integramos inteligencia artificial en tus procesos para clasificación automática, análisis y toma de decisiones.",
    example: "Ej: Clasificación automática de tickets de soporte por urgencia y categoría, sin leerlos uno por uno.",
    tech: "Decisiones automáticas",
  },
  {
    icon: Cog,
    title: "Automatización de Procesos",
    description: "Automatizamos flujos de trabajo complejos, eliminando tareas manuales y repetitivas de tu operación diaria.",
    example: "Ej: Cuando se cierra una venta, se genera la factura, se envía por email y se notifica al equipo de despacho.",
    tech: "Sin intervención manual",
  },
  {
    icon: Link2,
    title: "Integraciones",
    description: "Conectamos tus sistemas para que todas tus herramientas trabajen juntas en tiempo real, sin copiar datos a mano.",
    example: "Ej: Tu tienda online, tu CRM, tu sistema de stock y tu WhatsApp sincronizados automáticamente.",
    tech: "Todo conectado",
  },
]


function ServiceCard({ service, index }: { service: typeof mainServices[0]; index: number }) {
  const animation = useScrollAnimation({ delay: index * 100, animation: "fade-in-up" })

  return (
    <div ref={animation.ref} className={animation.className}>
      <Card
        className="group bg-card border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] transition-all duration-300 h-full relative overflow-hidden"
      >
        {/* Left accent bar — visible on hover */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          <p className="mt-3 text-xs text-muted-foreground/70 italic leading-relaxed">
            {service.example}
          </p>
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


export function Services() {
  const headerAnimation = useScrollAnimation({ animation: "fade-in-up" })

  return (
    <section id="servicios" className="py-20 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main section header */}
        <div ref={headerAnimation.ref} className={`text-center max-w-3xl mx-auto mb-16 ${headerAnimation.className}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-4">
            <Brain className="h-4 w-4" />
            Soluciones para tu negocio
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
            ¿Qué puede hacer <span className="text-primary">Figuriz</span> por vos?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Automatizamos las tareas que te quitan tiempo: atención al cliente, procesamiento de datos,
            comunicaciones y más — para que vos puedas enfocarte en hacer crecer tu negocio.
          </p>
        </div>

        {/* Main services grid - AI & Automation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
