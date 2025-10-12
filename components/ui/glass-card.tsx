"use client"
import { type ReactNode, useState } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
  enableHover?: boolean
  rounded?: "default" | "large" | "xl"
}

export function GlassCard({ children, className, enableHover = true, rounded = "default" }: GlassCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const roundedClasses = {
    default: "rounded-[2rem]",
    large: "rounded-[2.5rem]",
    xl: "rounded-[32px]",
  }

  return (
    <div
      className={cn(
        "backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-2xl",
        roundedClasses[rounded],
        enableHover && "transition-all duration-500 hover:shadow-white/5 hover:scale-[1.02] hover:border-white/20",
        className,
      )}
      onMouseEnter={() => enableHover && setIsHovered(true)}
      onMouseLeave={() => enableHover && setIsHovered(false)}
    >
      {children}
    </div>
  )
}
