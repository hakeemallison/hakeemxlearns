"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Immersive Experience",
    category: "Web Design",
    description: "A highly immersive and interactive creative website that blurs the line between reality and digital",
    image: "/abstract-3d-immersive-digital-art.jpg",
  },
  {
    title: "Innovation Hub",
    category: "Platform",
    description: "Combining innovation, durability and efficiency in a seamless digital experience",
    image: "/futuristic-tech-interface.png",
  },
  {
    title: "Global Vision",
    category: "Enterprise",
    description: "A comprehensive approach for a model of the future with cutting-edge solutions",
    image: "/modern-architecture-minimal.jpg",
  },
]

export function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Product Lineup</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Discover our latest work and innovations
          </p>
        </div>

        {/* Main showcase */}
        <div className="backdrop-blur-xl bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image side */}
            <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
              <img
                src={projects[activeIndex].image || "/placeholder.svg"}
                alt={projects[activeIndex].title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 rounded-full bg-accent backdrop-blur-sm text-accent-foreground text-sm font-medium">
                  {projects[activeIndex].category}
                </span>
              </div>
            </div>

            {/* Content side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{projects[activeIndex].title}</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{projects[activeIndex].description}</p>

              <Button className="group w-fit rounded-2xl px-6 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
                <span className="flex items-center gap-2">
                  View Project
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>

              <div className="flex gap-3 mt-12 pt-8 border-t border-border/50">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "w-12 bg-accent" : "w-2 bg-muted hover:bg-muted-foreground"
                    }`}
                    aria-label={`View project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
