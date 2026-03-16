# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev          # Start dev server (uses --webpack flag)
npm run build        # Production build (uses --webpack flag)
npm run start        # Start production server
npm run lint         # Run ESLint (flat config, ESLint 9)
```

CI runs `npx next lint` then `npx next build` on Node.js 20.

## Environment Variables

Copy `.env.example` to `.env.local` and set `SMTP_EMAIL` and `SMTP_PASSWORD` for the contact form email functionality (Nodemailer with SMTP).

## Architecture

This is a **Next.js 16 App Router** marketing website for Dreamlytix (school management software company), built with **React 19**, **TypeScript 5** (strict), and **Tailwind CSS 4**.

### Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json).

### Source Layout

- `src/app/` — App Router pages, layouts, API routes, SEO files (robots.ts, sitemap.ts, opengraph-image.tsx)
- `src/components/sections/` — Page sections, each in its own folder (Hero, Services, Implementation, Portfolio, Testimonials, FAQ, Contact)
- `src/components/layout/` — Header and Footer
- `src/components/ui/` — Shared UI components (AnimatedBackground, MotionProvider, WhatsAppButton)

### Page Structure

The home page (`src/app/page.tsx`) composes all section components. Hero, Implementation, and Services are statically imported; Portfolio, Testimonials, FAQ, and Contact use `next/dynamic` for code splitting.

Additional pages: `/privacy-policy`, `/terms-and-conditions`.

### Client vs Server Components

- **Server components:** Root layout (`layout.tsx`) handles metadata and structured data (multiple JSON-LD schemas)
- **Client components:** All interactive components use `"use client"` — Header, Footer, all sections, UI components
- `MotionProvider` wraps the app to provide Framer Motion's `LazyMotion` with `domAnimation` features

### API Routes

- `POST /api/contact` — Contact form handler with in-memory rate limiting (5 req/15 min per IP), input validation, HTML escaping, and Nodemailer email dispatch

### Styling

Tailwind CSS 4 via PostCSS (no tailwind.config — uses CSS-first configuration). Custom animations and glassmorphism utilities are defined in `src/app/globals.css`. The site uses a dark theme by default.

### Key Libraries

- **Framer Motion** — Page animations, wrapped via `MotionProvider` using `LazyMotion`
- **Lucide React** — Icons (both are configured for optimized imports in next.config.ts)
- **Nodemailer** — Server-side email sending in the contact API route

### Security Headers

Comprehensive security headers (CSP, HSTS, X-Frame-Options, etc.) are configured in `next.config.ts` via the `headers()` function.

## Git Conventions

- Branch: `dev-development` is the main development branch
- Commit messages follow conventional commits format: `feat:`, `fix:`, `chore:`, `refactor:`
