# Carbon Black Glassmorphism Design System

## Overview

This is a complete extraction of the **hakeemxlearns** design system featuring a **carbon black theme with ultra-transparent glassmorphism effects**.

The design system is built on:
- **Framework**: Next.js 15+ with App Router
- **Styling**: Tailwind CSS 4 + CSS Variables for semantic tokens
- **Components**: React (custom + shadcn/ui compatible)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

---

## 1. Color System

### 1.1 Philosophy

The color system uses **white-based opacity over a carbon fiber background** to create a cohesive glassmorphism aesthetic. All application components use opacity values from this system—**NO hardcoded colors like `text-white/60` or `bg-white/10`**.

### 1.2 Color Tokens

#### Text Colors
```typescript
text: {
  primary: "text-white",           // Main headings, important text
  secondary: "text-white/60",      // Body text, descriptions
  muted: "text-white/40",          // Subtle text, placeholders
  disabled: "text-white/20",       // Disabled state
}
```

#### Background Colors - Ultra Transparent for Glassmorphism
```typescript
background: {
  glass: {
    high: "bg-white/5",           // Prominent glass elements
    medium: "bg-white/3",         // Standard glass cards
    low: "bg-white/2",            // Subtle glass overlays
  },
  solid: {
    white: "bg-white",            // Primary buttons
    black: "bg-black",            // Dark elements
  },
  decorative: {
    orb: "bg-white/2",            // Floating decorative orbs
  },
}
```

#### Border Colors
```typescript
border: {
  default: "border-white/10",    // Standard borders
  hover: "border-white/20",      // Hover state borders
  active: "border-white/30",     // Active/focused borders
  subtle: "border-white/5",      // Very subtle dividers
}
```

#### Gradients
```typescript
gradient: {
  glass: "from-white/5 to-white/2",           // Ultra transparent gradient
  glassReverse: "from-white/2 to-white/5",
  glassRadial: "from-white/8 via-white/4 to-white/2",
}
```

#### Interactive States
```typescript
hover: {
  glass: "hover:bg-white/8",      // Glass element hover
  border: "hover:border-white/20", // Border hover
  indicator: "hover:bg-white/40",  // Indicator hover
}

active: {
  indicator: "bg-white/60",       // Active indicator
}
```

### 1.3 CSS Custom Properties (in globals.css)

The project also maintains shadcn/ui semantic tokens for flexibility with UI components:

**Light Mode:**
```css
--background: #ffffff;
--foreground: #030213;
--primary: #030213;
--secondary: oklch(0.95 0.0058 264.53);
--accent: #e9ebef;
--destructive: #d4183d;
--border: rgba(0, 0, 0, 0.1);
```

**Dark Mode:**
```css
--background: #0a0a0a;
--foreground: #ffffff;
--primary: #ffffff;
--secondary: #1a1a2e;
--accent: #2a2a3e;
--destructive: oklch(0.396 0.141 25.723);
--border: #333333;
```

---

## 2. Typography System

### 2.1 Font Stack

- **Font Family**: Geist Sans (body), Geist Mono (code)
- **Font Weights**: `400` (normal), `500` (medium), `700` (bold)
- **Base Font Size**: `16px`

### 2.2 Typography Scales

```typescript
TYPOGRAPHY = {
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
}
```

### 2.3 Line Heights

- **Body Text**: `line-height: 1.5` (use `leading-relaxed` or `leading-6`)
- **Headings**: `line-height: 1.5`

### 2.4 Text Balance

Use `text-balance` and `text-pretty` Tailwind classes for optimal line breaks on titles and important copy.

---

## 3. Spacing System

### 3.1 Section Spacing

```typescript
SPACING = {
  section: {
    sm: "py-12 px-6",      // Small sections (e.g., testimonials)
    md: "py-16 px-6",      // Medium sections (default)
    lg: "py-24 px-6",      // Large sections (hero, features)
    xl: "py-32 px-6",      // Extra large sections (landing hero)
  },
  card: {
    sm: "p-6",             // Small cards
    md: "p-8",             // Standard cards
    lg: "p-12",            // Large cards
    xl: "p-16",            // Extra large cards
  },
}
```

### 3.2 Spacing Philosophy

