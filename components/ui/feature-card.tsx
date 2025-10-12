"use client"
import { useState } from "react"
import { GLASS_STYLES, DURATIONS } from "@/lib/design-system"
import type { FeatureCardProps } from "@/types/components"

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`h-full ${GLASS_STYLES.card.base} rounded-3xl p-8 ${GLASS_STYLES.card.transition} ${GLASS_STYLES.card.hover}`}
      >
        {/* Icon container */}
        <div
          className={`w-14 h-14 ${GLASS_STYLES.iconContainer.base} p-3 mb-6 ${GLASS_STYLES.iconContainer.transition} ${GLASS_STYLES.iconContainer.hover} flex items-center justify-center`}
        >
          <Icon className="w-full h-full text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-white/60 leading-relaxed">{description}</p>

        {/* Hover effect line */}
        <div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-white/40 to-transparent transition-all duration-${DURATIONS.normal} rounded-b-3xl ${
            isHovered ? "w-full" : "w-0"
          }`}
        />
      </div>
    </div>
  )
}
