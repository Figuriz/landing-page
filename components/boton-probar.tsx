"use client"

import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

/**
 * El botón que lleva al registro de Mostrador. Avisa a la medición que lo tocaron
 * y desde qué parte de la página, para saber cuánta gente pasa de mirar a probar.
 */
export function BotonProbar({
  href,
  lugar,
  className,
  children,
}: {
  href: string
  lugar: string
  className?: string
  children: ReactNode
}) {
  return (
    <Button asChild size="lg" className={className}>
      <a href={href} onClick={() => trackEvent({ action: "probar_gratis", category: "mostrador", label: lugar })}>
        {children}
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </Button>
  )
}
