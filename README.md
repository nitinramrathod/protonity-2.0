# Protonity Technology — Website

A modern, production-ready website for **Protonity Technology Pvt. Ltd.** built with Next.js 14 (App Router), TanStack Query, Axios, TypeScript, and Tailwind CSS.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
protonity/
├── app/
│   ├── layout.tsx            # Root layout (metadata, providers, navbar, footer)
│   ├── page.tsx              # Home page
│   ├── globals.css           # Global styles (Tailwind + custom utilities)
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── testimonials/
│   │   └── page.tsx          # Testimonials page
│   ├── contact/
│   │   └── page.tsx          # Contact page (client component)
│   └── api/
│       ├── contact/route.ts  # POST /api/contact
│       └── callback/route.ts # POST /api/callback
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Responsive sticky navbar
│   │   └── Footer.tsx        # Footer with links and CTA
│   ├── sections/
│   │   ├── HeroSection.tsx   # Hero (landing)
│   │   ├── ServicesOverview.tsx # Services grid
│   │   └── HomeSections.tsx  # Stats, Industries, Why Choose, Tech, CTA
│   └── ui/
│       └── CallbackButton.tsx # Floating callback button + modal
│
├── lib/
│   ├── api.ts                # Axios instance + API functions
│   ├── data.ts               # Static content (services, testimonials, etc.)
│   ├── query-provider.tsx    # TanStack Query provider
│   └── utils.ts              # cn() utility
│
├── types/
│   └── index.ts              # TypeScript interfaces and types
│
├── tailwind.config.ts        # Custom design tokens
└── tsconfig.json
```

---

## 🧱 Architecture

### Data Flow
```
User Action → React Hook Form (validation) → useMutation (TanStack Query)
    → Axios POST → Next.js API Route → Backend/DB/Email Service
    → Success/Error state displayed in UI
```

### API Layer (`lib/api.ts`)
- Axios instance with base URL from `NEXT_PUBLIC_API_URL` env var
- Error interceptor normalizes error messages
- Exported functions: `submitContactForm()`, `submitCallbackRequest()`

### Form Handling
- `react-hook-form` + `zod` for type-safe validation
- `useMutation` from TanStack Query for async state management
- Loading, success, and error UI states handled declaratively

---

## 🎨 Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `navy-950` | `#020617` | Page backgrounds |
| `navy-900` | `#0a0f2e` | Section backgrounds |
| `navy-800` | `#0d1545` | Card backgrounds |
| `electric-500` | `#6366f1` | Primary brand color |
| `cyan-400` | `#22d3ee` | Accent color |

### Typography
- **Display**: Syne (headings, brand)
- **Body**: DM Sans (paragraphs, UI)
- **Mono**: JetBrains Mono (badges, code)

### Custom CSS Utilities
- `.glass` — glassmorphism card
- `.gradient-text` — indigo → cyan gradient text
- `.service-card` — hover-animated service card
- `.btn-primary` / `.btn-secondary` — CTA buttons
- `.form-input` — styled form inputs
- `.dot-grid` — dot pattern background
- `.section-label` — pill-shaped section badge

---

## 🔧 Environment Variables

Create a `.env.local` file:

```env
# API base URL (defaults to /api for Next.js API routes)
NEXT_PUBLIC_API_URL=/api

# Email service (e.g., Resend, SendGrid)
RESEND_API_KEY=your_key_here

# Database
DATABASE_URL=postgresql://...

# WhatsApp notifications (optional)
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
```

---

## 📡 Integrating Real Backend

### In `app/api/contact/route.ts`:
```typescript
// Example with Resend (email)
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'website@protonity.in',
  to: 'hello@protonity.in',
  subject: `New Enquiry from ${name}`,
  html: `<p>${message}</p>`,
});
```

### In `app/api/callback/route.ts`:
```typescript
// Example with Twilio WhatsApp
import twilio from 'twilio';
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

await client.messages.create({
  from: 'whatsapp:+14155238886',
  to: `whatsapp:+91${phone}`,
  body: `New callback request from ${name || 'Unknown'} for: ${reason}`,
});
```

---

## 📱 Pages

| Route | Description |
|-------|-------------|
| `/` | Home landing page |
| `/services` | All services with problem→solution→benefit |
| `/testimonials` | Client testimonials with results |
| `/contact` | Contact form with validation |

---

## ✅ Features

- [x] Fully responsive (mobile-first)
- [x] Dark tech theme (navy/indigo/cyan)
- [x] Smooth CSS animations
- [x] Glassmorphism card design
- [x] Floating callback button (all pages)
- [x] Form validation with Zod
- [x] TanStack Query mutation states
- [x] SEO meta tags + Open Graph
- [x] Accessible keyboard navigation
- [x] TypeScript strict mode

---

## 🚢 Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel --prod
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

Built with ❤️ for **Protonity Technology Pvt. Ltd.** — Jalna, Maharashtra 🇮🇳
