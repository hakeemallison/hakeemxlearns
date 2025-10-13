/**
 * Carbon Design System Constants
 * Centralized design tokens for consistent styling across the application
 *
 * COLOR SYSTEM PHILOSOPHY:
 * This design system uses white-based opacity for all application components
 * to create a cohesive glassmorphism aesthetic over the carbon fiber background.
 *
 * DO: Use COLORS constants from this file
 * DON'T: Use hardcoded values like text-white/60, bg-white/10
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
 * All application components MUST use these constants - NO HARDCODED VALUES.
 */
export const COLORS = {
  // Text colors
  text: {
    primary: "text-white", // Main headings, important text
    secondary: "text-white/60", // Body text, descriptions
    muted: "text-white/40", // Subtle text, placeholders
    disabled: "text-white/20", // Disabled state
  },

  // Background colors - ULTRA TRANSPARENT for dramatic glassmorphism
  background: {
    glass: {
      high: "bg-white/5", // Prominent glass elements (was 8)
      medium: "bg-white/3", // Standard glass cards (was 5)
      low: "bg-white/2", // Subtle glass overlays (was 3)
    },
    solid: {
      white: "bg-white", // Primary buttons
      black: "bg-black", // Dark elements
    },
    decorative: {
      orb: "bg-white/2", // Floating decorative orbs
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
    glass: "from-white/5 to-white/2", // Ultra transparent gradient
    glassReverse: "from-white/2 to-white/5",
    glassRadial: "from-white/8 via-white/4 to-white/2",
  },

  // Hover states
  hover: {
    glass: "hover:bg-white/8", // Glass element hover
    border: "hover:border-white/20", // Border hover
    indicator: "hover:bg-white/40", // Indicator hover (showcase dots)
  },

  // Active/Selected states
  active: {
    indicator: "bg-white/60", // Active indicator (showcase dots)
  },
} as const

// ============================================================================
// GLASS MORPHISM STYLES
// ============================================================================

export const GLASS_STYLES = {
  card: {
    base: "backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10 shadow-2xl",
    hover: "hover:shadow-white/5 hover:scale-[1.02] hover:border-white/20",
    transition: "transition-all duration-500",
  },
  button: {
    primary: "bg-white text-black hover:bg-white/90 hover:shadow-lg hover:shadow-white/30",
    secondary: "backdrop-blur-lg bg-white/5 border border-white/20 text-white hover:bg-white/8",
    base: "rounded-2xl px-8 py-6 text-lg font-semibold transition-all duration-300",
  },
  iconContainer: {
    base: "rounded-2xl bg-white/5 backdrop-blur-lg border border-white/20",
    hover: "group-hover:bg-white/8 group-hover:scale-110",
    transition: "transition-all duration-500",
  },
  badge: {
    base: "backdrop-blur-lg bg-white/3 border border-white/10",
    hover: "hover:bg-white/5 hover:scale-105",
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

/**
 * Get complete badge classes
 * @param withHover - Include hover effects (default: true)
 */
export const getBadgeClasses = (withHover = true) => {
  return combineStyles(GLASS_STYLES.badge.base, withHover ? GLASS_STYLES.badge.hover : "")
}