- Use **Tailwind spacing scale** (p-4, mx-2, py-6) instead of arbitrary values
- Use **gap classes** for spacing between flex/grid items: `gap-4`, `gap-x-2`, `gap-y-6`
- **Never mix** margin/padding with gap classes on the same element

---

## 4. Border Radius System

```typescript
RADIUS = {
  sm: "rounded-xl",          // 12px
  md: "rounded-2xl",         // 16px
  lg: "rounded-3xl",         // 24px
  xl: "rounded-[2rem]",      // 32px
  "2xl": "rounded-[2.5rem]", // 40px
  "3xl": "rounded-[32px]",   // 32px
}
```

---

## 5. Shadow System

All shadows use subtle white shadows to complement the glass aesthetic:

```typescript
SHADOWS = {
  card: "shadow-2xl",
  cardHover: "hover:shadow-white/5",
  button: "hover:shadow-lg hover:shadow-white/30",
}
```

**Glass Card Shadows**: `shadow-2xl` (default Tailwind shadow with white tint)

---

## 6. Animation System

### 6.1 Animation Constants

```typescript
ANIMATIONS = {
  hover: { scale: 1.05 },      // 5% scale on hover
  tap: { scale: 0.95 },        // 5% scale on tap
  cardHover: { scale: 1.01 },  // 1% scale for cards (subtle)
  iconHover: { scale: 1.1 },   // 10% scale for icons
}
```

### 6.2 Animation Durations

```typescript
DURATIONS = {
  fast: 300,      // Quick interactions (300ms)
  normal: 500,    // Standard transitions (500ms)
  slow: 700,      // Slow animations (700ms)
}
```

### 6.3 Animation Library

- **Primary**: Framer Motion (`motion` components)
- **Utilities**: Tailwind CSS transitions (`transition-all duration-300`)

---

## 7. Component Library

### 7.1 Glass Card Component

**File**: `/components/ui/glass-card.tsx`

**Usage**:
```tsx
import { GlassCard } from "@/components/ui/glass-card"

<GlassCard enableHover={true} rounded="default">
  <div className="p-6">
    {/* Content */}
  </div>
</GlassCard>
```

**Props**:
- `children: ReactNode` - Card content
- `className?: string` - Additional classes
- `enableHover?: boolean` - Enable hover effects (default: true)
- `rounded?: "default" | "large" | "xl"` - Border radius variant

**Styling**:
```css
backdrop-blur-[20px]
bg-gradient-to-br from-white/5 to-white/2
border border-white/10
shadow-2xl
rounded-[2rem]
```

### 7.2 Glass Button Component

**File**: `/components/ui/glass-button.tsx`

**Usage**:
```tsx
import { GlassButton } from "@/components/ui/glass-button"

<GlassButton variant="primary" onClick={handleClick}>
  Click Me
</GlassButton>
```

**Props**:
- `children: ReactNode` - Button text
- `variant?: "primary" | "secondary"` - Button style (default: primary)
- `className?: string` - Additional classes
- `onClick?: () => void` - Click handler

**Variants**:

**Primary Button**:
```css
bg-white
text-black
hover:bg-white/90
hover:shadow-lg hover:shadow-white/30
rounded-2xl px-8 py-6 text-lg font-semibold
```

**Secondary Button**:
```css
backdrop-blur-[20px]
bg-white/5
border border-white/20
text-white
hover:bg-white/8
rounded-2xl px-8 py-6 text-lg font-semibold
```

### 7.3 Feature Card Component

**File**: `/components/ui/feature-card.tsx`

**Usage**:
```tsx
import { FeatureCard } from "@/components/ui/feature-card"
import { FeatureIcon } from "lucide-react"

<FeatureCard 
  icon={FeatureIcon}
  title="Feature Title"
  description="Feature description"
/>
```

**Props**:
- `icon: LucideIcon` - Lucide React icon component
- `title: string` - Feature title
- `description: string` - Feature description

**Features**:
- Icon container with glass effect
- Hover state with bottom line animation
- Responsive scaling

### 7.4 Section Header Component

**File**: `/components/ui/section-header.tsx`

**Usage**:
```tsx
import { SectionHeader } from "@/components/ui/section-header"

<SectionHeader 
  title="Section Title"
  subtitle="Optional subtitle"
/>
```

**Props**:
- `title: string` - Section title
- `subtitle?: string` - Optional subtitle
- `className?: string` - Additional classes

---

## 8. Background Treatment

