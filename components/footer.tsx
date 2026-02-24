"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Linkedin, ArrowUpRight } from "lucide-react"

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
]

const services = [
  "Chatbots con IA",
  "Asistentes de WhatsApp",
  "Automatización de procesos",
  "Integración de sistemas",
  "Páginas web y aplicaciones",
  "Lectura inteligente de archivos",
]

export function Footer() {
  return (
    <footer className="bg-[#060609] relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#EEEAE3 1px, transparent 1px), linear-gradient(90deg, #EEEAE3 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial red glow at top */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-primary/8 blur-[110px] rounded-full pointer-events-none"
      />

      {/* Large decorative background brand text */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[7rem] md:text-[11rem] lg:text-[14rem] font-extrabold font-[family-name:var(--font-heading)] text-foreground/[0.022] select-none pointer-events-none whitespace-nowrap leading-none"
      >
        FIGURIZ
      </div>

      {/* Top separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Brand statement — centered */}
        <div className="pt-14 pb-10 flex flex-col items-center text-center">
          <Link href="/" className="mb-5 inline-block group">
            <Image
              src="/logo-figuriz.png"
              alt="Figuriz"
              width={800}
              height={240}
              className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-200"
            />
          </Link>
          <p className="text-lg md:text-xl font-semibold font-[family-name:var(--font-heading)] text-foreground/80 max-w-sm leading-snug">
            Hacemos que tu negocio{" "}
            <span className="text-primary">trabaje solo.</span>
          </p>
          <p className="mt-2.5 text-sm text-foreground/45 max-w-xs leading-relaxed">
            Automatización, chatbots e IA — para que vos te enfoques en crecer.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

        {/* 3-column grid */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Column 1: Navigation */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary mb-5">
              Navegación
            </p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-foreground/55 hover:text-foreground/90 transition-colors duration-150 w-fit"
                >
                  <span className="block w-0 group-hover:w-3 h-px bg-primary transition-all duration-200" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 2: What we do */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary mb-5">
              Lo que hacemos
            </p>
            <ul className="flex flex-col gap-2.5">
              {services.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/55">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary mb-5">
              Hablemos
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contacto@figuriz.com"
                className="group flex items-center gap-3 text-sm text-foreground/55 hover:text-foreground/90 transition-colors duration-150 w-fit"
              >
                <div className="h-8 w-8 rounded-lg bg-foreground/[0.05] group-hover:bg-primary/15 border border-border/40 group-hover:border-primary/30 flex items-center justify-center transition-all duration-200">
                  <Mail className="h-3.5 w-3.5 text-foreground/40 group-hover:text-primary transition-colors" />
                </div>
                contacto@figuriz.com
              </a>

<a
                href="https://linkedin.com/company/figuriz"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-foreground/55 hover:text-foreground/90 transition-colors duration-150 w-fit"
              >
                <div className="h-8 w-8 rounded-lg bg-foreground/[0.05] group-hover:bg-[#0A66C2]/15 border border-border/40 group-hover:border-[#0A66C2]/30 flex items-center justify-center transition-all duration-200">
                  <Linkedin className="h-3.5 w-3.5 text-foreground/40 group-hover:text-[#0A66C2] transition-colors" />
                </div>
                LinkedIn
              </a>

              <Link
                href="#contacto"
                className="mt-3 inline-flex items-center gap-2 px-4 py-2.5 bg-primary/10 hover:bg-primary/20 border border-primary/25 hover:border-primary/50 text-primary text-sm font-semibold rounded-lg transition-all duration-200 w-fit cursor-pointer"
              >
                Consulta gratuita
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/25 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-foreground/35">
            © {new Date().getFullYear()} Figuriz. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {["Automatización", "n8n", "IA", "WhatsApp", "APIs"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 bg-foreground/[0.04] text-foreground/30 rounded-full border border-border/25"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
