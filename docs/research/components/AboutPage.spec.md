# About Page Specification

## Overview
- **Target file:** `src/app/about/page.tsx`
- **Interaction model:** Static (hover states on cards only)
- **Font dependency:** Playfair Display (Google Font) — used on h1, h2, h3 headings. Available as `font-[family-name:var(--font-playfair)]` or inline style.

## Page Structure
4 sections between Header and Footer, all inside `<main class="flex-1">`.

---

## Section 1: Manifesto Hero

### Container
- `section.relative.border-b.border-border.overflow-hidden.bg-muted/30`
- backgroundColor: oklab(0.967428 0.000417888 -0.00125271 / 0.3) — use `bg-muted/30`
- borderBottom: 1px solid oklch(0.922 0 0) — use `border-b border-border`
- overflow: hidden

### Inner Container
- `div.mx-auto.max-w-4xl.px-4.py-20.md:py-32.text-center`
- maxWidth: 896px
- padding: 128px 16px (md:py-32 = 128px)
- text-align: center

### "Manifesto" Badge
- `span.inline-block.px-3.py-1.rounded-full`
- fontSize: 12px, fontWeight: 600, letterSpacing: 1.2px, textTransform: uppercase
- color: rgb(234, 88, 12) — `text-primary`
- backgroundColor: primary/10
- border: 1px solid primary/20 — `border border-primary/20`
- borderRadius: rounded-full
- marginBottom: 24px (mb-6)

### Title h1
- `h1.text-4xl.md:text-6xl.font-bold.leading-tight.tracking-tight.mb-8`
- fontSize: 60px (md:text-6xl)
- fontWeight: 700
- fontFamily: "Playfair Display", Georgia, serif — **NOT system serif, NOT italic**
- lineHeight: 75px (leading-tight)
- letterSpacing: -1.5px (tracking-tight)
- marginBottom: 32px (mb-8)
- color: rgb(23, 23, 23) — foreground
- Contains `<br class="hidden md:block">` after "We design the future"

### Text Content (h1, verbatim)
"We design the future [br on desktop] so you can decide if it's worth building."

### Description p
- `p.text-lg.md:text-xl.text-muted-foreground.max-w-2xl.mx-auto.leading-relaxed`
- fontSize: 20px (md:text-xl)
- fontWeight: 400
- fontFamily: system sans-serif (NOT serif, NOT italic)
- lineHeight: 32.5px (leading-relaxed)
- color: rgb(113, 113, 122) — muted-foreground
- maxWidth: 672px (max-w-2xl)
- margin: 0 auto (mx-auto)

### Text Content (p, verbatim)
"MakeThisProduct is a digital concept lab. We visualize products that solve real problems, then let the internet vote on whether they should exist. Every concept is clearly labeled — just honest validation."

---

## Section 2: How It Works

### Container
- `section.py-24.bg-background` (padding: 96px 0)
- Inner: `div.mx-auto.max-w-6xl.px-4` (maxWidth: 1152px)

### Header Row
- `div.flex.flex-col.md:flex-row.justify-between.items-end.mb-16.gap-4.border-b.border-border.pb-8`
- borderBottom: 1px solid oklch(0.922 0 0)
- paddingBottom: 32px
- marginBottom: 64px

#### Left side (div)
- h2: "How It Works"
  - `h2.text-3xl.font-bold.mb-2`
  - fontSize: 30px, fontWeight: 700, fontFamily: "Playfair Display"
  - marginBottom: 8px
- subtitle p: "From sketch to signal in three steps."
  - `p.text-muted-foreground`
  - fontSize: 16px, color: muted-foreground

#### Right side (div)
- `div.hidden.md:block.text-sm.font-mono.text-muted-foreground`
- Text: "EST. 2023 // CONCEPT LAB"
- fontSize: 14px, fontFamily: mono, color: muted-foreground

### Cards Grid
- `div.grid.grid-cols-1.md:grid-cols-3.gap-12`
- gridTemplateColumns: 3 equal columns
- gap: 48px

### Each Card (3 cards, `div.group`)
#### Image Container
- `div.aspect-[4/3].bg-muted.mb-6.overflow-hidden.rounded-lg.relative.border.border-border`
- aspect-ratio: 4/3
- borderRadius: 10px (rounded-lg)
- border: 1px solid oklch(0.922 0 0)
- overflow: hidden
- marginBottom: 24px
- Contains: `<img>` (fill, object-cover) + step number overlay

#### Step Number Overlay
- `span.absolute.bottom-3.left-3.text-xs.font-bold.text-white.bg-black/50.rounded-full.px-2.py-0.5`
- Position: absolute, bottom-left corner of image

