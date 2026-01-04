# SioBois Web Platform

Modern web application for **SioBois**, a specialized structural engineering and wood construction company. Built with performance, accessibility, and modern 2026 web standards in mind.

## 🚀 Tech Stack

- **Framework**: [Next.js 16+](https://nextjs.org/) (App Router & Turbopack)
- **Runtime**: [Bun](https://bun.sh/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: Inline SVGs (Optimized for performance)
- **Deployment**: Configured for servers requiring trailing slashes (`trailingSlash: true`).

## 🛠️ Architecture Updates (2026 Modernization)

Recent refactors have moved the project towards a more cohesive and high-performance architecture:

### 1. Centralized Navigation
- **Location**: `src/constants/navigation.ts`
- **Benefit**: Single source of truth for all menu items and social links, ensuring consistency across desktop and mobile views.

### 2. High-Performance Mobile Menu
- Replaced the legacy separate `/menu` page with a **Dynamic Mobile Overlay** integrated into the `Navbar`.
- **Features**: Staggered animations, scroll-locking, and smooth SPA (Single Page Application) transitions without full page reloads.

### 3. SVG-First Icon System
- Fully transitioned from icon fonts (Linearicons, FontAwesome) to **Inline SVGs** in the core navigation components.
- **Benefit**: Zero-latency icon rendering, no layout shifts, and perfect accessibility support.

## 🏁 Getting Started

### Prerequisites
Ensure you have [Bun](https://bun.sh/) installed on your machine.

### Installation
```bash
bun install
```

### Development
```bash
bun dev
```

### Production Build & Start
```bash
bun run build
bun run start
```

## 📂 Project Structure

- `src/app/` - App Router pages and layouts.
- `src/components/` - Modernized UI components (Navbar, Footer, Section blocks).
- `src/constants/` - Global configuration and static data (Navigation, etc.).
- `public/img/` - Optimized project imagery and assets.

## 📝 Configuration Note
The project is configured with `trailingSlash: true` in `next.config.ts` to ensure compatibility with traditional server environments (Nginx/Apache) and specific static hosting requirements.
