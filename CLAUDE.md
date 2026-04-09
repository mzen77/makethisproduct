# MakeThisProduct Clone

## Source
- **Original:** https://br-bzzkyrhirfutaxwl.preview.raydian.dev/
- **Clone:** https://makethisproduct.netlify.app
- **Framework detected:** Static/Raydian (Tailwind v4) — Component Rebuild strategy

## Stack
- Next.js 16 + Tailwind CSS v4 + shadcn/ui tokens
- Playfair Display (Google Font) for headings on /about page
- Geist Sans + Geist Mono for body/code
- lucide-react for icons
- Custom SVG category icons in `src/components/category-icons.tsx`

## Key Conventions
- All page content must match the source site verbatim — extracted via `getComputedStyle()`, not approximated
- Spec files for each component/section live in `docs/research/components/`
- Design reference screenshots in `docs/design-references/`
- Product data in `src/lib/data.ts` — text extracted from source DOM
- Color tokens in `globals.css` match source's CSS custom properties exactly

## Pages
/ (homepage), /categories, /category/[slug], /about, /search, /subscribe, /login, /submit, /privacy, /terms, /affiliate, /concept/[slug]

## Clone Discipline
When modifying any page, follow the clone-website skill:
1. Navigate to the source page via browser MCP
2. Extract styles via `getComputedStyle()` — never estimate
3. Write a spec file before building
4. Use exact text content from source DOM
5. Never bundle multiple pages into one builder agent
