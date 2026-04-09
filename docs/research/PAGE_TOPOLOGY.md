# Page Topology — Homepage

## Page Layout
- Single scroll container (no scroll-snap)
- Sticky header overlaying everything (z-index: 50)
- Main content in `div.min-h-screen.flex.flex-col` with 3 children: header, main, footer
- Main content padded with `px-6 md:px-12 lg:px-24`
- Max page scroll height: 2150px at 1440px viewport

## Section Map (Top to Bottom)

### 1. Header (Sticky)
- **Y position**: 0 (sticky top: 0)
- **Height**: ~56px
- **Interaction model**: Static (no scroll-triggered changes)
- **CSS selector**: `header`
- **Contains**: Logo (M icon + text), nav links (Feed, Categories, About, Search, Subscribe), search icon button, Log in link, Subscribe button, mobile hamburger

### 2. Featured Product Hero
- **Y position**: ~113px
- **Height**: ~450px
- **Interaction model**: Click-driven (vote buttons)
- **CSS selector**: `section.mb-16`
- **Contains**: Left side = product image (aspect-[16/10]); Right side = breadcrumbs (CONCEPT OF THE DAY, PRODUCT CONCEPT, HOME OFFICE, TRENDING badge), title (h1), italic description, vote poll ("Would you buy this?"), two vote buttons, vote stats (1,251 votes today, 84% said Yes)

### 3. Latest Concepts Section Header
- **Y position**: ~659px
- **Height**: ~36px
- **Interaction model**: Click-driven (category filter pills)
- **CSS selector**: `div.flex.flex-col.sm\\:flex-row`
- **Contains**: "Latest Concepts" heading (h2), category filter pills (All, Tech, Home, Lifestyle, Travel, Productivity, Mobility)

### 4. Product Card Grid
- **Y position**: ~727px
- **Height**: ~955px
- **Interaction model**: Click-driven (card links, vote buttons, bookmark buttons)
- **CSS selector**: `div.grid.grid-cols-1`
- **Contains**: 6 product cards in 3-column grid (lg), each with: image, category badge, bookmark button, title, vote buttons, approval percentage

### 5. Load More Button
- **Y position**: ~1746px
- **Height**: ~46px
- **Interaction model**: Click-driven
- **CSS selector**: `div.mt-16.flex.justify-center`
- **Contains**: "Load more concepts" button (rounded-full, bordered)

### 6. Footer
- **Y position**: ~1892px (approx)
- **Height**: ~258px
- **Interaction model**: Static (hover states on links)
- **CSS selector**: `footer`
- **Contains**: Logo + tagline, social icons (Twitter/X, Instagram), 3 link columns (Discover, Company, Legal), copyright text, disclaimer
