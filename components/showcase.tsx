"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { SectionHeader } from "@/components/ui/section-header"
import type { ProjectItem } from "@/types/components"

const projects: ProjectItem[] = [
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
        <SectionHeader title="Product Lineup" subtitle="Discover our latest work and innovations" />

        <GlassCard rounded="xl" className="overflow-hidden" enableHover={true}>
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image side */}
            <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
              <img
                src={projects[activeIndex].image || "/placeholder.svg"}
                alt={projects[activeIndex].title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-2xl text-white text-sm font-medium border border-white/10">
                  {projects[activeIndex].category}
                </span>
              </div>
            </div>

            {/* Content side */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-white/3">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-white">
                {projects[activeIndex].title}
              </h3>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">{projects[activeIndex].description}</p>

              <GlassButton variant="primary" className="w-fit">
                <span className="flex items-center gap-2">
                  View Project
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </GlassButton>

              <div className="flex gap-3 mt-12 pt-8 border-t border-white/10">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "w-12 bg-white/60" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`View project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
