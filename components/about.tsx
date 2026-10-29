"use client"

import { Users, Layers, ShieldCheck, MapPin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Users,
    title: "Te atiende quien lo programa",
    description: "Sin vendedores ni call center: hablás con quien después arma tu sistema, y te lo explica en criollo.",
  },
  {
    icon: Layers,
    title: "Por etapas y por escrito",
    description: "Arrancamos por una parte chica con alcance y precio cerrados. Lo que no está en la propuesta no se cobra de sorpresa.",
  },
  {
    icon: ShieldCheck,
    title: "Los datos son tuyos",
    description: "El dominio, las cuentas y la información quedan a tu nombre. Si un día querés irte, te llevás todo.",
  },
  {
    icon: MapPin,
    title: "Estamos en Tandil",
    description: "Si sos de la zona, nos juntamos en persona. Si no, trabajamos por videollamada y WhatsApp.",
  },
]


function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const animation = useScrollAnimation({ delay: index * 100, animation: "fade-in-up" })

  return (
    <div
      ref={animation.ref}
      className={`flex flex-col gap-3 p-6 bg-muted/40 rounded-xl border border-border hover:border-primary/30 hover:bg-muted/70 hover:shadow-lg transition-all duration-300 ${animation.className}`}
    >
      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <feature.icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h3 className="text-base font-semibold font-[family-name:var(--font-heading)] text-foreground">
          {feature.title}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  )
}

export function About() {
  const headerAnimation = useScrollAnimation({ animation: "fade-in-up" })

  return (
    <section id="nosotros" className="py-20 md:py-32 bg-muted/20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary/4 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header — centrado */}
        <div ref={headerAnimation.ref} className={`text-center max-w-3xl mx-auto mb-14 ${headerAnimation.className}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
            Quiénes <span className="text-primary">somos</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Figuriz es un equipo chico de desarrolladores de Tandil. Llevamos más de 4 años
            armando integraciones, sistemas internos y automatizaciones para empresas, y ahora
            hacemos lo mismo para negocios de la zona, a su medida y a su escala.
          </p>
        </div>

        {/* Feature cards — 4 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
