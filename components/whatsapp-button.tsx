"use client"

import { useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { trackEvent } from "@/lib/analytics"

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const message = encodeURIComponent("Hola, quiero saber más sobre los servicios de Figuriz.")
  const href = phoneNumber ? `https://wa.me/${phoneNumber}?text=${message}` : "#contacto"

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      onClick={() => trackEvent({ action: "whatsapp_click", category: "engagement" })}
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  )
}
