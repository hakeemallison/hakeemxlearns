# Carbon Design System - Color Usage Guide

## Philosophy

This design system uses **white-based opacity** for all application components to create a cohesive glassmorphism aesthetic over the carbon fiber background.

## Rules

### ✅ DO Use White-Based Opacity

\`\`\`tsx
// Text
<h1 className="text-white">Heading</h1>
<p className="text-white/60">Body text</p>
<span className="text-white/40">Muted text</span>

// Backgrounds
<div className="bg-white/10">Glass card</div>
<div className="bg-white/5">Subtle overlay</div>

// Borders
<div className="border border-white/10">Standard border</div>
<div className="border border-white/20 hover:border-white/30">Interactive border</div>
\`\`\`

### ❌ DON'T Use Semantic Tokens in Application Components

\`\`\`tsx
// ❌ Avoid these in application components
<h1 className="text-foreground">Heading</h1>
<p className="text-muted-foreground">Body text</p>
<div className="bg-card">Card</div>
<div className="bg-accent">Accent</div>
\`\`\`

### Exception: shadcn UI Components

The components in `components/ui/` (accordion, button, dialog, etc.) maintain semantic tokens for flexibility. These are third-party library components and should not be modified.

## Using the Design System

### Import Constants

\`\`\`tsx
import { COLORS, TYPOGRAPHY, GLASS_STYLES } from '@/lib/design-system'

// Use in components
<h1 className={COLORS.text.primary}>Heading</h1>
<p className={COLORS.text.secondary}>Description</p>
\`\`\`

### Utility Functions

\`\`\`tsx
import { getGlassCardClasses, getButtonClasses } from '@/lib/design-system'

// Glass card with hover
<div className={getGlassCardClasses()}>Content</div>

// Glass card without hover
<div className={getGlassCardClasses(false)}>Content</div>

// Primary button
<button className={getButtonClasses('primary')}>Click me</button>

// Secondary button
<button className={getButtonClasses('secondary')}>Learn more</button>
\`\`\`

## Color Palette Reference

### Text Colors
- `text-white` - Primary text (100% opacity)
- `text-white/60` - Secondary text (60% opacity)
- `text-white/40` - Muted text (40% opacity)
- `text-white/20` - Disabled text (20% opacity)

### Background Colors
- `bg-white/20` - High prominence glass
- `bg-white/10` - Standard glass cards
- `bg-white/5` - Subtle overlays
- `bg-white` - Solid white (buttons)
- `bg-black` - Solid black

### Border Colors
- `border-white/10` - Default borders
- `border-white/20` - Hover state
- `border-white/30` - Active/focused state
- `border-white/5` - Subtle dividers

### Gradients
- `from-white/10 to-white/5` - Standard glass gradient
- `from-white/5 to-white/10` - Reverse gradient
- `from-white/15 via-white/10 to-white/5` - Radial gradient

## Best Practices

1. **Consistency**: Always use the same opacity values for the same purpose
2. **Hierarchy**: Use opacity to create visual hierarchy (100% → 60% → 40%)
3. **Contrast**: Ensure sufficient contrast for accessibility (minimum 60% for body text)
4. **Hover States**: Increase opacity on hover for interactive elements
5. **Layering**: Use lower opacity for backgrounds, higher for text

## Examples

### Feature Card
\`\`\`tsx
<div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
  <h3 className="text-white">Feature Title</h3>
  <p className="text-white/60">Feature description</p>
</div>
\`\`\`

### Button Group
\`\`\`tsx
<button className="bg-white text-black hover:bg-white/90">
  Primary Action
</button>
<button className="bg-white/10 border border-white/20 text-white hover:bg-white/20">
  Secondary Action
</button>
\`\`\`

### Section Header
\`\`\`tsx
<div>
  <h2 className="text-white text-5xl font-bold">Section Title</h2>
  <p className="text-white/60 text-xl">Section description</p>
</div>
