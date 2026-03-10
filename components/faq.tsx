"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const faqs = [
  {
    question: "¿Cuánto tarda en implementarse una automatización?",
    answer:
      "Depende de la complejidad del flujo. Una automatización simple — como conectar un formulario con un CRM y enviar un email — puede estar lista en pocos días. Flujos más complejos con múltiples sistemas o lógica de negocio avanzada pueden llevar semanas. En la primera consulta te damos una estimación real para tu caso.",
  },
  {
    question: "¿Necesito conocimientos técnicos para usar las soluciones?",
    answer:
      "No. Nuestras soluciones están pensadas para que vos y tu equipo puedan usarlas sin saber programar. Nosotros nos encargamos de la implementación y te entregamos algo funcional y fácil de operar. Además incluimos acompañamiento post-entrega.",
  },
  {
    question: "¿Con qué herramientas y sistemas se integra n8n?",
    answer:
      "n8n se integra con cientos de aplicaciones: Google Sheets, Gmail, Slack, WhatsApp, Notion, HubSpot, Salesforce, Shopify, sistemas propios vía API, bases de datos, y mucho más. Si ya usás una herramienta, lo más probable es que podamos integrarla.",
  },
  {
    question: "¿Qué pasa si falla una automatización?",
    answer:
      "n8n registra cada ejecución con su estado y los datos procesados, por lo que cualquier error queda trazado. Configuramos alertas para que te notifiquen si algo sale mal, y ofrecemos soporte post-implementación para resolver incidentes.",
  },
  {
    question: "¿Cómo es el proceso para empezar a trabajar con Figuriz?",
    answer:
      "Primero tenemos una consulta gratuita para entender tu negocio y qué querés automatizar. Luego te proponemos una solución con alcance, tiempos y costo. Una vez que estés de acuerdo, arrancamos el desarrollo con comunicación constante hasta la entrega.",
  },
  {
    question: "¿También desarrollan páginas web y aplicaciones?",
    answer:
      "Sí. Además de automatizaciones, diseñamos y desarrollamos sitios web, landing pages y aplicaciones a medida. Trabajamos con tecnologías modernas para que tu negocio tenga presencia digital profesional, rápida y optimizada para convertir visitantes en clientes.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Cada proyecto es distinto, por lo que no manejamos precios fijos. El costo depende de la complejidad del proyecto, las integraciones necesarias y el tiempo de desarrollo. Contactanos para una consulta sin cargo y te damos una propuesta concreta.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export function FAQ() {
  const headerAnimation = useScrollAnimation({ animation: "fade-in-up" })
  const contentAnimation = useScrollAnimation({ animation: "fade-in-up", delay: 150 })

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerAnimation.ref} className={`text-center mb-12 ${headerAnimation.className}`}>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-foreground">
            Preguntas <span className="text-primary">frecuentes</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Todo lo que necesitás saber antes de empezar.
          </p>
        </div>

        <div ref={contentAnimation.ref} className={contentAnimation.className}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-muted/20 hover:bg-muted/40 transition-colors data-[state=open]:bg-muted/40"
              >
                <AccordionTrigger className="text-left font-semibold font-[family-name:var(--font-heading)] text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
