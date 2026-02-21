"use client"

import { Search, PenTool, Code2, Rocket } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Descubrimiento",
    description:
      "Analizamos tu negocio, objetivos y necesidades para entender exactamente qué solución necesitas.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Diseño",
    description:
      "Creamos prototipos y definimos la arquitectura de la solución antes de escribir una sola línea de código.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Desarrollo",
    description:
      "Construimos tu solución con tecnologías modernas, manteniéndote informado en cada paso del proceso.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Entrega y Soporte",
    description:
      "Lanzamos tu proyecto y te acompañamos con soporte continuo para asegurar su éxito a largo plazo.",
  },
]

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const animation = useScrollAnimation({ delay: index * 150, animation: "fade-in-up" })
  const Icon = step.icon

  return (
    <div ref={animation.ref} className={`relative ${animation.className}`}>
      {/* Connector line (hidden on last item and on mobile) */}
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-primary/40 to-primary/10" />
      )}

      <div className="flex flex-col items-center text-center">
        {/* Number + Icon */}
        <div className="relative mb-6">
          <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
            {step.number}
          </span>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">
          {step.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed max-w-xs">
          {step.description}
        </p>
      </div>
    </div>
  )
}

export function Testimonials() {
  const headerAnimation = useScrollAnimation({ animation: "fade-in-up" })

  return (
    <section id="proceso" className="py-20 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerAnimation.ref} className={`text-center max-w-3xl mx-auto mb-16 ${headerAnimation.className}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
            Nuestro <span className="text-primary">proceso</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Un enfoque claro y estructurado para llevar tu idea de concepto a realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
