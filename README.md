# Veerse Scheepstuig Website

Modern website gebouwd met Astro, Tailwind CSS en Decap CMS.

## 🚀 Project Structuur

```
/
├── public/
│   ├── admin/          # Decap CMS admin panel
│   ├── images/         # Statische afbeeldingen
│   └── videos/         # Video bestanden
├── src/
│   ├── components/     # Herbruikbare Astro componenten
│   ├── content/        # Content bestanden (Markdown + JSON)
│   │   ├── pages/      # Pagina content
│   │   └── settings/   # Site instellingen (header, footer)
│   ├── layouts/        # Layout templates
│   ├── pages/          # Astro pagina's (routes)
│   └── styles/         # Global CSS
└── package.json
```

## 🧞 Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installeer dependencies                          |
| `npm run dev`          | Start dev server op `localhost:4321`             |
| `npm run build`        | Bouw productie site naar `./dist/`               |
| `npm run preview`      | Preview productie build lokaal                   |

## 📝 Content Management

- **Admin Panel**: Toegankelijk via `/admin` na het starten van de dev server
- **Decap CMS**: Git-based CMS voor eenvoudig content beheer
- **Cloudinary**: Media management voor afbeeldingen

## 🎨 Componenten

### Herbruikbare componenten:
- `VideoHero.astro` - Hero sectie met video achtergrond
- `Section.astro` - Sectie wrapper met consistente styling
- `SectionHeader.astro` - Sectie headers met titel en subtitle
- `USPCard.astro` - USP/Feature cards met iconen
- `AccommodationCard.astro` - Image cards met overlay
- `ReviewCard.astro` - Review/testimonial cards
- `Header.astro` - Sticky header met scroll effecten
- `Footer.astro` - Footer met contact info en links

## 🔧 Configuratie

### Cloudinary Setup
1. Kopieer `.env.example` naar `.env`
2. Vul je Cloudinary credentials in
3. Update `public/admin/config.yml` met je cloud_name en api_key

### Kleuren aanpassen
Pas de brand kleuren aan in `src/styles/global.css`:
- Primary: Blauw (#1991B9)
- Secondary: Donkerblauw (#111D4A)

## 📦 Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **CMS**: [Decap CMS](https://decapcms.org)
- **Icons**: [Lucide](https://lucide.dev)
- **Media**: [Cloudinary](https://cloudinary.com)

## 🌐 Deployment

Deze site kan gedeployed worden naar:
- Netlify (aanbevolen voor Decap CMS)
- Vercel
- Cloudflare Pages
- Elke static hosting provider

---

**Gemaakt door**: [Zee-Zicht Media](https://zee-zicht.nl)
