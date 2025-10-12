/**
 * Carbon Design System Constants
 * Centralized design tokens for consistent styling across the application
 */

// Animation constants
export const ANIMATIONS = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
  cardHover: { scale: 1.02 },
  iconHover: { scale: 1.1 },
} as const

export const DURATIONS = {
  fast: 300,
  normal: 500,
  slow: 700,
} as const

// Glass morphism styles
export const GLASS_STYLES = {
  card: {
    base: "backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-2xl",
    hover: "hover:shadow-white/5 hover:scale-[1.02] hover:border-white/20",
    transition: "transition-all duration-500",
  },
  button: {
    primary: "bg-white text-black hover:bg-white/90 hover:shadow-lg hover:shadow-white/30",
    secondary: "backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20",
    base: "rounded-2xl px-8 py-6 text-lg font-semibold transition-all duration-300",
  },
  iconContainer: {
    base: "rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20",
    hover: "group-hover:bg-white/20 group-hover:scale-110",
    transition: "transition-all duration-500",
  },
} as const

// Border radius values
export const RADIUS = {
  sm: "rounded-xl",
  md: "rounded-2xl",
  lg: "rounded-3xl",
  xl: "rounded-[2rem]",
  "2xl": "rounded-[2.5rem]",
  "3xl": "rounded-[32px]",
} as const

// Spacing values
export const SPACING = {
  section: {
    sm: "py-12 px-6",
    md: "py-16 px-6",
    lg: "py-24 px-6",
    xl: "py-32 px-6",
  },
  card: {
    sm: "p-6",
    md: "p-8",
    lg: "p-12",
    xl: "p-16",
  },
} as const

// Typography
export const TYPOGRAPHY = {
  heading: {
    hero: "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight",
    section: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
    card: "text-xl font-bold",
  },
  body: {
    large: "text-xl md:text-2xl",
    base: "text-base md:text-lg",
    small: "text-sm md:text-base",
  },
  colors: {
    primary: "text-white",
    secondary: "text-white/60",
    muted: "text-white/40",
  },
} as const

// Color opacity values
export const OPACITY = {
  glass: {
    high: "white/20",
    medium: "white/10",
    low: "white/5",
  },
  text: {
    primary: "white",
    secondary: "white/60",
    muted: "white/40",
  },
  border: {
    default: "white/10",
    hover: "white/20",
    active: "white/30",
  },
} as const

// Shadow values
export const SHADOWS = {
  card: "shadow-2xl",
  cardHover: "hover:shadow-white/5",
  button: "hover:shadow-lg hover:shadow-white/30",
} as const
