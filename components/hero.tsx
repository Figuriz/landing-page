"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Zap, TrendingUp, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Hero() {
  const statsAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-background overflow-hidden">
      {/* Technical grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(#EEEAE3 1px, transparent 1px), linear-gradient(90deg, #EEEAE3 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Multi-layer gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-[10%] w-16 h-16 rounded-full bg-primary/8 animate-float" />
      <div className="absolute top-1/3 right-[15%] w-24 h-24 rounded-2xl bg-primary/8 rotate-45 animate-float-delayed" />
      <div className="absolute bottom-1/4 left-[20%] w-12 h-12 rounded-lg bg-primary/8 rotate-12 animate-float-slow" />
      <div className="absolute top-[60%] right-[10%] w-20 h-20 rounded-full bg-primary/5 animate-float-slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium text-primary mb-4 md:mb-6 animate-fade-in">
            <Bot className="h-3.5 w-3.5 md:h-4 md:w-4" />
            Automatización e Inteligencia Artificial para tu negocio
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-[family-name:var(--font-heading)] text-foreground leading-tight text-balance animate-fade-in-up">
            Tu negocio en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-gradient">
              piloto automático.
            </span>
          </h1>

          <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty animate-fade-in-up animation-delay-200">
            En <span className="text-primary font-semibold">Figuriz</span> creamos sistemas que{" "}
            <span className="font-semibold text-foreground">atienden consultas, procesan pedidos y sincronizan tus herramientas</span>{" "}
            — de forma automática, las 24 horas. Sin que nadie de tu equipo tenga que hacerlo manualmente.
            También desarrollamos <span className="font-semibold text-foreground">páginas web y aplicaciones</span> a medida.
          </p>

          <div className="mt-6 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 animate-fade-in-up animation-delay-400">
            <Button
              asChild
              size="lg"
              className="text-sm md:text-base px-6 md:px-8 py-5 md:py-6 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              <Link href="#contacto">
                Quiero automatizar mi negocio
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-sm md:text-base px-6 md:px-8 py-5 md:py-6 bg-transparent border-border/60 hover:border-primary/40 hover:scale-105 transition-all duration-300"
            >
              <Link href="#proceso">Ver cómo funciona</Link>
            </Button>
          </div>

          <div
            ref={statsAnimation.ref}
            className={`mt-8 md:mt-12 hidden md:flex flex-wrap items-center justify-center gap-3 pt-6 md:pt-8 border-t border-border ${statsAnimation.className}`}
          >
            {[
              { label: "Tareas sin trabajo manual", icon: Zap },
              { label: "Chatbots e IA", icon: Bot },
              { label: "Tus sistemas conectados", icon: TrendingUp },
              { label: "Atención 24/7", icon: Users },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/80 border border-border text-sm text-foreground/60"
              >
                <item.icon className="h-4 w-4 text-primary" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
