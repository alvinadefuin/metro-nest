# MetroNest

A modern Manila condo rental website built with Astro 5.2+ and Tailwind CSS v4. Features a clean, responsive design optimized for working professionals looking for condos in BGC, Makati, Ortigas, and Mandaluyong.

## Tech Stack

- **Framework**: [Astro 5.2+](https://astro.build/) - The web framework for content-driven websites
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- **Build Tool**: Vite with `@tailwindcss/vite` plugin
- **Output**: Static site generation for optimal performance
- **Deployment**: Vercel-ready

### Key Technical Decisions

- Uses `@tailwindcss/vite` plugin instead of deprecated `@astrojs/tailwind`
- CSS-first configuration with `@theme` directive (no `tailwind.config.js`)
- Zero client-side JavaScript except for mobile menu toggle
- Mobile-first responsive design

## Getting Started

### Prerequisites

- Node.js 18.14.1 or higher
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd metro-nest

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
metro-nest/
├── public/
│   └── favicon.svg           # Site favicon
├── src/
│   ├── components/
│   │   ├── Navbar.astro      # Navigation with mobile menu
│   │   ├── Hero.astro        # Hero section with trust badge
│   │   ├── SearchBox.astro   # Property search form
│   │   ├── ListingCard.astro # Property listing card
│   │   ├── AreaCard.astro    # Area/location card
│   │   ├── FeatureCard.astro # Feature highlight card
│   │   ├── TestimonialCard.astro # Client testimonial
│   │   ├── ContactCTA.astro  # Contact call-to-action
│   │   └── Footer.astro      # Site footer
│   ├── layouts/
│   │   └── Layout.astro      # Base HTML layout
│   ├── pages/
│   │   └── index.astro       # Homepage
│   └── styles/
│       └── global.css        # Global styles with @theme config
├── astro.config.mjs          # Astro configuration
├── package.json
└── README.md
```

## Features

- **Hero Section**: Eye-catching landing with trust indicators and search functionality
- **Featured Listings**: Showcase of available condos with pricing and amenities
- **Area Explorer**: Browse by popular Manila business districts
- **Why Choose Us**: Key value propositions for potential tenants
- **Testimonials**: Social proof from satisfied clients
- **Contact CTA**: Clear call-to-action for inquiries
- **Responsive Design**: Optimized for mobile, tablet, and desktop

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the project in [Vercel Dashboard](https://vercel.com/new)
3. Vercel will auto-detect Astro and configure the build

### Build Settings (if needed)

- **Framework Preset**: Astro
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## Customization

### Colors

Edit the `@theme` block in `src/styles/global.css`:

```css
@theme {
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  /* Add more custom colors */
}
```

### Content

- Update listing data in `src/pages/index.astro`
- Modify component content directly in `.astro` files
- Replace Unsplash images with your own

## License

MIT
