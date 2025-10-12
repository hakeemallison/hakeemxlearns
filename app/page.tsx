import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Showcase } from "@/components/showcase"
import { CTA } from "@/components/cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Showcase />
      <CTA />
    </main>
  )
}
