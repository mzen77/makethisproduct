# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** Static (hover on links)

## DOM Structure
footer > div.container > [top-row(logo-col + 3-link-columns), bottom-row(copyright + disclaimer)]

## Computed Styles

### Footer Container
- border-top: 1px solid border
- padding: 48px 96px (py-12, px-24 at lg)
- background: muted/30 (very light gray, bg-muted/30)

### Top Row
- display: grid, grid-template-columns: ~1fr repeat(3, auto) on desktop
- gap: 48px (gap-12) on desktop
- On mobile: stacks to single column

### Logo Column
- Logo same as header (M icon + "MakeThisProduct")
- Tagline: "Ideas are free. Building them is the hard part."
  - font-size: 14px, color: muted-foreground, line-height: 20px
- Social icons row: Twitter/X + Instagram (lucide icons, 18x18)
  - color: muted-foreground, hover: text-primary, transition-colors
  - gap: 16px (gap-4)

### Link Columns
- Column heading: font-size: 14px, font-weight: 600, color: foreground, margin-bottom: 16px
- Links: font-size: 14px, color: muted-foreground, hover: text-foreground, transition-colors
- Vertical gap between links: 12px (space-y-3)

### Bottom Row
- border-top: 1px solid border
- margin-top: 48px, padding-top: 32px
- display: flex, justify-content: space-between
- font-size: 12px, color: muted-foreground

## Text Content (verbatim)
- Tagline: "Ideas are free. Building them is the hard part."
- Discover: Trending Now, New Arrivals, Most Voted, Categories
- Company: About Us, Submit an Idea, Newsletter
- Legal: Privacy Policy, Terms of Service, Affiliate Disclosure
- Copyright: "© 2024 MakeThisProduct. All concepts are hypothetical."
- Disclaimer: "All concepts are fictional and not for sale."

## Responsive Behavior
- **Desktop:** 4-column grid (logo + 3 link cols)
- **Mobile:** Single column stack, all columns visible

## Assets
- Icons: Twitter (lucide), Instagram (lucide) from lucide-react
