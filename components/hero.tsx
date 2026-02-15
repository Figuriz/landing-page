"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Zap, TrendingUp, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Hero() {
  const statsAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-background overflow-hidden">
      {/* Multi-layer gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/3 via-transparent to-transparent" />

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-[10%] w-16 h-16 rounded-full bg-primary/5 animate-float" />
      <div className="absolute top-1/3 right-[15%] w-24 h-24 rounded-2xl bg-primary/5 rotate-45 animate-float-delayed" />
      <div className="absolute bottom-1/4 left-[20%] w-12 h-12 rounded-lg bg-primary/5 rotate-12 animate-float-slow" />
      <div className="absolute top-[60%] right-[10%] w-20 h-20 rounded-full bg-primary/3 animate-float-slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary mb-6 animate-fade-in">
            <Bot className="h-4 w-4" />
            Automatización e Inteligencia Artificial para tu negocio
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] text-foreground leading-tight text-balance animate-fade-in-up">
            Automatizamos e impulsamos tu negocio con{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-gradient">
              Inteligencia Artificial
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty animate-fade-in-up animation-delay-200">
            En <span className="text-primary font-semibold">Figuriz</span>, automatizamos
            tus procesos y potenciamos tu negocio con IA.
            Chatbots, asistentes virtuales, integración de sistemas y flujos de trabajo
            inteligentes con{" "}
            <span className="font-semibold text-foreground">n8n</span> e{" "}
            <span className="font-semibold text-foreground">Inteligencia Artificial</span>.
          </p>

          <p className="mt-3 text-sm text-muted-foreground/70 animate-fade-in-up animation-delay-300">
            También desarrollamos software a medida con .NET y Angular.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button
              asChild
              size="lg"
              className="text-base px-8 py-6 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              <Link href="#contacto">
                Contactanos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 bg-transparent hover:scale-105 transition-all duration-300"
            >
              <Link href="#servicios">Ver servicios</Link>
            </Button>
          </div>

          <div
            ref={statsAnimation.ref}
            className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border ${statsAnimation.className}`}
          >
            {[
              { number: "50+", label: "Proyectos entregados", icon: TrendingUp },
              { number: "99%", label: "Clientes satisfechos", icon: Users },
              { number: "10+", label: "Años de experiencia", icon: Zap },
              { number: "24/7", label: "Soporte técnico", icon: Bot },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon className="h-5 w-5 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                  <p className="text-2xl md:text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">
                    {stat.number}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
