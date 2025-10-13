import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

export interface FeatureItem {
  icon: LucideIcon
  title: string
  description: string
}

export interface ProjectItem {
  title: string
  category: string
  description: string
  image: string
}

export interface GlassCardProps {
  children: ReactNode
  className?: string
  enableHover?: boolean
  rounded?: "default" | "large" | "xl"
}

export interface GlassButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary"
  className?: string
  onClick?: () => void
}

export interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export type AnimationVariant = "hover" | "tap"
export type ButtonVariant = "primary" | "secondary"
export type RoundedVariant = "default" | "large" | "xl"