### 8.1 Carbon Fiber Texture

The body background creates a subtle carbon fiber effect with a grid pattern:

```css
background-color: #0a0a0a;
background-image: 
  repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(255, 255, 255, 0.03) 2px,
    rgba(255, 255, 255, 0.03) 4px
  ),
  repeating-linear-gradient(
    90deg,
    transparent,
    transparent 2px,
    rgba(255, 255, 255, 0.03) 2px,
    rgba(255, 255, 255, 0.03) 4px
  ),
  linear-gradient(180deg, #0a0a0a 0%, #151515 50%, #0a0a0a 100%);
background-attachment: fixed;
```

This creates:
- Dark carbon black base (#0a0a0a)
- Subtle horizontal/vertical grid lines
- Slight vertical gradient variation
- Fixed background (doesn't scroll with content)

---

## 9. Dependencies

### Core Framework & Styling
```json
{
  "next": "15.2.4",
  "react": "^19",
  "react-dom": "^19",
  "tailwindcss": "^4.1.9",
  "postcss": "^8.5"
}
```

### Design & Animation
```json
{
  "framer-motion": "latest",
  "geist": "latest",
  "lucide-react": "^0.454.0"
}
```

### UI & Form
```json
{
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.5.5",
  "react-hook-form": "^7.60.0"
}
```

### Component Library (shadcn/ui compatible)
All `@radix-ui` components + `cmdk`, `sonner`, `recharts`, etc.

---

## 10. Replication Checklist

To replicate this design system in a new project:

### Step 1: Project Setup
- [ ] Initialize Next.js 15+ project with App Router
- [ ] Install Tailwind CSS 4+
- [ ] Install dependencies from package.json

### Step 2: Configuration
- [ ] Copy `tailwind.config.js` settings
- [ ] Copy font configuration from `layout.tsx` (Geist Sans/Mono)
- [ ] Update `tsconfig.json` with path aliases (`@/` → src)

### Step 3: Global Styles
- [ ] Copy `app/globals.css` with:
  - CSS custom properties (dark/light themes)
  - Carbon fiber background texture
  - Typography defaults

### Step 4: Design Tokens
- [ ] Create `lib/design-system.ts` with all constants:
  - COLORS, ANIMATIONS, DURATIONS, GLASS_STYLES, RADIUS, SPACING, TYPOGRAPHY, SHADOWS
  - Helper functions (combineStyles, getGlassCardClasses, etc.)

### Step 5: Utilities
- [ ] Copy `lib/utils.ts` (cn() function for class merging)
- [ ] Copy `types/components.ts` (TypeScript interfaces)

### Step 6: Components
- [ ] Copy all components from `components/ui/`:
  - `glass-card.tsx`
  - `glass-button.tsx`
  - `feature-card.tsx`
  - `section-header.tsx`
- [ ] Update import paths as needed

### Step 7: Verification
- [ ] Test all components render correctly
- [ ] Verify hover animations work
- [ ] Check responsive behavior on mobile/tablet/desktop
- [ ] Verify dark mode toggle (if applicable)

---

## 11. Best Practices

### DO
✅ Use COLORS constants from `lib/design-system.ts`
✅ Use Tailwind spacing scale (p-4, gap-4) instead of arbitrary values
✅ Apply hover/active states using motion components
✅ Use semantic text classes (text-white/60, not hardcoded opacity)
✅ Keep components small and composable
✅ Test mobile responsiveness

### DON'T
❌ Hardcode color values like bg-white/10 or text-white/60
❌ Use arbitrary Tailwind values [16px] when scale exists
❌ Mix margin and gap classes on the same element
❌ Forget to add alt text to images
❌ Use decorative images without GenerateImage
❌ Apply hover animations without transition classes

---

## 12. File Structure

```
project-root/
├── app/
│   ├── globals.css           # Global styles + CSS variables
│   ├── layout.tsx            # Root layout with fonts
│   └── page.tsx              # Home page
├── components/
│   ├── ui/
│   │   ├── glass-card.tsx     # Glass card component
│   │   ├── glass-button.tsx   # Glass button component
│   │   ├── feature-card.tsx   # Feature card component
│   │   └── section-header.tsx # Section header component
│   ├── hero.tsx              # Hero section
│   ├── features.tsx          # Features section
│   ├── showcase.tsx          # Showcase section
│   ├── cta.tsx               # Call-to-action section
│   └── theme-provider.tsx    # Theme provider wrapper
├── lib/
│   ├── design-system.ts      # Design tokens & constants
│   └── utils.ts              # Utility functions (cn)
├── types/
│   └── components.ts         # TypeScript interfaces
├── styles/
│   └── globals.css           # Additional styles
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

---

## 13. Component Usage Examples

### Example 1: Hero Section with Glass Cards

```tsx
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"
import { SPACING } from "@/lib/design-system"

export function HeroSection() {
  return (
    <section className={SPACING.section.xl}>
      <SectionHeader 
        title="Welcome to My Site"
        subtitle="Explore amazing content"
      />
      <GlassCard className="p-12">
        <p className="text-white/60">Your content here</p>
      </GlassCard>
    </section>
  )
}
```

### Example 2: Feature Cards Grid

```tsx
import { FeatureCard } from "@/components/ui/feature-card"
import { Database, Zap, Shield } from "lucide-react"

const features = [
  { icon: Database, title: "Data", description: "Secure data storage" },
  { icon: Zap, title: "Speed", description: "Lightning fast" },
  { icon: Shield, title: "Security", description: "Bank-level security" },
]

export function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  )
}
```

### Example 3: CTA Section with Buttons

```tsx
import { GlassButton } from "@/components/ui/glass-button"
import { SPACING } from "@/lib/design-system"

