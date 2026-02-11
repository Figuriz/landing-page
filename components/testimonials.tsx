import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Figuriz transformó completamente nuestra operación. El sistema que desarrollaron nos permitió aumentar nuestra productividad en un 40%.",
    author: "María González",
    role: "CEO",
    company: "TechStart Solutions",
  },
  {
    quote: "El equipo de Figuriz entendió perfectamente nuestras necesidades. Entregaron a tiempo y el soporte post-implementación ha sido excepcional.",
    author: "Carlos Mendoza",
    role: "Director de TI",
    company: "Grupo Innovar",
  },
  {
    quote: "La calidad del código y la documentación que entregan es impecable. Son un socio tecnológico en el que realmente puedes confiar.",
    author: "Ana Ramírez",
    role: "CTO",
    company: "DataFlow Corp",
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
            Lo que dicen nuestros <span className="text-primary">clientes</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            La confianza de nuestros clientes es nuestro mayor logro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.author}
              className="bg-card border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <blockquote className="text-foreground leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
