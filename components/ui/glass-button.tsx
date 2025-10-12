"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ANIMATIONS, GLASS_STYLES } from "@/lib/design-system"
import type { GlassButtonProps } from "@/types/components"

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
