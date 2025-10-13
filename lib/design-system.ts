/**
 * Carbon Design System Constants
 * Centralized design tokens for consistent styling across the application
 *
 * COLOR SYSTEM PHILOSOPHY:
 * This design system uses white-based opacity for all application components
 * to create a cohesive glassmorphism aesthetic over the carbon fiber background.
 *
 * DO: Use text-white, text-white/60, bg-white/10, border-white/20
 * DON'T: Use semantic tokens like text-foreground, text-muted-foreground
 *
 * Exception: shadcn UI components in components/ui/ maintain semantic tokens
 * for flexibility, but application components should use white-based opacity.
 */

// ============================================================================
// ANIMATION CONSTANTS
// ============================================================================

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

// ============================================================================
// COLOR SYSTEM - White-based Opacity
// ============================================================================

/**
 * Standardized color opacity values for the glassmorphism design system.
 * All application components should use these white-based opacity values.
 */
export const COLORS = {
  // Text colors
  text: {
    primary: "text-white", // Main headings, important text
    secondary: "text-white/60", // Body text, descriptions
    muted: "text-white/40", // Subtle text, placeholders
    disabled: "text-white/20", // Disabled state
  },

  // Background colors
  background: {
    glass: {
      high: "bg-white/8", // Prominent glass elements
      medium: "bg-white/5", // Standard glass cards
      low: "bg-white/3", // Subtle glass overlays
    },
    solid: {
      white: "bg-white", // Primary buttons
      black: "bg-black", // Dark elements
    },
  },

  // Border colors
  border: {
    default: "border-white/10", // Standard borders
    hover: "border-white/20", // Hover state borders
    active: "border-white/30", // Active/focused borders
    subtle: "border-white/5", // Very subtle dividers
  },

  // Gradient colors (for glass effects)
  gradient: {
    glass: "from-white/8 to-white/3",
    glassReverse: "from-white/3 to-white/8",
    glassRadial: "from-white/10 via-white/6 to-white/3",
  },
} as const

// ============================================================================
// GLASS MORPHISM STYLES
// ============================================================================

export const GLASS_STYLES = {
  card: {
    base: "backdrop-blur-2xl bg-gradient-to-br from-white/8 to-white/3 border border-white/10 shadow-2xl",
    hover: "hover:shadow-white/5 hover:scale-[1.02] hover:border-white/20",
    transition: "transition-all duration-500",
  },
  button: {
    primary: "bg-white text-black hover:bg-white/90 hover:shadow-lg hover:shadow-white/30",
    secondary: "backdrop-blur-2xl bg-white/8 border border-white/20 text-white hover:bg-white/15",
    base: "rounded-2xl px-8 py-6 text-lg font-semibold transition-all duration-300",
  },
  iconContainer: {
    base: "rounded-2xl bg-white/8 backdrop-blur-2xl border border-white/20",
    hover: "group-hover:bg-white/15 group-hover:scale-110",
    transition: "transition-all duration-500",
  },
} as const

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const RADIUS = {
  sm: "rounded-xl",
  md: "rounded-2xl",
  lg: "rounded-3xl",
  xl: "rounded-[2rem]",
  "2xl": "rounded-[2.5rem]",
  "3xl": "rounded-[32px]",
} as const

// ============================================================================
// SPACING
// ============================================================================

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

// ============================================================================
// TYPOGRAPHY
// ============================================================================

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
} as const

// ============================================================================
// SHADOWS
// ============================================================================

export const SHADOWS = {
  card: "shadow-2xl",
  cardHover: "hover:shadow-white/5",
  button: "hover:shadow-lg hover:shadow-white/30",
} as const

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Helper function to combine multiple design system classes
 * @example cn(COLORS.text.primary, TYPOGRAPHY.heading.hero)
 */
export const combineStyles = (...styles: string[]) => styles.join(" ")

/**
 * Get complete glass card classes
 * @param withHover - Include hover effects (default: true)
 */
export const getGlassCardClasses = (withHover = true) => {
  return combineStyles(GLASS_STYLES.card.base, GLASS_STYLES.card.transition, withHover ? GLASS_STYLES.card.hover : "")
}

/**
 * Get complete button classes
 * @param variant - 'primary' or 'secondary'
 */
export const getButtonClasses = (variant: "primary" | "secondary" = "primary") => {
  return combineStyles(GLASS_STYLES.button.base, GLASS_STYLES.button[variant])
}
