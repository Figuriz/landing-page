"use client"

import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    quote: "Figuriz transformó completamente nuestra operación. El sistema que desarrollaron nos permitió aumentar nuestra productividad en un 40%.",
    author: "María González",
    role: "CEO",
    company: "TechStart Solutions",
    rating: 5,
  },
  {
    quote: "El equipo de Figuriz entendió perfectamente nuestras necesidades. Entregaron a tiempo y el soporte post-implementación ha sido excepcional.",
    author: "Carlos Mendoza",
    role: "Director de TI",
    company: "Grupo Innovar",
    rating: 5,
  },
  {
    quote: "La calidad del código y la documentación que entregan es impecable. Son un socio tecnológico en el que realmente puedes confiar.",
    author: "Ana Ramírez",
    role: "CTO",
    company: "DataFlow Corp",
    rating: 5,
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const animation = useScrollAnimation({ delay: index * 150, animation: "fade-in-up" })
  const initials = testimonial.author
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <div ref={animation.ref} className={animation.className}>
      <Card
        className="bg-card border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
        <CardContent className="pt-6">
          {/* Star rating */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <Quote className="h-8 w-8 text-primary/20 mb-4" />
          <blockquote className="text-foreground leading-relaxed mb-6">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div className="border-t border-border pt-4 flex items-center gap-3">
            {/* Avatar with initials */}
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-primary">{initials}</span>
            </div>
            <div>
              <p className="font-semibold text-foreground">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function Testimonials() {
  const headerAnimation = useScrollAnimation({ animation: "fade-in-up" })

  return (
    <section id="testimonios" className="py-20 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerAnimation.ref} className={`text-center max-w-3xl mx-auto mb-16 ${headerAnimation.className}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
            Lo que dicen nuestros <span className="text-primary">clientes</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            La confianza de nuestros clientes es nuestro mayor logro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
