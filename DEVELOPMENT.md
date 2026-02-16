# 🚀 Development Guide - Veerse Scheepstuig

## Quick Start

### 1. Start CMS (Terminal 1)
```bash
cd /Users/Shared/Development/veersescheepstuig.nl/cms
pnpm dev
```
→ http://localhost:3000/admin

### 2. Start Frontend (Terminal 2)
```bash
cd /Users/Shared/Development/veersescheepstuig.nl/frontend
npm run dev
```
→ http://localhost:4321

## Eerste keer setup

### CMS - Admin user aanmaken
1. Ga naar http://localhost:3000/admin
2. Maak je eerste admin user aan
3. Log in

### Content invoeren
Ga naar de globals in het admin panel:
- **Site Settings** - Logo, site naam, meta beschrijving
- **Homepage** - Hero, intro, content
- **Over Ons** - Geschiedenis, informatie over het koor
- **Contact** - Contactgegevens, repetitie info
- **Footer** - Footer links en content

## Project Structuur

```
veersescheepstuig.nl/
├── cms/                    # Payload CMS (Next.js)
│   ├── src/
│   │   ├── collections/    # Media, Users
│   │   ├── globals/        # Homepage, OverOns, Contact, etc.
│   │   ├── components/     # Logo, Icon, PublishButton
│   │   ├── fields/         # Herbruikbare velden (SEO, etc.)
│   │   └── hooks/          # Revalidation hooks
│   ├── .env               # Database + Cloudinary credentials
│   └── package.json
│
└── frontend/              # Astro website
    ├── src/
    │   ├── components/    # Astro componenten
    │   ├── layouts/       # Layout templates
    │   ├── pages/         # Routes (index, contact, etc.)
    │   └── lib/          # payload.ts (CMS data fetching)
    ├── public/           # Static assets
    ├── .env             # PUBLIC_PAYLOAD_URL
    └── package.json
```

## CMS Globals (huidige setup)

✅ **SiteSettings** - Site-wide instellingen
✅ **Footer** - Footer content
✅ **Homepage** - Homepage content
✅ **OverOns** - Over Ons pagina
✅ **Contact** - Contact pagina

## Payload CMS API

De frontend haalt data op via de Payload REST API:

```typescript
// In Astro pages
import { getHomepage, getSiteSettings, getFooter } from '@/lib/payload'

const homepage = await getHomepage()
const settings = await getSiteSettings()
const footer = await getFooter()
```

## Environment Variables

### CMS (`.env`)
```env
DATABASE_URI=mongodb+srv://...
PAYLOAD_SECRET=your-secret
CLOUDINARY_CLOUD_NAME=dgf7hospk
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### Frontend (`.env`)
```env
PUBLIC_PAYLOAD_URL=http://localhost:3000
PUBLIC_CLOUDINARY_CLOUD_NAME=dgf7hospk
```

## Cloudinary

Alle media wordt opgeslagen in Cloudinary:
- **Folder**: `veersescheepstuig`
- **Cloud name**: `dgf7hospk`
- Upload via CMS admin panel → Media

## Database

MongoDB Atlas:
- **Database**: `veersescheepstuig`
- **Cluster**: veersescheepstuigwebsit.is439s9.mongodb.net

## Deployment

### Frontend
- Vercel (aanbevolen)
- Netlify
- Cloudflare Pages

### CMS
- Payload Cloud
- Vercel
- Custom Node.js server

## Troubleshooting

### Port 3000 already in use
```bash
lsof -ti:3000 | xargs kill -9
```

### CMS niet bereikbaar vanuit frontend
Check of `PUBLIC_PAYLOAD_URL` correct is in `frontend/.env`

### MongoDB connectie problemen
Controleer `DATABASE_URI` in `cms/.env`

## Volgende stappen

1. ✅ CMS draait op poort 3000
2. ✅ Frontend draait op poort 4321
3. ⏳ Admin user aanmaken
4. ⏳ Content invoeren in CMS
5. ⏳ Frontend pagina's koppelen aan CMS data
6. ⏳ Deployment configureren

---

**Gemaakt door**: [Zee-Zicht Media](https://zee-zicht.nl)
