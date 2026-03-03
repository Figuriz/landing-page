"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  SiN8N,
  SiOpenai,
  SiWhatsapp,
  SiAngular,
  SiDotnet,
  SiGooglegemini,
  SiAnthropic,
  SiCloudflare,
  SiGithubactions,
  SiJest,
  SiAdobeacrobat,
  SiMinutemailer,
} from "react-icons/si"
import { FaAws } from "react-icons/fa6"
import { VscAzure } from "react-icons/vsc"

const technologies = [
  { name: "n8n",        label: "Automatización de flujos",    icon: SiN8N,                  color: "#FF6D00" },
  { name: "OpenAI",     label: "Inteligencia Artificial",     icon: SiOpenai,               color: "#412991" },
  { name: "Gemini",     label: "IA de Google",                icon: SiGooglegemini,         color: "#8E75B2" },
  { name: "Claude",     label: "IA de Anthropic",             icon: SiAnthropic,            color: "#D97757" },
  { name: "WhatsApp",   label: "Asistentes conversacionales", icon: SiWhatsapp,             color: "#25D366" },
  { name: "Angular",    label: "Frontend moderno",            icon: SiAngular,              color: "#DD0031" },
  { name: ".NET",       label: "Backend robusto",             icon: SiDotnet,               color: "#512BD4" },
  { name: "Azure",      label: "Nube Microsoft",              icon: VscAzure,               color: "#0078D4" },
  { name: "AWS",        label: "Nube Amazon",                 icon: FaAws,                  color: "#FF9900" },
  { name: "Cloudflare", label: "Seguridad y CDN",             icon: SiCloudflare,           color: "#F6821F" },
  { name: "CI/CD",      label: "Integración continua",        icon: SiGithubactions,        color: "#2088FF" },
  { name: "Testing",    label: "Calidad de software",         icon: SiJest,                 color: "#C21325" },
  { name: "PDFs",       label: "Generación de documentos",    icon: SiAdobeacrobat,         color: "#EC1C24" },
  { name: "Emails",     label: "Automatización de correos",   icon: SiMinutemailer,         color: "#29ABE2" },
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
            {technologies.map((tech) => {
              const Icon = tech.icon
              return (
                <div
                  key={tech.name}
                  className="group flex items-center gap-2.5 px-5 py-3 rounded-xl border border-border bg-muted/30 hover:bg-muted/60 hover:border-border/80 transition-all duration-200"
                >
                  <Icon size={18} color={tech.color} className="flex-shrink-0" />
                  <span className="font-bold text-sm text-foreground">{tech.name}</span>
                  <span className="text-xs text-muted-foreground hidden sm:inline">{tech.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
