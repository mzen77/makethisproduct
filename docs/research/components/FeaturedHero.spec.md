# FeaturedHero Specification

## Overview
- **Target file:** `src/components/FeaturedHero.tsx`
- **Interaction model:** Click-driven (vote buttons)

## DOM Structure
section.mb-16.md:mb-24 > div > div.flex.flex-col.md:flex-row(gap-8 md:gap-12)
  Left: a.w-full.md:w-3/5(image-container, aspect-[4/3] md:aspect-[16/10])
  Right: div.flex-1(breadcrumbs, title, description, "not for sale", vote section, stats)

## Computed Styles

### Container Section
- margin-bottom: 64px (mb-16), md: 96px (md:mb-24)

### Flex Row
- display: flex
- flex-direction: column (mobile), row (md+)
- gap: 32px (gap-8), md: 48px (gap-12)

### Image Container (Left)
- width: 100% mobile, 60% desktop (w-full md:w-3/5)
- aspect-ratio: 4/3 mobile, 16/10 desktop
- border-radius: 16px (rounded-2xl)
- overflow: hidden
- background: muted
- position: relative (group for hover)

### Image
- object-fit: cover, w-full, h-full
- transition: scale on group-hover (group-hover:scale-105, transition duration-500)

### Right Content
- flex: 1
- display: flex, flex-direction: column, justify-content: center
- gap: varies per child

### Breadcrumb Row
- display: flex, flex-wrap: wrap, align-items: center, gap: 8px (gap-2)
- font-size: 12px, font-weight: 700, text-transform: uppercase, letter-spacing: 0.3px, line-height: 16px

### Breadcrumb Labels
- "CONCEPT OF THE DAY": text in a span (no special bg)
- "PRODUCT CONCEPT": text-muted-foreground
- Separator "•": text-muted-foreground
- "HOME OFFICE": text-muted-foreground
- "TRENDING" badge: text-primary (#ea580c), bg-primary/10, px-2, py-0.5, rounded-full, with star icon (lucide Star, 12x12, fill=currentColor)

### Title (h1)
- font-size: 30px (text-3xl) mobile, 36px (md:text-4xl) desktop
- font-weight: 700
- line-height: tight (1.25)
- letter-spacing: -0.9px (tracking-tight)
- color: foreground

### Description
- font-family: ui-serif (font-serif)
- font-style: italic
- font-size: 18px (text-lg)
- line-height: relaxed (1.625)
- color: muted-foreground

### "Not for sale (yet)" line
- display: flex, align-items: center, gap: 8px
- font-size: 12px, font-weight: 500, color: muted-foreground
- Info icon (lucide AlertCircle, 14x14, stroke)

### Vote Section
- "Would you buy this?" label: font-size: 14px, font-weight: 500, color: foreground, margin-bottom: 12px

### Vote Buttons Row
- display: flex, gap: 12px (gap-3)

### "I'd buy it" Button
- flex: 1
- height: 48px (h-12)
- background: primary (#ea580c)
- color: primary-foreground (white)
- border-radius: 12px (rounded-xl)
- font-size: 16px, font-weight: 500
- display: flex, align-items: center, justify-content: center, gap: 8px
- Content: "🔥" emoji + "I'd buy it" text
- Hover: thumb icon translates up -2px (group-hover:-translate-y-0.5 transition-transform)

### "Not for me" Button
- flex: 1
- height: 48px (h-12)
- background: muted (#f4f4f5)
- color: muted-foreground (#71717a)
- border-radius: 12px (rounded-xl)
- font-size: 16px, font-weight: 500

### Stats Row
- display: flex, justify-content: space-between, align-items: center
- font-size: 12px, color: muted-foreground

## Text Content (verbatim)
- Breadcrumbs: "CONCEPT OF THE DAY", "PRODUCT CONCEPT", "HOME OFFICE", "TRENDING"
- Title: "The Zero-Gravity Lumina Lamp"
- Description: "A desk lamp that defies gravity, using magnetic levitation to suspend the light source for perfectly adjustable, shadow-free illumination."
- Info: "Not for sale (yet)"
- Poll: "Would you buy this?"
- Button 1: "🔥 I'd buy it"
- Button 2: "Not for me"
- Stats: "1,251 votes today" | "84% said Yes"

## Responsive Behavior
- **Desktop:** Side-by-side (image 60%, content 40%)
- **Mobile:** Stacked (image full width, content below)
- Title: text-3xl mobile → text-4xl desktop

## Props
- concept: Concept (from data)
