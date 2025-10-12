"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary"
  className?: string
  onClick?: () => void
}

export function GlassButton({ children, variant = "primary", className, onClick }: GlassButtonProps) {
  const baseClasses = "rounded-2xl px-8 py-6 text-lg font-semibold transition-all duration-300"

  const variantClasses = {
    primary: "bg-white text-black hover:bg-white/90 hover:shadow-lg hover:shadow-white/30",
    secondary: "backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20",
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {children}
    </motion.button>
  )
}
