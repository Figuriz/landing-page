import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone } from "lucide-react"

export function CTA() {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-balance">
            ¿Listo para transformar tu{" "}
            <span className="text-primary">negocio</span>?
          </h2>
          <p className="mt-6 text-lg text-background/80 leading-relaxed">
            Conversemos sobre tu próximo proyecto. Nuestro equipo está listo para ayudarte 
            a crear la solución perfecta para tus necesidades.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="text-base px-8 py-6 bg-primary hover:bg-accent text-primary-foreground shadow-lg shadow-primary/30"
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
