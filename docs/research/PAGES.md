# Pages to Clone

## Navigation Pages (from header nav)
1. **/** — Homepage (Feed) — Product listing with featured hero + grid
2. **/categories** — Category browse page with grid of category cards
3. **/about** — About/manifesto page with How It Works, Team, Promise sections
4. **/search** — Search page with search input, trending topics, popular concepts grid
5. **/subscribe** — Newsletter subscription form with interests + frequency
6. **/login** — Login form (email/password)

## Footer-Only Pages
7. **/submit** — Submit an Idea (auth gate — shows "Sign in to submit" with CTA buttons)
8. **/privacy** — Privacy Policy (legal text page with cross-nav to Terms/Affiliate)
9. **/terms** — Terms of Service (legal text page with cross-nav)
10. **/affiliate** — Affiliate Disclosure (legal text page with cross-nav)

## Dynamic/Template Pages (concept detail)
11. **/concept/[slug]** — Concept detail page (shared layout for all products)
    - Products discovered:
      - /concept/zero-gravity-lumina-lamp (featured hero product)
      - /concept/omni-modular-pack
      - /concept/flora-smart-pot
      - /concept/paperslate-air
      - /concept/foldcity-commuter
      - /concept/zero-bezel-smart-watch
      - /concept/holographic-alarm

## Page Layout Patterns

### Shared Components (all pages)
- Header (sticky, same on every page)
- Footer (same on every page)

### Layout Types
- **Homepage**: Hero + Grid layout
- **Categories**: Simple grid of category cards
- **About**: Multi-section editorial (hero, how-it-works cards, team section with images, promise cards)
- **Search**: Search input + trending tags + product grid (reuses product card component)
- **Subscribe**: Centered form with checkbox grid
- **Login**: Centered card form (simple)
- **Submit**: Centered auth gate (lock icon + CTA buttons)
- **Legal pages** (privacy, terms, affiliate): Prose content with shared legal nav (Terms · Privacy · Affiliate at top)
- **Concept detail**: Two-column layout (image gallery left, info/voting right) + content sections below

## Total: 11 unique page templates (concept detail is 1 template with 7 data variants)
