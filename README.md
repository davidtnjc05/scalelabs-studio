# ScaleLabs Studio

Moderne Marketing-Agentur für lokale Unternehmen — Webseiten, Social Media, Werbung und Recruiting aus einer Hand.

## 🚀 Tech Stack

- **Frontend:** React 19 + TypeScript + TanStack Start
- **Build:** Vite
- **Styling:** Tailwind CSS + Radix UI
- **Backend:** Supabase (PostgreSQL)
- **Hosting:** Vercel

## 🛠 Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build
npm run build

# Preview
npm run preview
```

## 📦 Struktur

```
src/
├── routes/        # TanStack Router Pages
├── components/    # React Components
│   └── ui/       # Radix UI Components
├── integrations/ # Supabase, Email, etc.
├── hooks/        # Custom Hooks
├── lib/          # Utilities
└── assets/       # Images, Icons
```

## 🔐 Environment Variables

Siehe `.env` für lokale Konfiguration. Für Vercel Deployment siehe `DEPLOYMENT.md`.

```
SUPABASE_PUBLISHABLE_KEY
SUPABASE_URL
VITE_SUPABASE_PROJECT_ID
VITE_SUPABASE_PUBLISHABLE_KEY
VITE_SUPABASE_URL
```

## 📖 Dokumentation

- **Deployment Guide:** `DEPLOYMENT.md`
- **Vercel Config:** `vercel.json`

## 👤 Autor

David Tunjić — ScaleLabs Studio
- GitHub: [@davidtnjc05](https://github.com/davidtnjc05)

- ✅ **Deployed to Vercel** - Live Production Environment
- Website: [scalelabsstudio.com](https://scalelabsstudio.com)

---

**Lovable-Migration:** ✅ Alle Lovable-Dependencies entfernt. Bereit für Production.
