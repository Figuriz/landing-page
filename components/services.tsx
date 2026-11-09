"use client"

import Link from "next/link"
import { MessageCircle, LayoutDashboard, Globe, Link2, Cog, FileSearch, ArrowUpRight, Store } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const mainServices = [
  {
    icon: Store,
    title: "Mostrador",
    description:
      "La app para comercios que venden en un mostrador: anotás el fiado con qué se llevó y qué día, ves cada cobro cuando entra y cerrás el día con la caja ya hecha. Todo desde el celular.",
    example: "Ej: un cliente pregunta cuánto debe, y en dos toques le mostrás el total, lo que se llevó y lo que dejó a cuenta.",
    tag: "Cuota mensual",
    link: { href: "/mostrador", label: "Conocé Mostrador" },
  },
  {
    icon: LayoutDashboard,
    title: "Sistemas a medida",
    description:
      "Pedidos, stock, cuentas corrientes, turnos u órdenes de trabajo en un solo lugar, pensados para usar desde el celular. Para dejar el Excel, el cuaderno y el ir y venir de mensajes.",
    example: "Ej: el vendedor carga el pedido en la calle, llega solo a la oficina, se descuenta el stock y la factura sale con un toque.",
    tag: "Por etapas, precio cerrado",
    link: { href: "/demos", label: "Ver demos por rubro" },
  },
  {
    icon: Cog,
    title: "Automatizaciones",
    description:
      "Cuando no necesitás un sistema entero: avisos de deuda, recordatorios de turnos, cobros que se anotan solos en tu planilla y resúmenes que te llegan al celular.",
    example: "Ej: el día antes del turno, tu cliente recibe un WhatsApp con los datos y cómo confirmar.",
    tag: "Precio cerrado",
    link: { href: "/automatizaciones", label: "Ver automatizaciones" },
  },
]

const otherServices: { icon: typeof Link2; title: string; text: string; link?: { href: string; label: string } }[] = [
  { icon: Globe, title: "Páginas web", text: "Con tus fotos, tus reseñas reales de Google y un formulario que te deja la consulta armada en WhatsApp.", link: { href: "/demos/barrika", label: "Ver un boceto" } },
  { icon: MessageCircle, title: "Asistente de WhatsApp", text: "Responde lo que te preguntan todo el día con los datos de tu negocio, toma turnos y te pasa la conversación cuando hace falta." },
  { icon: Link2, title: "Integraciones", text: "Conectamos tu sistema de gestión, tu tienda, tus planillas y tu WhatsApp para no copiar datos a mano." },
  { icon: FileSearch, title: "Lectura de documentos", text: "Facturas, remitos o PDFs que se leen solos y se cargan donde los necesitás." },
]

function ServiceCard({ service, index }: { service: (typeof mainServices)[0]; index: number }) {
  const animation = useScrollAnimation({ delay: index * 100, animation: "fade-in-up" })
  const Icon = service.icon

  return (
    <div ref={animation.ref} className={animation.className}>
      <div className="group h-full flex flex-col gap-5 p-6 md:p-7 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors duration-300">
        <div className="flex items-center justify-between">
          <div className="h-12 w-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
            {service.tag}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-foreground">{service.title}</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
          <p className="mt-3 text-sm text-muted-foreground/80 italic leading-relaxed">{service.example}</p>
        </div>
        <Link
          href={service.link.href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary w-fit"
        >
          {service.link.label}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  )
}

export function Services() {
  const headerAnimation = useScrollAnimation({ animation: "fade-in-up" })
  const otherAnimation = useScrollAnimation({ animation: "fade-in-up", delay: 150 })

  return (
    <section id="servicios" className="py-20 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerAnimation.ref} className={`max-w-3xl mb-14 ${headerAnimation.className}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-foreground text-balance">
            Qué hacemos <span className="text-primary">por tu negocio</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Empezamos por lo que más te sirva y lo vamos ampliando cuando lo necesites.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mainServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div ref={otherAnimation.ref} className={`mt-14 ${otherAnimation.className}`}>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-5">También hacemos</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((s) => (
              <div key={s.title} className="flex gap-3">
                <s.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold font-[family-name:var(--font-heading)] text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                  {s.link && (
                    <Link href={s.link.href} className="mt-1.5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline underline-offset-4">
                      {s.link.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
