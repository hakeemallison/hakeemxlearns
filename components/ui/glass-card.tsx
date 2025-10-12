"use client"
import { type ReactNode, useState } from "react"
import { cn } from "@/lib/utils"
import { GLASS_STYLES } from "@/lib/design-system"

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
        GLASS_STYLES.card.base,
        roundedClasses[rounded],
        enableHover && `${GLASS_STYLES.card.transition} ${GLASS_STYLES.card.hover}`,
        className,
      )}
      onMouseEnter={() => enableHover && setIsHovered(true)}
      onMouseLeave={() => enableHover && setIsHovered(false)}
    >
      {children}
    </div>
  )
}
