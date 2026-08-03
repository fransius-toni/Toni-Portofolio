# Fransius Toni Gabriel Tamba — Data Science Portfolio

Personal portfolio website for Fransius Toni Gabriel Tamba, built with React, Vite, and TypeScript. Dark navy design with blue-cyan accents, optimized for Data Science internship interviews.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| Vite | 8 | Build tool |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3 | Styling |
| Framer Motion | 11 | Animations |
| Lucide React | 0.525 | Icons |

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/fransiustoni/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
portfolio/
├── public/
│   ├── cv.pdf                     # ← Replace with your real CV
│   └── images/
│       ├── projects/              # ← Add project screenshots here
│       └── certificates/          # ← Add certificate images here
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         # Floating navigation bar with scroll spy
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx           # Hero with animated intro and CTA buttons
│   │   │   ├── About.tsx          # Bio, stats, education highlight
│   │   │   ├── Skills.tsx         # 4 skill category cards
│   │   │   ├── Projects.tsx       # Reusable project cards with expandable details
│   │   │   ├── Experience.tsx     # Vertical timeline
│   │   │   ├── Education.tsx      # University card
│   │   │   ├── Certificates.tsx   # Certificate cards with placeholders
│   │   │   └── Contact.tsx        # Contact info + mailto form
│   │   └── ui/
│   │       ├── SectionHeader.tsx  # Reusable section headings
│   │       ├── Tag.tsx            # Skill/tech tag badge
│   │       └── ParticlesBackground.tsx  # CSS-only particle dots
│   ├── data/
│   │   └── portfolioData.ts       # ← All content lives here
│   ├── hooks/
│   │   └── useScrollSpy.ts        # Active nav link detection
│   ├── types/
│   │   └── index.ts               # TypeScript interfaces
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css                  # Tailwind + custom utilities
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Customization Guide

### Update Personal Information

Edit `src/data/portfolioData.ts`:

```ts
personal: {
  name: 'Your Full Name',
  email: 'your@email.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  whatsapp: 'https://wa.me/628xxxxxxxxxx',
  cvUrl: '/cv.pdf',
  avatar: '/images/photo.jpg',  // Add your photo
}
```

### Add a Profile Photo

1. Copy your photo to `public/images/photo.jpg`
2. Set `avatar: '/images/photo.jpg'` in `portfolioData.ts`

The Hero section's `DataVisual` SVG will be replaced when you add a photo. Alternatively, in `Hero.tsx`, replace `<DataVisual />` with:
```tsx
<img src="/images/photo.jpg" alt="Fransius Toni Gabriel Tamba" className="w-full h-full object-cover rounded-3xl" />
```

### Replace the CV

Replace `public/cv.pdf` with your real CV PDF file.

### Add Project Images

1. Save screenshots to `public/images/projects/ecoroute-main.png` (etc.)
2. In `portfolioData.ts`, update the `images` array for each project:
```ts
images: [
  { src: '/images/projects/ecoroute-main.png', alt: 'EcoRoute AI — Main Dashboard' },
  ...
]
```

### Add Real Certificates

In `portfolioData.ts`, replace the placeholder certificates:
```ts
certificates: [
  {
    id: 'cert-aws-cloud',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2025',
    credential: 'https://aws.amazon.com/verification/...',
    image: '/images/certificates/aws-cloud.jpg',
  },
  ...
]
```

### Update Project Links

In `portfolioData.ts`, update the `github` and `demo` fields for each project:
```ts
github: 'https://github.com/fransiustoni/ecoroute-ai',
demo: 'https://ecoroute.streamlit.app',
```

### Enable Real Contact Form

The form currently uses `mailto:`. For automated delivery, integrate one of these:

**Formspree** (no code needed):
1. Create an account at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint, e.g. `https://formspree.io/f/xabc1234`
3. In `Contact.tsx`, replace the `handleSubmit` function body with:
```ts
const res = await fetch('https://formspree.io/f/xabc1234', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
if (res.ok) setSent(true);
```

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

Or connect your GitHub repository to [vercel.com](https://vercel.com) and it will auto-deploy on push.

### Netlify

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir dist
```

Or drag and drop the `dist/` folder at [netlify.com/drop](https://netlify.com/drop).

### GitHub Pages

```bash
npm install --save-dev gh-pages
# Add to package.json scripts:
# "deploy": "gh-pages -d dist"
npm run build
npm run deploy
```

---

## License

MIT — free to use and adapt for your own portfolio.
