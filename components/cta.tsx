"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CTA() {
  const contentAnimation = useScrollAnimation({ animation: "fade-in-up" })

  return (
    <section id="contacto" className="relative py-20 md:py-32 bg-foreground text-background overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentAnimation.ref} className={`max-w-3xl mx-auto text-center ${contentAnimation.className}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-balance">
            ¿Listo para transformar tu{" "}
            <span className="text-primary">negocio</span>?
          </h2>
          <p className="mt-6 text-lg text-background/80 leading-relaxed">
            Conversemos sobre cómo la automatización y la IA pueden potenciar tu empresa.
            Nuestro equipo está listo para ayudarte.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="text-base px-8 py-6 bg-primary hover:bg-accent text-primary-foreground shadow-lg shadow-primary/30 animate-pulse-glow hover:scale-105 transition-transform duration-300"
            >
              <Link href="mailto:contacto@figuriz.com">
                <Mail className="mr-2 h-5 w-5" />
                Contactanos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-background/70">
            <a
              href="mailto:contacto@figuriz.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              contacto@figuriz.com
            </a>
            <a
              href="tel:+123456789"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
              +1 (234) 567-89
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
