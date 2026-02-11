import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 bg-foreground border-t border-background/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold font-[family-name:var(--font-heading)] text-primary">
            Figuriz
          </Link>
          
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Figuriz. Todos los derechos reservados.
          </p>

          <nav className="flex items-center gap-6">
            <Link 
              href="#servicios" 
              className="text-sm text-background/60 hover:text-primary transition-colors"
            >
              Servicios
            </Link>
            <Link 
              href="#nosotros" 
              className="text-sm text-background/60 hover:text-primary transition-colors"
            >
              Nosotros
            </Link>
            <Link 
              href="#contacto" 
              className="text-sm text-background/60 hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
