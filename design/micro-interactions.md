# Micro-Interactions Design System
## HakeemxLearns

This document outlines all micro-interactions used throughout the HakeemxLearns platform to maintain consistency and enhance user experience.

---

## 1. Card Hover Effects

### Glass Card Hover
**Where Used:** Feature cards, content cards, showcase items

**Effect:**
- Subtle scale up (1.02x)
- Enhanced white glow shadow
- Increased border brightness
- Smooth 300ms transition

**Implementation:**
\`\`\`css
.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}
\`\`\`

**Classes:**
- Base: `transition-all duration-300`
- Hover: `hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]`

---

## 2. Icon Container Interactions

### Icon Background Glow
**Where Used:** Feature icons, navigation icons, action buttons

**Effect:**
- Background lightens from gray-800 to gray-700
- White glow appears around container
- Icon remains stable (no scale)
- 300ms smooth transition

**Implementation:**
\`\`\`css
.icon-container {
  background: rgba(31, 41, 55, 0.5);
  transition: all 0.3s ease;
}

.icon-container:hover {
  background: rgba(55, 65, 81, 0.6);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}
\`\`\`

**Classes:**
- Base: `bg-gray-800/50 transition-all duration-300`
- Hover: `hover:bg-gray-700/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]`

---

## 3. Button Interactions

### Primary Button (White)
**Where Used:** CTA buttons, primary actions

**Effect:**
- Slight scale up (1.05x)
- Enhanced white glow shadow
- Background remains solid white
- Text remains black
- 200ms quick transition

**Implementation:**
\`\`\`css
.button-primary {
  transition: all 0.2s ease;
}

.button-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}
\`\`\`

**Classes:**
- Base: `bg-white text-black transition-all duration-200`
- Hover: `hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]`

---

### Secondary Button (Outlined)
**Where Used:** Secondary actions, "Learn More" buttons

**Effect:**
- Slight scale up (1.05x)
- Border brightens
- White glow appears
- Background remains transparent
- 200ms quick transition

**Implementation:**
\`\`\`css
.button-secondary {
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease;
}

.button-secondary:hover {
  transform: scale(1.05);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
}
\`\`\`

**Classes:**
- Base: `border border-white/20 transition-all duration-200`
- Hover: `hover:scale-105 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]`

---

## 4. Navigation Interactions

### Nav Link Hover
**Where Used:** Header navigation links

**Effect:**
- Text color brightens from gray-300 to white
- Smooth 200ms transition
- No scale or shadow

**Implementation:**
\`\`\`css
.nav-link {
  color: rgb(209, 213, 219);
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: rgb(255, 255, 255);
}
\`\`\`

**Classes:**
- Base: `text-gray-300 transition-colors duration-200`
- Hover: `hover:text-white`

---

## 5. Image/Media Interactions

### Showcase Image Hover
**Where Used:** Project showcases, featured content, media galleries

**Effect:**
- Subtle scale up (1.05x)
- Enhanced brightness filter
- Smooth 300ms transition
- Container maintains overflow hidden

**Implementation:**
\`\`\`css
.showcase-image {
  transition: transform 0.3s ease;
}

.showcase-image:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
}
\`\`\`

**Classes:**
- Container: `overflow-hidden rounded-2xl`
- Image: `transition-transform duration-300 hover:scale-105 hover:brightness-110`

---

## 6. Page Load Animations

### Fade In
**Where Used:** Hero sections, main content areas

**Effect:**
- Opacity animates from 0 to 1
- 600ms duration
- Ease-out timing

**Implementation:**
\`\`\`css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}
\`\`\`

**Classes:**
- `animate-fade-in`

---

### Scale In
**Where Used:** Cards, feature sections on load

**Effect:**
- Scale from 0.95 to 1
- Opacity from 0 to 1
- 500ms duration
- Ease-out timing

**Implementation:**
\`\`\`css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.scale-in {
  animation: scaleIn 0.5s ease-out;
}
\`\`\`

**Classes:**
- `animate-scale-in`

---

## 7. Glass Morphism Effects

### Glass Effect
**Where Used:** All cards, modals, overlays

**Effect:**
- Semi-transparent dark background
- Backdrop blur (12px)
- Subtle white border
- Creates depth and layering

**Implementation:**
\`\`\`css
.glass {
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
\`\`\`

**Classes:**
- `glass-effect` (utility class)
- Or: `bg-gray-900/70 backdrop-blur-xl border border-white/10`

---

## Design Principles

### Timing Guidelines
- **Quick interactions** (buttons, links): 200ms
- **Medium interactions** (cards, containers): 300ms
- **Slow interactions** (page loads, major transitions): 500-600ms

### Easing Functions
- **Default**: `ease` - balanced acceleration/deceleration
- **Hover effects**: `ease` - smooth and natural
- **Page loads**: `ease-out` - quick start, smooth finish

### Scale Guidelines
- **Subtle hover**: 1.02x (cards, large elements)
- **Prominent hover**: 1.05x (buttons, small elements)
- **Never exceed**: 1.1x (maintains visual stability)

### Glow Intensity
- **Subtle**: `rgba(255, 255, 255, 0.1)` - ambient glow
- **Medium**: `rgba(255, 255, 255, 0.15)` - card hover
- **Strong**: `rgba(255, 255, 255, 0.3)` - button hover

### Color Transitions
- Always transition between shades of the same color family
- Monochromatic palette: grays and whites only
- Brightness changes should be subtle (1-2 shade steps)

---

## Accessibility Considerations

1. **Reduced Motion**: All animations respect `prefers-reduced-motion`
2. **Focus States**: All interactive elements have visible focus indicators
3. **Contrast**: All hover states maintain WCAG AA contrast ratios
4. **Touch Targets**: Minimum 44x44px for all interactive elements

---

## Usage Examples

### Feature Card Component
\`\`\`tsx
<div className="glass-effect rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:border-white/30">
  <div className="w-16 h-16 rounded-2xl bg-gray-800/50 flex items-center justify-center mb-6 transition-all duration-300 hover:bg-gray-700/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
    <Icon className="w-8 h-8 text-white" />
  </div>
  <h3 className="text-xl font-semibold mb-3">Feature Title</h3>
  <p className="text-gray-400">Feature description</p>
</div>
\`\`\`

### Primary Button
\`\`\`tsx
<button className="px-8 py-3 bg-white text-black rounded-full font-medium transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
  Get Started
</button>
\`\`\`

### Secondary Button
\`\`\`tsx
<button className="px-8 py-3 border border-white/20 text-white rounded-full font-medium transition-all duration-200 hover:scale-105 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
  Learn More
</button>
\`\`\`

---

## Maintenance Notes

- All micro-interactions use design tokens from `globals.css`
- Update this document when adding new interaction patterns
- Test all interactions on mobile devices for touch compatibility
- Ensure consistency across all new components
