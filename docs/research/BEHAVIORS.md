# Behaviors Document

## Scroll Behaviors
- **No scroll-triggered animations detected.** MutationObserver during full scroll sweep recorded 0 mutations.
- **No smooth scroll library** (no Lenis, no Locomotive Scroll)
- **No scroll-snap** on body or html
- **All sections start at opacity: 1** with transform: none — no fade-in/scroll-reveal animations

## Header
- **Sticky header**: position: sticky, top: 0, z-index: 50
- **Background**: semi-transparent white with backdrop-blur(12px) — `oklab(0.999994 0.0000455677 0.0000200868 / 0.8)`
- **Border-bottom**: 1px solid `oklab(0.922 0 0 / 0.4)` (light gray, semi-transparent)
- **No scroll-triggered header style changes** — stays the same throughout scroll

## Hover States

### Nav Links
- Muted-foreground (#71717a) → foreground (#171717) on hover
- transition-colors applied

### Product Cards
- Image container has group hover behavior
- Bookmark button (top-right): bg-black/40 → bg-black/60 on hover, text-white → text-primary on hover
- Card link is the entire article element

### Category Filter Pills
- Active: bg-foreground text-background shadow-sm
- Inactive: text-muted-foreground, hover:bg-muted
- transition-colors on all pills

### Vote Buttons (on cards)
- "I'd buy it" button: bg-primary text-primary-foreground, hover:bg-primary/90
- "Not for me" button: border border-border bg-background, hover:bg-muted

### "I'd buy it" button (hero)
- Has span with class group-hover:-translate-y-0.5 transition-transform (thumbs up icon bounces up slightly)

### Load More Button
- border border-border rounded-full
- text-muted-foreground → hover:text-foreground
- hover:bg-muted transition-colors

### Subscribe Button (header)
- bg-foreground text-background (dark button)
- h-9, rounded-md, px-4

### Footer Links
- text-muted-foreground → hover:text-foreground transition-colors

## Click Behaviors

### Category Filters (Homepage)
- Click switches active filter pill (bg-foreground ↔ text-muted-foreground)
- Filters the product grid — click-driven, not scroll-driven
- Categories: All, Tech, Home, Lifestyle, Travel, Productivity, Mobility

### Vote Buttons
- "I'd buy it" / "Not for me" — click to vote (client-side state toggle)

### Load More Button
- Loads additional product cards into the grid

## Animations
- **document.getAnimations()**: Empty array — no Web Animations API animations detected
- **No CSS keyframe animations** on page load
- **No counter/odometer animations**
- **No marquee/infinite scroll animations**
- **No Lottie, canvas, or video elements**

## Initial Element States
All main sections start at opacity: 1, transform: none. No elements are hidden on load.

## Responsive Behavior
- Header: nav links hidden on mobile (md:flex), hamburger menu button appears (md:hidden)
- Hero: flexbox direction changes from row (md) to column (mobile)
- Product grid: 3 columns (lg), 2 columns (sm), 1 column (mobile)
- Hero image: aspect-[4/3] on mobile, aspect-[16/10] on desktop
- Subscribe button hidden below sm breakpoint
- Logo text "MakeThisProduct" hidden below sm (hidden sm:inline)
