# Premium Design System - Dr. Abel Health Consulting

## 🎨 Color Palette

### Primary Colors
- **Primary**: `#6366F1` (Indigo 500) - Trust, professionalism, healthcare
- **Primary Dark**: `#4F46E5` (Indigo 600) - Depth, emphasis
- **Primary Light**: `#818CF8` (Indigo 400) - Hover states, accents

### Secondary Colors
- **Secondary**: `#10B981` (Emerald 500) - Health, growth, success
- **Accent**: `#F59E0B` (Amber 500) - Attention, highlights

### Neutral Palette
- **Background**: `#FFFFFF` (Pure White)
- **Surface**: `#F9FAFB` (Gray 50)
- **Muted**: `#F3F4F6` (Gray 100)
- **Border**: `#E5E7EB` (Gray 200)
- **Text Primary**: `#111827` (Gray 900)
- **Text Secondary**: `#6B7280` (Gray 500)
- **Text Muted**: `#9CA3AF` (Gray 400)

### Semantic Colors
- **Success**: `#10B981` (Emerald 500)
- **Warning**: `#F59E0B` (Amber 500)
- **Error**: `#EF4444` (Red 500)
- **Info**: `#3B82F6` (Blue 500)

## 📝 Typography

### Font Stack
- **Headings**: `Inter` (Bold 700, SemiBold 600)
- **Body**: `Inter` (Regular 400, Medium 500)
- **Display**: `Poppins` (Bold 700) - For hero sections

### Type Scale
- **H1**: 3.5rem (56px) / 1.1 line-height / 700 weight
- **H2**: 2.5rem (40px) / 1.2 line-height / 700 weight
- **H3**: 2rem (32px) / 1.3 line-height / 600 weight
- **H4**: 1.5rem (24px) / 1.4 line-height / 600 weight
- **Body Large**: 1.125rem (18px) / 1.6 line-height / 400 weight
- **Body**: 1rem (16px) / 1.6 line-height / 400 weight
- **Small**: 0.875rem (14px) / 1.5 line-height / 400 weight

## 📐 Spacing System

Based on 4px grid:
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px
- **4xl**: 96px

## 🎭 Component Design Principles

### Cards
- **Border Radius**: 16px (lg)
- **Shadow**: `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)`
- **Hover Shadow**: `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`
- **Padding**: 24px
- **Border**: 1px solid `#E5E7EB`

### Buttons
- **Primary**: Indigo background, white text, 12px padding, 8px radius
- **Secondary**: White background, indigo border, indigo text
- **Ghost**: Transparent, indigo text on hover
- **Hover**: Scale 1.02, shadow elevation

### Inputs
- **Height**: 48px
- **Border**: 1px solid `#D1D5DB`
- **Border Radius**: 8px
- **Focus**: 2px solid indigo, ring offset
- **Padding**: 12px 16px

## ✨ Animation & Interaction

### Timing Functions
- **Ease Out**: `cubic-bezier(0.16, 1, 0.3, 1)`
- **Ease In Out**: `cubic-bezier(0.4, 0, 0.2, 1)`

### Durations
- **Fast**: 150ms (micro-interactions)
- **Normal**: 300ms (standard transitions)
- **Slow**: 500ms (page transitions)

### Hover Effects
- **Cards**: Translate Y -4px, shadow elevation
- **Buttons**: Scale 1.02, background darken 5%
- **Links**: Color transition, underline on hover

## 🎯 Layout Principles

### Grid System
- **Container Max Width**: 1280px
- **Gutter**: 24px (mobile), 32px (desktop)
- **Columns**: 12-column grid

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Content Widths
- **Narrow**: 640px (text content)
- **Medium**: 768px (forms, cards)
- **Wide**: 1024px (grids, layouts)
- **Full**: 1280px (hero sections)

## 🚀 Performance Optimizations

1. **Lazy Loading**: Images below fold
2. **CSS Variables**: For theming
3. **Minimal Animations**: GPU-accelerated only
4. **Font Loading**: `font-display: swap`
5. **Image Optimization**: WebP format, responsive sizes

## ♿ Accessibility Standards

- **Contrast Ratio**: Minimum 4.5:1 (WCAG AA)
- **Focus Indicators**: 2px solid outline
- **Touch Targets**: Minimum 44x44px
- **ARIA Labels**: All interactive elements
- **Semantic HTML**: Proper heading hierarchy

## 🎨 Visual Hierarchy

1. **Hero Section**: Largest, boldest, most contrast
2. **Section Headers**: Clear separation, consistent spacing
3. **Content Blocks**: Breathing room, clear grouping
4. **CTAs**: Stand out but not overwhelming
5. **Navigation**: Clear, accessible, minimal

## 📱 Mobile-First Approach

1. **Touch-Friendly**: 44px minimum touch targets
2. **Readable**: 16px minimum font size
3. **Spacious**: Generous padding and margins
4. **Simplified**: Reduced navigation, stacked layouts
5. **Fast**: Optimized images, minimal JavaScript

