---
name: Amaana Foundation Landing Page
overview: Set up a Next.js (App Router) project with Tailwind CSS, configured for static export to Cloudflare Pages, and build a single-page landing site for Amaana Foundation with all requested sections.
todos:
  - id: setup-nextjs
    content: Initialize Next.js project with TypeScript, Tailwind, App Router; configure next.config for static export
    status: completed
  - id: setup-assets
    content: Move images to public/images/, configure Tailwind with brand colors and fonts
    status: completed
  - id: build-layout-navbar
    content: Create root layout with metadata/fonts and sticky Navbar with mobile menu
    status: completed
  - id: build-hero
    content: Build Hero section with background image, mission statement, and Instagram CTA
    status: completed
  - id: build-about
    content: Build About section with mission, founding story, and Islamic values cards
    status: completed
  - id: build-initiative-stats
    content: Build Current Initiative banner and Impact Stats section
    status: completed
  - id: build-past-initiatives
    content: Build Past Initiatives grid with 6 drive cards using placeholder images
    status: completed
  - id: build-testimonials-team
    content: Build Testimonials section and Team/Volunteers section with CTA
    status: completed
  - id: build-social-contact-footer
    content: Build Social Media links, Contact form, and Footer
    status: completed
  - id: verify-build
    content: Run build to verify static export works correctly
    status: completed
isProject: false
---

# Amaana Foundation NGO Landing Page

## Project Setup

- Initialize a Next.js 14+ project with TypeScript and App Router in the current workspace root
- Run `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-import-alias` (using `.` since the workspace root is the project root)
- Configure `next.config.js` with `output: 'export'` for static generation (Cloudflare Pages)
- Copy existing images into `public/images/` so Next.js can serve them statically
- Extend `tailwind.config.ts` with the brand color palette derived from the logo:
  - **Gold**: `#E0B318` (and lighter/darker variants)
  - **Blue**: `#466FAA` (and lighter/darker variants)
  - Add a warm neutral palette for backgrounds and text

## Architecture

Single-page app with a root `page.tsx` that composes all section components.

```
src/
  app/
    layout.tsx        -- Root layout with metadata, fonts (Inter + Amiri for Islamic feel)
    page.tsx          -- Main page composing all sections
    globals.css       -- Tailwind directives + custom styles
  components/
    Navbar.tsx        -- Sticky nav with logo + section links + CTA
    Hero.tsx          -- Hero with mission statement + Instagram CTA
    About.tsx         -- Mission, founding story, Islamic values
    CurrentInitiative.tsx  -- Highlighted banner for ongoing appeal
    ImpactStats.tsx   -- Bold stats counters
    PastInitiatives.tsx    -- Grid of past drives using placeholder images
    Testimonials.tsx  -- Beneficiary/donor quotes
    Team.tsx          -- Team members + volunteer CTA
    SocialMedia.tsx   -- Instagram, YouTube, Facebook links
    Contact.tsx       -- Contact form (static, no backend) + location info
    Footer.tsx        -- Simple footer with links and copyright
```

## Section Details

### Navbar

- Sticky top, transparent on hero then white on scroll
- Logo on left, section anchor links in middle, "Donate" CTA button (links to Instagram) on right
- Mobile hamburger menu

### Hero (`images/placeholders/hero.jpg`)

- Full-viewport background image with dark overlay
- Mission statement heading + subtext
- Prominent "Donate Now" button linking to Instagram

### About

- Two-column layout (text + decorative element)
- Mission, founding story, Islamic values (zakat, sadaqah) as feature cards with icons

### Current Initiative

- Eye-catching banner/card with gradient background
- Title, description, and CTA button for the current appeal (e.g., "Eid Kit Drive 2026")

### Impact Stats

- 4 bold stat counters in a row (families helped, kits distributed, volunteers, cities reached)
- Blue background with white text

### Past Initiatives

- 6-card responsive grid using the placeholder images:
  - `drive-food.jpg` -- Food Distribution Drive
  - `drive-clothing.jpg` -- Winter Clothing Drive
  - `drive-education.jpg` -- Education Support Program
  - `drive-medical.jpg` -- Medical Aid Camp
  - `drive-shelter.jpg` -- Shelter Assistance
  - `drive-water.jpg` -- Clean Water Initiative
- Each card: image, title, short description

### Testimonials

- Carousel or stacked cards with quotes, names, and roles

### Team & Volunteers

- Grid of team member cards (placeholder avatars with initials)
- Volunteer CTA linking to Instagram

### Social Media

- Prominent section with large icon links to Instagram, YouTube, Facebook

### Contact

- Two-column: contact form (name, email, message -- static/no backend) + map/address placeholder for Hyderabad
- Social links repeated

### Footer

- Logo, quick links, social icons, copyright

## CTA Links

- All CTA buttons (Donate, Volunteer, Get in Touch) link to `https://www.instagram.com/amaanafoundation/` (placeholder URL, easily configurable via a constants file)

## Deployment Config

- `next.config.js`: `output: 'export'`, `images: { unoptimized: true }` (required for static export)
- Output folder `out/` is what Cloudflare Pages will serve

