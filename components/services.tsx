"use client"

import Link from "next/link"
import { MessageCircle, LayoutDashboard, Globe, Link2, Cog, FileSearch, ArrowUpRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const mainServices = [
  {
    icon: MessageCircle,
    title: "Asistente de WhatsApp",
    description:
      "Responde precios, horarios y disponibilidad con los datos reales de tu negocio, toma pedidos de turnos o reservas y te pasa la conversación cuando hace falta una persona.",
    example: "Ej: un cliente le escribe al taller a las 22 h, el asistente le pide patente y problema, y a la mañana tenés el turno anotado para confirmar.",
    tag: "Abono mensual",
    link: { href: "#contacto", label: "Quiero uno para mi negocio" },
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
    icon: Globe,
    title: "Páginas web",
    description:
      "Con tus fotos, tus reseñas reales de Google y un formulario que te deja la consulta armada en WhatsApp. Rápidas en el celular y con el dominio a tu nombre.",
    example: "Ej: un salón de eventos recibe la consulta con tipo de evento, fecha e invitados, sin preguntar tres veces lo mismo.",
    tag: "Lista en 1 o 2 semanas",
    link: { href: "/demos/barrika", label: "Ver un boceto" },
  },
]

const otherServices = [
  { icon: Link2, title: "Integraciones", text: "Conectamos tu sistema de gestión, tu tienda, tus planillas y tu WhatsApp para no copiar datos a mano." },
  { icon: Cog, title: "Automatizaciones", text: "Avisos, recordatorios, reportes y mails que salen solos cuando pasa algo en tu negocio." },
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
            Tres cosas, bien hechas. Empezamos por la que más te sirva y la vamos ampliando cuando lo necesites.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mainServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div ref={otherAnimation.ref} className={`mt-14 ${otherAnimation.className}`}>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-5">También hacemos</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <div key={s.title} className="flex gap-3">
                <s.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold font-[family-name:var(--font-heading)] text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
