"use client"

import type { LucideIcon } from "lucide-react"
import { useState } from "react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-white/20">
        {/* Icon container */}
        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-3 mb-6 transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110 flex items-center justify-center">
          <Icon className="w-full h-full text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-white/60 leading-relaxed">{description}</p>

        {/* Hover effect line */}
        <div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-white/40 to-transparent transition-all duration-500 rounded-b-3xl ${
            isHovered ? "w-full" : "w-0"
          }`}
        />
      </div>
    </div>
  )
}
