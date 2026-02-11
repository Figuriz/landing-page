import { Code2, Globe, Cog, Link2, Bot, MessageCircle, FileSearch, Brain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Code2,
    title: "Software a Medida",
    description: "Desarrollamos soluciones personalizadas con .NET, creando sistemas robustos, escalables y de alto rendimiento para tu empresa.",
    tech: ".NET",
  },
  {
    icon: Globe,
    title: "Aplicaciones Web",
    description: "Creamos aplicaciones web modernas y dinámicas con Angular, ofreciendo experiencias de usuario excepcionales y código mantenible.",
    tech: "Angular",
  },
  {
    icon: Cog,
    title: "Automatización",
    description: "Optimizamos tus procesos con n8n, automatizando flujos de trabajo complejos sin necesidad de código extensivo.",
    tech: "n8n",
  },
  {
    icon: Link2,
    title: "Integraciones",
    description: "Conectamos tus sistemas usando n8n y APIs personalizadas en .NET para crear un ecosistema digital unificado.",
    tech: "n8n + .NET",
  },
]

const aiServices = [
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
]

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Ofrecemos soluciones tecnológicas integrales para llevar tu negocio al siguiente nivel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="group bg-card border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
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
          ))}
        </div>

        {/* AI Services Section */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-4">
              <Brain className="h-4 w-4" />
              Inteligencia Artificial
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
              Potenciamos tu negocio con <span className="text-primary">IA</span>
            </h3>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Implementamos soluciones de inteligencia artificial que transforman la manera en que interactuas con tus clientes y procesas información.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiServices.map((service) => (
              <Card 
                key={service.title} 
                className="group bg-card border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
