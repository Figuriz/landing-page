"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        (isScrolled || isMenuOpen)
          ? "bg-background/95 backdrop-blur-md border-b border-primary/30 shadow-sm shadow-primary/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-figuriz.png"
              alt="Figuriz"
              width={134}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#servicios"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Servicios
            </Link>
            <Link
              href="#nosotros"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Nosotros
            </Link>
            <Link
              href="#proceso"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Proceso
            </Link>
            <Link
              href="#faq"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Preguntas frecuentes
            </Link>
            <Button asChild>
              <Link href="#contacto">Contactanos</Link>
            </Button>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 py-4 border-t border-border">
            <Link
              href="#servicios"
              className="text-foreground/80 hover:text-primary transition-colors font-medium px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#nosotros"
              className="text-foreground/80 hover:text-primary transition-colors font-medium px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="#proceso"
              className="text-foreground/80 hover:text-primary transition-colors font-medium px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Proceso
            </Link>
            <Link
              href="#faq"
              className="text-foreground/80 hover:text-primary transition-colors font-medium px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Preguntas frecuentes
            </Link>
            <Button asChild className="w-fit">
              <Link href="#contacto" onClick={() => setIsMenuOpen(false)}>
                Contactanos
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
