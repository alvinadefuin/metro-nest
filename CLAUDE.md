# CLAUDE.md

This file provides context for Claude Code when working on this project.

## Project Overview

MetroNest is a Manila condo rental website built with Astro 5.2+ and Tailwind CSS v4. It's a static site targeting working professionals looking for condos in Metro Manila's business districts (BGC, Makati, Ortigas, Mandaluyong).

## Tech Stack

- **Astro 5.2+** - Static site generator
- **Tailwind CSS v4** - Using `@tailwindcss/vite` plugin (NOT `@astrojs/tailwind` which is deprecated)
- **No JavaScript frameworks** - Pure Astro components with minimal client-side JS
- **Static output** - Configured for Vercel deployment

## Key Technical Details

### Tailwind CSS v4 Configuration

This project uses Tailwind CSS v4's CSS-first configuration approach:

- **No `tailwind.config.js`** - All configuration is in `src/styles/global.css`
- Uses `@theme` directive for custom design tokens
- Import via `@import "tailwindcss";`

```css
@import "tailwindcss";

@theme {
  --color-primary-600: #2563eb;
  /* ... */
}
```

### Astro Configuration

The Vite plugin is configured in `astro.config.mjs`:

```javascript
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
```

## Commands

```bash
npm run dev      # Start development server (localhost:4321)
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── components/     # Reusable Astro components
├── layouts/        # Page layouts (Layout.astro)
├── pages/          # Route pages (index.astro)
└── styles/         # Global CSS with Tailwind config
```

## Component Guidelines

- Components are in `src/components/` as `.astro` files
- Use TypeScript interfaces for props
- Keep components small and focused
- Mobile-first responsive design
- Semantic HTML elements
- Minimal client-side JavaScript (only for interactivity like mobile menu)

## Styling Guidelines

- Use Tailwind utility classes
- Custom colors defined in `@theme` block in `global.css`
- Avoid inline styles
- Use `group` and `group-hover:` for parent-child hover effects
- Transitions for smooth interactions

## Data

Currently, listing/area/testimonial data is hardcoded in `src/pages/index.astro`. For a production site, this would be moved to:
- Content collections
- CMS integration
- API endpoints

## Images

Using Unsplash placeholder images. Replace with actual property photos for production.