export function CTASection() {
  return (
    <section className={`${SPACING.section.lg} text-center`}>
      <h2 className="text-4xl font-bold text-white mb-8">Ready to get started?</h2>
      <div className="flex gap-4 justify-center">
        <GlassButton variant="primary">Get Started</GlassButton>
        <GlassButton variant="secondary">Learn More</GlassButton>
      </div>
    </section>
  )
}
```

---

## 14. Theme Toggle (Optional)

This project uses `next-themes` for light/dark mode support:

```tsx
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

---

## 15. Accessibility & Performance

### Accessibility
- Use semantic HTML (main, header, nav, section)
- Add ARIA labels and roles
- Ensure text contrast meets WCAG standards
- Use screen reader-only text with sr-only class

### Performance
- Use Next.js Image component for images
- Implement lazy loading for off-screen content
- Minimize animations on mobile devices
- Use CSS variables for theme switching (no JS re-renders)

---

## 16. Quick Reference

### Common Class Combinations

**Premium Glass Card**:
```tsx
className="backdrop-blur-[20px] bg-gradient-to-br from-white/5 to-white/2 border border-white/10 shadow-2xl rounded-[2rem] p-8 transition-all duration-500 hover:shadow-white/5 hover:scale-[1.01] hover:border-white/20"
```

**Primary Button**:
```tsx
className="bg-white text-black hover:bg-white/90 hover:shadow-lg hover:shadow-white/30 rounded-2xl px-8 py-6 text-lg font-semibold transition-all duration-300"
```

**Section Padding**:
```tsx
className="py-24 px-6" // lg section spacing
```

**Text Hierarchy**:
```tsx
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">Hero</h1>
<p className="text-base md:text-lg text-white/60">Description</p>
```

---

## 17. Troubleshooting

### Styles Not Applying?
1. Check that Tailwind CSS 4 is installed
2. Verify `globals.css` has `@import "tailwindcss"`
3. Ensure tailwind.config.js includes correct content paths
4. Clear `.next` build folder and rebuild

### Components Not Working?
1. Verify import paths (use `@/` aliases)
2. Check that `lib/utils.ts` and `lib/design-system.ts` exist
3. Install all dependencies: `npm install`
4. Check console for TypeScript errors

### Animations Jerky?
1. Use `transform-gpu` class for hardware acceleration
2. Reduce animation duration for mobile
3. Check browser DevTools Performance tab
4. Ensure Framer Motion is installed

---

## 18. Version Information

- **Next.js**: 15.2.4
- **React**: 19
- **Tailwind CSS**: 4.1.9
- **TypeScript**: 5+
- **Node**: 18+

---

## 19. Additional Resources

- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide React Icons](https://lucide.dev)
- [Next.js Docs](https://nextjs.org/docs)
- [Radix UI](https://www.radix-ui.com/)

---

**Last Updated**: June 2026
**Design System**: Carbon Black Glassmorphism v1.0
