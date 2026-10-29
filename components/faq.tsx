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
    question: "¿Cuánto cuesta?",
    answer:
      "Depende de qué necesites, por eso trabajamos por etapas: la primera es chica, con alcance y precio cerrados por escrito antes de empezar. El asistente de WhatsApp se paga con un abono mensual. En la primera charla, que no tiene costo, te decimos cuánto saldría tu caso.",
  },
  {
    question: "¿Cuánto tarda?",
    answer:
      "Una página web, una o dos semanas. Un asistente de WhatsApp o la primera etapa de un sistema, unas pocas semanas según lo que incluya. Te damos la fecha en la propuesta.",
  },
  {
    question: "¿El asistente de WhatsApp reemplaza a una persona?",
    answer:
      "No. Responde lo que se repite todo el día (precios, horarios, disponibilidad), toma los datos del pedido o del turno y te pasa la conversación cuando hace falta alguien del negocio. Vos confirmás. Usa la API oficial de WhatsApp, así que tu número no corre riesgo.",
  },
  {
    question: "¿Necesito saber de tecnología?",
    answer:
      "No. Te entregamos algo que se usa desde el celular o la computadora, le enseñamos a tu equipo y quedamos para lo que necesiten.",
  },
  {
    question: "¿Qué pasa con mis datos?",
    answer:
      "Son tuyos. El dominio, las cuentas y la información quedan a tu nombre, y te los podemos exportar cuando quieras.",
  },
  {
    question: "Ya uso un sistema de gestión, ¿tengo que cambiarlo?",
    answer:
      "No necesariamente. Muchas veces conviene conectarlo con lo que falta (WhatsApp, la web, una planilla, un portal para tus clientes) en lugar de reemplazarlo. Las integraciones son nuestro fuerte.",
  },
  {
    question: "¿Trabajan solo en Tandil?",
    answer:
      "Estamos en Tandil y en la zona nos juntamos en persona. Con negocios de otras ciudades trabajamos por videollamada y WhatsApp.",
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
            Lo que más nos preguntan antes de arrancar.
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
