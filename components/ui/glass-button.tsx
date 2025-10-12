"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ANIMATIONS, GLASS_STYLES } from "@/lib/design-system"

interface GlassButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary"
  className?: string
  onClick?: () => void
}

export function GlassButton({ children, variant = "primary", className, onClick }: GlassButtonProps) {
  return (
    <motion.button
      whileHover={ANIMATIONS.hover}
      whileTap={ANIMATIONS.tap}
      onClick={onClick}
      className={cn(GLASS_STYLES.button.base, GLASS_STYLES.button[variant], className)}
    >
      {children}
    </motion.button>
  )
}
