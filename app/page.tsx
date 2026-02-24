import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { TechLogos } from "@/components/tech-logos"
import { About } from "@/components/about"
import { Industries } from "@/components/industries"
import { ProcessSteps } from "@/components/process-steps"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <TechLogos />
      <About />
      <Industries />
      <ProcessSteps />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
