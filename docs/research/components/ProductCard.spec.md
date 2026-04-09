# ProductCard Specification

## Overview
- **Target file:** `src/components/ProductCard.tsx`
- **Interaction model:** Click-driven (card link, vote buttons, bookmark)

## DOM Structure
article > [image-link(a), content-div]
  image-link: a.relative.group > img + bookmark-button
  content-div: [badge, title(h3), vote-buttons-row, approval-bar]

## Computed Styles

### Article Container
- display: flex, flex-direction: column
- No explicit border or shadow — clean card

### Image Link Container
- display: block
- position: relative
- aspect-ratio: 4/3
- border-radius: 16px (rounded-2xl)
- overflow: hidden
- background: muted
- margin-bottom: 12px (mb-3)

### Image
- width: 100%, height: 100%
- object-fit: cover
- transition: scale on group-hover (group-hover:scale-105, duration-500)

### Bookmark Button (top-right overlay)
- position: absolute, top: 12px (top-3), right: 12px (right-3)
- padding: 8px (p-2)
- border-radius: 9999px (rounded-full)
- backdrop-filter: blur
- background: rgba(0,0,0,0.4) — bg-black/40
- color: white
- Hover: bg-black/60, color: primary (#ea580c)
- transition: all 200ms
- Icon: lucide Heart, 15x15, stroke, fill=none

### Category Badge
- display: inline-block
- text-transform: uppercase
- font-size: 12px, font-weight: 700, letter-spacing: 0.3px
- color: primary (#ea580c)
- margin-bottom: 4px

### Title (h3)
- font-size: 16px (text-base), font-weight: 600
- color: foreground
- margin-bottom: 8px (mb-2)

### Vote Buttons Row
- display: flex, gap: 8px (gap-2)
- margin-bottom: 8px (mb-2)

### "I'd buy it" Button (card version)
- flex: 1
- height: 36px (h-9)
- border-radius: 8px (rounded-lg)
- background: primary
- color: primary-foreground
- font-size: 12px (text-xs), font-weight: 700
- Content: "🔥 I'd buy it"
- Hover: bg-primary/90

### "Not for me" Button (card version)
- height: 36px (h-9), px: 12px (px-3)
- border-radius: 8px (rounded-lg)
- border: 1px solid border
- background: background
- color: muted-foreground
- font-size: 12px (text-xs), font-weight: 500
- Hover: bg-muted

### Approval Text
- font-size: 12px
- color: muted-foreground
- Content: "XX% approval"

## Text Content
- Badge: category name (uppercase)
- Title: product name
- Vote button 1: "🔥 I'd buy it"
- Vote button 2: "Not for me"
- Approval: "{percent}% approval"

## Responsive Behavior
- Card width determined by parent grid
- Grid: 1col (mobile), 2col (sm), 3col (lg)
- gap-x: 32px (gap-x-8), gap-y: 32px (gap-y-8), md: gap-y-48px (md:gap-y-12)

## Props
- concept: Concept
