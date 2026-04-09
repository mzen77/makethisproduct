# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/homepage-desktop-1440-*.png`
- **Interaction model:** Static (sticky, no scroll-triggered changes)

## DOM Structure
header > div.container > [logo-link, nav, actions]

## Computed Styles

### Header Container
- position: sticky
- top: 0px
- z-index: 50
- background: oklab(0.999994 0.0000455677 0.0000200868 / 0.8) — effectively bg-background/80
- backdrop-filter: blur(12px)
- border-bottom: 1px solid oklab(0.922 0 0 / 0.4) — border-border/40
- padding: 0 24px (px-6) on mobile, 0 48px (md:px-12), 0 96px (lg:px-24)
- height: ~56px
- display: flex, align-items: center, justify-content: space-between

### Logo Link
- display: flex, align-items: center, gap: 8px (gap-2)
- font-size: 20px, font-weight: 700, letter-spacing: -0.5px, line-height: 28px
- color: rgb(23, 23, 23) — foreground

### Logo "M" Icon
- width: 32px (w-8), height: 32px (h-8)
- background: foreground (#171717)
- color: background (#ffffff)
- display: flex, align-items: center, justify-content: center
- border-radius: 6px (rounded-md)
- font-family: ui-serif (serif)
- font-weight: 700, font-size: 20px

### Logo Text "MakeThisProduct"
- hidden below sm breakpoint (hidden sm:inline)
- Same font specs as logo link

### Nav Links
- hidden below md breakpoint (hidden md:flex)
- display: flex, align-items: center, gap: 24px (gap-6)
- font-size: 14px, font-weight: 500, line-height: 20px

### Active Nav Link ("Feed")
- color: foreground (#171717), font-weight: 600

### Inactive Nav Links
- color: muted-foreground (#71717a)
- hover: color → foreground
- transition-colors

### Actions (right side)
- Search icon button (hidden on mobile — using lucide Search icon, 20x20)
- "Log in" text link — hidden below sm, font-size: 14px, font-weight: 500, text-muted-foreground
- "Subscribe" button — hidden below sm, h-9, px-4, rounded-md, bg-foreground, text-background, font-size: 14px, font-weight: 500
- Hamburger menu button — visible only below md (md:hidden), lucide Menu icon 22x22

## States & Behaviors
### Hover states
- Nav links: color muted-foreground → foreground, transition-colors
- Log in link: same hover behavior
- Subscribe button: hover:bg-foreground/90

## Text Content (verbatim)
- Logo: "M" + "MakeThisProduct"
- Nav: "Feed", "Categories", "About", "Search", "Subscribe"
- Actions: "Log in", "Subscribe"

## Responsive Behavior
- **Desktop (1440px):** Full nav visible, all actions visible, px-24
- **Tablet (768px):** Nav visible, actions visible, px-12
- **Mobile (390px):** Nav hidden, hamburger visible, logo text hidden (just M icon), subscribe/login hidden, px-6

## Props
- currentPath: string — to highlight active nav link

## Notes
- Nav links: Feed → "/", Categories → "/categories", About → "/about", Search → "/search", Subscribe → "/subscribe"
- Log in → "/login"
- Use lucide-react for Search, Menu icons
