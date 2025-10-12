"use client"

import { Button } from "@/components/ui/button"

import { Zap, Shield, Layers, Sparkles, Network, Cpu } from "lucide-react"
import { useState } from "react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built with performance in mind. Experience blazing fast load times and smooth interactions.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime. Your data is always protected.",
  },
  {
    icon: Layers,
    title: "Modular Design",
    description: "Flexible components that adapt to your needs. Build exactly what you envision.",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Meticulously crafted details in every pixel. Designed for perfection.",
  },
  {
    icon: Network,
    title: "Scalable System",
    description: "Grows with your needs. From startup to enterprise, we've got you covered.",
  },
  {
    icon: Cpu,
    title: "Smart Integration",
    description: "Seamlessly connects with your existing tools and workflows.",
  },
]

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Powerful features designed to elevate your experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Simple, elegant, and built to last
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="h-full backdrop-blur-xl bg-card border border-border rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5 hover:border-white/20">
                  {/* Icon container */}
                  <div className="w-14 h-14 rounded-2xl bg-white/10 p-3 mb-6 transition-all duration-500 group-hover:bg-white/15 group-hover:scale-110">
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                  {/* Hover effect line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-white transition-all duration-500 rounded-b-3xl ${
                      hoveredIndex === index ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Explore button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-2xl px-8 py-6 text-lg font-semibold backdrop-blur-sm bg-secondary/50 border-border transition-all duration-300 hover:bg-secondary hover:scale-105 hover:border-white/30"
          >
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  )
}
