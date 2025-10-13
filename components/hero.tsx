"use client"

import { ArrowRight, BookOpen } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { COLORS, getBadgeClasses } from "@/lib/design-system"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div
        className={`absolute top-20 left-10 w-64 h-64 ${COLORS.background.decorative.orb} rounded-full blur-3xl animate-float`}
      />
      <div
        className={`absolute bottom-20 right-10 w-96 h-96 ${COLORS.background.decorative.orb} rounded-full blur-3xl animate-float`}
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <GlassCard className="p-12 md:p-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${getBadgeClasses()} mb-8 transition-all duration-300`}
          >
            <BookOpen className={`w-4 h-4 ${COLORS.text.primary}`} />
            <span className={`text-sm font-medium ${COLORS.text.primary}`}>Systems Design & Architecture</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              HakeemxLearns
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl ${COLORS.text.secondary} mb-12 max-w-3xl mx-auto text-balance leading-relaxed`}
          >
            Master systems design and solutions architecture with Hakeem Allison. Explore comprehensive diagrams, video
            tutorials, and technical insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GlassButton variant="primary">
              <span className="flex items-center gap-2">
                Explore Content
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </GlassButton>

            <GlassButton variant="secondary">About Hakeem</GlassButton>
          </div>

          <div className={`grid grid-cols-3 gap-8 mt-16 pt-12 border-t ${COLORS.border.default}`}>
            {[
              { value: "100+", label: "Diagrams" },
              { value: "50+", label: "Videos" },
              { value: "75+", label: "Articles" },
            ].map((stat, index) => (
              <div key={index} className="transition-all duration-300 hover:scale-110">
                <div className={`text-3xl md:text-4xl font-bold ${COLORS.text.primary} mb-2`}>{stat.value}</div>
                <div className={`text-sm ${COLORS.text.secondary}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
