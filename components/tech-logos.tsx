"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const technologies = [
  { name: "n8n", label: "Automatización de flujos", color: "#FF6D00" },
  { name: "OpenAI", label: "Inteligencia Artificial", color: "#10a37f" },
  { name: "WhatsApp", label: "Asistentes conversacionales", color: "#25D366" },
  { name: "Angular", label: "Frontend moderno", color: "#dd0031" },
  { name: ".NET", label: "Backend robusto", color: "#512bd4" },
  { name: "REST APIs", label: "Integraciones a medida", color: "#616E7C" },
]

export function TechLogos() {
  const animation = useScrollAnimation({ animation: "fade-in-up" })

  return (
    <section className="py-14 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={animation.ref} className={animation.className}>
          <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8">
            Tecnologías con las que trabajamos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-2.5 px-5 py-3 rounded-xl border border-border bg-muted/30 hover:bg-muted/60 hover:border-border/80 transition-all duration-200"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: tech.color }}
                />
                <span className="font-bold text-sm text-foreground">{tech.name}</span>
                <span className="text-xs text-muted-foreground hidden sm:inline">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