#### Card Title h3
- `h3.text-xl.font-semibold.mb-3.group-hover:text-[#ea580c].transition-colors`
- fontSize: 20px, fontWeight: 600, fontFamily: "Playfair Display"
- marginBottom: 12px
- Hover: color changes to primary (#ea580c)

#### Card Description p
- `p.text-muted-foreground.leading-relaxed`
- fontSize: 16px, color: muted-foreground, fontFamily: system sans

### Card Content (verbatim)
1. Step "01" / "The Spark" / "We monitor emerging tech, shifting cultural habits, and community threads to identify gaps in the market. Then we sketch solutions that solve real pain points."
   - Image: /images/about-spark-ideation.png, alt: "Design studio desk with sketches and coffee"
2. Step "02" / "The Blueprint" / "Our team of industrial designers creates full-fidelity renders and specs. We treat every concept like a real product launch — complete with branding, pricing, and technical detail."
   - Image: /images/about-blueprint-render.png, alt: "Designer working on 3D product render"
3. Step "03" / "The Signal" / "We publish the concept and track the signal: votes, shares, and follows. If a concept hits Critical Mass (80%+ approval), we pitch it directly to manufacturing partners."
   - Image: /images/about-signal-community.png, alt: "Community votes forming an upward signal"

---

## Section 3: Team (The Lab + From the Team)

### Container
- `section.py-24.border-y.border-border.bg-muted/30`
- padding: 96px 0
- borderTop + borderBottom: 1px solid oklch(0.922 0 0)
- backgroundColor: muted/30
- Inner: `div.mx-auto.max-w-6xl.px-4`

### Grid Layout
- `div.grid.grid-cols-1.md:grid-cols-2` (NO gap — columns are flush)
- 2 equal columns at desktop

### Left Column (Lab Image)
- `div.relative.h-64.md:h-auto.bg-neutral-900.min-h-[320px]`
- background: neutral-900 (dark)
- position: relative
- Contains:
  - `img.absolute.inset-0.w-full.h-full.object-cover.opacity-75.hover:opacity-90.transition-opacity.duration-500`
    - src: /images/team-studio-scene.png, alt: "Design team at work"
    - opacity: 0.75, hover: 0.90
  - Overlay div: `div.absolute.bottom-6.left-6.text-white.z-10`
    - Small label: "The Lab" (text-xs font-semibold uppercase tracking-wider)
    - Title: "Where the future is drafted." (text-xl md:text-2xl font-bold)

### Right Column (Team Content)
- `div.p-8.md:p-12.flex.flex-col.justify-center`
- padding: 32px (p-8), md: 48px (md:p-12)

#### Heading h3
- `h3.text-2xl.font-semibold.mb-6`
- fontSize: 24px, fontWeight: 600
- Text: "From the Team"

#### Body Text
- `div.space-y-4.text-muted-foreground.leading-relaxed`
- 3 paragraphs, each fontSize: 16px, color: muted-foreground

#### Paragraph 1 (verbatim)
"We started MakeThisProduct because we were tired of beautiful product ideas that never made it past a mood board. We wanted to flip the script: validate demand first, then build."

#### Paragraph 2 (verbatim)
"Our team is a collective of industrial designers, engineers, and researchers obsessed with the \"what if.\" We don't just draw pretty pictures — we design for manufacturability, sustainability, and real utility."

#### Paragraph 3 (verbatim)
"Every vote you cast is a signal that helps shape the future of consumer products. Thank you for being part of the experiment."

#### Signature Row
- `div.mt-8.pt-8.border-t.border-border.flex.items-center.gap-4`
- marginTop: 32px, paddingTop: 32px, borderTop: 1px solid border
- Contains: avatar images + "— The MTP Team" text
- Avatar images: 3 circular images (w-10 h-10 rounded-full object-cover)
  - /images/team-avatar-1.png, /images/team-avatar-2.png, /images/team-avatar-3.png
- Signature: `span.font-medium.text-foreground` — "— The MTP Team"

---

## Section 4: Our Promise

### Container
- `section.py-24.bg-background` (padding: 96px 0)
- Inner: `div.mx-auto.max-w-4xl.px-4.text-center` (maxWidth: 896px)

### Heading h2
- `h2.text-3xl.font-bold.mb-12`
- fontSize: 30px, fontWeight: 700, fontFamily: "Playfair Display"
- textAlign: center
- marginBottom: 48px
- Text: "Our Promise"

### Cards Grid
- `div.grid.grid-cols-1.md:grid-cols-3.gap-8`
- gap: 32px

### Each Card
- `div.p-6.rounded-xl.border.border-border.bg-muted/10.hover:border-[#ea580c]/30.transition-colors`
- padding: 24px (p-6)
- borderRadius: rounded-xl
- border: 1px solid border
- bg: muted/10
- hover: border-primary/30
- textAlign: center

#### Icon Container
- `div.w-12.h-12.rounded-full.bg-primary/10.flex.items-center.justify-center.text-primary.mx-auto.mb-4`
- width: 48px, height: 48px
- backgroundColor: primary/10
- color: primary (#ea580c)
- Use lucide icons: CheckCircle, Link2, ShieldCheck (20x20)

#### Card Title
- `h3.font-semibold.mb-2`
- fontSize: 16px, fontWeight: 600, color: foreground

#### Card Description
- `p.text-sm.text-muted-foreground`
- fontSize: 14px, color: muted-foreground, lineHeight: 20px

### Card Content (verbatim)
1. Icon: CheckCircle / "Clearly Labeled" / "Every concept is marked as exactly that — a concept. If a real product exists, we link to it directly."
2. Icon: Link2 / "Affiliate Links Disclosed" / "We use affiliate links on real alternative products to support our work. We always say so, clearly and upfront."
3. Icon: ShieldCheck / "Your Vote, Your Data" / "We never sell your data. Your votes exist solely to prove demand — and potentially get a great product made."

---

## Responsive Behavior
- **Desktop (1440px):** Full layout as described
- **Mobile:** Hero py-20 (80px), text-4xl for h1, grid-cols-1 for all grids, team section stacks
- **Breakpoint:** md (768px)

## Assets
- /images/about-spark-ideation.png
- /images/about-blueprint-render.png
- /images/about-signal-community.png
- /images/team-studio-scene.png
- /images/team-avatar-1.png
- /images/team-avatar-2.png
- /images/team-avatar-3.png
