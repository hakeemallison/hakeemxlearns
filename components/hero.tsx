"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Glass card container */}
        <div
          className="backdrop-blur-xl bg-card border border-border rounded-[2rem] p-12 md:p-16 shadow-2xl transition-all duration-500 hover:shadow-white/10 hover:scale-[1.02]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 transition-all duration-300 hover:bg-white/15 hover:scale-105">
            <BookOpen className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Systems Design & Architecture</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              HakeemxLearns
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
            Master systems design and solutions architecture with Hakeem Allison. Explore comprehensive diagrams, video
            tutorials, and technical insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-2xl px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Content
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-2xl px-8 py-6 text-lg font-semibold backdrop-blur-sm bg-secondary/50 border-border/50 transition-all duration-300 hover:bg-secondary hover:scale-105 hover:border-white/30"
            >
              About Hakeem
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-border/50">
            {[
              { value: "100+", label: "Diagrams" },
              { value: "50+", label: "Videos" },
              { value: "75+", label: "Articles" },
            ].map((stat, index) => (
              <div key={index} className="transition-all duration-300 hover:scale-110">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
