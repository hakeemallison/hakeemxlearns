"use client"

import { Button } from "@/components/ui/button"
import { Network, Video, FileText, GitBranch, Database, Cloud } from "lucide-react"
import { useState } from "react"

const features = [
  {
    icon: Network,
    title: "Systems Diagrams",
    description:
      "Comprehensive architecture diagrams breaking down complex distributed systems into understandable components.",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description:
      "In-depth video walkthroughs explaining system design patterns, trade-offs, and real-world implementations.",
  },
  {
    icon: FileText,
    title: "Technical Blogs",
    description:
      "Detailed articles covering solutions architecture, design patterns, and best practices from the field.",
  },
  {
    icon: GitBranch,
    title: "Design Patterns",
    description: "Learn proven architectural patterns for scalability, reliability, and maintainability.",
  },
  {
    icon: Database,
    title: "Data Architecture",
    description: "Deep dives into database design, data modeling, and storage solutions for modern applications.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Explore cloud-native architectures, microservices, and distributed system design strategies.",
  },
]

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Learn Through Multiple Formats</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Systems design content tailored for solutions architects and engineers
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
            Browse All Content
          </Button>
        </div>
      </div>
    </section>
  )
}
